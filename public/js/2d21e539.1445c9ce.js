(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21e539"],{d4a4:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"q-pa-md flex-center"},[t("q-card",{staticClass:"q-pa-md",attrs:{inline:"",color:"white"}},[t("q-card-section",{staticClass:"text-dark text-center"},[t("h5",{staticStyle:{"margin-top":"auto"}},[e._v("Entre com seu e-mail, solicite uma nova senha e acesse seu e-mail para seguir as instruções")])]),t("q-form",[t("q-input",{attrs:{label:"E-mail *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu e-mail"},function(e){return e.includes("@")&&e.includes(".")||"Digite um e-mail válido"}]},on:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.reset_senha(a)}},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),t("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[t("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Solicitar nova senha",color:"primary",flat:"",loading:e.loading},on:{click:e.reset_senha},scopedSlots:e._u([{key:"loading",fn:function(){return[t("q-spinner-facebook")]},proxy:!0}])})],1)],1)],1)],1)},i=[],s=(t("28a5"),t("a481"),{name:"Reset_Pwd",data:function(){return{email:"",loading:!1,codigo:""}},methods:{reset_senha:function(){var e=this;this.loading=!0,this.$firebase.auth().sendPasswordResetEmail(this.email).then((function(){e.$q.notify({message:"E-mail enviado! Acesse seu e-mail para fazer uma nova senha.",color:"accent",position:"center"}),e.$router.replace("/")}),(function(a){e.codigo=a.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Algo deu errado. "+e.$q.lang.auth[e.codigo],color:"negative",position:"center"}),e.loading=!1}))}}}),o=s,r=t("2877"),l=t("fe09"),c=Object(r["a"])(o,n,i,!1,null,"861fef88",null);a["default"]=c.exports;c.options.components=Object.assign({QPage:l["y"],QCard:l["b"],QCardSection:l["d"],QForm:l["m"],QInput:l["r"],QCardActions:l["c"],QBtn:l["a"],QSpinnerFacebook:l["F"]},c.options.components||{})}}]);