using System.Collections.Generic;
using System.Linq;
using rapid.rdm;
using Superpower;
using Superpower.Parsers;

namespace rapid.rsdl
{
    internal static class Parsers
    {
        static TokenListParser<RdmToken, string> Keyword(string name) =>
            Token.EqualToValue(RdmToken.Identifier, name).Value(name);

        static readonly TokenListParser<RdmToken, CompositeIdentifier> QualifiedIdentifier =
            from head in Token.EqualTo(RdmToken.Identifier)
            from tail in (from d in Token.EqualTo(RdmToken.FullStop) from i in Token.EqualTo(RdmToken.Identifier) select i).Many()
            select new CompositeIdentifier(
                string.Join(".", tail.Prepend(head).Select(i => i.ToStringValue())),
                head.GetPosition()
            );

        #region type references


        // "(" number "," number)
        static readonly TokenListParser<RdmToken, (int Precision, int Scale)> DecimalFacetParameters =
             from p in Token.EqualTo(RdmToken.Number)
             from c in Token.EqualTo(RdmToken.Comma)
             from s in Token.EqualTo(RdmToken.Number)
             select (int.Parse(p.ToStringValue()), int.Parse(s.ToStringValue()));

        static readonly TokenListParser<RdmToken, int> StringFacetParameters =
            from l in Token.EqualTo(RdmToken.Number)
            select int.Parse(l.ToStringValue());

        static readonly TokenListParser<RdmToken, (string Name, RdmTypeReferenceFacets Facets, Position Position)> FacetedReference =
            (
                from id in Token.EqualToValue(RdmToken.Identifier, "String")
                from ml in StringFacetParameters.Between(RdmToken.OpeningParentheses, RdmToken.ClosingParentheses)
                select (id.ToStringValue(), new RdmTypeReferenceFacets { MaxLength = ml }, id.GetPosition())
            ).Try().Or(
                from id in Token.EqualToValue(RdmToken.Identifier, "Decimal")
                from ps in DecimalFacetParameters.Between(RdmToken.OpeningParentheses, RdmToken.ClosingParentheses)
                select (id.ToStringValue(), new RdmTypeReferenceFacets { Precision = ps.Precision, Scale = ps.Scale }, id.GetPosition())
            ).Try().Or(
                from qi in QualifiedIdentifier
                select (qi.Name, RdmTypeReferenceFacets.None, qi.Position)
            );

        static readonly TokenListParser<RdmToken, (string Name, RdmTypeReferenceFacets Facets, Position Position)> NullableReference =
            from @ref in FacetedReference
            from opt in Token.EqualTo(RdmToken.QuestionMark).Optional()
            select (@ref.Name, @ref.Facets with { IsNullable = opt != null }, @ref.Position);

        static readonly TokenListParser<RdmToken, rdm.RdmTypeReference> TypeReference =
            (
                from @ref in NullableReference.Between(RdmToken.OpeningBracket, RdmToken.ClosingBracket)
                select new rdm.RdmTypeReference(@ref.Name, @ref.Facets with { IsMultivalued = true }, @ref.Position)
            ).Or(
                from @ref in NullableReference
                select new rdm.RdmTypeReference(@ref.Name, @ref.Facets, @ref.Position)
            ).Named(
                "type reference"
            );

        #endregion // type references

        static readonly TokenListParser<RdmToken, rdm.Annotation> Annotation =
            from at in Token.EqualTo(RdmToken.AtSign)
            from nm in QualifiedIdentifier
            from co in Token.EqualTo(RdmToken.Colon)
            from ex in ExpressionParsers.Expression
            select new rdm.Annotation(nm.Name, ex, at.GetPosition());

        #region structured types
        static readonly TokenListParser<RdmToken, rdm.RdmProperty> Property =
            from annotations in Annotation.Many()
            from key in Keyword("key").OptionalOrDefault().Try()
            from name in Token.EqualTo(RdmToken.Identifier)
            from colon in Token.EqualTo(RdmToken.Colon)
            from propType in TypeReference
            select new rdm.RdmProperty
            (
                name.ToStringValue(),
                propType,
                key != null,
                annotations
            )
            {
                Position = name.GetPosition()
            };

