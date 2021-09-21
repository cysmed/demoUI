(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"682f":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg-transparent"},[i("q-table",{staticClass:"col bg-transparent",attrs:{title:"APIs",dense:"",data:e.APIs,columns:e.columns,filter:e.filter,"row-key":"index",flat:""},scopedSlots:e._u([{key:"top",fn:function(){return[i("div",{staticClass:"col-12"},[i("q-btn-toggle",{attrs:{flat:"","toggle-color":"primary",options:[{label:"All",value:"all"},{label:"Verified",value:!0},{label:"Not Verified",value:!1}]},model:{value:e.filterVerifiedTypes,callback:function(t){e.filterVerifiedTypes=t},expression:"filterVerifiedTypes"}}),i("q-btn",{attrs:{flat:""}},[i("q-icon",{attrs:{color:"primary",name:"add_circle",side:""},on:{click:function(t){e.addAPIDialog=!e.addAPIDialog}}})],1),i("q-btn",{attrs:{flat:""}},[i("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(t){return e.listDrugAPIs()}}})],1),e.addAPIDialog?e._e():i("q-input",{attrs:{label:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),i("br"),e.addAPIDialog?i("div",{staticClass:"col-12"},[i("q-form",{ref:"addAPIForm",staticClass:"q-gutter-md text-white",on:{submit:e.addAPI,reset:e.onReset}},[i("q-input",{attrs:{type:"text",label:"API",rules:[function(e){return e&&e.length>0||"Please enter API."}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addAPIForm(t)}},model:{value:e.API,callback:function(t){e.API=t},expression:"API"}}),i("div",{staticClass:"col"},[e.allowlastName?i("q-checkbox",{staticClass:"text-black",attrs:{label:"Verified","right-label":""},model:{value:e.verified,callback:function(t){e.verified=t},expression:"verified"}}):e._e()],1),i("div",[i("q-btn",{attrs:{label:e.translate("ACTIONS.SUBMIT"),type:"submit",color:"primary"}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:e.translate("ACTIONS.RESET"),type:"reset",color:"primary",flat:""}})],1)],1)],1):e._e()]},proxy:!0},{key:"body-cell-api",fn:function(t){return[i("q-td",{staticClass:"cursor-pointer",attrs:{dense:"",props:t}},[e._v("\n        "+e._s(t.row.api)+"\n        "),i("q-popup-edit",{attrs:{title:"API",buttons:""},on:{save:function(i){return e.verifyEntry(t.row)}},model:{value:t.row.api,callback:function(i){e.$set(t.row,"api",i)},expression:"props.row.api"}},[i("q-input",{attrs:{type:"text",dense:"",autofocus:""},model:{value:t.row.api,callback:function(i){e.$set(t.row,"api",i)},expression:"props.row.api"}})],1)],1)]}},{key:"body-cell-verified",fn:function(t){return[i("q-td",{staticClass:"cursor-pointer",attrs:{dense:"",props:t}},[i("div",[i("q-btn",{attrs:{icon:"delete",flat:"",color:"red"},on:{click:function(i){return e.deleteEntry(t.row)}}}),t.row.verified?i("q-icon",{attrs:{name:"done",color:"green"}}):i("span",[i("q-icon",{attrs:{name:"clear",color:"red"}}),e.allowlastName?i("q-btn",{attrs:{icon:"done",flat:"",color:"red"},on:{click:function(i){return e.verifyEntry(t.row,!0)}}}):e._e()],1)],1)])]}}])})],1)},s=[];i("ddb0"),i("5319");const{to:r}=i("1712"),l=i("ea76").default,n=i("6daa").default;var o={name:"APIs",props:["cysmed"],watch:{filterVerifiedTypes(e){this.setTypeFilter(e),this.listDrugAPIs()}},data(){return{typeFilter:!1,verified:!1,filterVerifiedTypes:"all",translate:l.translate,addAPIDialog:!1,API:null,APIs:[],filter:"",columns:[{name:"api",label:"API",field:"api",sortable:!0,align:"left"},{name:"verified",label:"Verified",field:"verified",sortable:!0,align:"left"},{name:"enteredBy",label:"Entered By",field:"enteredBy",sortable:!0,align:"left"}],allowlastName:!0}},async created(){let e=(await this.cysmed.whoAmILocally()).authority;this.allowlastName=!e.match(/PHARMACY/),this.allowlastName||this.columns.splice(-1),this.setTypeFilter(this.filterVerifiedTypes),this.listDrugAPIs()},methods:{async verifyEntry(e,t){let{apiLevelOneId:i,api:a,userId:s,verified:l}=e,n={apiLevelOneId:i,api:a,verified:t||l},o=(await this.cysmed.whoAmILocally()).userId;if(!this.allowlastName){if(l)return this.$q.notify({message:"You cannot edit a verified entry",type:"negative"});if(o!==s)return this.$q.notify({message:"You cannot edit an entry made by someone else",type:"negative"})}let[d,c]=await r(this.cysmed.editDrugAPI(n));d&&this.$q.notify({type:"negative",message:d||"Failed to update."}),this.listDrugAPIs()},async deleteEntry(e){let{apiLevelOneId:t,api:i,userId:a,verified:s}=e,l=(await this.cysmed.whoAmILocally()).userId;if(!this.allowlastName){if(s)return this.$q.notify({message:"You cannot delete a verified entry",type:"negative"});if(l!==a)return this.$q.notify({message:"You cannot delete an entry made by someone else",type:"negative"})}let[o,d]=await r(n.confirm(this,`Are you sure you want to delete ${i}?`,"Delete API"));if(o)return!1;[o,d]=await r(this.cysmed.deleteDrugAPI(t)),o&&this.$q.notify({type:"negative",message:o||"Failed to delete."}),this.listDrugAPIs()},addAPIForm(){this.$refs.addAPIForm.submit()},setTypeFilter(e){switch(e){case"all":this.typeFilter=!1;break;default:this.typeFilter={verified:e}}},async listDrugAPIs(){let[e,t]=await r(this.cysmed.listDrugAPIs(this.typeFilter));if(e)return!1;let i=t;for(let a in t){let e=t[a],i=e.authority.replace(/SYS_ADMIN/,"Cysmed").replace(/WHOLESALE_PHARMACY/,"Wholesaler").replace(/DISTRIBUTOR_PHARMACY/,"Distributor").replace(/RETAIL_PHARMACY/,"Retailer");t[a].enteredBy=`${i}: ${e.firstName} ${e.lastName}`}this.APIs=i},onReset(){this.subscriptionType="",this.months=0},async addAPI(){let{userId:e}=(await this.cysmed.whoAmILocally()).authority,[t,i]=await r(this.cysmed.addDrugAPI({api:this.API,verified:this.verified}));t?this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:this.translate(t)}):(this.category=null,this.$q.notify({textColor:"white",type:"positive",message:"API Added."}),this.onReset(),this.listDrugAPIs())}}},d=o,c=(i("c801"),i("2877")),f=i("eaac"),u=i("27f9"),p=i("0016"),y=i("6a67"),m=i("9c40"),h=i("0378"),I=i("ddd8"),A=i("8f8e"),b=i("db86"),v=i("42a1"),g=i("eebe"),w=i.n(g),P=Object(c["a"])(d,a,s,!1,null,"60650957",null);t["default"]=P.exports;w()(P,"components",{QTable:f["a"],QInput:u["a"],QIcon:p["a"],QBtnToggle:y["a"],QBtn:m["a"],QForm:h["a"],QSelect:I["a"],QCheckbox:A["a"],QTd:b["a"],QPopupEdit:v["a"]})},c801:function(e,t,i){"use strict";i("da1e")},da1e:function(e,t,i){}}]);