// ==UserScript==
// @name         Bing URL Cleaner
// @version      0.1
// @description
// @match        *://www.bing.com/search*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  const k = ['q', 'first', 'filters', 'setlang', 'nfpr'];
  const p = history.pushState, r = history.replaceState;
  const c = () => {
    const u = new URL(location.href);
    [...u.searchParams.keys()].forEach(x => !k.includes(x.toLowerCase()) && u.searchParams.delete(x));
    if (u.href !== location.href) r.call(history, history.state, '', u);
  };
  history.pushState = function(...a) { p.apply(this, a); c() };
  history.replaceState = function(...a) { r.apply(this, a); c() };
  addEventListener('popstate', c);
  addEventListener('pageshow', c);
  c();
})();
