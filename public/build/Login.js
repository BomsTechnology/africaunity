var q=Object.defineProperty;var V=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var B=(s,o,t)=>o in s?q(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,N=(s,o)=>{for(var t in o||(o={}))D.call(o,t)&&B(s,t,o[t]);if(V)for(var t of V(o))K.call(o,t)&&B(s,t,o[t]);return s};var $=(s,o,t)=>new Promise((n,a)=>{var x=c=>{try{d(t.next(c))}catch(h){a(h)}},f=c=>{try{d(t.throw(c))}catch(h){a(h)}},d=c=>c.done?n(c.value):Promise.resolve(c.value).then(x,f);d((t=t.apply(s,o)).next())});import{b as F,I as v,L,d as p,e as b,f as e,t as l,g as m,w,j as g,h as u,G as O,r as k,a as A,o as U,l as M,P as E,k as j,m as P,K as R,$ as T,M as G,F as I,R as J}from"./app.js";import{u as H}from"./authServices.js";import{r as Q}from"./FaceSmileIcon.js";import{r as W,_ as X}from"./ReCaptcha.js";import{r as Y}from"./EnvelopeIcon.js";import{r as Z}from"./LockClosedIcon.js";import{r as ee}from"./EyeIcon.js";const te={class:"fixed inset-0 z-40 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},se={class:"flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"},oe=e("span",{class:"hidden sm:inline-block sm:h-screen sm:align-middle","aria-hidden":"true"},"\u200B",-1),le={class:"inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"},re={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},ie={class:"sm:flex sm:flex-col sm:items-center sm:justify-center"},ne=e("div",{class:"mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"},[e("svg",{class:"h-8 w-8 text-yellow-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),ae={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},de={class:"py-4"},ce={class:"text-md text-center text-gray-500"},me={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-center sm:px-6"},ue={__name:"NotLogin",props:{open:Boolean,toogleModal:Function},setup(s){return(o,t)=>{const n=F("router-link");return v((p(),b("div",te,[e("div",se,[e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true",onClick:t[0]||(t[0]=(...a)=>s.toogleModal&&s.toogleModal(...a))}),oe,e("div",le,[e("div",re,[e("div",ie,[ne,e("div",ae,[e("div",de,[e("p",ce,l(o.$t("modal-not-login")),1)])])])]),e("div",me,[m(n,{to:{name:"pack"},class:"inline-flex w-full justify-center rounded-md border border-transparent bg-primary-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"},{default:w(()=>[g(l(o.$t("register")),1)]),_:1}),e("button",{type:"button",onClick:t[1]||(t[1]=(...a)=>s.toogleModal&&s.toogleModal(...a)),class:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"},l(o.$t("login")),1)])])])],512)),[[L,s.open]])}}},pe={class:"fixed inset-0 z-10 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},fe={class:"flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"},ge=e("span",{class:"hidden sm:inline-block sm:h-screen sm:align-middle","aria-hidden":"true"},"\u200B",-1),xe={class:"inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"},he={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},ye={class:"sm:flex sm:flex-col sm:items-center sm:justify-center"},be={class:"mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-20 sm:w-20"},we={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},ve={class:"py-4"},_e={class:"text-md text-center font-semibold text-gray-500"},$e={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:items-center sm:justify-center sm:px-6"},ke={__name:"VerifyOK",props:{open:Boolean,toogleModal:Function},setup(s){return(o,t)=>v((p(),b("div",pe,[e("div",fe,[e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true",onClick:t[0]||(t[0]=(...n)=>s.toogleModal&&s.toogleModal(...n))}),ge,e("div",xe,[e("div",he,[e("div",ye,[e("div",be,[m(u(Q),{class:"h-16 w-16 text-green-600"})]),e("div",we,[e("div",ve,[e("p",_e,l(o.$t("modal-verif-ok")),1)])])])]),e("div",$e,[e("button",{type:"button",onClick:t[1]||(t[1]=(...n)=>s.toogleModal&&s.toogleModal(...n)),class:"mt-3 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," OK ")])])])],512)),[[L,s.open]])}},Me={class:"mx-auto w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"},je={class:"space-y-6 text-center lg:w-[60%] lg:text-left"},Ce={class:"text-4xl font-bold text-primary-blue lg:text-5xl"},Se=J('<svg xmlns="http://www.w3.org/2000/svg" class="inline h-10 w-10" viewBox="0 0 36 36"><circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle><path fill="#664500" d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379.055-.217-.043-.442-.237-.554-.195-.111-.439-.078-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855C11.256 23.05 11.128 23 11 23c-.084 0-.169.021-.246.064-.196.112-.294.339-.239.557z"></path><ellipse fill="#664500" cx="12" cy="13.5" rx="2.5" ry="3.5"></ellipse><ellipse fill="#664500" cx="24" cy="13.5" rx="2.5" ry="3.5"></ellipse></svg>',1),Ve={class:"p-6 lg:w-[40%]"},Be={class:"border-t-8 border-primary-blue shadow"},Ne={class:"md:text-md p-4 text-center text-sm text-gray-500"},Fe={class:"px-6 py-2"},Le={class:"text-center text-3xl font-bold text-[#242A56]"},ze={class:"relative"},qe=["placeholder"],De={class:"relative"},Ke=["type","placeholder"],Oe={key:0,type:"submit",class:"mt-4 w-full bg-primary-blue px-8 py-2 text-lg text-white"},Ae={key:1,disabled:"",type:"submit",class:"mt-4 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"},Ue={class:"pt-6 text-center"},Qe={__name:"Login",props:{redirect:{required:!1,type:String}},setup(s){const o=s,t=O(),n=localStorage.user?JSON.parse(localStorage.user):"",a=k(!1),x=k(!1),f=k(!1),d=A({email:"",password:"",recaptcha:""}),c=()=>{a.value=!1,x.value=!1},{loginUser:h,errors:_,loading:C}=H();U(()=>$(this,null,function*(){o.redirect=="not-login"?a.value=!0:o.redirect=="verif-ok"&&(x.value=!0),localStorage.token&&t.push({name:"compte",params:{slug:n.slug,id:n.id}})}));const z=r=>$(this,null,function*(){let i=document.querySelector("textarea[name=g-recaptcha-response]");d.recaptcha=i?i.value:"",yield h(N({},d)),_.value==""&&(location.href=window.location.origin)});return(r,i)=>{const S=F("router-link");return p(),b(I,null,[m(ue,{open:a.value,toogleModal:c},null,8,["open"]),m(ke,{open:x.value,toogleModal:c},null,8,["open"]),e("div",Me,[e("div",je,[e("h1",Ce,[e("span",null,[g(l(r.$t("login-welcome-msg"))+" ",1),Se])]),e("p",null,l(r.$t("login-desc")),1)]),e("div",Ve,[e("div",Be,[e("div",Ne,[g(l(r.$t("no-signup"))+" ",1),m(S,{class:"text-[#242A56] hover:underline font-bold",to:{name:"pack"}},{default:w(()=>[g(l(r.$t("register")),1)]),_:1})]),e("div",Fe,[e("h1",Le,l(r.$t("login")),1),u(_)!=""?(p(),M(E,{key:0},{default:w(()=>[g(l(u(_)),1)]),_:1})):j("",!0),e("form",{onSubmit:i[3]||(i[3]=P(y=>z(),["prevent"])),class:"py-7"},[e("div",ze,[e("span",null,[m(u(Y),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),v(e("input",{type:"email",required:"","onUpdate:modelValue":i[0]||(i[0]=y=>d.email=y),placeholder:r.$t("adresse")+" "+r.$t("email"),name:"email",class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,qe),[[R,d.email]])]),e("div",De,[e("span",null,[m(u(Z),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),v(e("input",{type:f.value?"text":"password",required:"","onUpdate:modelValue":i[1]||(i[1]=y=>d.password=y),placeholder:r.$t("password"),name:"password",class:"form-input mt-3 block w-full border-gray-400 px-5 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,Ke),[[T,d.password]]),e("span",{onClick:i[2]||(i[2]=y=>f.value=!f.value),class:"cursor-pointer"},[f.value?(p(),M(u(W),{key:1,class:"absolute right-2 top-2 h-6 w-6 text-primary-blue"})):(p(),M(u(ee),{key:0,class:"absolute right-2 top-2 h-6 w-6 text-gray-400"}))])]),m(X),e("div",null,[u(C)==0?(p(),b("button",Oe,l(r.$t("login")),1)):j("",!0),u(C)==1?(p(),b("button",Ae,[m(G,{size:"small"})])):j("",!0)]),e("div",Ue,[m(S,{class:"text-gray-400 hover:underline",to:{name:"forgot.password"}},{default:w(()=>[g(l(r.$t("password-forgot"))+" ? ",1)]),_:1},8,["to"])])],32)])])])])],64)}}};export{Qe as default};
