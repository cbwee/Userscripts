// ==UserScript==
// @name         Programiz Editor Clear
// @version      1.0
// @description
// @match        https://www.programiz.com/*/online-compiler/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

/* global ace */
(function(){function b(c){try{if(typeof ace!=='undefined'){const d=ace.edit('editor');d.session.setValue('');d.selection.clearSelection();d.gotoLine(1,0);d.focus();c.disconnect();return 1}}catch{}return 0}const a=new MutationObserver((_,c)=>b(c));if(!b(a))a.observe(document.getElementById('editor')||document.body,{childList:1,subtree:1});setTimeout(()=>a.disconnect(),1e3)})()
