(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2290a2"],{dc6c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"q-pa-md flex-center"},[this.$firebase.auth().currentUser?n("q-card",{staticClass:"card-sign-in q-pa-md",attrs:{inline:"",color:"white"}},[n("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[n("q-icon",{staticStyle:{"font-size":"10em"},attrs:{name:"assignment_ind"}})],1),n("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[n("q-btn",{attrs:{label:"Sair",color:"primary"},on:{click:e.sair}})],1)],1):n("q-card",{staticClass:"q-pa-md",attrs:{inline:"",color:"white"}},[n("div",{staticClass:"float-right"},[n("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"o_live_help"}},[n("q-menu",{attrs:{cover:"","auto-close":""}},[n("q-list",{staticStyle:{width:"max-content"}},[n("q-item",{attrs:{clickable:""},on:{click:e.resetar_senha}},[n("q-item-section",[e._v("Esqueci minha senha")])],1)],1)],1)],1)],1),n("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[n("q-icon",{staticStyle:{"font-size":"5em"},attrs:{name:"assignment_ind"}})],1),n("q-form",[n("q-input",{attrs:{label:"E-mail *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu e-mail"},function(e){return e.includes("@")&&e.includes(".")||"Digite um e-mail válido"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{attrs:{type:"password",label:"Senha *","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Digite uma senha"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.senha,callback:function(t){e.senha=t},expression:"senha"}}),n("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[n("q-btn",{attrs:{label:"Entrar",color:"secondary",loading:e.loading1},on:{click:e.entrar},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)}),n("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Criar conta",color:"primary",flat:"",loading:e.loading2},on:{click:e.registrar},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)})],1)],1)],1)],1)},i=[],o=(n("28a5"),n("a481"),{name:"Login",data:function(){return{email:"",senha:"",loading1:!1,loading2:!1,codigo:""}},methods:{registrar:function(){var e=this;this["loading2"]=!0,this.$firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((function(t){e.$q.notify({message:"Sua conta foi criada com sucesso!",color:"positive",position:"center",icon:"how_to_reg"}),e.$router.replace("/")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Ops.. algo deu errado: "+e.$q.lang.auth[e.codigo],color:"negative",position:"center",icon:"error"}),e["loading2"]=!1,console.log(e.codigo),console.log(t.message)}))},entrar:function(){var e=this;this["loading1"]=!0,this.$firebase.auth().signInWithEmailAndPassword(this.email,this.senha).then((function(t){e.$q.notify({message:"Seja bem-vindo!",color:"positive",position:"center",icon:"assignment_turned_in"}),e.$router.replace("/")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Ops.. algo deu errado: "+e.$q.lang.auth[e.codigo],color:"negative",position:"center",icon:"assignment_late"}),e["loading1"]=!1,console.log(e.codigo),console.log(t.message)}))},resetar_senha:function(){this.$router.replace("/reset_pwd")},sair:function(){var e=this;this.$firebase.auth().signOut().then((function(){e.$q.notify({message:"Até mais!",color:"accent",position:"center",icon:"pan_tool"}),e.$router.replace("/")}))}}}),s=o,r=n("2877"),c=n("fe09"),l=Object(r["a"])(s,a,i,!1,null,"161b43bd",null);t["default"]=l.exports;l.options.components=Object.assign({QPage:c["v"],QCard:c["b"],QBtn:c["a"],QMenu:c["u"],QList:c["s"],QItem:c["o"],QItemSection:c["q"],QCardSection:c["d"],QIcon:c["l"],QForm:c["j"],QInput:c["n"],QCardActions:c["c"],QSpinnerFacebook:c["C"]},l.options.components||{})}}]);