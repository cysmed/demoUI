(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"0e4b":function(s,t,e){},"71e9":function(s,t,e){"use strict";e("0e4b")},b0ef:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("q-page",{staticClass:"flex flex-center",staticStyle:{position:"fixed",top:"0px",width:"100%","z-index":"100"}},[a("img",{attrs:{alt:s.sysValues.PROJECT.toLowerCase(),src:e("6e23")("./"+s.sysValues.PROJECT.toLowerCase()+"/csysteminfo.png")}})]),a("q-page",{staticClass:"flex flex-center",staticStyle:{position:"absolute",top:"0px",width:"100%","z-index":"1000"}},[a("q-card",{staticClass:"activate-card"},[a("q-card-section",{staticClass:"bg-secondary text-white text-center"},[a("div",{staticClass:"text-h6"},[s._v(s._s(s.translate("PROJECT.NAME")))]),a("div",{staticClass:"text-subtitle2"},[s._v("Reset Password")])]),a("q-card-section",{staticClass:"bg-secondary text-white"},[a("q-form",{staticClass:"text-white bg-secondary",on:{submit:s.onSubmit,reset:s.onReset}},[a("q-input",{attrs:{filled:"",type:"password",label:s.translate("FIELDS.PASSWORD"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||s.translate("FIELDS.ERRORS.PASSWORD.MISSINGOWN")}],"error-message":s.passwordErrorMessage},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),a("q-input",{attrs:{filled:"",type:"password",label:s.translate("FIELDS.CONFIRMPASSWORD"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||s.translate("FIELDS.ERRORS.CONFIRMPASSWORD.MISSINGOWN")}],"error-message":s.passwordErrorMessage},model:{value:s.cpassword,callback:function(t){s.cpassword=t},expression:"cpassword"}}),a("div",{staticClass:"q-pa-md"},[a("q-btn",{attrs:{label:s.translate("ACTIONS.SUBMIT"),type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:s.translate("ACTIONS.RESET"),type:"reset",color:"white",flat:""}})],1)],1)],1)],1)],1)],1)},r=[];e("ddb0"),e("cf57");const o=e("c2a1").default,n=e("1712").to,i=e("20e6"),l=e("ea76").default;var c={name:"resetpassword",components:{},props:["cysmed"],data(){return{translate:l.translate,sysValues:i,extendedProjectName:"",password:"",cpassword:"",passwordErrorMessage:""}},async created(){o.setSettings({TBURL:i["TB_URL"]}),this.extendedProjectName=i["PROJECTEXTENDED"],o.setVue(this)},methods:{async onSubmit(){return o.setSettings({TBURL:i["TB_URL"]}),new Promise((async(s,t)=>{let e,a=window.location.hash.split("?")[1].split("&");if(a.map((s=>{s=s.split("="),"passwordToken"!==s[0]&&"resetToken"!==s[0]||(e=s[1])})),this.password!==this.cpassword)return this.cpassword="",this.passwordErrorMessage=this.translate("FIELDS.ERRORS.PASSWORD.DONTMATCH"),this.$q.notify({type:"negative",message:this.translate("FIELDS.ERRORS.PASSWORD.DONTMATCH")}),s(!1);o.showLoading({message:this.translate("PASSAGE.ACTIVATESETPASSWORD")});let[r,i]=await n(o.resetPassword({passwordToken:e,password:this.password},!0));if(o.hideLoading(),r){r=r.msg||r.message||r.error||r;try{r=JSON.parse(r)}catch(l){}if("object"===typeof r){let s=Object.keys(r);r=r[s[0]]}this.$q.notify({type:"negative",message:this.translate(r)||r}),s(!1)}else this.$q.notify({type:"positive",message:"Password successfully reset."}),window.location.assign("/")}))},onReset(){this.cpassword="",this.password=""}}},d=c,p=(e("71e9"),e("2877")),w=e("9989"),u=e("f09f"),S=e("a370"),f=e("0378"),R=e("27f9"),m=e("9c40"),h=e("eebe"),y=e.n(h),b=Object(p["a"])(d,a,r,!1,null,"0a3b16f0",null);t["default"]=b.exports;y()(b,"components",{QPage:w["a"],QCard:u["a"],QCardSection:S["a"],QForm:f["a"],QInput:R["a"],QBtn:m["a"]})}}]);