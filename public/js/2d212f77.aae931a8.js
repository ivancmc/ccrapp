(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d212f77"],{ab55:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{attrs:{padding:""}},[t("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[t("div",{staticClass:"elfsight-app-ea37ab68-080d-4dd2-9484-9dcb8aa3890e"})])]),t("q-inner-loading",{attrs:{showing:e.visible}},[t("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],i={name:"Chat",data:function(){return{visible:!1,showData:!1}},methods:{showLoading:function(){var e=this;this.visible=!0,this.showData=!1,setTimeout((function(){e.visible=!1,e.showData=!0}),1e3),setTimeout((function(){e.$el.querySelector("a[href*='elfsight']")&&(e.$el.querySelector("a[href*='elfsight']").style.display="none")}),3e3)}},mounted:function(){this.showLoading()}},o=i,r=t("2877"),l=t("fe09"),c=Object(r["a"])(o,s,n,!1,null,null,null);a["default"]=c.exports;c.options.components=Object.assign({QPage:l["w"],QInnerLoading:l["o"],QSpinnerGears:l["D"]},c.options.components||{})}}]);