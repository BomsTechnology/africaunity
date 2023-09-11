import{c as o,d as l,e as s,F as y,x as m,f as u,g as i,L as R,u as ee,r as b,a as te,o as se,M as oe,B as le,t as n,k as j,w as x,m as _,I as ae,j as B,l as ne,i as f,J as w,K as re,H as ie,N as de,b as M}from"./app.1a4e1017.js";import{u as ue}from"./countryServices.fd8a20e9.js";import{u as ce}from"./zoneServices.b49803b9.js";import{u as ye}from"./continentServices.f9c47ce6.js";import{u as me}from"./ministryServices.f9c2b5ee.js";import{u as pe}from"./postServices.23f2812d.js";import{r as _e}from"./PhotoIcon.d63dca78.js";import{r as fe}from"./PlusCircleIcon.874dacff.js";import{r as ge}from"./BookOpenIcon.837600a4.js";import{r as he}from"./UserIcon.d1156be0.js";import{r as ve}from"./CalendarIcon.b9c91da9.js";import{r as be}from"./ChatBubbleOvalLeftEllipsisIcon.7b9eb889.js";const xe={class:"animate-pulse"},we={class:"grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-2"},ke={class:"mx-auto h-44 w-32 overflow-hidden"},$e=R('<div class="flex flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="flex w-full items-center justify-between"><div class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div>',1),A={__name:"Article",setup(F){const q=[1,2,3];return(d,c)=>(o(),l("div",xe,[s("div",we,[(o(),l(y,null,m(q,g=>s("div",{key:g,class:"rounded bg-gray-100 shadow"},[s("div",ke,[u(i(_e),{class:"h-full w-full text-gray-200"})]),$e])),64))])]))}},qe={class:"mx-auto flex min-h-screen w-full flex-col-reverse bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"},Se={class:"lg:w-[70%]"},ze={class:"text-center text-5xl font-bold capitalize text-primary-blue"},Ce={key:0},Ve={key:1},Ne={class:"flex justify-end px-6"},je={class:"text-base leading-4"},Be={key:0},Me=["src"],Ue={class:"p-6 flex flex-col grow"},De={class:"grow block"},Pe={class:"flex items-center gap-4 flex-wrap"},Ae={key:0},Fe={key:1},Le={key:2},Ee={key:3},Ze={class:"mt-4 flex items-center justify-between text-sm"},He={class:"flex items-center space-x-2 text-xs text-gray-500"},Ie={class:"flex space-x-1"},Je={class:"hidden space-x-1 lg:flex"},Te={href:"#",class:"hover:text-primary-blue"},Ge={class:"item-center flex space-x-1"},Ke={href:"#",class:"text-xs hover:text-primary-blue"},Oe={key:2},Qe={class:"bg-white lg:w-[30%]"},We={class:"z-0 w-full bg-white"},Xe={class:"inline-block bg-primary-blue px-2 py-1 text-white"},Ye={class:"text-md space-y-1 border-t-2 border-primary-blue p-4"},Re={class:"text-xs text-gray-500"},et={value:"fr"},tt={value:"en"},st={value:"es"},ot={value:"pt"},lt={class:"text-xs text-gray-500"},at=["placeholder"],nt={class:"text-xs text-gray-500"},rt=s("option",{value:""},"--------------",-1),it=["value"],dt={key:0},ut={key:1},ct={key:2},yt={key:3},mt={class:"text-xs text-gray-500"},pt=s("option",{value:""},"--------------",-1),_t=["value"],ft={key:0},gt={key:1},ht={key:2},vt={key:3},bt={key:1,value:"null"},xt={class:"text-xs text-gray-500"},wt=s("option",{value:""},"--------------",-1),kt=["value"],$t={key:0},qt={key:1},St={key:2},zt={key:3},Ct={key:1,value:"null"},Vt={class:"text-xs text-gray-500"},Nt=s("option",{value:""},"--------------",-1),jt=["value"],Bt={key:0},Mt={key:1},Ut={key:2},Dt={key:3},Pt={key:0,type:"submit",class:"mt-3 w-full bg-primary-blue px-8 py-2 text-lg text-white"},At={key:1,disabled:"",type:"submit",class:"mt-3 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"},Wt={__name:"Article",setup(F){ie();let{locale:q}=ee();const d=de(),c=b(!1),{posts:g,getPosts:k,filterPost:S,loading:p,page:z,isAll:U,getPostsByDate:D}=pe(),{countries:L,getCountries:E}=ue(),{zones:Z,getZones:H}=ce(),{continents:I,getContinents:J}=ye(),{ministries:T,getMinistries:G}=me(),C=b([]),$=b([]),K=localStorage.user?JSON.parse(localStorage.user):"",V=b(null),N=b(!0),a=te({country:"",continent:"",ministry:"",zone:"",keywords:"",lang:localStorage.lang,type:"article"});se(async()=>{window.addEventListener("scroll",P),"lang"in d.query?(a.continent=d.query.continent,a.zone=d.query.zone,a.ministry=d.query.ministry,a.keywords=d.query.keywords,a.country=d.query.country,a.lang=d.query.lang,c.value=!1,await S({...a})):"search_date"in d.query?(D(d.query.search_date,localStorage.lang),c.value=!0):(await k("article",localStorage.lang),c.value=!1),await J(),await H(),await E(),await G()}),oe(async()=>{z.value=1,window.removeEventListener("scroll",P)}),le(d,async function(t,r){"lang"in t.query?(a.continent=t.query.continent,a.zone=t.query.zone,a.ministry=t.query.ministry,a.keywords=t.query.keywords,a.country=t.query.country,a.lang=t.query.lang,c.value=!1,await S({...a})):"search_date"in t.query?(D(t.query.search_date,localStorage.lang),c.value=!0):(await k("article",localStorage.lang),c.value=!1)});const P=async t=>{if(V.value){let r=V.value;if("search_date"in d.query)return;r.getBoundingClientRect().bottom<window.innerHeight&&N.value&&!U.value&&a.country==""&&a.continent==""&&a.ministry==""&&a.zone==""&&a.keywords==""&&(N.value=!1,z.value++,await k("article",localStorage.lang),N.value=!0,c.value=!1)}},O=()=>{C.value=Z.value.filter(t=>t.continent_id==a.continent),a.country="",a.zone="",$.value=[]},Q=()=>{$.value=L.value.filter(t=>t.zone_id==a.zone),a.country=""},W=async()=>{a.country!=""||a.continent!=""||a.ministry!=""||a.zone!=""||a.keywords!=""?await S({...a}):(z.value=1,U.value=!1,c.value=!1,await k("article",localStorage.lang))};return(t,r)=>{const h=M("router-link"),X=M("NoContent"),Y=M("Spin");return o(),l("div",qe,[s("div",Se,[s("h1",ze,[c.value?(o(),l("span",Ce,n(t.$t("articles"))+" & PropAu",1)):(o(),l("span",Ve,n(t.$t("articles")),1))]),s("div",Ne,[i(K).type!="business1"?(o(),j(h,{key:0,to:{name:"add.post",params:{type:"article"}},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:x(()=>[u(i(fe),{class:"h-6 w-6"}),s("p",je,n(t.$t("add"))+" Article",1)]),_:1},8,["to"])):_("",!0)]),i(p)==3?(o(),l("div",Be,[u(A)])):i(g).length!=0?(o(),l("div",{key:1,class:"grid gap-8 py-8 lg:grid-cols-2 lg:px-10",ref_key:"postsContainer",ref:V},[(o(!0),l(y,null,m(i(g),e=>(o(),l("div",{class:"dark:bg-gray-800 overflow-hidden flex flex-col rounded-lg bg-white shadow-md",key:e.id},[u(h,{to:{name:"show.post",params:{id:e.id,slug:e.slug}}},{default:x(()=>[e.image?(o(),l("img",{key:0,class:"h-44 w-full object-cover",src:e.image,alt:""},null,8,Me)):(o(),j(i(ge),{key:1,class:"h-44 w-full text-gray-500"}))]),_:2},1032,["to"]),s("div",Ue,[s("div",De,[s("ul",Pe,[(o(!0),l(y,null,m(e.ministries,v=>(o(),l("li",{class:"rounded py-1 px-2 text-xs capitalize text-white",style:ae("background:"+v.color)},[t.$i18n.locale=="en"?(o(),l("span",Ae,n(v.name_en.substring(0,29)+"..."),1)):t.$i18n.locale=="fr"?(o(),l("span",Fe,n(v.name_fr.substring(0,29)+"..."),1)):t.$i18n.locale=="es"?(o(),l("span",Le,n(v.name_es.substring(0,29)+"..."),1)):(o(),l("span",Ee,n(v.name_pt.substring(0,29)+"..."),1))],4))),256))]),u(h,{to:{name:"show.post",params:{id:e.id,slug:e.slug}},class:"dark:text-white mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"},{default:x(()=>[B(n(e.title),1)]),_:2},1032,["to"])]),s("div",Ze,[u(h,{to:{name:"show.post",params:{id:e.id,slug:e.slug}},class:"dark:text-blue-400 text-blue-600 hover:underline"},{default:x(()=>[B(n(t.$t("read-more")),1)]),_:2},1032,["to"]),s("div",He,[s("div",Ie,[u(i(he),{class:"h-4 w-4"}),u(h,{to:{name:"compte",params:{slug:e.user.slug,id:e.user.id}},class:"hover:text-primary-blue"},{default:x(()=>[B(n(e.user.firstname),1)]),_:2},1032,["to"])]),s("div",Je,[u(i(ve),{class:"h-4 w-4"}),s("a",Te,n(new Date(e.date).toLocaleDateString(i(q),{day:"numeric",year:"numeric",month:"long"})),1)]),s("div",Ge,[u(i(be),{class:"h-4 w-4 text-gray-500"}),s("a",Ke,n(e.comments),1)])])])])]))),128))],512)):_("",!0),i(p)==1?(o(),l("div",Oe,[u(A)])):_("",!0),i(g).length==0&&i(p)!=1?(o(),j(X,{key:3})):_("",!0)]),s("div",Qe,[s("div",We,[s("h1",Xe,n(t.$t("filter-article")),1),s("form",{onSubmit:r[8]||(r[8]=ne(e=>W(),["prevent"]))},[s("div",Ye,[s("div",null,[s("label",Re,n(t.$t("language")),1),f(s("select",{"onUpdate:modelValue":r[0]||(r[0]=e=>a.lang=e),class:"form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"},[s("option",et,n(t.$t("fr")),1),s("option",tt,n(t.$t("en")),1),s("option",st,n(t.$t("es")),1),s("option",ot,n(t.$t("pt")),1)],512),[[w,a.lang]])]),s("div",null,[s("label",lt,n(t.$t("key-words")),1),f(s("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=e=>a.keywords=e),placeholder:t.$t("key-words"),class:"form-input mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"},null,8,at),[[re,a.keywords]])]),s("div",null,[s("label",nt,n(t.$t("continent")),1),f(s("select",{"onUpdate:modelValue":r[2]||(r[2]=e=>a.continent=e),onChange:r[3]||(r[3]=e=>O()),class:"form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"},[rt,(o(!0),l(y,null,m(i(I),e=>(o(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(o(),l("span",dt,n(e.name_en),1)):t.$i18n.locale=="fr"?(o(),l("span",ut,n(e.name_fr),1)):t.$i18n.locale=="es"?(o(),l("span",ct,n(e.name_es),1)):(o(),l("span",yt,n(e.name_pt),1))],8,it))),128))],544),[[w,a.continent]])]),s("div",null,[s("label",mt,n(t.$t("zoned")),1),f(s("select",{"onUpdate:modelValue":r[4]||(r[4]=e=>a.zone=e),onChange:r[5]||(r[5]=e=>Q()),class:"form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"},[pt,C.value.length!=0?(o(!0),l(y,{key:0},m(C.value,e=>(o(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(o(),l("span",ft,n(e.name_en),1)):t.$i18n.locale=="fr"?(o(),l("span",gt,n(e.name_fr),1)):t.$i18n.locale=="es"?(o(),l("span",ht,n(e.name_es),1)):(o(),l("span",vt,n(e.name_pt),1))],8,_t))),128)):(o(),l("option",bt," Requires "+n(t.$t("continent")),1))],544),[[w,a.zone]])]),s("div",null,[s("label",xt,n(t.$t("country")),1),f(s("select",{"onUpdate:modelValue":r[6]||(r[6]=e=>a.country=e),class:"form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"},[wt,$.value.length!=0?(o(!0),l(y,{key:0},m($.value,e=>(o(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(o(),l("span",$t,n(e.name_en),1)):t.$i18n.locale=="fr"?(o(),l("span",qt,n(e.name_fr),1)):t.$i18n.locale=="es"?(o(),l("span",St,n(e.name_es),1)):(o(),l("span",zt,n(e.name_pt),1))],8,kt))),128)):(o(),l("option",Ct," Requires "+n(t.$t("zoned")),1))],512),[[w,a.country]])]),s("div",null,[s("label",Vt,n(t.$t("ministry")),1),f(s("select",{"onUpdate:modelValue":r[7]||(r[7]=e=>a.ministry=e),class:"form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"},[Nt,(o(!0),l(y,null,m(i(T),e=>(o(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(o(),l("span",Bt,n(e.name_en),1)):t.$i18n.locale=="fr"?(o(),l("span",Mt,n(e.name_fr),1)):t.$i18n.locale=="es"?(o(),l("span",Ut,n(e.name_es),1)):(o(),l("span",Dt,n(e.name_pt),1))],8,jt))),128))],512),[[w,a.ministry]])]),s("div",null,[i(p)==0||i(p)==2?(o(),l("button",Pt,n(t.$t("filter")),1)):_("",!0),i(p)==1?(o(),l("button",At,[u(Y,{size:"small"})])):_("",!0)])])],32)])])])}}};export{Wt as default};
