"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[926],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,f=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},776:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"graphql",title:"RAPID and GraphQL"},p=void 0,d={unversionedId:"related/graphql",id:"related/graphql",title:"RAPID and GraphQL",description:"RAPID and GraphQL both provide a means of describing and requesting data from a service that represents a graph of data.",source:"@site/../docs/related/rapid-pro-graphql.md",sourceDirName:"related",slug:"/related/graphql",permalink:"/docs/related/graphql",draft:!1,editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/related/rapid-pro-graphql.md",tags:[],version:"current",frontMatter:{id:"graphql",title:"RAPID and GraphQL"},sidebar:"docs",previous:{title:"RAPID and OData",permalink:"/docs/related/odata"},next:{title:"RAPID and OpenAPI",permalink:"/docs/related/openapi"}},l={},c=[{value:"Schema Description",id:"schema-description",level:2},{value:"Query Syntax",id:"query-syntax",level:2},{value:"Filter",id:"filter",level:2},{value:"Use of HTTP",id:"use-of-http",level:2},{value:"Interoperability",id:"interoperability",level:2}],u={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RAPID and GraphQL both provide a means of describing and requesting data from a service that represents a graph of data."),(0,i.kt)("h2",{id:"schema-description"},"Schema Description"),(0,i.kt)("p",null,"In GraphQL, the schema of a service can be described through introspection."),(0,i.kt)("p",null,"In RAPID, the schema of a service can be described through a ",(0,i.kt)("a",{parentName:"p",href:"/docs/spec/servicedescription"},"request")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"$metadata")," endpoint of the service."),(0,i.kt)("p",null,"GraphQL defines a simple syntax for defining the shape of a service. Rapid also defines a simple Resource Description Language called ",(0,i.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-intro"},"RSDL"),"."),(0,i.kt)("h2",{id:"query-syntax"},"Query Syntax"),(0,i.kt)("p",null,"In a GraphQL query, the developer describes the properties to be retrieved, and depth traversed, through a JSON-like structure."),(0,i.kt)("p",null,"In a RAPID query, the developer describes the properties to be retrieved through a ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-read#selecting-individual-properties-of-a-resource"},"projection"),", and the depth traversed through an ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-read#including-related-resources"},"expansion")," operator."),(0,i.kt)("h2",{id:"filter"},"Filter"),(0,i.kt)("p",null,"GraphQL does not define predicates that can be applied to filter the membership of the result.\nInstead, GraphQL extensions such as OpenCRUD define use custom operations, defined in schema, to define each type of filter operation."),(0,i.kt)("p",null,"While RAPID supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/operations#functions"},"custom functions")," that may be used to encapsulate business logic or other predefined operations, it also defines a ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-read#filtering-results"},"filter syntax")," that can be used to support dynamic queries against properties described by the service as queryable, providing a more flexible way for developers to interact with the data."),(0,i.kt)("h2",{id:"use-of-http"},"Use of HTTP"),(0,i.kt)("p",null,"GraphQL submits requests using HTTP POST, passing the query in the body of the request."),(0,i.kt)("p",null,"RAPID builds on REST, using HTTP verbs to GET ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-read"},"(retrieve)"),", POST ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-edit#creating-a-resource"},"(create)"),", PATCH ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-edit#updating-a-resource"},"(update)"),", and DELETE ",(0,i.kt)("a",{parentName:"p",href:"/docs/rapid-edit#deleting-a-resource"},"(delete)")," data. By making fuller use of HTTP, RAPID is able to leverage HTTP Caching and other built-in mechanisms."),(0,i.kt)("h2",{id:"interoperability"},"Interoperability"),(0,i.kt)("p",null,"RAPID services can easily support GraphQL Clients through tools such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-mesh.com/docs/handlers/odata"},"GraphQL Mesh"),". See our ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/graphqlclient"},"tutorial")," on building a GraphQL client to access our sample ",(0,i.kt)("a",{parentName:"p",href:"/docs/samples/jetsons"},"Jetsons service"),"."))}h.isMDXComponent=!0}}]);