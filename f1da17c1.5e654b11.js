(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(87)),i={id:"odata",title:"RAPID and OData"},c={unversionedId:"related/odata",id:"related/odata",isDocsHomePage:!1,title:"RAPID and OData",description:"RAPID Profile is a subset of the conventions defined in OData that can be applied to any RESTful API.",source:"@site/..\\docs\\related\\rapid-pro-odata.md",slug:"/related/odata",permalink:"/docs/related/odata",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/related/rapid-pro-odata.md",version:"current",sidebar:"docs",previous:{title:"RAPID SDL ABNF",permalink:"/docs/rsdl/rsdl-abnf"},next:{title:"RAPID and GraphQL",permalink:"/docs/related/graphql"}},p=[{value:"Support OData canonical key syntax",id:"support-odata-canonical-key-syntax",children:[]},{value:"Support <code>$</code> prefix for built-in query options",id:"support--prefix-for-built-in-query-options",children:[]},{value:"Support qualified action and function names",id:"support-qualified-action-and-function-names",children:[]},{value:"Support XML resource description",id:"support-xml-resource-description",children:[]},{value:"Following OData conventions for OData V4 Clients",id:"following-odata-conventions-for-odata-v4-clients",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"RAPID Profile is a subset of the conventions defined in ",Object(o.b)("a",{parentName:"p",href:"https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html"},"OData")," that can be applied to any RESTful API.\nA RAPID service can easily support generic OData V4 clients by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Supporting ",Object(o.b)("a",{parentName:"li",href:"https://docs.oasis-open.org/odata/odata/v4.01/os/part2-url-conventions/odata-v4.01-os-part2-url-conventions.html"},"OData calling conventions")),Object(o.b)("li",{parentName:"ul"},"Following ",Object(o.b)("a",{parentName:"li",href:"https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html"},"OData JSON conventions"))),Object(o.b)("p",null,"RAPID services MAY support any additional conventions defined in the OData specification.\nRAPID services SHOULD"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Describe the supported level of query functionality, if any, through ",Object(o.b)("a",{parentName:"li",href:"https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md"},"Capabilities annotations"))),Object(o.b)("h2",{id:"support-odata-canonical-key-syntax"},"Support OData canonical key syntax"),Object(o.b)("p",null,"Services SHOULD support the OData parens key syntax as an alternate syntax."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET http://rapid-pro.org/company/employees(2)\n")),Object(o.b)("p",null,"To be interoperable with OData clients,\nRAPID services that do not support the above OData key convention MUST include an ",Object(o.b)("inlineCode",{parentName:"p"},"@id")," property whose string value is a URL that can be used to retrieve the resource."),Object(o.b)("h2",{id:"support--prefix-for-built-in-query-options"},"Support ",Object(o.b)("inlineCode",{parentName:"h2"},"$")," prefix for built-in query options"),Object(o.b)("p",null,'In addition to the "friendly" query option names ',Object(o.b)("inlineCode",{parentName:"p"},"filter"),", ",Object(o.b)("inlineCode",{parentName:"p"},"orderby"),", ",Object(o.b)("inlineCode",{parentName:"p"},"select"),", ... services SHOULD also support the ",Object(o.b)("inlineCode",{parentName:"p"},"$"),"-prefixed versions ",Object(o.b)("inlineCode",{parentName:"p"},"$filter"),", ",Object(o.b)("inlineCode",{parentName:"p"},"$orderby"),", ",Object(o.b)("inlineCode",{parentName:"p"},"$select"),", ... with the same semantics."),Object(o.b)("h2",{id:"support-qualified-action-and-function-names"},"Support qualified action and function names"),Object(o.b)("p",null,'In addititon to "short" action and function names services SHOULD also support namespace-qualified action and function names, for example'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"POST http://rapid-pro.org/company/employees/1/youreFired\nPOST http://rapid-pro.org/company/employees/1/enterprise.youreFired\n")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"enterprise")," is the schema namespace that defines the ",Object(o.b)("inlineCode",{parentName:"p"},"youreFired")," action."),Object(o.b)("h2",{id:"support-xml-resource-description"},"Support XML resource description"),Object(o.b)("p",null,"To support generic OData V4 clients, RAPID services SHOULD provide their resource description at ",Object(o.b)("inlineCode",{parentName:"p"},"/$metadata")," (also) in XML format according to ",Object(o.b)("a",{parentName:"p",href:"https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html"},"OData V4 CSDL XML"),"."),Object(o.b)("h2",{id:"following-odata-conventions-for-odata-v4-clients"},"Following OData conventions for OData V4 Clients"),Object(o.b)("p",null,"A RAPID service determines that a request is from a generic OData V4 client by looking for any of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"OData-MaxVersion")," header"),Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"OData-Version")," header"),Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"Accept")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Content-Type")," header with a value of ",Object(o.b)("inlineCode",{parentName:"li"},"application/json")," suffixed with an ",Object(o.b)("a",{parentName:"li",href:"https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_RequestingtheJSONFormat"},"OData-specific format parameter"))))}s.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);