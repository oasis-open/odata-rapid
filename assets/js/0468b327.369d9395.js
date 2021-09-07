"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[645],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"gettingstarted",slug:"/",title:"Rest API Design (RAPID) Profile",sidebar_label:"Getting Started"},l=void 0,p={unversionedId:"gettingstarted",id:"gettingstarted",isDocsHomePage:!1,title:"Rest API Design (RAPID) Profile",description:"RAPID is a simple profile for building well-designed APIs that can scale to the level of functionality required for any situation.",source:"@site/../docs/rapid-pro.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/rapid-pro.md",tags:[],version:"current",frontMatter:{id:"gettingstarted",slug:"/",title:"Rest API Design (RAPID) Profile",sidebar_label:"Getting Started"},sidebar:"docs",next:{title:"Overview",permalink:"/docs/spec/features"}},c=[{value:"What makes a RAPID service?",id:"what-makes-a-rapid-service",children:[]},{value:"Why REST?",id:"why-rest",children:[]},{value:"Resource Description",id:"resource-description",children:[]},{value:"RAPID Requests",id:"rapid-requests",children:[{value:"Retrieving a Resource",id:"retrieving-a-resource",children:[]},{value:"Modifying a Resource",id:"modifying-a-resource",children:[]}]},{value:"Optional Features",id:"optional-features",children:[]},{value:"RAPID and OpenAPI",id:"rapid-and-openapi",children:[]},{value:"RAPID and OData",id:"rapid-and-odata",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RAPID is a simple profile for building well-designed APIs that can scale to the level of functionality required for any situation.\nBy following RAPID conventions, services are able to leverage common libraries and tools,\nand can share their information in a discoverable and interoperable way."),(0,i.kt)("p",null,"Because the RAPID profile is based on, and compatible with, the industry standard OData protocol,\nservices following RAPID conventions know that, as their needs grow,\nthere are well defined conventions and semantics that allow them to seamlessly and incrementally grow without having to rewrite as their needs evolve."),(0,i.kt)("h2",{id:"what-makes-a-rapid-service"},"What makes a RAPID service?"),(0,i.kt)("p",null,"The RAPID profile defines conventions and best practices for services that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Retrieve and (optionally) update resources using a simple standard REST API"),(0,i.kt)("li",{parentName:"ul"},"Describe their resources, operations and capabilities in an interoperable JSON Format"),(0,i.kt)("li",{parentName:"ul"},"Support common URL patterns and query parameters"),(0,i.kt)("li",{parentName:"ul"},"Support JSON representations that follow well-defined conventions")),(0,i.kt)("h2",{id:"why-rest"},"Why REST?"),(0,i.kt)("p",null,"REST is an extremely popular architectural style for designing APIs where URLs represent resources that clients\ninteract with using simple GET, PATCH, POST and DELETE operations."),(0,i.kt)("p",null,"REST has been criticized as not allowing you to specify the data you want returned,\nresulting either in over-fetching data or having to make multiple requests to fetch the desired data.\nHowever, there is nothing in the architecture of REST that restricts the ability to further specify what data is retrieved from a resource;\nREST itself just doesn't define such patterns.\nYou don't need to abandon the benefits of REST in order to have an API that gives you fine-grained control over how you retrieve and work with resources."),(0,i.kt)("p",null,"The RAPID profile expands REST by defining common conventions for specifying exactly what properties,\nincluding properties from related resources, to return in a single request.\nBy standardizing these conventions you get the elegance of REST, the power of a robust query language,\nand the interoperability of a standard."),(0,i.kt)("p",null,"Sweet. Who says you can't have it all?"),(0,i.kt)("h2",{id:"resource-description"},"Resource Description"),(0,i.kt)("p",null,"RAPID introduces a simple RAPID Schema Definition Language (RSDL) that can be used at design time to define the shape of your API (the allowed requests, format of responses, and so forth)."),(0,i.kt)("p",null,'For example, the following RSDL defines a simple type "Company", returned by the "company" endpoint of the service.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    stockSymbol: String\n    name: String\n    incorporated: Date\n}\n\nservice {\n    company: Company\n}\n")),(0,i.kt)("p",null,"For details on defining a RAPID service using RSDL, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-intro"},"RAPID Schema Definition Language (RSDL)"),"."),(0,i.kt)("p",null,"This simple design time syntax is converted to a runtime service description that client applications and tooling can use to interact with the service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$Version": "4.01",\n  "jetsons": {\n    "company": {\n      "$Kind": "EntityType",\n      "$Key": ["stockSymbol"],\n      "name": { "Type": "Edm.String" },\n      "incorporated": { "$Type": "Edm.Date" },\n      "stockSymbol": {}\n      }\n    },\n    "Service": {\n      "$Kind": "EntityContainer",\n      "company": {\n        "$Type": "jetsons.company"\n      },\n    },\n    "$EntityContainer": "jetsons.Service"\n  }\n}\n')),(0,i.kt)("p",null,"For more information on the runtime service description, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/spec/servicedescription"},"Runtime Service Description"),"."),(0,i.kt)("h2",{id:"rapid-requests"},"RAPID Requests"),(0,i.kt)("p",null,"RAPID uses standard GET, POST, PATCH, and DELETE requests to retrieve and update resources."),(0,i.kt)("h3",{id:"retrieving-a-resource"},"Retrieving a Resource"),(0,i.kt)("p",null,"RAPID services support retrieving a resource using the GET method."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Template"),(0,i.kt)("th",{parentName:"tr",align:"left"},"GET {resource-path}"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Example")),(0,i.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,i.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company"},(0,i.kt)("inlineCode",{parentName:"a"},"http://rapid-pro.org/company")))))),(0,i.kt)("p",null,"RAPID services return individual resources as a json object."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": "$metadata#company",\n    "name": "Spacely\'s Space Sprockets",\n    "incorporated": "2054-10-04",\n    "stockSymbol": "spcly"\n}\n')),(0,i.kt)("p",null,"RAPID responses are self-describing.\nThe first line says that the response is described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"company")," singleton defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$metadata")," document.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"@context")," property is the URL representation of this section in the document, and in this example, it is a relative URL."),(0,i.kt)("p",null,"RAPID uses properties prefixed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," symbol to denote control information that is not part of the data."),(0,i.kt)("p",null,"RAPID payloads use native JSON types for string, boolean, and double values.\nDates, Times, and DateTimeOffset values are represented as ISO-8601 strings."),(0,i.kt)("p",null,"For details on reading data in RAPID, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-read"},"Retrieving Resources in RAPID")),(0,i.kt)("h3",{id:"modifying-a-resource"},"Modifying a Resource"),(0,i.kt)("p",null,"RAPID services support modifying a resource using the PATCH, POST, and DELETE methods."),(0,i.kt)("p",null,"This example PATCH call changes the name in the Company singleton to a given replacement:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Template"),(0,i.kt)("th",{parentName:"tr",align:"left"},"PATCH {single-resource-path}"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Example")),(0,i.kt)("td",{parentName:"tr",align:"left"},"PATCH ",(0,i.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company"},"http://rapid-pro.org/company"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Spacely\'s Superior Space Sprockets"\n}\n')),(0,i.kt)("p",null,"For details on modifying data in RAPID, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-edit"},"Modifying Resources in RAPID")),(0,i.kt)("h2",{id:"optional-features"},"Optional Features"),(0,i.kt)("p",null,"Although RAPID services can be very simple because they follow core patterns, they can be extended using optional features\nto support more advanced scenarios such as those described in ",(0,i.kt)("a",{parentName:"p",href:"/docs/spec/features"},"RAPID Features"),"."),(0,i.kt)("h2",{id:"rapid-and-openapi"},"RAPID and OpenAPI"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," is an extremely popular specification for documenting a REST API.\nBecause the RAPID profile builds upon REST, it is natural and encouraged for RAPID services to support OpenAPI."),(0,i.kt)("p",null,"As the RAPID service description defines a superset of what a service might want to document through OpenAPI,\na ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata-openapi/v1.0/odata-openapi-v1.0.html"},"suggested translation"),"\nis defined for translating a RAPID service description to OpenAPI."),(0,i.kt)("h2",{id:"rapid-and-odata"},"RAPID and OData"),(0,i.kt)("p",null,"RAPID is designed to be a profile that applies a subset of the conventions defined in OData applicable to any RESTful API.\nA RAPID service can easily support generic OData V4 clients by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supporting OData calling conventions"),(0,i.kt)("li",{parentName:"ul"},"Following OData JSON conventions for OData V4 Clients")),(0,i.kt)("p",null,"RAPID services ",(0,i.kt)("em",{parentName:"p"},"may")," support any additional conventions defined in the OData specification as appropriate to the service."),(0,i.kt)("p",null,"For more information on how RAPID works with OData services, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/related/odata"},"RAPID and OData"),"."))}u.isMDXComponent=!0}}]);