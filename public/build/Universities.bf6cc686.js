import{c as t,d as s,e as a,F as u,x as m,f as d,g as i,L as P,r as g,o as Q,M as W,a as X,t as n,k as S,w,m as h,i as f,K as Y,J as x,j,b as K}from"./app.1a4e1017.js";import{u as ee}from"./universityServices.e02498ba.js";import{u as te}from"./continentServices.f9c47ce6.js";import{u as se}from"./countryServices.fd8a20e9.js";import{u as oe}from"./cityServices.122c5699.js";import{u as ne}from"./zoneServices.b49803b9.js";import{r as ae}from"./PhotoIcon.d63dca78.js";import{r as le}from"./PlusCircleIcon.874dacff.js";const re={class:"animate-pulse"},ie={class:"grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-2 lg:grid-cols-4"},de={class:"mx-auto h-44 w-32 overflow-hidden"},ce=P('<div class="flex flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div>',1),B={__name:"University",setup(F){const p=[1,2,3,4,5,6];return(v,c)=>(t(),s("div",re,[a("div",ie,[(t(),s(u,null,m(p,y=>a("div",{key:y,class:"h-80 rounded bg-gray-100 shadow"},[a("div",de,[d(i(ae),{class:"h-full w-full text-gray-200"})]),ce])),64))])]))}},ue={class:"mx-auto min-h-screen w-full bg-white xl:w-[90%]"},me={class:"py-2 text-center text-5xl font-bold capitalize text-primary-blue"},pe={class:"py-8 lg:px-16"},ye={class:"flex justify-end py-4"},_e={class:"text-base leading-4"},ge={class:"grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-4"},he={class:"text-xs lg:text-sm"},fe={class:"dark:text-gray-200 text-gray-700"},ve={class:"text-xs lg:text-sm"},be={class:"text-gray-700",for:"es"},ke=a("option",{value:""},"--------------",-1),we=["value"],xe={key:0},$e={key:1},Ce={key:2},Ue={key:3},Ve={class:"text-xs lg:text-sm"},ze={class:"text-gray-700",for:"es"},Ne=a("option",{value:""},"--------------",-1),Se=["value"],je={key:0},Ke={key:1},Be={key:2},Fe={key:3},Le={key:1,value:"null"},Me={class:"text-xs lg:text-sm"},Re={class:"text-gray-700",for:"es"},qe=a("option",{value:""},"--------------",-1),Ee=["value"],Ze={key:0},De={key:1},Je={key:2},Te={key:3},Ae={key:1,value:"null"},Ge={class:"text-xs lg:text-sm"},He={class:"text-gray-700",for:"es"},Oe=a("option",{value:""},"--------------",-1),Ie=["value"],Pe={key:0},Qe={key:1},We={key:2},Xe={key:3},Ye={key:1,value:"null"},et={class:"flex items-end text-xs lg:text-sm"},tt=a("div",{class:"bg-primary-blue p-2 shadow"},null,-1),st={key:0},ot=["src"],nt={class:"p-6"},at={key:0,href:"#",class:"rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"},lt={key:0},rt={key:1},it={key:2},dt={key:3},ct={class:"mt-4 flex items-center justify-between text-sm"},ut={key:2},bt={__name:"Universities",setup(F){const{universities:p,getUniversities:v,loading:c,page:y,isAll:V,filterUniversities:L}=ee(),{continents:M,getContinents:R}=te(),{countries:q,getCountries:E}=se(),{zones:Z,getZones:D}=ne(),{cities:J,getCities:T}=oe(),$=g([]),b=g([]),_=g([]),C=g(null),U=g(!0),z=localStorage.user?JSON.parse(localStorage.user):"";Q(async()=>{window.addEventListener("scroll",N),await v(),await R(),await D(),await E(),await T()}),W(async()=>{y.value=1,window.removeEventListener("scroll",N)});const N=async o=>{C.value&&C.value.getBoundingClientRect().bottom<window.innerHeight&&U.value&&!V.value&&l.country==""&&l.continent==""&&l.city==""&&l.zone==""&&l.searchKey==""&&(U.value=!1,y.value++,await v(),U.value=!0)},A=async()=>{l.country!=""||l.continent!=""||l.city!=""||l.zone!=""||l.searchKey!=""?(c.value=1,await L({...l}),c.value=2):(y.value=1,V.value=!1,await v())},l=X({country:"",continent:"",city:"",zone:"",searchKey:""}),G=async()=>{_.value=J.value.filter(o=>o.country_id==l.country),l.city=""},H=async()=>{b.value=q.value.filter(o=>o.zone_id==l.zone),l.country="",l.city="",_.value=[]},O=async()=>{$.value=Z.value.filter(o=>o.continent_id==l.continent),l.zone="",l.country="",l.city="",_.value=[],b.value=[]};return(o,r)=>{const k=K("router-link"),I=K("NoContent");return t(),s("div",ue,[a("h1",me,n(o.$t("univerities")),1),a("div",pe,[a("div",ye,[i(z).type=="particular"||i(z).type=="admin"?(t(),S(k,{key:0,to:{name:"add.ads"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:w(()=>[d(i(le),{class:"h-6 w-6"}),a("p",_e,n(o.$tc("add",2))+" "+n(o.$t("ads")),1)]),_:1},8,["to"])):h("",!0)]),a("div",ge,[a("div",he,[a("label",fe,n(o.$t("key-words")),1),f(a("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>l.searchKey=e),class:"form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,512),[[Y,l.searchKey]])]),a("div",ve,[a("label",be,n(o.$t("continent")),1),f(a("select",{onChange:r[1]||(r[1]=e=>O()),"onUpdate:modelValue":r[2]||(r[2]=e=>l.continent=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[ke,(t(!0),s(u,null,m(i(M),e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",xe,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",$e,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Ce,n(e.name_es),1)):(t(),s("span",Ue,n(e.name_pt),1))],8,we))),128))],544),[[x,l.continent]])]),a("div",Ve,[a("label",ze,n(o.$t("zoned")),1),f(a("select",{"onUpdate:modelValue":r[3]||(r[3]=e=>l.zone=e),onChange:r[4]||(r[4]=e=>H()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Ne,$.value.length!=0?(t(!0),s(u,{key:0},m($.value,e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",je,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Ke,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Be,n(e.name_es),1)):(t(),s("span",Fe,n(e.name_pt),1))],8,Se))),128)):(t(),s("option",Le," Requires "+n(o.$t("continent")),1))],544),[[x,l.zone]])]),a("div",Me,[a("label",Re,n(o.$t("country")),1),f(a("select",{"onUpdate:modelValue":r[5]||(r[5]=e=>l.country=e),onChange:r[6]||(r[6]=e=>G()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[qe,b.value.length!=0?(t(!0),s(u,{key:0},m(b.value,e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Ze,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",De,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Je,n(e.name_es),1)):(t(),s("span",Te,n(e.name_pt),1))],8,Ee))),128)):(t(),s("option",Ae," Requires "+n(o.$t("zoned")),1))],544),[[x,l.country]])]),a("div",Ge,[a("label",He,n(o.$t("city")),1),f(a("select",{"onUpdate:modelValue":r[7]||(r[7]=e=>l.city=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Oe,_.value.length!=0?(t(!0),s(u,{key:0},m(_.value,e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Pe,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Qe,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",We,n(e.name_es),1)):(t(),s("span",Xe,n(e.name_pt),1))],8,Ie))),128)):(t(),s("option",Ye," Requires "+n(o.$t("country")),1))],512),[[x,l.city]])]),a("div",et,[a("button",{type:"button",onClick:r[8]||(r[8]=e=>A()),class:"w-full rounded-md bg-primary-blue px-4 py-2.5 text-white"},n(o.$t("search")),1)])]),tt,i(c)==3?(t(),s("div",st,[d(B)])):i(p).length!=0?(t(),s("div",{key:1,class:"grid grid-cols-1 gap-8 px-10 py-8 md:grid-cols-2 lg:grid-cols-4",ref_key:"universityContainer",ref:C},[(t(!0),s(u,null,m(i(p),e=>(t(),s("div",{class:"dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md",key:e.id},[d(k,{to:{name:"show.university",params:{id:e.id,slug:e.slug}}},{default:w(()=>[a("img",{class:"h-44 w-full object-cover",src:e.image,alt:""},null,8,ot)]),_:2},1032,["to"]),a("div",nt,[a("div",null,[e.city?(t(),s("a",at,[o.$i18n.locale=="en"?(t(),s("span",lt,n(e.city.name_en+"-"+e.country.code_iso),1)):o.$i18n.locale=="fr"?(t(),s("span",rt,n(e.city.name_fr+"-"+e.country.code_iso),1)):o.$i18n.locale=="es"?(t(),s("span",it,n(e.city.name_es+"-"+e.country.code_iso),1)):(t(),s("span",dt,n(e.country.name_pt+"-"+e.country.code_iso),1))])):h("",!0),d(k,{to:{name:"show.university",params:{id:e.id,slug:e.slug}},class:"dark:text-white mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"},{default:w(()=>[j(n(e.name.length<=30?e.name:e.name.substring(0,27)+"..."),1)]),_:2},1032,["to"])]),a("div",ct,[d(k,{to:{name:"show.university",params:{id:e.id,slug:e.slug}},class:"dark:text-blue-400 text-blue-600 hover:underline"},{default:w(()=>[j(n(o.$t("read-more")),1)]),_:2},1032,["to"])])])]))),128))],512)):h("",!0),i(c)==1?(t(),s("div",ut,[d(B)])):h("",!0),i(p).length==0&&i(c)!=1?(t(),S(I,{key:3})):h("",!0)])])}}};export{bt as default};
