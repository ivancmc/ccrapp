(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{dc6c:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"q-pa-md flex-center"},[e.user?i("q-card",{staticClass:"card-sign-in q-pa-md",attrs:{inline:"",color:"white"}},[i("div",{staticClass:"float-left"},[i("q-toggle",{ref:"toggle_ntf",attrs:{"unchecked-icon":"notifications_off","checked-icon":"notifications_active",color:"blue-8"},on:{input:function(t){return e.receber_notificacoes()}},model:{value:e.notifications,callback:function(t){e.notifications=t},expression:"notifications"}})],1),i("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[i("q-input",{attrs:{label:"Nome",readonly:""},model:{value:e.user.displayName,callback:function(t){e.$set(e.user,"displayName",t)},expression:"user.displayName"}}),i("q-input",{attrs:{label:"E-mail",readonly:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),i("q-input",{attrs:{label:"Contato",readonly:""},model:{value:e.perfil.contato,callback:function(t){e.$set(e.perfil,"contato",t)},expression:"perfil.contato"}}),i("q-input",{attrs:{label:"Data de nascimento",readonly:""},model:{value:e.perfil.nascimento,callback:function(t){e.$set(e.perfil,"nascimento",t)},expression:"perfil.nascimento"}})],1),i("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[i("q-btn",{attrs:{label:"Perfil",to:"/profile",color:"primary"}}),i("q-btn",{attrs:{label:"Sair",color:"primary"},on:{click:e.sair}})],1)],1):i("q-card",{staticClass:"q-pa-md",attrs:{inline:"",color:"white"}},[i("div",{staticClass:"float-left"},[i("q-toggle",{ref:"toggle_ntf",attrs:{"unchecked-icon":"notifications_off","checked-icon":"notifications_active",color:"blue-8"},on:{input:function(t){return e.receber_notificacoes()}},model:{value:e.notifications,callback:function(t){e.notifications=t},expression:"notifications"}})],1),i("div",{staticClass:"float-right"},[i("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"o_live_help"}},[i("q-menu",{attrs:{anchor:"bottom left",self:"top middle","auto-close":""}},[i("q-list",{staticStyle:{width:"max-content"}},[i("q-item",{attrs:{clickable:""},on:{click:e.resetar_senha}},[i("q-item-section",[e._v("Esqueci minha senha")])],1)],1)],1)],1)],1),i("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[i("q-icon",{staticStyle:{"font-size":"5em"},attrs:{name:"assignment_ind"}})],1),i("q-form",[i("q-input",{attrs:{label:"E-mail *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu e-mail"},function(e){return e.includes("@")&&e.includes(".")||"Digite um e-mail válido"}],clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("q-input",{attrs:{type:"password",label:"Senha *","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Digite uma senha"}],clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.senha,callback:function(t){e.senha=t},expression:"senha"}}),i("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[i("q-btn",{attrs:{label:"Entrar",color:"secondary",loading:e.loading1},on:{click:e.entrar},scopedSlots:e._u([{key:"loading",fn:function(){return[i("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Criar conta",color:"primary",flat:"",loading:e.loading2},on:{click:e.registrar},scopedSlots:e._u([{key:"loading",fn:function(){return[i("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)})],1)],1)],1),e.admin?i("q-page-sticky",{attrs:{position:"bottom-left",offset:[18,18]}},[i("q-fab",{attrs:{icon:"settings",color:"grey-7",direction:"up"}},[i("q-fab-action",{attrs:{"external-label":"","label-position":"right",color:"grey-7",to:"/users",icon:"group",label:"Usuários"}}),i("q-fab-action",{attrs:{"external-label":"","label-position":"right",color:"grey-7",to:"/notificar",icon:"chat",label:"Notificar"}})],1)],1):e._e()],1)},n=[],a=(i("ac6a"),i("cadf"),i("06db"),i("456d"),i("28a5"),i("a481"),{name:"Login",data:function(){return{email:"",senha:"",loading1:!1,loading2:!1,codigo:"",user:this.$firebase.auth().currentUser,perfil:{nome:"",contato:"",nascimento:""},admin:!1,notifications:!1}},created:function(){this.user&&this.getProfile(this.user.uid),"granted"===window.localStorage.getItem("notification-permission")&&(this.notifications=!0)},methods:{registrar:function(){var e=this;this["loading2"]=!0,this.$firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((function(t){e.$q.notify({message:"Sua conta foi criada com sucesso!",color:"positive",position:"center",icon:"how_to_reg"}),e.$router.replace("/")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Ops.. algo deu errado: "+e.$q.lang.auth[e.codigo],color:"negative",position:"center",icon:"error"}),e["loading2"]=!1,console.log(e.codigo),console.log(t.message)}))},getProfile:function(e){var t=this;this.$db.ref("perfis").orderByChild("id").equalTo(e).once("child_added",(function(e){t.perfil=e.val(),t.admin=e.val().admin}))},entrar:function(){var e=this;this["loading1"]=!0,this.$firebase.auth().signInWithEmailAndPassword(this.email,this.senha).then((function(t){var i=". Por favor, preencha seu perfil.";if(t.user.displayName){var o=t.user.displayName.split(" ");i=" "+o[0]+"!"}e.$q.notify({message:"Seja bem-vindo"+i,color:"positive",position:"center",icon:"assignment_turned_in"}),t.user.displayName?e.$router.replace("/"):e.$router.replace("/profile")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Ops.. algo deu errado: "+e.$q.lang.auth[e.codigo],color:"negative",position:"center",icon:"assignment_late"}),e["loading1"]=!1,console.log(e.codigo),console.log(t.message)}))},resetar_senha:function(){this.$router.replace("/reset_pwd")},sair:function(){var e=this;this.$firebase.auth().signOut().then((function(){e.$q.notify({message:"Até mais "+e.perfil.nome,color:"blue-8",position:"center",icon:"pan_tool"}),e.$router.replace("/")}))},handleTokenRefresh:function(){var e=this;return this.$msg.getToken().then((function(t){e.$db.ref("tokens_notification").orderByValue().equalTo(t).once("value",(function(i){i.exists()?console.log("Já existe."):(console.log("Salvando token no database..."),e.$db.ref("tokens_notification").push(t))})),console.log(t)}))},receber_notificacoes:function(){var e=this;this.$refs.toggle_ntf.value?(this.$msg.getToken().then((function(t){console.log(t),window.localStorage.setItem("notification-permission","denied"),e.$db.ref("tokens_notification").orderByValue().equalTo(t).once("value",(function(t){var i=Object.keys(t.val())[0];e.$db.ref("tokens_notification").child(i).remove(),console.log("token removido")}))})),this.notifications=!1,this.$q.notify({message:"Notificações desabilitadas.",color:"negative",position:"center",icon:"chat"})):(console.log(Notification.permission),"granted"===Notification.permission?(window.localStorage.setItem("notification-permission","granted"),this.handleTokenRefresh(),this.notifications=!0,this.$q.notify({message:"Notificações habilitadas.",color:"positive",position:"center",icon:"chat"})):"denied"===Notification.permission?(alert("Você deve limpar a configuração de notificações do App para poder habilitar novamente."),this.notifications=!1):"default"===Notification.permission&&Notification.requestPermission().then((function(t){"granted"===t?(window.localStorage.setItem("notification-permission","granted"),e.handleTokenRefresh(),e.notifications=!0,e.$q.notify({message:"Notificações habilitadas.",color:"positive",position:"center",icon:"chat"})):(window.localStorage.setItem("notification-permission","denied"),e.notifications=!1)})))}}}),s=a,r=i("2877"),c=i("eebe"),l=i.n(c),f=i("9989"),d=i("f09f"),u=i("9564"),p=i("9c40"),m=i("4e73"),g=i("1c1c"),h=i("66e5"),b=i("4074"),q=i("a370"),y=i("0016"),k=i("0378"),v=i("27f9"),_=i("4b7e"),$=i("e669"),w=i("de5e"),x=i("c294"),S=i("72db"),C=Object(r["a"])(s,o,n,!1,null,"60315285",null);t["default"]=C.exports;l()(C,"components",{QPage:f["a"],QCard:d["a"],QToggle:u["a"],QBtn:p["a"],QMenu:m["a"],QList:g["a"],QItem:h["a"],QItemSection:b["a"],QCardSection:q["a"],QIcon:y["a"],QForm:k["a"],QInput:v["a"],QCardActions:_["a"],QSpinnerFacebook:$["a"],QPageSticky:w["a"],QFab:x["a"],QFabAction:S["a"]})}}]);