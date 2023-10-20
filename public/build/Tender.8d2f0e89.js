var ne=Object.defineProperty;var E=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var Z=(c,u,i)=>u in c?ne(c,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[u]=i,I=(c,u)=>{for(var i in u||(u={}))re.call(u,i)&&Z(c,i,u[i]);if(E)for(var i of E(u))ae.call(u,i)&&Z(c,i,u[i]);return c};var m=(c,u,i)=>new Promise((z,v)=>{var U=y=>{try{k(i.next(y))}catch(x){v(x)}},A=y=>{try{k(i.throw(y))}catch(x){v(x)}},k=y=>y.done?z(y.value):Promise.resolve(y.value).then(U,A);k((i=i.apply(c,u)).next())});import{d as s,e as o,f as t,F as f,x as g,g as w,h as d,R as le,u as ie,r as b,o as de,T as ue,a as ce,b as J,t as r,I as _,K as O,J as h,w as G,k as C,l as j}from"./app.59e8d623.js";import{u as ye}from"./tenderServices.da754325.js";import{u as pe}from"./currencyServices.5cc22889.js";import{u as me}from"./activityAreaServices.ea91f1d7.js";import{u as _e}from"./countryServices.be0576be.js";import{u as fe}from"./zoneServices.1394980d.js";import{u as ge}from"./continentServices.497e44db.js";import{u as ve}from"./cityServices.ccbc8354.js";import{r as be}from"./PhotoIcon.18108ee3.js";import{r as he}from"./PlusCircleIcon.cb1c78f8.js";import{r as we}from"./BuildingOffice2Icon.228afd2b.js";import{r as ke,a as xe}from"./MapPinIcon.d65636f0.js";const $e={class:"animate-pulse"},Ce={class:"space-y-3 py-8"},ze={class:"mx-auto h-16 w-16 overflow-hidden"},Ve=le('<div class="flex w-5/6 flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="flex w-full items-center justify-between"><div class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div>',1),H={__name:"Tender",setup(c){const u=[1,2,3,4];return(i,z)=>(s(),o("div",$e,[t("div",Ce,[(s(),o(f,null,g(u,v=>t("div",{key:v,class:"flex items-center rounded bg-gray-100 shadow"},[t("div",ze,[w(d(be),{class:"h-full w-full text-gray-200"})]),Ve])),64))])]))}},je={class:"mx-auto w-full bg-white py-4 xl:w-[90%]"},Ue={class:"py-4 text-center text-5xl font-bold capitalize text-primary-blue"},Ae={class:"py-8 px-6 lg:px-16 flex lg:flex-row flex-col-reverse gap-5"},Se={class:"lg:max-w-[30%] w-full max-w-full"},Te={class:"space-y-3 px-10 pb-8 pt-4 text-xs lg:border-r lg:text-sm"},Ne={class:"dark:text-gray-200 text-gray-700"},Fe={class:"dark:text-gray-200 text-gray-700"},Be=t("option",{value:""},"--------------",-1),Ke=["value"],Re={key:0},De={key:1},Le={key:2},Me={key:3},qe={class:""},Ee={class:"text-gray-700",for:"es"},Ze=t("option",{value:""},"--------------",-1),Ie=["value"],Je={key:0},Oe={key:1},Ge={key:2},He={key:3},Pe={class:""},Qe={class:"text-gray-700",for:"es"},We=t("option",{value:""},"--------------",-1),Xe=["value"],Ye={key:0},et={key:1},tt={key:2},st={key:3},ot={key:1,value:"null"},nt={class:""},rt={class:"text-gray-700",for:"es"},at=t("option",{value:""},"--------------",-1),lt=["value"],it={key:0},dt={key:1},ut={key:2},ct={key:3},yt={key:1,value:"null"},pt={class:""},mt={class:"text-gray-700",for:"es"},_t=t("option",{value:""},"--------------",-1),ft=["value"],gt={key:0},vt={key:1},bt={key:2},ht={key:3},wt={key:1,value:"null"},kt={class:"dark:text-gray-200 text-gray-700",for:"es"},xt={class:"dark:text-gray-200 text-gray-700",for:"es"},$t=t("option",{value:""},"--------------",-1),Ct=["value"],zt={class:"lg:max-w-[70%] w-full max-w-full"},Vt={key:0,class:"flex justify-end px-6 py-4"},jt={class:"text-base leading-4"},Ut={class:"flex items-center space-x-4"},At={class:"hidden lg:block"},St=["src"],Tt={class:"capitalize"},Nt={class:"font-bold capitalize text-gray-500"},Ft={class:"hidden justify-start space-x-4 font-light capitalize text-gray-500 lg:flex"},Bt={class:"flex items-center justify-center space-x-2"},Kt={key:0,class:"flex items-center justify-start space-x-2"},Rt={class:""},Dt={class:"capitalize"},Xt={__name:"Tender",setup(c){const{locale:u}=ie(),{currencies:i,getCurrencies:z}=pe(),{activityAreas:v,getActivityAreas:U}=me(),{zones:A,getZones:k}=fe(),{continents:y,getContinents:x}=ge(),{countries:P,getCountries:Q}=_e(),{cities:W,getCities:X}=ve(),{tenders:S,filterTenders:Y,getTendersFront:T,loading:N,isAll:D,page:F}=ye(),L=localStorage.user?JSON.parse(localStorage.user):"",B=b([]),V=b([]),$=b([]),K=b(null),R=b(!0);de(()=>m(this,null,function*(){window.addEventListener("scroll",M),yield T(),yield z(),yield x(),yield k(),yield U(),yield Q(),yield X()})),ue(()=>m(this,null,function*(){F.value=1,window.removeEventListener("scroll",M)}));const M=a=>m(this,null,function*(){K.value&&K.value.getBoundingClientRect().bottom<window.innerHeight&&R.value&&!D.value&&n.country==""&&n.continent==""&&n.zone==""&&n.activity_area==""&&n.city==""&&n.min_price==""&&n.currency==""&&(R.value=!1,F.value++,yield T(),R.value=!0)});b(!0);const n=ce({country:"",continent:"",zone:"",activity_area:"",city:"",min_price:"",currency:"",searchKey:""}),p=()=>m(this,null,function*(){n.country!=""||n.continent!=""||n.zone!=""||n.activity_area!=""||n.city!=""||n.min_price!=""||n.currency!=""||n.searchKey!=""?(n.min_price=n.min_price.trim().replaceAll(" ",""),yield Y(I({},n))):(F.value=1,D.value=!1,yield T())}),ee=()=>m(this,null,function*(){$.value=W.value.filter(a=>a.country_id==n.country),n.city="",yield p()}),te=()=>m(this,null,function*(){V.value=P.value.filter(a=>a.zone_id==n.zone),n.country="",n.city="",$.value=[],yield p()}),se=()=>m(this,null,function*(){B.value=A.value.filter(a=>a.continent_id==n.continent),n.zone="",n.country="",n.city="",$.value=[],V.value=[],yield p()});return(a,l)=>{const q=J("router-link"),oe=J("NoContent");return s(),o("div",je,[t("h1",Ue,r(a.$t("appel d'offre")),1),t("div",Ae,[t("div",Se,[t("div",Te,[t("div",null,[t("label",Ne,r(a.$t("key-words")),1),_(t("input",{type:"text",onChange:l[0]||(l[0]=e=>p()),"onUpdate:modelValue":l[1]||(l[1]=e=>n.searchKey=e),class:"form-input mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,544),[[O,n.searchKey]])]),t("div",null,[t("label",Fe,r(a.$t("activity-area")),1),_(t("select",{onChange:l[2]||(l[2]=e=>p()),"onUpdate:modelValue":l[3]||(l[3]=e=>n.activity_area=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Be,(s(!0),o(f,null,g(d(v),e=>(s(),o("option",{key:e.id,value:e.id},[a.$i18n.locale=="en"?(s(),o("span",Re,r(e.name_en),1)):a.$i18n.locale=="fr"?(s(),o("span",De,r(e.name_fr),1)):a.$i18n.locale=="es"?(s(),o("span",Le,r(e.name_es),1)):(s(),o("span",Me,r(e.name_pt),1))],8,Ke))),128))],544),[[h,n.activity_area]])]),t("div",qe,[t("label",Ee,r(a.$t("continent")),1),_(t("select",{onChange:l[4]||(l[4]=e=>se()),"onUpdate:modelValue":l[5]||(l[5]=e=>n.continent=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Ze,(s(!0),o(f,null,g(d(y),e=>(s(),o("option",{key:e.id,value:e.id},[a.$i18n.locale=="en"?(s(),o("span",Je,r(e.name_en),1)):a.$i18n.locale=="fr"?(s(),o("span",Oe,r(e.name_fr),1)):a.$i18n.locale=="es"?(s(),o("span",Ge,r(e.name_es),1)):(s(),o("span",He,r(e.name_pt),1))],8,Ie))),128))],544),[[h,n.continent]])]),t("div",Pe,[t("label",Qe,r(a.$t("zoned")),1),_(t("select",{onChange:l[6]||(l[6]=e=>te()),"onUpdate:modelValue":l[7]||(l[7]=e=>n.zone=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[We,B.value.length!=0?(s(!0),o(f,{key:0},g(B.value,e=>(s(),o("option",{key:e.id,value:e.id},[a.$i18n.locale=="en"?(s(),o("span",Ye,r(e.name_en),1)):a.$i18n.locale=="fr"?(s(),o("span",et,r(e.name_fr),1)):a.$i18n.locale=="es"?(s(),o("span",tt,r(e.name_es),1)):(s(),o("span",st,r(e.name_pt),1))],8,Xe))),128)):(s(),o("option",ot," Requires "+r(a.$t("continent")),1))],544),[[h,n.zone]])]),t("div",nt,[t("label",rt,r(a.$t("country")),1),_(t("select",{onChange:l[8]||(l[8]=e=>ee()),"onUpdate:modelValue":l[9]||(l[9]=e=>n.country=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[at,V.value.length!=0?(s(!0),o(f,{key:0},g(V.value,e=>(s(),o("option",{key:e.id,value:e.id},[a.$i18n.locale=="en"?(s(),o("span",it,r(e.name_en),1)):a.$i18n.locale=="fr"?(s(),o("span",dt,r(e.name_fr),1)):a.$i18n.locale=="es"?(s(),o("span",ut,r(e.name_es),1)):(s(),o("span",ct,r(e.name_pt),1))],8,lt))),128)):(s(),o("option",yt," Requires "+r(a.$t("zoned")),1))],544),[[h,n.country]])]),t("div",pt,[t("label",mt,r(a.$t("city")),1),_(t("select",{onChange:l[10]||(l[10]=e=>p()),"onUpdate:modelValue":l[11]||(l[11]=e=>n.city=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[_t,$.value.length!=0?(s(!0),o(f,{key:0},g($.value,e=>(s(),o("option",{key:e.id,value:e.id},[a.$i18n.locale=="en"?(s(),o("span",gt,r(e.name_en),1)):a.$i18n.locale=="fr"?(s(),o("span",vt,r(e.name_fr),1)):a.$i18n.locale=="es"?(s(),o("span",bt,r(e.name_es),1)):(s(),o("span",ht,r(e.name_pt),1))],8,ft))),128)):(s(),o("option",wt," Requires "+r(a.$t("country")),1))],544),[[h,n.city]])]),t("div",null,[t("label",kt,r(a.$t("salary"))+" Min. ",1),_(t("input",{"onUpdate:modelValue":l[12]||(l[12]=e=>n.min_price=e),onChange:l[13]||(l[13]=e=>p()),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544),[[O,n.min_price]])]),t("div",null,[t("label",xt,r(a.$t("currency")),1),_(t("select",{onChange:l[14]||(l[14]=e=>p()),"onUpdate:modelValue":l[15]||(l[15]=e=>n.currency=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[$t,(s(!0),o(f,null,g(d(i),e=>(s(),o("option",{key:e.id,value:e.id},r(e.symbol+" "+e.name),9,Ct))),128))],544),[[h,n.currency]])])])]),t("div",zt,[d(L).type!="particular"&&d(L).type!="business1"?(s(),o("div",Vt,[w(q,{to:{name:"add.tender"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:G(()=>[w(d(he),{class:"h-6 w-6"}),t("p",jt,r(a.$t("add"))+" AO ",1)]),_:1},8,["to"])])):C("",!0),d(N)==3?(s(),j(H,{key:1})):d(S).length!=0?(s(),o("div",{key:2,ref_key:"tenderContainer",ref:K,class:"text-lg"},[(s(!0),o(f,null,g(d(S),e=>(s(),o("div",{key:e.id},[w(q,{to:{name:"show.tender",params:{id:e.id,slug:e.slug}},class:"flex items-center justify-between border-b border-gray-200 px-2 py-4 hover:bg-gray-100"},{default:G(()=>[t("div",Ut,[t("div",At,[e.company_logo?(s(),o("img",{key:0,src:e.company_logo,alt:"",class:"h-16 w-16 object-cover"},null,8,St)):(s(),j(d(we),{key:1,class:"h-16 w-16 text-gray-500"}))]),t("div",null,[t("h1",Tt,r(e.title),1),t("h2",Nt,r(e.company_name),1)]),t("div",Ft,[t("h1",Bt,[w(d(ke),{class:"h-5 w-5"}),t("span",null,r(e.location),1)]),e.currency?(s(),o("h2",Kt,[w(d(xe),{class:"h-5 w-5"}),t("span",null,r(e.min_price+e.currency.symbol)+" - "+r(e.max_price+e.currency.symbol),1)])):C("",!0)])]),t("div",Rt,[t("h1",Dt," Publi\xE9 le: "+r(new Date(e.date).toLocaleDateString(d(u),{day:"numeric",year:"numeric",month:"long"})),1)])]),_:2},1032,["to"])]))),128))],512)):C("",!0),d(N)==1?(s(),j(H,{key:3})):C("",!0),d(S).length==0&&d(N)!=1?(s(),j(oe,{key:4})):C("",!0)])])])}}};export{Xt as default};
