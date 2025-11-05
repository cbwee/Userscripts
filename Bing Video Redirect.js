// ==UserScript==
// @name         Bing Video Redirect
// @description  Redirects Bing video to original video source.
// @version      1.0
// @match        https://www.bing.com/videos/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  'use strict';
  const a=b=>{try{return decodeURIComponent(b).replace(/\/embed\//,'/watch?v=').replace(/\/player\//,'/')}catch{return b}};
  const b=c=>{if(!c||!c.src)return false;const d=a(c.src);if(d!==location.href){top.location.href=d;return true}return false};
  let c=0;
  const d=()=>{const e=document.getElementsByTagName('iframe');for(let f=0;f<e.length;f+=1)if(b(e[f]))return true;return false};
  const e=()=>{if(/(view=detail|riverview|mid=)/i.test(location.href))requestAnimationFrame(()=>{if(!d()&&c<100){c+=1;e()}})};
  if(/videos\/search/i.test(location.pathname)&&!/[?&](view=detail|mid=)/i.test(location.search))return;
  document.readyState!=='loading'?e():document.addEventListener('DOMContentLoaded',e,{once:true});
})();
