(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"8b24":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-page",{staticClass:"flex flex-center",staticStyle:{position:"fixed",top:"0px",width:"100%","z-index":"100"}},[n("img",{attrs:{alt:e.sysValues.PROJECT.toLowerCase(),src:a("6e23")("./"+e.sysValues.PROJECT.toLowerCase()+"/csysteminfo.png")}})]),n("div",{staticClass:"q-ma-none absolute-top-right",staticStyle:{"z-index":"1001"}},[n("q-select",{staticClass:"q-ma-none q-pa-none bg-reen",attrs:{filled:"",options:e.langs,label:"Language","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please select a language"}]},on:{input:e.changeLang},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}})],1),n("q-page",{staticClass:"flex flex-center",staticStyle:{position:"absolute",top:"0px",width:"100%","z-index":"1000"}},[e.checkedLoggedIn&&!e.loggedIn?n("authForms"):e._e()],1)],1)},s=[],l=(a("ddb0"),a("cf57"),a("07de"));const o=a("c2a1").default,i=a("ea76").default,g=a("1712").to,c=a("20e6");var d={name:"PageIndex",components:{authForms:l["a"]},data(){return{translate:i.translate,checkedLoggedIn:!1,loggedIn:!1,sysValues:c,lang:"",langs:[]}},async created(){this.lang=i.getLang(),this.langs=i.listLangs(),o.setSettings({TBURL:c["TB_URL"]}),o.setVue(this),o.showLoading();let[e,t]=await g(o.isLoggedIn());o.hideLoading(),this.checkedLoggedIn=!0,t&&window.location.assign("#/home")},methods:{changeLang(){let e=this.lang;i.setLang(e),window.location.reload()}}},r=d,u=a("2877"),h=a("9989"),p=a("ddd8"),f=a("eebe"),w=a.n(f),L=Object(u["a"])(r,n,s,!1,null,null,null);t["default"]=L.exports;w()(L,"components",{QPage:h["a"],QSelect:p["a"]})}}]);