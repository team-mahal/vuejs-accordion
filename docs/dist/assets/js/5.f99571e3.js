(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{245:function(e,t,l){"use strict";l.r(t);var a={name:"VueEditableElement",data:function(){return{edit:!1,label:"",empty:"Enter some text value"}},props:{text:String,placeholder:{type:String,default:"Enter some text value"},textarea:{type:Boolean,default:!1},cssclass:{type:String,default:""}},methods:{initText:function(){""==this.text||null==this.text?this.label=this.vlabel:this.label=this.text},onLabelClick:function(){this.edit=!0,this.label=this.text},updateTextBlur:function(){this.edit=!1,this.$emit("textupdatedblur",this.label)},updateTextEnter:function(){this.edit=!1,this.$emit("text-updated-enter",this.label)}},computed:{vplaceholder:function(){return null==this.placeholder||""==this.placeholder?this.empty:this.placeholder},vlabel:function(){return null==this.text||""==this.text?this.vplaceholder:this.label}},mounted:function(){this.initText()},updated:function(){var e=this.$refs.vueeditableelement;null!=e&&e.focus()},watch:{text:function(e){this.label=""==e||null==e?this.vplaceholder:e}}},n=l(27),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e.edit?e._e():l("div",{on:{click:e.onLabelClick}},[e._v(e._s(e.vlabel))]),e._v(" "),e.textarea?l("div",[e.edit?l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],ref:"vueeditableelement",class:e.cssclass,attrs:{type:"text",placeholder:e.vplaceholder},domProps:{value:e.label},on:{blur:e.updateTextBlur,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateTextEnter(t)},input:function(t){t.target.composing||(e.label=t.target.value)}}}):e._e()]):l("div",[e.edit?l("input",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],ref:"vueeditableelement",class:e.cssclass,attrs:{type:"text",placeholder:e.vplaceholder},domProps:{value:e.label},on:{blur:e.updateTextBlur,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateTextEnter(t)},input:function(t){t.target.composing||(e.label=t.target.value)}}}):e._e()])])}),[],!1,null,null,null);t.default=i.exports}}]);