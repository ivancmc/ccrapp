(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{dab5:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.evt1_visivel,expression:"evt1_visivel"}],staticClass:"elfsight-app-316124ef-897a-4be0-9724-b9acb9c671bb event1"}),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.evt1_visivel,expression:"!evt1_visivel"}],staticClass:"elfsight-app-a36a56df-7d17-49ef-a2ba-6903628f473b event2"})])]),i("q-inner-loading",{attrs:{showing:e.visible}},[i("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},s=[],n={name:"Eventos",data:function(){return{visible:!1,showData:!1,evt1_visivel:!0}},methods:{showLoading:function(){var e=this;this.visible=!0,this.showData=!1,setTimeout((function(){e.visible=!1,e.showData=!0}),2e3),setTimeout((function(){e.$el.querySelector("div.event1").lastChild&&0===e.$el.querySelector("div.event1").lastChild.childElementCount&&(e.evt1_visivel=!1)}),1e3),setTimeout((function(){e.$el.querySelector("a[href*='elfsight']")?e.$el.querySelector("a[href*='elfsight']").style.display="none":e.$q.notify({message:"Problema de rede. Verifique sua conexão com a internet.",color:"negative",position:"center"})}),7e3)}},mounted:function(){this.showLoading()}},o=n,l=i("2877"),r=i("eebe"),v=i.n(r),c=i("9989"),d=i("74f7"),h=i("007d"),u=Object(l["a"])(o,a,s,!1,null,"61659b02",null);t["default"]=u.exports;v()(u,"components",{QPage:c["a"],QInnerLoading:d["a"],QSpinnerTail:h["a"]})}}]);