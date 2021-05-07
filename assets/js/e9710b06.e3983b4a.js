(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[562],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7647:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"servicedescription",title:"Runtime Service Description"},p={unversionedId:"spec/servicedescription",id:"spec/servicedescription",isDocsHomePage:!1,title:"Runtime Service Description",description:"Client applications and tooling can use a runtime service description to understand how to interact with the service.",source:"@site/../docs/spec/rapid-pro-resource_description.md",sourceDirName:"spec",slug:"/spec/servicedescription",permalink:"/docs/spec/servicedescription",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/spec/rapid-pro-resource_description.md",version:"current",frontMatter:{id:"servicedescription",title:"Runtime Service Description"},sidebar:"docs",previous:{title:"Actions and Functions",permalink:"/docs/operations"},next:{title:"Batch Operations",permalink:"/docs/spec/batch"}},s=[],c={toc:s};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Client applications and tooling can use a runtime service description to understand how to interact with the service.\nBy convention, this description is retrieved by requesting the ",(0,o.kt)("inlineCode",{parentName:"p"},"/$metadata")," resource, located at the root of the service."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"th",href:"https://jetsons.azurewebsites.net/$metadata"},(0,o.kt)("inlineCode",{parentName:"a"},"http://rapid-pro.org/$metadata")),(0,o.kt)("br",null),"Accept: application/json")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$Version": "4.01",\n  "jetsons": {\n    "company": {\n      "$Kind": "EntityType",\n      "$Key": ["stockSymbol"],\n      "name": { "Type": "Edm.String" },\n      "incorporated": { "$Type": "Edm.Date" },\n      "stockSymbol": {},\n      "employees": {\n        "$Kind": "NavigationProperty",\n        "$Collection": true,\n        "$Type": "jetsons.employee",\n        "$ContainsTarget": true\n      }\n    },\n    "employee": {\n      "$Kind": "EntityType",\n      "$Key": ["id"],\n      "id": { "$Type": "Edm.Int32" },\n      "firstName": { "$Type": "Edm.String" },\n      "lastName": { "$Type": "Edm.String" },\n      "title": { "$Type": "Edm.String" }\n    },\n    "Service": {\n      "$Kind": "EntityContainer",\n      "company": {\n        "$Type": "jetsons.company"\n      },\n      "competitors": {\n        "$Collection": true,\n        "$Type": "jetsons.company"\n      }\n    },\n    "$EntityContainer": "jetsons.Service"\n  }\n}\n')),(0,o.kt)("p",null,"Types are defined within a namespace. The namespace defined for this service is ",(0,o.kt)("inlineCode",{parentName:"p"},"jetsons"),"."),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"jetsons")," namespace two types are defined: ",(0,o.kt)("inlineCode",{parentName:"p"},"company")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"employee"),"."),(0,o.kt)("p",null,"Properties representing meta information about the model, such as key, type, kind, collection, contains target,\nand entity container, are prefixed with a dollar sign (",(0,o.kt)("inlineCode",{parentName:"p"},"$"),")."),(0,o.kt)("p",null,"By default, properties are strings.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"$Type")," property specifies the type for the core ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.Int32"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.Double"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.Boolean"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.Date"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.Time"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.DateTimeOffset")," properties.\nMore advanced services may define stream, binary, geography, or geometry types."),(0,o.kt)("p",null,"Because the ",(0,o.kt)("inlineCode",{parentName:"p"},"employee")," type is used in a collection,\nit defines a property (",(0,o.kt)("inlineCode",{parentName:"p"},"id"),") as the key value for referencing instances within the collection."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"company")," type has a property for navigating to a collection of employees.\nThe employees are contained by the company; that is, they do not exist in a separate top-level collection."),(0,o.kt)("p",null,'Resources can also include properties not advertised in metadata.\nThese "dynamic" properties can be referenced in query options and included in result payloads,\njust like normal declared properties.'),(0,o.kt)("p",null,"The last line defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," entity container as the root of the service. Its members are top-level resources exposed by the service;\n",(0,o.kt)("inlineCode",{parentName:"p"},"company")," is a single instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"company")," type, and ",(0,o.kt)("inlineCode",{parentName:"p"},"competitors")," is a collection of companies."))}l.isMDXComponent=!0}}]);