(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c8de8"],{"575e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-sm flex-center"},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[a("div",{staticClass:"elfsight-app-f0c0a8a0-5c21-4dc2-a3db-0245dc3a928d"})])]),a("q-inner-loading",{attrs:{showing:e.visible}},[a("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],s={name:"Almoco",data:function(){return{visible:!1,showData:!1}},methods:{showLoading:function(){var e=this;this.visible=!0,this.showData=!1,setTimeout((function(){e.visible=!1,e.showData=!0}),2500),setTimeout((function(){e.$el.querySelector("a[href*='elfsight']")?e.$el.querySelector("a[href*='elfsight']").style.display="none":e.$q.notify({message:"Problema de rede. Verifique sua conexão com a internet.",color:"negative",position:"center"})}),3500)}},mounted:function(){this.showLoading()}},o=s,r=a("2877"),c=a("fe09"),l=Object(r["a"])(o,i,n,!1,null,null,null);t["default"]=l.exports;l.options.components=Object.assign({QPage:c["x"],QInnerLoading:c["p"],QSpinnerTail:c["E"]},l.options.components||{})}}]);