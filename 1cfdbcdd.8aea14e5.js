(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),i=(t(0),t(87)),o={id:"rsdl-abnf",title:"RAPID SDL ABNF"},l={unversionedId:"rsdl/rsdl-abnf",id:"rsdl/rsdl-abnf",isDocsHomePage:!1,title:"RAPID SDL ABNF",description:"RAPID Pro syntax",source:"@site/..\\docs\\rsdl\\rapid-pro-rsdl-abnf.md",slug:"/rsdl/rsdl-abnf",permalink:"/docs/rsdl/rsdl-abnf",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/rsdl/rapid-pro-rsdl-abnf.md",version:"current",sidebar:"docs",previous:{title:"RAPID Schema Definition Language Semantics",permalink:"/docs/rsdl/rsdl-semantics"},next:{title:"RAPID and OData",permalink:"/docs/related/odata"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Syntax rules",id:"syntax-rules",children:[{value:"Model",id:"model",children:[]},{value:"Structured Type",id:"structured-type",children:[]},{value:"Enumeration Type",id:"enumeration-type",children:[]},{value:"Service",id:"service",children:[]},{value:"Annotations",id:"annotations",children:[]},{value:"Core Syntax Elements",id:"core-syntax-elements",children:[]}]}],p={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"rapid-pro-syntax"},"RAPID Pro syntax"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"DRAFT\nDecember 2020")),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"This grammar uses ABNF as defined by ",Object(i.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5234"},"RFC5234"),", with the addition for case-sensitive strings defined by ",Object(i.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7405"},"RFC7405")),Object(i.b)("p",null,"Note: to increase readability of the grammar, whitespace is not reflected"),Object(i.b)("h2",{id:"syntax-rules"},"Syntax rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rapid-pro-syntax"},"RAPID Pro syntax"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#overview"},"Overview")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#syntax-rules"},"Syntax rules"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#model"},"Model")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#structured-type"},"Structured Type")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#enumeration-type"},"Enumeration Type")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#service"},"Service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#annotations"},"Annotations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#core-syntax-elements"},"Core Syntax Elements"))))))),Object(i.b)("h3",{id:"model"},"Model"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ABNF"},'model        = [ namespace ] *include *modelElement\n\nnamespace    = %s"namespace" qualifiedName\n\ninclude      = %s"include" DQUOTE 1*CHAR DQUOTE %s"as" identifier\n\nmodelElement = structuredType / enumType / service\n')),Object(i.b)("h3",{id:"structured-type"},"Structured Type"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ABNF"},'structuredType       = annotations %s"type" identifier "{" *structuredTypeMember "}"\n\nstructuredTypeMember = property / operation ; property, action, or function\n\nproperty             = annotations [propertyModifier] identifier ":" typeReference\n\npropertyModifier     = %s"key"\n\ntypeReference        = typeName [ "?" ] / "[" typeName [ "?" ] "]"\n\ntypeName             = builtInType / %s"Edm" "." identifier / qualifiedName\n\nbuiltInType          = %s"Integer" / %s"String" / %s"Boolean" / %s"DateTime" / %s"Date" / %s"Double" / %s"Decimal" / %s"TimeOfDay" / %s"Duration" \n\noperation            = annotations [operationModifier] identifier\n                       "(" [ parameter *("," parameter) ] ")"\n                       [ ":" annotations typeReference ]\n\noperationModifier    = %s"action" / %s"function"\n\nparameter            = annotations identifier ":" typeReference\n')),Object(i.b)("h3",{id:"enumeration-type"},"Enumeration Type"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ABNF"},'enumType             = annotations ( %s"enum" / $s"flags" ) identifier "{" 1*enumMember "}"\n\nenumMember           = identifier\n')),Object(i.b)("h3",{id:"service"},"Service"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ABNF"},'service              = %s"service" "{" 1*serviceMember "}"\n\nserviceMember        = entitySet / singleton / serviceOperation\n\nentitySet            = identifier ":" "[" qualifiedName "]"\n\nsingleton            = identifier ":" qualifiedName\n\nserviceOperation     = [ operationModifier ] identifier\n                       "(" [ parameter *("," parameter) ] ")"\n                       [ ":" typeReference ]\n')),Object(i.b)("h3",{id:"annotations"},"Annotations"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ABNF"},'annotations      = 1*annotation\n\nannotation       = "@" qualifiedName ":" annotationValue\n\nannotationValue  = "true"\n                 / "false"\n                 / "null"\n                 / number\n                 / DQUOTE 1*CHAR DQUOTE\n                 / "[" annotationValue *( [","] annotationValue ) [","] "]"\n                 / "{" property *( [","] property ) [","] "}"\n\nproperty         = propertyName ":" annotationValue\n\npropertyName     = identifier / DQUOTE 1*CHAR DQUOTE\n')),Object(i.b)("h3",{id:"core-syntax-elements"},"Core Syntax Elements"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ABNF"},'qualifiedName   = identifier *( "." identifier )\n\nidentifier      = identInitial *identSubsequent\n\nidentInitial    = ALPHA / "_" ; Note: actually all Unicode letters\n\nidentSubsequent = identInitial / DIGIT\n\nnumber          = DIGIT *DIGIT ["." *DIGIT ]\n\nALPHA  = %x41-5A / %x61-7A\n\nDIGIT  = %x30-39\n\nCHAR   = %x20-21 / %x23-5B / %x5D-10FFFF\n       / ESCAPE ESCAPE\n       / ESCAPE DQUOTE\n\nDQUOTE = %x22              ; "\n\nESCAPE = %x5C              ; \\\n')))}s.isMDXComponent=!0},87:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return t?a.a.createElement(m,l(l({ref:n},p),{},{components:t})):a.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);