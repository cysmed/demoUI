(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{a4f3:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"padding bg-grey-1"},[a("breadcrumbs",{attrs:{links:e.links}}),e.loaded?a("q-table",{attrs:{grid:"","card-container-class":e.cardContainerClass,data:e.list,columns:e.columns,title:"Publishing",filter:e.filter,"row-key":"name","hide-header":"","hide-bottom":"","rows-per-page-options":[0]},scopedSlots:e._u([{key:"top-right",fn:function(){return[a("q-space"),a("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[a("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1)]},proxy:!0},{key:"item",fn:function(t){return[a("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},[a("q-card",{staticClass:"bg-white"},[a("q-card-section",{staticClass:"text-left text-h6"},[a("strong",[e._v(e._s(t.row.name))])]),a("q-card-section",{staticClass:"flex flex-center"},[a("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-primary cursor-pointer q-hoverable",staticStyle:{width:"80vw"},on:{click:function(a){return e.selectApplication(t.row.link)}}},[a("q-card-section",{staticClass:"text-center"},[a("q-icon",{staticStyle:{"font-size":"6em"},attrs:{name:t.row.icon,color:"white"}})],1),a("q-card-section",{staticClass:"flex flex-center text-white"},[a("div",[e._v(e._s(t.row.description))])])],1)],1)],1)],1)]}}],null,!1,1906080370)}):e._e()],1)},s=[],n=(a("ddb0"),a("cf57"),a("310f")),r=a("2cbd");const o=a("c2a1").default,l=a("1712").to,c=a("0924").default,d=a("20e6");var u={name:"publishing",components:{loginForm:n["a"],breadcrumbs:r["a"]},data(){return{loaded:!1,links:[{label:"Publishing",icon:"library_books",to:"publishing"}],checkedLoggedIn:!1,userData:{},loggedIn:!1,list:[],filter:"",columns:[{name:"name",label:"Name",field:"name"},{name:"description",label:"Description",field:"description"},{name:"icon",label:"Icon",field:"icon"}]}},async created(){o.setSettings({TBURL:d["TB_URL"]}),o.setSettings(d),o.setVue(this),o.showLoading();let[e,t]=await l(o.isLoggedIn());o.hideLoading(),this.checkedLoggedIn=!0,!e&&t||window.location.assign("#/"),o.showLoading(),[e,t]=await l(o.readUserData()),this.userData=t,this.list=c.home.filter((e=>{if(console.log(e),"Publishing"===e.name)return!0})).map((e=>e.children))[0];let a=[];try{this.userData.organizations.map((e=>{a.includes(e.authority)||a.push(e.authority)}))}catch(i){}a.push(this.userData.authority),this.list=this.list.filter((e=>{let t=e.authorities;return t.some((e=>a.includes(e)))})),o.hideLoading(),this.loaded=!0},methods:{selectApplication(e){window.location.assign(e)}},computed:{cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},p=u,h=a("2877"),g=a("9989"),m=a("eaac"),f=a("2c91"),b=a("27f9"),w=a("0016"),q=a("f09f"),y=a("a370"),k=a("714f"),x=a("eebe"),C=a.n(x),v=Object(h["a"])(p,i,s,!1,null,null,null);t["default"]=v.exports;C()(v,"components",{QPage:g["a"],QTable:m["a"],QSpace:f["a"],QInput:b["a"],QIcon:w["a"],QCard:q["a"],QCardSection:y["a"]}),C()(v,"directives",{Ripple:k["a"]})}}]);