var F=(A,h,L)=>new Promise((x,N)=>{var w=m=>{try{S(L.next(m))}catch(i){N(i)}},z=m=>{try{S(L.throw(m))}catch(i){N(i)}},S=m=>m.done?x(m.value):Promise.resolve(m.value).then(w,z);S((L=L.apply(A,h)).next())});import{u as U}from"./authServices.9f22e2a2.js";import{_ as E}from"./FilterArticle.c18ce363.js";import{S as K,a as M,A as T}from"./swiper.min.166a9e09.js";/* empty css                        */import{r as I}from"./PhotoIcon.18108ee3.js";import{d as t,e as a,f as e,g as o,h as c,F as y,x as f,r as p,o as R,b as V,w as d,l as H,H as $,t as l,u as W,a as q,j as k,k as v}from"./app.59e8d623.js";import{r as D}from"./CalendarIcon.26da48f1.js";import{r as C}from"./UserIcon.3f57577b.js";import{r as j}from"./ChatBubbleOvalLeftEllipsisIcon.5d73ba7b.js";import{r as G}from"./BuildingOffice2Icon.228afd2b.js";const J={class:"w-full animate-pulse space-x-3 p-4 lg:flex"},P={class:"h-[400px] bg-gray-100 lg:w-1/2"},Q={class:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-1/2"},X={class:"mx-auto w-full overflow-hidden md:h-[190px]"},Y={__name:"Slider",setup(A){const h=[1,2,3];return(L,x)=>(t(),a("div",J,[e("div",P,[o(c(I),{class:"h-full w-full text-gray-200"})]),e("div",Q,[(t(),a(y,null,f(h,N=>e("div",{key:N,class:"rounded bg-gray-100 shadow"},[e("div",X,[o(c(I),{class:"h-full w-full text-gray-200"})])])),64))])]))}},Z={key:0,class:"space-y-3 p-4 lg:flex lg:space-x-3 lg:space-y-0"},O={class:"absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white"},ee={class:"flex items-center gap-4 flex-wrap"},se={key:0},te={key:1},ae={key:2},le={key:3},oe={href:"#",class:"text-lg hover:text-primary-blue"},ne={class:"flex space-x-2 text-xs"},ie={class:"flex space-x-1"},ce={href:"#",class:"hover:text-primary-blue"},de={class:"flex space-x-1"},re={href:"#",class:"hover:text-primary-blue"},ue={class:"flex space-x-1"},_e={href:"#",class:"hover:text-primary-blue"},he=["src","alt"],pe={class:"grid w-full grid-cols-1 gap-4 md:h-[400px] md:grid-cols-2"},me={class:"absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover p-4 text-white"},ve={href:"#",class:"text-md hover:text-primary-blue"},ye={class:"flex space-x-2 text-xs"},ge={class:"flex space-x-1"},fe={href:"#",class:"hover:text-primary-blue"},xe={class:"flex space-x-1"},we={href:"#",class:"hover:text-primary-blue"},be=["src","alt"],ke={key:1},$e={__name:"Caroussel",setup(A){const h=p([]),L=p(""),x=p(0);R(()=>F(this,null,function*(){L.value="",x.value=1;let w=yield axios.get("/api/posts-caroussel/"+localStorage.lang);h.value=w.data.data,x.value=2}));const N=[T];return(w,z)=>{const S=V("router-link"),m=V("NoContent");return h.value.length!=0?(t(),a("div",Z,[o(c(M),{class:"h-[400px] w-full",centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:N},{default:d(()=>[(t(!0),a(y,null,f(h.value,i=>(t(),H(c(K),{class:"relative",key:i.id},{default:d(()=>[o(S,{to:{name:"show.post",params:{id:i.id,slug:i.slug}}},{default:d(()=>[e("div",O,[e("div",null,[e("ul",ee,[(t(!0),a(y,null,f(i.ministries,_=>(t(),a("li",{class:"rounded py-1 px-2 text-xs capitalize text-white",style:$("background:"+_.color)},[w.$i18n.locale=="en"?(t(),a("span",se,l(_.name_en.substring(0,29)+"..."),1)):w.$i18n.locale=="fr"?(t(),a("span",te,l(_.name_fr.substring(0,29)+"..."),1)):w.$i18n.locale=="es"?(t(),a("span",ae,l(_.name_es.substring(0,29)+"..."),1)):(t(),a("span",le,l(_.name_pt.substring(0,29)+"..."),1))],4))),256))])]),e("div",null,[e("a",oe,l(i.title.length<=30?i.title:i.title.substring(0,29)+"..."),1)]),e("div",ne,[e("div",ie,[o(c(D),{class:"h-4 w-4"}),e("a",ce,l(new Date(i.date).toLocaleDateString("fr-FR",{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",de,[o(c(C),{class:"h-4 w-4"}),e("a",re,l(i.user.firstname),1)]),e("div",ue,[o(c(j),{class:"h-4 w-4"}),e("a",_e,l(i.comments),1)])])]),e("img",{src:i.image,alt:i.title,class:"h-full w-full object-cover"},null,8,he)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),e("div",pe,[(t(!0),a(y,null,f(h.value,i=>(t(),a("div",{class:"relative md:h-[190px]",key:i.id},[o(S,{to:{name:"show.post",params:{id:i.id,slug:i.slug}}},{default:d(()=>[e("div",me,[e("div",null,[e("a",ve,l(i.title.length<=20?i.title:i.title.substring(0,19)+"..."),1)]),e("div",ye,[e("div",ge,[o(c(D),{class:"h-4 w-4"}),e("a",fe,l(new Date(i.date).toLocaleDateString("fr-FR",{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",xe,[o(c(j),{class:"h-4 w-4"}),e("a",we,l(i.comments),1)])])]),e("img",{src:i.image,alt:i.title,class:"h-60 w-full object-cover md:h-full"},null,8,be)]),_:2},1032,["to"])]))),128))])])):x.value==1?(t(),a("div",ke,[o(Y)])):(t(),H(m,{key:2}))}}},Se={class:"bg-white xl:w-[90%] w-full mx-auto min-h-screen"},De={class:"lg:flex p-4 lg:space-x-2 space-y-4 md:space-y-0 text-lg"},je={class:"lg:w-[70%]"},Le={key:0},Ne={key:1},ze={key:2},Ce={key:3},Ae={key:0,class:"lg:flex lg:items-start lg:space-x-4 w-full"},Be={key:0,class:"overflow-hidden shadow bg-white lg:w-1/2 w-full"},Fe=["src"],Ve={class:"p-6"},He={class:"space-y-2"},Ie={key:0},Re={key:1},Ue={key:2},Ee={key:3},Ke={class:"flex text-xs space-x-2 text-gray-400"},Me={class:"flex space-x-1"},Te={href:"#",class:"hover:text-primary-blue"},We={class:"flex space-x-1"},qe={class:"flex space-x-1"},Ge={href:"#",class:"hover:text-primary-blue"},Je={class:"space-y-2 w-full lg:w-1/2"},Pe={key:0,class:"overflow-hidden w-full h-32 flex space-x-2 shadow bg-white"},Qe=["src"],Xe={class:"space-y-2 p-2"},Ye={class:"flex text-xs space-x-2 text-gray-400"},Ze={class:"flex space-x-1"},Oe={href:"#",class:"hover:text-primary-blue"},es={class:"flex space-x-1"},ss={href:"#",class:"hover:text-primary-blue"},ts={class:"md:flex md:space-x-3"},as={class:"w-full"},ls={key:0},os={key:1},ns={key:2},is={key:3},cs={key:0,class:"space-y-2"},ds={key:0,class:"overflow-hidden shadow bg-white"},rs=["src"],us={class:"p-6"},_s={class:"space-y-2"},hs={key:0},ps={key:1},ms={key:2},vs={key:3},ys={class:"flex text-xs space-x-2 text-gray-400"},gs={class:"flex space-x-1"},fs={href:"#",class:"hover:text-primary-blue"},xs={class:"flex space-x-1"},ws={class:"flex space-x-1"},bs={href:"#",class:"hover:text-primary-blue"},ks={class:"space-y-2"},$s={key:0,class:"overflow-hidden h-32 flex space-x-2 shadow bg-white w-full"},Ss=["src"],Ds={class:"space-y-2 p-2"},js={class:"flex text-xs space-x-2 text-gray-400"},Ls={class:"flex space-x-1"},Ns={href:"#",class:"hover:text-primary-blue"},zs={class:"flex space-x-1"},Cs={href:"#",class:"hover:text-primary-blue"},As={class:"w-full"},Bs={key:0},Fs={key:1},Vs={key:2},Hs={key:3},Is={key:0,class:"space-y-2"},Rs={key:0,class:"overflow-hidden shadow bg-white"},Us=["src"],Es={class:"p-6"},Ks={class:"space-y-2"},Ms={key:0},Ts={key:1},Ws={key:2},qs={key:3},Gs={class:"flex text-xs space-x-2 text-gray-400"},Js={class:"flex space-x-1"},Ps={href:"#",class:"hover:text-primary-blue"},Qs={class:"flex space-x-1"},Xs={class:"flex space-x-1"},Ys={href:"#",class:"hover:text-primary-blue"},Zs={class:"space-y-2"},Os={key:0,class:"overflow-hidden h-32 flex space-x-2 shadow bg-white w-full"},et=["src"],st={class:"space-y-2 p-2"},tt={class:"flex text-xs space-x-2 text-gray-400"},at={class:"flex space-x-1"},lt={href:"#",class:"hover:text-primary-blue"},ot={class:"flex space-x-1"},nt={href:"#",class:"hover:text-primary-blue"},it=e("div",{class:"my-8 flex justify-center"},[e("div",{class:"inline-block shadow p-2"},[e("img",{src:"/img/barniere-africa.png",alt:""})])],-1),ct={key:0},dt={key:1},rt={key:2},ut={key:3},_t={key:0,class:"lg:flex lg:items-start lg:space-x-2"},ht={key:0,class:"overflow-hidden shadow bg-white"},pt=["src"],mt={class:"p-6"},vt={class:"space-y-2"},yt={key:0},gt={key:1},ft={key:2},xt={key:3},wt={class:"flex text-xs space-x-2 text-gray-400"},bt={class:"flex space-x-1"},kt={href:"#",class:"hover:text-primary-blue"},$t={class:"flex space-x-1"},St={class:"flex space-x-1"},Dt={href:"#",class:"hover:text-primary-blue"},jt={class:"space-y-2 grow"},Lt={key:0,class:"overflow-hidden h-32 flex space-x-2 shadow bg-white"},Nt=["src"],zt={class:"space-y-2 p-2"},Ct={class:"flex text-xs space-x-2 text-gray-400"},At={class:"flex space-x-1"},Bt={href:"#",class:"hover:text-primary-blue"},Ft={class:"flex space-x-1"},Vt={href:"#",class:"hover:text-primary-blue"},Ht={class:"lg:w-[30%]"},It={key:0,class:"w-full"},Rt={class:"text-white px-2 py-1 bg-primary-blue inline-block"},Ut={class:"border-t-2 w-full border-primary-blue text-justify py-4"},Et=e("img",{src:"/img/barre-laterale-africa.jpg",alt:"",class:"object-cover mx-auto"},null,-1),Kt={class:"w-full"},Mt={class:"text-white px-2 py-1 bg-primary-blue inline-block"},Tt={class:"border-t-2 w-full border-primary-blue text-justify py-4"},Wt={key:0,class:"p-4"},qt={class:"flex items-center space-x-4"},Gt={class:"hidden lg:block"},Jt=["src"],Pt={class:"capitalize text-sm"},Qt={class:"font-bold capitalize text-gray-500 text-sm"},Xt={class:""},Yt={class:"font-bold capitalize text-primary-blue text-sm"},Zt={key:0},Ot={key:1},ea={key:2},sa={key:3},ta={class:"w-full"},aa={class:"text-white px-2 py-1 bg-primary-blue inline-block"},la=e("div",{class:"border-t-2 w-full border-primary-blue text-justify py-4"},[e("p",{class:"p-4"},[e("iframe",{class:"w-full h-60",src:"https://www.youtube.com/embed/N2WKfyIbr68",title:"AfricaUnity",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),oa={class:"w-full"},na={class:"text-white px-2 py-1 bg-primary-blue inline-block"},ia=e("div",{class:"border-t-2 w-full border-primary-blue text-justify py-4"},[e("p",{class:"p-4"},[e("iframe",{class:"w-full h-60",src:"https://www.youtube.com/embed/7mtO5fdzO_8",title:"AfricaUnity",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),xa={__name:"Home",setup(A){const{locale:h}=W();p(!1);const L=localStorage.token,x=p([]),N=p(0);p(0);const w=p([]),z=p([]),S=p([]),m=p([]),i=p(""),_=p(""),g=p(""),b=p(""),B=p([]);return q({email:"",password:""}),U(),R(()=>F(this,null,function*(){N.value=1;let n=yield axios.get("/api/ministries-home");x.value=n.data.data,i.value=x.value[0],_.value=x.value[1],g.value=x.value[2],b.value=x.value[3],n=yield axios.get("/api/posts-home/"+localStorage.lang+"/"+i.value.id),w.value=n.data.data,n=yield axios.get("/api/posts-home/"+localStorage.lang+"/"+_.value.id),z.value=n.data.data,n=yield axios.get("/api/posts-home/"+localStorage.lang+"/"+g.value.id),S.value=n.data.data,n=yield axios.get("/api/posts-home/"+localStorage.lang+"/"+b.value.id),m.value=n.data.data,n=yield axios.get("/api/jobOffers-home/"),B.value=n.data.data,N.value=2})),(n,ca)=>{const u=V("router-link");return t(),a("div",Se,[o($e),e("div",De,[e("div",je,[e("div",null,[e("h1",{class:"text-white px-2 py-1 inline-block",style:$("background:"+i.value.color)},[n.$i18n.locale=="en"?(t(),a("span",Le,l(i.value.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",Ne,l(i.value.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",ze,l(i.value.name_es),1)):(t(),a("span",Ce,l(i.value.name_pt),1))],4),e("div",{class:"border-t-2 text-justify py-4 w-full",style:$("border-color:"+i.value.color)},[w.value.length!=0?(t(),a("div",Ae,[(t(!0),a(y,null,f(w.value,(s,r)=>(t(),a(y,{key:r},[r===0?(t(),a("div",Be,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}}},{default:d(()=>[e("img",{src:s.image,alt:"",class:"object-cover w-full h-64"},null,8,Fe)]),_:2},1032,["to"]),e("div",Ve,[e("div",He,[e("div",null,[e("a",{href:"#",class:"text-xs py-1 px-2 rounded text-white",style:$("background:"+i.value.color)},[n.$i18n.locale=="en"?(t(),a("span",Ie,l(i.value.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",Re,l(i.value.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",Ue,l(i.value.name_es),1)):(t(),a("span",Ee,l(i.value.name_pt),1))],4)]),e("div",null,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"text-xl font-semibold text-gray-600 hover:text-primary-blue"},{default:d(()=>[k(l(s.title.length<=20?s.title:s.title.substring(0,19)+"..."),1)]),_:2},1032,["to"])]),e("div",Ke,[e("div",Me,[o(c(D),{class:"h-4 w-4"}),e("a",Te,l(new Date(s.date).toLocaleDateString(c(h),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",We,[o(c(C),{class:"h-4 w-4"}),o(u,{to:{name:"compte",params:{slug:s.user.slug,id:s.user.id}},class:"hover:text-primary-blue"},{default:d(()=>[k(l(s.user.firstname),1)]),_:2},1032,["to"])]),e("div",qe,[o(c(j),{class:"h-4 w-4"}),e("a",Ge,l(s.comments),1)])])])])])):v("",!0)],64))),128)),e("div",Je,[(t(!0),a(y,null,f(w.value,(s,r)=>(t(),a("div",{key:r},[r!==0?(t(),a("div",Pe,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"w-36"},{default:d(()=>[e("img",{src:s.image,alt:"",class:"object-cover w-full h-64"},null,8,Qe)]),_:2},1032,["to"]),e("div",Xe,[e("div",null,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"text-xl font-semibold text-gray-600 hover:text-primary-blue"},{default:d(()=>[k(l(s.title.length<=20?s.title:s.title.substring(0,19)+"..."),1)]),_:2},1032,["to"])]),e("div",Ye,[e("div",Ze,[o(c(D),{class:"h-4 w-4"}),e("a",Oe,l(new Date(s.date).toLocaleDateString(c(h),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",es,[o(c(j),{class:"h-4 w-4"}),e("a",ss,l(s.comments),1)])])])])):v("",!0)]))),128))])])):v("",!0)],4)]),e("div",ts,[e("div",as,[e("h1",{class:"text-white px-2 py-1 inline-block",style:$("background:"+_.value.color)},[n.$i18n.locale=="en"?(t(),a("span",ls,l(_.value.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",os,l(_.value.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",ns,l(_.value.name_es),1)):(t(),a("span",is,l(_.value.name_pt),1))],4),e("div",{class:"border-t-2 w-full text-justify py-4",style:$("border-color:"+_.value.color)},[z.value.length!=0?(t(),a("div",cs,[(t(!0),a(y,null,f(z.value,(s,r)=>(t(),a("div",{key:r},[r===0?(t(),a("div",ds,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}}},{default:d(()=>[e("img",{src:s.image,alt:"",class:"object-cover w-full h-64"},null,8,rs)]),_:2},1032,["to"]),e("div",us,[e("div",_s,[e("div",null,[e("a",{href:"#",class:"text-xs py-1 px-2 rounded text-white",style:$("background:"+_.value.color)},[n.$i18n.locale=="en"?(t(),a("span",hs,l(_.value.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",ps,l(_.value.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",ms,l(_.value.name_es),1)):(t(),a("span",vs,l(_.value.name_pt),1))],4)]),e("div",null,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"text-xl font-semibold text-gray-600 hover:text-primary-blue"},{default:d(()=>[k(l(s.title.length<=20?s.title:s.title.substring(0,19)+"..."),1)]),_:2},1032,["to"])]),e("div",ys,[e("div",gs,[o(c(D),{class:"h-4 w-4"}),e("a",fs,l(new Date(s.date).toLocaleDateString(c(h),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",xs,[o(c(C),{class:"h-4 w-4"}),o(u,{to:{name:"compte",params:{slug:s.user.slug,id:s.user.id}},class:"hover:text-primary-blue"},{default:d(()=>[k(l(s.user.firstname),1)]),_:2},1032,["to"])]),e("div",ws,[o(c(j),{class:"h-4 w-4"}),e("a",bs,l(s.comments),1)])])])])])):v("",!0)]))),128)),e("div",ks,[(t(!0),a(y,null,f(z.value,(s,r)=>(t(),a("div",{key:r},[r!==0?(t(),a("div",$s,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"w-36"},{default:d(()=>[e("img",{src:s.image,alt:"",class:"object-cover w-full h-64"},null,8,Ss)]),_:2},1032,["to"]),e("div",Ds,[e("div",null,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"text-xl font-semibold text-gray-600 hover:text-primary-blue"},{default:d(()=>[k(l(s.title.length<=20?s.title:s.title.substring(0,19)+"..."),1)]),_:2},1032,["to"])]),e("div",js,[e("div",Ls,[o(c(D),{class:"h-4 w-4"}),e("a",Ns,l(new Date(s.date).toLocaleDateString(c(h),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",zs,[o(c(j),{class:"h-4 w-4"}),e("a",Cs,l(s.comments),1)])])])])):v("",!0)]))),128))])])):v("",!0)],4)]),e("div",As,[e("h1",{class:"text-white px-2 py-1 inline-block",style:$("background:"+g.value.color)},[n.$i18n.locale=="en"?(t(),a("span",Bs,l(g.value.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",Fs,l(g.value.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",Vs,l(g.value.name_es),1)):(t(),a("span",Hs,l(g.value.name_pt),1))],4),e("div",{class:"border-t-2 w-full text-justify py-4",style:$("border-color:"+g.value.color)},[S.value.length!=0?(t(),a("div",Is,[(t(!0),a(y,null,f(S.value,(s,r)=>(t(),a("div",{key:r},[r===0?(t(),a("div",Rs,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}}},{default:d(()=>[e("img",{src:s.image,alt:"",class:"object-cover w-full h-64"},null,8,Us)]),_:2},1032,["to"]),e("div",Es,[e("div",Ks,[e("div",null,[e("a",{href:"#",class:"text-xs py-1 px-2 rounded text-white",style:$("background:"+g.value.color)},[n.$i18n.locale=="en"?(t(),a("span",Ms,l(g.value.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",Ts,l(g.value.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",Ws,l(g.value.name_es),1)):(t(),a("span",qs,l(g.value.name_pt),1))],4)]),e("div",null,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"text-xl font-semibold text-gray-600 hover:text-primary-blue"},{default:d(()=>[k(l(s.title.length<=20?s.title:s.title.substring(0,19)+"..."),1)]),_:2},1032,["to"])]),e("div",Gs,[e("div",Js,[o(c(D),{class:"h-4 w-4"}),e("a",Ps,l(new Date(s.date).toLocaleDateString(c(h),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",Qs,[o(c(C),{class:"h-4 w-4"}),o(u,{to:{name:"compte",params:{slug:s.user.slug,id:s.user.id}},class:"hover:text-primary-blue"},{default:d(()=>[k(l(s.user.firstname),1)]),_:2},1032,["to"])]),e("div",Xs,[o(c(j),{class:"h-4 w-4"}),e("a",Ys,l(s.comments),1)])])])])])):v("",!0)]))),128)),e("div",Zs,[(t(!0),a(y,null,f(S.value,(s,r)=>(t(),a("div",{key:r},[r!==0?(t(),a("div",Os,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"w-36"},{default:d(()=>[e("img",{src:s.image,alt:"",class:"object-cover h-64"},null,8,et)]),_:2},1032,["to"]),e("div",st,[e("div",null,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"text-xl font-semibold text-gray-600 hover:text-primary-blue"},{default:d(()=>[k(l(s.title.length<=20?s.title:s.title.substring(0,19)+"..."),1)]),_:2},1032,["to"])]),e("div",tt,[e("div",at,[o(c(D),{class:"h-4 w-4"}),e("a",lt,l(new Date(s.date).toLocaleDateString(c(h),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",ot,[o(c(j),{class:"h-4 w-4"}),e("a",nt,l(s.comments),1)])])])])):v("",!0)]))),128))])])):v("",!0)],4)])]),it,e("div",null,[e("h1",{class:"text-white px-3 py-2 mb-3 block",style:$("background:"+b.value.color)},[n.$i18n.locale=="en"?(t(),a("span",ct,l(b.value.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",dt,l(b.value.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",rt,l(b.value.name_es),1)):(t(),a("span",ut,l(b.value.name_pt),1))],4),m.value.length!=0?(t(),a("div",_t,[(t(!0),a(y,null,f(m.value,(s,r)=>(t(),a("div",{key:r},[r===0?(t(),a("div",ht,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}}},{default:d(()=>[e("img",{src:s.image,alt:"",class:"object-cover w-full h-64"},null,8,pt)]),_:2},1032,["to"]),e("div",mt,[e("div",vt,[e("div",null,[e("a",{href:"#",class:"text-xs py-1 px-2 rounded text-white",style:$("background:"+b.value.color)},[n.$i18n.locale=="en"?(t(),a("span",yt,l(b.value.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",gt,l(b.value.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",ft,l(b.value.name_es),1)):(t(),a("span",xt,l(b.value.name_pt),1))],4)]),e("div",null,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"text-xl font-semibold text-gray-600 hover:text-primary-blue"},{default:d(()=>[k(l(s.title.length<=20?s.title:s.title.substring(0,19)+"..."),1)]),_:2},1032,["to"])]),e("div",wt,[e("div",bt,[o(c(D),{class:"h-4 w-4"}),e("a",kt,l(new Date(s.date).toLocaleDateString(c(h),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",$t,[o(c(C),{class:"h-4 w-4"}),o(u,{to:{name:"compte",params:{slug:s.user.slug,id:s.user.id}},class:"hover:text-primary-blue"},{default:d(()=>[k(l(s.user.firstname),1)]),_:2},1032,["to"])]),e("div",St,[o(c(j),{class:"h-4 w-4"}),e("a",Dt,l(s.comments),1)])])])])])):v("",!0)]))),128)),e("div",jt,[(t(!0),a(y,null,f(m.value,(s,r)=>(t(),a("div",{key:r},[r!==0?(t(),a("div",Lt,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"w-36"},{default:d(()=>[e("img",{src:s.image,alt:"",class:"object-cover w-full h-64"},null,8,Nt)]),_:2},1032,["to"]),e("div",zt,[e("div",null,[o(u,{to:{name:"show.post",params:{id:s.id,slug:s.slug}},class:"text-xl font-semibold text-gray-600 hover:text-primary-blue"},{default:d(()=>[k(l(s.title.length<=20?s.title:s.title.substring(0,19)+"..."),1)]),_:2},1032,["to"])]),e("div",Ct,[e("div",At,[o(c(D),{class:"h-4 w-4"}),e("a",Bt,l(new Date(s.date).toLocaleDateString(c(h),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",Ft,[o(c(j),{class:"h-4 w-4"}),e("a",Vt,l(s.comments),1)])])])])):v("",!0)]))),128))])])):v("",!0)])]),e("div",Ht,[o(E),c(L)?v("",!0):(t(),a("div",It,[e("h1",Rt,l(n.$t("register")),1),e("div",Ut,[o(u,{to:{name:"pack"}},{default:d(()=>[Et]),_:1})])])),e("div",Kt,[e("h1",Mt,l(n.$t("recent-posts")),1),e("div",Tt,[B.value.length!=0?(t(),a("p",Wt,[(t(!0),a(y,null,f(B.value,s=>(t(),a("div",{key:s.id},[o(u,{to:{name:"show.job",params:{id:s.id,slug:s.slug}},class:"flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"},{default:d(()=>[e("div",qt,[e("div",Gt,[s.company_logo?(t(),a("img",{key:0,src:s.company_logo,alt:"",class:"w-10 h-10 object-cover"},null,8,Jt)):(t(),H(c(G),{key:1,class:"w-10 h-10 text-gray-500"}))]),e("div",null,[e("h1",Pt,l(s.title),1),e("h2",Qt,l(s.company_name),1)])]),e("div",Xt,[e("h2",Yt,[n.$i18n.locale=="en"?(t(),a("span",Zt,l(s.offer_type.name_en),1)):n.$i18n.locale=="fr"?(t(),a("span",Ot,l(s.offer_type.name_fr),1)):n.$i18n.locale=="es"?(t(),a("span",ea,l(s.offer_type.name_es),1)):(t(),a("span",sa,l(s.offer_type.name_pt),1))])])]),_:2},1032,["to"])]))),128))])):v("",!0)])]),e("div",ta,[e("h1",aa,l(n.$t("video")),1),la]),e("div",oa,[e("h1",na,l(n.$t("presentation")),1),ia])])])])}}};export{xa as default};
