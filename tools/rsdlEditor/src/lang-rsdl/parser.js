// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
const spec_Identifier = {__proto__:null,type:12, key:22, function:42, action:52, true:60, false:62, null:64, service:76, enum:82, flags:86}
export const parser = LRParser.deserialize({
  version: 14,
  states: "-UQYQPOOOhQPO'#DYOOQO'#Dd'#DdOOQO'#DZ'#DZQYQPOOOyQPO'#CaO!OQPO'#DROOQO,59t,59tO!WQPO,59tOOQO-E7X-E7XOOQO'#Cc'#CcO!iQPO,58{O!nQPO,59mO#VQPO,59mOOQO1G/`1G/`O#[QPO1G.gOOQO'#Ch'#ChO#mQPO'#CfO#rQPO'#CwOOQO'#Ce'#CeOOQO'#DT'#DTO#zQPO'#CfO$PQPO'#CpO$UQPO'#CuOyQPO'#DUO$ZQPO1G/XO!nQPO1G/XO$`QPO7+$RO$eQPO,59QO$pQPO'#ClOOQO'#Cl'#ClO%XQPO,59cO%^QPO,59QO%cQPO,59[O%cQPO,59aO%hQPO,59pOOQO7+$s7+$sO%mQPO7+$sOOQO<<Gm<<GmO%rQPO'#CkO#rQPO'#CoOOQO'#Cj'#CjOOQO1G.l1G.lO&TQPO'#D[O&]QPO,59WO'VQPO1G.}O$eQPO1G.lO'^QPO'#CrO'fQPO1G.vOOQO1G.{1G.{O'kQPO1G/[OOQO<<H_<<H_OOQO,59Y,59YO'sQPO,59ZOOQO,59v,59vOOQO-E7Y-E7YO'xQPO'#C}OOQO'#Cy'#CyOOQO'#Cx'#CxOOQO7+$i7+$iO(QQPO7+$iOOQO7+$W7+$WO(XQPO'#CtO(^QPO'#CsO(fQPO,59^O$eQPO7+$bO(kQPO'#DWO(sQPO7+$vOOQO1G.u1G.uOOQO'#D^'#D^O(xQPO,59iO)WQPO,59iO)]QPO'#DQO)eQPO<<HTO$eQPO,59`O#zQPO'#D]O)jQPO,59_OOQO1G.x1G.xOOQO<<G|<<G|OOQO'#D`'#D`O)rQPO,59rOOQO<<Hb<<HbOOQO-E7[-E7[O)zQPO1G/TO&tQPO'#D_O*YQPO,59lOOQOAN=oAN=oOOQO1G.z1G.zOOQO,59w,59wOOQO-E7Z-E7ZOOQO-E7^-E7^OOQO,59y,59yOOQO-E7]-E7]",
  stateData: "*b~O!VOSPOS~ORQOUTOvUO!^PO~ORQOUTOvUO!]VO!^PO~ORYO~ORYOW[O~ORQOUTOvUO!]^O!^PO~OW_O~OR`OZeOefOjgOyhO{hO!`bO~OWjO~OR`OZeOefOjgO!`bO~O]lO~ORmOanO~OR`O~ORqO~ORrO~OStO~OSvO~ORmOanO!ZxO~O!X{O]`XS`X!Y`X![`X!]`X!_`X~O]}O~O]!OO~O!^!PO~OW!SO~OS!TO~O!Y!UOS_X![_X!]_X!__X~OR!WOa!WO~O!X{O]`aS`a!Y`a![`a!]`a!_`a~On!ZOo!ZOp!ZOr!YOs!ZO~O!Z!^O~P&tOR`O!]gP~O]!cO~OR!dOSzP~O![!fO~Or!gO!X!iO~O![tP~P&tO]!lO~O!_!mO!]gX~O!]!oO~OR!qOSzX~OS!sO~Or!gOSqa![qa!_qa~Or!gO~O!_!vO![tX~O![!xO~O!_!mO!]ga~OR!qOSza~Or!gOSqi![qi!_qi~O!_!vO![ta~O",
  goto: "&Q!XPPPPP!YP!`P!i!pP!uP#R#_#hP#_#r!pP#x$O$R!pP!p$X$bPPP$gPP$l!YP$o$uP$yP!Y$|%W%^%d%n%tPPP%zXQOPSWQZTQ]URshSd[jRk_Vc[_jUa[_jQpeT!`!P!mQzlQ!_!OQ!p!cR!y!lWyl!O!c!lR!VxQobZwlx!O!c!lXyl!O!c!lQ!QqR!RrR!b!PQ!a!PR!z!mQ!]}Q!j!^R!}!vV![}!^!vV!Z}!^!vR!k!^Qi[RujTd[jR!e!SQSOQWPTXSWQ|mR!X|Q!n!aR!{!nQ!h!YS!t!h!uR!u!iQ!w!jR#O!wQ!r!dR!|!rXROPSW",
  nodeNames: "⚠ LineComment Program Identifier } TypeDefinition type DefinitionName { TypeBodyDefinition FieldDefinition key VariableName : FieldType RequiredType TypeRefName CapitalIdentifier OptionalType MultiValuedType FunctionDefinition function FormalParameters CommaSepParams FormalParameter ActionDefinition action AnnotationDefinition AnnotationValue Literal true false null NumberLiteral Digits StringLiteral CommaSepAnnotationValues ServiceDefinition service ServiceBodyDefinition EnumDefinition enum SpaceSepIds flags Application",
  maxTerm: 62,
  skippedNodes: [0,1],
  repeatNodeCount: 6,
  tokenData: "&W~RfXY!gYZ!g]^!gpq!grs!xst#ptu#{xy$ayz$f|}$k!O!P$p!Q![$u![!]$}!a!b%S!b!c%X!c!}%^!}#O%r#P#Q%w#R#S#{#T#o#{#o#p%|#q#r&R~!lS!V~XY!gYZ!g]^!gpq!g~!{UOY!xZr!xrs#_s#O!x#O#P#d#P~!x~#dOs~~#gROY!xYZ!xZ~!x~#uQP~OY#pZ~#p~$QTR~tu#{!Q![#{!c!}#{#R#S#{#T#o#{~$fO!^~~$kO!]~~$pO!_~~$uO!X~~$zPr~!Q![$u~%SO]~~%XO!Y~~%^O!`~~%cTa~tu%^!Q![%^!c!}%^#R#S%^#T#o%^~%wO!Z~~%|O![~~&ROW~~&WOS~",
  tokenizers: [0],
  topRules: {"Program":[0,2]},
  specialized: [{term: 3, get: value => spec_Identifier[value] || -1}],
  tokenPrec: 0
})
