(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{c70e:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"bg-yellow"},[n("breadcrumbs",{attrs:{links:e.links}}),n("iframe",{ref:"defaultLandingIframe",staticStyle:{width:"100%",height:"100%",position:"absolute","overflow-y":"hidden"},attrs:{src:e.url,scrolling:"no",frameBorder:"0"}})],1)},l=[],o=n("2cbd");const s=n("40cd").default;var r={name:"setLandingPage",components:{breadcrumbs:o["a"]},beforeDestroy(){let e=this.url;e=e.split(window.location.protocol+"//"+window.location.host).join(""),s.setDefaultPageAfterLogin(e)},data(){return{links:[{label:"Settings",icon:"settings",to:"/system"},{label:"Default Home",icon:"house",to:"/system/landing_page"}],url:""}},created(){let e=s.getDefaultPageAfterLogin("");this.url=e,setInterval((()=>{let e=this.$refs.defaultLandingIframe.contentDocument.location.href;this.url=e||this.url}),1e3)}},i=r,c=n("2877"),u=n("9989"),d=n("eebe"),f=n.n(d),g=Object(c["a"])(i,a,l,!1,null,null,null);t["default"]=g.exports;f()(g,"components",{QPage:u["a"]})}}]);