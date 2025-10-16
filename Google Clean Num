// ==UserScript==
// @name         Google Clean Num
// @description
// @version      1.0
// @match        https://www.google.com/search*
// @run-at       document-start
// ==/UserScript==

(() => {
  let a = new URL(location.href);
  a.searchParams.delete('num');
  if (a.href !== location.href) location.replace(a);
})();