        static readonly TokenListParser<RdmToken, rdm.RdmParameter> Parameter =
            from aa in Annotation.Many()
            from nm in Token.EqualTo(RdmToken.Identifier)
            from op in Token.EqualTo(RdmToken.QuestionMark).Optional()
            from co in Token.EqualTo(RdmToken.Colon)
            from ty in TypeReference
            select new rdm.RdmParameter(
                nm.ToStringValue(),
                ty,
                op.HasValue,
                aa,
                nm.GetPosition()
            );

        static readonly TokenListParser<RdmToken, rdm.RdmParameter> ReturnParameter =
            from co in Token.EqualTo(RdmToken.Colon)
            from aa in Annotation.Many()
            from ty in TypeReference
            select new rdm.RdmParameter(null, ty, false, aa, co.GetPosition());

        static readonly TokenListParser<RdmToken, rdm.RdmOperation> Function =
            from aa in Annotation.Many()
            from fn in Keyword("function")
            from nm in Token.EqualTo(RdmToken.Identifier)
            from ps in Parameter.ManyDelimitedBy(Token.EqualTo(RdmToken.Comma)).Between(RdmToken.OpeningParentheses, RdmToken.ClosingParentheses)
            from rt in ReturnParameter
            select new rdm.RdmOperation(
                RdmOperationKind.Function,
                nm.ToStringValue(),
                ps,
                rt,
                aa,
                nm.GetPosition()
            );

        static readonly TokenListParser<RdmToken, rdm.RdmOperation> Action =
            from aa in Annotation.Many()
            from ac in Keyword("action")
            from nm in Token.EqualTo(RdmToken.Identifier)
            from ps in Parameter.ManyDelimitedBy(Token.EqualTo(RdmToken.Comma)).Between(RdmToken.OpeningParentheses, RdmToken.ClosingParentheses)
            from rt in ReturnParameter.OptionalOrDefault()
            select new rdm.RdmOperation(
                RdmOperationKind.Action,
                nm.ToStringValue(),
                ps,
                rt,
                aa,
                nm.GetPosition()
            );

        // Type members have no common supertype since they are stored in two different collection properties
        static readonly TokenListParser<RdmToken, object> TypeMember =
            (
                Property.Cast<RdmToken, RdmProperty, object>()
            ).Try().Or(
                Function.Cast<RdmToken, RdmOperation, object>()
            ).Try().Or(
                Action.Cast<RdmToken, RdmOperation, object>()
            );

        static readonly TokenListParser<RdmToken, Superpower.Model.Token<RdmToken>> Extends =
            from kw in Keyword("extends")
            from id in Token.EqualTo(RdmToken.Identifier)
            select id;

        static readonly TokenListParser<RdmToken, rdm.RdmStructuredType> TypeDefinition =
            from aa in Annotation.Many()
            from ab in Keyword("abstract").Value(true).Optional().Try()
            from kw in Token.EqualToValue(RdmToken.Identifier, "type")
            from nm in Token.EqualTo(RdmToken.Identifier)
            from ih in Extends.Optional().Try()
            from ps in TypeMember.Many().Between(Token.EqualTo(RdmToken.OpeningBrace), Token.EqualTo(RdmToken.ClosingBrace))
            select new rdm.RdmStructuredType(
                nm.ToStringValue(),
                ih.HasValue ? ih.Value.ToStringValue() : null,
                ps.OfType<rdm.RdmProperty>().ToList(),
                ps.OfType<rdm.RdmOperation>().ToList(),
                ab != null,
                aa,
                kw.GetPosition()
            );
        #endregion

        #region enum types
        static readonly TokenListParser<RdmToken, rdm.RdmEnumMember> EnumMember =
            from aa in Annotation.Many()
            from id in Token.EqualTo(RdmToken.Identifier)
            select new RdmEnumMember(id.ToStringValue(), aa, id.GetPosition());

        static readonly TokenListParser<RdmToken, rdm.RdmEnumType> EnumDefinition =
            from aa in Annotation.Many()
            from kw in (
                    Token.EqualToValue(RdmToken.Identifier, "enum").Value(false)
                ).Or(
                    Token.EqualToValue(RdmToken.Identifier, "flags").Value(true)
                )
            from nm in Token.EqualTo(RdmToken.Identifier)
            from me in EnumMember.Many().Between(Token.EqualTo(RdmToken.OpeningBrace), Token.EqualTo(RdmToken.ClosingBrace))
            select new rdm.RdmEnumType(nm.ToStringValue(), me, kw, aa, nm.GetPosition());
        #endregion

