import{_ as D,u as E,r as S,o as R,a as F,c as H,b as U,d as r,e as i,f as e,g as a,w as m,h as l,i as x,j as y,t as o,k as h,l as I,m as u,n as f,p as P,q as T,s as Y,v as q,F as J,x as G}from"./app.4a599ac6.js";import{u as K}from"./chatServices.15a7a6b0.js";import{r as V,a as Q}from"./HomeIcon.32ce06fb.js";import{r as O}from"./UserCircleIcon.ec428794.js";import{S as W,a as X,A as Z}from"./swiper.min.9ff37fc8.js";/* empty css                        */const b=C=>(Y("data-v-1da87b54"),C=C(),q(),C),ee={class:"text-md relative z-10 flex w-full justify-between border-t-4 border-primary-blue bg-menu px-4 pb-2 font-semibold"},te={class:"hidden w-full lg:flex"},se={class:"group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},oe={class:"flex cursor-pointer items-center justify-center"},re=b(()=>e("span",{class:""},"Publication ",-1)),ae={class:"absolute left-0 z-40 mt-2 hidden w-60 flex-col bg-menu py-2 group-hover:flex"},ne=y(" Blog "),le={class:"group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},ie={class:"flex cursor-pointer items-center justify-center"},pe={class:"absolute left-0 z-40 mt-2 hidden w-60 flex-col bg-menu py-2 group-hover:flex"},ue=["href"],ce={class:"group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},de={class:"flex cursor-pointer items-center justify-center"},me={class:"absolute left-0 z-40 mt-2 hidden w-60 flex-col bg-menu py-2 group-hover:flex"},ve=b(()=>e("span",{class:""},"Liste ",-1)),he={class:""},xe={class:"group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},fe={class:"flex cursor-pointer items-center justify-center"},ye={class:"absolute left-0 z-40 mt-2 hidden w-60 flex-col bg-menu py-2 group-hover:flex"},be=b(()=>e("span",{class:""},"Offre d'emploi ",-1)),ge=b(()=>e("span",{class:""},"Appel d'offre ",-1)),we=b(()=>e("span",null,"Messagerie",-1)),$e={key:0,class:"ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"},ke={class:"flex items-start space-x-2"},_e={key:0},Ce=["src"],je={class:"absolute left-0 z-40 mt-2 hidden w-48 flex-col bg-menu py-2 group-hover:flex"},Se={key:0,class:"ml-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},ze=b(()=>e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),Ie=b(()=>e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),Me=[ze,Ie],Ae={key:1,href:"/login",class:"mx-2 flex bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"},Be={class:"group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},Ne={class:"flex cursor-pointer items-center justify-center"},Le={key:0},Te={key:1},Ve={key:2},Oe={key:3},Re={class:"absolute left-0 -z-10 mt-2 hidden w-48 flex-col bg-menu py-2 group-hover:flex"},Ue={class:"z-50 flex lg:hidden"},De={class:"relative py-2 px-3 uppercase text-menu"},Ee=b(()=>e("span",{class:"text-sm"},"Publication",-1)),Fe={class:"relative py-2 px-3 uppercase text-menu"},He={class:"text-sm"},Pe=["href"],Ye={class:"relative py-2 px-3 uppercase text-menu"},qe={class:"text-sm"},Je={class:"relative py-2 px-3 uppercase text-menu"},Ge={class:"text-sm"},Ke=b(()=>e("span",null,"Messagerie",-1)),Qe={key:0,class:"flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"},We={class:"flex items-center space-x-2 bg-primary-blue px-3 py-2 text-sm uppercase text-white transition-colors duration-200"},Xe={key:0},Ze=["src"],et={class:"flex flex-col py-2"},tt={key:0,class:"ml-3 h-5 w-5 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},st=b(()=>e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),ot=b(()=>e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),rt=[st,ot],at={key:1,href:"/login",class:"bg-primary-blue px-3 py-2 text-sm uppercase text-white transition-colors duration-200"},nt={class:"relative py-2 px-3 uppercase text-menu"},lt={key:0},it={key:1},pt={key:2},ut={key:3},ct={__name:"Navigation",setup(C){const{locale:k}=E(),c=S(""),j=S("");S("");const g=S(0),{getConversationsUser:M,conversations:_}=K();let w=new Date,A=w.getFullYear(),B=w.getDate(),N=w.getMonth();R(async()=>{localStorage.lang?k.value=localStorage.lang:localStorage.lang=k.value,localStorage.token&&(c.value=JSON.parse(localStorage.user),j.value=localStorage.token,await M(c.value.id),window.Echo.channel(`chat.${c.value.id}`).listen(".chat-update",async t=>{await M(c.value.id)}))});const p=F({lang:!1,profile:!1,event:!1,post:!1,menu:!1,logout:!1,jobs:!1}),L=async()=>{try{g.value=1,await P.post("/api/logout",{},{headers:{Authorization:`Bearer ${localStorage.token}`}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),g.value=2,location.href="/"}catch(t){g.value=0,t.response.status==401&&(location.href="/",window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}},v=(t,s="",d="")=>{s!=""&&d!=""?T.push({name:t,params:{slug:s.toLocaleLowerCase,id:d}}):T.push({name:t}),p.menu=!1},$=async t=>{k.value=t,localStorage.lang=k.value,location.reload()},z=H(()=>_.value?_.value.length==1?_.value[0].nbUnRead:_.value.reduce((t,s)=>t.nbUnRead+s.nbUnRead,0):0);return(t,s)=>{const d=U("router-link");return r(),i("div",ee,[e("nav",te,[a(d,{to:{name:"home"},class:"flex items-start justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[a(l(V),{class:"h-6 w-6"})]),_:1}),e("div",se,[e("div",oe,[re,a(l(x),{class:"ml-2 h-5 w-5"})]),e("div",ae,[a(d,{to:{name:"articles"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[y(o(t.$t("articles")),1)]),_:1}),a(d,{to:{name:"propau"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[y(o(t.$t("propau")),1)]),_:1}),a(d,{to:{name:"blog"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[ne]),_:1})])]),e("div",le,[e("span",ie,[y(o(t.$t("profile"))+" ",1),a(l(x),{class:"ml-2 h-5 w-5"})]),e("div",pe,[a(d,{to:{name:"particular"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[y(o(t.$t("particular")),1)]),_:1}),a(d,{to:{name:"establishment"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[y(o(t.$t("establishment")),1)]),_:1}),a(d,{to:{name:"ip"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[y(o(t.$t("ip")),1)]),_:1})])]),e("a",{href:`/events?date=${l(A)}-${l(N)+1}-${l(B)}&profile=&enterType=&continent=&country=&zone=&city=&ministry=&activityArea=&eventType=&eventMode=`,class:"flex items-start justify-center px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"}," Evenements ",8,ue),e("div",ce,[e("div",de,[e("span",null,o(t.$t("univerities")),1),a(l(x),{class:"ml-2 h-5 w-5"})]),e("div",me,[a(d,{to:{name:"universities"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[ve]),_:1}),a(d,{to:{name:"ads"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[e("span",he,o(t.$t("ads-s")),1)]),_:1})])]),e("div",xe,[e("div",fe,[e("span",null,o(t.$t("jobs")),1),a(l(x),{class:"ml-2 h-5 w-5"})]),e("div",ye,[a(d,{to:{name:"jobs"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[be]),_:1}),a(d,{to:{name:"tenders"},class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[ge]),_:1})])]),a(d,{to:{name:"chat"},class:"flex items-center px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[we,l(z)>0?(r(),i("span",$e,[e("span",null,o(l(z)),1)])):h("",!0)]),_:1}),a(d,{to:{name:"contact"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[y(o(t.$t("contact")),1)]),_:1}),j.value?(r(),I(d,{key:0,to:{name:"compte",params:{slug:c.value.slug,id:c.value.id}},class:"group relative mx-2 block bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"},{default:m(()=>[e("div",ke,[c.value.avatar?(r(),i("span",_e,[e("img",{src:c.value.avatar,alt:"",class:"h-7 w-7 rounded-full border object-cover shadow"},null,8,Ce)])):(r(),I(l(O),{key:1,class:"h-8 w-8 text-white"})),e("span",null,o(c.value.firstname),1),e("span",null,[a(l(x),{class:"h-5 w-5"})])]),e("div",je,[e("button",{type:"button",onClick:s[0]||(s[0]=u(n=>L(),["prevent"])),class:"flex items-center px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},[y(o(t.$t("logout"))+" ",1),g.value==1?(r(),i("svg",Se,Me)):h("",!0)])])]),_:1},8,["to"])):(r(),i("a",Ae,o(t.$t("login")),1)),e("div",Be,[e("div",Ne,[t.$i18n.locale=="fr"?(r(),i("span",Le,o(t.$t("fr")),1)):t.$i18n.locale=="en"?(r(),i("span",Te,o(t.$t("en")),1)):t.$i18n.locale=="es"?(r(),i("span",Ve,o(t.$t("es")),1)):(r(),i("span",Oe,o(t.$t("pt")),1)),a(l(x),{class:"ml-2 h-5 w-5"})]),e("div",Re,[t.$i18n.locale!="fr"?(r(),i("span",{key:0,onClick:s[1]||(s[1]=u(n=>$("fr"),["prevent"])),class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(t.$t("fr")),1)):h("",!0),t.$i18n.locale!="en"?(r(),i("span",{key:1,onClick:s[2]||(s[2]=u(n=>$("en"),["prevent"])),class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(t.$t("en")),1)):h("",!0),t.$i18n.locale!="es"?(r(),i("span",{key:2,onClick:s[3]||(s[3]=u(n=>$("es"),["prevent"])),class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(t.$t("es")),1)):h("",!0),t.$i18n.locale!="pt"?(r(),i("span",{key:3,onClick:s[4]||(s[4]=u(n=>$("pt"),["prevent"])),class:"block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(t.$t("pt")),1)):h("",!0)])])]),e("nav",Ue,[e("button",{type:"button",onClick:s[5]||(s[5]=u(n=>v("home"),["prevent"])),class:"flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},[a(l(V),{class:"h-6 w-6"})]),e("button",{type:"button",onClick:s[6]||(s[6]=n=>p.menu=!p.menu),class:"flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},[a(l(Q),{class:"h-6 w-6"})]),e("div",{class:f(["absolute top-full left-0 mx-auto flex w-full flex-col justify-center border bg-white shadow-md transition-transform duration-1000",[p.menu?"translate-x-0":"-translate-x-full"]])},[e("div",De,[e("span",{class:"flex cursor-pointer items-center justify-between",onClick:s[7]||(s[7]=n=>p.post=!p.post)},[Ee,e("span",{class:f(["transition-all duration-500",[p.post?" rotate-[180deg]":"rotate-0"]])},[a(l(x),{class:"ml-2 h-5 w-5"})],2)]),e("div",{class:f(["flex flex-col overflow-hidden transition-all duration-700",[p.post?"max-h-[500px]":"max-h-0"]])},[e("a",{href:"#",onClick:s[8]||(s[8]=u(n=>v("articles"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("articles")),1),e("a",{href:"#",onClick:s[9]||(s[9]=u(n=>v("propau"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("propau")),1),e("a",{href:"#",type:"button",onClick:s[10]||(s[10]=u(n=>v("blog"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("blog")),1)],2)]),e("div",Fe,[e("span",{class:"flex cursor-pointer items-center justify-between",onClick:s[11]||(s[11]=n=>p.profile=!p.profile)},[e("span",He,o(t.$t("profile")),1),e("span",{class:f(["transition-all duration-500",[p.profile?" rotate-[180deg]":"rotate-0"]])},[a(l(x),{class:"ml-2 h-5 w-5"})],2)]),e("div",{class:f(["flex flex-col overflow-hidden transition-all duration-700",[p.profile?"max-h-[500px]":"max-h-0"]])},[e("a",{href:"#",onClick:s[12]||(s[12]=u(n=>v("particular"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("particular")),1),e("a",{href:"#",onClick:s[13]||(s[13]=u(n=>v("establishment"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("establishment")),1),e("a",{href:"#",type:"button",onClick:s[14]||(s[14]=u(n=>v("ip"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("ip")),1)],2)]),e("a",{href:`/events?date=${l(A)}-${l(N)+1}-${l(B)}&profile=&enterType=&continent=&country=&zone=&city=&ministry=&activityArea=&eventType=&eventMode=`,class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," Evenements ",8,Pe),e("div",Ye,[e("div",{class:"flex cursor-pointer items-center justify-between",onClick:s[15]||(s[15]=n=>p.event=!p.event)},[e("span",qe,o(t.$t("universities")),1),e("span",{class:f(["transition-all duration-500",[p.event?" rotate-[180deg]":"rotate-0"]])},[a(l(x),{class:"ml-2 h-5 w-5"})],2)]),e("div",{class:f(["flex flex-col overflow-hidden transition-all duration-700",[p.event?"max-h-[500px]":"max-h-0"]])},[e("a",{href:"#",onClick:s[16]||(s[16]=u(n=>v("universities"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," List "),e("a",{href:"#",onClick:s[17]||(s[17]=u(n=>v("ads"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("ads")),1)],2)]),e("div",Je,[e("div",{class:"flex cursor-pointer items-center justify-between",onClick:s[18]||(s[18]=n=>p.jobs=!p.jobs)},[e("span",Ge,o(t.$t("jobs")),1),e("span",{class:f(["transition-all duration-500",[p.jobs?" rotate-[180deg]":"rotate-0"]])},[a(l(x),{class:"ml-2 h-5 w-5"})],2)]),e("div",{class:f(["flex flex-col overflow-hidden transition-all duration-700",[p.jobs?"max-h-[500px]":"max-h-0"]])},[e("a",{href:"#",onClick:s[19]||(s[19]=u(n=>v("jobs"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," Offre d'emploi "),e("a",{href:"#",onClick:s[20]||(s[20]=u(n=>v("tenders"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," Appel d'Offre ")],2)]),e("a",{href:"#",onClick:s[21]||(s[21]=u(n=>v("chat"),["prevent"])),class:"flex justify-between px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},[Ke,l(z)>0?(r(),i("span",Qe,[e("span",null,o(l(z)),1)])):h("",!0)]),e("a",{href:"#",onClick:s[22]||(s[22]=u(n=>v("contact"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("contact")),1),j.value?(r(),i("a",{key:0,href:"#",onClick:s[24]||(s[24]=u(n=>v("compte",c.value.firstname,c.value.id),["prevent"]))},[e("div",We,[c.value.avatar?(r(),i("span",Xe,[e("img",{src:c.value.avatar,class:"h-8 w-8 rounded-full border shadow",alt:""},null,8,Ze)])):(r(),I(l(O),{key:1,class:"h-8 w-8 text-white"})),e("span",null,o(c.value.firstname)+" "+o(c.value.lastname),1)]),e("div",et,[e("a",{href:"#",onClick:s[23]||(s[23]=u(n=>L(),["prevent"])),class:"flex items-center px-8 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},[y(o(t.$t("logout"))+" ",1),g.value==1?(r(),i("svg",tt,rt)):h("",!0)])])])):(r(),i("a",at,o(t.$t("login")),1)),e("div",nt,[e("label",{class:"flex cursor-pointer items-center justify-between text-sm",onClick:s[25]||(s[25]=n=>p.lang=!p.lang)},[t.$i18n.locale=="fr"?(r(),i("span",lt,o(t.$t("fr")),1)):t.$i18n.locale=="en"?(r(),i("span",it,o(t.$t("en")),1)):t.$i18n.locale=="es"?(r(),i("span",pt,o(t.$t("es")),1)):(r(),i("span",ut,o(t.$t("pt")),1)),e("span",{class:f(["transition-all duration-500",[p.lang?" rotate-[180deg]":"rotate-0"]])},[a(l(x),{class:"ml-2 h-5 w-5"})],2)]),e("div",{class:f(["flex flex-col overflow-hidden transition-all duration-700",[p.lang?"max-h-[500px]":"max-h-0"]])},[t.$i18n.locale!="fr"?(r(),i("span",{key:0,onClick:s[26]||(s[26]=u(n=>$("fr"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("fr")),1)):h("",!0),t.$i18n.locale!="en"?(r(),i("span",{key:1,onClick:s[27]||(s[27]=u(n=>$("en"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("en")),1)):h("",!0),t.$i18n.locale!="es"?(r(),i("span",{key:2,onClick:s[28]||(s[28]=u(n=>$("es"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("es")),1)):h("",!0),t.$i18n.locale!="pt"?(r(),i("span",{key:3,onClick:s[29]||(s[29]=u(n=>$("pt"),["prevent"])),class:"duration-200hover:text-white px-3 py-2 text-sm uppercase text-menu transition-colors hover:bg-primary-blue"},o(t.$t("pt")),1)):h("",!0)],2)])],2)])])}}},dt=D(ct,[["__scopeId","data-v-1da87b54"]]),mt={class:"mx-auto w-full bg-white xl:w-[90%]"},vt={class:"flex flex-col items-center border-b border-gray-100 px-5 py-2 md:flex-row md:justify-start"},ht={class:"mx-4 font-semibold"},xt=e("div",{class:"flex flex-col items-center justify-center space-y-2 p-4 md:justify-between lg:flex-row lg:space-y-0"},[e("img",{src:"/img/logo_au.png",class:"h-16 w-80",alt:""}),e("img",{src:"/img/barniere-africa.png",class:"h-20",alt:""})],-1),kt={__name:"Header",setup(C){const k=new Date().toUTCString().substr(0,16),c=S([]);R(async()=>{let g=await axios.get("/api/posts-caroussel/"+localStorage.lang);c.value=g.data.data});const j=[Z];return(g,M)=>{const _=U("router-link");return r(),i("div",mt,[e("div",vt,[e("h1",null,o(l(k)),1),e("h1",null,[e("span",ht,o(g.$t("lastest"))+" :",1),a(l(X),{class:"inline-flex h-5","space-between":0,"slides-per-view":1,direction:"vertical",autoplay:{delay:3500,disableOnInteraction:!1},modules:j},{default:m(()=>[(r(!0),i(J,null,G(c.value,w=>(r(),I(l(W),{class:"relative",key:w.id},{default:m(()=>[a(_,{to:{name:"show.post",params:{id:w.id,slug:w.slug}},class:"text-primary-blue"},{default:m(()=>[y(o(w.title.substring(0,29)+"..."),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]),xt,a(dt)])}}};export{kt as default};
