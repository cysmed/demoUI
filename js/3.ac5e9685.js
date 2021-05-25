(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{1:function(e,t){},10:function(e,t){},2:function(e,t){},3:function(e,t){},"310f":function(e,t,s){"use strict";var o=function(){var e=this,t=this,s=t.$createElement,o=t._self._c||s;return o("q-form",{staticClass:"text-white bg-secondary",on:{submit:t.onSubmit,reset:t.onReset}},[o("q-input",{attrs:{filled:"",type:"email",label:"email",hint:"email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter your email address"},function(t){return e.isValidEmail()||"Invalid email address"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("q-input",{attrs:{filled:"",type:"password",label:"Password","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please enter your password"}],"error-message":t.passwordErrorMessage},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("div",{staticClass:"q-pa-md"},[o("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"white",flat:""}})],1)],1)},n=[],i=(s("ddb0"),s("cf57"));const a=s("1712").to,r=s("ff00"),l=s("40cd").default;var c={name:"loginForm",data(){return{email:"",password:"",passwordErrorMessage:""}},methods:{isValidEmail(){const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return e.test(this.email)||"Invalid email"},showCustom(e=""){const t=this.$q.dialog({title:e,message:"",progress:{spinner:i["a"],color:"primary"},persistent:!0,ok:!1}),s=setInterval((()=>{!1===this.working&&(clearInterval(s),t.hide())}),500)},async onSubmit(){l.setSettings({TBURL:r["TB_URL"]});r["TB_URL"];let e={email:this.email,password:this.password};this.working=!0,this.showCustom();let[t,s]=await a(l.login(e));if(this.working=!1,t)return this.loggedin=!1,this.$q.notify({type:"negative",message:t.error||t.message||"failed to log in"}),this.password="",void(this.passwordErrorMessage=t.error||t.message||"wrong email/password");l.setToken(s),this.$q.notify({type:"positive",message:"log in successful"}),window.location.assign("#/home")},onReset(){this.email=null,this.password=null}}},h=c,u=s("2877"),d=s("0378"),g=s("27f9"),p=s("9c40"),m=s("eebe"),y=s.n(m),w=Object(u["a"])(h,o,n,!1,null,null,null);t["a"]=w.exports;y()(w,"components",{QForm:d["a"],QInput:g["a"],QBtn:p["a"]})},4:function(e,t){},"40cd":function(e,t,s){"use strict";s.r(t);var o=s("9523"),n=s.n(o),i=(s("ddb0"),s("e01a"),s("cf57"));const a=s("1712").to,r=s("bc3a"),l=s("1232").default,c=s("4556"),h=s("e350").default;class u extends h{constructor(){super(),n()(this,"vueObj",null),n()(this,"setVue",(e=>{this.vueObj=e})),n()(this,"showLoading",((e={})=>{let{message:t,color:s}=e;t||(t="loading"),s||(s="white"),this.vueObj.$q.loading.show({spinner:i["a"],spinnerColor:s,message:t})})),n()(this,"hideLoading",(()=>{this.vueObj.$q.loading.hide()})),n()(this,"settings",{}),n()(this,"setSettings",(e=>{for(let t in e){let s=e[t];this.settings[t]=s}})),n()(this,"setToken",(e=>{let t=e.token,s=e.refreshToken;window.localStorage.setItem("cysmedTokenGSAC",t),window.localStorage.setItem("cysmedRefreshTokenGSAC",s)})),n()(this,"logout",(()=>{window.localStorage.removeItem("cysmedTokenGSAC"),window.localStorage.removeItem("cysmedRefreshTokenGSAC"),this.jwt_token=null})),n()(this,"login",(async e=>new Promise((async(t,s)=>{let o=`${this.settings.TBURL}/auth/login`;console.log(o,e);let[n,i]=await a(r.post(o,e,{headers:{"Content-Type":"application/json"}}));return n?s(n.response.data):t(i.data)})))),n()(this,"getToken",(async(e,t)=>new Promise((async(t,s)=>{let o=`${this.settings.TBURL}/auth/token`,[n,i]=await a(r.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e}}));return n?s(n):t(i.data)})))),n()(this,"isLoggedIn",(async()=>new Promise((async(e,t)=>{let s=localStorage.getItem("cysmedTokenGSAC");if(!s)return this.vueObj.isLoggedIn=!1,t("missing token");let o=l(s);console.log(o),this.userId=o.userId,this.jwt_token=s;let n=o.exp;if(!n)return t("missing token expiry");let i=localStorage.getItem("cysmedRefreshTokenGSAC");n=parseInt(n),console.log("==========="),console.log("==========="),console.log("==========="),console.log("==========="),(new Date).getTime();{let[e,o]=await a(this.getToken(s,i));if(e)return t("could not find token");this.setToken(o),s=o.token}return console.log(s),e(s)})))),n()(this,"fetchRoles",(async()=>new Promise((async(e,t)=>{let[s,o]=await a(this.sendSaveTeletry({type:"roles",action:"get"}));if(s)return t(s);e(o)})))),n()(this,"fetchUserRoles",(async e=>new Promise((async(t,s)=>{let[o,n]=await a(this.sendSaveTeletry({type:"roles",action:"userroles",user:e}));if(o)return s(o);console.log(n),t(n)})))),n()(this,"fetctUserProjects",(async e=>new Promise((async(t,s)=>{let[o,n]=await a(this.sendSaveTeletry({type:"projects",action:"userprojects",user:e}));if(o)return s(o);console.log(n),t(n)})))),n()(this,"addUserRole",(async(e,t)=>new Promise((async(s,o)=>{let[n,i]=await a(this.sendSaveTeletry({type:"roles",action:"adduserrole",user:e,roleId:t},!0));if(n)return o(n);console.log(i),s(i)})))),n()(this,"removeUserRole",(async(e,t)=>new Promise((async(s,o)=>{let[n,i]=await a(this.sendSaveTeletry({type:"roles",action:"removeuserrole",user:e,roleId:t}));if(n)return o(n);console.log(i),s(i)})))),n()(this,"fetchProjects",(async()=>new Promise((async(e,t)=>{let[s,o]=await a(this.sendSaveTeletry({type:"projects",action:"get"}));if(s)return t(s);e(o)})))),n()(this,"whoAmI",(async()=>new Promise((async(e,t)=>{let[s,o]=await a(this.readUserData());if(console.log("WHOAMI"),s)return t(s);e(o)})))),n()(this,"fetchUsers",(async()=>new Promise((async(e,t)=>{let[s,o]=await a(this.whoAmI());if(s)return t(s);let n,i=o.authority;if("TENANT_ADMIN"===i){let e=`${this.settings.TBURL}/tenant/customers?customerTitle=GS Publications`;if([s,o]=await a(r.get(e,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}})),s)return t(s);n=o.data.id.id}else console.log("i am a customer...."),console.log(o),n=o.customerId.id;if(console.log("CUSTOMER ID",n),[s,o]=await a(this.sendSaveTeletry({type:"users",action:"get",customerId:n})),s)return t(s.msg||s);e(o)})))),n()(this,"createRole",(async e=>new Promise((async(t,s)=>{let[o,n]=await a(this.sendSaveTeletry({type:"roles",action:"create",role:e}));if(o)return s(o);t(n)})))),n()(this,"createUser",(async(e,t)=>{let{user:s,firstName:o,lastName:n,password:i}=e;return console.log("PPPPPPPPPPPPPPPPPPPPp"),new Promise((async(e,r)=>{console.log("step1...");let[l,c]=await a(this.sendSaveTeletry({type:"users",action:"create",user:s,firstName:o,lastName:n,password:i},t));if(l)return console.log("REJECTED========"),console.log(l),r(l);if(t){if(console.log("NEVER WAITING"),[l,c]=await a(this.checkSuccessfulCreateUser(s,i)),l)return r(l);e(c)}else{console.log("result from creating user");let t=JSON.parse(JSON.stringify(c));if(console.log(c),0===Object.keys(c).length){if([l,c]=await a(this.login({username:s,password:i})),l)return r("Registration failed. Please try submitting the form again");e({})}else e(t)}}))})),n()(this,"checkSuccessfulCreateUser",(async(e,t)=>new Promise((async(s,o)=>{let n=(new Date).getTime();console.log("starting for sure...");const i=async()=>{console.log("here.....");let r=c({length:20,type:"url-safe"});return this.once(r,i),new Promise((async(l,c)=>{let[h,u]=await a(this.login({username:e,password:t}));if(h){console.log(h.data);let t=(new Date).getTime(),s=t-n;s<=1e4?this.emit(r):(this.removeListener(r,i),o(`Error creating account. Probably ${e} already exists`),c("Timed out"))}if(void 0!==u)return console.log(u),this.removeListener(r,i),l(u.data),s(u.data);{let e=(new Date).getTime(),t=e-n;t<=1e4?this.emit(r):(this.removeListener(r,i),o("Error creating account. Probably ${user} already exists"),c("Timed out"))}}))};await a(i())})))),n()(this,"deleteUser",(async(e,t=!1)=>new Promise((async(s,o)=>{console.log("STARGINT TO DELETE");let[n,i]=await a(this.sendSaveTeletry({type:"users",action:"delete",user:e,fromProfile:t}));if(n)return console.log("REJECTED========"),console.log(n),o(n);let r=JSON.parse(JSON.stringify(i));console.log(i),s(r)})))),n()(this,"getActivationLink",(async(e,t)=>new Promise((async(s,o)=>{let n=`${this.settings.TBURL}/user/${e}/activationLink`,[i,l]=await a(r.get(`${this.settings.JSONPROXY}?path=${n}`,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+t}}));if(i)return o(i);s(l.data)})))),n()(this,"createProject",(async(e,t,s)=>new Promise((async(t,s)=>{let[o,n]=await a(this.sendSaveTeletry({type:"projects",action:"create",project:e}));if(console.log("adhkjashdkhasdk"),o)return s(o);console.log("RETURNED..."),console.log(n),t(n)})))),n()(this,"deleteRole",(async(e,t)=>new Promise((async(s,o)=>{let[n,i]=await a(this.sendSaveTeletry({type:"roles",action:"delete",role:e,roleId:t}));if(n)return o(n);s(i)})))),n()(this,"deleteProject",(async e=>new Promise((async(t,s)=>{let[o,n]=await a(this.sendSaveTeletry({type:"projects",action:"delete",project:e}));if(o)return s(o);t(n)})))),n()(this,"createApplication",(async(e,t)=>{let{application:s,description:o,icon:n,link:i}=e;return new Promise((async(e,r)=>{let[l,c]=await a(this.sendSaveTeletry({type:"applications",action:t,application:s,description:o,icon:n,link:i}));if(l)return r(l);e(c)}))})),n()(this,"fetchApplications",(async()=>new Promise((async(e,t)=>{let[s,o]=await a(this.sendSaveTeletry({type:"applications",action:"get"}));if(s)return t(s);e(o)})))),n()(this,"deleteApplication",(async e=>new Promise((async(t,s)=>{let[o,n]=await a(this.sendSaveTeletry({type:"applications",action:"delete",application:e}));if(o)return s(o);t(n)})))),n()(this,"readUserData",(async()=>new Promise((async(e,t)=>{let s=`${this.settings.TBURL}/auth/user`,[o,n]=await a(r.get(s,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));return o?t(o):e(n.data)})))),n()(this,"readSingleUserData",(async e=>new Promise((async(t,s)=>{this.settings.TBURL;let[o,n]=await a(this.sendSaveTeletry({type:"users",action:"getSingle",user:e}));return o?s(o):t(n)})))),n()(this,"saveUserData",(async e=>new Promise((async(t,s)=>{let o=`${this.settings.TBURL}/user?sendActivationMail=false`,[n,i]=await a(r.post(o,e,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));return n?s(n):t(i.data)})))),n()(this,"changePassword",(async e=>new Promise((async(t,s)=>{let o=`${this.settings.TBURL}/auth/changePassword`,[n,i]=await a(r.post(o,e,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));if(n){let e=n.response;return n=JSON.parse(JSON.stringify(n)),n.response=e,s(n)}return t(i.data)})))),n()(this,"sendSaveTeletry",(async(e,t=!1)=>(e.userId||(e.userId=this.userId),e.jwt_token||this.jwt_token&&(e.jwt_token=this.jwt_token),e.rqId||(e.rqId=c({length:20,type:"url-safe"})),console.log("step2"),console.log({data:e}),new Promise((async(s,o)=>{let n=this.settings.PUBLIC_DEVICE_ACCESS_TOKEN;console.log(this.settings);let i=this.settings.CORS_PROXY,l=`${this.settings.TBURL}/v1/${n}/telemetry`;console.log(e);let[h,u]=await a(r.post(`${i}/${l}`,e,{headers:{"Content-Type":"application/json"}}));if(console.log("ERRED......"),console.log(h),console.log(u),h)return o(h);if(t)return console.log("NO WAITING.."),s(!0);let d=e.rqId,g=(new Date).getTime();const p=async()=>new Promise((async(e,t)=>{let[n,i]=await a(this.readUserData()),r=c({length:20,type:"url-safe"});if(this.once(r,p),n)console.log(n.status),console.log(n.response.data.status),console.log(n.data),console.log(n),this.removeListener(r,p),401===n.response.data.status?(console.log("---------160"),e({}),s({})):(console.log("---------1601"),e(!1),o(n));else if(void 0===i.additionalInfo)o("Unknown error occured"),e(!1);else{let t=i.additionalInfo.responses;if(t&&t[d]){console.log("---------167");let n=t[d];return console.log(n),n.msg.error?(this.removeListener(r,p),e(!1),o(n.msg.error)):(console.log("returned...."),console.log(n.msg),s(n.msg),e(!0),console.log("after resolve....."),this.removeListener(r,p),s(n.msg))}{let t=(new Date).getTime(),s=t-g;s<=12e4?(console.log(s,d),this.emit(r)):(this.removeListener(r,p),o("timed out"),e(!1))}}}));await a(p())})))))}openLink(e,t=!1){window.open(e,t)}}const d=new u;t["default"]=d},5:function(e,t){},6:function(e,t){},7:function(e,t){},7687:function(e,t,s){e.exports=s.p+"img/cysmedinfo.d33fe8a7.png"},8:function(e,t){},9:function(e,t){},e350:function(e,t,s){"use strict";s.r(t);class o{constructor(){this.events={}}on(e,t){return"object"!==typeof this.events[e]&&(this.events[e]=[]),this.events[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){if("object"===typeof this.events[e]){const s=this.events[e].indexOf(t);s>-1&&this.events[e].splice(s,1)}}emit(e,...t){"object"===typeof this.events[e]&&this.events[e].forEach((e=>e.apply(this,t)))}once(e,t){const s=this.on(e,((...e)=>{s(),t.apply(this,e)}))}}t["default"]=o},eea6:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"flex flex-center"},[o("img",{attrs:{alt:"Quasar logo",src:s("7687")}})])},n=[],i=(s("ddb0"),s("cf57"),s("310f"));const a=s("40cd").default,r=s("1712").to;var l={name:"PageIndex",components:{loginForm:i["a"]},data(){return{checkedLoggedIn:!1,loggedIn:!1}},async created(){a.setVue(this),a.showLoading();let[e,t]=await r(a.isLoggedIn());a.hideLoading(),this.checkedLoggedIn=!0},methods:{}},c=l,h=s("2877"),u=s("9989"),d=s("eebe"),g=s.n(d),p=Object(h["a"])(c,o,n,!1,null,null,null);t["default"]=p.exports;g()(p,"components",{QPage:u["a"]})},ff00:function(e){e.exports=JSON.parse('{"TB_URL":"http://localhost:8800/api"}')}}]);