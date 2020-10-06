using rsdl.parser.model;
using Superpower;
using Superpower.Parsers;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace rsdl.parser
{

    /// <summary>
    /// Rapid data model parser
    /// </summary>
    public class RdmParser
    {
        public class ParserDiagnostics
        {
            public TimeSpan TokenizationTime { get; internal set; }
            public TimeSpan ParsingTime { get; internal set; }
        }

        public static RdmDataModel Parse(string content, out ParserDiagnostics diagnostis)
        {
            diagnostis = new ParserDiagnostics();

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

            return model;
        }

        private static readonly object unit = new object();

        static TokenListParser<RdmToken, object> Keyword(string name) =>
                Token.EqualToValue(RdmToken.Identifier, name).Value(unit);

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

        static readonly TokenListParser<RdmToken, string> TypeName =
            from prefix in EdmPrefix.OptionalOrDefault()
            from name in Token.EqualTo(RdmToken.Identifier)
            select prefix == null ? name.ToStringValue() : prefix + "." + name.ToStringValue();

        static readonly TokenListParser<RdmToken, model.RdmTypeReference> TypeReference =
            (
                from type in (
                    from name in TypeName
                    from opt in Token.EqualTo(RdmToken.QuestionMark).Optional()
                    select (name, opt)
                ).Between(RdmToken.LeftBracket, RdmToken.RightBracket)
                select new model.RdmTypeReference(type.name, type.opt != null, true)
            ).Or(
                from name in TypeName
                from opt in Token.EqualTo(RdmToken.QuestionMark).Optional()
                select new model.RdmTypeReference(name, opt != null, false)
            ).Named(
                "type reference"
            );

        static readonly TokenListParser<RdmToken, model.RdmProperty> Property =
            from ka in KeyAnnotation.OptionalOrDefault()
            from nm in Token.EqualTo(RdmToken.Identifier)
            from co in Token.EqualTo(RdmToken.Colon)
            from ty in TypeReference
            select new model.RdmProperty
            {
                Name = nm.ToStringValue(),
                PropType = ty,
                Annotations = NonNull(ka).ToArray(),
                Position = nm.GetPosition()
            };

        static readonly TokenListParser<RdmToken, model.RdmParameter> Parameter =

            from nm in Token.EqualTo(RdmToken.Identifier)
            from op in Token.EqualTo(RdmToken.QuestionMark).Optional()
            from co in Token.EqualTo(RdmToken.Colon)
            from ty in TypeReference
            select new model.RdmParameter
            {
                Name = nm.ToStringValue(),
                PropType = ty,
                IsOptional = op.HasValue,
                Position = nm.GetPosition()
            };

        static readonly TokenListParser<RdmToken, model.RdmOperation> Function =
            from aa in ActionAnnotation.OptionalOrDefault()
            from nm in Token.EqualTo(RdmToken.Identifier)
            from ps in Parameter.ManyDelimitedBy(Token.EqualTo(RdmToken.Comma))                    // parameters
                .Between(RdmToken.LeftParentheses, RdmToken.RightParentheses)
            from rt in Token.EqualTo(RdmToken.Colon).IgnoreThen(TypeReference).OptionalOrDefault() // optional return type
            select new model.RdmOperation
            {
                Name = nm.ToStringValue(),
                ReturnType = rt,
                Parameters = ps,
                Annotations = NonNull(aa).ToArray(),
                Position = nm.GetPosition()
            };

        static readonly TokenListParser<RdmToken, object> TypeMember =
            (
                Function.Cast<RdmToken, RdmOperation, object>()
            ).Try().Or(
                Property.Cast<RdmToken, RdmProperty, object>()
            );

        static readonly TokenListParser<RdmToken, model.RdmStructuredType> TypeDefinition =
            from kw in Token.EqualToValue(RdmToken.Identifier, "type")
            from nm in Token.EqualTo(RdmToken.Identifier)
            from ps in TypeMember.Many().Between(Token.EqualTo(RdmToken.LeftBrace), Token.EqualTo(RdmToken.RightBrace))
            select new model.RdmStructuredType
            {
                Name = nm.ToStringValue(),
                Properties = ps.OfType<model.RdmProperty>().ToList(),
                Functions = ps.OfType<model.RdmOperation>().ToList(),
            };


        static readonly TokenListParser<RdmToken, model.RdmEnum> EnumDefinition =
             from kw in Token.EqualToValue(RdmToken.Identifier, "enum")
             from nm in Token.EqualTo(RdmToken.Identifier)
             from ps in Token.EqualTo(RdmToken.Identifier).Many().Between(Token.EqualTo(RdmToken.LeftBrace), Token.EqualTo(RdmToken.RightBrace))
             select new model.RdmEnum
             {
                 Name = nm.ToStringValue(),
                 Members = ps.Select(t => t.ToStringValue()).ToList()
             };

        #region service

        // entityset = identifier ':' '[' identifier ']'
        // singelton = identifier ':' identifier
        static readonly TokenListParser<RdmToken, model.IRdmServiceElement> ServiceElement =
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
                ? (model.IRdmServiceElement)new model.RdmServiceCollection { Name = nm.ToStringValue(), Type = new RdmTypeReference(ty.id.ToStringValue()) }
                : (model.IRdmServiceElement)new model.RdmServiceSingelton { Name = nm.ToStringValue(), Type = new RdmTypeReference(ty.id.ToStringValue()) };

        static readonly TokenListParser<RdmToken, model.RdmService> Service =
            from kw in Token.EqualToValue(RdmToken.Identifier, "service")
            from es in ServiceElement.Many().Between(Token.EqualTo(RdmToken.LeftBrace), Token.EqualTo(RdmToken.RightBrace))
            select new model.RdmService { Items = es };
        #endregion

        static readonly TokenListParser<RdmToken, string> QuotedString = Token
            .EqualTo(RdmToken.QuotedString)
            .Apply(TextParsers.ExtractQuotedString);

        static readonly TokenListParser<RdmToken, RdmNamespaceDeclaration> NamespaceDeclaration =
                   from kw in Token.EqualToValue(RdmToken.Identifier, "namespace")
                   from nm in QualifiedIdentifier
                   select new RdmNamespaceDeclaration { NamespaceName = nm };

        static readonly TokenListParser<RdmToken, model.IRdmSchemaElement> SchemaElement =
            ParserCombinators.OneOf<RdmToken, model.IRdmSchemaElement, model.RdmStructuredType, model.RdmService, model.RdmEnum>(
                TypeDefinition,
                Service,
                EnumDefinition);

        // TODO: check for EOF
        public static readonly TokenListParser<RdmToken, model.RdmDataModel> DataModel =
           from ns in NamespaceDeclaration.OptionalOrDefault()
           from es in SchemaElement.Many()
           select new model.RdmDataModel { Namespace = ns, Items = es };

        static IEnumerable<T> NonNull<T>(params T[] items) => items.Where(item => item != null);
    }
}
