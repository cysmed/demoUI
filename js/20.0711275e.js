(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{e3be:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.openedEditing?e._e():s("div",{staticClass:"q-pa-sm"},[s("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Login as User"},on:{click:e.loginAsUser}}),s("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Delete User"},on:{click:e.deleteUser}})],1),s("q-form",{ref:"userRegistrationForm",staticClass:"q-gutter-md text-white",on:{submit:e.editUser}},[s("q-input",{attrs:{filled:"",type:"text",label:"first name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name"}],disable:!e.openedEditing},model:{value:e.selectedRow.firstName,callback:function(t){e.$set(e.selectedRow,"firstName",t)},expression:"selectedRow.firstName"}}),s("q-input",{attrs:{filled:"",type:"text",label:"last name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name"}],disable:!e.openedEditing},model:{value:e.selectedRow.lastName,callback:function(t){e.$set(e.selectedRow,"lastName",t)},expression:"selectedRow.lastName"}}),s("q-checkbox",{staticClass:"col text-black",attrs:{label:"Enabled",disable:!e.openedEditing},model:{value:e.selectedRow.enabled,callback:function(t){e.$set(e.selectedRow,"enabled",t)},expression:"selectedRow.enabled"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"items-left text-left"},[s("q-btn",{attrs:{label:"Change Password",color:"primary"},on:{click:function(t){e.changePasswordDialog=!0}}})],1)]),s("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:e.changePasswordDialog,callback:function(t){e.changePasswordDialog=t},expression:"changePasswordDialog"}},[s("q-card",[s("q-card-section",{staticClass:"bg-secondary text-white text-h5 text-center"},[e._v("\n        Change Password\n      ")]),s("q-card-section",[s("q-form",{ref:"changePasswordForm",staticClass:"q-gutter-md text-white",on:{submit:e.changePassword,reset:e.onResetChangePassword}},[s("q-input",{attrs:{filled:"",type:"password",label:"Current Password",hint:"Current Password","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter current pasword"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitChangePassword(t)}},model:{value:e.currentPassword,callback:function(t){e.currentPassword=t},expression:"currentPassword"}}),s("q-input",{attrs:{filled:"",type:"password",label:"New Password",hint:"New Password","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter new pasword"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitChangePassword(t)}},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),s("q-input",{attrs:{filled:"",type:"password",label:"Confirm New Password",hint:"Confirm New Password","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please confirm new pasword"}],"error-message":e.confirmPasswordError},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitChangePassword(t)}},model:{value:e.newPasswordAgain,callback:function(t){e.newPasswordAgain=t},expression:"newPasswordAgain"}}),s("div",{staticClass:"row"},[s("q-space"),s("div",{staticClass:"items-left text-left"},[s("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}}),s("q-btn",{attrs:{label:"Change Password",type:"submit",color:"green"}})],1)],1)],1)],1)],1)],1)],1)],1)},i=[],n=(s("ddb0"),s("7c83"));s("bc3a");const r=s("1712").to,o=s("20e6"),l=s("c2a1").default,d=s("6daa").default;var c={name:"userDetailsDesktop",props:["main","openedEditing","submit","reset"],components:{activationLink:n["a"]},async created(){l.setSettings({TBURL:o["TB_URL"]}),l.setVue(this),this.selectedRow=JSON.parse(JSON.stringify(this.main.selectedRow));let[e,t]=await r(l.whoAmILocally());t&&(this.whoami=t)},data(){return{changePasswordDialog:!1,selectedRow:{},whoami:{},userChanged:!1,alert:!1,alertUserId:"",genders:["Male","Female"],authorities:["SYS_ADMIN","SYS_USER"],currentPassword:"",newPassword:"",newPasswordAgain:"",confirmPasswordError:""}},methods:{onResetChangePassword(){this.currentPassword="",this.newPassword="",this.newPasswordAgain=""},submitChangePassword(){this.$refs.changePasswordForm.submit()},async changePassword(){return new Promise((async(e,t)=>{if(this.newPassword!==this.newPasswordAgain)return this.newPasswordAgain="",this.confirmPasswordError="Passwords don't match",e(!1);let s={userId:this.selectedRow.userId,oldpassword:this.currentPassword,password:this.newPassword};l.showLoading({message:"Changing Password"});let[a,i]=await r(l.changePassword(s));if(l.hideLoading(),a)return this.$q.notify({type:"negative",message:a.response.data.error||a.msg||a.response.data.message||a.message||a}),e(!1);this.$q.notify({type:"positive",message:"Password changed."}),this.changePasswordDialog=!1,e(i)}))},async editUser(){return new Promise((async(e,t)=>{let s=this.selectedRow;this.main.loadingSomething=!0;let[a,i]=await r(l.saveUserData(s));if(this.main.loadingSomething=!1,a)return this.$q.notify({type:"negative",message:a.msg||a}),e(!1);this.$q.notify({type:"positive",message:`Saved changes for ${this.selectedRow.email}`}),await this.main.listUsers(),this.main.editted=!1,e(!0)}))},async deleteUser(e){return new Promise((async(e,t)=>{if(this.whoami.userId===this.main.selectedRow.userId)return this.$q.notify({type:"negative",message:"You can't delete you own account from here."}),e(!1);let[s,a]=await r(d.confirm(this,`Are you sure you want to delete ${this.main.selectedRow.email} account?`,"Delete Account"));return s?e(!1):(this.main.loadingSomething=!0,[s,a]=await r(l.deleteUser(this.main.selectedRow.userId)),this.main.loadingSomething=!1,s?(this.$q.notify({type:"negative",message:s.msg||s}),e(!1)):(this.$q.notify({type:"positive",message:`Account for ${this.main.selectedRow.email} has been deleted.`}),void await this.main.listUsers()))}))},async loginAsUser(e){return new Promise((async(e,t)=>{let s=(await l.whoAmILocally()).userId;if(s===this.main.selectedRow.userId)return this.$q.notify({type:"negative",message:"You are already logged in"}),e();this.main.loadingSomething=!0;let[a,i]=await r(l.loginasUser(this.main.selectedRow.userId));this.main.loadingSomething=!1,a?(this.loggedin=!1,this.$q.notify({type:"negative",message:a.error||a.message||"failed to log in"})):window.location.assign("#/home")}))},async resendActivationEmail(){return new Promise((async(e,t)=>{this.main.loadingSomething=!0;let[s,a]=await r(l.sendActivationEmail({userId:this.main.selectedRow.userId,firstName:this.main.selectedRow.firstName,lastName:this.main.selectedRow.lastName,email:this.main.selectedRow.email,authority:this.main.selectedRow.authority,dateOfBirth:this.main.selectedRow.dateOfBirth,gender:this.main.selectedRow.gender},{activationEmail:!0,showActivationLink:!1},!0));if(this.main.loadingSomething=!1,this.working=!1,s){s=s.msg||s.message||s.error||s;try{s=JSON.parse(s)}catch(i){}if("object"===typeof s){let e=Object.keys(s);s=s[e[0]]}this.$q.notify({type:"negative",message:s}),e(!1)}else this.$q.notify({type:"positive",message:`Activation email has been sent to ${this.main.selectedRow.email}`})}))},displayActivationLink(){this.alert=!1,this.$nextTick((()=>this.alert=!0)),this.alertUserId=this.main.selectedRow.userId}},computed:{userEditted(){return(this.main.selectedRow.firstName!==this.originalSelectedUser.firstName||this.main.selectedRow.lastName!==this.originalSelectedUser.lastName||this.main.selectedRow.authority!==this.originalSelectedUser.authority||this.main.selectedRow.dateOfBirth!==this.originalSelectedUser.dateOfBirth||this.main.selectedRow.gender!==this.originalSelectedUser.gender||this.main.selectedRow.enabled!==this.originalSelectedUser.enabled)&&(this.main.editted=!0)}},watch:{selectedRow:{handler(e){JSON.stringify(this.selectedRow)!==JSON.stringify(this.main.selectedRow)?this.main.editted=!0:this.main.editted=!1},deep:!0},submit(e){e&&this.$refs.userRegistrationForm.submit()},reset(e){e&&(this.selectedRow=JSON.parse(JSON.stringify(this.main.selectedRow)))}}},m=c,w=s("2877"),h=s("9c40"),u=s("0378"),g=s("27f9"),f=s("ddd8"),p=s("8f8e"),y=s("24e8"),b=s("f09f"),P=s("a370"),R=s("2c91"),v=s("eebe"),k=s.n(v),q=Object(w["a"])(m,a,i,!1,null,null,null);t["default"]=q.exports;k()(q,"components",{QBtn:h["a"],QForm:u["a"],QInput:g["a"],QSelect:f["a"],QCheckbox:p["a"],QDialog:y["a"],QCard:b["a"],QCardSection:P["a"],QSpace:R["a"]})}}]);