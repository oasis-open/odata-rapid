"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[744],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(5773),o=(n(7378),n(5318));const a={id:"rsdl-demo",title:"RSDL syntax highlighting demo"},i="Demo",c={unversionedId:"rsdl/rsdl-demo",id:"rsdl/rsdl-demo",title:"RSDL syntax highlighting demo",description:"",source:"@site/../docs/rsdl/rapid-demo.md",sourceDirName:"rsdl",slug:"/rsdl/rsdl-demo",permalink:"/docs/rsdl/rsdl-demo",draft:!1,editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/rsdl/rapid-demo.md",tags:[],version:"current",frontMatter:{id:"rsdl-demo",title:"RSDL syntax highlighting demo"}},l={},s=[],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"demo"},"Demo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl",metastring:'title="Demo"',title:'"Demo"'},'\n# comment\nabstract type Entity\n{\n  key id: String\n}\n\n@Edm.Description: "the company entity"\ntype Company extends Entity\n{\n  stockSymbol: String\n  name: String\n  incorporated: Date\n}\n\n## an enumeration\nenum { a b c d }\n\n\npath /foo/bar/baz {\n  GET {\n    expand {}\n    filter {\n      eq: {foo bar baz}\n      range: {foo bar baz}\n    }\n    paging\n  }\n  POST {\n\n  }\n}\n')))}p.isMDXComponent=!0}}]);