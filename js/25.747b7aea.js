(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{b85c:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[e.loadingSomethingBigger?i("q-linear-progress",{attrs:{indeterminate:"",color:"negative"}}):e._e(),i("breadcrumbs",{attrs:{links:e.links}}),i("q-tabs",{staticClass:"text-black bg-secondary",attrs:{align:"left"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("q-tab",{attrs:{name:"users",icon:"people",label:"Members"}}),i("q-tab",{attrs:{name:"owner",icon:"supervisor_account",label:"Owner"}}),i("q-tab",{attrs:{name:"transfer",icon:"change_circle",label:"Transfer"}})],1),i("q-tab-panels",{staticClass:"q-ma-none full-width q-pa-none",attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("q-tab-panel",{staticClass:"q-pa-none q-ma-none",attrs:{name:"users"}},[i("facilityMembers",{attrs:{main:e.localmain,immediateMain:e.immediateMain}})],1),i("q-tab-panel",{staticClass:"q-pa-none q-ma-none",attrs:{name:"owner"}},[i("facilityOwner",{attrs:{main:e.localmain,immediateMain:e.immediateMain}})],1),i("q-tab-panel",{staticClass:"q-pa-none q-ma-none flex flex-center full-height",attrs:{name:"transfer"}},[i("q-page",{staticClass:"full-height full-width"},[i("transferFacility",{attrs:{main:e.localmain,immediateMain:e.immediateMain}})],1)],1)],1)],1)},s=[],n=(i("5319"),i("ddb0"),i("2cbd")),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"padding bg-grey-1"},[e.rightSideBar?i("rightSideBar",{attrs:{main:e.localmain,objType:"facilityMember"}}):e._e(),i("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:e.saveFacilityMemberDialog,callback:function(t){e.saveFacilityMemberDialog=t},expression:"saveFacilityMemberDialog"}},[i("q-card",{staticClass:"q-ma-md"},[i("q-card-section",{staticClass:"bg-secondary text-white text-center"},[i("div",{staticClass:"text-h6"},[e._v(e._s(e.extendedProjectName))]),i("div",{staticClass:"text-caption"},[e._v("Add User to Facility")])]),i("q-card-section",{staticClass:"bg-secondary text-white"},[i("saveFacilityMember",{attrs:{inside:"true",main:e.localmain,parentMain:e.main}})],1)],1)],1),i("div",{staticClass:"row q-gutter-lg q-ma-none q-pa-none"},[i("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"All Members","background-color":"members"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"person",total:e.numUsers,link:e.allMembersLink}}),i("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"Facility_Admin","background-color":"facility_admin"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"settings",total:e.numSysAdmins,link:e.orgAdminsLink}})],1),i("q-table",{staticClass:"col",attrs:{title:"Facility Members",dense:"",data:e.allOrgMembers,columns:e.columns,filter:e.filter,"row-key":"index"},on:{"row-click":e.selectUser},scopedSlots:e._u([{key:"top-right",fn:function(){return[i("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1),i("q-btn",{attrs:{flat:""}},[i("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(t){return e.listFacilityMembers()}}})],1),i("q-btn",{attrs:{flat:""}},[i("q-icon",{attrs:{color:"primary",name:"add_circle",side:""},on:{click:function(t){e.saveFacilityMemberDialog=!0}}})],1)]},proxy:!0}])})],1)},r=[],c=(i("cf57"),i("1b15")),o=i("46c6"),m=function(){var e=this,t=this,i=t.$createElement,a=t._self._c||i;return a("q-form",{ref:"saveFacilityMemberForm",staticClass:"q-gutter-md text-white",on:{submit:t.saveFacilityMember,reset:t.onReset}},[a("q-input",{attrs:{filled:"",type:"text",label:"Facility name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name for your facility"}],disable:!0},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.main.currentFacility.facilityName,callback:function(e){t.$set(t.main.currentFacility,"facilityName",e)},expression:"main.currentFacility.facilityName"}}),a("q-input",{attrs:{filled:"",type:"email",label:"email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter your email address"},function(t){return e.isValidEmail()||"Invalid email address"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("q-select",{attrs:{filled:"",options:t.authorities,label:"Authority","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please select authority"}]},model:{value:t.authority,callback:function(e){t.authority=e},expression:"authority"}}),a("div",[a("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"white",flat:""}})],1)],1)},d=[];const u=i("1712").to,h=i("20e6"),y=i("c2a1").default,g=i("f392").default;var f={name:"saveFacilityMember",components:{},props:["main","parentMain"],beforeDestroy(){this.main.loadingSomethingBigger=!1},async created(){y.setSettings({TBURL:h["TB_URL"]}),y.setSettings(h)},data(){return{facilityName:"",email:"",authority:"",authorities:g.FACILITY}},methods:{submit(){this.$refs.saveFacilityMemberForm.submit()},isValidEmail(){return y.isValidEmail(this.email)},async saveFacilityMember(){return y.setSettings({TBURL:h["TB_URL"]}),new Promise((async(e,t)=>{let i=this.facilityName,{email:a,authority:s}=this,n=this.main.currentFacility.facilityId;this.parentMain.loadingSomethingBigger=!0;let[l,r]=await u(y.saveFacilityMember({email:a,authority:s,facilityId:n}));if(this.parentMain.loadingSomethingBigger=!1,l){l=l.msg||l.message||l.error||l;try{l=JSON.parse(l)}catch(c){}if("object"===typeof l){let e=Object.keys(l);l=l[e[0]]}return this.$q.notify({type:"negative",message:l}),e(!1)}this.$q.notify({type:"positive",message:`${i} created.`}),this.main.saveFacilityMemberDialog=!1,this.main.listFacilityMembers()}))},onReset(){this.facilityName=null}}},b=f,p=i("2877"),w=i("0378"),F=i("27f9"),v=i("ddd8"),q=i("9c40"),M=i("eebe"),k=i.n(M),I=Object(p["a"])(b,m,d,!1,null,null,null),O=I.exports;k()(I,"components",{QForm:w["a"],QInput:F["a"],QSelect:v["a"],QBtn:q["a"]});var S=i("4d6d");const _=i("20e6"),C=i("c2a1").default,x=i("1712").to;var z={name:"facilityMembers",props:["main","immediateMain"],components:{loginForm:c["default"],cardTotal:o["a"],saveFacilityMember:O,rightSideBar:S["default"]},watch:{$route(e,t){this.setfilters(e.path)}},data(){return{extendedProjectName:"",facilityId:null,currentFacility:{},orgAdminsLink:"",allMembersLink:"",activeElement_:"",localmain:this,editted:!1,rightSideBar:!1,saveFacilityMemberDialog:!1,loaded:!0,links:[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"}],checkedLoggedIn:!1,loggedIn:!1,listHck:[{name:"Users",icon:"settings",link:"/#/system/users",Authority:"Manage Users and Facilities",description:"Manage Users and Facilities"}],filter:"",columnsHck:[],columns:[{name:"email",label:"Email",field:"email",sortable:!0},{name:"authority",label:"Authority",field:"authority",sortable:!0},{name:"createdAt",label:"Created",field:"createdAt",sortable:!0}],numUsers:0,numSysAdmins:0,numActiveUsers:0,numInactiveUsers:0,numEnabledUsers:0,numDisabledusers:0,allOrgMembers:[],selectedRow:{}}},async created(){C.setVue(this),C.setSettings({TBURL:_["TB_URL"]}),this.extendedProjectName=_["PROJECTEXTENDED"];let e,t,i,a=window.location.hash.replace(/^[#]*[\/]*/,""),s=a.split("/");s&&("facilities"===s[1]&&(e=s[3],t=s[4],i=s[5]||""),this.facilityId=e,this.section=t,this.subsection=i);let n="";n="user"===this.gettingFacilityFor?`/#/system/facilities/${this.main.selectedRow.userId}/${this.facilityId}/users`:`/#/system/facilities/${s[2]}/${s[3]}/users`,this.allMembersLink=n,this.orgAdminsLink=`${n}/facility_admin`,this.setfilters(),await this.facilityOwner(),await this.getCurrentFacility(),await this.listFacilityMembers()},methods:{async getCurrentFacility(){return new Promise((async(e,t)=>{let[i,a]=await x(C.getFacilityById(this.facilityId));if(i)return e(!1);this.currentFacility=a,e(!0)}))},async facilityOwner(){return new Promise((async(e,t)=>{let[i,a]=await x(C.getFacilityById(this.facilityId));if(i)return e(!1);this.currentFacilityOwner=a,console.log("OWNER",this.currentFacilityOwner),e(!0)}))},async listFacilityMembers(){await this.facilityOwner(),this.filters||(this.filters={}),this.filters.facilityId=this.facilityId,this.main.loadingSomethingBigger=!0;let[e,t]=await x(C.listFacilityMembers(this.filters));this.main.loadingSomethingBigger=!1,this.allOrgMembers=t||[],this.allOrgMembers=this.allOrgMembers.map((e=>{try{e.isOwner=e.userId===this.currentFacilityOwner.userId}catch(t){}return e})),this.numUsers=this.allOrgMembers.length,this.numSysAdmins=this.allOrgMembers.filter((e=>"FACILITY_ADMIN"===e.authority)).length,this.numActiveUsers=this.allOrgMembers.filter((e=>!0===e.isActive)).length,this.numInactiveUsers=this.allOrgMembers.filter((e=>!1===e.isActive)).length,this.numEnabledUsers=this.allOrgMembers.filter((e=>!0===e.enabled)).length,this.numDisabledusers=this.allOrgMembers.filter((e=>!1===e.enabled)).length},setfilters(e=!1){let t,i,a,s=(e||window.location.hash).replace(/^[#]*[\/]*/,""),n=s.split("/");switch(n&&("facilities"===n[1]&&(t=n[3],i=n[4],a=n[5]||""),this.facilityId=t,this.section=i,this.subsection=a),n[5]){case"facility_admin":this.filters={},this.activeElement_="facility_admin",this.filters={authority:"facility_admin"};break;default:this.filters={},this.activeElement_="members"}this.listFacilityMembers()},selectApplication(e){window.location.assign(e)},gotoPage(e){window.location.assign(e)},selectUser(e,t){console.log({row:t}),this.selectedUser=!0,this.selectedEmail=t.email,this.selectedId="object"===typeof t.id?t.id.id:t.id,this.selecteduserId=t.userId,this.selectedFirstName=t.firstName,this.selectedLastName=t.lastName,this.selectedFullName=`${this.selectedFirstName} ${this.selectedLastName}`,this.selectedIsOwner=t.isOwner,this.selectedFacilityUserId=t.facilityUserId,this.selectedRow=t,this.rightSideBar=!1,this.$nextTick((()=>this.rightSideBar=!0))}},computed:{activeElement(){return this.activeElement_},cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},U=z,B=i("9989"),E=i("6b1d"),L=i("24e8"),A=i("f09f"),N=i("a370"),T=i("eaac"),$=i("0016"),R=Object(p["a"])(U,l,r,!1,null,null,null),Q=R.exports;k()(R,"components",{QPage:B["a"],QLinearProgress:E["a"],QDialog:L["a"],QCard:A["a"],QCardSection:N["a"],QTable:T["a"],QInput:F["a"],QIcon:$["a"],QBtn:q["a"]});var P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"padding"},[i("div",{staticClass:"row q-gutter-lg q-ma-none q-pa-none"},[i("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:e.currentFacilityOwner.firstName+" "+e.currentFacilityOwner.lastName,"background-color":"bg-secondary","icon-name":"person",total:e.currentFacilityOwner.email,total1:e.currentFacilityOwner.organizationName,link:e.currentFacilityOwner.email,smallsize:!0}})],1)])},D=[];const j=i("20e6"),V=i("c2a1").default,Z=i("1712").to;var J={name:"facilityOwner",props:["main","immediateMain"],components:{cardTotal:o["a"]},watch:{$route(e,t){this.setfilters(e.path)}},data(){return{currentFacilityOwner:{}}},async created(){V.setVue(this),V.setSettings({TBURL:j["TB_URL"]});let e,t,i,a=window.location.hash.replace(/^[#]*[\/]*/,""),s=a.split("/");s&&("facilities"===s[1]&&(e=s[3],t=s[4],i=s[5]||""),this.facilityId=e,this.section=t,this.subsection=i),await this.facilityOwner()},methods:{async facilityOwner(){return new Promise((async(e,t)=>{let[i,a]=await Z(V.getFacilityById(this.facilityId));if(i)return e(!1);this.currentFacilityOwner=a,e(!0)}))}},computed:{activeElement(){return this.activeElement_},cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},H=J,Y=Object(p["a"])(H,P,D,!1,null,null,null),W=Y.exports,X=function(){var e=this,t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"bg-secondary"},[a("q-card",{staticClass:"bg-secondary"},[a("q-card-section",[a("q-form",{ref:"transferFacilityForm",staticClass:"q-gutter-md text-white bg-secondary",on:{submit:t.transferFacility,reset:t.onReset}},[a("q-input",{attrs:{filled:"",type:"email",label:t.translate("FIELDS.EMAIL"),hint:t.translate("FIELDS.EMAIL"),"lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter an email address"},function(t){return e.isValidEmail()||"Invalid email address"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("q-input",{attrs:{filled:"",type:"text",label:"Organization name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name for the organization"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.organizationName,callback:function(e){t.organizationName=e},expression:"organizationName"}}),a("div",[a("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"white",flat:""}})],1)],1)],1)],1)],1)},G=[],K=i("e11e"),ee=i.n(K),te=i("2699"),ie=i("a40a"),ae=i("4e2b6"),se=i("fbba"),ne=i("f60f");i("6cc5");const le=i("1712").to,re=i("20e6"),ce=i("c2a1").default,oe=i("ea76").default;delete ee.a.Icon.Default.prototype._getIconUrl,ee.a.Icon.Default.mergeOptions({iconRetinaUrl:i("584d"),iconUrl:i("6397"),shadowUrl:i("e2b9")});var me={name:"transferFacility",components:{LMap:te["a"],LTileLayer:ie["a"],LMarker:ae["a"],LIcon:se["a"],LPopup:ne["a"]},props:["main","immediateMain"],beforeDestroy(){this.main.loadingSomethingBigger=!1},async created(){ce.setSettings({TBURL:re["TB_URL"]}),ce.setSettings(re),this.centerString=this.center.join(",");window.location.hash.replace(/^[#]*[\/]*/,"")},data(){return{email:"",translate:oe.translate,mapDialog:!1,organizationName:"",location:"0,0",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:15,center:[-1.286389,36.817223],centerString:"",icon:ee.a.icon({iconUrl:"/images/marker-icon.png",iconSize:[32,37],iconAnchor:[16,37]}),staticAnchor:[16,37],customText:"Foobar",iconSize:64}},methods:{isValidEmail(){const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return e.test(this.email)||"Invalid email"},lmapReady(e){this.map=e,this.$refs.marker.mapObject.on("dragend",(e=>{let t=e.target._latlng;t=[t.lat,t.lng],this.center=t}))},submit(){this.$refs.transferFacilityForm.submit()},async transferFacility(){return ce.setSettings({TBURL:re["TB_URL"]}),new Promise((async(e,t)=>{let i={facilityId:this.immediateMain.facilityId,organizationName:this.organizationName,email:this.email};console.log(i),this.main.loadingSomethingBigger=!0;let[a,s]=await le(ce.transferFacility(i));if(this.main.loadingSomethingBigger=!1,a){a=a.msg||a.message||a.error||a;try{a=JSON.parse(a)}catch(n){}if("object"===typeof a){let e=Object.keys(a);a=a[e[0]]}return this.$q.notify({type:"negative",message:a}),e(!1)}this.$q.notify({type:"positive",message:`Transfered to ${this.organizationName}`}),this.main.transferFacilityDialog=!1,this.main.listOrganizationFacilities()}))},onReset(){this.organizationName=null}},computed:{dynamicSize(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor(){return[this.iconSize/2,1.15*this.iconSize]}},watch:{center:{handler(e){this.centerString=this.center.join(",")},deep:!0}}},de=me,ue=Object(p["a"])(de,X,G,!1,null,null,null),he=ue.exports;k()(ue,"components",{QCard:A["a"],QCardSection:N["a"],QForm:w["a"],QInput:F["a"],QBtn:q["a"]});var ye=i("22aa");i("20e6");const ge=i("c2a1").default,fe=i("1712").to;var be={name:"manageFacility",props:["main"],components:{facilityMembers:Q,facilityOwner:W,facilities:ye["default"],breadcrumbs:n["default"],transferFacility:he},async created(){let e,t,i=window.location.hash.replace(/^[#]*[\/]*/,""),a=i.match(/system\/(facilities)\/[0-9a-z-]+\/([0-9a-z-]+)[\/]*([a-zA-Z]+)/);a&&"facilities"===a[1]&&(e=a[2],t=a[3]),this.facilityId=e,t&&(this.tab=t);let[s,n]=await fe(ge.getFacilityById(this.facilityId));try{this.links[this.links.length-1].label=n.facilityName}catch(l){}},data(){return{tab:"users",immediateMain:this,localmain:this,links:[{label:"Settings",icon:"settings",to:"/system"},{label:"Facilities",icon:"house",to:"/"+window.location.hash.split("/").slice(1,4).join("/")},{label:"Selected",icon:"house",to:"/system/facilities"}],loadingSomethingBigger:!1}},methods:{setfilters(e){let t,i,a=(e||window.location.hash).replace(/^[#]*[\/]*/,""),s=a.match(/(facilities)\/([0-9a-z-]+)[\/]*([a-zA-Z]+)/);s&&"facilities"===s[1]&&(t=s[2],i=s[3]),i&&(this.tab=i)}},computed:{}},pe=be,we=i("429bb"),Fe=i("7460"),ve=i("adad"),qe=i("823b"),Me=Object(p["a"])(pe,a,s,!1,null,null,null);t["default"]=Me.exports;k()(Me,"components",{QPage:B["a"],QLinearProgress:E["a"],QTabs:we["a"],QTab:Fe["a"],QTabPanels:ve["a"],QTabPanel:qe["a"]})}}]);