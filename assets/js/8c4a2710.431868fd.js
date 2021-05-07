(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[702],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6478:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"operations",title:"Actions and Functions",sidebar_label:"Actions and Functions"},s={unversionedId:"operations",id:"operations",isDocsHomePage:!1,title:"Actions and Functions",description:"Although a pure REST service would perform operations through manipulating the state of resources,",source:"@site/../docs/rapid-pro-operations.md",sourceDirName:".",slug:"/operations",permalink:"/docs/operations",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/rapid-pro-operations.md",version:"current",sidebar_label:"Actions and Functions",frontMatter:{id:"operations",title:"Actions and Functions",sidebar_label:"Actions and Functions"},sidebar:"docs",previous:{title:"Modifying Resources",permalink:"/docs/rapid-edit"},next:{title:"Runtime Service Description",permalink:"/docs/spec/servicedescription"}},p=[{value:"Actions",id:"actions",children:[]},{value:"Functions",id:"functions",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Although a pure REST service would perform operations through manipulating the state of resources,\nwe have found many services require the ability to encapsulate complex processing logic into atomic operations.\nRather than requiring services to expose a separate endpoint for such business logic,\nRAPID allows services to support Operations.\nOperations are exposed as resources at the root of the service or "bound" to the resource on which they operate.'),(0,a.kt)("p",null,"Operations bound to a resource are invoked by appending a segment containing the name of the operation to the URL of the resource.\nThe name of the operation must not conflict with the name of any properties or other operations bound to that\nresource."),(0,a.kt)("p",null,"Operations include Actions and Functions."),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("p",null,"Actions may have side-affects, are invoked using ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),", and have parameters specified in the body."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"POST {resource-path}/{actionName}"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Example"),(0,a.kt)("td",{parentName:"tr",align:"left"},"POST ",(0,a.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/1/youreFired"},"http://rapid-pro.org/company/employees/1/youreFired"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Body:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reason": "Embezzlement"\n}\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("p",null,"Functions are invoked using ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," and must be non-side affecting.\nParameters are passed to functions as query options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"GET {resource-path}/{functionName}?{@param=value...}"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Example"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,a.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company/topEmployees(num=2)"},"http://rapid-pro.org/company/topEmployees?@num=2"))))))}u.isMDXComponent=!0}}]);