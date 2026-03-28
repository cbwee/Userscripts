// ==UserScript==
// @name         Google Param Reorder
// @version      1.0
// @description
// @match        https://www.google.com/search*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function (l) {
  var s = l.search;
  if (!s || s.indexOf("?q=") === 0) return;
  var m = s.match(/[?&](q=[^&]+)/);
  if (m) history.replaceState(null, "", "?" + m[1] + s.replace(m[0], "").replace("?", "&") + l.hash);
})(location);
