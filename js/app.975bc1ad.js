(function(e){function t(t){for(var o,s,r=t[0],l=t[1],c=t[2],h=0,u=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},s={6:0},a={6:0},i=[];function r(e){return l.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"4286b399",2:"09fa8dd0",3:"2e766bc2",4:"bff87b8d",5:"6e0ef09c",7:"ffcf74bb",8:"cb460a18",9:"4236710c",10:"f82f273e",11:"bfe99532",12:"136b8f33",13:"1ce2df84",14:"5ea4a776"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={1:1,2:1,3:1,7:1,8:1,9:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var o="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"59d647e1",2:"22532e5b",3:"420acf80",4:"31d6cfe0",5:"31d6cfe0",7:"3991f2d7",8:"d51b795c",9:"fe5bea73",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],h=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(h===o||h===a))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],h=c.getAttribute("data-href");if(h===o||h===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete s[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){s[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,h=document.createElement("script");h.charset="utf-8",h.timeout=120,l.nc&&h.setAttribute("nonce",l.nc),h.src=r(e);var u=new Error;c=function(t){h.onerror=h.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,n[1](u)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:h})}),12e4);h.onerror=h.onload=c,document.head.appendChild(h)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=h;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},1:function(e,t){},10:function(e,t){},2:function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("a1e8");var o=n("2b0e"),s=n("1f91"),a=n("42d2"),i=n("b05d"),r=n("2a19"),l=n("436b"),c=n("f508"),h=n("b12a");o["a"].use(i["a"],{config:{},lang:s["a"],iconSet:a["a"],plugins:{Notify:r["a"],Dialog:l["a"],Loading:c["a"],AppFullscreen:h["a"]}});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],p={name:"App"},m=p,g=n("2877"),f=Object(g["a"])(m,u,d,!1,null,null,null),y=f.exports,w=n("2f62");o["a"].use(w["a"]);var v=function(){const e=new w["a"].Store({modules:{},strict:!1});return e},b=(n("ddb0"),n("8c4f"));const P=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"03b8")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,"8b24"))}]},{path:"/home",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,"eea6"))}],meta:{requiresAuth:!0}},{path:"/activate",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"03b8")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,"9256"))}]},{path:"/profile",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"996f"))}],meta:{requiresAuth:!0}},{path:"/system",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,"4ad2"))}],meta:{requiresAuth:!0}},{path:"/system/users",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"3120"))}],meta:{requiresAuth:!0}},{path:"/system/users/sys_admin",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"3120"))}],meta:{requiresAuth:!0}},{path:"/system/users/active",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"3120"))}],meta:{requiresAuth:!0}},{path:"/system/users/inactive",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"3120"))}],meta:{requiresAuth:!0}},{path:"/system/users/enabled",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"3120"))}],meta:{requiresAuth:!0}},{path:"/system/users/disabled",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"3120"))}],meta:{requiresAuth:!0}},{path:"/system/landing_page",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,"c70e"))}],meta:{requiresAuth:!0}},{path:"/system/organizations",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"36d2"))}],meta:{requiresAuth:!0}},{path:"/user/:id/organizations",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"ae0a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"36d2"))}],meta:{requiresAuth:!0}},{path:"/logout",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"03b8")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,"6e1b"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"e51e"))}];var T=P;const k=n("1712").to,j=n("40cd").default,S=n("ff00");j.setSettings({TBURL:S["TB_URL"]}),o["a"].use(b["a"]);var A=function(){const e=new b["a"]({scrollBehavior:()=>({x:0,y:0}),routes:T,mode:"hash",base:""});return e.beforeEach((async(e,t,n)=>{e.matched.some((async e=>{if(e.meta.requiresAuth){let[e,t]=await k(j.isLoggedIn());e&&n({path:"/"})}n()}))})),e},L=async function(){const e="function"===typeof v?await v({Vue:o["a"]}):v,t="function"===typeof A?await A({Vue:o["a"],store:e}):A;e.$router=t;const n={router:t,store:e,render:e=>e(y),el:"#q-app"};return{app:n,store:e,router:t}},I=n("bc3a"),C=n.n(I);o["a"].prototype.$axios=C.a;var U=n("4b46");const B="";async function $(){const{app:e,store:t,router:n}=await L();let s=!1;const a=e=>{s=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),r=[void 0,U["default"]];for(let c=0;!1===s&&c<r.length;c++)if("function"===typeof r[c])try{await r[c]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:B})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==s&&new o["a"](e)}$()},3:function(e,t){},"31cd":function(e,t,n){},4:function(e,t){},"40cd":function(e,t,n){"use strict";n.r(t);var o=n("9523"),s=n.n(o),a=(n("ddb0"),n("e01a"),n("cf57"));const i=n("1712").to,r=n("bc3a"),l=n("1232").default,c=n("4556"),h=n("e350").default;class u extends h{constructor(){super(),s()(this,"vueObj",null),s()(this,"setVue",(e=>{this.vueObj=e})),s()(this,"showLoading",((e={})=>{let{message:t,color:n}=e;t||(t="loading"),n||(n="white"),this.vueObj.$q.loading.show({spinner:a["a"],spinnerColor:n,message:t})})),s()(this,"hideLoading",(()=>{this.vueObj.$q.loading.hide()})),s()(this,"settings",{}),s()(this,"setSettings",(e=>{for(let t in e){let n=e[t];this.settings[t]=n}})),s()(this,"setToken",(e=>{let t=e.token,n=e.refreshToken;window.localStorage.setItem("cysmedTokenGSAC",t),window.localStorage.setItem("cysmedRefreshTokenGSAC",n),this.jwt_token=t})),s()(this,"createUser",(async(e,t)=>{let{activationEmail:n,showActivationLink:o}=t;return new Promise((async(t,o)=>{let s=`${this.settings.TBURL}/user?sendActivationMail=${n||!1}`,a=window.location.protocol+"//"+window.location.host+"/#/activate";e.activationPage=`${a}`;let[l,c]=await i(r.post(s,e,{headers:{"Content-Type":"application/json"}}));if(l)return o(l.response.data);let{userId:h}=c.data;return t(h)}))})),s()(this,"sendActivationEmail",(async(e,t)=>{let{userId:n,activationEmail:o,showActivationLink:s}=e;return new Promise((async(t,o)=>{let s=`${this.settings.TBURL}/user/activationEmail`,a=window.location.protocol+"//"+window.location.host+"/#/activate";e={},e.activationPage=`${a}`,e.userId=n;let l=localStorage.getItem("cysmedTokenGSAC");this.jwt_token=l;let[c,h]=await i(r.post(s,e,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));return c?o(c.response.data):t(h.data)}))})),s()(this,"getActivationCode",(async e=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/noauth/activationCode?userId=${e}`,[s,a]=await i(r.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));if(s)return n(s.response.data.error||s);t(a.data)})))),s()(this,"authGuard",(async e=>new Promise((async(e,t)=>{let[n,o]=await i(this.isLoggedIn());!n&&o||window.location.assign("/"),e()})))),s()(this,"activateAndCreatePassword",(async e=>{let{activateToken:t,password:n}=e;return new Promise((async(o,s)=>{let a=`${this.settings.TBURL}/noauth/activate?activateToken=${t}`,[l,c]=await i(r.get(a));if(l)return s(l.response.data);let h=c.data.passwordToken;return e={passwordToken:h,password:n},a=`${this.settings.TBURL}/noauth/resetPassword`,[l,c]=await i(r.post(a,e,{headers:{"Content-Type":"application/json"}})),l?s(l.response.data):o(c.data)}))})),s()(this,"login",(async e=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/auth/login`,[s,a]=await i(r.post(o,e,{headers:{"Content-Type":"application/json"}}));return s?n(s.response.data):(this.setToken(a.data),t(a.data))})))),s()(this,"logout",(async e=>{let t=localStorage.getItem("cysmedTokenGSAC"),n=`${this.settings.TBURL}/auth/logout`,[o,s]=await i(r.get(n,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+(e||t)}}));e||(window.localStorage.removeItem("cysmedTokenGSAC"),window.localStorage.removeItem("cysmedRefreshTokenGSAC"),this.jwt_token=null,this.authGuard())})),s()(this,"currentToken",(()=>localStorage.getItem("cysmedTokenGSAC"))),s()(this,"getToken",(async(e,t)=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/auth/token`,[s,a]=await i(r.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e}}));return s?n(s):(this.setToken(a.data),t(a.data))})))),s()(this,"loginasUser",(async e=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/user/token?userId=${e}`,[s,a]=await i(r.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));if(s){s=s.response.data||s.response||s;try{s=JSON.parse(s)}catch(l){}return n(s)}return this.setToken(a.data),t(a.data)})))),s()(this,"isLoggedIn",(async()=>new Promise((async(e,t)=>{let n=localStorage.getItem("cysmedTokenGSAC");if(!n){try{this.vueObj.isLoggedIn=!1}catch(r){}return t("missing token")}let o=l(n);console.log(o),this.userId=o.userId,this.jwt_token=n;let s=o.exp;if(!s)return t("missing token expiry");let a=localStorage.getItem("cysmedRefreshTokenGSAC");s=parseInt(s),(new Date).getTime();{let[e,o]=await i(this.getToken(n,a));if(e)return t("could not find token");this.setToken(o),n=o.token}return console.log(n),e(n)})))),s()(this,"readUserData",(async()=>new Promise((async(e,t)=>{let n=localStorage.getItem("cysmedTokenGSAC");this.jwt_token=n;let o=`${this.settings.TBURL}/user/me`,[s,a]=await i(r.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));return s?t(s):e(a.data)})))),s()(this,"listAllUsers",(async(e={})=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/users?filters=${JSON.stringify(e)}`,[s,a]=await i(r.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));return s?(console.log(s.response.data.error),console.log(this.jwt_token),n(s.response.data.error||s.response.data.msg||s.response.data.message||s)):t(a.data)})))),s()(this,"saveUserData",(async e=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/user`,[s,a]=await i(r.patch(o,e,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));return s?n(s.response.data):t(a.data)})))),s()(this,"deleteUser",(async e=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/user?userId=${e}`,[s,a]=await i(r.delete(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));return s?n(s.response.data.error):t(a.data)})))),s()(this,"whoAmILocally",(async()=>new Promise((async(e,t)=>{let n=localStorage.getItem("cysmedTokenGSAC");if(!n)return this.vueObj.isLoggedIn=!1,t("missing token");let o=l(n);e(o)})))),s()(this,"whoAmI",(async()=>new Promise((async(e,t)=>{let[n,o]=await i(this.readUserData());if(n)return t(n);e(o)})))),s()(this,"getDefaultPageAfterLogin",(()=>{let e=window.localStorage.getItem("getDefaultPageAfterLogin")||"/#/home";return e=window.location.protocol+"//"+window.location.host+e,e})),s()(this,"setDefaultPageAfterLogin",(e=>{window.localStorage.setItem("getDefaultPageAfterLogin",e)})),s()(this,"getLogins",(async(e={})=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/auth/logins?filters=${JSON.stringify(e)}`,[s,a]=await i(r.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));if(s)return n(s.response.data.error||s.response.data.msg||s.response.data.message||s);JSON.parse(JSON.stringify(a.data));return t(a.data)})))),s()(this,"fetchRoles",(async()=>new Promise((async(e,t)=>{let[n,o]=await i(this.sendSaveTeletry({type:"roles",action:"get"}));if(n)return t(n);e(o)})))),s()(this,"fetchUserRoles",(async e=>new Promise((async(t,n)=>{let[o,s]=await i(this.sendSaveTeletry({type:"roles",action:"userroles",user:e}));if(o)return n(o);console.log(s),t(s)})))),s()(this,"fetctUserProjects",(async e=>new Promise((async(t,n)=>{let[o,s]=await i(this.sendSaveTeletry({type:"projects",action:"userprojects",user:e}));if(o)return n(o);console.log(s),t(s)})))),s()(this,"addUserRole",(async(e,t)=>new Promise((async(n,o)=>{let[s,a]=await i(this.sendSaveTeletry({type:"roles",action:"adduserrole",user:e,roleId:t},!0));if(s)return o(s);console.log(a),n(a)})))),s()(this,"removeUserRole",(async(e,t)=>new Promise((async(n,o)=>{let[s,a]=await i(this.sendSaveTeletry({type:"roles",action:"removeuserrole",user:e,roleId:t}));if(s)return o(s);console.log(a),n(a)})))),s()(this,"fetchProjects",(async()=>new Promise((async(e,t)=>{let[n,o]=await i(this.sendSaveTeletry({type:"projects",action:"get"}));if(n)return t(n);e(o)})))),s()(this,"fetchUsers",(async()=>new Promise((async(e,t)=>{let[n,o]=await i(this.whoAmI());if(n)return t(n);let s,a=o.authority;if("TENANT_ADMIN"===a){let e=`${this.settings.TBURL}/tenant/customers?customerTitle=GS Publications`;if([n,o]=await i(r.get(e,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}})),n)return t(n);s=o.data.id.id}else console.log("i am a customer...."),console.log(o),s=o.customerId.id;if(console.log("CUSTOMER ID",s),[n,o]=await i(this.sendSaveTeletry({type:"users",action:"get",customerId:s})),n)return t(n.msg||n);e(o)})))),s()(this,"createRole",(async e=>new Promise((async(t,n)=>{let[o,s]=await i(this.sendSaveTeletry({type:"roles",action:"create",role:e}));if(o)return n(o);t(s)})))),s()(this,"checkSuccessfulCreateUser",(async(e,t)=>new Promise((async(n,o)=>{let s=(new Date).getTime();console.log("starting for sure...");const a=async()=>{console.log("here.....");let r=c({length:20,type:"url-safe"});return this.once(r,a),new Promise((async(l,c)=>{let[h,u]=await i(this.login({username:e,password:t}));if(h){let t=(new Date).getTime(),n=t-s;n<=1e4?this.emit(r):(this.removeListener(r,a),o(`Error creating account. Probably ${e} already exists`),c("Timed out"))}if(void 0!==u)return console.log(u),this.removeListener(r,a),l(u.data),n(u.data);{let e=(new Date).getTime(),t=e-s;t<=1e4?this.emit(r):(this.removeListener(r,a),o("Error creating account. Probably ${user} already exists"),c("Timed out"))}}))};await i(a())})))),s()(this,"getActivationLink",(async(e,t)=>new Promise((async(n,o)=>{let s=`${this.settings.TBURL}/user/${e}/activationLink`,[a,l]=await i(r.get(`${this.settings.JSONPROXY}?path=${s}`,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+t}}));if(a)return o(a);n(l.data)})))),s()(this,"createProject",(async(e,t,n)=>new Promise((async(t,n)=>{let[o,s]=await i(this.sendSaveTeletry({type:"projects",action:"create",project:e}));if(console.log("adhkjashdkhasdk"),o)return n(o);console.log("RETURNED..."),console.log(s),t(s)})))),s()(this,"deleteRole",(async(e,t)=>new Promise((async(n,o)=>{let[s,a]=await i(this.sendSaveTeletry({type:"roles",action:"delete",role:e,roleId:t}));if(s)return o(s);n(a)})))),s()(this,"deleteProject",(async e=>new Promise((async(t,n)=>{let[o,s]=await i(this.sendSaveTeletry({type:"projects",action:"delete",project:e}));if(o)return n(o);t(s)})))),s()(this,"createApplication",(async(e,t)=>{let{application:n,description:o,icon:s,link:a}=e;return new Promise((async(e,r)=>{let[l,c]=await i(this.sendSaveTeletry({type:"applications",action:t,application:n,description:o,icon:s,link:a}));if(l)return r(l);e(c)}))})),s()(this,"fetchApplications",(async()=>new Promise((async(e,t)=>{let[n,o]=await i(this.sendSaveTeletry({type:"applications",action:"get"}));if(n)return t(n);e(o)})))),s()(this,"deleteApplication",(async e=>new Promise((async(t,n)=>{let[o,s]=await i(this.sendSaveTeletry({type:"applications",action:"delete",application:e}));if(o)return n(o);t(s)})))),s()(this,"readSingleUserData",(async e=>new Promise((async(t,n)=>{this.settings.TBURL;let[o,s]=await i(this.sendSaveTeletry({type:"users",action:"getSingle",user:e}));return o?n(o):t(s)})))),s()(this,"changePassword",(async e=>new Promise((async(t,n)=>{let o=`${this.settings.TBURL}/auth/changePassword`,[s,a]=await i(r.post(o,e,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+this.jwt_token}}));if(s){let e=s.response;return s=JSON.parse(JSON.stringify(s)),s.response=e,console.log(s),n(s)}return t(a.data)})))),s()(this,"sendSaveTeletry",(async(e,t=!1)=>(e.userId||(e.userId=this.userId),e.jwt_token||this.jwt_token&&(e.jwt_token=this.jwt_token),e.rqId||(e.rqId=c({length:20,type:"url-safe"})),console.log("step2"),console.log({data:e}),new Promise((async(n,o)=>{let s=this.settings.PUBLIC_DEVICE_ACCESS_TOKEN;console.log(this.settings);let a=this.settings.CORS_PROXY,l=`${this.settings.TBURL}/v1/${s}/telemetry`;console.log(e);let[h,u]=await i(r.post(`${a}/${l}`,e,{headers:{"Content-Type":"application/json"}}));if(console.log("ERRED......"),console.log(h),console.log(u),h)return o(h);if(t)return console.log("NO WAITING.."),n(!0);let d=e.rqId,p=(new Date).getTime();const m=async()=>new Promise((async(e,t)=>{let[s,a]=await i(this.readUserData()),r=c({length:20,type:"url-safe"});if(this.once(r,m),s)console.log(s.status),console.log(s.response.data.status),console.log(s.data),console.log(s),this.removeListener(r,m),401===s.response.data.status?(console.log("---------160"),e({}),n({})):(console.log("---------1601"),e(!1),o(s));else if(void 0===a.additionalInfo)o("Unknown error occured"),e(!1);else{let t=a.additionalInfo.responses;if(t&&t[d]){console.log("---------167");let s=t[d];return console.log(s),s.msg.error?(this.removeListener(r,m),e(!1),o(s.msg.error)):(console.log("returned...."),console.log(s.msg),n(s.msg),e(!0),console.log("after resolve....."),this.removeListener(r,m),n(s.msg))}{let t=(new Date).getTime(),n=t-p;n<=12e4?(console.log(n,d),this.emit(r)):(this.removeListener(r,m),o("timed out"),e(!1))}}}));await i(m())})))))}openLink(e,t=!1){window.open(e,t)}}const d=new u;t["default"]=d},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},e350:function(e,t,n){"use strict";n.r(t);class o{constructor(){this.events={}}on(e,t){return"object"!==typeof this.events[e]&&(this.events[e]=[]),this.events[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){if("object"===typeof this.events[e]){const n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}}emit(e,...t){"object"===typeof this.events[e]&&this.events[e].forEach((e=>e.apply(this,t)))}once(e,t){const n=this.on(e,((...e)=>{n(),t.apply(this,e)}))}}t["default"]=o},ff00:function(e){e.exports=JSON.parse('{"TB_URL":"http://localhost:8800/api"}')}});