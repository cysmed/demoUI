(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{2693:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("breadcrumbs",{attrs:{links:s.links}}),e("cysmedSubscriptions",{attrs:{cysmed:s.cysmed}})],1)},n=[],c=(e("ddb0"),e("2cbd"));const i=e("c2a1").default;var r={name:"subscriptions",components:{breadcrumbs:c["default"],cysmedSubscriptions:async()=>{let s=(await i.whoAmILocally()).authority,t=!s.match(/PHARMACY/);return t?Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"310d")):e.e(11).then(e.bind(null,"3c97"))}},props:["cysmed"],data(){return{tab:"Current Subscriptions",tabs:["Current Subscriptions","Free Trials","Monthly Subscriptions"],links:[{label:"Subscriptions",icon:"subscriptions",to:"/subscriptions"}],allowlastName:!0}},async created(){let s=(await this.cysmed.whoAmILocally()).authority;this.allowlastName=!s.match(/PHARMACY/)},methods:{}},o=r,l=(e("4ebc"),e("2877")),b=e("429bb"),u=e("7460"),d=e("adad"),m=e("823b"),p=e("eebe"),h=e.n(p),y=Object(l["a"])(o,a,n,!1,null,"0b205933",null);t["default"]=y.exports;h()(y,"components",{QTabs:b["a"],QTab:u["a"],QTabPanels:d["a"],QTabPanel:m["a"]})},"4ebc":function(s,t,e){"use strict";e("cecf")},cecf:function(s,t,e){}}]);