(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"5ba3":function(e,t,i){},c00b:function(e,t,i){"use strict";var n=i("5ba3"),a=i.n(n);a.a},dc6c:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("div",{staticClass:"q-pa-md q-gutter-md row justify-center"},[i("q-card",{staticClass:"q-pa-md q-mb-lg",staticStyle:{"min-width":"342px"},attrs:{inline:"",color:"white"}},[i("div",{staticClass:"float-right"},[i("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"o_live_help"}},[i("q-menu",{attrs:{anchor:"bottom left",self:"top middle","auto-close":""}},[i("q-list",{staticStyle:{width:"max-content"}},[i("q-item",{attrs:{clickable:""},on:{click:e.resetar_senha}},[i("q-item-section",[e._v("Esqueci minha senha")])],1)],1)],1)],1)],1),i("q-card-section",{staticClass:"q-pa-md",staticStyle:{margin:"auto",width:"max-content"}},[i("q-icon",{staticStyle:{"font-size":"5em"},attrs:{name:"assignment_ind"}})],1),i("q-form",[i("q-input",{ref:"input_email",attrs:{label:"E-mail *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu e-mail"},function(e){return e.includes("@")&&e.includes(".")||"Digite um e-mail válido"}],clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("q-input",{ref:"input_senha",attrs:{type:"password",label:"Senha *","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Digite uma senha"}],clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.entrar(t)}},model:{value:e.senha,callback:function(t){e.senha=t},expression:"senha"}}),i("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[i("q-btn",{attrs:{label:"Entrar",color:"secondary",loading:e.loading1},on:{click:e.entrar},scopedSlots:e._u([{key:"loading",fn:function(){return[i("q-spinner-facebook")]},proxy:!0}])}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Criar conta",color:"primary",flat:"",loading:e.loading2},on:{click:e.registrar},scopedSlots:e._u([{key:"loading",fn:function(){return[i("q-spinner-facebook")]},proxy:!0}])})],1),i("div",{staticClass:"form-group",staticStyle:{"max-width":"fit-content"}},[i("p",{staticClass:"ride-line"},[i("span",[e._v("ou")])]),i("q-btn",{staticClass:"fit q-mb-sm",attrs:{color:"white","text-color":"grey-7","no-caps":""},on:{click:function(t){return e.entrar_google()}}},[i("q-icon",{attrs:{left:"",name:"img:statics/google.png"}}),e._v("\n            Fazer login com Google\n            "),i("q-space")],1),i("q-btn",{staticClass:"fit",attrs:{color:"white","text-color":"grey-7","no-caps":""},on:{click:function(t){return e.entrar_facebook()}}},[i("q-icon",{attrs:{left:"",name:"img:statics/facebook.png"}}),e._v("\n            Fazer login com Facebook\n            "),i("q-space")],1)],1)],1)],1),i("q-card",{staticClass:"q-pa-sm q-mb-lg",staticStyle:{"min-width":"342px",height:"fit-content"},attrs:{inline:"",color:"white"}},[i("q-card-section",{staticClass:"text-left",staticStyle:{padding:"8px"}},[i("div",{staticClass:"text-subtitle2",staticStyle:{display:"inline"}},[e._v("Notificações")]),e.$q.platform.is.ios?e._e():i("div",{staticClass:"float-right",staticStyle:{"margin-top":"-10px"}},[i("q-toggle",{ref:"toggle_ntf",attrs:{"unchecked-icon":"notifications_off","checked-icon":"notifications_active",color:"blue-8"},on:{input:function(t){return e.receber_notificacoes()}},model:{value:e.notifications,callback:function(t){e.notifications=t},expression:"notifications"}})],1)]),e.$q.platform.is.ios?i("div",[i("q-separator"),i("br"),i("p",[e._v("Infelizmente as notificações ainda não funcionam neste dispositivo, mas no ícone "),i("q-icon",{attrs:{name:"notifications_active"}}),e._v(" aqui em cima você verá todas elas!")],1)],1):e._e()],1)],1)])},a=[],o=(i("28a5"),i("a481"),{name:"Login",data:function(){return{email:"",senha:"",loading1:!1,loading2:!1,codigo:"",user:this.$firebase.auth().currentUser,notifications:!1,error_auth:{invalid_email:"O endereço de email está mal formatado.",user_not_found:"Não há registro de usuário correspondente. O usuário pode ter sido excluído.",wrong_password:"Senha inválida.",weak_password:"A senha deve conter no mínimo 6 caracteres.",email_already_in_use:"Este email já está em uso por outra conta."}}},mounted:function(){var e=this;this.$firebase.auth().onAuthStateChanged((function(t){e.user=t||null})),e.user&&e.getProfile(e.user.uid);var t=window.OneSignal;t.push((function(){t.isPushNotificationsEnabled().then((function(t){t&&(e.notifications=!0)}))}))},methods:{registrar:function(){var e=this;this.$refs.input_email.validate(),this.$refs.input_senha.validate(),this["loading2"]=!0,this.$firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((function(t){e.$q.notify({message:"Sua conta foi criada com sucesso!",color:"positive",position:"center",icon:"how_to_reg"}),e.$router.replace("/")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:e.error_auth[e.codigo],color:"negative",position:"center",icon:"error"}),e["loading2"]=!1})),this.$refs.input_email.resetValidation(),this.$refs.input_senha.resetValidation()},entrar:function(){var e=this;this.$refs.input_email.validate(),this.$refs.input_senha.validate(),this["loading1"]=!0,this.$firebase.auth().signInWithEmailAndPassword(this.email,this.senha).then((function(t){var i=". Por favor, preencha seu perfil.";if(t.user.displayName){var n=t.user.displayName.split(" ");i=" "+n[0]+"!"}e.$q.notify({message:"Seja bem-vindo"+i,color:"positive",position:"center",icon:"assignment_turned_in"}),t.user.displayName?e.$router.replace("/"):e.$router.replace("/profile")}),(function(t){e.codigo=t.code.split("/")[1].replace(/-/g,"_"),e.$q.notify({message:e.error_auth[e.codigo],color:"negative",position:"center",icon:"assignment_late"}),e["loading1"]=!1})),this.$refs.input_email.resetValidation(),this.$refs.input_senha.resetValidation()},resetar_senha:function(){this.$router.replace("/reset_pwd")},entrar_google:function(){var e=new this.$firebase.auth.GoogleAuthProvider;this.firebase_auth(e)},entrar_facebook:function(){var e=new this.$firebase.auth.FacebookAuthProvider;this.firebase_auth(e)},firebase_auth:function(e){var t=this;this.$firebase.auth().signInWithPopup(e).then((function(e){var i=". Por favor, preencha seu perfil.";if(e.user.displayName){var n=e.user.displayName.split(" ");i=" "+n[0]+"!"}t.$q.notify({message:"Seja bem-vindo"+i,color:"positive",position:"center",icon:"assignment_turned_in"}),e.user.displayName?t.$router.replace("/"):t.$router.replace("/profile")}),(function(e){t.codigo=e.code.split("/")[1].replace(/-/g,"_"),t.$q.notify({message:t.error_auth[t.codigo],color:"negative",position:"center",icon:"assignment_late"}),t["loading1"]=!1,console.log(t.codigo),console.log(e.message)}))},receber_notificacoes:function(){var e=this,t=window.OneSignal;e.$refs.toggle_ntf.value?(t.setSubscription(!1),e.notifications=!1,e.$q.notify({message:"Notificações desabilitadas.",color:"negative",position:"center",icon:"chat"})):t.push((function(){var i=t.isPushNotificationsSupported();i?t.push(["getNotificationPermission",function(i){"granted"===i?t.push((function(){t.isPushNotificationsEnabled().then((function(i){i?e.notifications=!0:(t.setSubscription(!0),e.notifications=!0,e.$q.notify({message:"Notificações habilitadas.",color:"positive",position:"center",icon:"chat"}))}))})):"denied"===i?(alert("Você deve limpar a configuração de notificações do App para poder habilitar novamente."),e.notifications=!1):"default"===i&&(t.push((function(){t.showSlidedownPrompt({force:!0})})),t.push((function(){t.on("popoverAllowClick",(function(){setTimeout((function(){"granted"===Notification.permission?(t.setSubscription(!0),e.notifications=!0,e.$q.notify({message:"Notificações habilitadas.",color:"positive",position:"center",icon:"chat"})):e.notifications=!1}),5e3)}))})),t.push((function(){t.on("popoverCancelClick",(function(){e.notifications=!1}))})))}]):e.$q.notify({message:"Infelizmente as notificações ainda não funcionam no iPhone, mas no ícone 🔔 aqui em cima você verá todas elas!",color:"negative",position:"center",icon:"chat",html:!0})}))}}}),s=o,r=(i("c00b"),i("2877")),c=i("eebe"),l=i.n(c),u=i("9989"),f=i("f09f"),d=i("9c40"),p=i("4e73"),h=i("1c1c"),m=i("66e5"),g=i("4074"),v=i("a370"),_=i("0016"),b=i("0378"),q=i("27f9"),y=i("4b7e"),k=i("e669"),$=i("2c91"),w=i("9564"),S=i("eb85"),C=Object(r["a"])(s,n,a,!1,null,"31a31759",null);t["default"]=C.exports;l()(C,"components",{QPage:u["a"],QCard:f["a"],QBtn:d["a"],QMenu:p["a"],QList:h["a"],QItem:m["a"],QItemSection:g["a"],QCardSection:v["a"],QIcon:_["a"],QForm:b["a"],QInput:q["a"],QCardActions:y["a"],QSpinnerFacebook:k["a"],QSpace:$["a"],QToggle:w["a"],QSeparator:S["a"]})}}]);