(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"78fa":function(e,s,o){"use strict";o.r(s);var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.alm1_visivel,expression:"alm1_visivel"}],staticClass:"elfsight-app-4bbbce4a-4164-49c6-a426-c155db9e8006 almoco1"}),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.alm1_visivel,expression:"!alm1_visivel"}],staticClass:"almoco2"})])},i=[],a=(o("4917"),{name:"Com_almoco",data:function(){return{visible:!1,showData:!1,alm1_visivel:!0,desc:[],precos:[],radios:[],regex:"",qtd:[]}},methods:{showLoading:function(){var e=this;this.visible=!0,this.showData=!1,setTimeout((function(){e.visible=!1,e.showData=!0}),2e3),setTimeout((function(){e.$el.querySelector("div.almoco1").lastChild&&0===e.$el.querySelector("div.almoco1").lastChild.childElementCount&&(e.alm1_visivel=!1)}),1e3),setTimeout((function(){if(e.$el.querySelector("a[href*='elfsight']")){for(var s in e.$el.querySelector("a[href*='elfsight']").style.display="none",e.desc=e.$el.querySelectorAll("[class=eapps-form-element-description]"),e.desc)e.desc[s].innerText&&(e.precos[s]=e.desc[s].innerText.match(/\d+/)[0]);for(window.localStorage.setItem("precos",JSON.stringify(e.precos)),s=1;s<=e.precos.length;s++)e.regex='[name$="-'+s+'"]',0!==e.$el.querySelectorAll(e.regex).length&&(e.radios[s]=e.$el.querySelectorAll(e.regex));for(s=1;s<=e.precos.length;s++)for(var o=0;o<e.radios[s].length;o++)e.radios[s][o].setAttribute("onclick","total("+e.precos.length+")")}else e.$q.notify({message:"Problema de rede. Verifique sua conexão com a internet.",color:"negative",position:"center"})}),5e3)}},mounted:function(){this.showLoading()}}),l=a,r=o("2877"),n=Object(r["a"])(l,t,i,!1,null,"0fdc6031",null);s["default"]=n.exports}}]);