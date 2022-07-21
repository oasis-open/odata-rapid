"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[858],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6586:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={id:"apidesigner",title:"RAPID API Designer",sidebar_label:"RAPID API Designer"},l=void 0,p={unversionedId:"samples/apidesigner",id:"samples/apidesigner",title:"RAPID API Designer",description:"Overview",source:"@site/../docs/samples/api-designer.md",sourceDirName:"samples",slug:"/samples/apidesigner",permalink:"/docs/samples/apidesigner",draft:!1,editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/samples/api-designer.md",tags:[],version:"current",frontMatter:{id:"apidesigner",title:"RAPID API Designer",sidebar_label:"RAPID API Designer"},sidebar:"samples",next:{title:"RAPID API Explorer",permalink:"/docs/samples/apiexplorer"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Try it Out!",id:"try-it-out",level:2},{value:"Source Code",id:"source-code",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{href:"/api-designer/index.html",target:"_blank"},"RAPID API Designer")," is a simple application for designing a RAPID API.\nIt allows you to describe your API in simple ",(0,a.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-intro"},"RAPID Schema Definition Language (RSDL)")," syntax,\nview as runtime ",(0,a.kt)("a",{parentName:"p",href:"/docs/spec/servicedescription"},"Common Schema Definition Language (CSDL)"),",\nSwagger UI, or visually, and build sample queries against the schema."),(0,a.kt)("h2",{id:"try-it-out"},"Try it Out!"),(0,a.kt)("p",null,"To try out the RAPID API Designer, just click ",(0,a.kt)("a",{href:"/api-designer/index.html",target:"_blank"},"RAPID API Designer"),".\nYou can start with the schema for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/samples/jetsons"},"Jetsons service")," or design your own schema from scratch."),(0,a.kt)("h2",{id:"source-code"},"Source Code"),(0,a.kt)("p",null,"The source code for the API Designer can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasis-open/odata-rapid/tree/main/tools/api-designer"},"RAPID API Designer")," open source repo, and demonstrates the use of the following individual controls:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oasis-open/odata-rapid/tree/main/tools/rsdlEditor"},"RSDL Editor")," for designing a service using ",(0,a.kt)("a",{parentName:"li",href:"/docs/rsdl/rsdl-intro"},"RAPID Schema Definition Language (RSDL)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oasis-open/odata-rapid/tree/main/tools/rsdl/rsdl-js"},"RSDL-JS")," for generating runtime ",(0,a.kt)("a",{parentName:"li",href:"/docs/spec/servicedescription"},"Common Schema Definition Language (CSDL)")," from RSDL"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oasis-open/odata-rapid/tree/main/tools/visualModelEditor"},"RAPID Visual Model Editor")," for creating a visual display of your service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oasis-tcs/odata-openapi"},"OData-OpenAPI")," for converting the runtime CSDL metadata to OpenAPI format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oasis-open/odata-rapid/tree/main/tools/urlEditor"},"RAPID Url Editor")," for building RAPID-compliant URLs against your service")))}m.isMDXComponent=!0}}]);