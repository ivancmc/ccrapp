(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"78fa":function(e,l,o){"use strict";o.r(l);var r=function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:e.alm1_visivel,expression:"alm1_visivel"}],staticClass:"elfsight-app-4bbbce4a-4164-49c6-a426-c155db9e8006 almoco1"}),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.alm1_visivel,expression:"!alm1_visivel"}],staticClass:"elfsight-app-d91764cc-cef1-4bcc-9651-b069d12ea093 almoco2"})])},t=[],a=(o("4917"),{name:"Com_almoco",data:function(){return{alm1_visivel:!1,desc:[],precos:[],radios:[],regex:""}},methods:{showLoading:function(){var e=this,l=0,o=0;l=setInterval((function(){if(0!==e.$el.querySelector('[class^="elfsight"]').childElementCount){for(var r in clearInterval(l),e.$el.querySelector("div.almoco1").firstChild&&0===e.$el.querySelector("div.almoco1").firstChild.childElementCount&&(e.alm1_visivel=!1),e.alm1_visivel?e.$el.querySelector("div.almoco2").remove():e.$el.querySelector("div.almoco1").remove(),e.$el.querySelector("a[href*='elfsight']")&&(e.$el.querySelector("a[href*='elfsight']").style.display="none"),e.$el.querySelector('[placeholder^="Nome"]')&&window.localStorage.getItem("username")&&e.$el.querySelector('[placeholder^="Nome"]').setAttribute("value",window.localStorage.getItem("username")),e.desc=e.$el.querySelectorAll("[class=eapps-form-element-description]"),e.desc)e.desc[r].innerText&&(e.precos[r]=e.desc[r].innerText.match(/\d+/)[0]);if(window.localStorage.setItem("precos",JSON.stringify(e.precos)),e.precos){for(r=1;r<=e.precos.length;r++)e.regex='[name$="-'+r+'"]',0!==e.$el.querySelectorAll(e.regex).length&&(e.radios[r]=e.$el.querySelectorAll(e.regex));for(r=1;r<=e.precos.length;r++)for(var t=0;t<e.radios[r].length;t++)e.radios[r][t].setAttribute("onclick","total("+e.precos.length+")"),e.radios[r][t].checked=!1}}else o+=.5;10===o&&(clearInterval(l),e.$q.notify({message:"Problema de rede. Verifique sua conexão com a internet.",color:"negative",position:"center"}))}),500)}},mounted:function(){this.showLoading()}}),i=a,s=o("2877"),c=Object(s["a"])(i,r,t,!1,null,"118543a6",null);l["default"]=c.exports}}]);