import{_ as d,o as i,c,a as t,t as r,p as _,b as u,d as m,w as p,r as g,e as f,f as x,T as j,g as h,h as $,i as o,j as y,F as A}from"./index.237e8183.js";const b=e=>(_("data-v-f36222c8"),e=e(),u(),e),I={class:"card"},k={class:"top"},C={class:"image"},S=["src"],M={class:"animal-descript"},N={class:"bottom"},V=b(()=>t("div",{id:"mapa-ubi"},null,-1)),B={props:["name","imgRoute","description","nivelPeligro","region"],setup(e){return(a,s)=>(i(),c("div",I,[t("div",k,[t("div",C,[t("img",{src:e.imgRoute,alt:""},null,8,S)]),t("div",M,[t("h2",null,r(e.name),1),t("p",null,r(e.description),1)])]),t("div",N,[V,t("ul",null,[t("li",null,"Endangered Level: "+r(e.nivelPeligro),1),t("li",null,"Region: "+r(e.region),1)])])]))}};var R=d(B,[["__scopeId","data-v-f36222c8"]]);const T=e=>(_("data-v-40cf5aab"),e=e(),u(),e),E=T(()=>t("i",{class:"fi fi-br-cross"},null,-1)),F=[E],L={class:"modal-body"},P=h("default body"),G={props:{show:Boolean},setup(e){return(a,s)=>(i(),m(j,{name:"modal"},{default:p(()=>[e.show?(i(),c("div",{key:0,class:"modal-mask",onClick:s[2]||(s[2]=l=>a.$emit("close"))},[t("div",{class:"modal-container",onClick:s[1]||(s[1]=f(()=>{},["stop"]))},[t("button",{class:"modal-default-button",onClick:s[0]||(s[0]=l=>a.$emit("close"))},F),t("div",L,[g(a.$slots,"body",{},()=>[P],!0)])])])):x("",!0)]),_:3}))}};var W=d(G,[["__scopeId","data-v-40cf5aab"]]);const X=["src"],q={props:["name","imgRoute"],setup(e){const a=$(!1);return(s,l)=>(i(),c(A,null,[(i(),m(y,{to:"body"},[o(W,{show:a.value,onClose:l[0]||(l[0]=v=>a.value=!1)},{body:p(()=>[o(R,{name:"Mexican Axolotl","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800",description:`With the scientific name Ambystoma mexicanum, it is a creature whose curious appearance earned it the name of water monster (axolotl) among the Nahuatl tribe.\r
        It is possible to find it in the canals of the city of Xochimilco, but there are fewer and fewer specimens that exist in freedom, so most of them live in aquariums throughout the world.`,nivelPeligro:"Extreme",region:"Laguna de Xochimilco"})]),_:1},8,["show"])])),t("button",{class:"img-card",onClick:l[1]||(l[1]=v=>a.value=!0)},[t("img",{src:e.imgRoute,alt:""},null,8,X),t("p",null,r(e.name),1)])],64))}};var n=d(q,[["__scopeId","data-v-aab0d79e"]]);const D={class:"grid-container"},H={setup(e){return(a,s)=>(i(),c("div",D,[o(n,{name:"Ajolote mexicano","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800"}),o(n,{name:"Ajolote mexicano","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800"}),o(n,{name:"Ajolote mexicano","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800"}),o(n,{name:"Ajolote mexicano","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800"}),o(n,{name:"Ajolote mexicano","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800"}),o(n,{name:"Ajolote mexicano","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800"}),o(n,{name:"Ajolote mexicano","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800"}),o(n,{name:"Ajolote mexicano","img-route":"https://www.24-horas.mx/wp-content/uploads/2019/11/ajolote.jpg?w=800"})]))}};var K=d(H,[["__scopeId","data-v-533f8e74"]]);const O={},w=e=>(_("data-v-07c58503"),e=e(),u(),e),z={class:"search-container"},J=w(()=>t("h1",null,[h("KNOW THE "),t("span",null,"ANIMAL")],-1)),Q=w(()=>t("div",{class:"search"},[t("form",{action:"#"},[t("input",{type:"text",placeholder:"Ajolote Mexicano",name:"search"}),t("button",null," Search ")])],-1)),U=[J,Q];function Y(e,a){return i(),c("div",z,U)}var Z=d(O,[["render",Y],["__scopeId","data-v-07c58503"]]);const ee={class:"container"},oe={setup(e){return(a,s)=>(i(),c("div",ee,[o(Z,{class:"buscador"}),o(K,{class:"animal-grid"})]))}};export{oe as default};
