/*! For license information please see 15c7a2c1.524851aa.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[383],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var c,a,u=o(e),f=1;f<arguments.length;f++){for(var l in c=Object(arguments[f]))r.call(c,l)&&(u[l]=c[l]);if(t){a=t(c);for(var p=0;p<a.length;p++)n.call(c,a[p])&&(u[a[p]]=c[a[p]])}}return u}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=w.prototype=new j;k.constructor=w,n(k,O.prototype),k.isPureReactComponent=!0;var P={current:null},x=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var f=Array(u),l=0;l<u;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:i,type:e,key:c,ref:a,props:o,_owner:P.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var D=/\/+/g,C=[];function _(e,t,r,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function $(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case c:a=!0}}if(a)return r(n,e,""===t?"."+I(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=t+I(o=e[u],u);a+=$(o,f,r,n)}else if(null===e||"object"!=typeof e?f=null:f="function"==typeof(f=b&&e[b]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),u=0;!(o=e.next()).done;)a+=$(o=o.value,f=t+I(o,u++),r,n);else if("object"===o)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return a}function R(e,t,r){return null==e?0:$(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,n,r,(function(e){return e})):null!=e&&(A(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+r)),n.push(e))}function N(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(D,"$&/")+"/"),R(e,M,t=_(t,i,n,o)),T(t)}var U={current:null};function F(){var e=U.current;if(null===e)throw Error(m(321));return e}},7378:function(e,t,r){r(1535)},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=f(r),y=o,g=s["".concat(u,".").concat(y)]||s[y]||p[y]||i;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var f=2;f<i;f++)c[f]=r[f];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3741:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return a},metadata:function(){return f},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7378),r(3905)),c=["components"],a={id:"aggregation",title:"Aggregation Extension"},u="Rest API Design (RAPID) Profile Aggregation Extension",f={unversionedId:"spec/aggregation",id:"spec/aggregation",title:"Aggregation Extension",description:"",source:"@site/../docs/spec/rapid-pro-aggregation_extensions.md",sourceDirName:"spec",slug:"/spec/aggregation",permalink:"/docs/spec/aggregation",draft:!1,editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/spec/rapid-pro-aggregation_extensions.md",tags:[],version:"current",frontMatter:{id:"aggregation",title:"Aggregation Extension"}},l={},p=[],s={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rest-api-design-rapid-profile-aggregation-extension"},"Rest API Design (RAPID) Profile Aggregation Extension"),(0,i.kt)("h1",{id:"---todo---"},"---TODO---"))}y.isMDXComponent=!0}}]);