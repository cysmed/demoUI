(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{add7:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.openedEditing?e._e():i("div",{staticClass:"q-pa-sm"},[i("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Display activation link"},on:{click:e.displayActivationLink}}),i("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Resend activation"},on:{click:e.resendActivationEmail}}),i("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Login as User"},on:{click:e.loginAsUser}}),i("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Delete User"},on:{click:e.deleteUser}})],1),i("q-form",{ref:"userRegistrationForm",staticClass:"q-gutter-md text-white",on:{submit:e.editUser}},[i("q-input",{attrs:{filled:"",type:"text",label:"first name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name"}],disable:!e.openedEditing},model:{value:e.selectedRow.firstName,callback:function(t){e.$set(e.selectedRow,"firstName",t)},expression:"selectedRow.firstName"}}),i("q-input",{attrs:{filled:"",type:"text",label:"last name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name"}],disable:!e.openedEditing},model:{value:e.selectedRow.lastName,callback:function(t){e.$set(e.selectedRow,"lastName",t)},expression:"selectedRow.lastName"}}),i("q-select",{attrs:{filled:"",options:e.authorities,label:"Authority","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please select an authority"}],disable:!e.openedEditing,clearable:!1},model:{value:e.selectedRow.authority,callback:function(t){e.$set(e.selectedRow,"authority",t)},expression:"selectedRow.authority"}}),i("q-select",{attrs:{filled:"",options:e.genders,label:"Gender","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please select a gender"}],disable:!e.openedEditing},model:{value:e.selectedRow.gender,callback:function(t){e.$set(e.selectedRow,"gender",t)},expression:"selectedRow.gender"}}),i("q-input",{attrs:{filled:"",mask:"date",label:"Date of Birth(YYYY/MM/DD)",rules:["date",function(e){return e&&e.length>0||"Please enter a dob"}],disable:!e.openedEditing},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[i("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[i("q-date",{model:{value:e.selectedRow.dateOfBirth,callback:function(t){e.$set(e.selectedRow,"dateOfBirth",t)},expression:"selectedRow.dateOfBirth"}},[i("div",{staticClass:"row items-center justify-end"},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.selectedRow.dateOfBirth,callback:function(t){e.$set(e.selectedRow,"dateOfBirth",t)},expression:"selectedRow.dateOfBirth"}}),i("q-checkbox",{staticClass:"col text-black",attrs:{label:"Enabled",disable:!e.openedEditing},model:{value:e.selectedRow.enabled,callback:function(t){e.$set(e.selectedRow,"enabled",t)},expression:"selectedRow.enabled"}}),i("activationLink",{attrs:{alert:e.alert,alertUserId:e.alertUserId,main:e.main}})],1)],1)},a=[],n=(i("ddb0"),i("7c83"));i("bc3a");const l=i("1712").to,o=i("20e6"),r=i("c2a1").default,d=i("6daa").default;var c={name:"userDetails",props:["main","openedEditing","submit","reset"],components:{activationLink:n["a"]},async created(){r.setSettings({TBURL:o["TB_URL"]}),r.setVue(this),this.selectedRow=JSON.parse(JSON.stringify(this.main.selectedRow));let[e,t]=await l(r.whoAmILocally());t&&(this.whoami=t)},data(){return{selectedRow:{},whoami:{},userChanged:!1,alert:!1,alertUserId:"",genders:["Male","Female"],authorities:["SYS_ADMIN","SYS_USER"]}},methods:{async editUser(){return new Promise((async(e,t)=>{let i=this.selectedRow;this.main.loadingSomething=!0;let[s,a]=await l(r.saveUserData(i));if(this.main.loadingSomething=!1,s)return this.$q.notify({type:"negative",message:s.msg||s}),e(!1);this.$q.notify({type:"positive",message:`Saved changes for ${this.selectedRow.email}`}),await this.main.listUsers(),this.main.editted=!1,e(!0)}))},async deleteUser(e){return new Promise((async(e,t)=>{if(this.whoami.userId===this.main.selectedRow.userId)return this.$q.notify({type:"negative",message:"You can't delete you own account from here."}),e(!1);let[i,s]=await l(d.confirm(this,`Are you sure you want to delete ${this.main.selectedRow.email} account?`,"Delete Account"));return i?e(!1):(this.main.loadingSomething=!0,[i,s]=await l(r.deleteUser(this.main.selectedRow.userId)),this.main.loadingSomething=!1,i?(this.$q.notify({type:"negative",message:i.msg||i}),e(!1)):(this.$q.notify({type:"positive",message:`Account for ${this.main.selectedRow.email} has been deleted.`}),void await this.main.listUsers()))}))},async loginAsUser(e){return new Promise((async(e,t)=>{let i=(await r.whoAmILocally()).userId;if(i===this.main.selectedRow.userId)return this.$q.notify({type:"negative",message:"You are already logged in"}),e();this.main.loadingSomething=!0;let[s,a]=await l(r.loginasUser(this.main.selectedRow.userId));this.main.loadingSomething=!1,s?(this.loggedin=!1,this.$q.notify({type:"negative",message:s.error||s.message||"failed to log in"})):window.location.assign("#/home")}))},async resendActivationEmail(){return new Promise((async(e,t)=>{this.main.loadingSomething=!0;let[i,s]=await l(r.sendActivationEmail({userId:this.main.selectedRow.userId,firstName:this.main.selectedRow.firstName,lastName:this.main.selectedRow.lastName,email:this.main.selectedRow.email,authority:this.main.selectedRow.authority,dateOfBirth:this.main.selectedRow.dateOfBirth,gender:this.main.selectedRow.gender},{activationEmail:!0,showActivationLink:!1},!0));if(this.main.loadingSomething=!1,this.working=!1,i){i=i.msg||i.message||i.error||i;try{i=JSON.parse(i)}catch(a){}if("object"===typeof i){let e=Object.keys(i);i=i[e[0]]}this.$q.notify({type:"negative",message:i}),e(!1)}else this.$q.notify({type:"positive",message:`Activation email has been sent to ${this.main.selectedRow.email}`})}))},displayActivationLink(){this.alert=!1,this.$nextTick((()=>this.alert=!0)),this.alertUserId=this.main.selectedRow.userId}},computed:{userEditted(){return(this.main.selectedRow.firstName!==this.originalSelectedUser.firstName||this.main.selectedRow.lastName!==this.originalSelectedUser.lastName||this.main.selectedRow.authority!==this.originalSelectedUser.authority||this.main.selectedRow.dateOfBirth!==this.originalSelectedUser.dateOfBirth||this.main.selectedRow.gender!==this.originalSelectedUser.gender||this.main.selectedRow.enabled!==this.originalSelectedUser.enabled)&&(this.main.editted=!0)}},watch:{selectedRow:{handler(e){JSON.stringify(this.selectedRow)!==JSON.stringify(this.main.selectedRow)?this.main.editted=!0:this.main.editted=!1},deep:!0},submit(e){e&&this.$refs.userRegistrationForm.submit()},reset(e){e&&(this.selectedRow=JSON.parse(JSON.stringify(this.main.selectedRow)))}}},m=c,h=i("2877"),u=i("9c40"),g=i("0378"),w=i("27f9"),p=i("ddd8"),f=i("0016"),y=i("7cbe"),b=i("52ee"),R=i("8f8e"),v=i("7f67"),q=i("eebe"),S=i.n(q),k=Object(h["a"])(m,s,a,!1,null,null,null);t["default"]=k.exports;S()(k,"components",{QBtn:u["a"],QForm:g["a"],QInput:w["a"],QSelect:p["a"],QIcon:f["a"],QPopupProxy:y["a"],QDate:b["a"],QCheckbox:R["a"]}),S()(k,"directives",{ClosePopup:v["a"]})}}]);