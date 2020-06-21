(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(128)),o={id:"resourceformat",title:"Resource Description"},c={id:"spec/resourceformat",title:"Resource Description",description:"RAPID services describe their resources through a simple and concise JSON representation in order to allow generic clients to interact with the service.",source:"@site/../docs/spec/rapid-pro-resource_description.md",permalink:"/docs/spec/resourceformat",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/spec/rapid-pro-resource_description.md",sidebar:"docs",previous:{title:"RAPID Schema Definition Language (RSDL)",permalink:"/docs/rsdl"},next:{title:"Batch Operations",permalink:"/docs/spec/batch"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RAPID services describe their resources through a simple and concise JSON representation in order to allow generic clients to interact with the service.\nBy convention, this description is retrieved by requesting the ",Object(i.b)("inlineCode",{parentName:"p"},"/$metadata")," resource, located at the root of the service."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"GET ",Object(i.b)("a",Object(r.a)({parentName:"th"},{href:"https://jetsons.azurewebsites.net/$metadata"}),Object(i.b)("inlineCode",{parentName:"a"},"http://rapid-pro.org/$metadata")),Object(i.b)("br",null),"Accept: application/json"))),Object(i.b)("tbody",{parentName:"table"})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Result:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$Version": "4.01",\n    "enterprise": {\n        "company": {\n            "$Kind": "EntityType",\n            "$Key": ["stockSymbol"],\n            "name": { "Type": "Edm.String" },\n            "incorporated": { "$Type": "Edm.Date" },\n            "stockSymbol": {},\n            "employees": {\n                "$Kind": "NavigationProperty",\n                "$Collection": true,\n                "$Type": "enterprise.employees",\n                "$ContainsTarget": true\n            }\n        },\n        "employee": {\n            "$Kind": "EntityType",\n            "$Key": ["id"],\n            "id": { "$Type": "Edm.Int32" },\n            "firstName": { "$Type": "Edm.String" },\n            "lastName": { "$Type": "Edm.String" },\n            "title": { "$Type": "Edm.String" }\n        },\n        "serviceRoot": {\n            "$Kind": "EntityContainer",\n            "company": {\n                "$Type": "enterprise.company"\n            },\n            "competitors": {\n                "$Collection": true,\n                "$Type": "enterprise.company"\n            }\n        },\n        "$EntityContainer": "enterprise.serviceRoot"\n    }\n}\n')),Object(i.b)("p",null,"Types are defined within a namespace. The namespace defined for this service is ",Object(i.b)("inlineCode",{parentName:"p"},"enterprise"),"."),Object(i.b)("p",null,"Within the ",Object(i.b)("inlineCode",{parentName:"p"},"enterprise")," namespace two types are defined: ",Object(i.b)("inlineCode",{parentName:"p"},"company")," and ",Object(i.b)("inlineCode",{parentName:"p"},"employee"),"."),Object(i.b)("p",null,"Properties representing meta information about the model, such as key, type, kind, collection, contains target,\nand entity container, are prefixed with a dollar sign (",Object(i.b)("inlineCode",{parentName:"p"},"$"),")."),Object(i.b)("p",null,"By default, properties are strings.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"$Type")," property specifies the type for the core ",Object(i.b)("inlineCode",{parentName:"p"},"Edm.String"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Edm.Int32"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"Edm.Double"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Edm.Boolean"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Edm.Date"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Edm.Time"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"Edm.DateTimeOffset")," properties.\nMore advanced services may define stream, binary, geography, or geometry types."),Object(i.b)("p",null,"Because the ",Object(i.b)("inlineCode",{parentName:"p"},"employee")," type is used in a collection,\nit defines a property (",Object(i.b)("inlineCode",{parentName:"p"},"id"),") as the key value for referencing instances within the collection."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"company")," type has a property for navigating to a collection of employees.\nThe employees are contained by the company; that is, they do not exist in a separate top-level collection."),Object(i.b)("p",null,'Resources can also include properties not advertised in metadata.\nThese "dynamic" properties can be referenced in query options and included in result payloads,\njust like normal declared properties.'),Object(i.b)("p",null,"The last line defines the ",Object(i.b)("inlineCode",{parentName:"p"},"serviceRoot")," entity container as the root of the service.\nIts members are top-level resources exposed by the service;\n",Object(i.b)("inlineCode",{parentName:"p"},"company")," is a single instance of the ",Object(i.b)("inlineCode",{parentName:"p"},"company")," type, and ",Object(i.b)("inlineCode",{parentName:"p"},"competitors")," is a collection of companies."))}l.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);