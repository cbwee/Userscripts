// ==UserScript==
// @name         i.mi.com Click Login Button
// @version      0.1
// @description
// @match        https://i.mi.com/
// @match        https://i.mi.com/?*
// @grant        none
// ==/UserScript==

(()=>{let a=0,b;requestAnimationFrame(b=()=>{document.querySelector('.login-btn-hdPJi')?.click()||a++<25&&requestAnimationFrame(b)})})();
