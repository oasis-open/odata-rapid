using Superpower;
using Superpower.Parsers;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using rapid.rdm;
using System.Runtime.Serialization;

namespace rapid.rsdl
{
    /// <summary>
    /// Rapid data model parser
    /// </summary>
    public class RdmParser
    {
        public class Diagnostics
        {
            public TimeSpan TokenizationTime { get; internal set; }
            public TimeSpan ParsingTime { get; internal set; }
            public TimeSpan ValidationTime { get; internal set; }
        }

        public static RdmDataModel Parse(string content, out Diagnostics diagnostis)
        {
            diagnostis = new Diagnostics();

            // 1. tokenize
            var sw = Stopwatch.StartNew();
            var tokenizer = RdmTokenizer.Tokenizer;
            var tokenList = tokenizer.Tokenize(content);
            sw.Stop();
            diagnostis.TokenizationTime = sw.Elapsed;

            // 2. parse
            sw.Start();
            var parser = RdmParser.DataModel;
            var model = parser.Parse(tokenList);
            diagnostis.ParsingTime = sw.Elapsed;

            // 3. semantic validation
            sw.Start();
            var validator = new RdmValidator();
            if (!validator.Validate(model, out var errors))
            {
                // TODO: better error reporting
                throw new ParseException("validation failed" + string.Join("\n", errors));
            }
            diagnostis.ValidationTime = sw.Elapsed;

            return model;
        }

        public static RdmDataModel Parse(string content)
        {
            var tokenizer = RdmTokenizer.Tokenizer;
            var tokenList = tokenizer.Tokenize(content);

            var parser = RdmParser.DataModel;
            var model = parser.Parse(tokenList);

            var validator = new RdmValidator();
            if (!validator.Validate(model, out var errors))
            {
                // TODO: better error reporting
                throw new ValidationException("validation failed", errors);
            }

            return model;
        }

        private static readonly object unit = new object();

        static TokenListParser<RdmToken, object> Keyword(string name) =>
                Token.EqualToValue(RdmToken.Identifier, name).Value(unit);

        static readonly TokenListParser<RdmToken, string> QuotedString = Token
            .EqualTo(RdmToken.QuotedString)
            .Apply(TextParsers.ExtractQuotedString);

        static readonly TokenListParser<RdmToken, IAnnotation> KeyAnnotation =
            from dp in Token.EqualTo(RdmToken.AtSign)
            from nm in Keyword("key")
            select (IAnnotation)new KeyAnnotation();

        static readonly TokenListParser<RdmToken, IAnnotation> ActionAnnotation =
           from dp in Token.EqualTo(RdmToken.AtSign)
           from nm in Keyword("action")
           select (IAnnotation)new ActionAnnotation();

        static readonly TokenListParser<RdmToken, string> Identifier = Token
            .EqualTo(RdmToken.Identifier)
            .Select(t => t.ToStringValue());

        static readonly TokenListParser<RdmToken, string> QualifiedIdentifier =
            from head in Identifier
            from tail in (from d in Token.EqualTo(RdmToken.FullStop) from i in Identifier select i).Many()
            select string.Join(".", tail.Prepend(head));

        static readonly TokenListParser<RdmToken, string> EdmPrefix =
            from pre in Token.EqualToValue(RdmToken.Identifier, "Edm")
            from dot in Token.EqualTo(RdmToken.FullStop)
            select pre.ToStringValue();


        static readonly TokenListParser<RdmToken, rdm.RdmTypeReference> TypeReference =
            (
                from type in (
                    from name in QualifiedIdentifier
                    from opt in Token.EqualTo(RdmToken.QuestionMark).Optional()
                    select (name, opt)
                ).Between(RdmToken.LeftBracket, RdmToken.RightBracket)
                select new rdm.RdmTypeReference(type.name, type.opt != null, true)
            ).Or(
                from name in QualifiedIdentifier
                from opt in Token.EqualTo(RdmToken.QuestionMark).Optional()
                select new rdm.RdmTypeReference(name, opt != null, false)
            ).Named(
                "type reference"
            );

        static readonly TokenListParser<RdmToken, rdm.RdmProperty> Property =
            from ka in KeyAnnotation.OptionalOrDefault()
            from nm in Token.EqualTo(RdmToken.Identifier)
            from co in Token.EqualTo(RdmToken.Colon)
            from ty in TypeReference
            select new rdm.RdmProperty
            (
                nm.ToStringValue(),
                ty,
                NonNull(ka).ToList(),
                nm.GetPosition()
            );

        static readonly TokenListParser<RdmToken, rdm.RdmParameter> Parameter =

            from nm in Token.EqualTo(RdmToken.Identifier)
            from op in Token.EqualTo(RdmToken.QuestionMark).Optional()
            from co in Token.EqualTo(RdmToken.Colon)
            from ty in TypeReference
            select new rdm.RdmParameter(
                nm.ToStringValue(),
                ty,
                op.HasValue,
                null,
                nm.GetPosition()
            );

