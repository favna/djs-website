import{o as a,c as m,a as t,d as te,b as s,u as me,e as _e,f as ve,g as xe,r as H,h as y,M as u,i as B,j as ye,w as he,k as ke,l as be,n as _,m as E,p as r,q as e,F as R,s as z,t as k,v as we,x as h,y as $e,z as J,A as Ce,B as Te,C as re,D as le,V as ne,R as ie,E as de,G as Ee,H as Fe,I as Se,J as ue}from"./index.52cfe497.js";import{_ as Ve,a as Be}from"./chevron-right.315f8649.js";import{r as X,a as Z,i as ee,I as ce,D as pe,w as fe,L as ge,U as Re,G as je,$ as ze}from"./headlessui.esm.1cc49db9.js";import{S as Me}from"./Spinner.b6c1e5e1.js";const De={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Le=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m8 7l4-4m0 0l4 4m-4-4v18"},null,-1),Ue=[Le];function Ae(Q,w){return a(),m("svg",De,Ue)}var Ie={name:"heroicons-outline-arrow-narrow-up",render:Ae};const Ne={class:"fixed bottom-0 right-0 pb-4"},Ge={class:"px-6 lg:px-8"},Ke=te({setup(Q){const w=()=>{var l;return(l=document.getElementById("container"))==null?void 0:l.scrollTo({top:0,behavior:"smooth"})};return(l,f)=>{const W=Ie;return a(),m("div",Ne,[t("div",Ge,[t("button",{class:"bg-discord-blurple-500 hover:bg-discord-blurple-530 dark:hover:bg-discord-blurple-560 text-gray-200 hover:text-white rounded-md p-2 leading-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200",onClick:f[0]||(f[0]=$=>w())},[s(W,{class:"h-6 w-6"})])])])}}}),Oe={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Pe=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m5 15l7-7l7 7"},null,-1),Ye=[Pe];function qe(Q,w){return a(),m("svg",Oe,Ye)}var He={name:"heroicons-outline-chevron-up",render:qe};const Je=["aria-expanded"],Qe=t("span",{class:"sr-only"},"Open menu",-1),We={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},Xe={class:"my-5 px-2 space-y-1 z-10"},Ze={class:"pb-1"},et={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},tt=["aria-expanded"],st={class:"sr-only"},at=J(" Docs settings "),ot={class:"relative mt-1"},rt={class:"truncate"},lt={class:"truncate"},nt={class:"relative mt-1"},it={class:"truncate"},dt={class:"truncate"},ut={class:"flex justify-between px-2"},ct=J("Show privates"),pt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ft=["aria-expanded"],gt={class:"sr-only"},mt={class:"truncate"},_t={class:"truncate"},vt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ht=["aria-expanded"],bt={class:"sr-only"},xt=J(" Classes "),yt={class:"truncate"},kt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},wt=["aria-expanded"],$t={class:"sr-only"},Ct=J(" Typedefs "),Tt={class:"truncate"},Et=te({setup(Q){var I,N,G,K,O;const w=me(),l=_e(),f=ve(),$=xe(we).greater("lg"),g=H(!1),b=H(),M=y(()=>f.state.sources),F=y(()=>f.state.source),D=y(()=>f.state.tag),n=y(()=>f.state.docs),L=y(()=>f.state.branches),S=y(()=>M.value.find(d=>l.params.source===d.id)),V=H({source:(N=(I=S.value)==null?void 0:I.source)!=null?N:u,name:(K=(G=S.value)==null?void 0:G.name)!=null?K:u.name}),T=H((O=l.params.tag)!=null?O:u.defaultTag),U=y(()=>{var d,o;return B.value?(d=n.value)==null?void 0:d.classes:(o=n.value)==null?void 0:o.classes.filter(v=>v.access!=="private")}),A=y(()=>{var d,o;return B.value?(d=n.value)==null?void 0:d.typedefs:(o=n.value)==null?void 0:o.typedefs.filter(v=>v.access!=="private")});return ye(b,()=>g.value=!1),he($,()=>g.value=!1,{immediate:!0}),ke([V,T],async([d,o],[v,x])=>{if(d!==v)return T.value=d.source.defaultTag,w.push({name:"docs-source-tag-category-file",params:{source:d.source.id,tag:d.source.defaultTag,category:d.source.defaultFile.category,file:d.source.defaultFile.id}});if(o!==x)return w.push({name:"docs-source-tag-category-file",params:{source:d.source.id,tag:o,category:d.source.defaultFile.category,file:d.source.defaultFile.id}})}),(d,o)=>{var Y,q,se;const v=Ve,x=Be,P=He,j=be("router-link");return a(),m(R,null,[g.value?E("",!0):(a(),m("div",{key:0,class:_(["block fixed lg:hidden z-10 transition-transform transform-gpu",g.value?"translate-x-72 md:translate-x-80":null])},[t("button",{type:"button",class:"rounded-md rounded-l-none rounded-tr-none p-3 inline-flex items-center justify-center text-gray-200 bg-discord-blurple-600 hover:bg-discord-blurple-630 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"sidebar-menu","aria-expanded":g.value,onClick:o[0]||(o[0]=c=>g.value=!g.value)},[Qe,s(v,{class:_(["h-6 w-6",{hidden:g.value,block:!g.value}]),"aria-hidden":"true"},null,8,["class"])],8,Je)],2)),t("div",{ref_key:"sidebarElement",ref:b,class:_(["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",g.value?"translate-x-0":"-translate-x-full lg:translate-x-0"])},[t("div",We,[t("nav",Xe,[t("ul",null,[t("li",Ze,[s(e(X),{"default-open":!0},{default:r(({open:c})=>[s(e(Z),{class:"w-full focus:outline-none",tabindex:"-1"},{default:r(()=>[t("div",et,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":c},[t("span",st,h(c?"Shrink":"Expand"),1),s(v,{class:_(["inline-block",{hidden:c}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:_(["inline-block",{hidden:!c}]),"aria-hidden":"true"},null,8,["class"])],8,tt),at])]),_:2},1024),s(e(ee),{as:"ul",class:"px-2 space-y-3"},{default:r(()=>[t("li",null,[s(e(ce),{modelValue:V.value,"onUpdate:modelValue":o[1]||(o[1]=i=>V.value=i)},{default:r(({open:i})=>[t("div",ot,[s(e(pe),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:r(()=>[t("span",rt,h(V.value.name),1),i?E("",!0):(a(),k(x,{key:0})),i?(a(),k(P,{key:1})):E("",!0)]),_:2},1024),s(e(fe),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:r(()=>[(a(!0),m(R,null,z(e(M),p=>(a(),k(e(ge),{key:p.source.id,class:"cursor-default",value:p},{default:r(({active:C})=>[t("li",{class:_(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":C}])},[t("span",lt,h(p.name),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),t("li",null,[s(e(ce),{modelValue:T.value,"onUpdate:modelValue":o[2]||(o[2]=i=>T.value=i)},{default:r(({open:i})=>[t("div",nt,[s(e(pe),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:r(()=>[t("span",it,h(T.value),1),i?E("",!0):(a(),k(x,{key:0})),i?(a(),k(P,{key:1})):E("",!0)]),_:2},1024),s(e(fe),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:r(()=>[(a(!0),m(R,null,z(e(L),p=>(a(),k(e(ge),{key:p,class:"cursor-default",value:p},{default:r(({active:C})=>[t("li",{class:_(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":C}])},[t("span",dt,h(p),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),t("li",null,[s(e(Re),null,{default:r(()=>[t("div",ut,[s(e(je),{class:"mr-4 dark:text-gray-200"},{default:r(()=>[ct]),_:1}),s(e(ze),{modelValue:e(B),"onUpdate:modelValue":o[3]||(o[3]=i=>$e(B)?B.value=i:null),class:_(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",e(B)?"bg-discord-red-500":"bg-gray-500"])},{default:r(()=>[t("span",{class:_(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",e(B)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})])]),_:1})]),_:1})]),(a(!0),m(R,null,z((Y=e(n))==null?void 0:Y.custom,(c,i)=>(a(),m("li",{key:i},[s(e(X),{"default-open":!0},{default:r(({open:p})=>[s(e(Z),{class:"w-full focus:outline-none",tabindex:"-1"},{default:r(()=>[t("div",pt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":p},[t("span",gt,h(p?"Shrink":"Expand"),1),s(v,{class:_(["inline-block",{hidden:p}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:_(["inline-block",{hidden:!p}]),"aria-hidden":"true"},null,8,["class"])],8,ft),t("span",mt,h(c.name),1)])]),_:2},1024),s(e(ee),{as:"ul"},{default:r(()=>[(a(!0),m(R,null,z(c.files,(C,ae)=>{var oe;return a(),m("li",{key:ae},[s(j,{to:{name:"docs-source-tag-category-file",params:{source:(oe=e(F))==null?void 0:oe.id,tag:e(D),category:i,file:ae}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:o[4]||(o[4]=Bt=>g.value=!1)},{default:r(()=>[t("span",_t,h(typeof C=="object"?C.name:C),1)]),_:2},1032,["to"])])}),128))]),_:2},1024)]),_:2},1024)]))),128)),(q=e(U))!=null&&q.length?(a(),k(e(X),{key:0,as:"li","default-open":!0},{default:r(({open:c})=>[s(e(Z),{class:"w-full focus:outline-none",tabindex:"-1"},{default:r(()=>[t("div",vt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":c},[t("span",bt,h(c?"Shrink":"Expand"),1),s(v,{class:_(["inline-block",{hidden:c}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:_(["inline-block",{hidden:!c}]),"aria-hidden":"true"},null,8,["class"])],8,ht),xt])]),_:2},1024),s(e(ee),{as:"ul"},{default:r(()=>[(a(!0),m(R,null,z(e(U),i=>{var p;return a(),m("li",{key:i.name},[s(j,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:(p=e(F))==null?void 0:p.id,tag:e(D),class:i.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:o[5]||(o[5]=C=>g.value=!1)},{default:r(()=>[t("span",yt,h(i.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):E("",!0),(se=e(A))!=null&&se.length?(a(),k(e(X),{key:1,as:"li","default-open":!0},{default:r(({open:c})=>[s(e(Z),{class:"w-full focus:outline-none",tabindex:"-1"},{default:r(()=>[t("div",kt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":c},[t("span",$t,h(c?"Shrink":"Expand"),1),s(v,{class:_(["inline-block",{hidden:c}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:_(["inline-block",{hidden:!c}]),"aria-hidden":"true"},null,8,["class"])],8,wt),Ct])]),_:2},1024),s(e(ee),{as:"ul"},{default:r(()=>[(a(!0),m(R,null,z(e(A),i=>{var p;return a(),m("li",{key:i.name},[s(j,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:(p=e(F))==null?void 0:p.id,tag:e(D),typedef:i.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:o[6]||(o[6]=C=>g.value=!1)},{default:r(()=>[t("span",Tt,h(i.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):E("",!0)])])])],2)],64)}}}),Ft={class:"lg:flex mx-auto w-full max-w-screen-2xl"},St={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Vt=J(" Couldn't load the documentation data. "),Dt=te({setup(Q){const w=me(),l=_e(),f=ve(),{Ctrl_K:W}=Ce({passive:!1,onEventFired(n){n.ctrlKey&&n.key==="k"&&n.type==="keydown"&&n.preventDefault()}}),$=Te({[u.id]:u,main:u,[re.id]:re,[le.id]:le,[ne.id]:ne,[ie.id]:ie,[de.id]:de}),g=H(!1),b=y(()=>f.state.source),M=y(()=>f.state.tag),F=y(()=>f.state.docs);Ee(()=>{const n=document.getElementById("container");Fe(n,"scroll",()=>{n&&n.scrollTop>300?g.value=!0:g.value=!1})}),he(W,()=>{var n;(n=document.getElementById("search"))==null||n.focus()});const D=async()=>{var n,L,S,V,T,U,A,I,N,G,K,O,d,o,v,x,P,j,Y,q;if(l.path!=="/"){if(l.params.source&&l.params.tag&&(((n=F.value)==null?void 0:n.id)!==$[l.params.source].id||((L=F.value)==null?void 0:L.tag)!==l.params.tag)&&(await f.dispatch({type:"fetchDocs",inputSource:(S=$[l.params.source])!=null?S:u,inputTag:(V=l.params.tag)!=null?V:M.value}),await f.dispatch({type:"fetchTags",currentSource:(T=$[l.params.source])!=null?T:u})),l.params.source&&$[l.params.source])f.commit({type:"setSource",source:$[l.params.source]});else return w.replace({name:"docs-source-tag-category-file",params:{source:u.id,tag:u.defaultTag,category:u.defaultFile.category,file:u.defaultFile.id}});if(l.params.tag)f.commit({type:"setTag",tag:l.params.tag}),f.commit({type:"setSource",source:$[l.params.source]});else return w.replace({name:"docs-source-tag-category-file",params:{source:(A=(U=b.value)==null?void 0:U.id)!=null?A:u.id,tag:((I=b.value)==null?void 0:I.recentTag)||((N=b.value)==null?void 0:N.defaultTag),category:(K=(G=b.value)==null?void 0:G.defaultFile.category)!=null?K:u.defaultFile.category,file:(d=(O=b.value)==null?void 0:O.defaultFile.id)!=null?d:u.defaultFile.id}});if(!l.params.file&&!l.params.class&&!l.params.typedef&&l.name!=="docs-source-tag-search")return w.replace({name:"docs-source-tag-category-file",params:{source:(v=(o=b.value)==null?void 0:o.id)!=null?v:u.id,tag:(x=M.value)!=null?x:u.defaultTag,category:(j=(P=b.value)==null?void 0:P.defaultFile.category)!=null?j:u.defaultFile.category,file:(q=(Y=b.value)==null?void 0:Y.defaultFile.id)!=null?q:u.defaultFile.id}})}};return Se(()=>void D()),(n,L)=>{const S=be("router-view");return a(),m("div",null,[t("div",Ft,[s(Et),e(F)?(a(),k(S,{key:n.$route.path})):e(ue)?(a(),m("div",St,[Vt,t("pre",null,h(e(ue).toString()),1)])):(a(),k(Me,{key:2}))]),g.value?(a(),k(Ke,{key:0})):E("",!0)])}}});export{Dt as default};
