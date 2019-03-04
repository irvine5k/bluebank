webpackJsonp([1],{NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"bg-grey-lighter py-4"},[t("div",{staticClass:"container m-auto flex flex-wrap items-center justify-end"},[this._m(0),this._v(" "),t("div",[t("router-link",{staticClass:"link-grey px-2 no-underline",attrs:{to:"/"}},[this._v("Transfer")]),this._v(" "),t("router-link",{staticClass:"link-grey px-2 no-underline",attrs:{to:"/deposit"}},[this._v("Deposit")]),this._v(" "),t("router-link",{staticClass:"link-grey px-2 no-underline",attrs:{to:"/withdraw"}},[this._v("Withdraw")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex-1 flex items-center"},[t("img",{staticClass:"fill-current text-indigo",attrs:{src:"https://images.vexels.com/media/users/3/146228/isolated/preview/685088eecf6250447d473e7ae3b0a5da---cone-de-gotas-de---gua-azul-by-vexels.png",width:"24",height:"24"}}),this._v(" "),t("a",{staticClass:"uppercase text-sm font-mono pl-4 font-semibold no-underline text-indigo-dark hover:text-indigo-darker",attrs:{href:"/"}},[this._v("Bluebank")])])}]},n={name:"App",components:{Header:r("VU/8")({name:"Header",methods:{setError:function(e,t){this.error=e.response&&e.response.data&&e.response.data.error||t}}},a,!1,null,null,null).exports}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header"),this._v(" "),t("router-view")],1)},staticRenderFns:[]},o=r("VU/8")(n,i,!1,null,null,null).exports,l=r("/ocq"),d={name:"Transfer",data:function(){return{id:"",recipient_id:"",amount:"",error:""}},methods:{transfer:function(){var e=this,t="/accounts/"+parseInt(this.id)+"/transfer";this.$http.plain.post(t,{recipient_id:parseInt(this.recipient_id),amount:parseInt(this.amount)}).then(function(t){return e.transferSucessful(t)}).catch(function(t){return e.transferFailed(t)})},transferSucessful:function(){response.data.csrf?(localStorage.csrf=response.data.csrf,this.error="",this.$router.replace("/home")):this.transferFailed(response)},transferFailed:function(e){this.error=e.response&&e.response.data&&e.response.data.error||"",delete localStorage.csrf}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-sm m-auto my-8"},[r("div",{staticClass:"border p-10 border-grey-light shadow rounded"},[r("h3",{staticClass:"text-2xl mb-6 text-grey-darkest"},[e._v("Transference")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.transfer(t)}}},[e.error?r("div",{staticClass:"text-red"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"label",attrs:{for:"id"}},[e._v("Id")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],staticClass:"input",attrs:{type:"id",id:"id",placeholder:"ex: 1"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),r("label",{staticClass:"label",attrs:{for:"recipient_id"}},[e._v("Recipient Id")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.recipient_id,expression:"recipient_id"}],staticClass:"input",attrs:{type:"recipient_id",id:"recipient_id",placeholder:"ex: 2"},domProps:{value:e.recipient_id},on:{input:function(t){t.target.composing||(e.recipient_id=t.target.value)}}}),e._v(" "),r("label",{staticClass:"label",attrs:{for:"amount"}},[e._v("Amount")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"input",attrs:{type:"amount",amount:"amount",placeholder:"ex: 10.00"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),e._v(" "),r("button",{staticClass:"font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green \n                hover:bg-green-dark block w-full py-4 text-white items-center justify-center",attrs:{type:"submit"}},[e._v("Transfer")])])])])])},staticRenderFns:[]},c=r("VU/8")(d,u,!1,null,null,null).exports,p={name:"Deposit",data:function(){return{id:"",amount:"",error:""}},methods:{deposit:function(){var e=this,t="/accounts/"+parseInt(this.id)+"/deposit";this.$http.plain.post(t,{amount:parseInt(this.amount)}).then(function(t){return e.depositSucessful(e.amount)}).catch(function(t){return e.depositFailed(t)})},depositSucessful:function(){response.data.csrf?(localStorage.csrf=response.data.csrf,this.error="",this.$router.replace("/home")):this.depositFailed(response)},depositFailed:function(e){this.error=e.response&&e.response.data&&e.response.data.error||"",delete localStorage.csrf}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-sm m-auto my-8"},[r("div",{staticClass:"border p-10 border-grey-light shadow rounded"},[r("h3",{staticClass:"text-2xl mb-6 text-grey-darkest"},[e._v("Deposit")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.deposit(t)}}},[e.error?r("div",{staticClass:"text-red"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"label",attrs:{for:"id"}},[e._v("Id")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],staticClass:"input",attrs:{type:"id",id:"id",placeholder:"ex: 1"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),r("label",{staticClass:"label",attrs:{for:"amount"}},[e._v("Amount")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"input",attrs:{type:"amount",amount:"amount",placeholder:"ex: 10.00"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),e._v(" "),r("button",{staticClass:"font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green \n                hover:bg-green-dark block w-full py-4 text-white items-center justify-center",attrs:{type:"submit"}},[e._v("Deposit")])])])])])},staticRenderFns:[]},h=r("VU/8")(p,m,!1,null,null,null).exports,f={name:"Withdraw",data:function(){return{id:"",amount:"",error:""}},methods:{withdraw:function(){var e=this,t="/accounts/"+parseInt(this.id)+"/withdraw";this.$http.plain.post(t,{amount:parseInt(this.amount)}).then(function(t){return e.withdrawSucessful(t)}).catch(function(t){return e.withdrawFailed(t)})},withdrawSucessful:function(){response.data.csrf?(localStorage.csrf=response.data.csrf,this.error="",this.$router.replace("/home")):this.withdrawFailed(response)},withdrawFailed:function(e){this.error=e.response&&e.response.data&&e.response.data.error||"",delete localStorage.csrf}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-sm m-auto my-8"},[r("div",{staticClass:"border p-10 border-grey-light shadow rounded"},[r("h3",{staticClass:"text-2xl mb-6 text-grey-darkest"},[e._v("Withdraw")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.withdraw(t)}}},[e.error?r("div",{staticClass:"text-red"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"label",attrs:{for:"id"}},[e._v("Id")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],staticClass:"input",attrs:{type:"id",id:"id",placeholder:"ex: 1"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),r("label",{staticClass:"label",attrs:{for:"amount"}},[e._v("Amount")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"input",attrs:{type:"amount",amount:"amount",placeholder:"ex: 10.00"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),e._v(" "),r("button",{staticClass:"font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green \n                hover:bg-green-dark block w-full py-4 text-white items-center justify-center",attrs:{type:"submit"}},[e._v("Withdraw")])])])])])},staticRenderFns:[]},_=r("VU/8")(f,v,!1,null,null,null).exports;s.a.use(l.a);var g=new l.a({mode:"history",routes:[{path:"/",name:"Transfer",component:c},{path:"/deposit",name:"Deposit",component:h},{path:"/withdraw",name:"Withdraw",component:_}]}),b=r("Rf8U"),x=r.n(b),w=r("//Fk"),C=r.n(w),y=r("Dd8w"),S=r.n(y),k=r("mtWM"),F=r.n(k),I=F.a.create({baseURL:"http://localhost:3000",withCredentials:!0,headers:{"Content-Type":"application/json"}}),N=F.a.create({baseURL:"http://localhost:3000",withCredentials:!0,headers:{"Content-type":"application/json"}});I.interceptors.request.use(function(e){var t=e.method.toUpperCase;return"OPTIONS"!==t&&"GET"!==t&&(e.headers=S()({},e.headers,{"X-CSRF-TOKEN":localStorage.csrf})),e}),I.interceptors.response.use(null,function(e){return e.response&&e.response.config&&401==e.response.status?N.post("/refresh",{},{headers:{"X-CSRF-TOKEN":localStorage.csrf}}).then(function(t){localStorage.csrf=t.data.csrf;var r=e.response.config;return r.headers["X-CSRF-TOKEN"]=localStorage.csrf,N.request(r)}).catch(function(e){return delete localStorage.csrf,location.replace("/"),C.a.reject(e)}):C.a.reject(e)});r("Q00M");s.a.config.productionTip=!1,s.a.use(x.a,{secured:I,plain:N}),new s.a({el:"#app",router:g,securedAxiosInstance:I,plainAxiosInstance:N,components:{App:o},template:"<App/>"})},Q00M:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.40529f7c216f40c68c8c.js.map