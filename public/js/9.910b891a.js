(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"704b":function(e,t,i){},d064:function(e,t,i){"use strict";var a=i("704b"),n=i.n(a);n.a},dc6c:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"q-pa-md flex-center"},[e.user?i("q-card",{staticClass:"card-sign-in q-pa-md",attrs:{inline:"",color:"white"}},[i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"text-subtitle2"},[e._v("Meus dados")])]),i("q-separator"),i("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[i("q-input",{attrs:{label:"Nome",readonly:""},model:{value:e.user.displayName,callback:function(t){e.$set(e.user,"displayName",t)},expression:"user.displayName"}}),i("q-input",{attrs:{label:"E-mail",readonly:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),i("q-input",{attrs:{label:"Contato",readonly:""},model:{value:e.perfil.contato,callback:function(t){e.$set(e.perfil,"contato",t)},expression:"perfil.contato"}}),i("q-input",{attrs:{label:"Data de nascimento",readonly:""},model:{value:e.perfil.nascimento,callback:function(t){e.$set(e.perfil,"nascimento",t)},expression:"perfil.nascimento"}})],1),i("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[i("q-btn",{attrs:{label:"Perfil",to:"/profile",color:"primary"}}),i("q-btn",{attrs:{label:"Sair",color:"primary"},on:{click:e.sair}})],1)],1):i("q-card",{staticClass:"q-pa-md",attrs:{inline:"",color:"white"}},[i("div",{staticClass:"float-right"},[i("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"o_live_help"}},[i("q-menu",{attrs:{anchor:"bottom left",self:"top middle","auto-close":""}},[i("q-list",{staticStyle:{width:"max-content"}},[i("q-item",{attrs:{clickable:""},on:{click:e.resetar_senha}},[i("q-item-section",[e._v("Esqueci minha senha")])],1)],1)],1)],1)],1),i("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[i("q-icon",{staticStyle:{"font-size":"5em"},attrs:{name:"assignment_ind"}})],1),i("q-form",[i("q-input",{attrs:{label:"E-mail *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu e-mail"},function(e){return e.includes("@")&&e.includes(".")||"Digite um e-mail válido"}],clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("q-input",{attrs:{type:"password",label:"Senha *","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Digite uma senha"}],clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.senha,callback:function(t){e.senha=t},expression:"senha"}}),i("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[i("q-btn",{attrs:{label:"Entrar",color:"secondary",loading:e.loading1},on:{click:e.entrar},scopedSlots:e._u([{key:"loading",fn:function(){return[i("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Criar conta",color:"primary",flat:"",loading:e.loading2},on:{click:e.registrar},scopedSlots:e._u([{key:"loading",fn:function(){return[i("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)})],1)],1)],1),i("br"),i("q-card",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"card-sign-in q-pa-sm",attrs:{inline:"",color:"white"}},[e.$q.platform.is.ios?e._e():i("div",{staticClass:"float-right",staticStyle:{"margin-top":"-2px"}},[i("q-toggle",{ref:"toggle_ntf",attrs:{"unchecked-icon":"notifications_off","checked-icon":"notifications_active",color:"blue-8"},on:{input:function(t){return e.receber_notificacoes()}},model:{value:e.notifications,callback:function(t){e.notifications=t},expression:"notifications"}})],1),i("q-card-section",{staticClass:"text-left",staticStyle:{padding:"8px"}},[i("div",{staticClass:"text-subtitle2"},[e._v("Notificações")])]),e.$q.platform.is.ios?i("div",[i("q-separator"),i("br"),i("p",[e._v("Infelizmente as notificações ainda não funcionam em iPhone e iPad, mas no ícone "),i("q-icon",{attrs:{name:"notifications_active"}}),e._v(" aqui em cima você verá todas elas!")],1)],1):e._e(),i("div",{staticClass:"onesignal-customlink-container"})],1),e.admin?i("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[i("q-fab",{attrs:{icon:"settings",color:"grey-7",direction:"up"}},[i("q-fab-action",{attrs:{"external-label":"","label-position":"left",color:"grey-7",to:"/users",icon:"group",label:"Usuários"}})],1)],1):e._e()],1)},n=[],o=(i("28a5"),i("a481"),{name:"Login",data:function(){return{email:"",senha:"",loading1:!1,loading2:!1,codigo:"",user:this.$firebase.auth().currentUser,perfil:{nome:"",contato:"",nascimento:""},admin:!1,notifications:!1}},created:function(){var e=this;this.$firebase.auth().onAuthStateChanged((function(t){e.user=t||null}))},mounted:function(){this.user&&this.getProfile(this.user.uid);var e=this,t=window.OneSignal;t.push((function(){t.isPushNotificationsEnabled().then((function(t){t&&(e.notifications=!0,console.log("NOTIFY: "+e.notifications))}))}))},methods:{registrar:function(){var e=this;this["loading2"]=!0,this.$firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((function(t){e.$q.notify({message:"Sua conta foi criada com sucesso!",color:"positive",position:"center",icon:"how_to_reg"}),e.$router.replace("/")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Ops.. algo deu errado: "+e.$q.lang.auth[e.codigo],color:"negative",position:"center",icon:"error"}),e["loading2"]=!1,console.log(e.codigo),console.log(t.message)}))},getProfile:function(e){var t=this;this.$db.ref("perfis").orderByChild("id").equalTo(e).once("child_added",(function(e){t.perfil=e.val(),t.admin=e.val().admin}))},entrar:function(){var e=this;this["loading1"]=!0,this.$firebase.auth().signInWithEmailAndPassword(this.email,this.senha).then((function(t){var i=". Por favor, preencha seu perfil.";if(t.user.displayName){var a=t.user.displayName.split(" ");i=" "+a[0]+"!"}e.$q.notify({message:"Seja bem-vindo"+i,color:"positive",position:"center",icon:"assignment_turned_in"}),t.user.displayName?e.$router.replace("/"):e.$router.replace("/profile")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:"Ops.. algo deu errado: "+e.$q.lang.auth[e.codigo],color:"negative",position:"center",icon:"assignment_late"}),e["loading1"]=!1,console.log(e.codigo),console.log(t.message)}))},resetar_senha:function(){this.$router.replace("/reset_pwd")},sair:function(){var e=this;this.$firebase.auth().signOut().then((function(){e.$q.notify({message:"Até mais "+e.perfil.nome,color:"blue-8",position:"center",icon:"pan_tool"}),window.localStorage.setItem("username",""),e.$router.replace("/")}))},receber_notificacoes:function(){var e=this,t=window.OneSignal;e.$refs.toggle_ntf.value?(t.setSubscription(!1),e.notifications=!1,e.$q.notify({message:"Notificações desabilitadas.",color:"negative",position:"center",icon:"chat"})):t.push((function(){var i=t.isPushNotificationsSupported();i?t.push(["getNotificationPermission",function(i){"granted"===i?t.push((function(){t.isPushNotificationsEnabled().then((function(i){i?e.notifications=!0:(t.setSubscription(!0),e.notifications=!0,e.$q.notify({message:"Notificações habilitadas.",color:"positive",position:"center",icon:"chat"}))}))})):"denied"===i?(alert("Você deve limpar a configuração de notificações do App para poder habilitar novamente."),e.notifications=!1):"default"===i&&(t.push((function(){t.showSlidedownPrompt({force:!0})})),t.push((function(){t.on("popoverAllowClick",(function(){setTimeout((function(){"granted"===Notification.permission?(t.setSubscription(!0),e.notifications=!0,e.$q.notify({message:"Notificações habilitadas.",color:"positive",position:"center",icon:"chat"})):e.notifications=!1}),5e3)}))})),t.push((function(){t.on("popoverCancelClick",(function(){e.notifications=!1}))})))}]):e.$q.notify({message:"Infelizmente as notificações ainda não funcionam no iPhone, mas no ícone 🔔 aqui em cima você verá todas elas!",color:"negative",position:"center",icon:"chat",html:!0})}))}}}),s=o,r=(i("d064"),i("2877")),c=i("eebe"),l=i.n(c),u=i("9989"),d=i("f09f"),f=i("9c40"),p=i("4e73"),m=i("1c1c"),g=i("66e5"),h=i("4074"),b=i("a370"),q=i("0016"),v=i("0378"),y=i("27f9"),k=i("4b7e"),_=i("e669"),$=i("eb85"),w=i("9564"),C=i("de5e"),S=i("c294"),x=i("72db"),N=Object(r["a"])(s,a,n,!1,null,"f2e450a0",null);t["default"]=N.exports;l()(N,"components",{QPage:u["a"],QCard:d["a"],QBtn:f["a"],QMenu:p["a"],QList:m["a"],QItem:g["a"],QItemSection:h["a"],QCardSection:b["a"],QIcon:q["a"],QForm:v["a"],QInput:y["a"],QCardActions:k["a"],QSpinnerFacebook:_["a"],QSeparator:$["a"],QToggle:w["a"],QPageSticky:C["a"],QFab:S["a"],QFabAction:x["a"]})}}]);