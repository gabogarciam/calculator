(()=>{"use strict";var e={582:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(15),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,'*,*:before,*:after{box-sizing:inherit}html,body{font-family:"Roboto",sans-serif;font-weight:300;margin:0;padding:0;height:100%;box-sizing:border-box}#root-calculator{height:100%}.display_calculator{font-size:5em;text-align:right;height:30%}.keys_calculator{height:70%;display:grid;grid-template:repeat(4, 1fr)/repeat(4, 1fr);background-color:#f1f2f6}.last_grid{display:grid}.btn{background-position:center;transition:background .8s}.btn:hover{background:#f1f2f6 radial-gradient(circle, transparent 1%, #d4d6dd 1%) center/15000%}.btn:active{background-color:#6eb9f7;background-size:100%;transition:background 0s}button{border:0;border-radius:50%;padding:0;outline:none;appearance:none;font-size:25px;font-family:inherit;font-weight:inherit;background:#f1f2f6 radial-gradient(circle, transparent 1%, #f1f2f6 1%) center/15000%}',"",{version:3,sources:["webpack://public/stylesheets/styles.scss"],names:[],mappings:"AAAA,mBACI,kBAAA,CAGJ,UAEI,+BAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CACA,WAAA,CACA,qBAAA,CAGJ,iBACI,WAAA,CAGJ,oBACI,aAAA,CACA,gBAAA,CACA,UAAA,CAGJ,iBACI,UAAA,CACA,YAAA,CACA,2CAAA,CACA,wBAAA,CAGJ,WACI,YAAA,CAGJ,KACI,0BAAA,CACA,yBAAA,CAGJ,WACI,oFAAA,CAGJ,YACI,wBAAA,CACA,oBAAA,CACA,wBAAA,CAGJ,OACI,QAAA,CACA,iBAAA,CACA,SAAA,CACA,YAAA,CACA,eAAA,CACA,cAAA,CACA,mBAAA,CACA,mBAAA,CAEA,oFAAA",sourcesContent:["*, *:before, *:after {\n    box-sizing: inherit;\n}\n\nhtml,\nbody {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n#root-calculator {\n    height: 100%;\n}\n\n.display_calculator {\n    font-size: 5em;\n    text-align: right;\n    height: 30%;\n}\n\n.keys_calculator {\n    height: 70%;\n    display: grid;\n    grid-template: repeat(4, 1fr) / repeat(4, 1fr);\n    background-color: rgba(241, 242, 246,1.0);\n}\n\n.last_grid {\n    display: grid;\n}\n\n.btn {\n    background-position: center;\n    transition: background 0.8s;\n}\n\n.btn:hover {\n    background: rgba(241, 242, 246,1.0) radial-gradient(circle, transparent 1%, rgb(212, 214, 221) 1%) center/15000%;\n}\n\n.btn:active {\n    background-color: #6eb9f7;\n    background-size: 100%;\n    transition: background 0s;\n}\n\nbutton {\n    border: 0;\n    border-radius: 50%;\n    padding: 0;\n    outline: none;\n    appearance: none;\n    font-size: 25px;\n    font-family: inherit;\n    font-weight: inherit;\n    // cursor: pointer;\n    background: rgba(241, 242, 246,1.0) radial-gradient(circle, transparent 1%,rgba(241, 242, 246,1.0) 1%) center/15000%;\n}\n"],sourceRoot:""}]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},15:e=>{function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,a=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[1],i=a[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(s," */"),d=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(d).concat([l]).join("\n")}return[o].join("\n")}},379:(e,n,t)=>{var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function i(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=i(d),A={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(A)):o.push({identifier:d,updater:b(A,n),references:1}),r.push(d)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function A(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function b(e,n){var t,r,a;if(n.singleton){var o=p++;t=f||(f=s(n)),r=u.bind(null,t,o,!1),a=u.bind(null,t,o,!0)}else t=s(n),r=A.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=i(t[r]);o[a].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=i(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}}},n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(582);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var a={0:"7",1:"8",2:"9",3:{action:"erase",value:"AC"},4:"4",5:"5",6:"6",7:{action:"divide",value:"/"},8:"1",9:"2",10:"3",11:{action:"multiply",value:"*"},12:"0",13:{action:"decimal",value:"."},14:{action:"equal",value:"="},15:{action:"sustract",value:"-"},16:{action:"add",value:"+"}},o=document.querySelector("#root-calculator");["display_calculator","keys_calculator"].forEach((function(e){var n=document.createElement("div");n.classList.add(e),o.appendChild(n)})),document.querySelector(".display_calculator").innerText="0";var i=document.querySelector(".keys_calculator"),c=document.createElement("div");c.classList.add("last_grid");for(var s=0;s<Object.keys(a).length;s+=1){var l=document.createElement("button");l.classList.add("btn"),a[s]>=0&&a[s]<=9?(l.classList.add("key".concat(a[s])),l.setAttribute("value",a[s]),l.innerText=a[s],i.appendChild(l)):"sustract"===a[s].action||"add"===a[s].action?(a[s].action,i.appendChild(c),l.classList.add("key_operator"),l.setAttribute("data-action",a[s].action),l.innerText=a[s].value,c.appendChild(l)):(l.classList.add("key_operator"),l.setAttribute("data-action",a[s].action),l.innerText=a[s].value,i.appendChild(l))}document.querySelector(".keys_calculator").addEventListener("click",(function(e){if(e.target.matches("button")){var n=e.path[0].getAttribute("value")?e.path[0].value:e.path[0].getAttribute("data-action");console.log(n)}})),addEventListener("keydown",(function(e){console.log(e)}))})()})();
//# sourceMappingURL=bundle.js.map