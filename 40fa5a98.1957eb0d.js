(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{64:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),o=(r(0),r(87)),c={id:"rapid-edit",title:"Modifying Resources",sidebar_label:"Modifying Resources"},p={unversionedId:"rapid-edit",id:"rapid-edit",isDocsHomePage:!1,title:"Modifying Resources",description:"RAPID defines simple REST operations for Create, Update, and Delete.",source:"@site/..\\docs\\rapid-pro-data_modification.md",slug:"/rapid-edit",permalink:"/docs/rapid-edit",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/rapid-pro-data_modification.md",version:"current",sidebar_label:"Modifying Resources",sidebar:"docs",previous:{title:"Reading Resources",permalink:"/docs/rapid-read"},next:{title:"Actions and Functions",permalink:"/docs/operations"}},i=[{value:"Creating a Resource",id:"creating-a-resource",children:[]},{value:"Deep Insert",id:"deep-insert",children:[]},{value:"Updating a Resource",id:"updating-a-resource",children:[]},{value:"Upserting a Resource",id:"upserting-a-resource",children:[]},{value:"Deleting a Resource",id:"deleting-a-resource",children:[]}],l={rightToc:i};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"RAPID defines simple REST operations for Create, Update, and Delete."),Object(o.b)("h2",{id:"creating-a-resource"},"Creating a Resource"),Object(o.b)("p",null,"Resources are added to a collection by submitting a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request to the collection."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Template"),Object(o.b)("th",{parentName:"tr",align:"left"},"POST {collection-resource-path}"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Example")),Object(o.b)("td",{parentName:"tr",align:"left"},"POST ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees"},"http://rapid-pro.org/company/employees"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Body:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "firstName": "Elroy",\n    "lastName": "Jetson",\n    "title": "Intern"\n}\n')),Object(o.b)("p",null,"Payloads sent to the service don't require the ",Object(o.b)("inlineCode",{parentName:"p"},"@context")," property because the request defines the expected shape of the payload.\nIf specified, the ",Object(o.b)("inlineCode",{parentName:"p"},"@context")," is ignored by the service."),Object(o.b)("p",null,"Properties that are nullable or have a default value may be omitted from the ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request."),Object(o.b)("p",null,"The service returns, at minimum, a ",Object(o.b)("inlineCode",{parentName:"p"},"Location")," header specifying the URL for the created resource.\nIt may also include a payload containing the values of the newly created resource,\nincluding default or computed values."),Object(o.b)("h2",{id:"deep-insert"},"Deep Insert"),Object(o.b)("p",null,"When creating a new resource, related resources can be created and associated in the same request."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Template"),Object(o.b)("th",{parentName:"tr",align:"left"},"POST {collection-resource-path}"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Example")),Object(o.b)("td",{parentName:"tr",align:"left"},"POST ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/competitors"},"http://rapid-pro.org/competitors"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Body:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Cogswell\'s Cosmic COGs",\n    "incoporated": "2054-10-4",\n    "stockSymbol": "cgswl",\n    "employees": [\n        {\n            "firstName": "Spencer",\n            "lastName": "Cogswell",\n            "title": "CEO"\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"updating-a-resource"},"Updating a Resource"),Object(o.b)("p",null,"Resources are updated by submitting a ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," request to the URL identifying the resource."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Template"),Object(o.b)("th",{parentName:"tr",align:"left"},"PATCH {single-resource-path}"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Example")),Object(o.b)("td",{parentName:"tr",align:"left"},"PATCH ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/5"},"http://rapid-pro.org/company/employees/5"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Body:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Manager"\n}\n')),Object(o.b)("p",null,"The payload for a ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," request need only include the properties that are being updated.\nProperties not specified in the payload are not changed."),Object(o.b)("h2",{id:"upserting-a-resource"},"Upserting a Resource"),Object(o.b)("p",null,"Where the key value is specified by the client, not generated by the server,\na resource can be created by submitting a ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," request to the URL that will identify the resource."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Template"),Object(o.b)("th",{parentName:"tr",align:"left"},"PATCH {single-resource-path}"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Example")),Object(o.b)("td",{parentName:"tr",align:"left"},"PATCH ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/5"},"http://rapid-pro.org/company/employees/5"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Body:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "firstName": "Elroy",\n    "lastName": "Jetson",\n    "title": "Intern"\n}\n')),Object(o.b)("p",null,"If the resource with the specified URL already exists, it is updated, otherwise a new resource is created."),Object(o.b)("h2",{id:"deleting-a-resource"},"Deleting a Resource"),Object(o.b)("p",null,"Resources are deleted by submitting a ",Object(o.b)("inlineCode",{parentName:"p"},"DELETE")," request to the URL identifying the resource."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Template"),Object(o.b)("th",{parentName:"tr",align:"left"},"DELETE {single-resource-path}"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Example")),Object(o.b)("td",{parentName:"tr",align:"left"},"DELETE ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/2"},"http://rapid-pro.org/company/employees/2"))))))}b.isMDXComponent=!0},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=b(r),u=a,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return r?n.a.createElement(m,p(p({ref:t},l),{},{components:r})):n.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);