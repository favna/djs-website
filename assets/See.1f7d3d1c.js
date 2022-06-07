import{o as t,c as s,a as u,d as g,f as L,h as f,l as B,q as a,x as p,t as b,p as w,z as m,b as T,m as y,F as v,a6 as A,s as x,u as D,e as H}from"./index.84eabf87.js";import{m as V}from"./markdown.99f8737f.js";const F={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},R=u("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m5 13l4 4L19 7"},null,-1),S=[R];function q(e,c){return t(),s("svg",F,S)}var P={name:"heroicons-outline-check",render:q};const z={key:0},E=["href"],K={key:3},O=g({props:{type:null},setup(e){const c=e,d=L(),o=f(()=>d.state.docs),n=f(()=>c.type[0]==="function"?"Function":c.type[0]),i=f(()=>{var r;return(r=o.value)!=null&&r.links[c.type[0]]?o.value.links[c.type[0]]:null});return(r,k)=>{const _=B("router-link"),l=A;return t(),s(v,null,[a(i)?typeof a(i)=="object"?(t(),b(_,{key:1,to:a(i)},{default:w(()=>[m(p(a(n)),1)]),_:1},8,["to"])):(t(),s("a",{key:2,href:a(i),target:"_blank",rel:"noopener"},[m(p(a(n))+" ",1),T(l,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,E)):(t(),s("span",z,p(a(n)),1)),e.type[1]?(t(),s("span",K,p(e.type[1]),1)):y("",!0)],64)}}});function M(e){if(Array.isArray(e))return typeof e=="string"?e:e.join("-")}const W={class:"docs-type inline-block whitespace-pre-wrap"},Y={class:"font-semibold"},G={key:0},I=g({props:{names:null,nullable:{type:Boolean},variable:{type:Boolean}},setup(e){return(c,d)=>(t(),s("div",W,[u("span",Y,p(e.nullable?"?":"")+p(e.variable?"...":""),1),Array.isArray(e.names)?(t(),s("span",G,[(t(!0),s(v,null,x(e.names,o=>(t(),b(O,{key:a(M)(o),type:o},null,8,["type"]))),128))])):y("",!0)]))}});function N(e,c){var i;const d=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/i.exec(e);d&&(e=d[1]);const o=d?d[2]:null,n=e.split(/(\.|#)/);return c.links[n[0]]?((i=n[2])!=null&&i.startsWith("event:")&&(n[2]=n[2].replace("event:","e-"),e=e.replace("event:","")),{text:o!=null?o:e,link:typeof c.links[n[0]]=="object"?{name:c.links[n[0]].name,params:c.links[n[0]].params,query:{scrollTo:n[1]?`${n[1]==="."?"s-":""}${n[2]}`:void 0}}:c.links[n[0]]}):/^https?:\/\//i.exec(e)?{text:o!=null?o:e,link:e}:{text:o!=null?o:e}}function J(e,c,d,o){if(!e)return null;const n=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/gi;let i,r="",k=0;for(;i=n.exec(e);){r+=e.slice(k,i.index);const _=N(i[0],c);if(_.link){let l;typeof _.link=="object"?(_.link.params||(_.link.params={}),_.link.params.source=o.params.source,_.link.params.tag=o.params.tag,l=d.resolve(_.link).href):l=_.link,r+=`[${_.text}](${l})`}else r+=_.text;k=i.index+i[0].length}return r?(r+=e.slice(k),r):e}const Q={class:"grid"},U={class:"overflow-x-auto lg:custom-scroll border dark:border-gray-600 rounded-md mt-3"},X={class:"!text-base !text-center !my-0 min-w-max xl:min-w-0"},Z={class:"bg-discord-blurple-500 !text-gray-200"},ee={class:"!uppercase"},te=u("th",{class:"!p-4 w-96"},"Parameter",-1),ne=u("th",{class:"!p-4 w-48"},"Type",-1),se={key:0,class:"!p-4 w-40"},oe={key:1,class:"!p-4 w-40"},le=u("th",{class:"!p-4 w-96"},"Description",-1),re={class:"!pl-2.5 !py-5"},ae={class:"!py-5"},ce={key:0,class:"!py-5"},ie=u("span",{class:"sr-only"},"True",-1),_e={key:1,class:"!py-5"},ue={key:0},de=["innerHTML"],pe=["innerHTML"],we=g({props:{parameters:null},setup(e){const c=e,d=D(),o=H(),n=L(),i=f(()=>n.state.docs),r=f(()=>c.parameters.some(l=>l.optional)),k=l=>{var $;return V(J(($=l.description)!=null?$:"No description.",i.value,d,o))},_=l=>l.optional?`<code>${l.default}</code>`:"";return(l,$)=>{const C=P;return t(),s("div",Q,[u("div",U,[u("table",X,[u("thead",Z,[u("tr",ee,[te,ne,a(r)?(t(),s("th",se,"Optional")):y("",!0),a(r)?(t(),s("th",oe,"Default")):y("",!0),le])]),u("tbody",null,[(t(!0),s(v,null,x(e.parameters,h=>(t(),s("tr",{key:h.name},[u("td",re,p(h.name),1),u("td",ae,[u("div",null,[(t(!0),s(v,null,x(h.type,j=>(t(),b(I,{key:a(M)(j),names:j,variable:h.variable,nullable:h.nullable},null,8,["names","variable","nullable"]))),128))])]),a(r)?(t(),s("td",ce,[ie,h.optional?(t(),b(C,{key:0,class:"h-5 w-5 mx-auto","aria-hidden":"true"})):y("",!0)])):y("",!0),a(r)?(t(),s("td",_e,[h.optional&&typeof h.default=="undefined"?(t(),s("em",ue,"none")):(t(),s("span",{key:1,innerHTML:_(h)},null,8,de))])):y("",!0),u("td",{class:"!pr-2.5 !py-0",innerHTML:k(h)},null,8,pe)]))),128))])])])])}}}),he={class:"break-words-legacy mt-4"},ke=m(" See also: "),ye={key:0},me=["href"],fe={key:2},be={key:1},ve=["href"],xe={key:2},Te=g({props:{see:null},setup(e){const c=e,d=L(),o=f(()=>d.state.docs),n=f(()=>{const i=new Array(c.see.length);for(let r=0;r<c.see.length;r++)i[r]=N(c.see[r],o.value);return i});return(i,r)=>{const k=B("router-link"),_=A;return t(),s("div",he,[ke,e.see.length>1?(t(),s("ul",ye,[(t(!0),s(v,null,x(a(n),l=>(t(),s("li",{key:l.text},[typeof l.link=="object"?(t(),b(k,{key:0,to:l.link},{default:w(()=>[m(p(l.text),1)]),_:2},1032,["to"])):typeof l.link=="string"?(t(),s("a",{key:1,href:l.link,target:"_blank",rel:"noopener"},[m(p(l.text)+" ",1),T(_,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,me)):(t(),s("span",fe,p(l.text),1))]))),128))])):(t(),s("span",be,[typeof a(n)[0].link=="object"?(t(),b(k,{key:0,to:a(n)[0].link},{default:w(()=>[m(p(a(n)[0].text),1)]),_:1},8,["to"])):typeof a(n)[0].link=="string"?(t(),s("a",{key:1,href:a(n)[0].link,target:"_blank",rel:"noopener"},[m(p(a(n)[0].text)+" ",1),T(_,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,ve)):(t(),s("span",xe,p(a(n)[0].text),1))]))])}}});export{we as _,Te as a,I as b,J as c,O as d,N as p,M as t};
