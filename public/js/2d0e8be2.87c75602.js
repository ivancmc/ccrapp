(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e8be2"],{"8b24":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-page",{staticClass:"q-pa-sm flex-center"},[t("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.bn1_visivel,expression:"bn1_visivel"}],staticClass:"elfsight-app-3b74b192-3f52-41ae-9ae1-5563df4d05fc banner1"}),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.bn1_visivel,expression:"!bn1_visivel"}],staticClass:"elfsight-app-7dab22a6-3b95-4750-82a2-25a5336e5cd0 banner2"}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.wp1_visivel,expression:"wp1_visivel"}],staticClass:"elfsight-app-ea37ab68-080d-4dd2-9484-9dcb8aa3890e whatsapp1"}),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.wp1_visivel,expression:"!wp1_visivel"}],staticClass:"elfsight-app-4c2052b2-06a5-49c7-b7f4-7e9840e98de1 whatsapp2"})])]),t("q-inner-loading",{attrs:{showing:e.visible}},[t("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},o=[],i={name:"Index",data:function(){return{visible:!1,showData:!1,bn1_visivel:!0,wp1_visivel:!0}},methods:{showLoading:function(){var e=this;this.visible=!0,this.showData=!1,setTimeout((function(){e.visible=!1,e.showData=!0}),2e3),setTimeout((function(){e.$el.querySelector("div.banner1").lastChild&&0===e.$el.querySelector("div.banner1").lastChild.childElementCount&&(e.bn1_visivel=!1),e.$el.querySelector("div.whatsapp1").lastChild&&0===e.$el.querySelector("div.whatsapp1").lastChild.childElementCount&&(e.wp1_visivel=!1)}),1e3),setTimeout((function(){e.$el.querySelector("a[href*='elfsight']")?e.$el.querySelector("a[href*='elfsight']").style.display="none":e.$q.notify({message:"Problema de rede. Verifique sua conexão com a internet.",color:"negative",position:"center"})}),7e3)},requestPermission:function(){var e=this;Notification.requestPermission().then((function(n){"granted"===n?(console.log("Notificações permitidas!"),e.getToken()):console.log("Sem permissão para notificações.")}))},getToken:function(){var e=this;this.$msg.getToken().then((function(n){n?e.sendTokenToServer(n):(console.log("No Instance ID token available. Request permission to generate one."),e.setTokenSentToServer(!1))})).catch((function(n){console.log("An error occurred while retrieving token. ",n),e.setTokenSentToServer(!1)}))},sendTokenToServer:function(e){this.isTokenSentToServer()?console.log("Token already sent to server so won't send it again unless it changes"):(console.log("Sending token to server..."),this.setTokenSentToServer(!0))},isTokenSentToServer:function(){return"1"===window.localStorage.getItem("sentToServer")},setTokenSentToServer:function(e){window.localStorage.setItem("sentToServer",e?"1":"0")},onTokenRefresh:function(){var e=this;this.$msg.onTokenRefresh((function(){e.$msg.getToken().then((function(n){console.log("Token refreshed."),e.setTokenSentToServer(!1),e.sendTokenToServer(n)})).catch((function(e){console.log("Unable to retrieve refreshed token ",e)}))}))}},created:function(){},mounted:function(){this.showLoading()}},a=i,r=t("2877"),l=t("fe09"),c=Object(r["a"])(a,s,o,!1,null,"43b5db72",null);n["default"]=c.exports;c.options.components=Object.assign({QPage:l["v"],QInnerLoading:l["m"],QSpinnerTail:l["D"]},c.options.components||{})}}]);