        #region service

        // entityset = identifier ':' '[' identifier ']'
        // singelton = identifier ':' identifier

        static readonly TokenListParser<RdmToken, (string id, bool multivalue)> Single =
            from id in Token.EqualTo(RdmToken.Identifier).Between(Token.EqualTo(RdmToken.OpeningBracket), Token.EqualTo(RdmToken.ClosingBracket))
            select (id.ToStringValue(), multivalue: true);

        static readonly TokenListParser<RdmToken, (string id, bool multivalue)> Multiple =
            from id in Token.EqualTo(RdmToken.Identifier)
            select (id.ToStringValue(), multivalue: false);

        static readonly TokenListParser<RdmToken, rdm.IRdmServiceElement> ServiceProperty =
            from aa in Annotation.Many()
            from nm in Token.EqualTo(RdmToken.Identifier)
            from dp in Token.EqualTo(RdmToken.Colon)
            from ty in (Single).Or(Multiple)
            let re = new RdmTypeReference(ty.id, RdmTypeReferenceFacets.None)
            select ty.multivalue
                ? (rdm.IRdmServiceElement)new rdm.RdmServiceCollection(nm.ToStringValue(), re, aa)
                : (rdm.IRdmServiceElement)new rdm.RdmServiceSingleton(nm.ToStringValue(), re, aa);

        static readonly TokenListParser<RdmToken, rdm.IRdmServiceElement> UnboundFunction =
           Function.Cast<RdmToken, rdm.RdmOperation, rdm.IRdmServiceElement>();

        static readonly TokenListParser<RdmToken, rdm.IRdmServiceElement> UnboundAction =
            Action.Cast<RdmToken, rdm.RdmOperation, rdm.IRdmServiceElement>();

        static readonly TokenListParser<RdmToken, rdm.IRdmServiceElement> ServiceElement =
            (ServiceProperty).Try().Or(UnboundFunction).Try().Or(UnboundAction);

        static readonly TokenListParser<RdmToken, rdm.RdmService> Service =
            from aa in Annotation.Many()
            from kw in Token.EqualToValue(RdmToken.Identifier, "service")
            from nm in Token.EqualTo(RdmToken.Identifier).Optional()
            from es in ServiceElement.Many().Between(Token.EqualTo(RdmToken.OpeningBrace), Token.EqualTo(RdmToken.ClosingBrace))
            select new rdm.RdmService(nm.HasValue ? nm.Value.ToStringValue() : null, es, aa, kw.GetPosition());

        #endregion

        static readonly TokenListParser<RdmToken, rdm.IRdmSchemaElement> SchemaElement =
            (
                TypeDefinition.Try().Cast<RdmToken, RdmStructuredType, IRdmSchemaElement>()
            ).Or(
                EnumDefinition.Try().Cast<RdmToken, RdmEnumType, IRdmSchemaElement>()
            ).Or(
                Service.Try().Cast<RdmToken, RdmService, IRdmSchemaElement>()
            );

        static readonly TokenListParser<RdmToken, RdmNamespaceDeclaration> NamespaceDeclaration =
                   from kw in Token.EqualToValue(RdmToken.Identifier, "namespace")
                   from nm in QualifiedIdentifier
                   select new RdmNamespaceDeclaration(nm.Name)
                   {
                       Position = kw.GetPosition()
                   };

        static readonly TokenListParser<RdmToken, RdmNamespaceReference> NamespaceReference =
            from k1 in Token.EqualToValue(RdmToken.Identifier, "include")
            from pa in Token.EqualTo(RdmToken.QuotedString)
            from k2 in Token.EqualToValue(RdmToken.Identifier, "as")
            from al in Token.EqualTo(RdmToken.Identifier)
            select new RdmNamespaceReference(pa.ToStringValue().Trim('"'), al.ToStringValue())
            {
                Position = k1.GetPosition()
            };

        public static readonly TokenListParser<RdmToken, rdm.RdmDataModel> DataModel =
           (
                from nd in NamespaceDeclaration.OptionalOrDefault()
                from nr in NamespaceReference.Many()
                from se in SchemaElement.Many()
                select new rdm.RdmDataModel(nd, se, nr)
            ).AtEnd();

        static IEnumerable<T> NonNull<T>(params T[] items) => items.Where(item => item != null);
    }
}