        static readonly TokenListParser<RdmToken, rdm.RdmOperation> Function =
            from aa in ActionAnnotation.OptionalOrDefault()
            from nm in Token.EqualTo(RdmToken.Identifier)
            from ps in Parameter.ManyDelimitedBy(Token.EqualTo(RdmToken.Comma))                    // parameters
                .Between(RdmToken.LeftParentheses, RdmToken.RightParentheses)
            from rt in Token.EqualTo(RdmToken.Colon).IgnoreThen(TypeReference).OptionalOrDefault() // optional return type
            select new rdm.RdmOperation
            (
                nm.ToStringValue(),
                rt,
                ps,
                NonNull(aa).ToArray(),
                nm.GetPosition()
            );

        static readonly TokenListParser<RdmToken, object> TypeMember =
            (
                Function.Cast<RdmToken, RdmOperation, object>()
            ).Try().Or(
                Property.Cast<RdmToken, RdmProperty, object>()
            );

        static readonly TokenListParser<RdmToken, rdm.RdmStructuredType> TypeDefinition =
            from kw in Token.EqualToValue(RdmToken.Identifier, "type")
            from nm in Token.EqualTo(RdmToken.Identifier)
            from ps in TypeMember.Many().Between(Token.EqualTo(RdmToken.LeftBrace), Token.EqualTo(RdmToken.RightBrace))
            select new rdm.RdmStructuredType(
                nm.ToStringValue(),
                ps.OfType<rdm.RdmProperty>().ToList(),
                ps.OfType<rdm.RdmOperation>().ToList()
            );


        static readonly TokenListParser<RdmToken, rdm.RdmEnum> EnumDefinition =
            from kw in Token.EqualToValue(RdmToken.Identifier, "enum")
            from nm in Token.EqualTo(RdmToken.Identifier)
            from ps in Token.EqualTo(RdmToken.Identifier).Many().Between(Token.EqualTo(RdmToken.LeftBrace), Token.EqualTo(RdmToken.RightBrace))
            select new rdm.RdmEnum(
                nm.ToStringValue(),
                ps.Select(t => t.ToStringValue()).ToList()
            );

        #region service

        // entityset = identifier ':' '[' identifier ']'
        // singelton = identifier ':' identifier
        static readonly TokenListParser<RdmToken, rdm.IRdmServiceElement> ServiceElement =
              from nm in Token.EqualTo(RdmToken.Identifier)
              from dp in Token.EqualTo(RdmToken.Colon)
              from ty in (
                    from id in Token.EqualTo(RdmToken.Identifier).Between(Token.EqualTo(RdmToken.LeftBracket), Token.EqualTo(RdmToken.RightBracket))
                    select (id, multivalue: true)
                ).Or(
                    from id in Token.EqualTo(RdmToken.Identifier)
                    select (id, multivalue: false)
                )
              select ty.multivalue
                ? (rdm.IRdmServiceElement)new rdm.RdmServiceCollection(nm.ToStringValue(), new RdmTypeReference(ty.id.ToStringValue()))
                : (rdm.IRdmServiceElement)new rdm.RdmServiceSingelton(nm.ToStringValue(), new RdmTypeReference(ty.id.ToStringValue()));

        static readonly TokenListParser<RdmToken, rdm.RdmService> Service =
            from kw in Token.EqualToValue(RdmToken.Identifier, "service")
            from es in ServiceElement.Many().Between(Token.EqualTo(RdmToken.LeftBrace), Token.EqualTo(RdmToken.RightBrace))
            select new rdm.RdmService(es);
        #endregion

        static readonly TokenListParser<RdmToken, rdm.IRdmSchemaElement> SchemaElement =
            ParserCombinators.OneOf<RdmToken, rdm.IRdmSchemaElement, rdm.RdmStructuredType, rdm.RdmService, rdm.RdmEnum>(
                TypeDefinition,
                Service,
                EnumDefinition);

        static readonly TokenListParser<RdmToken, RdmNamespaceDeclaration> NamespaceDeclaration =
                   from kw in Token.EqualToValue(RdmToken.Identifier, "namespace")
                   from nm in QualifiedIdentifier
                   select new RdmNamespaceDeclaration(nm);

        static readonly TokenListParser<RdmToken, RdmNamespaceReference> NamespaceReference =
                   from kw in Token.EqualToValue(RdmToken.Identifier, "include")
                   from nm in QualifiedIdentifier
                   from al in (
                       from k2 in Token.EqualToValue(RdmToken.Identifier, "as")
                       from al in Identifier
                       select al
                   ).OptionalOrDefault()
                   from k3 in Token.EqualToValue(RdmToken.Identifier, "from")
                   from ur in QuotedString
                   select new RdmNamespaceReference(nm, al, ur);


        // TODO: check for EOF
        public static readonly TokenListParser<RdmToken, rdm.RdmDataModel> DataModel =
           from nd in NamespaceDeclaration.OptionalOrDefault()
           from nr in NamespaceReference.Many()
           from se in SchemaElement.Many()
           select new rdm.RdmDataModel(nd, se, nr);

        static IEnumerable<T> NonNull<T>(params T[] items) => items.Where(item => item != null);
    }

}
