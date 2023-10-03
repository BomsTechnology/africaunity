var A=Object.defineProperty;var U=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var M=(a,u,i)=>u in a?A(a,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[u]=i,N=(a,u)=>{for(var i in u||(u={}))E.call(u,i)&&M(a,i,u[i]);if(U)for(var i of U(u))F.call(u,i)&&M(a,i,u[i]);return a};var B=(a,u,i)=>new Promise((b,h)=>{var $=s=>{try{x(i.next(s))}catch(v){h(v)}},w=s=>{try{x(i.throw(s))}catch(v){h(v)}},x=s=>s.done?b(s.value):Promise.resolve(s.value).then($,w);x((i=i.apply(a,u)).next())});import{G as O,r as S,o as T,a as G,b as J,d as o,e as c,f as e,j as m,t as r,l as y,w as _,k as g,h as p,P as K,m as Z,g as d,I as f,K as k,$ as j,Z as H,M as L,R as Q}from"./app.js";import{r as D,_ as W}from"./ReCaptcha.js";import{u as X}from"./authServices.js";import{r as V}from"./UserIcon.js";import{r as Y}from"./EnvelopeIcon.js";import{r as R}from"./LockClosedIcon.js";import{r as z}from"./EyeIcon.js";const ee={class:"mx-auto min-h-screen w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"},te={class:"space-y-6 text-center lg:w-[60%] lg:text-left"},se={class:"text-4xl font-bold text-primary-blue lg:text-5xl"},re={key:0},le={key:1},ae={key:2},oe={key:3},ie=Q('<svg xmlns="http://www.w3.org/2000/svg" class="inline h-10 w-10" viewBox="0 0 36 36"><circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle><path fill="#664500" d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379.055-.217-.043-.442-.237-.554-.195-.111-.439-.078-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855C11.256 23.05 11.128 23 11 23c-.084 0-.169.021-.246.064-.196.112-.294.339-.239.557z"></path><ellipse fill="#664500" cx="12" cy="13.5" rx="2.5" ry="3.5"></ellipse><ellipse fill="#664500" cx="24" cy="13.5" rx="2.5" ry="3.5"></ellipse></svg>',1),ne={class:"p-6 lg:w-[40%]"},pe={class:"border-t-8 border-primary-blue shadow"},ue={class:"md:text-md h-16 p-4 text-center text-sm text-gray-500"},ce={href:"/login"},de={class:"px-6 py-2"},me={class:"text-center text-3xl font-bold text-[#242A56]"},ye={key:1,class:"py-4 text-justify"},fe={key:0},he={class:"relative"},be=["placeholder"],ge={class:"relative"},we=["placeholder"],xe={key:1},ve={class:"relative"},ke=["placeholder"],$e={key:2},_e={class:"relative"},Ve=["placeholder"],Pe={class:"relative"},qe=["placeholder"],Ce={class:"relative"},Be=["type","placeholder"],Se={class:"relative"},Ue=["type","placeholder"],Me={class:"mt-10"},Ne={class:"text-primary-blue hover:underline"},je={class:"text-left text-gray-400"},De={key:0,type:"submit",class:"mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"},Re={key:1,disabled:"",type:"submit",class:"mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"},Je={__name:"Register",props:{type:{required:!0,type:String}},setup(a){const u=a,i=O(),b=S(!1),h=S(!1),$=localStorage.user?JSON.parse(localStorage.user):"";T(()=>B(this,null,function*(){x.includes(u.type)||i.push({name:"pack"}),localStorage.token&&i.push({name:"compte",params:{slug:$.slug,id:$.id}})}));const w=S(!1),x=["particular","ip","business1","business2"],s=G({firstname:"",lastname:"",email:"",password:"",password_confirmation:"",type:u.type,recaptcha:""}),{createUser:v,errors:P,loading:q}=X(),I=()=>B(this,null,function*(){if(w){let t=document.querySelector("textarea[name=g-recaptcha-response]");s.recaptcha=t?t.value:"",yield v(N({},s))}else P.value="Veillez accepter notre politique de confidentialit\xE9"});return(t,l)=>{const C=J("router-link");return o(),c("div",ee,[e("div",te,[e("h1",se,[m(r(t.$t("create-account"))+" ",1),a.type=="particular"?(o(),c("span",re,"PP ("+r(t.$t("pack"))+" "+r(t.$t("particular"))+")",1)):a.type=="business1"?(o(),c("span",le,"PB ("+r(t.$t("pack"))+" PRO)",1)):a.type=="business2"?(o(),c("span",ae,"PB ("+r(t.$t("pack"))+" "+r(t.$t("business"))+")",1)):(o(),c("span",oe,"IP ("+r(t.$t("pack"))+" "+r(t.$t("politic"))+")",1)),ie]),e("p",null,r(t.$t("register-free-desc")),1),e("p",null,[m(r(t.$t("create-other-account"))+" ",1),a.type!="ip"?(o(),y(C,{key:0,to:{name:"register",params:{type:"ip"}},class:"text-primary-blue hover:underline"},{default:_(()=>[m(" IP ("+r(t.$t("pack"))+" "+r(t.$t("politic"))+") ? ",1)]),_:1})):g("",!0),a.type!="business2"?(o(),y(C,{key:1,to:{name:"register",params:{type:"business2"}},class:"text-primary-blue hover:underline"},{default:_(()=>[m(" PB ("+r(t.$t("pack"))+" Business) ? ",1)]),_:1})):g("",!0),a.type!="particular"?(o(),y(C,{key:2,to:{name:"register",params:{type:"particular"}},class:"text-primary-blue hover:underline"},{default:_(()=>[m(" PP ("+r(t.$t("pack"))+" "+r(t.$t("particular"))+") ? ",1)]),_:1})):g("",!0)])]),e("div",ne,[e("div",pe,[e("div",ue,[m(r(t.$t("already-signup"))+" ",1),e("a",ce,r(t.$t("login")),1)]),e("div",de,[e("h1",me,r(t.$t("register")),1),p(P)!=""?(o(),y(K,{key:0},{default:_(()=>[m(r(p(P)),1)]),_:1})):g("",!0),p(q)==2?(o(),c("div",ye,[e("p",null,r(t.$t("msg-a-register")),1)])):(o(),c("form",{key:2,onSubmit:l[10]||(l[10]=Z(n=>I(),["prevent"])),class:"py-7"},[a.type=="particular"?(o(),c("span",fe,[e("div",he,[e("span",null,[d(p(V),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),f(e("input",{type:"text",required:"","onUpdate:modelValue":l[0]||(l[0]=n=>s.firstname=n),placeholder:t.$t("firstname"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,be),[[k,s.firstname]])]),e("div",ge,[e("span",null,[d(p(V),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),f(e("input",{type:"text",required:"","onUpdate:modelValue":l[1]||(l[1]=n=>s.lastname=n),placeholder:t.$t("lastname"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,we),[[k,s.lastname]])])])):a.type=="business1"||a.type=="business2"?(o(),c("span",xe,[e("div",ve,[e("span",null,[d(p(V),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),f(e("input",{type:"text",required:"","onUpdate:modelValue":l[2]||(l[2]=n=>s.firstname=n),placeholder:t.$t("social-reason"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,ke),[[k,s.firstname]])])])):(o(),c("span",$e,[e("div",_e,[e("span",null,[d(p(V),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),f(e("input",{type:"text",required:"","onUpdate:modelValue":l[3]||(l[3]=n=>s.firstname=n),placeholder:t.$t("denomination"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,Ve),[[k,s.firstname]])])])),e("div",Pe,[e("span",null,[d(p(Y),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),f(e("input",{type:"email",required:"","onUpdate:modelValue":l[4]||(l[4]=n=>s.email=n),placeholder:t.$t("adresse")+" "+t.$t("email"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,qe),[[k,s.email]])]),e("div",Ce,[e("span",null,[d(p(R),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),f(e("input",{type:b.value?"text":"password",required:"","onUpdate:modelValue":l[5]||(l[5]=n=>s.password=n),placeholder:t.$t("password"),class:"form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,Be),[[j,s.password]]),e("span",{onClick:l[6]||(l[6]=n=>b.value=!b.value),class:"cursor-pointer"},[b.value?(o(),y(p(D),{key:1,class:"absolute right-2 top-2 h-6 w-6 text-primary-blue"})):(o(),y(p(z),{key:0,class:"absolute right-2 top-2 h-6 w-6 text-gray-400"}))])]),e("div",Se,[e("span",null,[d(p(R),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),f(e("input",{type:h.value?"text":"password",required:"","onUpdate:modelValue":l[7]||(l[7]=n=>s.password_confirmation=n),placeholder:t.$t("confirm-password"),class:"form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,Ue),[[j,s.password_confirmation]]),e("span",{onClick:l[8]||(l[8]=n=>h.value=!h.value),class:"cursor-pointer"},[h.value?(o(),y(p(D),{key:1,class:"absolute right-2 top-2 h-6 w-6 text-primary-blue"})):(o(),y(p(z),{key:0,class:"absolute right-2 top-2 h-6 w-6 text-gray-400"}))])]),d(W),e("div",Me,[e("h3",Ne,r(t.$t("show-confidentail-politic")),1),e("p",je,[f(e("input",{type:"checkbox",required:"","onUpdate:modelValue":l[9]||(l[9]=n=>w.value=n),class:"form-checkbox mr-2 text-primary-blue focus:ring-0"},null,512),[[H,w.value]]),m(" "+r(t.$t("confirm-confidentail-politic")),1)])]),e("div",null,[p(q)==0?(o(),c("button",De,r(t.$t("register")),1)):g("",!0),p(q)==1?(o(),c("button",Re,[d(L,{size:"small"})])):g("",!0)])],32))])])])])}}};export{Je as default};
