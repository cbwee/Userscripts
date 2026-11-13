// ==UserScript==
// @name         Search URL Cleaner
// @version      0.1
// @description  Clean and reorder Bing and Google search URLs
// @match        *://www.bing.com/search*
// @match        *://www.google.com/search*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  const k = new Set(['q', 'first', 'start', 'filters', 'qft', 'tbs', 'udm', 'tbm', 'setlang', 'hl', 'mkt', 'gl', 'cc', 'lr', 'cr', 'uule', 'adlt', 'safe', 'nfpr', 'filter', 'pws', 'as_q', 'as_epq', 'as_oq', 'as_eq', 'as_nlo', 'as_nhi', 'as_sitesearch', 'as_filetype', 'as_occt', 'as_dt', 'as_ft', 'as_rights', 'as_drrb']);
  const p = history.pushState, r = history.replaceState;
  const c = () => {
    if (!location.search) return;
    const u = new URL(location.href), q = [], a = [];
    let changed = false;
    for (const [x, v] of u.searchParams) {
      if (!k.has(x.toLowerCase())) changed = true;
      else if (x.toLowerCase() === 'q') { if (a.length) changed = true; q.push([x, v]) }
      else a.push([x, v]);
    }
    if (!changed) return;
    u.search = new URLSearchParams([...q, ...a]);
    r.call(history, history.state, '', u);
  };
  history.pushState = function(...a) { p.apply(this, a); c() };
  history.replaceState = function(...a) { r.apply(this, a); c() };
  addEventListener('popstate', c);
  addEventListener('pageshow', c);
  c();
})();
