var we=Object.defineProperty,Se=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var se=(a,t,n)=>t in a?we(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,j=(a,t)=>{for(var n in t||(t={}))ke.call(t,n)&&se(a,n,t[n]);if(ne)for(var n of ne(t))Ae.call(t,n)&&se(a,n,t[n]);return a},z=(a,t)=>Se(a,Te(t));import{r as m,R as e,a as Fe,L as _,u as U,A as ie,F as $,I as D,O as q,b as Z,c as de,d as M,V as Ie,e as Oe,f as me,M as Y,H as Me,B as Pe,g as $e,C as De,P as qe,T as X,S as Ue,h as Re,i as k,j as Be,k as Le,l as je,m as H,t as I,n as ze,o as ee,p as ue,q as pe,s as Ee,D as Qe,E as he,v as ge,w as He,x as We,y as _e,z as Ve,G as Ke,J as re,K as Q,N as Xe,Q as Ge,U as Je,W as T,X as W,Y as Ye,Z as Ze,_ as et}from"./vendor.094d74d7.js";const tt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};tt();const fe=m.exports.createContext({}),at=({children:a})=>{const[t,n]=m.exports.useState(),[s,r]=m.exports.useState(""),l=u=>{n(u)},o=u=>{r(u)},c=()=>{r(""),n(void 0)};return e.createElement(fe.Provider,{value:{user:t,authToken:s,storeUser:l,storeToken:o,clean:c}},a)},R=()=>e.useContext(fe);const nt={Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:"Bearer "},N=Fe.create({baseURL:"https://virtual-assistent-backend.herokuapp.com/",headers:nt}),F={getInitialTopicsTree:async()=>N.get("/api/v1/topics"),getTopicsTreeById:async a=>N.get(`/api/v1/topics/${a}`),getTopicsTreeByNlp:async a=>N.post("/api/v1/nlp",{text:a}),login:async a=>N.post("/api/v2/auth/login",a),requestPassword:async a=>N.get(`/api/v2/auth/recoverAccess/${a}`),getTopicsTree:async a=>{var n;let t=a;return t||(t=((n=O())==null?void 0:n.token)||""),N.get("/api/v3/topics",{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${t}`}})},createQuestion:async(a,t,n,s)=>{var o;let r=a;r||(r=((o=O())==null?void 0:o.token)||"");const l={topic_id:t,description:n,answer:s};return N.post("/api/v3/questions",l,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${r}`}})},getQuestions:async a=>{var n;let t=a;return t||(t=((n=O())==null?void 0:n.token)||""),N.get("/api/v3/questions",{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${t}`}})},editQuestion:async(a,t,n,s,r)=>{var c;let l=t;l||(l=((c=O())==null?void 0:c.token)||"");const o={id:a,topic_id:n,description:s,answer:r};return N.patch(`/api/v3/questions/${a}`,o,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${l}`}})},deleteQuestion:async(a,t)=>{var s;let n=t;return n||(n=((s=O())==null?void 0:s.token)||""),N.delete(`/api/v3/questions/${a}`,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${n}`}})},getUsers:async()=>{var t;const a={headers:{Authorization:"Bearer "+((t=O())==null?void 0:t.token)}};return N.get("/api/v3/users",a)},createUser:async(a,t,n)=>{var r;const s={headers:{Authorization:"Bearer "+((r=O())==null?void 0:r.token)}};return N.post("/api/v3/users",{email:a,name:t,password:n},s)},editUser:async(a,t)=>{var s;const n={headers:{Authorization:"Bearer "+((s=O())==null?void 0:s.token)}};return N.patch(`/api/v3/users/${a}`,t,n)},deleteUser:async a=>{var n;const t={headers:{Authorization:"Bearer "+((n=O())==null?void 0:n.token)}};return N.delete(`/api/v3/users/${a}`,t)},createTopic:async(a,t,n)=>{var o;let s=a;s||(s=((o=O())==null?void 0:o.token)||"");const r={name:t},l=n?`/${n}`:"";return N.post(`/api/v3/topics${l}`,r,{headers:{Accept:"application/json, text/plain, */*",Authorization:`Bearer ${s}`}})},deleteTopic:async(a,t)=>{var s;let n=t;return n||(n=((s=O())==null?void 0:s.token)||""),N.delete(`/api/v3/topics/${a}`,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${n}`}})}},st=a=>{window.sessionStorage.setItem("AUTH",JSON.stringify(a))},O=()=>{const a=window.sessionStorage.getItem("AUTH");return a?JSON.parse(a):null},rt=()=>{window.sessionStorage.removeItem("AUTH")};var ot="/assets/logo-ic-ufba.d4b7fcf3.png",lt="/assets/logo-icia-vertical.dc3a2a24.svg";function te({children:a}){return e.createElement("div",{className:`auth-container d-flex flex-column overflow-auto justify-content-start\r
                 justify-content-sm-center align-items-center p-3 p-md-4 min-vh-100 w-100`},e.createElement("div",{className:"shadow-sm rounded bg-white w-100 p-3"},e.createElement("div",{className:"px-3 pt-3 pb-4"},e.createElement(_,{to:"/",className:"logo d-flex mx-auto mb-4 align-items-end justify-content-center"},e.createElement("div",{className:"d-flex",style:{width:"60%"}},e.createElement("img",{src:lt,alt:"Logomarca ICIA",className:"w-100"})),e.createElement("div",{className:"d-flex pl-3",style:{width:"38%"}},e.createElement("img",{src:ot,alt:"Logo Computa\xE7\xE3o Ufba",className:"w-100"}))),a)),e.createElement("div",{className:"w-100 mt-2 text-center text-white"},"\xA9 Todos os direitos reservados."))}function ct(){const a=U(),[t,n]=e.useState(!1),[s,r]=e.useState(!1),[l,o]=e.useState(!1),[c,u]=e.useState({email:"",password:"",showPassword:!1}),{storeUser:h,storeToken:d}=R(),i=w=>b=>{u(z(j({},c),{[w]:b.target.value})),r(!1)},p=()=>{u(z(j({},c),{showPassword:!c.showPassword}))},f=w=>{w.preventDefault()},P=w=>{w.preventDefault(),!!c.email||!!c.email?(o(!0),F.login(c).then(b=>b.data).then(b=>{var A,x;if(b.status==="Success"){const S=(A=b.data)==null?void 0:A.user;h(S),d((x=b.data)==null?void 0:x.token),st(b.data),a("/dashboard")}o(!1)}).catch(b=>{o(!1),n(!0),r(!0),u(z(j({},c),{password:""}))})):r(!0)};return e.createElement(te,null,t?e.createElement(ie,{severity:"error"},"Seu e-mail ou senha n\xE3o correspondem aos nossos registros."):null,e.createElement("form",{onSubmit:P,action:"#"},e.createElement($,{variant:"outlined",error:s,fullWidth:!0,margin:"normal"},e.createElement(D,{htmlFor:"email"},"E-mail"),e.createElement(q,{id:"email",type:"email",value:c.email,onChange:i("email"),label:"E-mail"}),s?e.createElement(Z,{id:"e-mail-error-text"},c.email?"E-mail ou senha incorreto.":"Campo obrigat\xF3rio."):null),e.createElement($,{variant:"outlined",error:s,fullWidth:!0,margin:"normal"},e.createElement(D,{htmlFor:"password"},"Senha"),e.createElement(q,{id:"password",type:c.showPassword?"text":"password",value:c.password,onChange:i("password"),endAdornment:e.createElement(de,{position:"end"},e.createElement(M,{"aria-label":"toggle password visibility",onClick:p,onMouseDown:f,edge:"end"},c.showPassword?e.createElement(Ie,null):e.createElement(Oe,null))),label:"Senha"}),s?e.createElement(Z,{id:"password-error-text"},c.password?"E-mail ou senha incorreto.":"Campo obrigat\xF3rio."):null),e.createElement("div",{className:"d-flex mb-3 justify-content-end"},e.createElement(_,{to:"/request-password",id:"request-password__button"},"Esqueceu sua senha?")),e.createElement(me,{id:"submitt-button",type:"submit",loading:l,variant:"contained",className:"mb-3",disableElevation:!0,fullWidth:!0},"Entrar")))}function it(){const[a,t]=e.useState(!1),[n,s]=e.useState(!1),[r,l]=e.useState(!1),[o,c]=e.useState({email:""}),u=d=>i=>{c(z(j({},o),{[d]:i.target.value})),r&&l(!1),n&&s(!1)},h=async d=>{d.preventDefault();const i=o.email;if(i){t(!0);try{const p=await F.requestPassword(i);console.log(p)}catch(p){console.log(p)}t(!1),s(!0)}else l(!0)};return e.createElement(te,null,e.createElement("form",{onSubmit:h,action:"#"},n?e.createElement(ie,{severity:"success"},"Se o e-mail ",e.createElement("b",null,o.email)," estiver cadastrado, voc\xEA receber\xE1 instru\xE7\xF5es para recuperar sua senha."):null,e.createElement($,{variant:"outlined",error:r,fullWidth:!0,margin:"normal",className:"mb-4"},e.createElement(D,{htmlFor:"email"},"E-mail"),e.createElement(q,{id:"email",type:"email",value:o.email,onChange:u("email"),label:"E-mail"}),r?e.createElement(Z,{id:"e-mail-error-text"},"Campo obrigat\xF3rio."):null),e.createElement(me,{id:"submitt-button",type:"submit",loading:a,variant:"contained",className:"mb-3",disableElevation:!0,fullWidth:!0},"Enviar")),e.createElement(_,{to:"/login"},"Fazer login")," em vez disso.")}function dt(){return e.createElement(te,null,e.createElement("p",null,"request-password works!"))}function mt({handleSidebarOptionClick:a}){const[t,n]=m.exports.useState(!1),[s,r]=m.exports.useState(null),l=h=>{console.log("Aqui"),r(h.currentTarget)},o=()=>{r(null)},c=Boolean(s),u=c?"learn-more-popover":void 0;return e.createElement("aside",{className:"d-none d-sm-flex flex-column align-items-center border-right border-info h-100"},e.createElement(Y,{title:"Reiniciar",placement:"right"},e.createElement(M,{"aria-label":"home",onClick:()=>a("home")},e.createElement(Me,null))),e.createElement(Y,{title:t?"Modo claro":"Modo escuro",placement:"right"},e.createElement(M,{"aria-label":"theme-mode",onClick:()=>{n(!t),a("mode")}},t?e.createElement(Pe,null):e.createElement($e,null))),e.createElement(Y,{title:"Saia mais",placement:"right"},e.createElement(M,{onClick:l,"aria-describedby":u},e.createElement(De,null))),e.createElement(qe,{id:u,open:c,anchorEl:s,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},e.createElement(X,{sx:{p:2}},'O ICIA \xE9 um sistema de "BOT" com o objetivo de responder as d\xFAvidas relacionadas ao Instituto de Computa\xE7\xE3o (IC) da UFBA, especialmente dos cursos de gradua\xE7\xE3o e p\xF3s-gradua\xE7\xE3o do PGCOMP.',e.createElement("br",null),e.createElement("br",null),"O aplicativo foi desenvolvido por discentes de cursos de gradua\xE7\xE3o e p\xF3s-gradua\xE7\xE3o vinculados ao PGCOMP, sob a orienta\xE7\xE3o do Prof. Dr. Frederico Dur\xE3o, referente a disciplina T\xF3picos em Sistemas de Informa\xE7\xE3o e Web I no semestre letivo de 2022.1.")))}function ut({generateMessegesOnFormSubmit:a}){const[t,n]=e.useState(""),s=()=>l=>{l.preventDefault(),a(t),n("")},r=()=>l=>{n(l.target.value)};return e.createElement("div",{className:"chat-input-container rounded-pill border border-info position-relative overflow-hidden w-100"},e.createElement("form",{onSubmit:s()},e.createElement("input",{type:"text",className:"py-2 pl-4 pr-5 w-100 border-0",onChange:r(),placeholder:"Digite algo",value:t}),e.createElement("div",{className:"position-absolute"},e.createElement(M,{type:"submit","aria-label":"cached",disabled:!t.length},e.createElement(Ue,null)))))}var ve="/assets/icon-icia.06ab72ef.svg";function oe({items:a,handleItemSelection:t}){const[n,s]=m.exports.useState(),r=o=>{s(o.id),t(o)},l=o=>o.description!==void 0;return e.createElement(e.Fragment,null,a!=null&&a.length?e.createElement("div",{className:"chat-items"},a.map(o=>e.createElement("button",{type:"button",key:o.id,onClick:()=>r(o),title:l(o)?o.description:o.name,className:`chat-item-option d-block rounded-pill bg-info text-dark py-2 px-3 mt-3 border-0${n===o.id?" selected":""}`},e.createElement("span",null,l(o)?o.description:o.name)))):null)}function le({children:a,questions:t,side:n,text:s,topics:r,generateMessegesForTopicSelection:l,generateMessegesForQuestionSelection:o}){const c=d=>{typeof l=="function"&&u(d)&&l(d),typeof o=="function"&&h(d)&&o(d)},u=d=>d.name!==void 0,h=d=>d.description!==void 0;return e.createElement("div",{className:`chat-message d-flex ${n} w-100`},e.createElement("div",{className:"chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center"},n==="left"?e.createElement("img",{src:ve,className:"h-auto",alt:"assistente chatbot"}):e.createElement(Re,null,"person")),e.createElement("div",{className:"chat-ballon py-3 px-4"},s!=null&&s.length?e.createElement("h3",{className:"font-weight-normal mb-0"},s.trim().split(" ").map((d,i)=>d.includes("://")?e.createElement(e.Fragment,null,"\xA0",e.createElement("a",{target:"_blank",className:"text-white",href:d,rel:"noreferrer",key:i},d)):e.createElement("span",{key:i}," ",d))):null,a,e.createElement(oe,{items:r,handleItemSelection:c}),t!=null&&t.length?e.createElement("div",{className:"d-block w-100"},e.createElement(oe,{items:t,handleItemSelection:c})):null,e.createElement("div",null)))}function pt(){return e.createElement("div",{className:"d-flex align-items-center typing"},e.createElement("div",{className:"dot"}),e.createElement("div",{className:"dot"}),e.createElement("div",{className:"dot"}))}var Et="/assets/icon-ic-ufba.2625d738.png",ht="/assets/logo-icia-horizontal-text-white.dc2df070.svg";function be({children:a}){return e.createElement("header",{className:"d-flex align-items-center justify-content-start w-100 app-header px-3 position-relative shadow-sm"},e.createElement("img",{"data-testid":"logo1",src:ht,className:"app-logo d-none d-sm-block",alt:"logo"}),e.createElement("img",{"data-testid":"logo2",src:ve,className:"app-logo d-block d-sm-none",alt:"logo"}),e.createElement("img",{"data-testid":"logo3",src:Et,className:"app-logo ml-4",alt:"logo"}),e.createElement("h1",{className:"app-computacao mb-0 ml-2 font-weight-normal text-white d-none d-sm-block"},"computa\xE7\xE3o",e.createElement("br",null),e.createElement("span",null,"UFBA")),e.createElement("div",{className:"flex-fill"}),a)}function gt(){const a=m.exports.useRef(null),[t,n]=m.exports.useState(0),[s,r]=m.exports.useState([]),[l,o]=m.exports.useState(!0),[c,u]=m.exports.useState(!1);let h=U();const d=["Agora escolha uma op\xE7\xE3o :)","Escolha mais uma op\xE7\xE3o abaixo.","Quase l\xE1, selecione uma op\xE7\xE3o.","Veja algumas op\xE7\xF5es que encontrei :)"];m.exports.useEffect(()=>{F.getInitialTopicsTree().then(E=>{const v=A(E.data);o(!1),t>0&&r([]),r([{text:t===0?"Ol\xE1, eu sou a Icia. Como posso te ajudar hoje?":"Ok... vamos tentar de novo. Como posso te ajudar hoje?",side:"left",topics:v}])}),t===0&&i()},[t]);const i=()=>{a&&a.current.addEventListener("DOMNodeInserted",E=>{const v=E.currentTarget;v.scroll({top:v.scrollHeight,behavior:"smooth"})})},p=E=>{switch(E){case"home":n(1+t);break;case"mode":u(!c);break;default:alert("N\xE3o implementado!")}},f=async E=>{const v=[...s,{text:E.name,side:"right"}];r(v),o(!0);const B=(await F.getTopicsTreeById(E.id)).data.find(Boolean),L=A(B.children),K=B.questions;v.push({text:d[Math.floor(Math.random()*d.length)],side:"left",topics:L,questions:K}),o(!1),r(v)},P=async E=>{const v=[...s,{text:E.description,side:"right"},{text:E.answer,side:"left"}];r(v)},w=async E=>{const v=[...s,{text:E,side:"right"}];if(r(v),b(E)){n(t+1);return}o(!0);try{const y=await F.getTopicsTreeByNlp(E);if(!y.data)throw new Error("no content");const B=S(y.data[0])?y.data:[],L=x(y.data[0])?y.data:[];v.push({text:d[Math.floor(Math.random()*d.length)],side:"left",topics:L,questions:B})}catch{v.push({text:"Ohh, n\xE3o... N\xE3o encontrei uma resposta para a sua pergunta.           Tente pesquisar com outro termo ou utilizar as op\xE7\xF5es do menu :(",side:"left"})}o(!1),r(v)},b=E=>{const v=new RegExp(/^exit|menu|clear|limpar|sair|out$/),y=E.trim().toLowerCase();return v.test(y)},A=E=>E===void 0?[]:E.filter(y=>!!y.name.length).map(y=>({id:y.id,name:y.name})),x=E=>E.name!==void 0,S=E=>E.description!==void 0;return e.createElement("div",{className:"chatbot d-block w-100"+(c?" dark":"")},e.createElement("div",{className:"d-block min-vh-100 vh-100 w-100 mx-auto"},e.createElement(be,null,e.createElement(k,{id:"login-button",type:"button",variant:"contained",color:"secondary",disableElevation:!0,onClick:()=>{h("/login")}},"Login")),e.createElement("div",{className:"chat-container d-flex"},e.createElement(mt,{handleSidebarOptionClick:p}),e.createElement("main",{className:"d-flex flex-column flex-fill"},e.createElement("div",{ref:a,className:"chat-content d-flex flex-column flex-fill w-100 mw-100 p-3"},s.map((E,v)=>e.createElement(le,{key:v,text:E.text,side:E.side,topics:E.topics,questions:E.questions,generateMessegesForTopicSelection:f,generateMessegesForQuestionSelection:P})),l?e.createElement(le,{side:"left"},e.createElement(pt,null)):null),e.createElement("div",{className:"chat-toolbar d-flex align-items-center border-top border-info px-3"},e.createElement(ut,{generateMessegesOnFormSubmit:w}))))))}const xe=Be({palette:{primary:{light:"#72C3E6",main:"#72C3E6",dark:"#72C3E6",contrastText:"#FFF"},secondary:{light:"#F9D055",main:"#F9D055",dark:"#F9D055",contrastText:"#FFF"}},typography:{fontFamily:["IBM Plex Sans","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),ft=[{id:"question-link",icon:a=>e.createElement(Le,{htmlColor:a}),name:"Perguntas",path:"/dashboard/questions",isSelected:!1},{id:"users-link",icon:a=>e.createElement(je,{htmlColor:a}),name:"Usu\xE1rios",path:"/dashboard/users",isSelected:!1}],vt=()=>e.createElement("nav",{id:"container"},ft.map(a=>{const t=window.location.pathname.includes(a.path);return e.createElement(_,{"data-testid":a.id,to:a.path,key:a.id},e.createElement("div",{className:"menu-option"},e.createElement("i",{className:"menu-icon"},a.icon(t?xe.palette.secondary.main:"")),e.createElement("span",{className:t?"is-selected":""},a.name)))}));function V({children:a}){const{clean:t,user:n}=R(),s=U(),r=H().state,l=H().pathname,o=r==null?void 0:r.message;return m.exports.useEffect(()=>{o&&(I[o.type](o.text),history.replaceState({message:null},""))},[]),e.createElement("div",{className:"app"},e.createElement(be,null,e.createElement(k,{id:"profile-edit",startIcon:e.createElement(ze,null),type:"button",variant:"contained",color:"secondary",disableElevation:!0,onClick:()=>{l!=="/dashboard/users/edit"&&l!=="/dashboard/users/create"&&s("/dashboard/users/edit",{state:n})}},n==null?void 0:n.name),e.createElement(_,{to:"/",target:"_blank"},e.createElement(k,{id:"chat-button",type:"button",variant:"contained",color:"secondary",disableElevation:!0},"Chat")),e.createElement(k,{id:"logout-button",type:"button",variant:"contained",color:"secondary",disableElevation:!0,onClick:()=>{rt(),t(),s("/login",{replace:!0})}},"Sair")),e.createElement("div",{id:"admin-container",className:"d-flex"},e.createElement(vt,null),e.createElement("main",{id:"admin-content"},a)))}const ye=({description:a,answer:t,isEdit:n,handleSubmit:s,handleQuestionChange:r,handleAnswerChange:l})=>e.createElement("form",{onSubmit:s,className:"formContainer"},e.createElement($,{className:"mt-4",variant:"outlined",fullWidth:!0,color:"secondary"},e.createElement(D,{htmlFor:"input-question"},"Pergunta"),e.createElement(q,{id:"input-question",type:"text",placeholder:"Digite a pergunta",value:a,onChange:o=>r(o.target.value),label:"Pergunta"})),e.createElement("div",{className:" mb-2"},e.createElement($,{className:"mt-4",variant:"outlined",color:"secondary",fullWidth:!0},e.createElement(D,{htmlFor:"input-answer"},"Resposta"),e.createElement(q,{id:"input-answer",type:"text",placeholder:"Digite a resposta",value:t,onChange:o=>l(o.target.value),label:"Resposta"}))),n?e.createElement(k,{variant:"contained",color:"secondary",type:"submit","data-testid":"submit-button"},"EDITAR"):e.createElement(k,{variant:"contained",color:"secondary",type:"submit","data-testid":"submit-button"},"CADASTRAR")),bt=()=>{const a=U(),[t,n]=m.exports.useState(""),[s,r]=m.exports.useState(""),{authToken:l}=R(),{topicId:o,topicName:c}=H().state,u=i=>{r(i)},h=i=>{n(i)},d=i=>{i.preventDefault(),F.createQuestion(l,o,t,s).then(p=>p.data).then(p=>{console.log(p),a("/dashboard/questions",{state:{message:{type:"success",text:"Pergunta adicionada com sucesso!"}}})}).catch(p=>{})};return e.createElement(V,null,e.createElement("div",{className:"d-flex align-items-center mt-2"},e.createElement(M,{className:"mr-3 ml-3","aria-label":"Voltar",component:"span",onClick:()=>{a(-1)}},e.createElement(ee,null)),e.createElement("span",{className:"title"},"Cadastrar Pergunta em ",c)),e.createElement(ye,{description:t,answer:s,handleSubmit:d,handleAnswerChange:u,handleQuestionChange:h}))},xt=()=>{const{id:a,topic_id:t,topicName:n,description:s,answer:r}=H().state,l=U(),[o,c]=m.exports.useState(s),[u,h]=m.exports.useState(r),{authToken:d}=R(),[i,p]=m.exports.useState(!1),{pathname:f}=H(),P=f.includes("edit"),w=x=>{h(x)},b=x=>{c(x)},A=x=>{x.preventDefault(),p(!0),F.editQuestion(a,d,t,o,u).then(S=>S.data).then(S=>{p(!1),l("/dashboard/questions",{state:{message:{type:"success",text:"Pergunta editada com sucesso!"}}})}).catch(S=>{I.error("Ocorreu um erro"),p(!1)})};return e.createElement(V,null,i&&e.createElement(ue,{variant:"indeterminate"}),e.createElement("div",{className:"d-flex align-items-center mt-2"},e.createElement(M,{className:"mr-3 ml-3","aria-label":"Voltar",component:"span",onClick:()=>{l(-1)}},e.createElement(ee,null)),e.createElement("span",{className:"title"},"Editar Pergunta",n)),e.createElement(ye,{description:o,answer:u,handleSubmit:A,handleAnswerChange:w,handleQuestionChange:b,isEdit:P}))};function yt({isOpen:a,onClose:t,onConfirm:n,parentId:s}){const[r,l]=m.exports.useState(""),[o,c]=m.exports.useState(""),u=s?"subategoria":"categoria",{authToken:h}=R(),d=i=>{if(i.preventDefault(),c(""),r===""){c(`Adicione o nome da ${u}`);return}F.createTopic(h,r,s).then(p=>p.data).then(p=>{n(),console.log(p),l(""),I.success("Categoria adicionada com sucesso.")}).catch(p=>{console.log(p),I.error("Houve um erro ao adicionar a categoria.")})};return e.createElement("div",null,e.createElement(pe,{open:a,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},e.createElement(Ee,{className:"create-modal-box"},e.createElement(X,{id:"modal-modal-title",variant:"h6",component:"h2"},"Adicionar ",u),e.createElement("form",{onSubmit:d},e.createElement($,{className:"mt-4",variant:"outlined",fullWidth:!0,color:"secondary"},e.createElement(D,{htmlFor:"topic"},"Nome"),e.createElement(q,{id:"topic",type:"text",value:r,color:"secondary",onChange:i=>l(i.target.value),placeholder:`Digite a ${u}`,label:"Nome"}),e.createElement("small",{className:"text-danger"},o),e.createElement("div",{className:"create-modal-footer"},e.createElement(k,{variant:"contained",color:"secondary",type:"submit","data-testid":"confirm-button"},"Adicionar"),e.createElement(k,{variant:"outlined",onClick:()=>{c(""),t()},className:"ml-2"},"Cancelar")))))))}function ae({title:a,text:t,isOpen:n,handleClose:s,handleConfirm:r}){return m.exports.createElement("div",null,m.exports.createElement(pe,{open:n,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},m.exports.createElement(Ee,{className:"modal-box"},m.exports.createElement(X,{id:"modal-modal-title",variant:"h6",component:"h2"},a),m.exports.createElement(X,{id:"modal-modal-description",sx:{mt:2}},t),m.exports.createElement("div",{className:"modal-footer"},m.exports.createElement(k,{variant:"contained",color:"warning",onClick:r,"data-testid":"confirm-button"},"Sim"),m.exports.createElement(k,{variant:"outlined",onClick:s,className:"ml-2"},"N\xE3o")))))}function Ct({questions:a,removeQuestion:t}){const n=U(),{authToken:s}=R(),[r,l]=e.useState(!1),[o,c]=e.useState(),u=f=>{const{id:P,topic_id:w,description:b,answer:A,parents:x}=f;let S=w;!S&&x&&(S=x[x.length-1].id),n("edit",{state:{id:P,topic_id:S,description:b,answer:A}})},h=f=>{F.deleteQuestion(f,s).then(P=>{P.data.status==="Success"?(t&&t(f),I.success("Pergunta exclu\xEDda com sucesso!")):I.error("Houve um erro ao excluir a pergunta."),i()})},d=f=>{c(f),l(!0)},i=()=>{c(void 0),l(!1)},p=[{field:"description",headerName:"Pergunta",flex:4},{field:"answer",headerName:"Resposta",flex:4},{field:"id",headerName:"A\xE7\xF5es",renderCell:f=>e.createElement(e.Fragment,null,e.createElement(ae,{title:"Excluir Pergunta",text:"Tem certeza que deseja excluir essa pergunta?",isOpen:r&&o===f.row.id,handleClose:i,handleConfirm:()=>h(o)}),e.createElement(M,{"aria-label":"Editar","data-testid":"edit-button",component:"span",onClick:()=>u(f.row)},e.createElement(he,null)),e.createElement(M,{"data-testid":"delete-button","aria-label":"Deletar",component:"span",onClick:()=>{d(f.row.id)}},e.createElement(ge,null)))}];return e.createElement("div",{style:{height:"80vh",width:"100%"}},e.createElement(Qe,{rows:a||[],columns:p,pageSize:15,rowsPerPageOptions:[],disableSelectionOnClick:!0}))}function Nt(){const[a,t]=m.exports.useState([]),[n,s]=m.exports.useState([]),[r,l]=m.exports.useState([]),[o,c]=m.exports.useState([]),[u,h]=m.exports.useState(""),[d,i]=m.exports.useState(0),[p,f]=m.exports.useState(!1),[P,w]=m.exports.useState(!1),[b,A]=m.exports.useState(!1),x=U(),{authToken:S}=R(),{getTopicsTree:E,getQuestions:v,deleteTopic:y}=F,B=()=>{f(!1)},L=()=>{w(!1)},K=()=>{s([]),c(r),h(""),i(0),t([])},Ce=g=>{A(!0),y(g,S).then(C=>C==null?void 0:C.data).then(C=>{console.log(C),C.status==="Success"?(I.success("Categoria exclu\xEDda com sucesso!"),G()):(console.log(C),I.error("Aconteceu um erro ao excluir a categoria."))}).catch(C=>{console.log(C),I.error("Aconteceu um erro ao excluir a categoria.")}).finally(()=>{A(!1),B()})},Ne=g=>{t(C=>C.filter(J=>J.id!==g))};m.exports.useEffect(()=>{d===0&&v(S).then(g=>{t(g.data)})},[d]);const G=e.useCallback(()=>{A(!0),E(S).then(g=>{K(),c(g.data||[]),l(g.data||[])}).finally(()=>A(!1))},[E,c,l]);return m.exports.useEffect(()=>{G()},[]),e.createElement(V,null,b&&e.createElement(ue,{variant:"indeterminate"}),e.createElement("div",{className:"d-flex justify-content-between align-items-center pr-5"},e.createElement("div",{className:"title-container"},e.createElement("h2",{className:"title"},"Perguntas por categoria")),e.createElement(yt,{isOpen:P,onClose:L,parentId:d,onConfirm:()=>{L(),G()}}),u&&e.createElement(e.Fragment,null,e.createElement(ae,{title:"Excluir Pergunta",text:`Tem certeza que deseja excluir a categoria ${u}?`,isOpen:p,handleClose:B,handleConfirm:()=>Ce(d)}),e.createElement("div",null,e.createElement(k,{variant:"contained",color:"warning","data-testid":"remove-category-button",onClick:()=>{f(!0)}},"Excluir")))),e.createElement("div",{className:"questions-container"},e.createElement("div",{className:"breadcrumb-container"},d!==0?e.createElement("span",null,e.createElement("button",{className:"breadcrumb-item",onClick:()=>{K()}},"Inicio")," > "):e.createElement("span",null,"Inicio"),n.map((g,C)=>C!==n.length-1?e.createElement("span",{key:g.id},e.createElement("button",{className:"breadcrumb-item",onClick:()=>{s(J=>J.slice(0,C+1)),c(g.children),h(g.name),i(g.id),t(g.questions)}},g.name)," > "):e.createElement(e.Fragment,null,g.name))),o.map(g=>g.name===""?null:e.createElement("button",{key:g.id,className:"filter-question-button",onClick:()=>{t(g.questions),s(C=>[...C,g]),c(g.children),h(g.name),i(g.id)}},g.name)),e.createElement(k,{className:"add-category-button",variant:"contained",onClick:()=>w(!0)},"+ Categoria"),e.createElement("div",{className:"mt-3"},u&&e.createElement(e.Fragment,null,e.createElement("h3",null," ",`Perguntas categoria ${u}`),e.createElement("br",null),e.createElement("div",null,e.createElement(k,{variant:"contained","data-testid":"add-question-button",onClick:()=>{x("/dashboard/questions/create",{state:{topicId:d,topicName:u}})}},"ADICIONAR")))),e.createElement("div",{id:"questions-container"},e.createElement(Ct,{questions:a,removeQuestion:Ne}))))}function ce(){const{clean:a,user:t}=R(),n=U(),{id:s,name:r,email:l,password:o}=H().state,[c,u]=e.useState({email:l||"",name:r||"",password:""}),h=i=>p=>{u(z(j({},c),{[i]:p.target.value}))},d=i=>{if(i.preventDefault(),s){const p={email:c.email,name:c.name};c.password&&(p.password=c.password),F.editUser(s,p).then(f=>f.data).then(f=>{n("/dashboard/users",{state:{message:{type:"success",text:`${c.name} editado com sucesso!`}}})}).catch(f=>{I.error(`Houve um erro ao editar ${c.name}.`),console.log(f)})}else F.createUser(c.email,c.name,c.password).then(p=>p.data).then(p=>{n("/dashboard/users",{state:{message:{type:"success",text:"Convite enviado com sucesso!"}}})}).catch(p=>{I.error("Houve um erro ao convidar usu\xE1rio."),console.log(p)})};return e.createElement(V,null,e.createElement("div",{className:"user-container title-container"},e.createElement(M,{"aria-label":"Voltar",component:"span",onClick:()=>{n("/dashboard/users")}},e.createElement(ee,null)),e.createElement("h2",null,s?"Editar Usu\xE1rio":"Cadastrar Usu\xE1rio")),e.createElement("div",{className:"user-container"},e.createElement("form",{onSubmit:d,action:"#"},e.createElement($,{color:"secondary",variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(D,{htmlFor:"text"},"Nome"),e.createElement(q,{id:"name",type:"text",value:c.name,onChange:h("name"),label:"Nome"})),e.createElement($,{color:"secondary",variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(D,{htmlFor:"text"},"E-mail"),e.createElement(q,{id:"email",type:"email",value:c.email,onChange:h("email"),label:"E-mail"})),e.createElement($,{variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(D,{hidden:!s||!!s&&s!==(t==null?void 0:t.id),color:"secondary",htmlFor:"text"},"Senha"),e.createElement(q,{id:"password",hidden:!s||!!s&&s!==(t==null?void 0:t.id),type:"text",value:c.password,onChange:h("password"),label:"Senha",color:"secondary"})),e.createElement(k,{type:"submit","data-testid":"submit-button",variant:"contained",color:"secondary",disableElevation:!0},s?"Enviar":"Convidar"))))}function wt(){const a=U(),[t,n]=m.exports.useState([]),[s,r]=m.exports.useState(!1),[l,o]=m.exports.useState(),c=i=>{F.deleteUser(i).then(()=>{I.success("Usu\xE1rio exclu\xEDdo com sucesso!"),d()}).catch(p=>{I.error("Houve um erro ao excluir o usu\xE1rio")})},u=i=>{o(i),r(!0)},h=()=>{o(void 0),r(!1)},d=()=>{F.getUsers().then(i=>{n(i.data)})};return m.exports.useEffect(()=>{d()},[]),e.createElement(V,null,e.createElement("div",{className:"user-container title-container"},e.createElement("h2",null,"Usu\xE1rios Cadastrados"),e.createElement(k,{"data-testid":"add_user-button",variant:"outlined",color:"secondary",onClick:()=>{a("/dashboard/users/create",{state:{id:"",name:"",email:""}})}},"CRIAR NOVO")),e.createElement("div",{className:"user-container",style:{display:"none"}},e.createElement(He,{id:"search",label:"Pesquisar",InputProps:{startAdornment:e.createElement(de,{position:"start"},e.createElement(We,null))},variant:"standard"})),e.createElement("div",{className:"user-container"},e.createElement(_e,null,e.createElement(Ve,{sx:{minWidth:450},size:"small"},e.createElement(Ke,null,e.createElement(re,null,e.createElement(Q,null,"Nome"),e.createElement(Q,null,"Email"),e.createElement(Q,{align:"center"},"A\xE7\xF5es"))),e.createElement(Xe,null,t.map(i=>e.createElement(re,{key:i.id,sx:{"&:last-child td, &:last-child th":{border:0}}},e.createElement(Q,{width:"40%","data-testid":"user-name"},i.name),e.createElement(Q,{width:"40%"},i.email),e.createElement(Q,{width:"20%",align:"center"},e.createElement(M,{"aria-label":"Editar","data-testid":"edit_user-button",component:"span",onClick:()=>{a("/dashboard/users/edit",{state:{id:i.id,name:i.name,email:i.email,password:i.password}})}},e.createElement(he,null)),e.createElement(M,{"data-testid":"delete_user-button","aria-label":"Deletar",component:"span",onClick:()=>u(i.id)},e.createElement(ge,null)),e.createElement(ae,{title:"Excluir usu\xE1rio",text:`Tem certeza que deseja excluir o usu\xE1rio ${i.name}?`,isOpen:s&&l==i.id,handleClose:()=>h(),handleConfirm:()=>c(i.id)})))))))))}function St(){const{user:a,storeToken:t,storeUser:n}=R(),s=m.exports.useMemo(()=>{let r=!!a;if(!a){const l=O();l&&(r=!0,n(l.user),t((l==null?void 0:l.token)||""))}return r},[a]);return e.createElement(Ge,null,e.createElement(Je,null,s?e.createElement(e.Fragment,null,e.createElement(T,{path:"/dashboard",element:e.createElement(W,{to:"/dashboard/questions"})}),e.createElement(T,{path:"/dashboard/users",element:e.createElement(wt,null)}),e.createElement(T,{path:"/dashboard/users/create",element:e.createElement(ce,null)}),e.createElement(T,{path:"/dashboard/users/edit",element:e.createElement(ce,null)}),e.createElement(T,{path:"/dashboard/questions",element:e.createElement(Nt,null)}),e.createElement(T,{path:"/dashboard/questions/create",element:e.createElement(bt,null)}),e.createElement(T,{path:"/dashboard/questions/edit",element:e.createElement(xt,null)}),e.createElement(T,{path:"questions",element:e.createElement(W,{to:"/dashboard/questions"})}),e.createElement(T,{path:"users",element:e.createElement(W,{to:"/dashboard/users"})}),e.createElement(T,{path:"dashboard",element:e.createElement(W,{to:"/dashboard/questions"})})):e.createElement(e.Fragment,null,e.createElement(T,{path:"login",element:e.createElement(ct,null)}),e.createElement(T,{path:"request-password",element:e.createElement(it,null)}),e.createElement(T,{path:"reset-password",element:e.createElement(dt,null)})),e.createElement(T,{path:"/",element:e.createElement(gt,null)}),e.createElement(T,{path:"*",element:e.createElement(W,{to:s?"/dashboard":"/",replace:!0})})))}function Tt(){return e.createElement(e.Fragment,null,e.createElement(at,null,e.createElement(Ye,{theme:xe},e.createElement(Ze,null),e.createElement(St,null))))}et.render(e.createElement(e.StrictMode,null,e.createElement(Tt,null)),document.getElementById("root"));
