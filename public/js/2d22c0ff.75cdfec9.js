(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh Lpr fFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),n("q-toolbar-title",{staticClass:"column flex-center"},[e._v("\n        "+e._s(e.$route.meta.title)+"\n      ")]),n("q-btn",{attrs:{flat:"",round:"",dense:"",to:"/login"}},[n("q-icon",{attrs:{name:"perm_identity"}})],1)],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2",mini:e.miniState,width:220,breakpoint:500},on:{mouseover:function(t){e.miniState=!1},mouseout:function(t){e.miniState=!0}},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},e._l(e.menuList,(function(t,o){return n("q-list",{key:o},[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"a",to:t.link,exact:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.icon}})],1),n("q-item-section",[e._v("\n          "+e._s(t.label)+"\n        ")])],1),n("q-separator")],1)})),1),n("q-page-container",[n("router-view")],1)],1)},a=[],i=n("b06b"),r=[{icon:"r_home",label:"Início",link:"/"},{icon:"r_account_balance",label:"Local de culto",link:"/local"},{icon:"r_home_work",label:"Pequenos grupos",link:"/groups"},{icon:"r_local_dining",label:"Almoço",link:"/almoco"},{icon:"r_subscriptions",label:"Vídeos",link:"/videos"},{icon:"r_photo",label:"Fotos",link:"/photos"},{icon:"r_event",label:"Aconselhamento",link:"/aconselhamento"}],l={name:"MyLayout",data:function(){return{leftDrawerOpen:!1,menuList:r,miniState:!0}},methods:{openURL:i["a"]}},s=l,c=n("2877"),u=n("fe09"),p=Object(c["a"])(s,o,a,!1,null,null,null);t["default"]=p.exports;p.options.components=Object.assign({QLayout:u["v"],QHeader:u["n"],QToolbar:u["K"],QBtn:u["a"],QIcon:u["o"],QToolbarTitle:u["L"],QDrawer:u["j"],QList:u["w"],QItem:u["s"],QItemSection:u["u"],QSeparator:u["F"],QFooter:u["l"],QTabs:u["I"],QRouteTab:u["D"],QPageContainer:u["A"]},p.options.components||{}),p.options.directives=Object.assign({Ripple:u["M"]},p.options.directives||{})}}]);