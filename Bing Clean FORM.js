// ==UserScript==
// @name         Bing Clean FORM
// @description
// @version      1.0
// @match        https://www.bing.com/search*
// @run-at       document-start
// ==/UserScript==

(() => {
  let a = location.href, b = a.indexOf('?'), c = a.slice(0, b), d = a.slice(b + 1), e = '', f = 0, g = 0;
  while (g !== -1) {
    g = d.indexOf('&', f);
    let h = d.slice(f, g < 0 ? d.length : g);
    if (!(h[0] === 'F' && h[1] === 'O' && h[2] === 'R' && h[3] === 'M' && h[4] === '=')) e += (e ? '&' : '') + h;
    f = g + 1;
  }
  if (e.length < d.length) location.replace(c + (e ? '?' + e : ''));
})();
