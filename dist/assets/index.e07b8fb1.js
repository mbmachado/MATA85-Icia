var Ne=Object.defineProperty,Se=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var ae=(t,a,n)=>a in t?Ne(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,q=(t,a)=>{for(var n in a||(a={}))Te.call(a,n)&&ae(t,n,a[n]);if(te)for(var n of te(a))ke.call(a,n)&&ae(t,n,a[n]);return t},U=(t,a)=>Se(t,we(a));import{r as d,R as e,a as Ae,L as H,u as $,A as ce,F as O,I as M,O as P,b as X,c as ie,d as F,V as Ie,e as Fe,f as de,M as ne,H as Oe,B as Me,g as Pe,h as T,P as $e,T as Q,S as De,i as qe,j as Ue,k as Re,l as Be,m as B,t as k,n as Le,o as G,p as me,q as ue,s as pe,D as je,E as Ee,v as he,w as ze,x as Qe,y as He,z as We,C as Ve,G as se,J as R,K as _e,N as Ke,Q as Xe,U as S,W as j,X as Ge,Y as Je,Z as Ye}from"./vendor.13a6cd18.js";const Ze=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};Ze();const ge=d.exports.createContext({}),et=({children:t})=>{const[a,n]=d.exports.useState(),[s,r]=d.exports.useState(""),l=u=>{n(u)},o=u=>{r(u)},c=()=>{r(""),n(void 0)};return e.createElement(ge.Provider,{value:{user:a,authToken:s,storeUser:l,storeToken:o,clean:c}},t)},D=()=>e.useContext(ge);const tt={Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:"Bearer "},C=Ae.create({baseURL:"https://virtual-assistent-backend.herokuapp.com/",headers:tt}),w={getInitialTopicsTree:async()=>C.get("/api/v1/topics"),getTopicsTreeById:async t=>C.get(`/api/v1/topics/${t}`),getTopicsTreeByNlp:async t=>C.post("/api/v1/nlp",{text:t}),login:async t=>C.post("/api/v2/auth/login",t),requestPassword:async t=>C.get(`/api/v2/auth/recoverAccess/${t}`),getTopicsTree:async t=>{var n;let a=t;return a||(a=((n=A())==null?void 0:n.token)||""),C.get("/api/v3/topics",{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${a}`}})},createQuestion:async(t,a,n,s)=>{var o;let r=t;r||(r=((o=A())==null?void 0:o.token)||"");const l={topic_id:a,description:n,answer:s};return C.post("/api/v3/questions",l,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${r}`}})},getQuestions:async t=>{var n;let a=t;return a||(a=((n=A())==null?void 0:n.token)||""),C.get("/api/v3/questions",{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${a}`}})},editQuestion:async(t,a,n,s,r)=>{var c;let l=a;l||(l=((c=A())==null?void 0:c.token)||"");const o={id:t,topic_id:n,description:s,answer:r};return C.patch(`/api/v3/questions/${t}`,o,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${l}`}})},deleteQuestion:async(t,a)=>{var s;let n=a;return n||(n=((s=A())==null?void 0:s.token)||""),C.delete(`/api/v3/questions/${t}`,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${n}`}})},getUsers:async()=>{var a;const t={headers:{Authorization:"Bearer "+((a=A())==null?void 0:a.token)}};return C.get("/api/v3/users",t)},createUser:async(t,a,n)=>{var r;const s={headers:{Authorization:"Bearer "+((r=A())==null?void 0:r.token)}};return C.post("/api/v3/users",{email:t,name:a,password:n},s)},editUser:async(t,a)=>{var s;const n={headers:{Authorization:"Bearer "+((s=A())==null?void 0:s.token)}};return C.patch(`/api/v3/users/${t}`,a,n)},deleteUser:async t=>{var n;const a={headers:{Authorization:"Bearer "+((n=A())==null?void 0:n.token)}};return C.delete(`/api/v3/users/${t}`,a)},createTopic:async(t,a,n)=>{var o;let s=t;s||(s=((o=A())==null?void 0:o.token)||"");const r={name:a},l=n?`/${n}`:"";return C.post(`/api/v3/topics${l}`,r,{headers:{Accept:"application/json, text/plain, */*",Authorization:`Bearer ${s}`}})},deleteTopic:async(t,a)=>{var s;let n=a;return n||(n=((s=A())==null?void 0:s.token)||""),C.delete(`/api/v3/topics/${t}`,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${n}`}})}},at=t=>{window.sessionStorage.setItem("AUTH",JSON.stringify(t))},A=()=>{const t=window.sessionStorage.getItem("AUTH");return t?JSON.parse(t):null},nt=()=>{window.sessionStorage.removeItem("AUTH")};var st="/assets/logo-ic-ufba.d4b7fcf3.png",rt="/assets/logo-icia-vertical.dc3a2a24.svg";function J({children:t}){return e.createElement("div",{className:`auth-container d-flex flex-column overflow-auto justify-content-start\r
                 justify-content-sm-center align-items-center p-3 p-md-4 min-vh-100 w-100`},e.createElement("div",{className:"shadow-sm rounded bg-white w-100 p-3"},e.createElement("div",{className:"px-3 pt-3 pb-4"},e.createElement(H,{to:"/",className:"logo d-flex mx-auto mb-4 align-items-end justify-content-center"},e.createElement("div",{className:"d-flex",style:{width:"60%"}},e.createElement("img",{src:rt,alt:"Logomarca ICIA",className:"w-100"})),e.createElement("div",{className:"d-flex pl-3",style:{width:"38%"}},e.createElement("img",{src:st,alt:"Logo Computa\xE7\xE3o Ufba",className:"w-100"}))),t)),e.createElement("div",{className:"w-100 mt-2 text-center text-white"},"\xA9 Todos os direitos reservados."))}function ot(){const t=$(),[a,n]=e.useState(!1),[s,r]=e.useState(!1),[l,o]=e.useState(!1),[c,u]=e.useState({email:"",password:"",showPassword:!1}),{storeUser:g,storeToken:m}=D(),i=N=>b=>{u(U(q({},c),{[N]:b.target.value})),r(!1)},h=()=>{u(U(q({},c),{showPassword:!c.showPassword}))},v=N=>{N.preventDefault()},I=N=>{N.preventDefault(),!!c.email||!!c.email?(o(!0),w.login(c).then(b=>b.data).then(b=>{var p,E;if(b.status==="Success"){const x=(p=b.data)==null?void 0:p.user;g(x),m((E=b.data)==null?void 0:E.token),at(b.data),t("/dashboard")}o(!1)}).catch(b=>{o(!1),n(!0),r(!0),u(U(q({},c),{password:""}))})):r(!0)};return e.createElement(J,null,a?e.createElement(ce,{severity:"error"},"Seu e-mail ou senha n\xE3o correspondem aos nossos registros."):null,e.createElement("form",{onSubmit:I,action:"#"},e.createElement(O,{variant:"outlined",error:s,fullWidth:!0,margin:"normal"},e.createElement(M,{htmlFor:"email"},"E-mail"),e.createElement(P,{id:"email",type:"email",value:c.email,onChange:i("email"),label:"E-mail"}),s?e.createElement(X,{id:"e-mail-error-text"},c.email?"E-mail ou senha incorreto.":"Campo obrigat\xF3rio."):null),e.createElement(O,{variant:"outlined",error:s,fullWidth:!0,margin:"normal"},e.createElement(M,{htmlFor:"password"},"Senha"),e.createElement(P,{id:"password",type:c.showPassword?"text":"password",value:c.password,onChange:i("password"),endAdornment:e.createElement(ie,{position:"end"},e.createElement(F,{"aria-label":"toggle password visibility",onClick:h,onMouseDown:v,edge:"end"},c.showPassword?e.createElement(Ie,null):e.createElement(Fe,null))),label:"Senha"}),s?e.createElement(X,{id:"password-error-text"},c.password?"E-mail ou senha incorreto.":"Campo obrigat\xF3rio."):null),e.createElement("div",{className:"d-flex mb-3 justify-content-end"},e.createElement(H,{to:"/request-password",id:"request-password__button"},"Esqueceu sua senha?")),e.createElement(de,{id:"submitt-button",type:"submit",loading:l,variant:"contained",className:"mb-3",disableElevation:!0,fullWidth:!0},"Entrar")))}function lt(){const[t,a]=e.useState(!1),[n,s]=e.useState(!1),[r,l]=e.useState(!1),[o,c]=e.useState({email:""}),u=m=>i=>{c(U(q({},o),{[m]:i.target.value})),r&&l(!1),n&&s(!1)},g=async m=>{m.preventDefault();const i=o.email;if(i){a(!0);try{const h=await w.requestPassword(i);console.log(h)}catch(h){console.log(h)}a(!1),s(!0)}else l(!0)};return e.createElement(J,null,e.createElement("form",{onSubmit:g,action:"#"},n?e.createElement(ce,{severity:"success"},"Se o e-mail ",e.createElement("b",null,o.email)," estiver cadastrado, voc\xEA receber\xE1 intru\xE7\xF5es para recuperar sua senha."):null,e.createElement(O,{variant:"outlined",error:r,fullWidth:!0,margin:"normal",className:"mb-4"},e.createElement(M,{htmlFor:"email"},"E-mail"),e.createElement(P,{id:"email",type:"email",value:o.email,onChange:u("email"),label:"E-mail"}),r?e.createElement(X,{id:"e-mail-error-text"},"Campo obrigat\xF3rio."):null),e.createElement(de,{id:"submitt-button",type:"submit",loading:t,variant:"contained",className:"mb-3",disableElevation:!0,fullWidth:!0},"Entrar")),e.createElement(H,{to:"/login"},"Fazer login")," em vez disso.")}function ct(){return e.createElement(J,null,e.createElement("p",null,"request-password works!"))}function it({handleSidebarOptionClick:t}){const[a,n]=d.exports.useState(!1);return e.createElement("aside",{className:"d-none d-sm-flex flex-column align-items-center border-right border-info h-100"},e.createElement(ne,{title:"Reiniciar",placement:"right"},e.createElement(F,{"aria-label":"home",onClick:()=>t("home")},e.createElement(Oe,null))),e.createElement(ne,{title:a?"Modo claro":"Modo escuro",placement:"right"},e.createElement(F,{"aria-label":"theme-mode",onClick:()=>{n(!a),t("mode")}},a?e.createElement(Me,null):e.createElement(Pe,null))))}function dt(){const[t,a]=d.exports.useState(null),n=o=>{a(o.currentTarget)},s=()=>{a(null)},r=Boolean(t),l=r?"learn-more-popover":void 0;return e.createElement(e.Fragment,null,e.createElement("h2",{id:"chat-header-title",title:"Intelig\xEAncia Artificial do IC",className:"mb-0 text-dark"},"Intelig\xEAncia Artificial do IC"),e.createElement("div",{className:"flex-fill"}),e.createElement(T,{"aria-describedby":l,variant:"outlined",color:"secondary",onClick:n},"Saiba mais"),e.createElement($e,{id:l,open:r,anchorEl:t,onClose:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e.createElement(Q,{sx:{p:2}},'O ICIA \xE9 um sistema de "BOT" com o objetivo de responder as d\xFAvidas relacionadas ao Instituto de Computa\xE7\xE3o (IC) da UFBA, especialmente dos cursos de gradua\xE7\xE3o e p\xF3s-gradua\xE7\xE3o do PGCOMP.',e.createElement("br",null),e.createElement("br",null),"O aplicativo foi desenvolvido por discentes de cursos de gradua\xE7\xE3o e p\xF3s-gradua\xE7\xE3o vinculados ao PGCOMP, sob a orienta\xE7\xE3o do Prof. Dr. Frederico Dur\xE3o, referente a disciplina T\xF3picos em Sistemas de Informa\xE7\xE3o e Web I no semestre letivo de 2022.1.")))}function mt({generateMessegesOnFormSubmit:t}){const[a,n]=e.useState(""),s=()=>l=>{l.preventDefault(),t(a),n("")},r=()=>l=>{n(l.target.value)};return e.createElement("div",{className:"chat-input-container rounded-pill border border-info position-relative overflow-hidden w-100"},e.createElement("form",{onSubmit:s()},e.createElement("input",{type:"text",className:"py-2 pl-4 pr-5 w-100 border-0",onChange:r(),placeholder:"Digite algo",value:a}),e.createElement("div",{className:"position-absolute"},e.createElement(F,{type:"submit","aria-label":"cached",disabled:!a.length},e.createElement(De,null)))))}var ut="/assets/icon-icia.06ab72ef.svg";function re({items:t,handleItemSelection:a}){const[n,s]=d.exports.useState(),r=o=>{s(o.id),a(o)},l=o=>o.description!==void 0;return e.createElement(e.Fragment,null,t!=null&&t.length?e.createElement("div",{className:"chat-items"},t.map(o=>e.createElement("button",{type:"button",key:o.id,onClick:()=>r(o),title:l(o)?o.description:o.name,className:`chat-item-option d-block rounded-pill bg-info text-dark py-2 px-3 mt-3 border-0${n===o.id?" selected":""}`},e.createElement("span",null,l(o)?o.description:o.name)))):null)}function oe({children:t,questions:a,side:n,text:s,topics:r,generateMessegesForTopicSelection:l,generateMessegesForQuestionSelection:o}){const c=m=>{typeof l=="function"&&u(m)&&l(m),typeof o=="function"&&g(m)&&o(m)},u=m=>m.name!==void 0,g=m=>m.description!==void 0;return e.createElement("div",{className:`chat-message d-flex ${n} w-100`},e.createElement("div",{className:"chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center"},n==="left"?e.createElement("img",{src:ut,className:"h-auto",alt:"assistente chatbot"}):e.createElement(qe,null,"person")),e.createElement("div",{className:"chat-ballon py-3 px-4"},s!=null&&s.length?e.createElement("h3",{className:"font-weight-normal mb-0"},s.includes("https://")?e.createElement("a",{target:"_blank",className:"text-white",href:s,rel:"noreferrer"},s):s):null,t,e.createElement(re,{items:r,handleItemSelection:c}),a!=null&&a.length?e.createElement("div",{className:"d-block w-100"},e.createElement(re,{items:a,handleItemSelection:c})):null,e.createElement("div",null)))}function pt(){return e.createElement("div",{className:"d-flex align-items-center typing"},e.createElement("div",{className:"dot"}),e.createElement("div",{className:"dot"}),e.createElement("div",{className:"dot"}))}var Et="/assets/logo-icia-horizontal-text-white.dc2df070.svg";function fe({children:t}){return e.createElement("div",null,e.createElement("header",{className:"d-flex align-items-center justify-content-start w-100 app-header px-3"},e.createElement("img",{"data-testid":"logo",src:Et,className:"app-logo",alt:"logo"}),e.createElement("div",{className:"flex-fill"}),t))}function ht(){const t=d.exports.useRef(null),[a,n]=d.exports.useState(0),[s,r]=d.exports.useState([]),[l,o]=d.exports.useState(!0),[c,u]=d.exports.useState(!1);let g=$();const m=["Agora escolha uma op\xE7\xE3o :)","Escolha mais uma op\xE7\xE3o abaixo.","Quase l\xE1, selecione uma op\xE7\xE3o.","Veja algumas op\xE7\xF5es que encontrei :)"];d.exports.useEffect(()=>{w.getInitialTopicsTree().then(p=>{const E=b(p.data);o(!1),r([...s,{text:a===0?"Ol\xE1, eu sou a Icia. Como posso te ajudar hoje?":"Ok... vamos tentar de novo. Como posso te ajudar hoje?",side:"left",topics:E}])}),a===0&&i()},[a]);const i=()=>{t&&t.current.addEventListener("DOMNodeInserted",p=>{const E=p.currentTarget;E.scroll({top:E.scrollHeight,behavior:"smooth"})})},h=p=>{switch(p){case"home":n(1+a);break;case"mode":u(!c);break;default:alert("N\xE3o implementado!")}},v=async p=>{const E=[...s,{text:p.name,side:"right"}];r(E),o(!0);const L=(await w.getTopicsTreeById(p.id)).data.find(Boolean),W=b(L.children),V=L.questions;E.push({text:m[Math.floor(Math.random()*m.length)],side:"left",topics:W,questions:V}),o(!1),r(E)},I=async p=>{const E=[...s,{text:p.description,side:"right"},{text:p.answer,side:"left"}];r(E)},N=async p=>{const E=[...s,{text:p,side:"right"}];r(E),o(!0);try{const x=await w.getTopicsTreeByNlp(p);if(!x.data)throw new Error("no content");x.data[0].description!==void 0&&E.push({text:m[Math.floor(Math.random()*m.length)],side:"left",topics:[],questions:x.data})}catch{E.push({text:"Ohh, n\xE3o... N\xE3o encontrei uma resposta para a sua pergunta.           Tente pesquisar com outro termo ou utilizar as op\xE7\xF5es do menu :(",side:"left"})}o(!1),r(E)},b=p=>p.filter(x=>!!x.name.length).map(x=>({id:x.id,name:x.name}));return e.createElement("div",{className:"chatbot d-block w-100"+(c?" dark":"")},e.createElement("div",{className:"d-block min-vh-100 vh-100 w-100 mx-auto"},e.createElement(fe,null,e.createElement(T,{id:"login-button",type:"button",variant:"contained",color:"secondary",disableElevation:!0,onClick:()=>{g("/login")}},"Login")),e.createElement("div",{className:"chat-container d-flex"},e.createElement(it,{handleSidebarOptionClick:h}),e.createElement("main",{className:"d-flex flex-column flex-fill"},e.createElement("div",{className:"chat-toolbar d-flex align-items-center border-bottom border-info px-3"},e.createElement(dt,null)),e.createElement("div",{ref:t,className:"chat-content d-flex flex-column flex-fill w-100 mw-100 p-3"},s.map((p,E)=>e.createElement(oe,{key:E,text:p.text,side:p.side,topics:p.topics,questions:p.questions,generateMessegesForTopicSelection:v,generateMessegesForQuestionSelection:I})),l?e.createElement(oe,{side:"left"},e.createElement(pt,null)):null),e.createElement("div",{className:"chat-toolbar d-flex align-items-center border-top border-info px-3"},e.createElement(mt,{generateMessegesOnFormSubmit:N}))))))}const ve=Ue({palette:{primary:{light:"#72C3E6",main:"#72C3E6",dark:"#72C3E6",contrastText:"#FFF"},secondary:{light:"#F9D055",main:"#F9D055",dark:"#F9D055",contrastText:"#FFF"}},typography:{fontFamily:["IBM Plex Sans","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),gt=[{id:"question-link",icon:t=>e.createElement(Re,{htmlColor:t}),name:"Perguntas",path:"/dashboard/questions",isSelected:!1},{id:"users-link",icon:t=>e.createElement(Be,{htmlColor:t}),name:"Usu\xE1rios",path:"/dashboard/users",isSelected:!1}],ft=()=>e.createElement("nav",{id:"container"},gt.map(t=>{const a=window.location.pathname.includes(t.path);return e.createElement(H,{"data-testid":t.id,to:t.path,key:t.id},e.createElement("div",{className:"menu-option"},e.createElement("i",{className:"menu-icon"},t.icon(a?ve.palette.secondary.main:"")),e.createElement("span",{className:a?"is-selected":""},t.name)))}));function z({children:t}){const{clean:a,user:n}=D(),s=$(),r=B().state,l=B().pathname,o=r==null?void 0:r.message;return d.exports.useEffect(()=>{o&&(k[o.type](o.text),history.replaceState({message:null},""))},[]),e.createElement("div",{className:"app"},e.createElement(fe,null,e.createElement(T,{id:"profile-edit",startIcon:e.createElement(Le,null),type:"button",variant:"contained",color:"secondary",disableElevation:!0,onClick:()=>{l!=="/dashboard/users/edit"&&l!=="/dashboard/users/create"&&s("/dashboard/users/edit",{state:n})}},n==null?void 0:n.name),e.createElement(T,{id:"logout-button",type:"button",variant:"contained",color:"secondary",disableElevation:!0,onClick:()=>{nt(),a(),s("/login",{replace:!0})}},"Sair")),e.createElement("div",{id:"admin-container",className:"d-flex"},e.createElement(ft,null),e.createElement("main",{id:"admin-content"},t)))}const xe=({description:t,answer:a,isEdit:n,handleSubmit:s,handleQuestionChange:r,handleAnswerChange:l})=>e.createElement("form",{onSubmit:s,className:"formContainer"},e.createElement(O,{className:"mt-4",variant:"outlined",fullWidth:!0,color:"secondary"},e.createElement(M,{htmlFor:"input-question"},"Pergunta"),e.createElement(P,{id:"input-question",type:"text",placeholder:"Digite a pergunta",value:t,onChange:o=>r(o.target.value),label:"Pergunta"})),e.createElement("div",{className:" mb-2"},e.createElement(O,{className:"mt-4",variant:"outlined",color:"secondary",fullWidth:!0},e.createElement(M,{htmlFor:"input-answer"},"Resposta"),e.createElement(P,{id:"input-answer",type:"text",placeholder:"Digite a resposta",value:a,onChange:o=>l(o.target.value),label:"Resposta"}))),n?e.createElement(T,{variant:"contained",color:"secondary",type:"submit","data-testid":"submit-button"},"EDITAR"):e.createElement(T,{variant:"contained",color:"secondary",type:"submit","data-testid":"submit-button"},"CADASTRAR")),vt=()=>{const t=$(),[a,n]=d.exports.useState(""),[s,r]=d.exports.useState(""),{authToken:l}=D(),{topicId:o,topicName:c}=B().state,u=i=>{r(i)},g=i=>{n(i)},m=i=>{i.preventDefault(),w.createQuestion(l,o,a,s).then(h=>h.data).then(h=>{console.log(h),t("/dashboard/questions",{state:{message:{type:"success",text:"Pergunta adicionada com sucesso!"}}})}).catch(h=>{})};return e.createElement(z,null,e.createElement("div",{className:"d-flex align-items-center mt-2"},e.createElement(F,{className:"mr-3 ml-3","aria-label":"Voltar",component:"span",onClick:()=>{t(-1)}},e.createElement(G,null)),e.createElement("span",{className:"title"},"Cadastrar Pergunta em ",c)),e.createElement(xe,{description:a,answer:s,handleSubmit:m,handleAnswerChange:u,handleQuestionChange:g}))},xt=()=>{const{id:t,topic_id:a,topicName:n,description:s,answer:r}=B().state,l=$(),[o,c]=d.exports.useState(s),[u,g]=d.exports.useState(r),{authToken:m}=D(),[i,h]=d.exports.useState(!1),{pathname:v}=B(),I=v.includes("edit"),N=E=>{g(E)},b=E=>{c(E)},p=E=>{E.preventDefault(),h(!0),w.editQuestion(t,m,a,o,u).then(x=>x.data).then(x=>{h(!1),l("/dashboard/questions",{state:{message:{type:"success",text:"Pergunta editada com sucesso!"}}})}).catch(x=>{k.error("Ocorreu um erro"),h(!1)})};return e.createElement(z,null,i&&e.createElement(me,{variant:"indeterminate"}),e.createElement("div",{className:"d-flex align-items-center mt-2"},e.createElement(F,{className:"mr-3 ml-3","aria-label":"Voltar",component:"span",onClick:()=>{l(-1)}},e.createElement(G,null)),e.createElement("span",{className:"title"},"Editar Pergunta",n)),e.createElement(xe,{description:o,answer:u,handleSubmit:p,handleAnswerChange:N,handleQuestionChange:b,isEdit:I}))};function bt({isOpen:t,onClose:a,parentId:n}){const[s,r]=d.exports.useState(""),l=n?"subategoria":"categoria",{authToken:o}=D(),c=u=>{u.preventDefault(),w.createTopic(o,s,n).then(g=>g.data).then(g=>{a(),console.log(g),r(""),k.success("Categoria adicionada com sucesso.")}).catch(g=>{console.log(g),k.error("Houve um erro ao adicionar a categoria.")})};return e.createElement("div",null,e.createElement(ue,{open:t,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},e.createElement(pe,{className:"create-modal-box"},e.createElement(Q,{id:"modal-modal-title",variant:"h6",component:"h2"},"Adicionar ",l),e.createElement("form",{onSubmit:c},e.createElement(O,{className:"mt-4",variant:"outlined",fullWidth:!0,color:"secondary"},e.createElement(M,{htmlFor:"topic"},"Nome"),e.createElement(P,{id:"topic",type:"text",value:s,color:"secondary",onChange:u=>r(u.target.value),placeholder:`Digite a ${l}`,label:"Nome"}),e.createElement("div",{className:"create-modal-footer"},e.createElement(T,{variant:"contained",color:"secondary",type:"submit","data-testid":"confirm-button"},"Adicionar"),e.createElement(T,{variant:"outlined",onClick:a,className:"ml-2"},"Cancelar")))))))}function Y({title:t,text:a,isOpen:n,handleClose:s,handleConfirm:r}){return d.exports.createElement("div",null,d.exports.createElement(ue,{open:n,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},d.exports.createElement(pe,{className:"modal-box"},d.exports.createElement(Q,{id:"modal-modal-title",variant:"h6",component:"h2"},t),d.exports.createElement(Q,{id:"modal-modal-description",sx:{mt:2}},a),d.exports.createElement("div",{className:"modal-footer"},d.exports.createElement(T,{variant:"contained",color:"warning",onClick:r,"data-testid":"confirm-button"},"Sim"),d.exports.createElement(T,{variant:"outlined",onClick:s,className:"ml-2"},"N\xE3o")))))}function yt({questions:t,removeQuestion:a}){const n=$(),{authToken:s}=D(),[r,l]=e.useState(!1),[o,c]=e.useState(),u=v=>{const{id:I,topic_id:N,description:b,answer:p,parents:E}=v;let x=N;!x&&E&&(x=E[E.length-1].id),n("edit",{state:{id:I,topic_id:x,description:b,answer:p}})},g=v=>{w.deleteQuestion(v,s).then(I=>{I.data.status==="Success"?(a&&a(v),k.success("Pergunta exclu\xEDda com sucesso!")):k.error("Houve um erro ao excluir a pergunta."),i()})},m=v=>{c(v),l(!0)},i=()=>{c(void 0),l(!1)},h=[{field:"description",headerName:"Pergunta",flex:4},{field:"answer",headerName:"Resposta",flex:4},{field:"id",headerName:"A\xE7\xF5es",renderCell:v=>e.createElement(e.Fragment,null,e.createElement(Y,{title:"Excluir Pergunta",text:"Tem certeza que deseja excluir essa pergunta?",isOpen:r&&o===v.row.id,handleClose:i,handleConfirm:()=>g(o)}),e.createElement(F,{"aria-label":"Editar","data-testid":"edit-button",component:"span",onClick:()=>u(v.row)},e.createElement(Ee,null)),e.createElement(F,{"data-testid":"delete-button","aria-label":"Deletar",component:"span",onClick:()=>{m(v.row.id)}},e.createElement(he,null)))}];return e.createElement("div",{style:{height:"80vh",width:"100%"}},e.createElement(je,{rows:t,columns:h,pageSize:15,rowsPerPageOptions:[],disableSelectionOnClick:!0}))}function Ct(){const[t,a]=d.exports.useState([]),[n,s]=d.exports.useState([]),[r,l]=d.exports.useState([]),[o,c]=d.exports.useState([]),[u,g]=d.exports.useState(""),[m,i]=d.exports.useState(0),[h,v]=d.exports.useState(!1),[I,N]=d.exports.useState(!1),[b,p]=d.exports.useState(!1),E=$(),{authToken:x}=D(),{getTopicsTree:L,getQuestions:W,deleteTopic:V}=w,Z=()=>{v(!1)},be=()=>{_(),N(!1)},ee=()=>{s([]),c(r),g(""),i(0),a([])},ye=f=>{p(!0),V(f,x).then(y=>y==null?void 0:y.data).then(y=>{console.log(y),y.status==="Success"?(k.success("Categoria exclu\xEDda com sucesso!"),_()):(console.log(y),k.error("Aconteceu um erro ao excluir a categoria."))}).catch(y=>{console.log(y),k.error("Aconteceu um erro ao excluir a categoria.")}).finally(()=>{p(!1),Z()})},Ce=f=>{a(y=>y.filter(K=>K.id!==f))};d.exports.useEffect(()=>{m===0&&W(x).then(f=>{a(f.data)})},[m]);const _=e.useCallback(()=>{p(!0),L(x).then(f=>{ee(),c(f.data||[]),l(f.data||[])}).finally(()=>p(!1))},[L,c,l]);return d.exports.useEffect(()=>{_()},[]),e.createElement(z,null,b&&e.createElement(me,{variant:"indeterminate"}),e.createElement("div",{className:"d-flex justify-content-between align-items-center pr-5"},e.createElement("div",{className:"title-container"},e.createElement("h2",{className:"title"},"Perguntas por categoria")),e.createElement(bt,{isOpen:I,onClose:be,parentId:m}),u&&e.createElement(e.Fragment,null,e.createElement(Y,{title:"Excluir Pergunta",text:`Tem certeza que deseja excluir a categoria ${u}?`,isOpen:h,handleClose:Z,handleConfirm:()=>ye(m)}),e.createElement("div",null,e.createElement(T,{variant:"contained",color:"warning","data-testid":"add-question-button",onClick:()=>{v(!0)}},"Excluir")))),e.createElement("div",{className:"questions-container"},e.createElement("div",{className:"breadcrumb-container"},m!==0?e.createElement("span",null,e.createElement("button",{className:"breadcrumb-item",onClick:()=>{ee()}},"Inicio")," > "):e.createElement("span",null,"Inicio"),n.map((f,y)=>y!==n.length-1?e.createElement("span",{key:f.id},e.createElement("button",{className:"breadcrumb-item",onClick:()=>{s(K=>K.slice(0,y+1)),c(f.children),g(f.name),i(f.id),a(f.questions)}},f.name)," > "):e.createElement(e.Fragment,null,f.name))),o.map(f=>f.name===""?null:e.createElement("button",{key:f.id,className:"filter-question-button",onClick:()=>{a(f.questions),s(y=>[...y,f]),c(f.children),g(f.name),i(f.id)}},f.name)),e.createElement("button",{className:"add-category-button",onClick:()=>N(!0)},"+"),e.createElement("div",{className:"mt-3"},u&&e.createElement(e.Fragment,null,e.createElement("h3",null," ",`Perguntas categoria ${u}`),e.createElement("br",null),e.createElement("div",null,e.createElement(T,{variant:"contained","data-testid":"add-question-button",onClick:()=>{E("/dashboard/questions/create",{state:{topicId:m,topicName:u}})}},"ADICIONAR")))),e.createElement("div",{id:"questions-container"},e.createElement(yt,{questions:t,removeQuestion:Ce}))))}function le(){const{clean:t,user:a}=D(),n=$(),{id:s,name:r,email:l,password:o}=B().state,[c,u]=e.useState({email:l||"",name:r||"",password:""}),g=i=>h=>{u(U(q({},c),{[i]:h.target.value}))},m=i=>{if(i.preventDefault(),s){const h={email:c.email,name:c.name};c.password&&(h.password=c.password),w.editUser(s,h).then(v=>v.data).then(v=>{n("/dashboard/users",{state:{message:{type:"success",text:`${c.name} editado com sucesso!`}}})}).catch(v=>{k.error(`Houve um erro ao editar ${c.name}.`),console.log(v)})}else w.createUser(c.email,c.name,c.password).then(h=>h.data).then(h=>{n("/dashboard/users",{state:{message:{type:"success",text:"Usu\xE1rio criado com sucesso!"}}})}).catch(h=>{k.error("Houve um erro ao criar usu\xE1rio."),console.log(h)})};return e.createElement(z,null,e.createElement("div",{className:"user-container title-container"},e.createElement(F,{"aria-label":"Voltar",component:"span",onClick:()=>{n("/dashboard/users")}},e.createElement(G,null)),e.createElement("h2",null,s?"Editar Usu\xE1rio":"Cadastrar Usu\xE1rio")),e.createElement("div",{className:"user-container"},e.createElement("form",{onSubmit:m,action:"#"},e.createElement(O,{color:"secondary",variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(M,{htmlFor:"text"},"Nome"),e.createElement(P,{id:"name",type:"text",value:c.name,onChange:g("name"),label:"Nome"})),e.createElement(O,{color:"secondary",variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(M,{htmlFor:"text"},"E-mail"),e.createElement(P,{id:"email",type:"email",value:c.email,onChange:g("email"),label:"E-mail"})),e.createElement(O,{variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(M,{hidden:!!s&&s!==(a==null?void 0:a.id),color:"secondary",htmlFor:"text"},"Senha"),e.createElement(P,{id:"password",hidden:!!s&&s!==(a==null?void 0:a.id),type:"text",value:c.password,onChange:g("password"),label:"Senha",color:"secondary"})),e.createElement(T,{type:"submit","data-testid":"submit-button",variant:"contained",color:"secondary",disableElevation:!0},"Enviar"))))}function Nt(){const t=$(),[a,n]=d.exports.useState([]),[s,r]=d.exports.useState(!1),[l,o]=d.exports.useState(),c=i=>{w.deleteUser(i).then(()=>{k.success("Usu\xE1rio exclu\xEDdo com sucesso!"),m()}).catch(h=>{k.error("Houve um erro ao excluir o usu\xE1rio")})},u=i=>{o(i),r(!0)},g=()=>{o(void 0),r(!1)},m=()=>{w.getUsers().then(i=>{n(i.data)})};return d.exports.useEffect(()=>{m()},[]),e.createElement(z,null,e.createElement("div",{className:"user-container title-container"},e.createElement("h2",null,"Usu\xE1rios Cadastrados"),e.createElement(T,{"data-testid":"add_user-button",variant:"outlined",color:"secondary",onClick:()=>{t("/dashboard/users/create",{state:{id:"",name:"",email:""}})}},"CRIAR NOVO")),e.createElement("div",{className:"user-container",style:{display:"none"}},e.createElement(ze,{id:"search",label:"Pesquisar",InputProps:{startAdornment:e.createElement(ie,{position:"start"},e.createElement(Qe,null))},variant:"standard"})),e.createElement("div",{className:"user-container"},e.createElement(He,null,e.createElement(We,{sx:{minWidth:450},size:"small"},e.createElement(Ve,null,e.createElement(se,null,e.createElement(R,null,"Nome"),e.createElement(R,null,"Email"),e.createElement(R,{align:"center"},"A\xE7\xF5es"))),e.createElement(_e,null,a.map(i=>e.createElement(se,{key:i.id,sx:{"&:last-child td, &:last-child th":{border:0}}},e.createElement(R,{width:"40%","data-testid":"user-name"},i.name),e.createElement(R,{width:"40%"},i.email),e.createElement(R,{width:"20%",align:"center"},e.createElement(F,{"aria-label":"Editar","data-testid":"edit_user-button",component:"span",onClick:()=>{t("/dashboard/users/edit",{state:{id:i.id,name:i.name,email:i.email,password:i.password}})}},e.createElement(Ee,null)),e.createElement(F,{"data-testid":"delete_user-button","aria-label":"Deletar",component:"span",onClick:()=>u(i.id)},e.createElement(he,null)),e.createElement(Y,{title:"Excluir usu\xE1rio",text:`Tem certeza que deseja excluir o usu\xE1rio ${i.name}?`,isOpen:s&&l==i.id,handleClose:()=>g(),handleConfirm:()=>c(i.id)})))))))))}function St(){const{user:t,storeToken:a,storeUser:n}=D(),s=d.exports.useMemo(()=>{let r=!!t;if(!t){const l=A();l&&(r=!0,n(l.user),a((l==null?void 0:l.token)||""))}return r},[t]);return e.createElement(Ke,null,e.createElement(Xe,null,s?e.createElement(e.Fragment,null,e.createElement(S,{path:"/dashboard",element:e.createElement(j,{to:"/dashboard/questions"})}),e.createElement(S,{path:"/dashboard/users",element:e.createElement(Nt,null)}),e.createElement(S,{path:"/dashboard/users/create",element:e.createElement(le,null)}),e.createElement(S,{path:"/dashboard/users/edit",element:e.createElement(le,null)}),e.createElement(S,{path:"/dashboard/questions",element:e.createElement(Ct,null)}),e.createElement(S,{path:"/dashboard/questions/create",element:e.createElement(vt,null)}),e.createElement(S,{path:"/dashboard/questions/edit",element:e.createElement(xt,null)}),e.createElement(S,{path:"questions",element:e.createElement(j,{to:"/dashboard/questions"})}),e.createElement(S,{path:"users",element:e.createElement(j,{to:"/dashboard/users"})}),e.createElement(S,{path:"dashboard",element:e.createElement(j,{to:"/dashboard/questions"})})):e.createElement(e.Fragment,null,e.createElement(S,{path:"login",element:e.createElement(ot,null)}),e.createElement(S,{path:"request-password",element:e.createElement(lt,null)}),e.createElement(S,{path:"reset-password",element:e.createElement(ct,null)})),e.createElement(S,{path:"/",element:e.createElement(ht,null)}),e.createElement(S,{path:"*",element:e.createElement(j,{to:s?"/dashboard":"/",replace:!0})})))}function wt(){return e.createElement(e.Fragment,null,e.createElement(et,null,e.createElement(Ge,{theme:ve},e.createElement(Je,null),e.createElement(St,null))))}Ye.render(e.createElement(e.StrictMode,null,e.createElement(wt,null)),document.getElementById("root"));
