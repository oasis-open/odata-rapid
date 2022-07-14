"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[469],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={id:"jetsons",title:"Jetsons Sample Service",sidebar_label:"Jetsons Sample Service"},l=void 0,p={unversionedId:"samples/jetsons",id:"samples/jetsons",title:"Jetsons Sample Service",description:"Overview",source:"@site/../docs/samples/jetsons-sample-service.md",sourceDirName:"samples",slug:"/samples/jetsons",permalink:"/docs/samples/jetsons",draft:!1,editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/samples/jetsons-sample-service.md",tags:[],version:"current",frontMatter:{id:"jetsons",title:"Jetsons Sample Service",sidebar_label:"Jetsons Sample Service"},sidebar:"samples",next:{title:"GraphQL Client Tutorial",permalink:"/docs/tutorial/graphqlclient"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Schema",id:"schema",level:2},{value:"Try it out!",id:"try-it-out",level:2},{value:"Under the covers",id:"under-the-covers",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://jetsons.azurewebsites.net/"},"Jetsons sample service")," is a simple RAPID service that demonstrates concepts of a RAPID service."),(0,s.kt)("p",null,"The Jetsons sample service is used throughout the ",(0,s.kt)("a",{parentName:"p",href:"/docs/rapid-read"},"overview")," and documentation to describe RAPID concepts."),(0,s.kt)("h2",{id:"schema"},"Schema"),(0,s.kt)("p",null,"The Jetsons sample service exposes a simple schema comprising of:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A Company type"),(0,s.kt)("li",{parentName:"ol"},"An Employee type"),(0,s.kt)("li",{parentName:"ol"},"A service that exposes",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"A single instance of a Company, representing the current (home) company, and"),(0,s.kt)("li",{parentName:"ol"},"A collection of Companies, representing competitors")))),(0,s.kt)("p",null,"In RSDL, this simple schema would be described as:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    key stockSymbol: String\n    name: String\n    incorporated: DateTime\n    employees: [Employee]\n}\n\ntype Employee\n{\n    key id: Integer \n    firstName : String?\n    lastName : String?\n    title: String?\n}\n\nservice\n{\n    competitors: [Company]\n    company: Company\n}\n")),(0,s.kt)("h2",{id:"try-it-out"},"Try it out!"),(0,s.kt)("p",null,"You can check out the ",(0,s.kt)("a",{parentName:"p",href:"https://jetsons.azurewebsites.net/"},"live Jetsons sample service")," to get a feel for how you can interact with a RESTier service."),(0,s.kt)("h2",{id:"under-the-covers"},"Under the covers"),(0,s.kt)("p",null,"The Jetsons sample service is built using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/OData/RESTier"},"RESTier")," framework.  RESTier makes it easy to build OData services that support RAPID requests/responses."),(0,s.kt)("p",null,"The source code for the Jetsons sample service can be found in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/oasis-open/odata-rapid/tree/main/samples/Jetsons/Jetsons"},"odata-rapid")," open source repo."))}d.isMDXComponent=!0}}]);