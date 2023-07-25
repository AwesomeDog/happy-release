// ==UserScript==
// @name         invest-research
// @namespace    http://tampermonkey.net/
// @version      0.0.6
// @description  try to take over the world!
// @author
// @match             *://*.10jqka.com.cn/*
// @match             *://xueqiu.com/*
// @match             *://*.eastmoney.com/*
// @match             *://*.nxny.com/*
// @match             *://wglh.com/*
// @match             *://*.datayes.com/*
// @match             *://*.yuncaijing.com/*
// @match             *://*.taoguba.com.cn/*
// @match             *://finance.sina.com.cn/*
// @match             *://*.futunn.com/*
// @match             *://*.stock.sohu.com/*
// @match             *://*gu.qq.com/*
// @icon              https://xueqiu.com/favicon.ico


// ==/UserScript==

;(function () {
  'use strict'
  console.log("Starting 👌👌👌👌👌 invest-research. chrome://flags/Block insecure private network requests")
  if (location.href === 'http://localhost:8080/') return
  var script = document.createElement('script')
  script.src = 'https://github.com/AwesomeDog/happy-release/releases/download/ir0.0.6/app.bundle.js'
  document.body.appendChild(script)
})()
