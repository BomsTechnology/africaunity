import{c as s,d as o,e as t,F as p,x as m,f as _,g as i,L as se,u as oe,r as g,o as ne,M as ae,a as re,t as a,k as f,S as le,m as d,h as ie,w as S,i as c,K,J as v,V as de,T as ue,b as L}from"./app.1a4e1017.js";import{u as ce}from"./tenderServices.a1e025a2.js";import{u as ye}from"./currencyServices.88d514dd.js";import{u as pe}from"./activityAreaServices.52642fa3.js";import{u as me}from"./countryServices.fd8a20e9.js";import{u as _e}from"./zoneServices.b49803b9.js";import{u as ge}from"./continentServices.f9c47ce6.js";import{u as fe}from"./cityServices.122c5699.js";import{r as ve}from"./PhotoIcon.d63dca78.js";import{r as he}from"./PlusCircleIcon.874dacff.js";import{r as be}from"./BuildingOffice2Icon.c6f217e5.js";import{r as ke,a as we}from"./MapPinIcon.ffd1d014.js";const xe={class:"animate-pulse"},$e={class:"space-y-3 py-8"},Ce={class:"mx-auto h-16 w-16 overflow-hidden"},Ve=se('<div class="flex w-5/6 flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="flex w-full items-center justify-between"><div class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div>',1),D={__name:"Tender",setup(R){const k=[1,2,3,4];return(T,A)=>(s(),o("div",xe,[t("div",$e,[(s(),o(p,null,m(k,w=>t("div",{key:w,class:"flex items-center rounded bg-gray-100 shadow"},[t("div",Ce,[_(i(ve),{class:"h-full w-full text-gray-200"})]),Ve])),64))])]))}},je={class:"mx-auto w-full bg-white py-4 xl:w-[90%]"},ze={class:"py-4 text-center text-5xl font-bold capitalize text-primary-blue"},Ue={class:"py-8 px-6 lg:px-16"},Se={class:"flex justify-end px-6 py-4"},Te={key:1},Ae={key:3},Fe={key:0,class:"space-y-3 bg-gray-100 px-10 pb-8 pt-4 text-xs shadow lg:text-sm"},Ne={class:"grid grid-cols-1 gap-2 lg:grid-cols-2"},Me={class:"dark:text-gray-200 text-gray-700"},Be={class:"dark:text-gray-200 text-gray-700"},Ke=t("option",{value:""},"--------------",-1),Le=["value"],De={key:0},Re={key:1},qe={key:2},Ee={key:3},Ze={class:"grid grid-cols-1 gap-2 lg:grid-cols-4"},Je={class:""},Ge={class:"text-gray-700",for:"es"},He=t("option",{value:""},"--------------",-1),Ie=["value"],Oe={key:0},Pe={key:1},Qe={key:2},We={key:3},Xe={class:""},Ye={class:"text-gray-700",for:"es"},et=t("option",{value:""},"--------------",-1),tt=["value"],st={key:0},ot={key:1},nt={key:2},at={key:3},rt={key:1,value:"null"},lt={class:""},it={class:"text-gray-700",for:"es"},dt=t("option",{value:""},"--------------",-1),ut=["value"],ct={key:0},yt={key:1},pt={key:2},mt={key:3},_t={key:1,value:"null"},gt={class:""},ft={class:"text-gray-700",for:"es"},vt=t("option",{value:""},"--------------",-1),ht=["value"],bt={key:0},kt={key:1},wt={key:2},xt={key:3},$t={key:1,value:"null"},Ct={class:"grid grid-cols-1 gap-2 lg:grid-cols-3"},Vt={class:"dark:text-gray-200 text-gray-700",for:"es"},jt={class:"dark:text-gray-200 text-gray-700",for:"es"},zt=t("option",{value:""},"--------------",-1),Ut=["value"],St={class:"flex items-end justify-center py-3"},Tt={class:"text-sm text-gray-700",for:"recruitment-agency"},At={key:0,class:"bg-primary-blue p-2 shadow"},Ft={key:1,class:"flex justify-end px-6 py-4"},Nt={class:"text-base leading-4"},Mt={class:"flex items-center space-x-4"},Bt={class:"hidden lg:block"},Kt=["src"],Lt={class:"capitalize"},Dt={class:"font-bold capitalize text-gray-500"},Rt={class:"hidden justify-start space-x-4 font-light capitalize text-gray-500 lg:flex"},qt={class:"flex items-center justify-center space-x-2"},Et={key:0,class:"flex items-center justify-start space-x-2"},Zt={class:""},Jt={class:"capitalize"},os={__name:"Tender",setup(R){const{locale:k}=oe(),{currencies:T,getCurrencies:A}=ye(),{activityAreas:w,getActivityAreas:q}=pe(),{zones:E,getZones:Z}=_e(),{continents:J,getContinents:G}=ge(),{countries:H,getCountries:I}=me(),{cities:O,getCities:P}=fe(),{tenders:x,filterTenders:Q,getTendersFront:$,loading:C,isAll:F,page:V}=ce(),N=localStorage.user?JSON.parse(localStorage.user):"",j=g([]),b=g([]),h=g([]),z=g(null),U=g(!0);ne(async()=>{window.addEventListener("scroll",M),await $(),await A(),await G(),await Z(),await q(),await I(),await P()}),ae(async()=>{V.value=1,window.removeEventListener("scroll",M)});const M=async l=>{z.value&&z.value.getBoundingClientRect().bottom<window.innerHeight&&U.value&&!F.value&&n.country==""&&n.continent==""&&n.zone==""&&n.activity_area==""&&n.city==""&&n.min_price==""&&n.currency==""&&(U.value=!1,V.value++,await $(),U.value=!0)},y=g(!0),n=re({country:"",continent:"",zone:"",activity_area:"",city:"",min_price:"",currency:"",searchKey:""}),W=()=>{y.value=!y.value},u=async()=>{n.country!=""||n.continent!=""||n.zone!=""||n.activity_area!=""||n.city!=""||n.min_price!=""||n.currency!=""||n.searchKey!=""?(n.min_price=n.min_price.trim().replaceAll(" ",""),await Q({...n})):(V.value=1,F.value=!1,await $())},X=async()=>{h.value=O.value.filter(l=>l.country_id==n.country),n.city="",await u()},Y=async()=>{b.value=H.value.filter(l=>l.zone_id==n.zone),n.country="",n.city="",h.value=[],await u()},ee=async()=>{j.value=E.value.filter(l=>l.continent_id==n.continent),n.zone="",n.country="",n.city="",h.value=[],b.value=[],await u()};return(l,r)=>{const B=L("router-link"),te=L("NoContent");return s(),o("div",je,[t("h1",ze,a(l.$t("appel d'offre")),1),t("div",Ue,[t("div",Se,[t("button",{onClick:r[0]||(r[0]=e=>W()),class:"flex items-center justify-start text-sm text-primary-blue hover:underline"},[y.value?(s(),f(i(le),{key:0,class:"h-5 w-5"})):d("",!0),y.value?(s(),o("span",Te,a(l.$t("hide-filter")),1)):d("",!0),y.value?d("",!0):(s(),f(i(ie),{key:2,class:"h-5 w-5"})),y.value?d("",!0):(s(),o("span",Ae,a(l.$t("show-filter")),1))])]),_(ue,{"enter-active-class":" transition-all  ","enter-from-class":" opacity-0  -translate-y-full","enter-to-class":"  opacity-1 translate-y-0","leave-active-class":"","leave-from-class":"","leave-to-class":""},{default:S(()=>[y.value?(s(),o("div",Fe,[t("div",Ne,[t("div",null,[t("label",Me,a(l.$t("key-words")),1),c(t("input",{type:"text",onChange:r[1]||(r[1]=e=>u()),"onUpdate:modelValue":r[2]||(r[2]=e=>n.searchKey=e),class:"form-input mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,544),[[K,n.searchKey]])]),t("div",null,[t("label",Be,a(l.$t("activity-area")),1),c(t("select",{onChange:r[3]||(r[3]=e=>u()),"onUpdate:modelValue":r[4]||(r[4]=e=>n.activity_area=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Ke,(s(!0),o(p,null,m(i(w),e=>(s(),o("option",{key:e.id,value:e.id},[l.$i18n.locale=="en"?(s(),o("span",De,a(e.name_en),1)):l.$i18n.locale=="fr"?(s(),o("span",Re,a(e.name_fr),1)):l.$i18n.locale=="es"?(s(),o("span",qe,a(e.name_es),1)):(s(),o("span",Ee,a(e.name_pt),1))],8,Le))),128))],544),[[v,n.activity_area]])])]),t("div",Ze,[t("div",Je,[t("label",Ge,a(l.$t("continent")),1),c(t("select",{onChange:r[5]||(r[5]=e=>ee()),"onUpdate:modelValue":r[6]||(r[6]=e=>n.continent=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[He,(s(!0),o(p,null,m(i(J),e=>(s(),o("option",{key:e.id,value:e.id},[l.$i18n.locale=="en"?(s(),o("span",Oe,a(e.name_en),1)):l.$i18n.locale=="fr"?(s(),o("span",Pe,a(e.name_fr),1)):l.$i18n.locale=="es"?(s(),o("span",Qe,a(e.name_es),1)):(s(),o("span",We,a(e.name_pt),1))],8,Ie))),128))],544),[[v,n.continent]])]),t("div",Xe,[t("label",Ye,a(l.$t("zoned")),1),c(t("select",{onChange:r[7]||(r[7]=e=>Y()),"onUpdate:modelValue":r[8]||(r[8]=e=>n.zone=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[et,j.value.length!=0?(s(!0),o(p,{key:0},m(j.value,e=>(s(),o("option",{key:e.id,value:e.id},[l.$i18n.locale=="en"?(s(),o("span",st,a(e.name_en),1)):l.$i18n.locale=="fr"?(s(),o("span",ot,a(e.name_fr),1)):l.$i18n.locale=="es"?(s(),o("span",nt,a(e.name_es),1)):(s(),o("span",at,a(e.name_pt),1))],8,tt))),128)):(s(),o("option",rt," Requires "+a(l.$t("continent")),1))],544),[[v,n.zone]])]),t("div",lt,[t("label",it,a(l.$t("country")),1),c(t("select",{onChange:r[9]||(r[9]=e=>X()),"onUpdate:modelValue":r[10]||(r[10]=e=>n.country=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[dt,b.value.length!=0?(s(!0),o(p,{key:0},m(b.value,e=>(s(),o("option",{key:e.id,value:e.id},[l.$i18n.locale=="en"?(s(),o("span",ct,a(e.name_en),1)):l.$i18n.locale=="fr"?(s(),o("span",yt,a(e.name_fr),1)):l.$i18n.locale=="es"?(s(),o("span",pt,a(e.name_es),1)):(s(),o("span",mt,a(e.name_pt),1))],8,ut))),128)):(s(),o("option",_t," Requires "+a(l.$t("zoned")),1))],544),[[v,n.country]])]),t("div",gt,[t("label",ft,a(l.$t("city")),1),c(t("select",{onChange:r[11]||(r[11]=e=>u()),"onUpdate:modelValue":r[12]||(r[12]=e=>n.city=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[vt,h.value.length!=0?(s(!0),o(p,{key:0},m(h.value,e=>(s(),o("option",{key:e.id,value:e.id},[l.$i18n.locale=="en"?(s(),o("span",bt,a(e.name_en),1)):l.$i18n.locale=="fr"?(s(),o("span",kt,a(e.name_fr),1)):l.$i18n.locale=="es"?(s(),o("span",wt,a(e.name_es),1)):(s(),o("span",xt,a(e.name_pt),1))],8,ht))),128)):(s(),o("option",$t," Requires "+a(l.$t("country")),1))],544),[[v,n.city]])])]),t("div",Ct,[t("div",null,[t("label",Vt,a(l.$t("salary"))+" Min. ",1),c(t("input",{"onUpdate:modelValue":r[13]||(r[13]=e=>n.min_price=e),onChange:r[14]||(r[14]=e=>u()),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544),[[K,n.min_price]])]),t("div",null,[t("label",jt,a(l.$t("currency")),1),c(t("select",{onChange:r[15]||(r[15]=e=>u()),"onUpdate:modelValue":r[16]||(r[16]=e=>n.currency=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[zt,(s(!0),o(p,null,m(i(T),e=>(s(),o("option",{key:e.id,value:e.id},a(e.symbol+" "+e.name),9,Ut))),128))],544),[[v,n.currency]])]),t("div",St,[t("div",null,[c(t("input",{type:"checkbox",id:"recruitment-agency",class:"mr-3",onChange:r[17]||(r[17]=e=>u()),"onUpdate:modelValue":r[18]||(r[18]=e=>n.recruitment_agency=e)},null,544),[[de,n.recruitment_agency]]),t("label",Tt,a(l.$t("recruitment-agency")),1)])])])])):d("",!0)]),_:1}),y.value?(s(),o("div",At)):d("",!0),i(N).type!="particular"&&i(N).type!="business1"?(s(),o("div",Ft,[_(B,{to:{name:"add.tender"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:S(()=>[_(i(he),{class:"h-6 w-6"}),t("p",Nt,a(l.$t("add"))+" Appel ",1)]),_:1},8,["to"])])):d("",!0),i(C)==3?(s(),f(D,{key:2})):i(x).length!=0?(s(),o("div",{key:3,ref_key:"tenderContainer",ref:z,class:"text-lg"},[(s(!0),o(p,null,m(i(x),e=>(s(),o("div",{key:e.id},[_(B,{to:{name:"show.tender",params:{id:e.id,slug:e.slug}},class:"flex items-center justify-between border-b border-gray-200 px-2 py-4 hover:bg-gray-100"},{default:S(()=>[t("div",Mt,[t("div",Bt,[e.company_logo?(s(),o("img",{key:0,src:e.company_logo,alt:"",class:"h-16 w-16 object-cover"},null,8,Kt)):(s(),f(i(be),{key:1,class:"h-16 w-16 text-gray-500"}))]),t("div",null,[t("h1",Lt,a(e.title),1),t("h2",Dt,a(e.company_name),1)]),t("div",Rt,[t("h1",qt,[_(i(ke),{class:"h-5 w-5"}),t("span",null,a(e.location),1)]),e.currency?(s(),o("h2",Et,[_(i(we),{class:"h-5 w-5"}),t("span",null,a(e.min_price+e.currency.symbol)+" - "+a(e.max_price+e.currency.symbol),1)])):d("",!0)])]),t("div",Zt,[t("h1",Jt," Publi\xE9 le: "+a(new Date(e.date).toLocaleDateString(i(k),{day:"numeric",year:"numeric",month:"long"})),1)])]),_:2},1032,["to"])]))),128))],512)):d("",!0),i(C)==1?(s(),f(D,{key:4})):d("",!0),i(x).length==0&&i(C)!=1?(s(),f(te,{key:5})):d("",!0)])])}}};export{os as default};
