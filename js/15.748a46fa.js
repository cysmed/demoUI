(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{2481:function(e,t,i){},3962:function(e,t,i){"use strict";i("2481")},"996f":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("breadcrumbs",{staticClass:"absolute-top",attrs:{links:e.links}}),e.hasBasicProfile?i("basicProfile",{attrs:{cysmed:e.cysmed}}):e._e(),e.hasMedicProfile?i("medicProfile",{attrs:{cysmed:e.cysmed}}):e._e(),e.hasFacilityProfile?i("facilityProfile",{attrs:{cysmed:e.cysmed}}):e._e()],1)},s=[],r=i("0e1b"),c=i("862c"),o=i("d1a5"),l=i("2cbd");const n=i("c2a1").default;i("1712").to;var u={name:"profile",components:{breadcrumbs:l["default"],basicProfile:r["a"],medicProfile:c["a"],facilityProfile:o["a"]},props:["cysmed"],data(){return{links:[{label:"Profile",icon:"person",to:"/profile"}],authority:null}},async created(){let e=await n.whoAmILocally();this.userName=`${e.firstName} ${e.lastName}`,this.authority=`${e.currentAuthority||e.authority}`},methods:{},computed:{hasBasicProfile(){return["SYS_ADMIN","PATIENT"].includes(this.authority)},hasMedicProfile(){return["MEDIC"].includes(this.authority)},hasFacilityProfile(){return["FACILITY"].includes(this.authority)}}},d=u,f=(i("3962"),i("2877")),h=Object(f["a"])(d,a,s,!1,null,"70bd8da1",null);t["default"]=h.exports}}]);