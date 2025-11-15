// ==UserScript==
// @name         Bing Search Clean
// @description
// @version      1.0
// @match        https://www.bing.com/search*
// @run-at       document-start
// ==/UserScript==

(() => {
  const a = new Set(['q','first','rdrig'])
  const b = location.search.slice(1)
  const c = b.split('&')
  let d = ''
  for (const e of c) if (a.has(e.slice(0, e.indexOf('=')))) d += (d ? '&' : '') + e
  if (d !== b) location.replace(location.pathname + (d ? '?' + d : ''))
})()
