import{_ as O,u as E,r as S,o as A,a as F,b as D,c as a,d as l,e,f as n,w as v,g as i,h as y,i as $,v as k,j as m,t as o,k as I,l as p,m as f,n as H,p as L,q as P,s as Y,F as q,x as J}from"./app.1097d858.js";import{r as T,a as R}from"./HomeIcon.594e9713.js";import{r as V}from"./UserCircleIcon.456dbd50.js";import{S as U,a as G,A as K}from"./swiper.min.43a67e3f.js";/* empty css                        */const b=C=>(P("data-v-ba9a395b"),C=C(),Y(),C),Q={class:"text-md relative z-10 flex w-full justify-between border-t-4 border-primary-blue bg-menu px-4 pb-2 font-semibold"},W={class:"hidden lg:flex"},X=b(()=>e("span",{class:""},"Publication ",-1)),Z={class:"absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"},ee=m(" Blog "),te={class:"absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"},se=["href"],oe={class:"absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"},re=b(()=>e("span",{class:""},"Liste ",-1)),ae={class:""},ne={class:"absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"},le=b(()=>e("span",{class:""},"Offre d'emploi ",-1)),ie=b(()=>e("span",{class:""},"Appel d'offre ",-1)),pe={key:0},ue=["src"],ce={class:"absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2"},ve={key:0,class:"ml-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},de=b(()=>e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),me=b(()=>e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),he=[de,me],ye={key:1,href:"/login",class:"mx-2 flex bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"},fe={key:0},xe={key:1},be={key:2},ge={key:3},we={class:"absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2"},$e={class:"z-50 flex lg:hidden"},ke={class:"absolute mx-auto mt-12 flex w-[90%] flex-col justify-center border border-menu bg-white shadow-md"},_e={class:"relative py-2 px-3 uppercase text-menu"},Ce={class:"flex cursor-pointer items-center"},je=b(()=>e("span",null,"Publication",-1)),Se={class:"mt-2 flex flex-col py-2"},Me={class:"relative py-2 px-3 uppercase text-menu"},ze={class:"flex cursor-pointer items-center"},Ie={class:"mt-2 flex flex-col py-2"},Ae=["href"],Be={class:"relative py-2 px-3 uppercase text-menu"},Ne={class:"flex cursor-pointer items-center"},Le={class:"mt-2 flex flex-col py-2"},Te={class:"relative py-2 px-3 uppercase text-menu"},Ve={class:"flex cursor-pointer items-center"},De={class:"mt-2 flex flex-col py-2"},Oe={class:"flex items-center space-x-2 bg-primary-blue px-3 py-2 text-sm uppercase text-white transition-colors duration-200"},Ee={key:0},Fe=["src"],He={class:"flex flex-col py-2"},Pe={key:0,class:"ml-3 h-5 w-5 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Ye=b(()=>e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),qe=b(()=>e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),Je=[Ye,qe],Re={key:1,href:"/login",class:"bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"},Ue={class:"relative py-2 px-3 uppercase text-menu"},Ge={class:"flex cursor-pointer items-center"},Ke={key:0},Qe={key:1},We={key:2},Xe={key:3},Ze={class:"mt-2 flex flex-col py-2"},et={__name:"Navigation",setup(C){const{locale:_}=E(),d=S(""),j=S("");S("");const x=S(0);let M=new Date,z=M.getFullYear(),w=M.getDate(),B=M.getMonth();A(async()=>{localStorage.token&&(d.value=JSON.parse(localStorage.user),j.value=localStorage.token)});const u=F({lang:!1,profile:!1,event:!1,post:!1,menu:!1,logout:!1,jobs:!1}),N=async()=>{try{x.value=1,await H.post("/api/logout",{},{headers:{Authorization:`Bearer ${localStorage.token}`}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),x.value=2,location.href="/"}catch(s){x.value=0,s.response.status==401&&(location.href="/",window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}},h=(s,t="",c="")=>{t!=""&&c!=""?L.push({name:s,params:{slug:t.toLocaleLowerCase,id:c}}):L.push({name:s}),u.menu=!1},g=async s=>{_.value=s,localStorage.lang=_.value,location.reload()};return A(async()=>{localStorage.lang?_.value=localStorage.lang:localStorage.lang=_.value}),(s,t)=>{const c=D("router-link");return a(),l("div",Q,[e("nav",W,[n(c,{to:{name:"home"},class:"flex items-start justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[n(i(T),{class:"h-6 w-6"})]),_:1}),e("div",{class:"relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue",onMouseleave:t[1]||(t[1]=r=>u.post=!1)},[e("div",{class:"flex cursor-pointer items-center justify-center",onMouseover:t[0]||(t[0]=r=>u.post=!0)},[X,n(i(y),{class:"ml-2 h-5 w-5"})],32),$(e("div",Z,[n(c,{to:{name:"articles"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[m(o(s.$t("articles")),1)]),_:1}),n(c,{to:{name:"propau"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[m(o(s.$t("propau")),1)]),_:1}),n(c,{to:{name:"blog"},class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[ee]),_:1})],512),[[k,u.post]])],32),e("div",{onMouseleave:t[3]||(t[3]=r=>u.profile=!1),class:"relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},[e("span",{onMouseover:t[2]||(t[2]=r=>u.profile=!0),class:"flex cursor-pointer items-center justify-center"},[m(o(s.$t("profile"))+" ",1),n(i(y),{class:"ml-2 h-5 w-5"})],32),$(e("div",te,[n(c,{to:{name:"particular"},class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[m(o(s.$t("particular")),1)]),_:1}),n(c,{to:{name:"establishment"},class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[m(o(s.$t("establishment")),1)]),_:1}),n(c,{to:{name:"ip"},class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[m(o(s.$t("ip")),1)]),_:1})],512),[[k,u.profile]])],32),e("a",{href:`/events?date=${i(z)}-${i(B)+1}-${i(w)}&profile=&enterType=&continent=&country=&zone=&city=&ministry=&activityArea=&eventType=&eventMode=`,class:"flex items-start justify-center px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"}," Evenements ",8,se),e("div",{class:"relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue",onMouseleave:t[5]||(t[5]=r=>u.event=!1)},[e("div",{onMouseover:t[4]||(t[4]=r=>u.event=!0),class:"flex cursor-pointer items-center justify-center"},[e("span",null,o(s.$t("univerities")),1),n(i(y),{class:"ml-2 h-5 w-5"})],32),$(e("div",oe,[n(c,{to:{name:"universities"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[re]),_:1}),n(c,{to:{name:"ads"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[e("span",ae,o(s.$t("ads-s")),1)]),_:1})],512),[[k,u.event]])],32),e("div",{class:"relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue",onMouseleave:t[7]||(t[7]=r=>u.jobs=!1)},[e("div",{onMouseover:t[6]||(t[6]=r=>u.jobs=!0),class:"flex cursor-pointer items-center justify-center"},[e("span",null,o(s.$t("jobs")),1),n(i(y),{class:"ml-2 h-5 w-5"})],32),$(e("div",ne,[n(c,{to:{name:"jobs"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[le]),_:1}),n(c,{to:{name:"tenders"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[ie]),_:1})],512),[[k,u.jobs]])],32),n(c,{to:{name:"contact"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:v(()=>[m(o(s.$t("contact")),1)]),_:1}),j.value?(a(),I(c,{key:0,onMouseleave:t[10]||(t[10]=r=>u.logout=!1),to:{name:"compte",params:{slug:d.value.slug,id:d.value.id}},class:"relative mx-2 bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"},{default:v(()=>[e("div",{onMouseover:t[8]||(t[8]=r=>u.logout=!0),class:"flex items-start space-x-2"},[d.value.avatar?(a(),l("span",pe,[e("img",{src:d.value.avatar,alt:"",class:"h-7 w-7 rounded-full border object-cover shadow"},null,8,ue)])):(a(),I(i(V),{key:1,class:"h-8 w-8 text-white"})),e("span",null,o(d.value.firstname),1),e("span",null,[n(i(y),{class:"h-5 w-5"})])],32),$(e("div",ce,[e("button",{type:"button",onClick:t[9]||(t[9]=p(r=>N(),["prevent"])),class:"flex items-center px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},[m(o(s.$t("logout"))+" ",1),x.value==1?(a(),l("svg",ve,he)):f("",!0)])],512),[[k,u.logout]])]),_:1},8,["to"])):(a(),l("a",ye,o(s.$t("login")),1)),e("div",{onMouseleave:t[16]||(t[16]=r=>u.lang=!1),class:"relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},[e("label",{onMouseover:t[11]||(t[11]=r=>u.lang=!0),class:"flex cursor-pointer items-center justify-center"},[s.$i18n.locale=="fr"?(a(),l("span",fe,o(s.$t("fr")),1)):s.$i18n.locale=="en"?(a(),l("span",xe,o(s.$t("en")),1)):s.$i18n.locale=="es"?(a(),l("span",be,o(s.$t("es")),1)):(a(),l("span",ge,o(s.$t("pt")),1)),n(i(y),{class:"ml-2 h-5 w-5"})],32),$(e("div",we,[s.$i18n.locale!="fr"?(a(),l("a",{key:0,href:"#",onClick:t[12]||(t[12]=p(r=>g("fr"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(s.$t("fr")),1)):f("",!0),s.$i18n.locale!="en"?(a(),l("a",{key:1,href:"#",onClick:t[13]||(t[13]=p(r=>g("en"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(s.$t("en")),1)):f("",!0),s.$i18n.locale!="es"?(a(),l("a",{key:2,href:"#",onClick:t[14]||(t[14]=p(r=>g("es"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(s.$t("es")),1)):f("",!0),s.$i18n.locale!="pt"?(a(),l("a",{key:3,href:"#",onClick:t[15]||(t[15]=p(r=>g("pt"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(s.$t("pt")),1)):f("",!0)],512),[[k,u.lang]])],32)]),e("nav",$e,[e("button",{type:"button",onClick:t[17]||(t[17]=p(r=>h("home"),["prevent"])),class:"flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},[n(i(T),{class:"h-6 w-6"})]),e("button",{type:"button",onClick:t[18]||(t[18]=r=>u.menu=!u.menu),class:"flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},[n(i(R),{class:"h-6 w-6"})]),$(e("div",ke,[e("div",_e,[e("span",Ce,[je,n(i(y),{class:"ml-2 h-5 w-5"})]),e("div",Se,[e("a",{href:"#",onClick:t[19]||(t[19]=p(r=>h("articles"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("articles")),1),e("a",{href:"#",onClick:t[20]||(t[20]=p(r=>h("propau"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("propau")),1),e("a",{href:"#",type:"button",onClick:t[21]||(t[21]=p(r=>h("blog"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("blog")),1)])]),e("div",Me,[e("span",ze,[m(o(s.$t("profile"))+" ",1),n(i(y),{class:"ml-2 h-5 w-5"})]),e("div",Ie,[e("a",{href:"#",onClick:t[22]||(t[22]=p(r=>h("particular"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("particular")),1),e("a",{href:"#",onClick:t[23]||(t[23]=p(r=>h("establishment"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("establishment")),1),e("a",{href:"#",type:"button",onClick:t[24]||(t[24]=p(r=>h("ip"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("ip")),1)])]),e("a",{href:`/events?date=${i(z)}-${i(B)+1}-${i(w)}&profile=&enterType=&continent=&country=&zone=&city=&ministry=&activityArea=&eventType=&eventMode=`,class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," Evenements ",8,Ae),e("div",Be,[e("div",Ne,[m(o(s.$t("universities"))+" ",1),n(i(y),{class:"ml-2 h-5 w-5"})]),e("div",Le,[e("a",{href:"#",onClick:t[25]||(t[25]=p(r=>h("universities"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," List "),e("a",{href:"#",onClick:t[26]||(t[26]=p(r=>h("ads"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("ads")),1)])]),e("div",Te,[e("div",Ve,[m(o(s.$t("jobs"))+" ",1),n(i(y),{class:"ml-2 h-5 w-5"})]),e("div",De,[e("a",{href:"#",onClick:t[27]||(t[27]=p(r=>h("jobs"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," Offre d'emploi "),e("a",{href:"#",onClick:t[28]||(t[28]=p(r=>h("tenders"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," Appel d'Offre ")])]),e("a",{href:"#",onClick:t[29]||(t[29]=p(r=>h("contact"),["prevent"])),class:"px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("contact")),1),j.value?(a(),l("a",{key:0,href:"#",onClick:t[31]||(t[31]=p(r=>h("compte",d.value.firstname,d.value.id),["prevent"]))},[e("div",Oe,[d.value.avatar?(a(),l("span",Ee,[e("img",{src:d.value.avatar,class:"h-16 w-16 rounded-full border shadow",alt:""},null,8,Fe)])):(a(),I(i(V),{key:1,class:"h-8 w-8 text-white"})),e("span",null,o(d.value.firstname)+" "+o(d.value.lastname),1)]),e("div",He,[e("a",{href:"#",onClick:t[30]||(t[30]=p(r=>N(),["prevent"])),class:"flex items-center px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},[m(o(s.$t("logout"))+" ",1),x.value==1?(a(),l("svg",Pe,Je)):f("",!0)])])])):(a(),l("a",Re,o(s.$t("login")),1)),e("div",Ue,[e("label",Ge,[s.$i18n.locale=="fr"?(a(),l("span",Ke,o(s.$t("fr")),1)):s.$i18n.locale=="en"?(a(),l("span",Qe,o(s.$t("en")),1)):s.$i18n.locale=="es"?(a(),l("span",We,o(s.$t("es")),1)):(a(),l("span",Xe,o(s.$t("pt")),1)),n(i(y),{class:"ml-2 h-5 w-5"})]),e("div",Ze,[s.$i18n.locale!="fr"?(a(),l("a",{key:0,href:"#",onClick:t[32]||(t[32]=p(r=>g("fr"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("fr")),1)):f("",!0),s.$i18n.locale!="en"?(a(),l("a",{key:1,href:"#",onClick:t[33]||(t[33]=p(r=>g("en"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("en")),1)):f("",!0),s.$i18n.locale!="es"?(a(),l("a",{key:2,href:"#",onClick:t[34]||(t[34]=p(r=>g("es"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(s.$t("es")),1)):f("",!0),s.$i18n.locale!="pt"?(a(),l("a",{key:3,href:"#",onClick:t[35]||(t[35]=p(r=>g("pt"),["prevent"])),class:"duration-200hover:text-white px-3 py-2 text-sm uppercase text-menu transition-colors hover:bg-primary-blue"},o(s.$t("pt")),1)):f("",!0)])])],512),[[k,u.menu]])])])}}},tt=O(et,[["__scopeId","data-v-ba9a395b"]]),st={class:"mx-auto w-full bg-white xl:w-[90%]"},ot={class:"flex flex-col items-center border-b border-gray-100 px-5 py-2 md:flex-row md:justify-start"},rt={class:"mx-4 font-semibold"},at=e("div",{class:"flex flex-col items-center justify-center space-y-2 p-4 md:justify-between lg:flex-row lg:space-y-0"},[e("img",{src:"/img/logo_au.png",class:"h-16 w-80",alt:""}),e("img",{src:"/img/barniere-africa.png",class:"h-20",alt:""})],-1),ct={__name:"Header",setup(C){const _=new Date().toUTCString().substr(0,16),d=S([]);A(async()=>{let x=await axios.get("/api/posts-caroussel/"+localStorage.lang);d.value=x.data.data});const j=[K];return(x,M)=>{const z=D("router-link");return a(),l("div",st,[e("div",ot,[e("h1",null,o(i(_)),1),e("h1",null,[e("span",rt,o(x.$t("lastest"))+" :",1),n(i(G),{class:"inline-flex h-5","space-between":0,"slides-per-view":1,direction:"vertical",autoplay:{delay:3500,disableOnInteraction:!1},modules:j},{default:v(()=>[(a(!0),l(q,null,J(d.value,w=>(a(),I(i(U),{class:"relative",key:w.id},{default:v(()=>[n(z,{to:{name:"show.post",params:{id:w.id,slug:w.slug}},class:"text-primary-blue"},{default:v(()=>[m(o(w.title.substring(0,29)+"..."),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]),at,n(tt)])}}};export{ct as default};
