(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{3120:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"padding bg-grey-1"},[t.loadingSomethingBigger?s("q-linear-progress",{attrs:{indeterminate:"",color:"negative"}}):t._e(),t.rightSideBar?s("rightSideBar",{attrs:{main:t.main,cysmed:t.cysmed,objType:"user"}}):t._e(),s("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:t.createUserDialog,callback:function(e){t.createUserDialog=e},expression:"createUserDialog"}},[s("q-card",{staticClass:"q-ma-md"},[s("q-card-section",{staticClass:"bg-secondary text-white text-center"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.extendedProjectName))])]),s("q-card-section",{staticClass:"bg-secondary text-white"},[s("registrationForm",{attrs:{inside:!0,main:t.main,cysmed:t.cysmed,rqAuthority:t.rqAuthority}})],1)],1)],1),s("breadcrumbs",{attrs:{links:t.links}}),t.authority.match(/LOCAL_/)?t._e():s("div",{staticClass:"row items-center flex-center"},[s("div",{staticClass:"col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm"},[t.plotDataLoaded?s("bar-chart",{attrs:{plotData:t.plotData,parent:t.parent}}):t._e()],1)]),s("q-table",{staticClass:"col",attrs:{title:"Users",dense:"",data:t.allUsers,columns:t.columns,filter:t.filter,"row-key":"index"},on:{"row-click":t.selectUser},scopedSlots:t._u([{key:"top-right",fn:function(){return[s("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[s("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1),s("q-btn",{attrs:{flat:""}},[s("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(e){return t.listUsers()}}})],1),s("q-btn",{attrs:{flat:""}},[s("q-icon",{attrs:{color:"primary",name:"add_circle",side:""},on:{click:function(e){t.createUserDialog=!0}}})],1)]},proxy:!0},{key:"body-cell-authority",fn:function(e){return[s("td",[t._v(t._s(t.translate(("FIELDS.ENTITYTYPES."+e.row.authority).replace(/FIELDS\.ENTITYTYPES\./,""))))])]}}])})],1)},i=[],l=(s("5319"),s("ddb0"),s("cf57"),s("8be4")),r=s("2cbd"),n=s("46c6"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white",attrs:{flat:""}},[s("q-card-section",{staticClass:"flex flex-center"},[s("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"cursor-pointer q-hoverable",class:t.backgroundColor,staticStyle:{width:"80vw"},on:{click:function(e){return t.gotoPage(t.localLink)}}},[s("q-card-section",{staticClass:"text-center"},[s("div",{staticClass:"row"},[t.total1?t._e():s("div",{staticClass:"col-3 flex flex-center"},[s("q-icon",{staticStyle:{"font-size":"3em"},attrs:{name:t.iconName,color:"white"}})],1),s("div",{staticClass:"col q-pa-none q-ma-none",staticStyle:{"font-size":"0.8em"}},[s("p",{staticClass:"text-bold q-pa-none  q-ma-none"},[t._v(t._s(t.title)+" "+t._s(t.total))]),s("p",{staticClass:"text-bold q-pa-none  q-ma-none"},[t._v(t._s(t.title)+" "+t._s(t.total))]),s("p",{staticClass:"text-bold q-pa-none  q-ma-none"},[t._v(t._s(t.title)+" "+t._s(t.total))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t.total1?s("p",{staticClass:"text-bold"},[t._v(t._s(t.title1))]):t._e(),!t.smallsize&&t.total1?s("h5",{ref:"number",staticClass:"q-ma-none"},[t._v(t._s(t.total1))]):t._e(),t.smallsize&&t.total1?s("p",{ref:"number",staticClass:"q-ma-none"},[t._v(t._s(t.total1))]):t._e()])])])],1)],1)],1)},c=[],d={name:"accountTypesTotal",props:["title","total","backgroundColor","iconName","link","smallsize","total1","title1"],mounted(){this.link?this.localLink=this.link:this.localLink=window.location.href},created(){this.link?this.localLink=this.link:this.localLink=window.location.href},computed:{},watch:{},data(){return{localLink:window.location.href,options:{separator:"."}}},methods:{gotoPage(t){console.log(t),window.location.assign(t)}}},h=d,m=(s("dd65"),s("2877")),u=s("f09f"),b=s("a370"),p=s("0016"),g=s("714f"),y=s("eebe"),C=s.n(y),f=Object(m["a"])(h,o,c,!1,null,"f2a10086",null),v=f.exports;C()(f,"components",{QCard:u["a"],QCardSection:b["a"],QIcon:p["a"]}),C()(f,"directives",{Ripple:g["a"]});var w=s("b0e2"),_=s("4d6d"),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white q-pa-none full-width"},[s("q-card-section",[s("canvas",{attrs:{id:"bar-chart"}})])],1)},E=[],x=s("d549"),A={data(){return{chart:null,title:"Accounts"}},props:["plotData","parent"],mounted(){this.setTitle(),this.createChart("bar-chart"),this.setActive()},methods:{getActiveIndex(){let t=this.parent.activeElement,e=0;return Object.values(this.plotData).map(((s,a)=>{s.activeElementName===t&&(e=a)})),e},setTitle(){let t=this.getActiveIndex(),e=Object.keys(this.plotData)[t];this.title+=`: ${e}`},setActive(){let t=this.getActiveIndex();this.chart.data.datasets[0].backgroundColor[t]="#02b000",this.chart.update()},clickHandler(t,e){let s=e[0].index;console.log(this.plotData[Object.keys(this.plotData)[s]]);let a=this.plotData[Object.keys(this.plotData)[s]].link;a=a.replace(/^\/#/,""),this.$route.path!==a&&this.$router.push({path:a})},createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"bar",data:{labels:Object.keys(this.plotData),datasets:[{backgroundColor:new Array(Object.keys(this.plotData).length).fill("#00a496"),data:Object.values(this.plotData).map((t=>t.number))}]},options:{events:["click"],onClick:this.clickHandler,plugins:{title:{display:!0,text:this.title},legend:{display:!1}},scales:{x:{title:{display:!0,text:"Account Type"}},y:{title:{display:!0,text:"Number of Accounts"},min:0,ticks:{stepSize:1}}}}});return this.chart=s,s}}},S=A,U=Object(m["a"])(S,k,E,!1,null,null,null),q=U.exports;C()(U,"components",{QCard:u["a"],QCardSection:b["a"]});var I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white full-width"},[s("q-card-section",{staticClass:"bg-blue-grey-8"},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-white text-center"},[t._v("Line Chart")])])])]),s("q-card-section",[s("canvas",{attrs:{id:"line-chart"}})])],1)},D=[],N={data(){return{}},mounted(){this.createChart("line-chart")},methods:{createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"line",data:{labels:[1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],datasets:[{data:[86,114,106,106,107,111,133,221,783,2478],label:"Africa",borderColor:"#3e95cd",fill:!1,lineTension:.9},{data:[282,350,411,502,635,809,947,1402,3700,5267],label:"Asia",borderColor:"#8e5ea2",fill:!1,lineTension:0},{data:[168,170,178,190,203,276,408,547,675,734],label:"Europe",borderColor:"#3cba9f",fill:!1,lineTension:0},{data:[40,20,10,16,24,38,74,167,508,784],label:"Latin America",borderColor:"#e8c3b9",fill:!1,lineTension:0},{data:[6,3,2,2,7,26,82,172,312,433],label:"North America",borderColor:"#c45850",fill:!1,lineTension:0}]},options:{legend:{display:!1},title:{display:!0,text:"World population per region (in millions)"}}});return s}}},T=N,L=Object(m["a"])(T,I,D,!1,null,null,null),P=L.exports;C()(L,"components",{QCard:u["a"],QCardSection:b["a"]});var B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white full-width"},[s("q-card-section",{staticClass:"bg-blue-grey-8"},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-white text-center"},[t._v("Radar Chart")])])])]),s("q-card-section",[s("canvas",{attrs:{id:"radar-chart"}})])],1)},Q=[],O={data(){return{}},mounted(){this.createChart("radar-chart")},methods:{createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"radar",data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"1950",fill:!0,backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointBackgroundColor:"rgba(179,181,198,1)",data:[8.77,55.61,21.69,6.62,6.82],borderWidth:1.5},{label:"2050",fill:!0,backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointBackgroundColor:"rgba(255,99,132,1)",data:[25.48,54.16,7.61,8.06,4.45],borderWidth:1.5}]},options:{title:{display:!0,text:"Distribution in % of world population"}}});return s}}},j=O,$=Object(m["a"])(j,B,Q,!1,null,null,null),R=$.exports;C()($,"components",{QCard:u["a"],QCardSection:b["a"]});var Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white full-width"},[s("q-card-section",{staticClass:"bg-blue-grey-8"},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-white text-center"},[t._v("Pie Chart")])])])]),s("q-card-section",[s("canvas",{attrs:{id:"pie-chart"}})])],1)},F=[],M={data(){return{}},mounted(){this.createChart("pie-chart")},methods:{createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"pie",data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:[2478,5267,734,784,433]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"}}});return s}}},z=M,H=Object(m["a"])(z,Y,F,!1,null,null,null),J=H.exports;C()(H,"components",{QCard:u["a"],QCardSection:b["a"]});var W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white full-width"},[s("q-card-section",{staticClass:"bg-blue-grey-8"},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-white text-center"},[t._v("Polar Area Chart")])])])]),s("q-card-section",[s("canvas",{attrs:{id:"polar-area-chart"}})])],1)},G=[],V={data(){return{}},mounted(){this.createChart("polar-area-chart")},methods:{createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"polarArea",data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:[2478,5267,734,784,433]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"}}});return s}}},X=V,K=Object(m["a"])(X,W,G,!1,null,null,null),Z=K.exports;C()(K,"components",{QCard:u["a"],QCardSection:b["a"]});var tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white full-width"},[s("q-card-section",{staticClass:"bg-blue-grey-8"},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-white text-center"},[t._v("Doughnut Chart")])])])]),s("q-card-section",[s("canvas",{attrs:{id:"doughnut-chart"}})])],1)},et=[],st={data(){return{}},mounted(){this.createChart("doughnut-chart")},methods:{createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"doughnut",data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:[2478,5267,734,784,433]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"}}});return s}}},at=st,it=Object(m["a"])(at,tt,et,!1,null,null,null),lt=it.exports;C()(it,"components",{QCard:u["a"],QCardSection:b["a"]});var rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white full-width"},[s("q-card-section",{staticClass:"bg-blue-grey-8"},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-white text-center"},[t._v("Horizontal Bar Chart")])])])]),s("q-card-section",[s("canvas",{attrs:{id:"horizontal-bar-chart"}})])],1)},nt=[],ot={data(){return{}},mounted(){this.createChart("horizontal-bar-chart")},methods:{createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"horizontalBar",data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:[2478,5267,734,784,433]}]},options:{legend:{display:!1},title:{display:!0,text:"Predicted world population (millions) in 2050"}}});return s}}},ct=ot,dt=Object(m["a"])(ct,rt,nt,!1,null,null,null),ht=dt.exports;C()(dt,"components",{QCard:u["a"],QCardSection:b["a"]});var mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white full-width"},[s("q-card-section",{staticClass:"bg-blue-grey-8"},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-white text-center"},[t._v("Mixed Chart")])])])]),s("q-card-section",[s("canvas",{attrs:{id:"mixed-chart"}})])],1)},ut=[],bt={data(){return{}},mounted(){this.createChart("mixed-chart")},methods:{createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"bar",data:{labels:["1900","1950","1999","2050"],datasets:[{label:"Europe",type:"line",borderColor:"#8e5ea2",data:[408,547,675,734],fill:!1},{label:"Africa",type:"line",borderColor:"#3e95cd",data:[133,221,783,2478],fill:!1},{label:"Europe",type:"bar",backgroundColor:"rgba(0,0,0,0.2)",data:[408,547,675,734]},{label:"Africa",type:"bar",backgroundColor:"rgba(0,0,0,0.2)",backgroundColorHover:"#3e95cd",data:[133,221,783,2478]}]},options:{title:{display:!0,text:"Population growth (millions): Europe & Africa"},legend:{display:!1}}});return s}}},pt=bt,gt=Object(m["a"])(pt,mt,ut,!1,null,null,null),yt=gt.exports;C()(gt,"components",{QCard:u["a"],QCardSection:b["a"]});var Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white full-width"},[s("q-card-section",{staticClass:"bg-blue-grey-8"},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-white text-center"},[t._v("Bubble Chart")])])])]),s("q-card-section",[s("canvas",{attrs:{id:"bubble-chart"}})])],1)},ft=[],vt={data(){return{}},mounted(){this.createChart("bubble-chart")},methods:{createChart(t){const e=document.getElementById(t),s=new x["a"](e,{type:"bubble",data:{labels:"Africa",datasets:[{label:["China"],backgroundColor:"rgba(255,221,50,0.2)",borderColor:"rgba(255,221,50,1)",data:[{x:21269017,y:5.245,r:15}]},{label:["Denmark"],backgroundColor:"rgba(60,186,159,0.2)",borderColor:"rgba(60,186,159,1)",data:[{x:258702,y:7.526,r:10}]},{label:["Germany"],backgroundColor:"rgba(0,0,0,0.2)",borderColor:"#000",data:[{x:3979083,y:6.994,r:15}]},{label:["Japan"],backgroundColor:"rgba(193,46,12,0.2)",borderColor:"rgba(193,46,12,1)",data:[{x:4931877,y:5.921,r:15}]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Happiness"}}],xAxes:[{scaleLabel:{display:!0,labelString:"GDP (PPP)"}}]}}});return s}}},wt=vt,_t=Object(m["a"])(wt,Ct,ft,!1,null,null,null),kt=_t.exports;C()(_t,"components",{QCard:u["a"],QCardSection:b["a"]});const Et=s("20e6"),xt=s("c2a1").default,At=s("1712").to,St=s("ea76").default;var Ut={name:"users",components:{loginForm:l["default"],breadcrumbs:r["default"],cardTotal:n["a"],accountTypesTotal:v,registrationForm:w["default"],rightSideBar:_["default"],BarChart:q,LineChart:P,RadarChart:R,PieChart:J,PolarAreaChart:Z,DoughnutChart:lt,HorizontalBarChart:ht,MixedChart:yt,BubbleChart:kt},watch:{$route(t,e){this.setfilters(t.path)}},props:["cysmed"],data(){return{rqAuthority:!1,parent:this,plotData:{},plotDataLoaded:!1,translate:St.translate,extendedProjectName:"",activeElement_:"",main:this,editted:!1,loadingSomething:!1,loadingSomethingBigger:!1,rightSideBar:!1,createUserDialog:!1,loaded:!0,links:[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"}],checkedLoggedIn:!1,loggedIn:!1,listHck:[{name:"Users",icon:"settings",link:"/#/system/users",Authority:"Manage Users and Organizations",description:"Manage Users and Organizations"}],filter:"",columnsHck:[],columns:[{name:"firstName",label:"First Name",field:"firstName",sortable:!0,align:"left"},{name:"lastName",label:"Last Name",field:"lastName",sortable:!0,align:"left"},{name:"authority",label:"Account Type",field:"authority",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"}],numUsers:0,numSysAdmins:0,distributors:0,wholesalers:0,retailers:0,pharmacists:0,numActiveUsers:0,numInactiveUsers:0,numEnabledUsers:0,numDisabledusers:0,allUsers:[],selectedRow:{},authority:""}},async created(){this.setfilters(),xt.setVue(this),xt.setSettings({TBURL:Et["TB_URL"]}),this.extendedProjectName=Et["PROJECTEXTENDED"],this.authority=(await xt.whoAmILocally()).authority,"FACILITY"===this.authority&&(this.rqAuthority="FACILITY_USER"),await this.listUsers()},methods:{setfilters(t=!1){let e=(t||window.location.hash).replace(/[\/]*[#]*\//,"");switch(e){case"system/users":this.filters={},this.activeElement_="users",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"}];break;case"system/users/sys_admin":this.filters={authority:"SYS_ADMIN"},this.activeElement_="sys_admin",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Sys_Admins",icon:"settings",to:"/system/users/sys_admin"}];break;case"system/users/sys_admin":this.filters={authority:"SYS_ADMIN"},this.activeElement_="sys_admin",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Sys_Admins",icon:"settings",to:"/system/users/sys_admin"}];break;case"system/users/facilities":this.filters={authority:"FACILITY"},this.activeElement_="facilities",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Facilities",icon:"settings",to:"/system/users/facilities"}];break;case"system/users/patients":this.filters={authority:"PATIENT"},this.activeElement_="patients",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Patients",icon:"settings",to:"/system/users/patients"}];break;case"system/users/medics":this.filters={authority:"MEDIC"},this.activeElement_="medics",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Medics",icon:"settings",to:"/system/users/medics"}];break;case"system/users/employees":this.filters={authority:"FACILITY_USER"},this.activeElement_="employees",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Employees",icon:"settings",to:"/system/users/employees"}];break;case"system/users/distributors":this.filters={authority:"DISTRIBUTOR_PHARMACY"},this.activeElement_="distributors",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"distributors",icon:"settings",to:"/system/users/distributors"}];break;case"system/users/wholesalers":this.filters={authority:"WHOLESALE_PHARMACY"},this.activeElement_="wholesalers",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"wholesalers",icon:"settings",to:"/system/users/wholesalers"}];break;case"system/users/retailers":this.filters={authority:"RETAIL_PHARMACY"},this.activeElement_="retailers",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Retailers",icon:"settings",to:"/system/users/retailers"}];break;case"system/users/active":this.filters={isActive:!0},this.activeElement_="active",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Active",icon:"do_not_disturb_off",to:"/system/users/active"}];break;case"system/users/inactive":this.filters={isActive:!1},this.activeElement_="inactive",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Inactive",icon:"do_not_disturb_on",to:"/system/users/inactive"}];break;case"system/users/enabled":this.filters={enabled:!0},this.activeElement_="enabled",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Enabled",icon:"people",to:"/system/users/enabled"}];break;case"system/users/disabled":this.filters={enabled:!1},this.activeElement_="disabled",this.links=[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"},{label:"Disabled",icon:"person_off",to:"/system/users/disabled"}];break}this.listUsers()},async listUsers(){this.loadingSomethingBigger=!0;let[t,e]=await At(xt.listAllUsers(this.filters));this.loadingSomethingBigger=!1,this.allUsers=e||[],this.numUsers=this.allUsers.length,this.numSysAdmins=this.allUsers.filter((t=>"SYS_ADMIN"===t.authority)).length,this.numActiveUsers=this.allUsers.filter((t=>!0===t.isActive)).length,this.numInactiveUsers=this.allUsers.filter((t=>!1===t.isActive)).length,this.numEnabledUsers=this.allUsers.filter((t=>!0===t.enabled)).length,this.numDisabledusers=this.allUsers.filter((t=>!1===t.enabled)).length,this.medics=this.allUsers.filter((t=>"MEDIC"===t.authority)).length,this.patients=this.allUsers.filter((t=>"PATIENT"===t.authority)).length,this.facilities=this.allUsers.filter((t=>"FACILITY"===t.authority)).length,this.facilityUsers=this.allUsers.filter((t=>"FACILITY_USER"===t.authority)).length,this.plotData={"All Users":{number:this.numUsers,link:"/#/system/users",activeElementName:"users"},"SYS Admins":{number:this.numSysAdmins,link:"/#/system/users/sys_admin",activeElementName:"sys_admin"},Medics:{number:this.medics,link:"/#/system/users/medics",activeElementName:"medics"},Patients:{number:this.patients,link:"/#/system/users/patients",activeElementName:"patients"},Facilities:{number:this.facilities,link:"/#/system/users/facilities",activeElementName:"facilities"},Employees:{number:this.facilityUsers,link:"/#/system/users/employees",activeElementName:"employees"},Active:{number:this.numActiveUsers,link:"/#/system/users/active",activeElementName:"active"},Inactive:{number:this.numInactiveUsers,link:"/#/system/users/inactive",activeElementName:"inactive"},Enabled:{number:this.numEnabledUsers,link:"/#/system/users/enabled",activeElementName:"enabled"},Disabled:{number:this.numDisabledusers,link:"/#/system/users/disabled",activeElementName:"disabled"}},this.plotDataLoaded=!1,this.$nextTick((()=>this.plotDataLoaded=!0))},selectApplication(t){window.location.assign(t)},gotoPage(t){console.log(t),window.location.assign(t)},selectUser(t,e){this.selectedUser=!0,this.selectedEmail=e.email,this.selectedId="object"===typeof e.id?e.id.id:e.id,this.selectedFirstName=e.firstName,this.selectedLastName=e.lastName,this.selectedUserId=e.userId,this.selectedRow=e,console.log("SLECTED",e),this.rightSideBar=!1,this.$nextTick((()=>this.rightSideBar=!0))}},computed:{activeElement(){return this.activeElement_},cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},qt=Ut,It=s("9989"),Dt=s("6b1d"),Nt=s("24e8"),Tt=s("eaac"),Lt=s("27f9"),Pt=s("9c40"),Bt=Object(m["a"])(qt,a,i,!1,null,null,null);e["default"]=Bt.exports;C()(Bt,"components",{QPage:It["a"],QLinearProgress:Dt["a"],QDialog:Nt["a"],QCard:u["a"],QCardSection:b["a"],QTable:Tt["a"],QInput:Lt["a"],QIcon:p["a"],QBtn:Pt["a"]})},dd65:function(t,e,s){"use strict";s("edbc")},edbc:function(t,e,s){}}]);