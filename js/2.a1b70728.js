(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"68ac":function(e,t,a){},ae0a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"hHh lpR lff"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        "+e._s(e.projectName)+" ")]),e.enableFullScreen?a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:e.fullscreenIcon,"aria-label":"Menu"},on:{click:e.fullscreen}}):e._e(),a("span",[e._v(" "+e._s(e.userName)),a("br"),e._v(e._s(e.authority)+" ")]),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"more_vert","aria-label":"Profile"},on:{click:function(t){e.displaySettingsMenu=!e.displaySettingsMenu}}},[a("q-menu",{attrs:{"content-style":{backgroundColor:"#fff",color:"#737373"}}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:""},on:{click:e.profile}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{color:"primary",name:"person"}})],1),a("q-item-section",[e._v("Profile")])],1),a("q-item",{attrs:{clickable:""},on:{click:e.auditLogs}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{color:"primary",name:"track_changes"}})],1),a("q-item-section",[e._v("Audit Logs")])],1),a("q-item",{attrs:{clickable:""},on:{click:e.logout}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{color:"primary",name:"logout"}})],1),a("q-item-section",[e._v("Logout")])],1)],1)],1)],1)],1)],1),a("q-drawer",{staticClass:"bg-primary",attrs:{bordered:"",breakpoint:1024,"content-class":"bg-primary"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))})),1)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],s=(a("e01a"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",href:e.link}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)}),l=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},r=o,c=a("2877"),u=a("66e5"),m=a("4074"),f=a("0016"),d=a("0170"),h=a("eebe"),p=a.n(h),q=Object(c["a"])(r,s,l,!1,null,null,null),b=q.exports;p()(q,"components",{QItem:u["a"],QItemSection:m["a"],QIcon:f["a"],QItemLabel:d["a"]});const k=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],w=a("0924").default,g=a("40cd").default,v=a("ff00"),_=a("1712").to;var y={name:"MainLayout",components:{EssentialLink:b},data(){return{fullscreenIcon:"fullscreen",enableFullScreen:!1,leftDrawerOpen:!1,displaySettingsMenu:!1,myAuditLogs:"auditLogs",essentialLinks:k,userName:"",authority:"",projectName:v.LOGO_NAME}},async created(){let e=[{title:"Home",caption:"Home",icon:"home",link:window.location.protocol+"//"+window.location.host+"/#/home"}];e=e.concat(w.home.map((e=>(e.title=e.name,e.caption=e.description,e)))),this.essentialLinks=e,this.$q.platform.is.electron||(this.enableFullScreen=!0),this.setFullScreenIcon(),g.setSettings({TBURL:v["TB_URL"]}),g.setVue(this),g.showLoading();let[t,a]=await _(g.readUserData());g.hideLoading(),this.userData=a,this.setUserName()},methods:{async setUserName(){let e=await g.whoAmILocally();this.userName=`${e.firstName} ${e.lastName}`,this.authority=`${e.currentAuthority||e.authority}`},logout(){window.location.assign("/#/logout")},profile(){window.location.assign("/#/profile")},auditLogs(){window.location.assign("/#/system/audit_logs/"+this.userData.userId+"/logins")},fullscreen(){this.$q.fullscreen.isActive?this.$q.fullscreen.exit().then((()=>{})):this.$q.fullscreen.request().then((()=>{}))},setFullScreenIcon(){this.enableFullScreen&&(this.enableFullScreen=!1,setTimeout((()=>{this.isFullScreen=this.$q.fullscreen.isActive,this.isFullScreen?this.fullscreenIcon="fullscreen_exit":this.fullscreenIcon="fullscreen",this.enableFullScreen=!0}),100))}},watch:{"$q.fullscreen.isActive"(e){this.isFullScreen=this.$q.fullscreen.isActive,this.isFullScreen?this.fullscreenIcon="fullscreen_exit":this.fullscreenIcon="fullscreen"},$route(e,t){this.setUserName()}}},L=y,S=(a("fdfec"),a("4d5a")),Q=a("e359"),I=a("65c6"),F=a("9c40"),$=a("6ac5"),D=a("4e73"),N=a("1c1c"),A=a("9404"),O=a("09e3"),M=Object(c["a"])(L,i,n,!1,null,null,null);t["default"]=M.exports;p()(M,"components",{QLayout:S["a"],QHeader:Q["a"],QToolbar:I["a"],QBtn:F["a"],QToolbarTitle:$["a"],QMenu:D["a"],QList:N["a"],QItem:u["a"],QItemSection:m["a"],QIcon:f["a"],QDrawer:A["a"],QItemLabel:d["a"],QPageContainer:O["a"]})},fdfec:function(e,t,a){"use strict";a("68ac")}}]);