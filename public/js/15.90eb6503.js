(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{dc6c:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"q-pa-md flex-center"},[e.user?o("q-card",{staticClass:"card-sign-in q-pa-md",attrs:{inline:"",color:"white"}},[o("div",{staticClass:"float-left"},[o("q-toggle",{ref:"toggle_ntf",attrs:{"unchecked-icon":"notifications_off","checked-icon":"notifications_active",color:"blue-8"},on:{input:function(t){return e.receber_notificacoes()}},model:{value:e.notifications,callback:function(t){e.notifications=t},expression:"notifications"}})],1),o("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[o("q-input",{attrs:{label:"Nome",readonly:""},model:{value:e.user.displayName,callback:function(t){e.$set(e.user,"displayName",t)},expression:"user.displayName"}}),o("q-input",{attrs:{label:"E-mail",readonly:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),o("q-input",{attrs:{label:"Contato",readonly:""},model:{value:e.perfil.contato,callback:function(t){e.$set(e.perfil,"contato",t)},expression:"perfil.contato"}}),o("q-input",{attrs:{label:"Data de nascimento",readonly:""},model:{value:e.perfil.nascimento,callback:function(t){e.$set(e.perfil,"nascimento",t)},expression:"perfil.nascimento"}})],1),o("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[o("q-btn",{attrs:{label:"Perfil",to:"/profile",color:"primary"}}),o("q-btn",{attrs:{label:"Sair",color:"primary"},on:{click:e.sair}})],1)],1):o("q-card",{staticClass:"q-pa-md",attrs:{inline:"",color:"white"}},[o("div",{staticClass:"float-left"},[o("q-toggle",{ref:"toggle_ntf",attrs:{"unchecked-icon":"notifications_off","checked-icon":"notifications_active",color:"blue-8"},on:{input:function(t){return e.receber_notificacoes()}},model:{value:e.notifications,callback:function(t){e.notifications=t},expression:"notifications"}})],1),o("div",{staticClass:"float-right"},[o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"o_live_help"}},[o("q-menu",{attrs:{anchor:"bottom left",self:"top middle","auto-close":""}},[o("q-list",{staticStyle:{width:"max-content"}},[o("q-item",{attrs:{clickable:""},on:{click:e.resetar_senha}},[o("q-item-section",[e._v("Esqueci minha senha")])],1)],1)],1)],1)],1),o("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[o("q-icon",{staticStyle:{"font-size":"5em"},attrs:{name:"assignment_ind"}})],1),o("q-form",[o("q-input",{attrs:{label:"E-mail *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu e-mail"},function(e){return e.includes("@")&&e.includes(".")||"Digite um e-mail válido"}],clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),o("q-input",{attrs:{type:"password",label:"Senha *","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Digite uma senha"}],clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.senha,callback:function(t){e.senha=t},expression:"senha"}}),o("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[o("q-btn",{attrs:{label:"Entrar",color:"secondary",loading:e.loading1},on:{click:e.entrar},scopedSlots:e._u([{key:"loading",fn:function(){return[o("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)}),o("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Criar conta",color:"primary",flat:"",loading:e.loading2},on:{click:e.registrar},scopedSlots:e._u([{key:"loading",fn:function(){return[o("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)})],1)],1)],1),e.admin?o("q-page-sticky",{attrs:{position:"bottom-left",offset:[18,18]}},[o("q-fab",{attrs:{icon:"settings",color:"grey-7",direction:"up"}},[o("q-fab-action",{attrs:{"external-label":"","label-position":"right",color:"grey-7",to:"/users",icon:"group",label:"Usuários"}}),o("q-fab-action",{attrs:{"external-label":"","label-position":"right",color:"grey-7",to:"/notificar",icon:"chat",label:"Notificar"}})],1)],1):e._e()],1)},i=[],a=(o("ac6a"),o("cadf"),o("06db"),o("456d"),o("28a5"),o("a481"),{name:"Login",data:function(){return{email:"",senha:"",loading1:!1,loading2:!1,codigo:"",user:this.$firebase.auth().currentUser,perfil:{nome:"",contato:"",nascimento:""},admin:!1,notifications:!1}},created:function(){this.user&&this.getProfile(this.user.uid),"granted"===Notification.permission&&(this.notifications=!0)},methods:{registrar:function(){var e=this;this["loading2"]=!0,this.$firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((function(t){e.$q.notify({message:"Sua conta foi criada com sucesso!",color:"positive",position:"center",icon:"how_to_reg"}),e.$router.replace("/")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Ops.. algo deu errado: "+e.$q.lang.auth[e.codigo],color:"negative",position:"center",icon:"error"}),e["loading2"]=!1,console.log(e.codigo),console.log(t.message)}))},getProfile:function(e){var t=this;this.$db.ref("perfis").orderByChild("id").equalTo(e).once("child_added",(function(e){t.perfil=e.val(),t.admin=e.val().admin}))},entrar:function(){var e=this;this["loading1"]=!0,this.$firebase.auth().signInWithEmailAndPassword(this.email,this.senha).then((function(t){var o=". Por favor, preencha seu perfil.";if(t.user.displayName){var n=t.user.displayName.split(" ");o=" "+n[0]+"!"}e.$q.notify({message:"Seja bem-vindo"+o,color:"positive",position:"center",icon:"assignment_turned_in"}),t.user.displayName?e.$router.replace("/"):e.$router.replace("/profile")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Ops.. algo deu errado: "+e.$q.lang.auth[e.codigo],color:"negative",position:"center",icon:"assignment_late"}),e["loading1"]=!1,console.log(e.codigo),console.log(t.message)}))},resetar_senha:function(){this.$router.replace("/reset_pwd")},sair:function(){var e=this;this.$firebase.auth().signOut().then((function(){e.$q.notify({message:"Até mais "+e.perfil.nome,color:"blue-8",position:"center",icon:"pan_tool"}),e.$router.replace("/")}))},handleTokenRefresh:function(){var e=this;return this.$msg.getToken().then((function(t){e.$db.ref("tokens_notification").orderByValue().equalTo(t).once("value",(function(o){o.exists()?console.log("Já existe."):(console.log("Salvando token no database..."),e.$db.ref("tokens_notification").push(t))})),console.log(t)}))},receber_notificacoes:function(){var e=this;this.$refs.toggle_ntf.value?(this.$msg.getToken().then((function(t){console.log(t),e.$msg.deleteToken(t).then((function(){console.log("Deletado"),e.$db.ref("tokens_notification").orderByValue().equalTo(t).once("value",(function(t){var o=Object.keys(t.val())[0];return e.$db.ref("/tokens").child(o).remove()}))})).catch((function(e){console.log(e)}))})),this.notifications=!1):(console.log(Notification.permission),this.$msg.requestPermission().then((function(t){"granted"===t?(console.log("Notification permission granted."),e.handleTokenRefresh(),e.notifications=!0):console.log("Sem permissão. "+t)})))}}}),s=a,r=o("2877"),l=o("eebe"),c=o.n(l),u=o("9989"),f=o("f09f"),d=o("9564"),g=o("9c40"),m=o("4e73"),p=o("1c1c"),h=o("66e5"),b=o("4074"),q=o("a370"),y=o("0016"),k=o("0378"),v=o("27f9"),_=o("4b7e"),$=o("e669"),x=o("de5e"),C=o("c294"),Q=o("72db"),w=Object(r["a"])(s,n,i,!1,null,"ff3208a6",null);t["default"]=w.exports;c()(w,"components",{QPage:u["a"],QCard:f["a"],QToggle:d["a"],QBtn:g["a"],QMenu:m["a"],QList:p["a"],QItem:h["a"],QItemSection:b["a"],QCardSection:q["a"],QIcon:y["a"],QForm:k["a"],QInput:v["a"],QCardActions:_["a"],QSpinnerFacebook:$["a"],QPageSticky:x["a"],QFab:C["a"],QFabAction:Q["a"]})}}]);