(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae528"],{"0a23":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-card",{staticClass:"w-100 mb-4",attrs:{"no-body":""}},[s("div",{staticClass:"p-35"},[s("div",{staticClass:"d-flex align-items-start"},[s("div",[s("h4",{staticClass:"card-title mb-1"},[t._v("Toasts on demand")]),s("b-card-text",{staticClass:"text-muted"},[t._v(" Generate a dynamic toast from anywhere in your app via the this.$bvToast Vue component instance injection ")])],1)])]),s("hr",{staticClass:"m-0"}),s("b-card-body",[s("div",{staticClass:"btn-grp"},[s("b-button",{attrs:{variant:"primary"},on:{click:function(a){return t.makeToast()}}},[t._v("Show Toast")]),s("b-button",{attrs:{variant:"success"},on:{click:function(a){return t.makeToast(!0)}}},[t._v("Show Toast (appended)")])],1)])],1)},o=[],e={name:"ToastsDemand",data:function(){return{toastCount:0}},methods:{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("This is toast number ".concat(this.toastCount),{title:"BootstrapVue Toast",autoHideDelay:5e3,appendToast:t})}}},i=e,c=s("2877"),r=Object(c["a"])(i,n,o,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0ae528.f0b3f2d7.js.map