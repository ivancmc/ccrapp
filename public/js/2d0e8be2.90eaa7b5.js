(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e8be2"],{"8b24":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"q-pa-sm flex-center"},[t("div",{staticClass:"q-pa-xs",staticStyle:{"max-width":"360px"}},[t("q-carousel",{staticClass:"rounded-borders",attrs:{animated:"",swipeable:"","no-arrows":"","no-navigation":"",infinite:"",autoplay:e.autoplay,padding:"","transition-prev":"slide-right","transition-next":"slide-left",height:"260px"},scopedSlots:e._u([{key:"control",fn:function(){return[t("q-carousel-control",{staticClass:"text-white",staticStyle:{background:"rgba(0, 0, 0, .2)",padding:"2px","border-radius":"0px"},attrs:{position:"top-right",offset:[18,18]}},[t("q-toggle",{attrs:{dense:"",dark:"",color:"blue",label:""},model:{value:e.autoplay,callback:function(a){e.autoplay=a},expression:"autoplay"}})],1)]},proxy:!0}]),model:{value:e.slide,callback:function(a){e.slide=a},expression:"slide"}},[t("q-carousel-slide",{attrs:{name:1,"img-src":"statics/cantina.jpeg"}}),t("q-carousel-slide",{attrs:{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}})],1)],1),t("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[t("div",{staticClass:"elfsight-app-f0c0a8a0-5c21-4dc2-a3db-0245dc3a928d"})])]),t("q-inner-loading",{attrs:{showing:e.visible}},[t("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)},i=[],n={name:"PageIndex",data:function(){return{slide:1,autoplay:!0,visible:!1,showData:!1}},methods:{showLoading:function(){var e=this;this.visible=!0,this.showData=!1,setTimeout((function(){e.visible=!1,e.showData=!0}),1e3),setTimeout((function(){e.$el.querySelector("a[href*='elfsight']")&&(e.$el.querySelector("a[href*='elfsight']").style.display="none")}),3e3)}},mounted:function(){this.showLoading()}},o=n,l=t("2877"),r=t("fe09"),c=Object(l["a"])(o,s,i,!1,null,null,null);a["default"]=c.exports;c.options.components=Object.assign({QPage:r["w"],QCarousel:r["e"],QCarouselSlide:r["g"],QCarouselControl:r["f"],QToggle:r["F"],QInnerLoading:r["o"],QSpinnerGears:r["D"]},c.options.components||{})}}]);