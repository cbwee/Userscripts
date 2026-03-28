// ==UserScript==
// @name         Google Param Reorder
// @version      1.0
// @description
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function(){
  const u = new URL(location.href), p = u.searchParams
  if (!p.has('q')) return
  const v = p.get('q'); p.delete('q')
  const n = new URLSearchParams([['q', v], ...p])
  history.replaceState(null, '', u.origin + u.pathname + '?' + n)
})();
