webpackJsonp([1],{0:function(t,e,n){t.exports=n("NHnr")},"D/cJ":function(t,e){t.exports={baseUrl:"/vue-tips-sample-demos/samples/vuex_transition_problem/"}},G3BA:function(t,e){},Gc3W:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};n.d(r,"SECTION_ACTION_TYPES",function(){return et}),n.d(r,"namespaced",function(){return nt}),n.d(r,"state",function(){return rt}),n.d(r,"mutations",function(){return st}),n.d(r,"actions",function(){return ot});var s=n("/5sW"),o=n("Rf8U"),c=n.n(o),i=n("mtWM"),u=n.n(i),a=n("D/cJ"),l=u.a.create({baseURL:"".concat(a["baseUrl"],"api")}),p=l,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | \n    "),n("router-link",{attrs:{to:"/problem/asc"}},[t._v("問題になる方")]),t._v(" | \n    "),n("router-link",{attrs:{to:"/expect/asc"}},[t._v("期待する方")])],1),n("router-view")],1)},_=[],f=n("XyMi");function m(t){n("G3BA")}var E=null,d=!1,S=m,h=null,T=null,x=Object(f["a"])(E,v,_,d,S,h,T),b=x.exports,C=n("/ocq"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Home")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/problem/asc"}},[t._v("問題になる方")])],1),n("li",[n("router-link",{attrs:{to:"/expect/asc"}},[t._v("期待する方")])],1)])])},R=[],N=null,w=!1,k=null,I=null,y=null,U=Object(f["a"])(N,O,R,w,k,I,y),g=U.exports,j={},$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("問題になる方：遷移前に変化する")]),n("p",[t._v("フェードアウトする前に遷移先の状態に並び替わってしまう")]),n("p",[t._v("※わかりやすさのためにフェードを遅くしている。")]),n("div",[n("router-link",{attrs:{to:"/problem/asc"}},[t._v("昇順")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/problem/desc"}},[t._v("降順")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},Q=[];function A(t){n("Gc3W")}var P,D=!1,X=A,G="data-v-4197fb2c",H=null,M=Object(f["a"])(j,$,Q,D,X,G,H),W=M.exports,J=(n("SldL"),n("7hDC")),B=n.n(J),K=n("fKPv"),L=n.n(K),Y=n("NM/j"),q=n.n(Y),F=(n("FKfb"),function(t){var e=t.moduleName,n=t.types;return Object.entries(n).reduce(function(t,n){var r=q()(n,2),s=r[0],o=r[1];return t[s]="".concat(e,"/").concat(o),t},{})}),z={ASC:"asc",DESC:"desc"},V="section",Z={SET_SECTIONS:"SET_SECTIONS"},tt={REQUEST_SECTIONS:"REQUEST_SECTIONS",REQUEST_SECTIONS_EXPECT:"REQUEST_SECTIONS_EXPECT"},et=F({moduleName:V,types:tt}),nt=!0,rt={sections:[]},st=L()({},Z.SET_SECTIONS,function(t,e){t.sections=e}),ot=(P={},L()(P,tt.REQUEST_SECTIONS,function(){var t=B()(regeneratorRuntime.mark(function t(e,n){var r,s,o,c,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,s=n.order,o=void 0===s?z.ASC:s,t.next=4,this.axios.get("/sections/".concat(o,".json")).catch(function(t){return t.response});case 4:return c=t.sent,200!==c.status?r(Z.SET_SECTIONS,[]):(i=c.data.sections,r(Z.SET_SECTIONS,i)),t.abrupt("return",c);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()),L()(P,tt.REQUEST_SECTIONS_EXPECT,function(t,e){var n=e.order,r=void 0===n?z.ASC:n;return this.axios.get("/sections/".concat(r,".json")).catch(function(t){return t.response})}),P),ct=n("NYxO");s["a"].use(ct["a"]);var it=new ct["a"].Store({modules:{section:r}});it.axios=p;var ut=it,at={beforeRouteEnter:function(){var t=B()(regeneratorRuntime.mark(function t(e,n,r){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut.dispatch(et.REQUEST_SECTIONS,{order:z.ASC});case 2:s=t.sent,s.status,r();case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),computed:{sections:function(){return this.$store.state.section.sections}}},lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("em",[t._v("昇順")]),n("ul",t._l(t.sections,function(e,r){return n("li",{key:"section-"+r},[t._v(t._s(e.number)+"章 "+t._s(e.title))])}))])},pt=[],vt=!1,_t=null,ft=null,mt=null,Et=Object(f["a"])(at,lt,pt,vt,_t,ft,mt),dt=Et.exports,St={beforeRouteEnter:function(){var t=B()(regeneratorRuntime.mark(function t(e,n,r){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut.dispatch(et.REQUEST_SECTIONS,{order:z.DESC});case 2:s=t.sent,s.status,r();case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),computed:{sections:function(){return this.$store.state.section.sections}}},ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("em",[t._v("降順")]),n("ul",t._l(t.sections,function(e,r){return n("li",{key:"section-"+r},[t._v(t._s(e.number)+"章 "+t._s(e.title))])}))])},Tt=[],xt=!1,bt=null,Ct=null,Ot=null,Rt=Object(f["a"])(St,ht,Tt,xt,bt,Ct,Ot),Nt=Rt.exports,wt={},kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("期待する方：遷移後に変化する")]),n("p",[t._v("フェードアウト後に並び替わるので期待している動きとなる。")]),n("p",[t._v("※わかりやすさのためにフェードを遅くしている。")]),n("div",[n("router-link",{attrs:{to:"/expect/asc"}},[t._v("昇順")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/expect/desc"}},[t._v("降順")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},It=[];function yt(t){n("xx7O")}var Ut=!1,gt=yt,jt="data-v-6a5b4c5c",$t=null,Qt=Object(f["a"])(wt,kt,It,Ut,gt,jt,$t),At=Qt.exports,Pt={beforeRouteEnter:function(){var t=B()(regeneratorRuntime.mark(function t(e,n,r){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut.dispatch(et.REQUEST_SECTIONS_EXPECT,{order:z.ASC});case 2:s=t.sent,r(function(t){if(200!==s.status)t.sections=[];else{var e=s.data.sections;t.sections=e}});case 4:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),data:function(){return{sections:[]}}},Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("em",[t._v("昇順")]),n("ul",t._l(t.sections,function(e,r){return n("li",{key:"section-"+r},[t._v(t._s(e.number)+"章 "+t._s(e.title))])}))])},Xt=[],Gt=!1,Ht=null,Mt=null,Wt=null,Jt=Object(f["a"])(Pt,Dt,Xt,Gt,Ht,Mt,Wt),Bt=Jt.exports,Kt={beforeRouteEnter:function(){var t=B()(regeneratorRuntime.mark(function t(e,n,r){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut.dispatch(et.REQUEST_SECTIONS_EXPECT,{order:z.DESC});case 2:s=t.sent,r(function(t){if(200!==s.status)t.sections=[];else{var e=s.data.sections;t.sections=e}});case 4:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),data:function(){return{sections:[]}}},Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("em",[t._v("降順")]),n("ul",t._l(t.sections,function(e,r){return n("li",{key:"section-"+r},[t._v(t._s(e.number)+"章 "+t._s(e.title))])}))])},Yt=[],qt=!1,Ft=null,zt=null,Vt=null,Zt=Object(f["a"])(Kt,Lt,Yt,qt,Ft,zt,Vt),te=Zt.exports;s["a"].use(C["a"]);var ee=new C["a"]({mode:"history",routes:[{path:"/",component:g},{path:"/problem",component:W,children:[{path:"asc",component:dt},{path:"desc",component:Nt}]},{path:"/expect",component:At,children:[{path:"asc",component:Bt},{path:"desc",component:te}]},{path:"*",redirect:"/"}]});s["a"].config.productionTip=!1,s["a"].use(c.a,p),new s["a"]({router:ee,store:ut,render:function(t){return t(b)}}).$mount("#app")},xx7O:function(t,e){}},[0]);
//# sourceMappingURL=app.88bfe8ff.js.map