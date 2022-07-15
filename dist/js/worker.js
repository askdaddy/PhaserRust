!function webpackUniversalModuleDefinition(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.worker=r():e.worker=r()}(this,()=>(()=>{var __webpack_modules__={"./src/js/worker.js":
/*!**************************!*\
  !*** ./src/js/worker.js ***!
  \**************************/(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval('__webpack_require__.e(/*! import() */ "pkg_wasm_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../pkg/wasm */ "./pkg/wasm.js", 23)).then(module => {\n    onmessage = function (m) {\n        module.action("wasm");\n        const num = module.wasm_add(10, 5);\n        run(num);\n    }\n    function run(num) {\n        postMessage("wasm back");\n        postMessage(num);\n    }\n})\n\n\n\n//# sourceURL=webpack://Rust-wasm/./src/js/worker.js?')}},__webpack_module_cache__={},leafPrototypes,getProto,inProgress;function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=__webpack_modules__,getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var _=Object.create(null);__webpack_require__.r(_);var t={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var o=2&r&&e;"object"==typeof o&&!~leafPrototypes.indexOf(o);o=getProto(o))Object.getOwnPropertyNames(o).forEach(r=>t[r]=()=>e[r]);return t.default=()=>e,__webpack_require__.d(_,t),_},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce((r,_)=>(__webpack_require__.f[_](e,r),r),[])),__webpack_require__.u=e=>"js/"+e+"_worker.js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),inProgress={},__webpack_require__.l=(e,r,_,t)=>{if(inProgress[e])inProgress[e].push(r);else{var o,a;if(void 0!==_)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")=="Rust-wasm:"+_){o=u;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.setAttribute("data-webpack","Rust-wasm:"+_),o.src=e),inProgress[e]=[r];var onScriptComplete=(r,_)=>{o.onerror=o.onload=null,clearTimeout(c);var t=inProgress[e];if(delete inProgress[e],o.parentNode&&o.parentNode.removeChild(o),t&&t.forEach(e=>e(_)),r)return r(_)},c=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=onScriptComplete.bind(null,o.onerror),o.onload=onScriptComplete.bind(null,o.onload),a&&document.head.appendChild(o)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");_.length&&(e=_[_.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e+"../"})(),(()=>{var e={worker:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else{var o=new Promise((_,o)=>t=e[r]=[_,o]);_.push(t[2]=o);var a=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(a,_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var o=_&&("load"===_.type?"missing":_.type),a=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",n.name="ChunkLoadError",n.type=o,n.request=a,t[1](n)}},"chunk-"+r,r)}};var webpackJsonpCallback=(r,_)=>{var t,o,[a,n,i]=_,u=0;if(a.some(r=>0!==e[r])){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(i)i(__webpack_require__)}for(r&&r(_);u<a.length;u++)o=a[u],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=this.webpackChunkRust_wasm=this.webpackChunkRust_wasm||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__("./src/js/worker.js");return __webpack_exports__})());