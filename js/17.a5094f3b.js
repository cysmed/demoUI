(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"04ac":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-transparent"},[r("q-table",{staticClass:"col bg-transparent",attrs:{title:"Drug Types",dense:"",data:e.drugCategories,columns:e.columns,filter:e.filter,"row-key":"index",flat:""},scopedSlots:e._u([{key:"top",fn:function(){return[r("div",{staticClass:"col-12"},[r("q-btn-toggle",{attrs:{flat:"","toggle-color":"primary",options:[{label:"All",value:"all"},{label:"Verified",value:!0},{label:"Not Verified",value:!1}]},model:{value:e.filterVerifiedTypes,callback:function(t){e.filterVerifiedTypes=t},expression:"filterVerifiedTypes"}}),r("q-btn",{attrs:{flat:""}},[r("q-icon",{attrs:{color:"primary",name:"add_circle",side:""},on:{click:function(t){e.addDrugTypeDialog=!e.addDrugTypeDialog}}})],1),r("q-btn",{attrs:{flat:""}},[r("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(t){return e.listDrugCategories()}}})],1),e.addDrugTypeDialog?e._e():r("q-input",{attrs:{label:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),r("br"),e.addDrugTypeDialog?r("div",{staticClass:"col-12"},[r("q-form",{ref:"addDrugTypeForm",staticClass:"q-gutter-md text-white",on:{submit:e.addDrugType,reset:e.onReset}},[r("q-input",{attrs:{type:"text",label:"Drug Type",rules:[function(e){return e&&e.length>0||"Please enter drug type."}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addDrugTypeForm(t)}},model:{value:e.drugType,callback:function(t){e.drugType=t},expression:"drugType"}}),r("div",{staticClass:"col"},[e.allowlastName?r("q-checkbox",{staticClass:"text-black",attrs:{label:"Verified","right-label":""},model:{value:e.verified,callback:function(t){e.verified=t},expression:"verified"}}):e._e()],1),r("div",[r("q-btn",{attrs:{label:e.translate("ACTIONS.SUBMIT"),type:"submit",color:"primary"}}),r("q-btn",{staticClass:"q-ml-sm",attrs:{label:e.translate("ACTIONS.RESET"),type:"reset",color:"primary",flat:""}})],1)],1)],1):e._e()]},proxy:!0},{key:"body-cell-category",fn:function(t){return[r("q-td",{staticClass:"cursor-pointer",attrs:{dense:"",props:t}},[e._v("\n        "+e._s(t.row.category)+"\n        "),r("q-popup-edit",{attrs:{title:"Drug Category",buttons:""},on:{save:function(r){return e.verifyEntry(t.row)}},model:{value:t.row.category,callback:function(r){e.$set(t.row,"category",r)},expression:"props.row.category"}},[r("q-input",{attrs:{type:"text",dense:"",autofocus:""},model:{value:t.row.category,callback:function(r){e.$set(t.row,"category",r)},expression:"props.row.category"}})],1)],1)]}},{key:"body-cell-verified",fn:function(t){return[r("q-td",{staticClass:"cursor-pointer",attrs:{dense:"",props:t}},[r("div",[r("q-btn",{attrs:{icon:"delete",flat:"",color:"red"},on:{click:function(r){return e.deleteEntry(t.row)}}}),t.row.verified?r("q-icon",{attrs:{name:"done",color:"green"}}):r("span",[r("q-icon",{attrs:{name:"clear",color:"red"}}),e.allowlastName?r("q-btn",{attrs:{icon:"done",flat:"",color:"red"},on:{click:function(r){return e.verifyEntry(t.row,!0)}}}):e._e()],1)],1)])]}}])})],1)},i=[];r("ddb0"),r("5319");const{to:s}=r("1712"),l=r("ea76").default,o=r("6daa").default;var n={name:"drugTypes",props:["cysmed"],watch:{filterVerifiedTypes(e){this.setTypeFilter(e),this.listDrugCategories()}},data(){return{typeFilter:!1,verified:!1,filterVerifiedTypes:"all",translate:l.translate,addDrugTypeDialog:!1,drugType:null,drugCategories:[],filter:"",columns:[{name:"category",label:"Category",field:"category",sortable:!0,align:"left"},{name:"verified",label:"Verified",field:"verified",sortable:!0,align:"left"},{name:"enteredBy",label:"Entered By",field:"enteredBy",sortable:!0,align:"left"}],allowlastName:!0}},async created(){let e=(await this.cysmed.whoAmILocally()).authority;this.allowlastName=!e.match(/PHARMACY/),this.allowlastName||this.columns.splice(-1),this.setTypeFilter(this.filterVerifiedTypes),this.listDrugCategories()},methods:{async verifyEntry(e,t){let{drugCategoryId:r,category:a,userId:i,verified:l}=e,o={drugCategoryId:r,category:a,verified:t||l},n=(await this.cysmed.whoAmILocally()).userId;if(!this.allowlastName){if(l)return this.$q.notify({message:"You cannot edit a verified entry",type:"negative"});if(n!==i)return this.$q.notify({message:"You cannot edit an entry made by someone else",type:"negative"})}let[d,c]=await s(this.cysmed.editDrugCategory(o));d&&this.$q.notify({type:"negative",message:d||"Failed to update."}),this.listDrugCategories()},async deleteEntry(e){let{drugCategoryId:t,category:r,userId:a,verified:i}=e,l=(await this.cysmed.whoAmILocally()).userId;if(!this.allowlastName){if(i)return this.$q.notify({message:"You cannot delete a verified entry",type:"negative"});if(l!==a)return this.$q.notify({message:"You cannot delete an entry made by someone else",type:"negative"})}let[n,d]=await s(o.confirm(this,`Are you sure you want to delete ${r}?`,"Delete Drug Category"));if(n)return!1;[n,d]=await s(this.cysmed.deleteDrugCategory(t)),n&&this.$q.notify({type:"negative",message:n||"Failed to delete."}),this.listDrugCategories()},addDrugTypeForm(){this.$refs.addDrugTypeForm.submit()},setTypeFilter(e){switch(e){case"all":this.typeFilter=!1;break;default:this.typeFilter={verified:e}}},async listDrugCategories(){let[e,t]=await s(this.cysmed.listDrugCategories(this.typeFilter));if(e)return!1;let r=t;for(let a in t){let e=t[a],r=e.authority.replace(/SYS_ADMIN/,"Cysmed").replace(/WHOLESALE_PHARMACY/,"Wholesaler").replace(/DISTRIBUTOR_PHARMACY/,"Distributor").replace(/RETAIL_PHARMACY/,"Retailer");t[a].enteredBy=`${r}: ${e.firstName} ${e.lastName}`}this.drugCategories=r},onReset(){this.subscriptionType="",this.months=0},async addDrugType(){let{userId:e}=(await this.cysmed.whoAmILocally()).authority,[t,r]=await s(this.cysmed.addDrugCategory({category:this.drugType,verified:this.verified}));t?this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:this.translate(t)}):(this.category=null,this.$q.notify({textColor:"white",type:"positive",message:"Drug Category Added."}),this.onReset(),this.listDrugCategories())}}},d=n,c=(r("dc00"),r("2877")),u=r("eaac"),y=r("27f9"),g=r("0016"),f=r("6a67"),p=r("9c40"),m=r("0378"),h=r("ddd8"),b=r("8f8e"),v=r("db86"),w=r("42a1"),C=r("eebe"),T=r.n(C),D=Object(c["a"])(d,a,i,!1,null,"ab438700",null);t["default"]=D.exports;T()(D,"components",{QTable:u["a"],QInput:y["a"],QIcon:g["a"],QBtnToggle:f["a"],QBtn:p["a"],QForm:m["a"],QSelect:h["a"],QCheckbox:b["a"],QTd:v["a"],QPopupEdit:w["a"]})},"514e":function(e,t,r){},dc00:function(e,t,r){"use strict";r("514e")}}]);