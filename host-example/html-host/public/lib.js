!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.MooniWidget=n():e.MooniWidget=n()}(this,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o={open:function(){var e=document.createElement("style");e.innerHTML="\n.mo_mooni-container {\n  display: flex;\n  z-index: 999;\n  background: rgba(0,0,0,.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 5px;\n  justify-content: center;\n  align-items: center;\n  padding-top: 23px;\n}\n.mo_mooni-frame {\n  position: relative;\n  border-radius: 1rem;\n  width: 100%;\n  height: 100%;\n  max-width: 400px;\n  max-height: 600px;\n  background: #fff;\n}\n.mo_mooni-closer {\n  position: absolute;\n  right: 16px;\n  top: -20px;\n  cursor: pointer;\n  color: white;\n  font-family: sans-serif;\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n";var n=document.createElement("div");n.className="mo_mooni-container";var t=document.createElement("div");t.id="mooni-container-".concat(Date.now()),t.className="mo_mooni-frame";var o=document.createElement("div");o.className="mo_mooni-closer",o.innerHTML="Close️",n.appendChild(t),document.body.appendChild(n),document.head.appendChild(e);var r=document.createElement("iframe");r.src="https://mooni-git-develop.pakokrew.now.sh",r.style.height="100%",r.style.width="100%",r.style.border="0 transparent",r.style.borderRadius="1rem",t.appendChild(r),t.appendChild(o);var i=function(){document.body.removeChild(n),document.head.removeChild(e)};return o.onclick=i,i}};n.default=o}]).default}));