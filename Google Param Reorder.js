// ==UserScript==
// @name         Google Param Reorder
// @version      1.0
// @description
// @match         https://www.google.com/search*
// @grant         none
// @run-at       document-start
// ==/UserScript==

(function (l) {
  var s = l.search, i = s.indexOf("&q=");
  if (i === -1) return;
  var e = s.indexOf("&", i + 3), q = s.substring(i + 1, e === -1 ? s.length : e);
  history.replaceState(null, "", "?" + q + s.replace("&" + q, "").replace("?", "&") + l.hash);
})(location);
