(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{2479:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"q-pa-md q-gutter-md row justify-center"},[e("div",{staticStyle:{"min-width":"342px"}},[e("q-card",{staticClass:"q-pa-md q-mb-lg",attrs:{inline:"",color:"white"}},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"text-subtitle2"},[t._v("Notificação")])]),e("div",[e("q-form",{staticClass:"q-gutter-sm q-pa-sm",on:{submit:t.notificar}},[e("q-input",{ref:"input_titulo",attrs:{placeholder:"Título",outlined:"",clearable:"",rules:[function(t){return!!t||"Título obrigatório."}],"lazy-rules":""},model:{value:t.titulo,callback:function(i){t.titulo=i},expression:"titulo"}}),e("q-input",{attrs:{placeholder:"Descrição",outlined:"",clearable:"",autogrow:""},model:{value:t.descricao,callback:function(i){t.descricao=i},expression:"descricao"}}),e("q-input",{attrs:{placeholder:"Link destino",outlined:"",clearable:""},model:{value:t.destino,callback:function(i){t.destino=i},expression:"destino"}}),e("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[e("q-btn",{attrs:{label:"Notificar!",type:"submit",color:"primary"}})],1)],1)],1)],1)],1)])])},o=[],s={name:"Notificar",data:function(){return{user:this.$firebase.auth().currentUser,admin:!1,titulo:"",descricao:"",destino:""}},created:function(){var t=this;this.user&&this.$db.ref("perfis").orderByChild("id").equalTo(this.user.uid).once("child_added",(function(i){t.admin=i.val().admin}))},methods:{notificar:function(){this.$db.ref("notification").push({title:this.titulo,body:this.descricao,click_action:this.destino}),this.$q.notify({color:"positive",textColor:"white",position:"center",message:"Notificação enviada!"}),this.titulo="",this.descricao="",this.destino="",this.$refs.input_titulo.resetValidation()}}},n=s,r=e("2877"),c=e("eebe"),l=e.n(c),d=e("9989"),u=e("f09f"),f=e("a370"),p=e("0378"),h=e("27f9"),m=e("4b7e"),b=e("9c40"),q=Object(r["a"])(n,a,o,!1,null,null,null);i["default"]=q.exports;l()(q,"components",{QPage:d["a"],QCard:u["a"],QCardSection:f["a"],QForm:p["a"],QInput:h["a"],QCardActions:m["a"],QBtn:b["a"]})}}]);