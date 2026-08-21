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
  const a=b=>{try{const c=new URL(decodeURIComponent(b));if(c.hostname.endsWith('youtube.com')||c.hostname.endsWith('youtube-nocookie.com')){const d=c.pathname.indexOf('/embed/')===0?c.pathname.split('/')[2]:c.searchParams.get('v');
    if(d)return'https://www.youtube.com/watch?v='+d}return c.href}catch{return b}};
  const b=()=>{const c=document.getElementsByTagName('iframe');for(let d=0;d<c.length;d++){const e=c[d].src;if(e){const f=a(e);if(f!==location.href){location.replace(f);return true}}}return false};
  if(/videos\/search/i.test(location.pathname)&&!/[?&](view=detail|mid=)/i.test(location.search))return;
  if(!/(view=detail|riverview|mid=)/i.test(location.href))return;
  const c=new MutationObserver(()=>{if(b())c.disconnect()});
  if(!b())c.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['src']});
})();
