!function(){"use strict";var e,t,r,n,o,u,a,i,l,c,s,d={3027:function(e,t,r){var n={};r.r(n),r.d(n,{authConfig:function(){return v},default:function(){return g},request:function(){return x},storeConfig:function(){return b}});var o=r(81510),u=r(52676);r(88873),r(59342);var a=r(47665),i=r(21322),l=r(48680),c=r(53267),s=r(77659);let d=[l.Z],f=[c.ZP,s.ZP];var p=r(922),m=r(10844),h=r(25033),y=r(48071),g=(0,p._Q)(()=>({}));let v=(0,m.F)(async e=>{let{userInfo:t={}}=e;return t.error&&p.m8?.push(`/login?redirect=${window.location.pathname}`),{initialAuth:{admin:"admin"===t.userType,user:"user"===t.userType}}}),b=(0,h.Z)(async e=>{let{userInfo:t={}}=e;return{initialStates:{user:{currentUser:t}}}}),x=(0,y.k)(()=>({baseURL:"/api"}));var j=r(11141),O=r(7996);u.Fragment;let _={app:n,runtimeModules:{commons:f,statics:d},createRoutes:e=>{let{requestContext:t,renderMode:n}=e;return[{path:"",async lazy(){let e=await Promise.all([r.e(796),r.e(640),r.e(886),r.e(467)]).then(r.bind(r,34904));return{...e,Component:()=>(0,j.pW)({routeId:"layout",isLayout:!0,routeExports:e}),loader:(0,j.Bx)({routeId:"layout",requestContext:t,renderMode:n,module:e})}},errorElement:(0,o.tZ)(j.Qf,{}),componentName:"layout",index:void 0,id:"layout",exact:!0,exports:["default"],layout:!0,children:[{path:"escalator-list",async lazy(){let e=await Promise.all([r.e(80),r.e(883),r.e(796),r.e(640),r.e(993),r.e(397)]).then(r.bind(r,42524));return{...e,Component:()=>(0,j.pW)({routeId:"escalator-list",isLayout:!1,routeExports:e}),loader:(0,j.Bx)({routeId:"escalator-list",requestContext:t,renderMode:n,module:e})}},errorElement:(0,o.tZ)(j.Qf,{}),componentName:"escalator-list-index",index:!0,id:"escalator-list",exact:!0,exports:["default","pageConfig"]},{path:"project-list",async lazy(){let e=await Promise.all([r.e(80),r.e(883),r.e(796),r.e(640),r.e(993),r.e(487)]).then(r.bind(r,66721));return{...e,Component:()=>(0,j.pW)({routeId:"project-list",isLayout:!1,routeExports:e}),loader:(0,j.Bx)({routeId:"project-list",requestContext:t,renderMode:n,module:e})}},errorElement:(0,o.tZ)(j.Qf,{}),componentName:"project-list-index",index:!0,id:"project-list",exact:!0,exports:["default","pageConfig"]},{path:"user-manager",async lazy(){let e=await Promise.all([r.e(80),r.e(883),r.e(796),r.e(640),r.e(993),r.e(670)]).then(r.bind(r,25223));return{...e,Component:()=>(0,j.pW)({routeId:"user-manager",isLayout:!1,routeExports:e}),loader:(0,j.Bx)({routeId:"user-manager",requestContext:t,renderMode:n,module:e})}},errorElement:(0,o.tZ)(j.Qf,{}),componentName:"user-manager-index",index:!0,id:"user-manager",exact:!0,exports:["default","pageConfig"]},{path:"*",async lazy(){let e=await Promise.all([r.e(796),r.e(701)]).then(r.bind(r,53928));return{...e,Component:()=>(0,j.pW)({routeId:"*",isLayout:!1,routeExports:e}),loader:(0,j.Bx)({routeId:"*",requestContext:t,renderMode:n,module:e})}},errorElement:(0,o.tZ)(j.Qf,{}),componentName:"$",index:void 0,id:"*",exact:!0,exports:["default"]}]}]},basename:(()=>{let e=(0,a.Z)(n);return e?.router?.basename??"/"??""})(),hydrate:!1,memoryRouter:!1,dataLoaderFetcher:e=>window.fetch(e.url,e),dataLoaderDecorator:e=>e,runtimeOptions:{appStore:O.Z}},C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)({..._,...e,runtimeOptions:{..._.runtimeOptions||{},...e.runtimeOptions}})},w=(e,t)=>e.runApp?e.runApp(C,_):C(t);!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};w(n,e)}()},54382:function(e,t,r){r.d(t,{$L:function(){return o},UG:function(){return n},uk:function(){return u}});let n=!1,o=!0,u=!1,a="object"==typeof navigator?navigator.userAgent||navigator.swuserAgent:"";/.+AliApp\((\w+)\/((?:\d+\.)+\d+)\).* .*(WindVane)(?:\/((?:\d+\.)+\d+))?.*/.test(a)&&o&&"undefined"!=typeof WindVane&&WindVane.call},922:function(e,t,r){function n(e){return"function"!=typeof e?()=>e:e}r.d(t,{rU:function(){return o.rU},j3:function(){return u.j3},NY:function(){return l.NY},MT:function(){return l.MT},_Q:function(){return a._},Cv:function(){return n},m8:function(){return i.t},TH:function(){return u.TH}});var o=r(91366),u=r(97714),a=r(47665),i=r(35587);r(82193),r(2474);var l=r(53267);r(77659)},7996:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(922),o=(0,n.NY)({state:{currentUser:{}},reducers:{updateCurrentUser(e,t){e.currentUser=t}}}),u=(0,n.MT)({user:o})}},f={};function p(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,p),r.loaded=!0,r.exports}p.m=d,e=[],p.O=function(t,r,n,o){if(r){o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o];return}for(var a=1/0,u=0;u<e.length;u++){for(var r=e[u][0],n=e[u][1],o=e[u][2],i=!0,l=0;l<r.length;l++)a>=o&&Object.keys(p.O).every(function(e){return p.O[e](r[l])})?r.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},p.t=function(e,n){if(1&n&&(e=this(e)),8&n||"object"==typeof e&&e&&(4&n&&e.__esModule||16&n&&"function"==typeof e.then))return e;var o=Object.create(null);p.r(o);var u={};t=t||[null,r({}),r([]),r(r)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach(function(t){u[t]=function(){return e[t]}});return u.default=function(){return e},p.d(o,u),o},p.d=function(e,t){for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.f={},p.e=function(e){return Promise.all(Object.keys(p.f).reduce(function(t,r){return p.f[r](e,t),t},[]))},p.u=function(e){return"js/"+(({80:"bc40af40",397:"p_escalator-list-index",467:"p_layout",487:"p_project-list-index",670:"p_user-manager-index",701:"p_$",883:"30e1f94b"})[e]||e)+".js"},p.miniCssF=function(e){return"css/"+(467===e?"p_layout":e)+".css"},p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="pc-escalator-manager:",p.l=function(e,t,r,u){if(n[e]){n[e].push(t);return}if(void 0!==r)for(var a,i,l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var s=l[c];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+r){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,p.nc&&a.setAttribute("nonce",p.nc),a.setAttribute("data-webpack",o+r),a.src=e),n[e]=[t];var d=function(t,r){a.onerror=a.onload=null,clearTimeout(f);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(function(e){return e(r)}),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),i&&document.head.appendChild(a)},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},p.p="/",u=function(e,t,r,n){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(u){if(o.onerror=o.onload=null,"load"===u.type)r();else{var a=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||t,l=Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=i,o.parentNode.removeChild(o),n(l)}},o.href=t,document.head.appendChild(o),o},a=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}for(var a=document.getElementsByTagName("style"),n=0;n<a.length;n++){var o=a[n],u=o.getAttribute("data-href");if(u===e||u===t)return o}},i={179:0},p.f.miniCss=function(e,t){i[e]?t.push(i[e]):0!==i[e]&&({467:1,640:1,993:1})[e]&&t.push(i[e]=new Promise(function(t,r){var n=p.miniCssF(e),o=p.p+n;if(a(n,o))return t();u(e,o,t,r)}).then(function(){i[e]=0},function(t){throw delete i[e],t}))},l={179:0,160:0},p.f.j=function(e,t){var r=p.o(l,e)?l[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if(160!=e){var n=new Promise(function(t,n){r=l[e]=[t,n]});t.push(r[2]=n);var o=p.p+p.u(e),u=Error();p.l(o,function(t){if(p.o(l,e)&&(0!==(r=l[e])&&(l[e]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}},"chunk-"+e,e)}else l[e]=0}},p.O.j=function(e){return 0===l[e]},c=function(e,t){var r,n,o=t[0],u=t[1],a=t[2],i=0;if(o.some(function(e){return 0!==l[e]})){for(r in u)p.o(u,r)&&(p.m[r]=u[r]);if(a)var c=a(p)}for(e&&e(t);i<o.length;i++)n=o[i],p.o(l,n)&&l[n]&&l[n][0](),l[n]=0;return p.O(c)},(s=self.webpackChunkpc_escalator_manager=self.webpackChunkpc_escalator_manager||[]).forEach(c.bind(null,0)),s.push=c.bind(null,s.push.bind(s));var m=p.O(void 0,[774,160,778],function(){return p(3027)});p.O(m)}();