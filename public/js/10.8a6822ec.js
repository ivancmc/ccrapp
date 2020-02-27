(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{5187:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md q-gutter-md row justify-center"},[t.user&&t.admin?a("div",{staticStyle:{"min-width":"342px"}},[a("q-card",{staticClass:"q-pa-md q-mb-lg",attrs:{inline:"",color:"white"}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-subtitle2"},[t._v("Agenda do Pastor")])]),a("q-separator"),a("div",[a("q-form",{staticClass:"q-gutter-sm q-pa-sm",on:{submit:t.disponibilizar,reset:t.limparForm1}},[a("q-input",{ref:"input_dia",attrs:{label:"Data",outlined:"","lazy-rules":"",rules:[function(t){return!!t||"Defina uma data."}],mask:"##/##/####"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{title:"Data",mask:"DD/MM/YYYY",minimal:""},on:{input:function(){t.$refs.qDateProxy.hide(),t.$refs.input_dia.blur()}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)]},proxy:!0}],null,!1,4291471879),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),a("q-select",{ref:"select_hour",attrs:{outlined:"",multiple:"",options:t.horarios,label:"Horários",separator:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Defina um horário."}]},scopedSlots:t._u([{key:"option",fn:function(e){return[a("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[a("q-item-section",{attrs:{side:""}},[a("q-checkbox",{attrs:{val:e.opt},model:{value:t.hours,callback:function(e){t.hours=e},expression:"hours"}})],1),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(e.opt)}})],1)],1)]}}],null,!1,301920589),model:{value:t.hours,callback:function(e){t.hours=e},expression:"hours"}}),a("q-checkbox",{attrs:{label:"Fila de espera"},model:{value:t.extra,callback:function(e){t.extra=e},expression:"extra"}}),a("div",[a("q-btn",{attrs:{label:"Disponibilizar",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Limpar",type:"reset",color:"primary",flat:""}})],1)],1)],1),a("br"),a("div",{staticStyle:{width:"100%"}},[t.agenda?a("q-markup-table",{attrs:{dense:"",separator:"cell"}},[a("thead",[a("tr",{staticClass:"bg-grey text-white"},[a("th",{staticClass:"text-center text-black"},[t._v("Data")]),a("th",{staticClass:"text-center text-black"},[t._v("Horários")]),a("th",{staticClass:"text-center text-black"},[t._v("Extras")]),a("th",{staticClass:"text-center text-black"},[t._v("Excluir")])])]),a("tbody",t._l(t.agenda,(function(e){return a("tr",{key:e[".key"]},[a("td",{staticClass:"text-center"},[t._v(t._s(t.dia_mes_ano(e.data)))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.horarios))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.extra?"Sim":"Não"))]),a("td",{staticClass:"text-center"},[a("q-btn",{attrs:{dense:"",flat:"",icon:"delete_forever"},on:{click:function(a){return t.remove_disponib(e.data)}}})],1)])})),0)]):t._e()],1)],1)],1):t._e(),a("div",{staticStyle:{"min-width":"342px"}},[a("q-card",{staticClass:"q-pa-md q-mb-lg",attrs:{inline:"",color:"white"}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-subtitle2"},[t._v("Agendamento")])]),a("q-separator"),a("div",[a("q-form",{staticClass:"q-gutter-sm q-pa-sm",on:{submit:t.agendar,reset:t.limparForm2}},[a("q-input",{ref:"input_nome",attrs:{label:"Nome *",rules:[function(t){return t&&t.length>0||"Por favor digite seu nome"}],"lazy-rules":"",clearable:""},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}}),a("q-select",{ref:"input_data",attrs:{outlined:"",label:"Data",options:t.datas_disponiveis,separator:"",rules:[function(t){return!!t||"Defina uma data."}],"lazy-rules":""},on:{input:function(){t.mostra_horarios(t.data),t.$refs.input_data.blur()}},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}),1==this.hora_disponivel?a("q-select",{ref:"input_hora",attrs:{outlined:"",label:"Horário",options:t.horarios_disponiveis,separator:"",rules:[function(t){return!!t||"Defina um horário."}],"lazy-rules":""},model:{value:t.hora,callback:function(e){t.hora=e},expression:"hora"}}):t._e(),a("div",[a("q-btn",{attrs:{label:"Agendar",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Limpar",type:"reset",color:"primary",flat:""}})],1)],1)],1),a("br"),a("div",{staticStyle:{width:"100%"}},[t.aconselhamentos_marcados?a("q-markup-table",{attrs:{dense:"",separator:"cell"}},[a("thead",[a("tr",{staticClass:"bg-grey text-white"},[a("th",{staticClass:"text-center text-black"},[t._v("Data")]),a("th",{staticClass:"text-center text-black"},[t._v("Horário")]),a("th",{staticClass:"text-center text-black"},[t._v("Nome")]),t.uid?a("th",{staticClass:"text-center text-black"},[t._v("Excluir")]):t._e()])]),a("tbody",t._l(t.aconselhamentos_marcados,(function(e){return a("tr",{key:e[".key"]},[a("td",{staticClass:"text-center"},[t._v(t._s(t.dia_mes_ano(e.data)))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.horario))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.nome))]),t.uid?a("td",{staticClass:"text-center"},[t.admin||t.uid===e.uid?a("q-btn",{attrs:{dense:"",flat:"",icon:"delete_forever"},on:{click:function(a){return t.desmarcar(e.order)}}}):t._e()],1):t._e()])})),0)]):t._e()],1),t.admin?a("div",{staticStyle:{width:"100%"}},[a("q-toggle",{attrs:{label:"Mostrar histórico"},model:{value:t.mostrar_historico,callback:function(e){t.mostrar_historico=e},expression:"mostrar_historico"}}),t.historico?a("q-markup-table",{directives:[{name:"show",rawName:"v-show",value:t.mostrar_historico,expression:"mostrar_historico"}],attrs:{dense:"",separator:"cell"}},[a("thead",[a("tr",{staticClass:"bg-grey text-white"},[a("th",{staticClass:"text-center text-black"},[t._v("Data")]),a("th",{staticClass:"text-center text-black"},[t._v("Horário")]),a("th",{staticClass:"text-center text-black"},[t._v("Nome")]),a("th",{staticClass:"text-center text-black"},[t._v("Excluir")])])]),a("tbody",t._l(t.historico,(function(e){return a("tr",{key:e[".key"]},[a("td",{staticClass:"text-center"},[t._v(t._s(t.dia_mes_ano(e.data)))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.horario))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.nome))]),a("td",{staticClass:"text-center"},[a("q-btn",{attrs:{dense:"",flat:"",icon:"delete_forever"},on:{click:function(a){return t.desmarcar(e.order)}}})],1)])})),0)]):a("p",{directives:[{name:"show",rawName:"v-show",value:t.mostrar_historico,expression:"mostrar_historico"}]},[t._v("Não há histórico.")])],1):t._e()],1)],1),t.aconselhamentos_extras?a("div",{staticStyle:{"min-width":"342px","margin-bottom":"24px"}},[a("q-card",{staticClass:"q-pa-md q-mb-lg",attrs:{inline:"",color:"white"}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-subtitle2"},[t._v("Lista de espera")])]),a("q-separator"),a("div",{staticStyle:{width:"100%"}},[a("q-markup-table",{attrs:{dense:"",separator:"cell"}},[a("thead",[a("tr",{staticClass:"bg-grey text-white"},[a("th",{staticClass:"text-center text-black"},[t._v("Data")]),a("th",{staticClass:"text-center text-black"},[t._v("Ordem")]),a("th",{staticClass:"text-center text-black"},[t._v("Nome")]),t.uid?a("th",{staticClass:"text-center text-black"},[t._v("Excluir")]):t._e()])]),a("tbody",t._l(t.aconselhamentos_extras,(function(e){return a("tr",{key:e[".key"]},[a("td",{staticClass:"text-center"},[t._v(t._s(t.dia_mes_ano(e.data)))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.ordem_espera))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.nome))]),t.uid?a("td",{staticClass:"text-center"},[t.admin||t.uid===e.uid?a("q-btn",{attrs:{dense:"",flat:"",icon:"delete_forever"},on:{click:function(a){return t.sairDaFila(e.order)}}}):t._e()],1):t._e()])})),0)])],1)],1)],1):t._e()]),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[5,5]}},[a("q-btn",{staticClass:"shadow-5",attrs:{fab:"",icon:"keyboard_arrow_up",color:"blue-8"}})],1)],1)},i=[],o=(a("a481"),a("55dd"),a("28a5"),a("6762"),{name:"Aconselhamento",data:function(){return{user:this.$firebase.auth().currentUser,perfil:null,admin:!1,uid:"",date:"",hours:[13,14,15,16],horarios:[13,14,15,16],extra:!1,agenda:null,nome:"",data:"",hora:"",datas_disponiveis:[],horarios_disponiveis:[],hora_disponivel:!0,aconselhamentos_marcados:null,aconselhamentos_extras:null,hoje:this.ano_mes_dia((new Date).toLocaleString("pt-BR",{timeZone:"America/Bahia"}).slice(0,10)),mostrar_historico:!1,historico:null}},created:function(){var t=this;this.user&&(this.$db.ref("perfis").orderByChild("id").equalTo(this.user.uid).once("child_added",(function(e){t.perfil=e.val(),t.admin=e.val().admin})),this.nome=this.user.displayName,this.uid=this.user.uid);var e=[];this.$db.ref("aconselhamentos_agenda").orderByPriority().startAt(this.hoje).on("value",(function(a){t.agenda=a.val();var s=t;a.forEach((function(t){var a=s.dia_mes_ano(t.val().data);e.includes(a)||e.push(a)}))})),this.$db.ref("aconselhamentos_agenda").orderByPriority().on("value",(function(t){})),this.datas_disponiveis=e,0===this.datas_disponiveis.length&&setTimeout((function(){t.$q.notify({message:"Ainda não há datas disponíveis.",color:"warning",position:"center"})}),1e3),this.$db.ref("aconselhamentos_marcados").orderByPriority().startAt(this.hoje).on("value",(function(e){t.aconselhamentos_marcados=e.val()})),this.$db.ref("aconselhamentos_marcados").orderByPriority().on("value",(function(t){}));var a=new Date;a.setDate(a.getDate()-1),a=this.ano_mes_dia(a.toLocaleString("pt-BR",{timeZone:"America/Bahia"}).slice(0,10)),this.$db.ref("aconselhamentos_marcados").orderByPriority().endAt(a).on("value",(function(e){t.historico=e.val()})),this.$db.ref("aconselhamentos_extras").orderByPriority().startAt(this.hoje).on("value",(function(e){t.aconselhamentos_extras=e.val()})),this.$db.ref("aconselhamentos_extras").orderByPriority().on("value",(function(t){}))},methods:{ano_mes_dia:function(t){var e=t.split("/"),a=e[2]+e[1]+e[0];return a},dia_mes_ano:function(t){if(t){var e=t.slice(-2),a=t.slice(4,-2),s=t.slice(0,4),i=e+"/"+a+"/"+s;return i}},disponibilizar:function(){var t=this;this.$refs.input_dia.validate();var e=this.ano_mes_dia(this.date),a=e.localeCompare(this.hoje);this.$refs.input_dia.hasError?this.formHasError=!0:a<0?this.$q.notify({color:"negative",textColor:"white",icon:"warning",position:"bottom",message:"Data anterior à data de hoje!"}):this.$db.ref("aconselhamentos_agenda").orderByChild("data").equalTo(e).once("value",(function(a){if(a.exists())t.$q.notify({color:"negative",textColor:"white",icon:"warning",position:"bottom",message:"Data já disponível!"});else{var s=t.$db.ref("aconselhamentos_agenda").push();s.setWithPriority({data:e,horarios:t.hours.sort(),extra:t.extra},e),t.$q.notify({color:"positive",textColor:"white",icon:"event_available",position:"bottom",message:"Aconselhamento disponibilizado!"}),t.limparForm1()}}))},limparForm1:function(){this.date="",this.hours=[13,14,15,16],this.extra=!1,this.$refs.input_dia.resetValidation()},remove_disponib:function(t){var e=this;this.$db.ref("aconselhamentos_agenda").orderByChild("data").equalTo(t).once("child_added",(function(t){e.$db.ref("aconselhamentos_agenda").child(t.key).remove()}));var a=[],s=this.dia_mes_ano(t);this.datas_disponiveis.forEach((function(t){t!==s&&a.push(t)})),this.datas_disponiveis=a,this.$q.notify({color:"positive",textColor:"white",icon:"event_busy",position:"bottom",message:"Aconselhamento excluído!"})},mostra_horarios:function(t){if(t){this.hora_disponivel=!0;var e=this.ano_mes_dia(t);this.hora="";var a=!1,s=[],i=[];this.horarios_disponiveis=[],this.$db.ref("aconselhamentos_agenda").orderByChild("data").equalTo(e).on("child_added",(function(t){s=t.val().horarios,a=t.val().extra})),this.$db.ref("aconselhamentos_marcados").orderByChild("data").equalTo(e).on("child_added",(function(t){i.push(t.val().horario)})),this.horarios_disponiveis=s.filter((function(t){return JSON.stringify(i).indexOf(JSON.stringify(t))<0})),0===this.horarios_disponiveis.length&&(this.hora_disponivel=!1,a?this.$q.notify({color:"warning",textColor:"white",icon:"warning",position:"bottom",message:"Sem horário disponível para esta data. Se desejar entrar na fila de espera, prossiga com o agendamento..",multiLine:!0,timeout:1e4,actions:[{icon:"close",color:"white"}]}):(this.$q.notify({color:"negative",textColor:"white",icon:"warning",position:"bottom",message:"Sem horário disponível para esta data. Infelizmente neste dia não haverá fila de espera. Por favor escolha outra data.",multiLine:!0,timeout:1e4,actions:[{icon:"close",color:"white"}]}),this.data=""))}},agendar:function(){this.admin&&this.limparForm1();var t=this.ano_mes_dia(this.data),e=this.uid,a=this.nome,s=this.hora;if(this.hora_disponivel){this.$db.ref("aconselhamentos_marcados").orderByChild("data").equalTo(t).once("value",(function(t){}));var i=t+s,o=this.$db.ref("aconselhamentos_marcados").push();o.setWithPriority({uid:e,nome:a,data:t,horario:s,order:i},i)}else{var r=1,n=(new Date).toLocaleString("pt-BR",{timeZone:"America/Bahia"}).slice(-8).replace(/:/g,""),l=this.hoje+n,c=this.$db.ref("aconselhamentos_extras").push();this.$db.ref("aconselhamentos_extras").orderByChild("data").limitToLast(1).equalTo(t).on("child_added",(function(t){t.exists()&&(r=t.val().ordem_espera+1)})),c.setWithPriority({uid:e,nome:a,data:t,ordem_espera:r,order:l},l)}this.$q.notify({color:"positive",textColor:"white",icon:"event_available",position:"bottom",message:"Aconselhamento agendado!"}),this.limparForm2()},limparForm2:function(){this.user?this.nome=this.user.displayName:this.nome="",this.data="",this.hora="",this.mostra_horarios(this.data),this.hora_disponivel=!0,this.$refs.input_nome.resetValidation(),this.$refs.input_data.resetValidation(),this.$refs.input_hora&&this.$refs.input_hora.resetValidation()},desmarcar:function(t){var e=this;this.$db.ref("aconselhamentos_marcados").orderByChild("order").equalTo(t).once("child_added",(function(t){e.$db.ref("aconselhamentos_marcados").child(t.key).remove()}))},sairDaFila:function(t){var e=this,a="",s=1,i=[];this.$db.ref("aconselhamentos_extras").orderByChild("order").equalTo(t).once("child_added",(function(t){a=t.val().data,e.$db.ref("aconselhamentos_extras").child(t.key).remove()})),this.$db.ref("aconselhamentos_extras").orderByChild("data").equalTo(a).on("child_added",(function(t){i.push(t.key)}));var o=this;i.forEach((function(t){o.$db.ref("aconselhamentos_extras").child(t).update({ordem_espera:s}),s++}))}}}),r=o,n=a("2877"),l=a("eebe"),c=a.n(l),d=a("9989"),h=a("f09f"),u=a("a370"),m=a("eb85"),_=a("0378"),p=a("27f9"),f=a("0016"),v=a("7cbe"),b=a("52ee"),x=a("ddd8"),y=a("66e5"),q=a("4074"),g=a("8f8e"),C=a("0170"),k=a("9c40"),w=a("2bb1"),$=a("9564"),D=a("5096"),B=Object(n["a"])(r,s,i,!1,null,null,null);e["default"]=B.exports;c()(B,"components",{QPage:d["a"],QCard:h["a"],QCardSection:u["a"],QSeparator:m["a"],QForm:_["a"],QInput:p["a"],QIcon:f["a"],QPopupProxy:v["a"],QDate:b["a"],QSelect:x["a"],QItem:y["a"],QItemSection:q["a"],QCheckbox:g["a"],QItemLabel:C["a"],QBtn:k["a"],QMarkupTable:w["a"],QToggle:$["a"],QPageScroller:D["a"]})}}]);