(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["24e33364"],{"575e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-sm flex-center"},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[a("div",{staticClass:"frame"},[a("iframe",{attrs:{id:"frame_almoco",src:"https://tiny.cc/ReservarAlmoco",width:"100%",height:"auto",frameborder:"0",marginheight:"0",marginwidth:"0"}},[e._v("Carregando…")])])])]),a("q-inner-loading",{attrs:{showing:e.visible}},[a("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],s={name:"Almoco",data:function(){return{visible:!1,showData:!1}},methods:{showLoading:function(){var e=this;this.visible=!0,this.showData=!1,setTimeout((function(){e.visible=!1,e.showData=!0}),2500),setTimeout((function(){e.$el.querySelector("iframe").style.height="-webkit-fill-available",e.$el.querySelector("iframe").style.width="-webkit-fill-available"}),3e3)}},mounted:function(){this.showLoading()}},o=s,r=(a("669b"),a("2877")),l=a("fe09"),c=Object(r["a"])(o,i,n,!1,null,"2f3b362e",null);t["default"]=c.exports;c.options.components=Object.assign({QPage:l["z"],QInnerLoading:l["q"],QSpinnerTail:l["H"]},c.options.components||{})},"669b":function(e,t,a){"use strict";var i=a("b019"),n=a.n(i);n.a},b019:function(e,t,a){}}]);