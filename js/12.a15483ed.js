(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"8b24":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-page",{staticClass:"flex flex-center",staticStyle:{position:"fixed",top:"0px",width:"100%","z-index":"100"}},[a("img",{attrs:{alt:e.sysValues.PROJECT.toLowerCase(),src:s("6e23")("./"+e.sysValues.PROJECT.toLowerCase()+"/csysteminfo.png")}})]),a("q-page",{staticClass:"flex flex-center",staticStyle:{position:"absolute",top:"0px",width:"100%","z-index":"1000"}},[e.checkedLoggedIn&&!e.loggedIn?a("authForms"):e._e()],1)],1)},n=[],o=(s("ddb0"),s("cf57"),s("07de"));const i=s("c2a1").default,c=s("1712").to,d=s("20e6");var l={name:"PageIndex",components:{authForms:o["a"]},data(){return{checkedLoggedIn:!1,loggedIn:!1,sysValues:d}},async created(){i.setSettings({TBURL:d["TB_URL"]}),i.setVue(this),i.showLoading();let[e,t]=await c(i.isLoggedIn());i.hideLoading(),this.checkedLoggedIn=!0,t&&window.location.assign("#/home")},methods:{}},g=l,r=s("2877"),u=s("9989"),p=s("eebe"),h=s.n(p),w=Object(r["a"])(g,a,n,!1,null,null,null);t["default"]=w.exports;h()(w,"components",{QPage:u["a"]})}}]);