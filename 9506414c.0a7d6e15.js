(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(87)),l={id:"rsdl-intro",title:"RAPID SDL intro"},p={unversionedId:"rsdl/rsdl-intro",id:"rsdl/rsdl-intro",isDocsHomePage:!1,title:"RAPID SDL intro",description:"Introduction to RAPID Schema Definition Language (RSDL)",source:"@site/..\\docs\\rsdl\\rapid-pro-rsdl-intro.md",slug:"/rsdl/rsdl-intro",permalink:"/docs/rsdl/rsdl-intro",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/rsdl/rapid-pro-rsdl-intro.md",version:"current",sidebar:"docs",previous:{title:"Batch Operations",permalink:"/docs/spec/batch"},next:{title:"RAPID Schema Definition Language Semantics",permalink:"/docs/rsdl/rsdl-semantics"}},c=[{value:"Introductory Example",id:"introductory-example",children:[{value:"Defining a Structured Type",id:"defining-a-structured-type",children:[]},{value:"Defining a Service",id:"defining-a-service",children:[]},{value:"Defining a Structured Type Property",id:"defining-a-structured-type-property",children:[]},{value:"Defining a Top-Level Collection",id:"defining-a-top-level-collection",children:[]},{value:"Defining an Enum",id:"defining-an-enum",children:[]},{value:"Defining a Structured Property without Identity",id:"defining-a-structured-property-without-identity",children:[]},{value:"Defining Methods",id:"defining-methods",children:[]}]}],i={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"introduction-to-rapid-schema-definition-language-rsdl"},"Introduction to RAPID Schema Definition Language (RSDL)"),Object(o.b)("p",null,"RAPID Schema Definition Language (RSDL) is a language to define Web APIs."),Object(o.b)("p",null,"RSDL is based on the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Profile_(engineering)"},"RAPID PROfile")," of the\n",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_Data_Protocol"},"OData")," specification. RAPID provides an easy way\nto envision, create, and consume a Web API that is compatible with the OData Standard and can evolve over time to support more advanced scenarios."),Object(o.b)("h2",{id:"introductory-example"},"Introductory Example"),Object(o.b)("p",null,"RAPID APIs are defined by a schema, which can easily be specified using RSDL."),Object(o.b)("h3",{id:"defining-a-structured-type"},"Defining a Structured Type"),Object(o.b)("p",null,"Let's say that we wanted our API to deal with information about a company. We could specify the properties of a company as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    stockSymbol: String\n    name: String\n    incorporated: Date\n}\n")),Object(o.b)("p",null,"Our company has three properties; a stockSymbol, a name, and the date of incorporation."),Object(o.b)("p",null,"Properties in RAPID can be Integer, String, Boolean, DateTime, Date, Double, Decimal, TimeOfDay, Duration built-in types, an ",Object(o.b)("a",{parentName:"p",href:"#defining-an-enum"},"enum type"),", a ",Object(o.b)("a",{parentName:"p",href:"#defining-a-structured-type"},"structured type"),", or a collection of any of the former."),Object(o.b)("h3",{id:"defining-a-service"},"Defining a Service"),Object(o.b)("p",null,"Now we can create a service that returns information about our company:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"service {\n    company: Company\n}\n")),Object(o.b)("p",null,"This allows us to make simple requests against our company:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Request"),Object(o.b)("th",{parentName:"tr",align:"left"},"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company?$select=stockSymbol,name"},"http://rapid-pro.org/company?select=stockSymbol,name")),Object(o.b)("td",{parentName:"tr",align:"left"},"get the stock symbol and name of the company")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"PATCH ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/company"},"http://rapid-pro.org/company")," ",Object(o.b)("br",null),' { "name":"Spacely\'s Space Sprockets" }'),Object(o.b)("td",{parentName:"tr",align:"left"},"update the company name")))),Object(o.b)("h3",{id:"defining-a-structured-type-property"},"Defining a Structured Type Property"),Object(o.b)("p",null,"Now let's say that we wanted to add employees to our company."),Object(o.b)("p",null,"First, we would define the employee type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type Employee\n{\n    key id: Integer\n    firstName : String\n    lastName : String\n    title: String\n}\n")),Object(o.b)("p",null,"The id property is identified as a key, meaning that instances of employees within a collection can be referenced by their id."),Object(o.b)("p",null,"Now we can add employees to our company:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    stockSymbol: String\n    name: String\n    incorporated: Date\n    employees: [Employee]\n}\n")),Object(o.b)("p",null,"The employees property is a collection of our employee type. Because it is a collection, the type is enclosed in square brackets ",Object(o.b)("inlineCode",{parentName:"p"},"["),"...",Object(o.b)("inlineCode",{parentName:"p"},"]"),"."),Object(o.b)("p",null,"Now we can get employees for our company:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Request"),Object(o.b)("th",{parentName:"tr",align:"left"},"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company/employees?$select=lastName,title"},"http://rapid-pro.org/company/employees?select=lastName,title")),Object(o.b)("td",{parentName:"tr",align:"left"},"list the last name and title for all employees for the company")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company/employees/1?$select=lastName,title"},"http://rapid-pro.org/company/employees/1?select=lastName,title")),Object(o.b)("td",{parentName:"tr",align:"left"},"get the last name and title of the employee with id=1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company?$select=name&$expand=employees($select=lastName)"},"http://rapid-pro.org/company?select=name&expand=employees(select=lastName)")),Object(o.b)("td",{parentName:"tr",align:"left"},"get the company name and the last names of all of its employees")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"POST ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees"},"http://rapid-pro.org/company/employees")," ",Object(o.b)("br",null),' { "firstName": "Cosmo","lastName": "Spacely","title": "CEO" }'),Object(o.b)("td",{parentName:"tr",align:"left"},"add a new employee")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"DELETE ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/1"},"http://rapid-pro.org/company/employees/1")),Object(o.b)("td",{parentName:"tr",align:"left"},"delete the employee with id=1")))),Object(o.b)("h3",{id:"defining-a-top-level-collection"},"Defining a Top-Level Collection"),Object(o.b)("p",null,"Our service exposes a single top-level company instance."),Object(o.b)("p",null,"We could also add a top-level collection."),Object(o.b)("p",null,"For example, we could reuse the same company type to create a collection of companies that are competitors."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"service {\n    company: Company\n    competitors: [Company]\n}\n")),Object(o.b)("p",null,"Because company is now part of a collection, if we want to reference individual companies within the collection we would define a key. In this case, we use stockSymbol as the key:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    key stockSymbol: String\n    name: String\n    incorporated: Date\n    employees: [Employee]\n}\n")),Object(o.b)("p",null,"Now we can request individual companies within the competitors collection:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Request"),Object(o.b)("th",{parentName:"tr",align:"left"},"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"POST ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/competitors"},"http://rapid-pro.org/competitors")," ",Object(o.b)("br",null),' { "stockSymbol":"cgswl", "name":"Cogswell\'s Cosmic COGs" "incorporated":"2054-10-04T00:00:00Z" }'),Object(o.b)("td",{parentName:"tr",align:"left"},"create a new competitor")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/competitors?$select=name"},"http://rapid-pro.org/competitors?select=name")),Object(o.b)("td",{parentName:"tr",align:"left"},"list the names of all of the competitors")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/competitors/cgswl?$select=name"},"http://rapid-pro.org/competitors/cgswl?select=name")),Object(o.b)("td",{parentName:"tr",align:"left"},"get the name of the competitor with the stock symbol cgswl")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/competitors/cgswl/employees?$select=lastName"},"http://rapid-pro.org/competitors/cgswl/employees?select=lastName")),Object(o.b)("td",{parentName:"tr",align:"left"},"get the last name of employees for the competitor with the stock symbol cgswl")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"DELETE ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/competitors/cgswl"},"http://rapid-pro.org/competitors/cgswl")),Object(o.b)("td",{parentName:"tr",align:"left"},"delete the competitor with the stock symbol cgswl")))),Object(o.b)("h3",{id:"defining-an-enum"},"Defining an Enum"),Object(o.b)("p",null,"Enumerations allow us to define a string-valued property with a fixed set of values."),Object(o.b)("p",null,'Let\'s say that we wanted to define an employmentType enumeration, with possible values "salaried" and "hourly". We could do so as follows:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"enum EmploymentType\n{\n    salaried\n    hourly\n}\n")),Object(o.b)("p",null,"Now we could use that employmentType enum in our employees example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type Employee\n{\n    key id: Integer\n    firstName: String\n    lastName: String\n    title: String\n    employeeType: EmploymentType\n}\n")),Object(o.b)("h3",{id:"defining-a-structured-property-without-identity"},"Defining a Structured Property without Identity"),Object(o.b)("p",null,'Our employee has first name and last name properties. We could define a "fullName" type to group those properties together:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type FullName\n{\n    firstName: String\n    lastName: String\n}\n")),Object(o.b)("p",null,"and then use that type in our employee:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type Employee\n{\n    key id: Integer\n    name: FullName\n    title: String\n}\n")),Object(o.b)("h3",{id:"defining-methods"},"Defining Methods"),Object(o.b)("p",null,"RAPID supports functions and actions."),Object(o.b)("p",null,"A function takes zero or more input parameters, and returns a value. Functions must not have side-affects."),Object(o.b)("p",null,'We can define a "topEmployees" function on our company:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    key stockSymbol: String\n    name: String\n    incorporated: Date\n    employees: [Employee]\n    topEmployees(num: Integer) : [Employee]\n}\n")),Object(o.b)("p",null,'topEmployees takes a single Integer parameter "num" and returns a collection of employees.'),Object(o.b)("p",null,"Functions are invoked using a GET request. Function parameters are passed in the URL."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Request"),Object(o.b)("th",{parentName:"tr",align:"left"},"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company/Jetsons.Models.topEmployees(num=10)"},"http://rapid-pro.org/company/topEmployees?num=10")),Object(o.b)("td",{parentName:"tr",align:"left"},"get the company's top 10 employees")))),Object(o.b)("p",null,"An action takes zero or more input parameters and may or may not return a value. Actions may have side-affects."),Object(o.b)("p",null,'We can define a "youAreFired" action on our company that takes a string parameter "reason":'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    key stockSymbol: String\n    name: String\n    incorporated: Date\n    employees: [Employee]\n    topEmployees(num: Integer): [Employee]\n    action youAreFired(reason: String)\n}\n")),Object(o.b)("p",null,"youreFired has the ",Object(o.b)("inlineCode",{parentName:"p"},"action")," attribute to show that it is an action and may have side-affects. It does not return a value."),Object(o.b)("p",null,"Because actions may have side-affects, they are invoked using POST. Their parameters are passed in the body of the request."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Request"),Object(o.b)("th",{parentName:"tr",align:"left"},"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"POST ",Object(o.b)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/1/youreFired"},"http://rapid-pro.org/company/employees/1/youreFired")," ",Object(o.b)("br",null),' { "reason": "Embezzlement" }'),Object(o.b)("td",{parentName:"tr",align:"left"},"invoke the youreFired action on employee with id = 1")))),Object(o.b)("p",null,"Actions and functions may also be defined on the service."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rsdl"},"service {\n    company: Company\n    competitors: [Company]\n    currentStockPrice(stockSymbol: String): Decimal\n}\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Request"),Object(o.b)("th",{parentName:"tr",align:"left"},"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"GET ",Object(o.b)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/currentStockPrice(stockSymbol=cgswl)"},"http://rapid-pro.org/currentStockPrice?stockSymbol=cgswl")),Object(o.b)("td",{parentName:"tr",align:"left"},"get the current stock price for cgswl")))))}b.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,u=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return n?r.a.createElement(u,p(p({ref:t},i),{},{components:n})):r.a.createElement(u,p({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);