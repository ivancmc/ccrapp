(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c7791"],{5187:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md flex-center",staticStyle:{"max-width":"300px"}},[a("div",[a("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},[a("q-input",{attrs:{label:"Dia",outlined:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{title:"Data",mask:"DD/MM/YYYY",minimal:""},on:{input:function(){return t.$refs.qDateProxy.hide()}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),a("q-select",{attrs:{outlined:"",multiple:"",options:t.horarios,label:"Horários"},model:{value:t.hours,callback:function(e){t.hours=e},expression:"hours"}}),a("q-checkbox",{attrs:{label:"Fila de espera"},model:{value:t.extra,callback:function(e){t.extra=e},expression:"extra"}}),a("div",[a("q-btn",{attrs:{label:"Disponibilizar",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Limpar",type:"reset",color:"primary",flat:""}})],1)],1)],1),a("br"),a("div",{staticStyle:{width:"fit-content"}},[a("q-markup-table",{attrs:{flat:"",bordered:""}},[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("Data")]),a("th",{staticClass:"text-center"},[t._v("Horários")]),a("th",{staticClass:"text-center"},[t._v("Extras")]),a("th",{staticClass:"text-center"},[t._v("Ação")])])]),a("tbody",t._l(t.agenda,(function(e){return a("tr",{key:e[".key"]},[a("td",{staticClass:"text-center"},[t._v(t._s(e.data))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.horarios))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.extra))]),a("td",[a("button",{on:{click:function(a){return t.remove_disponib(e[".key"])}}},[t._v("Excluir")])])])})),0)])],1)])},o=[],n={name:"Aconselhamento",data:function(){return{date:"",hours:[13,14,15,16],horarios:[13,14,15,16],extra:!1,agenda:[]}},created:function(){var t=this;this.$db.ref("aconselhamentos_agenda").on("value",(function(e){t.agenda=e.val()}))},methods:{onSubmit:function(){this.$db.ref("aconselhamentos_agenda").push({data:this.date,horarios:this.hours,extra:this.extra}),this.$q.notify({color:"positive",textColor:"white",icon:"event_available",position:"center",message:"Aconselhamento disponibilizado!"}),this.onReset()},onReset:function(){this.date="",this.hours=[13,14,15,16],this.extra=!1},remove_disponib:function(t){console.log(t)}}},i=n,r=a("2877"),l=a("fe09"),c=Object(r["a"])(i,s,o,!1,null,null,null);e["default"]=c.exports;c.options.components=Object.assign({QForm:l["m"],QInput:l["r"],QIcon:l["o"],QPopupProxy:l["C"],QDate:l["i"],QSelect:l["E"],QCheckbox:l["h"],QBtn:l["a"],QMarkupTable:l["x"]},c.options.components||{})}}]);