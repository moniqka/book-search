(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({search:"search"}[e]||e)+"."+{search:"4a095401"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={search:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({search:"search"}[e]||e)+"."+{search:"654334b1"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],p.parentNode.removeChild(p),r(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/book-search/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("router-view")],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",{staticClass:"header"},[e._v("SEARCH BOOK APP")])])}],i=(r("5c0b"),r("2877")),c={},s=Object(i["a"])(c,o,a,!1,null,null,null),u=s.exports,l=(r("d3b7"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[e._m(0),r("button",[r("router-link",{attrs:{to:"/search"}},[e._v("Open app")])],1)])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" This application was created for recrutation precess."),r("br"),r("br"),r("span",[e._v("Things to develop:")]),r("br"),e._v(" - clean CSS --\x3e create main scss file for the whole project which contains variables, mixins and defined styles for common elements. (usually I start with creating such file, but this time I have followed steps in project guide and had started with basic styling)"),r("br"),e._v(" - improve RWD and A11Y"),r("br"),e._v(" - upgrade filters "),r("br"),e._v(" - add unit testing ")])}],d=(r("84b1"),{}),h=Object(i["a"])(d,f,p,!1,null,"6159eb28",null),v=h.exports;n["a"].use(l["a"]);var m=[{path:"/",name:"Welcome",component:v},{path:"/search",name:"SearchApp",component:function(){return r.e("search").then(r.bind(null,"e1f6"))}}],b=new l["a"]({routes:m}),g=b,y=r("2f62");n["a"].use(y["a"]);var _=new y["a"].Store({state:{booksByTitle:[]},getters:{booksByTitle:function(e){return e.booksByTitle}},mutations:{SEARCH_BY_TITLE:function(e,t){e.booksByTitle=t}},actions:{searchBookByTitle:function(e,t){var r=e.commit;r("SEARCH_BY_TITLE",t)}},modules:{}}),w=r("bc3a"),E=r.n(w),T=r("2106"),O=r.n(T);n["a"].config.productionTip=!1,n["a"].use(O.a,E.a),n["a"].directive("scroll",{inserted:function(e,t){var r=function r(n){t.value(n,e)&&window.removeEventListener("scroll",r)};window.addEventListener("scroll",r)}}),new n["a"]({router:g,store:_,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"84b1":function(e,t,r){"use strict";var n=r("debb"),o=r.n(n);o.a},"9c0c":function(e,t,r){},debb:function(e,t,r){}});
//# sourceMappingURL=app.040a81a7.js.map