(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e8be2"],{"8b24":function(e,i,a){"use strict";a.r(i);var s=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("q-page",{staticClass:"q-pa-sm flex-center"},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.bn1_visivel,expression:"bn1_visivel"}],staticClass:"elfsight-app-3b74b192-3f52-41ae-9ae1-5563df4d05fc banner1"}),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.bn1_visivel,expression:"!bn1_visivel"}],staticClass:"elfsight-app-7dab22a6-3b95-4750-82a2-25a5336e5cd0 banner2"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.wp1_visivel,expression:"wp1_visivel"}],staticClass:"elfsight-app-ea37ab68-080d-4dd2-9484-9dcb8aa3890e whatsapp1"}),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.wp1_visivel,expression:"!wp1_visivel"}],staticClass:"elfsight-app-4c2052b2-06a5-49c7-b7f4-7e9840e98de1 whatsapp2"})])]),a("q-inner-loading",{attrs:{showing:e.visible}},[a("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},t=[],n={name:"Index",data:function(){return{visible:!1,showData:!1,bn1_visivel:!0,wp1_visivel:!0}},methods:{showLoading:function(){var e=this;this.visible=!0,this.showData=!1,setTimeout((function(){e.visible=!1,e.showData=!0}),2e3),setTimeout((function(){e.$el.querySelector("div.banner1").lastChild&&0===e.$el.querySelector("div.banner1").lastChild.childElementCount&&(e.bn1_visivel=!1),e.$el.querySelector("div.whatsapp1").lastChild&&0===e.$el.querySelector("div.whatsapp1").lastChild.childElementCount&&(e.wp1_visivel=!1)}),1e3),setTimeout((function(){e.$el.querySelector("a[href*='elfsight']")?e.$el.querySelector("a[href*='elfsight']").style.display="none":e.$q.notify({message:"Problema de rede. Verifique sua conexão com a internet.",color:"negative",position:"center"})}),7e3)}},mounted:function(){this.showLoading()}},l=n,o=a("2877"),r=a("fe09"),v=Object(o["a"])(l,s,t,!1,null,"42dc47cf",null);i["default"]=v.exports;v.options.components=Object.assign({QPage:r["v"],QInnerLoading:r["m"],QSpinnerTail:r["D"]},v.options.components||{})}}]);