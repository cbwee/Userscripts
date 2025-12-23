// ==UserScript==
// @name         Bing URL Cleaner
// @version      0.1
// @description
// @match        *://www.bing.com/search*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function(){
  let p = history.pushState;
  let c = () => {
    let h = location.href;
    let n = h.replace(/([?&])form=[^&]*&?/ig,'$1').replace(/[?&]$/,'');
    if (h !== n) history.replaceState(null,null,n);
  };
  history.pushState = (...a) => { p.apply(history,a); c() };
  addEventListener('popstate', c);
  c();
})();
