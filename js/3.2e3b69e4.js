(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{3120:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"padding bg-grey-1"},[e.loadingSomethingBigger?a("q-linear-progress",{attrs:{indeterminate:"",color:"negative"}}):e._e(),e.rightSideBar?a("rightSideBar",{attrs:{main:e.main}}):e._e(),a("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:e.createUserDialog,callback:function(t){e.createUserDialog=t},expression:"createUserDialog"}},[a("q-card",{staticClass:"q-ma-md"},[a("q-card-section",{staticClass:"bg-secondary text-white text-center"},[a("div",{staticClass:"text-h6"},[e._v("CysmedHub")])]),a("q-card-section",{staticClass:"bg-secondary text-white"},[a("registrationForm",{attrs:{inside:"true"}})],1)],1)],1),a("breadcrumbs",{attrs:{links:e.links}}),a("div",{staticClass:"row q-gutter-lg q-ma-none q-pa-none"},[a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"ALL USERS","background-color":"users"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"person",total:e.numUsers,link:"/#/system/users"}}),a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"SYS_ADMIN","background-color":"sys_admin"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"settings",total:e.numSysAdmins,link:"/#/system/users/sys_admin"}}),a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"ACTIVE","background-color":"active"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"do_not_disturb_off",total:e.numActiveUsers,link:"/#/system/users/active"}}),a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"INACTIVE","background-color":"inactive"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"do_not_disturb_on",total:e.numInactiveUsers,link:"/#/system/users/inactive"}}),a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"ENABLED","background-color":"enabled"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"people",total:e.numEnabledUsers,link:"/#/system/users/enabled"}}),a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"DISABLED","background-color":"disabled"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"person_off",total:e.numDisabledusers,link:"/#/system/users/disabled"}})],1),a("q-table",{staticClass:"col",attrs:{title:"Users",dense:"",data:e.allUsers,columns:e.columns,filter:e.filter,"row-key":"index"},on:{"row-click":e.selectUser},scopedSlots:e._u([{key:"top-right",fn:function(){return[a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[a("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1),a("q-btn",{attrs:{flat:""}},[a("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(t){return e.listUsers()}}})],1),a("q-btn",{attrs:{flat:""}},[a("q-icon",{attrs:{color:"primary",name:"add_circle",side:""},on:{click:function(t){e.createUserDialog=!0}}})],1)]},proxy:!0}])})],1)},i=[],n=(a("ddb0"),a("5319"),a("cf57"),a("310f")),l=a("2cbd"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"bg-white",attrs:{flat:""}},[a("q-card-section",{staticClass:"flex flex-center"},[a("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"cursor-pointer q-hoverable",class:e.backgroundColor,staticStyle:{width:"80vw"},on:{click:function(t){return e.gotoPage(e.localLink)}}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 flex flex-center"},[a("q-icon",{staticStyle:{"font-size":"3em"},attrs:{name:e.iconName,color:"white"}})],1),a("div",{staticClass:"col"},[a("p",{staticClass:"text-bold"},[e._v(e._s(e.title))]),a("h5",{ref:"number",staticClass:"q-ma-none"},[e._v(e._s(e.total))])])])])],1)],1)],1)},o=[],c={props:["title","total","backgroundColor","iconName","link"],mounted(){this.link?this.localLink=this.link:this.localLink=window.location.href},created(){this.link?this.localLink=this.link:this.localLink=window.location.href},computed:{},watch:{},data(){return{localLink:window.location.href,options:{separator:"."}}},methods:{gotoPage(e){console.log(e),window.location.assign(e)}}},d=c,m=(a("e0ea"),a("2877")),u=a("f09f"),g=a("a370"),h=a("0016"),p=a("714f"),b=a("eebe"),y=a.n(b),f=Object(m["a"])(d,r,o,!1,null,"2f5d3873",null),v=f.exports;y()(f,"components",{QCard:u["a"],QCardSection:g["a"],QIcon:h["a"]}),y()(f,"directives",{Ripple:p["a"]});var w=a("5757"),q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-drawer",{staticClass:"bg-primary",attrs:{bordered:"",side:"right",width:e.rightSideBarSize,overlay:"",breakpoint:2,behavior:"desktop"},model:{value:e.rightSidebarOpen,callback:function(t){e.rightSidebarOpen=t},expression:"rightSidebarOpen"}},[e.main.loadingSomething?a("q-linear-progress",{attrs:{indeterminate:"",color:"negative"}}):e._e(),a("userSideBar",{attrs:{main:e.main}})],1)},S=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-toolbar-title",{staticClass:"q-mt-md q-ml-md"},[a("span",{staticClass:"text-weight-bold q-pt-lg"},[e._v(e._s(e.main.selectedEmail))]),a("br"),a("span",{staticClass:"text-caption",staticStyle:{"font-size":"0.8em"}},[e._v("User details")])]),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:e.closeSelf}})],1),a("q-page-sticky",{staticClass:"q-gutter-xs q-ma-sm",staticStyle:{"z-index":"3"},attrs:{position:"top-right",offset:[18,0]}},[e.openedEditing?e._e():a("q-btn",{staticClass:"q-ma-sm",attrs:{fab:"",icon:"edit",color:"red"},on:{click:function(t){e.openedEditing=!0}}}),e.openedEditing&&!e.main.editted?a("q-btn",{staticClass:"text-black q-mr-sm",attrs:{fab:"",icon:"done",color:"transparent",disable:!0}}):e._e(),e.openedEditing&&e.main.editted?a("q-btn",{staticClass:"q-mr-sm",attrs:{fab:"",icon:"done",color:"red"},on:{click:e.submitForm}}):e._e(),e.openedEditing?a("q-btn",{attrs:{fab:"",icon:"close",color:"red"},on:{click:e.resetForm}}):e._e()],1),a("q-tabs",{staticClass:"text-black",attrs:{align:"left"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"details",label:"Details"}}),a("q-tab",{attrs:{name:"auditLogs",label:"Audit Logs"}}),a("q-tab",{attrs:{name:"organizations",label:"Organizations"}}),a("q-tab",{attrs:{name:"facilities",label:"Facilities"}}),a("q-tab",{attrs:{name:"registrations",label:"Registrations"}})],1),a("q-separator"),a("div",[a("q-tab-panels",{staticClass:"q-ma-none  q-pa-none",attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"details"}},[a("userDetails",{attrs:{main:e.main,openedEditing:e.openedEditing,submit:e.submit,reset:e.reset}})],1),a("q-tab-panel",{attrs:{name:"auditLogs"}},[a("auditLogs",{attrs:{main:e.main,openedEditing:e.openedEditing,submit:e.submit,reset:e.reset}})],1),a("q-tab-panel",{attrs:{name:"organizations"}},[e._v(" ...LOGIN... ")]),a("q-tab-panel",{attrs:{name:"facilities"}},[e._v(" ...LOGIN... ")]),a("q-tab-panel",{attrs:{name:"registrations"}},[e._v(" ...LOGIN... ")])],1)],1)],1)},T=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.openedEditing?e._e():a("div",{staticClass:"q-pa-sm"},[a("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Display activation link"},on:{click:e.displayActivationLink}}),a("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Resend activation"},on:{click:e.resendActivationEmail}}),a("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Login as User"},on:{click:e.loginAsUser}}),a("q-btn",{staticClass:"bg-primary q-mr-md q-mb-md",attrs:{"no-caps":"",label:"Delete User"},on:{click:e.deleteUser}})],1),a("q-form",{ref:"userRegistrationForm",staticClass:"q-gutter-md text-white",on:{submit:e.editUser}},[a("q-input",{attrs:{filled:"",type:"text",label:"first name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name"}],disable:!e.openedEditing},model:{value:e.selectedRow.firstName,callback:function(t){e.$set(e.selectedRow,"firstName",t)},expression:"selectedRow.firstName"}}),a("q-input",{attrs:{filled:"",type:"text",label:"last name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name"}],disable:!e.openedEditing},model:{value:e.selectedRow.lastName,callback:function(t){e.$set(e.selectedRow,"lastName",t)},expression:"selectedRow.lastName"}}),a("q-select",{attrs:{filled:"",options:e.authorities,label:"Authority","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please select an authority"}],disable:!e.openedEditing,clearable:!1},model:{value:e.selectedRow.authority,callback:function(t){e.$set(e.selectedRow,"authority",t)},expression:"selectedRow.authority"}}),a("q-select",{attrs:{filled:"",options:e.genders,label:"Gender","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please select a gender"}],disable:!e.openedEditing},model:{value:e.selectedRow.gender,callback:function(t){e.$set(e.selectedRow,"gender",t)},expression:"selectedRow.gender"}}),a("q-input",{attrs:{filled:"",mask:"date",label:"Date of Birth(YYYY/MM/DD)",rules:["date",function(e){return e&&e.length>0||"Please enter a dob"}],disable:!e.openedEditing},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{model:{value:e.selectedRow.dateOfBirth,callback:function(t){e.$set(e.selectedRow,"dateOfBirth",t)},expression:"selectedRow.dateOfBirth"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.selectedRow.dateOfBirth,callback:function(t){e.$set(e.selectedRow,"dateOfBirth",t)},expression:"selectedRow.dateOfBirth"}}),a("q-checkbox",{staticClass:"col text-black",attrs:{label:"Enabled",disable:!e.openedEditing},model:{value:e.selectedRow.enabled,callback:function(t){e.$set(e.selectedRow,"enabled",t)},expression:"selectedRow.enabled"}}),a("activationLink",{attrs:{alert:e.alert,alertUserId:e.alertUserId,main:e.main}})],1)],1)},C=[],x=a("7c83");a("bc3a");const _=a("1712").to,L=a("ff00"),M=a("40cd").default,U=a("6daa").default;var D={name:"userDetails",props:["main","openedEditing","submit","reset"],components:{activationLink:x["a"]},async created(){M.setSettings({TBURL:L["TB_URL"]}),M.setVue(this),this.selectedRow=JSON.parse(JSON.stringify(this.main.selectedRow));let[e,t]=await _(M.whoAmILocally());t&&(this.whoami=t)},data(){return{selectedRow:{},whoami:{},userChanged:!1,alert:!1,alertUserId:"",genders:["Male","Female"],authorities:["SYS_ADMIN","SYS_USER"]}},methods:{async editUser(){return new Promise((async(e,t)=>{let a=this.selectedRow;this.main.loadingSomething=!0;let[s,i]=await _(M.saveUserData(a));if(this.main.loadingSomething=!1,s)return this.$q.notify({type:"negative",message:s.msg||s}),e(!1);this.$q.notify({type:"positive",message:`Saved changes for ${this.selectedRow.email}`}),await this.main.listUsers(),e(!0)}))},async deleteUser(e){return new Promise((async(e,t)=>{if(this.whoami.userId===this.main.selectedRow.userId)return this.$q.notify({type:"negative",message:"You can't delete you own account from here."}),t("same account");let[a,s]=await _(U.confirm(this,`Are you sure you want to delete ${this.main.selectedRow.email} account?`,"Delete Account"));return a?e(!1):(this.main.loadingSomething=!0,[a,s]=await _(M.deleteUser(this.main.selectedRow.userId)),this.main.loadingSomething=!1,a?(this.$q.notify({type:"negative",message:a.msg||a}),e(!1)):(this.$q.notify({type:"positive",message:`Account for ${this.main.selectedRow.email} has been deleted.`}),void await this.main.listUsers()))}))},async loginAsUser(e){return new Promise((async(e,t)=>{this.main.loadingSomething=!0;let[a,s]=await _(M.loginasUser(this.main.selectedRow.userId));this.main.loadingSomething=!1,a?(this.loggedin=!1,this.$q.notify({type:"negative",message:a.error||a.message||"failed to log in"})):window.location.assign("#/home")}))},async resendActivationEmail(){return new Promise((async(e,t)=>{this.main.loadingSomething=!0;let[a,s]=await _(M.sendActivationEmail({userId:this.main.selectedRow.userId,firstName:this.main.selectedRow.firstName,lastName:this.main.selectedRow.lastName,email:this.main.selectedRow.email,authority:this.main.selectedRow.authority,dateOfBirth:this.main.selectedRow.dateOfBirth,gender:this.main.selectedRow.gender},{activationEmail:!0,showActivationLink:!1},!0));if(this.main.loadingSomething=!1,this.working=!1,a){a=a.msg||a.message||a.error||a;try{a=JSON.parse(a)}catch(i){}if("object"===typeof a){let e=Object.keys(a);a=a[e[0]]}this.$q.notify({type:"negative",message:a}),e(!1)}else this.$q.notify({type:"positive",message:`Activation email has been sent to ${this.main.selectedRow.email}`})}))},displayActivationLink(){this.alert=!1,this.$nextTick((()=>this.alert=!0)),this.alertUserId=this.main.selectedRow.userId}},computed:{userEditted(){return(this.main.selectedRow.firstName!==this.originalSelectedUser.firstName||this.main.selectedRow.lastName!==this.originalSelectedUser.lastName||this.main.selectedRow.authority!==this.originalSelectedUser.authority||this.main.selectedRow.dateOfBirth!==this.originalSelectedUser.dateOfBirth||this.main.selectedRow.gender!==this.originalSelectedUser.gender||this.main.selectedRow.enabled!==this.originalSelectedUser.enabled)&&(this.main.editted=!0)}},watch:{selectedRow:{handler(e){JSON.stringify(this.selectedRow)!==JSON.stringify(this.main.selectedRow)?this.main.editted=!0:this.main.editted=!1},deep:!0},submit(e){e&&this.$refs.userRegistrationForm.submit()},reset(e){e&&(this.selectedRow=JSON.parse(JSON.stringify(this.main.selectedRow)))}}},Q=D,$=a("9c40"),E=a("0378"),I=a("27f9"),A=a("ddd8"),F=a("7cbe"),P=a("52ee"),N=a("8f8e"),O=a("7f67"),B=Object(m["a"])(Q,R,C,!1,null,null,null),z=B.exports;y()(B,"components",{QBtn:$["a"],QForm:E["a"],QInput:I["a"],QSelect:A["a"],QIcon:h["a"],QPopupProxy:F["a"],QDate:P["a"],QCheckbox:N["a"]}),y()(B,"directives",{ClosePopup:O["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-tabs",{staticClass:"text-black bg-secondary",attrs:{align:"left"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"logins",label:"Logins"}}),a("q-tab",{attrs:{name:"activeDevices",label:"Active Devices"}}),a("q-tab",{attrs:{name:"create",label:"Create"}}),a("q-tab",{attrs:{name:"update",label:"Update"}}),a("q-tab",{attrs:{name:"delete",label:"Delete"}})],1),a("q-tab-panels",{staticClass:"q-ma-none full-width q-pa-none ",attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{staticClass:"q-pa-none q-ma-none",attrs:{name:"logins"}},[a("logins",{attrs:{main:e.main,immediateMain:e.immediateMain}})],1),a("q-tab-panel",{staticClass:"q-pa-none q-ma-none",attrs:{name:"activeDevices"}},[a("logins",{attrs:{main:e.main,immediateMain:e.immediateMain}})],1)],1)],1)},H=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-table",{staticClass:"col",attrs:{title:"Logins",dense:"",data:e.allLogins,columns:e.columns,filter:e.filter,"row-key":"loginId",selection:"multiple",selected:e.selected},on:{"row-click":e.selectLogin,"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"top-left",fn:function(){return[a("dateTimeRange",{attrs:{immediateMain:e.myImmediateMain,id:e.id}})]},proxy:!0},{key:"top-right",fn:function(){return[a("q-input",{attrs:{borderless:"",outlined:"",dense:"",debounce:"300",placeholder:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[a("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1),a("q-btn",{attrs:{flat:"",disable:!e.selectedRows}},[a("q-icon",{attrs:{color:"primary",name:"logout",side:""},on:{click:function(t){return e.logoutSelected()}}})],1),a("q-btn",{attrs:{flat:""}},[a("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(t){return e.fetchLogins()}}})],1)]},proxy:!0},{key:"body-cell-ip",fn:function(t){return[a("q-td",{class:t.row.isMe?"bg-primary":t.row.active?"bg-secondary":"bg-black text-white",attrs:{props:t}},[t.row.isMe?a("q-icon",{staticClass:"text-white",attrs:{name:"person"}}):e._e(),a("q-chip",{class:t.row.isMe?"bg-transparent":"bg-transparent text-white",attrs:{dense:"",square:""}},[e._v(e._s(t.row[t.col.name]))])],1)]}},{key:"body-cell-browser",fn:function(t){return[a("q-td",{class:t.row.isMe?"bg-primary":t.row.active?"bg-secondary":"bg-black text-white",attrs:{props:t}},[a("q-chip",{class:t.row.isMe?"bg-transparent":"bg-transparent text-white",attrs:{dense:"",square:""}},[e._v(e._s(t.row[t.col.name]))])],1)]}},{key:"body-cell-os",fn:function(t){return[a("q-td",{class:t.row.isMe?"bg-primary":t.row.active?"bg-secondary":"bg-black text-white",attrs:{props:t}},[a("q-chip",{class:t.row.isMe?"bg-transparent":"bg-transparent text-white",attrs:{dense:"",square:""}},[e._v(e._s(t.row[t.col.name]))])],1)]}},{key:"body-cell-platform",fn:function(t){return[a("q-td",{class:t.row.isMe?"bg-primary":t.row.active?"bg-secondary":"bg-black text-white",attrs:{props:t}},[a("q-chip",{class:t.row.isMe?"bg-transparent":"bg-transparent text-white",attrs:{dense:"",square:""}},[e._v(e._s(t.row[t.col.name]))])],1)]}},{key:"body-cell-createdAt",fn:function(t){return[a("q-td",{class:t.row.isMe?"bg-primary":t.row.active?"bg-secondary":"bg-black text-white",attrs:{props:t}},[a("q-chip",{class:t.row.isMe?"bg-transparent":"bg-transparent text-white",attrs:{dense:"",square:""}},[e._v(e._s(t.row[t.col.name]))])],1)]}},{key:"body-cell-refreshedAt",fn:function(t){return[a("q-td",{class:t.row.isMe?"bg-primary":t.row.active?"bg-secondary":"bg-black text-white",attrs:{props:t}},[a("q-chip",{class:t.row.isMe?"bg-transparent":"bg-transparent text-white",attrs:{dense:"",square:""}},[e._v(e._s(t.row[t.col.name]))])],1)]}},{key:"body-cell-active",fn:function(t){return[a("q-td",{class:t.row.isMe?"bg-primary":t.row.active?"bg-secondary":"bg-black text-white",attrs:{props:t}},[t.row[t.col.name]?e._e():a("q-chip",{staticClass:"text-weight-bolder",attrs:{color:!0===t.row.active?"green":"red","text-color":"white",dense:"",square:""}},[e._v(e._s(t.row[t.col.name]))]),t.row[t.col.name]?a("q-btn",{staticClass:"bg-white",attrs:{flat:"",icon:"logout"},on:{click:function(a){return e.logoutFromBtn(t.row)}}}):e._e()],1)]}}])})],1)},J=[],V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-btn",{staticClass:"bg-primary text-white",attrs:{icon:"schedule",label:e.dateRangeSelectLabel}},[a("q-menu",{ref:"menu0",staticClass:"q-ma-md q-pa-md"},[a("q-card",{staticClass:"q-pa-none q-ma-none",staticStyle:{width:"300px"}},[a("q-card-section",{staticClass:"q-pa-none q-ma-none"},[a("div",[a("q-radio",{attrs:{val:"last",label:"Last"},on:{input:e.dateRangeSelectTypeChanged},model:{value:e.dateRangeSelectType,callback:function(t){e.dateRangeSelectType=t},expression:"dateRangeSelectType"}}),"last"===e.dateRangeSelectType?a("div",{staticClass:"row q-pa-md"},[e.advancedForLastFilter?e._e():a("q-select",{staticClass:"col-8",attrs:{options:e.dateRangeSelectTypeLasts,label:"Last","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please provide an input"}]},model:{value:e.dateRangeSelectTypeLast,callback:function(t){e.dateRangeSelectTypeLast=t},expression:"dateRangeSelectTypeLast"}}),e.advancedForLastFilter?a("div",{staticClass:"col-8"},[a("q-input",{attrs:{label:"Days",type:"number"},model:{value:e.days,callback:function(t){e.days=t},expression:"days"}}),a("q-input",{attrs:{label:"hours",type:"number"},model:{value:e.hours,callback:function(t){e.hours=t},expression:"hours"}}),a("q-input",{attrs:{label:"Minutes",type:"number"},model:{value:e.minutes,callback:function(t){e.minutes=t},expression:"minutes"}}),a("q-input",{attrs:{label:"Seconds",type:"number"},model:{value:e.seconds,callback:function(t){e.seconds=t},expression:"seconds"}})],1):e._e(),a("span",{staticClass:"float-right"},[a("q-list",[a("q-item-section",[a("q-item-label",{attrs:{caption:""}},[e._v("Advanced")]),a("q-item-label",[a("q-toggle",{staticClass:"float-right",attrs:{color:"secondary"},model:{value:e.advancedForLastFilter,callback:function(t){e.advancedForLastFilter=t},expression:"advancedForLastFilter"}})],1)],1)],1)],1)],1):e._e()],1),a("div",{staticClass:"q-ma-none q-pa-none"},[a("q-radio",{attrs:{val:"timePeriod",label:"Time Period"},on:{input:e.dateRangeSelectTypeChanged},model:{value:e.dateRangeSelectType,callback:function(t){e.dateRangeSelectType=t},expression:"dateRangeSelectType"}}),"timePeriod"===e.dateRangeSelectType?a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"row"},[a("q-input",{staticClass:"col-6",attrs:{mask:"date",label:"Date to",rules:["date",function(e){return e&&e.length>0||"Please enter a date"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{model:{value:e.dateTo,callback:function(t){e.dateTo=t},expression:"dateTo"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}],null,!1,2882366464),model:{value:e.dateTo,callback:function(t){e.dateTo=t},expression:"dateTo"}}),a("q-input",{staticClass:"col-6",attrs:{mask:"time",label:"Time to",rules:["time",function(e){return e&&e.length>0||"Please enter a time"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"schedule"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{"now-btn":""},model:{value:e.timeTo,callback:function(t){e.timeTo=t},expression:"timeTo"}})],1)],1)]},proxy:!0}],null,!1,789531335),model:{value:e.timeTo,callback:function(t){e.timeTo=t},expression:"timeTo"}})],1),a("div",{staticClass:"row"},[a("q-input",{staticClass:"col-6",attrs:{mask:"date",label:"Date from",rules:["date",function(e){return e&&e.length>0||"Please enter a date"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{model:{value:e.dateFrom,callback:function(t){e.dateFrom=t},expression:"dateFrom"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}],null,!1,1103465677),model:{value:e.dateFrom,callback:function(t){e.dateFrom=t},expression:"dateFrom"}}),a("q-input",{staticClass:"col-6",attrs:{mask:"time",label:"Time from",rules:["time",function(e){return e&&e.length>0||"Please enter a time"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"schedule"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{"now-btn":""},model:{value:e.timeFrom,callback:function(t){e.timeFrom=t},expression:"timeFrom"}})],1)],1)]},proxy:!0}],null,!1,94629418),model:{value:e.timeFrom,callback:function(t){e.timeFrom=t},expression:"timeFrom"}})],1)]):e._e()],1),a("div",[a("q-radio",{attrs:{val:"interval",label:"Interval"},on:{input:e.dateRangeSelectTypeChanged},model:{value:e.dateRangeSelectType,callback:function(t){e.dateRangeSelectType=t},expression:"dateRangeSelectType"}}),"interval"===e.dateRangeSelectType?a("div",{staticClass:"row q-pa-md"},[a("q-select",{staticClass:"col-12",attrs:{options:e.intervalTypes,label:"Last","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please provide an input"}]},model:{value:e.intervalType,callback:function(t){e.intervalType=t},expression:"intervalType"}})],1):e._e()],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:""},on:{click:e.cancel}},[e._v("Cancel")]),a("q-btn",{attrs:{color:"primary"},on:{click:e.update}},[e._v("Update")])],1)],1)],1)],1)},G=[],W=(a("26e9"),{name:"dateTimeRange",props:["main","immediateMain","id"],components:{},async created(){this.immediateMain.dateTimeRanges||(this.immediateMain.dateTimeRanges={});let e=this.immediateMain.dateTimeRanges[this.id];e||(this.dateRangeSelectType="last",this.dateRangeSelectTypeLast="1 day"),this.oldDateRangeSelectType=this.dateRangeSelectType,this.convertToOtherTypes()},data(){return{dateFrom:"2021/01/04",timeFrom:"",dateTo:"",timeTo:"",days:1,hours:0,minutes:0,seconds:0,advancedForLastFilter:!1,dateRangeSelectType:"last",dateRangeSelectLabel:"...",intervalType:"Yesterday",intervalTypes:["Yesterday","Day before yesterday","This day last week","Previous week (Sun - Sat)","Previous week (Mon - Sun)","Previous month","Previous year","Current hour","Current day","Current day so far","Current week (Sun - Sat)","Current week (Mon - Sun)","Current week so far (Sun - Sat)","Current week so far (Mon - Sun)","Current month","Current month so far","Current year","Current year so far"],dateRangeSelectTypeLast:"1 day",dateRangeSelectTypeLasts:["1 second","5 seconds","10 seconds","15 seconds","30 seconds","1 minute","2 minutes","5 minutes","10 minutes","15 minutes","30 minutes","1 hour","2 hours","5 hours","10 hours","12 hours","1 day"]}},methods:{convertToOtherTypes(e){let t,a,s=e||this.dateRangeSelectType;switch(e||"last"===s&&this.advancedForLastFilter&&(s="lastAdvanced"),console.log(s),s){case"last":let e=parseInt(this.dateRangeSelectTypeLast),s=this.dateRangeSelectTypeLast.split(" ").slice(-1)[0].replace(/s$/,"");switch(a=e,s){case"second":break;case"minute":a*=60;break;case"hour":a*=3600;break;case"day":a*=86400;break}this.dateRangeSelectLabel=`Last ${this.dateRangeSelectTypeLast}`,this.interval={to:"now",from:-a};let i=0,n=parseInt(a/86400);i=n>0?a%(86400*n):a;let l=parseInt(i/3600);i=l>0?i%(3600*l):i;let r=parseInt(i/60);i=r>0?i%(60*r):i;let o=i;this.dateRangeSelectTypeLastAdvanced={day:n,hour:l,min:r,sec:o},console.log(n,l,r,o),this.days=n,this.hours=l,this.minutes=r,this.seconds=o,t=new Date,this.dateTo=`${t.getFullYear()}/${t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1}/${t.getDate()<10?"0"+t.getDate():t.getDate()}`,this.timeTo=`${t.getHours()<10?"0"+t.getHours():t.getHours()}:${t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}`,t=new Date(t.getTime()-1e3*a),this.dateFrom=`${t.getFullYear()}/${t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1}/${t.getDate()<10?"0"+t.getDate():t.getDate()}`,this.timeFrom=`${t.getHours()<10?"0"+t.getHours():t.getHours()}:${t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}`;break;case"lastAdvanced":a=24*parseInt(this.days)*60*60+60*parseInt(this.hours)*60+60*parseInt(this.minutes)+parseInt(this.seconds),t=new Date,this.dateTo=`${t.getFullYear()}/${t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1}/${t.getDate()<10?"0"+t.getDate():t.getDate()}`,this.timeTo=`${t.getHours()<10?"0"+t.getHours():t.getHours()}:${t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}`,t=new Date(t.getTime()-1e3*a),this.dateFrom=`${t.getFullYear()}/${t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1}/${t.getDate()<10?"0"+t.getDate():t.getDate()}`,this.timeFrom=`${t.getHours()<10?"0"+t.getHours():t.getHours()}:${t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}`;let c=[1,5,10,15,30,1,2,5,10,15,30,1,2,5,10,12,1],d=[1,60,3600,86400],m=-1;c=c.map((e=>(1===e&&m++,e*d[m])));let u=c[0],g=c[c.length-1];c.map((e=>{e<=a&&(u=e)})),c=c.reverse(),c.map((e=>{e>=a&&(g=e)})),c=c.reverse(),this.interval={to:"now",from:-a},a=a-u<g-a?u:g;let h=c.indexOf(a);this.dateRangeSelectTypeLast=this.dateRangeSelectTypeLasts[h];break;case"timePeriod":this.interval={to:new Date(`${this.dateTo} ${this.timeTo}`),from:new Date(`${this.dateFrom} ${this.timeFrom}`)};break;case"interval":console.log("from interval...");break}},cancel(){this.$refs.menu0.toggle(),this.immediateMain.dateTimeRanges[this.id]=this.settingsOriginal},update(){this.convertToOtherTypes(),this.immediateMain.dateTimeRanges[this.id]||(this.immediateMain.dateTimeRanges[this.id]={});let e=["dateRangeSelectType","dateRangeSelectTypeLast","interval"];e.map((e=>this.immediateMain.dateTimeRanges[this.id][e]=this[e])),console.log(this.immediateMain.dateTimeRanges[this.id]),console.log({id:this.id}),this.$refs.menu0.toggle(),this.immediateMain.dateTimeRanges[this.id].interval=this.interval,console.log(this.immediateMain.runSelected),this.immediateMain.runSelected()},dateRangeSelectTypeChanged(e,t){this.convertToOtherTypes()}},computed:{},watch:{dateRangeSelectType(){let e=this.dateRangeSelectType;this.dateRangeSelectType=this.oldDateRangeSelectType,this.convertToOtherTypes(),this.dateRangeSelectType=e,this.oldDateRangeSelectType=e},advancedForLastFilter(){if(!1===this.advancedForLastFilter){let e=this.dateRangeSelectType;this.convertToOtherTypes("lastAdvanced"),this.dateRangeSelectType=e,this.oldDateRangeSelectType=e}else{let e=this.dateRangeSelectType;this.convertToOtherTypes("last"),console.log("from last"),this.dateRangeSelectType=e,this.oldDateRangeSelectType=e}}}}),K=W,X=a("4e73"),Z=a("3786"),ee=a("1c1c"),te=a("4074"),ae=a("0170"),se=a("9564"),ie=a("ca78"),ne=a("4b7e"),le=Object(m["a"])(K,V,G,!1,null,null,null),re=le.exports;y()(le,"components",{QBtn:$["a"],QMenu:X["a"],QCard:u["a"],QCardSection:g["a"],QRadio:Z["a"],QSelect:A["a"],QInput:I["a"],QList:ee["a"],QItemSection:te["a"],QItemLabel:ae["a"],QToggle:se["a"],QIcon:h["a"],QPopupProxy:F["a"],QDate:P["a"],QTime:ie["a"],QCardActions:ne["a"]}),y()(le,"directives",{ClosePopup:O["a"]});const oe=a("1712").to,ce=a("ff00"),de=a("40cd").default;var me={name:"logins",props:["main","immediateMain"],components:{dateTimeRange:re},async created(){de.setSettings({TBURL:ce["TB_URL"]}),de.setVue(this),this.fetchLogins()},data(){return{id:1,myImmediateMain:this,dateTimeRanges:{},dateRangeSelectType:"last",dateRangeSelectLabel:"",selected:[],columns:[{name:"ip",label:"IP",field:"ip",sortable:!0},{name:"browser",label:"Browser",field:"browser",sortable:!0},{name:"os",label:"OS",field:"os",sortable:!0},{name:"platform",label:"Platform",field:"platform",sortable:!0},{name:"active",label:"Active",field:"active",sortable:!0},{name:"createdAt",label:"Created",field:"createdAt",sortable:!0},{name:"refreshedAt",label:"Refreshed",field:"refreshedAt",sortable:!0}],allLogins:[],selectedRow:{},filter:""}},methods:{async logoutFromBtn(e){await this.logoutSelected([e])},async logoutSelected(e){return new Promise((async(t,a)=>{let s=!1,i=(e||this.selected).map((e=>e));i.map((e=>{e.isMe&&(s=!0)})),i=i.filter((e=>!e.isMe&&""!==e.token)),i=i.map((e=>e.token)),s&&this.$q.notify({type:"negative",message:"We will not log you out from here"});let n=i.map(de.logout);this.main.loadingSomething=!0;let[l,r]=await oe(Promise.all(n));if(this.main.loadingSomething=!1,l)return this.$q.notify({type:"negative",message:l.msg||l}),t(!1);await oe(this.fetchLogins()),t()}))},async runSelected(){return this.fetchLogins()},async fetchLogins(){let e={userId:this.main.selectedRow.userId};this.dateTimeRanges[this.id]||(this.dateTimeRanges[this.id]={}),this.dateTimeRanges[this.id].interval&&(e.createdAt={},this.dateTimeRanges[this.id].interval.to&&("now"===this.dateTimeRanges[this.id].interval.to?e.createdAt["lte"]=new Date:e.createdAt["lte"]=this.dateTimeRanges[this.id].interval.to),this.dateTimeRanges[this.id].interval.from&&(this.dateTimeRanges[this.id].interval.from<0?e.createdAt["gte"]=new Date((new Date).getTime()+1e3*this.dateTimeRanges[this.id].interval.from):e.createdAt["gte"]=this.dateTimeRanges[this.id].interval.from)),"activeDevices"===this.immediateMain.tab&&(e["tokenExpiry"]={gte:parseInt((new Date).getTime()/1e3)},e["token"]={ne:""}),this.main.loadingSomething=!0;let[t,a]=await oe(de.getLogins(e));this.main.loadingSomething=!1;let s=de.currentToken();t||(a=a.map((e=>(e.active=""!==e.token,e.token===s?e.isMe=!0:e.isMe=!1,e))),this.allLogins=a)},selectLogin(e,t){t.active&&(this.selectedRow=t)}},computed:{selectedRows(){let e=this.selected.filter((e=>e.active));return e.length>0}},watch:{selectedRow:{handler(e){JSON.stringify(this.selectedRow)!==JSON.stringify(this.main.selectedRow)?this.main.editted=!0:this.main.editted=!1},deep:!0}}},ue=me,ge=a("9989"),he=a("eaac"),pe=a("db86"),be=a("b047"),ye=Object(m["a"])(ue,j,J,!1,null,null,null),fe=ye.exports;y()(ye,"components",{QPage:ge["a"],QTable:he["a"],QBtn:$["a"],QMenu:X["a"],QCard:u["a"],QCardSection:g["a"],QRadio:Z["a"],QCardActions:ne["a"],QInput:I["a"],QIcon:h["a"],QTd:pe["a"],QChip:be["a"]});a("ff00"),a("40cd").default;var ve={name:"userDetails",props:["main"],components:{logins:fe},async created(){},data(){return{tab:"logins",immediateMain:this}},methods:{},computed:{},watch:{}},we=ve,qe=a("429bb"),Se=a("7460"),ke=a("adad"),Te=a("823b"),Re=Object(m["a"])(we,Y,H,!1,null,null,null),Ce=Re.exports;y()(Re,"components",{QTabs:qe["a"],QTab:Se["a"],QTabPanels:ke["a"],QTabPanel:Te["a"]});a("bc3a"),a("1712").to,a("9fea")();var xe={name:"userSideBar",props:["main"],created(){this.main.selectedTab&&(this.tab=this.main.selectedTab)},components:{userDetails:z,auditLogs:Ce},beforeDestroy(){this.main.selectedTab=this.tab},data(){return{rightSidebarOpen:!0,tab:"details",openedEditing:!1,submit:!1,reset:!1}},methods:{submitForm(){this.submit=!1,this.$nextTick((()=>this.submit=!0))},closeSelf(){this.main.rightSideBar=!1},resetForm(){this.reset=!1,this.$nextTick((()=>this.reset=!0)),this.openedEditing=!1,this.main.editted=!1}},computed:{}},_e=xe,Le=a("65c6"),Me=a("6ac5"),Ue=a("de5e"),De=a("eb85"),Qe=Object(m["a"])(_e,k,T,!1,null,null,null),$e=Qe.exports;y()(Qe,"components",{QToolbar:Le["a"],QToolbarTitle:Me["a"],QBtn:$["a"],QPageSticky:Ue["a"],QTabs:qe["a"],QTab:Se["a"],QSeparator:De["a"],QTabPanels:ke["a"],QTabPanel:Te["a"]});a("bc3a"),a("1712").to,a("9fea")();var Ee={name:"rightSideBar",props:["main"],created(){},components:{userSideBar:$e},data(){return{rightSidebarOpen:!0,tab:"login"}},methods:{},computed:{rightSideBarSize(){return this.$q.screen.lt.xs||this.$q.screen.lt.sm||this.$q.screen.lt.md?document.getElementsByTagName("body")[0].clientWidth:.75*document.getElementsByTagName("body")[0].clientWidth}}},Ie=Ee,Ae=a("9404"),Fe=a("6b1d"),Pe=Object(m["a"])(Ie,q,S,!1,null,null,null),Ne=Pe.exports;y()(Pe,"components",{QDrawer:Ae["a"],QLinearProgress:Fe["a"],QToolbar:Le["a"],QToolbarTitle:Me["a"],QBtn:$["a"],QTabs:qe["a"],QTab:Se["a"],QSeparator:De["a"],QTabPanels:ke["a"],QTabPanel:Te["a"]});const Oe=a("ff00"),Be=a("40cd").default,ze=a("1712").to;var Ye={name:"PageIndex",components:{loginForm:n["a"],breadcrumbs:l["a"],cardTotal:v,registrationForm:w["a"],rightSideBar:Ne},watch:{$route(e,t){this.setfilters(e.path)}},data(){return{activeElement_:"",main:this,editted:!1,loadingSomething:!1,loadingSomethingBigger:!1,rightSideBar:!1,createUserDialog:!1,loaded:!0,links:[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"}],checkedLoggedIn:!1,loggedIn:!1,listHck:[{name:"Users",icon:"settings",link:"/#/system/users",Authority:"Manage Users and Organizations",description:"Manage Users and Organizations"}],filter:"",columnsHck:[],columns:[{name:"firstName",label:"First Name",field:"firstName",sortable:!0},{name:"lastName",label:"Last Name",field:"lastName",sortable:!0},{name:"email",label:"Email",field:"email",sortable:!0}],numUsers:0,numSysAdmins:0,numActiveUsers:0,numInactiveUsers:0,numEnabledUsers:0,numDisabledusers:0,allUsers:[],selectedRow:{}}},async created(){this.setfilters(),Be.setVue(this),Be.setSettings({TBURL:Oe["TB_URL"]}),Be.showLoading();let[e,t]=await ze(Be.isLoggedIn());Be.hideLoading(),this.checkedLoggedIn=!0,!e&&t||window.location.assign("#/"),await this.listUsers()},methods:{setfilters(e=!1){let t=(e||window.location.hash).replace(/[\/]*[#]*\//,"");switch(t){case"system/users":this.filters={},this.activeElement_="users",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"}];break;case"system/users/sys_admin":this.filters={authority:"SYS_ADMIN"},this.activeElement_="sys_admin",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Sys_Admins",icon:"settings",to:"/system/users/sys_admin"}];break;case"system/users/active":this.filters={isActive:!0},this.activeElement_="active",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Active",icon:"do_not_disturb_off",to:"/system/users/active"}];break;case"system/users/inactive":this.filters={isActive:!1},this.activeElement_="inactive",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Inactive",icon:"do_not_disturb_on",to:"/system/users/inactive"}];break;case"system/users/enabled":this.filters={enabled:!0},this.activeElement_="enabled",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Enabled",icon:"people",to:"/system/users/enabled"}];break;case"system/users/disabled":this.filters={enabled:!1},this.activeElement_="disabled",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Disabled",icon:"person_off",to:"/system/users/disabled"}];break}this.listUsers()},async listUsers(){this.loadingSomethingBigger=!0;let[e,t]=await ze(Be.listAllUsers(this.filters));this.loadingSomethingBigger=!1,this.allUsers=t||[],this.numUsers=this.allUsers.length,this.numSysAdmins=this.allUsers.filter((e=>"SYS_ADMIN"===e.authority)).length,this.numActiveUsers=this.allUsers.filter((e=>!0===e.isActive)).length,this.numInactiveUsers=this.allUsers.filter((e=>!1===e.isActive)).length,this.numEnabledUsers=this.allUsers.filter((e=>!0===e.enabled)).length,this.numDisabledusers=this.allUsers.filter((e=>!1===e.enabled)).length},selectApplication(e){window.location.assign(e)},gotoPage(e){console.log(e),window.location.assign(e)},selectUser(e,t){this.selectedUser=!0,this.selectedEmail=t.email,this.selectedId="object"===typeof t.id?t.id.id:t.id,this.selectedFirstName=t.firstName,this.selectedLastName=t.lastName,this.selectedRow=t,this.rightSideBar=!1,this.$nextTick((()=>this.rightSideBar=!0))}},computed:{activeElement(){return this.activeElement_},cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},He=Ye,je=a("24e8"),Je=a("bd08"),Ve=a("42a1"),Ge=Object(m["a"])(He,s,i,!1,null,null,null);t["default"]=Ge.exports;y()(Ge,"components",{QPage:ge["a"],QLinearProgress:Fe["a"],QDialog:je["a"],QCard:u["a"],QCardSection:g["a"],QTable:he["a"],QInput:I["a"],QIcon:h["a"],QBtn:$["a"],QTr:Je["a"],QTd:pe["a"],QPopupEdit:Ve["a"]})},de8b:function(e,t,a){},e0ea:function(e,t,a){"use strict";a("de8b")}}]);