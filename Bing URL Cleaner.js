// ==UserScript==
// @name         Bing URL Cleaner
// @version      0.1
// @description
// @match        *://www.bing.com/search*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function c(l,r){
  let h=l.href,n=h.replace(/([?&])form=[^&]*&?/ig,'$1').replace(/[?&]$/,'');
  if(h!==r)h!==n?history.replaceState(0,0,r=n):r=h;
  requestAnimationFrame(()=>c(l,r));
})(location);
