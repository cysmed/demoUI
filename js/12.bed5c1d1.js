(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"8b24":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("q-page",{staticClass:"flex flex-center",staticStyle:{position:"fixed",top:"0px",width:"100%","z-index":"100"}},[s("img",{attrs:{alt:"cysmed",src:n("7687")}})]),s("q-page",{staticClass:"flex flex-center",staticStyle:{position:"absolute",top:"0px",width:"100%","z-index":"1000"}},[e.checkedLoggedIn&&!e.loggedIn?s("authForms"):e._e()],1)],1)},a=[],o=(n("ddb0"),n("cf57"),n("07de"));const d=n("40cd").default,i=n("1712").to,c=n("20e6");var l={name:"PageIndex",components:{authForms:o["a"]},data(){return{checkedLoggedIn:!1,loggedIn:!1}},async created(){d.setSettings({TBURL:c["TB_URL"]}),d.setVue(this),d.showLoading();let[e,t]=await i(d.isLoggedIn());d.hideLoading(),this.checkedLoggedIn=!0,t&&window.location.assign("#/home")},methods:{}},g=l,r=n("2877"),p=n("9989"),h=n("eebe"),u=n.n(h),w=Object(r["a"])(g,s,a,!1,null,null,null);t["default"]=w.exports;u()(w,"components",{QPage:p["a"]})}}]);