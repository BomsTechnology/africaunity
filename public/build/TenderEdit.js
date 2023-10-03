var T=(V,k,m)=>new Promise((w,h)=>{var q=y=>{try{b(m.next(y))}catch(v){h(v)}},t=y=>{try{b(m.throw(y))}catch(v){h(v)}},b=y=>y.done?w(y.value):Promise.resolve(y.value).then(q,t);b((m=m.apply(V,k)).next())});import{G as ne,r as _,o as se,b as de,d as n,e as s,f as r,h as o,l as ie,w as ue,j as A,t as i,P as ce,k as S,m as pe,I as d,K as g,J as u,F as c,x as p,g as ye}from"./app.js";import{u as ge}from"./tenderServices.js";import{u as be}from"./currencyServices.js";import{u as me}from"./activityAreaServices.js";import{u as fe,a as _e}from"./workDepartmentServices.js";import{u as ve,a as xe,b as ke}from"./yearExperienceServices.js";import{u as we}from"./workModeServices.js";import{u as he}from"./languageServices.js";import{u as Ce}from"./countryServices.js";import{u as Ve}from"./zoneServices.js";import{u as qe}from"./continentServices.js";import{u as Ue}from"./cityServices.js";const ze={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},Te={class:"z-0 w-full p-4"},Se=r("div",{class:"flex w-full justify-between bg-white px-8 py-5"},[r("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Edit Tender ")],-1),Ee={class:"mx-auto w-full bg-white p-6"},Le=r("h2",{class:"text-md font-light text-gray-700"}," Edit a Tender ",-1),Me={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Ae={class:"col-span-2"},De=r("label",{class:"dark:text-gray-200 text-gray-700"},"Title",-1),We=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent",-1),Fe=["value"],$e=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Zone",-1),Ne=["value"],je={key:1,value:"null"},Be=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country",-1),Oe=["value"],Pe={key:1,value:"null"},Re=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"City",-1),Ze=["value"],Ye={key:1,value:"null"},Ge={class:"col-span-2"},Ie=r("label",{class:"dark:text-gray-200 text-gray-700"},"Location",-1),Je={class:""},Ke={class:"dark:text-gray-200 text-gray-700"},He=r("span",{class:"text-red-500"},"*",-1),Qe=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Name",-1),Xe=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Email",-1),er=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Website",-1),rr=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company logo",-1),tr={class:"col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-3"},or=r("label",{class:"dark:text-gray-200 text-gray-700"},"Min Price",-1),ar=r("label",{class:"dark:text-gray-200 text-gray-700"},"Max Price",-1),lr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Currency",-1),nr=["value"],sr={class:"col-span-2"},dr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Languages",-1),ir=["value"],ur=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Size Company",-1),cr=["value"],pr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Level Study",-1),yr=["value"],gr={class:"col-span-2"},br=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Activity Areas",-1),mr=["value"],fr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Work Department",-1),_r=["value"],vr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Work Mode",-1),xr=["value"],kr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Offer Type",-1),wr=["value"],hr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Year Experience",-1),Cr=["value"],Vr={class:"col-span-2"},qr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Description",-1),Ur={class:"mt-6 flex justify-end"},zr={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},Tr={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},Yr={__name:"TenderEdit",props:{id:{required:!0,type:String}},setup(V){const k=V,m=ne(),w=_(null),{updateTender:h,getTender:q,tender:t,errors:b,loading:y}=ge(),{currencies:v,getCurrencies:D}=be(),{languages:W,getLanguages:F}=he(),{activityAreas:$,getActivityAreas:N}=me(),{sizeCompanies:j,getSizeCompanies:B}=fe(),{levelStudies:O,getLevelStudies:Sr}=ve(),{offerTypes:P,getOfferTypes:Er}=xe(),{workDepartments:R,getWorkDepartments:Z}=_e(),{workModes:Y,getWorkModes:G}=we(),{yearExperiences:I,getYearExperiences:Lr}=ke(),{countries:E,getCountries:J}=Ce(),{zones:L,getZones:K}=Ve(),{continents:H,getContinents:Q}=qe(),{cities:M,getCities:X}=Ue(),C=_([]),x=_([]),f=_([]),ee=()=>{f.value=M.value.filter(l=>l.country_id==t.value.country_id),t.value.city.id=""},re=()=>{x.value=E.value.filter(l=>l.zone_id==t.value.zone_id),t.value.country.id="",t.value.city.id="",f.value=[]},te=()=>{C.value=L.value.filter(l=>l.continent_id==t.value.continent_id),t.value.zone.id="",t.value.country.id="",t.value.city.id="",f.value=[],x.value=[]};se(()=>T(this,null,function*(){yield q(k.id),yield D(),yield Q(),yield K(),yield G(),yield Z(),yield B(),yield N(),yield F(),yield J(),yield X(),C.value=L.value.filter(l=>l.continent_id==t.value.continent_id),x.value=E.value.filter(l=>l.zone_id==t.value.zone_id),f.value=M.value.filter(l=>l.country_id==t.value.country_id),t.value.company_logo=""}));const U=_([]),z=_([]),oe=()=>T(this,null,function*(){let l=new FormData;l.append("title",t.value.title),l.append("description",t.value.description),l.append("start_date",t.value.start_date),l.append("location",t.value.location),l.append("company_name",t.value.company_name),l.append("company_email",t.value.company_email),l.append("company_website",t.value.company_website),l.append("company_logo",t.value.company_logo),l.append("min_price",t.value.min_price),l.append("max_price",t.value.max_price),l.append("user_id",t.value.user_id),l.append("currency_id",t.value.currency_id),l.append("work_department_id",t.value.work_department_id),l.append("work_mode_id",t.value.work_mode_id),l.append("size_company_id",t.value.size_company_id),l.append("city_id",t.value.city_id),l.append("zone_id",t.value.zone_id),l.append("continent_id",t.value.continent_id),l.append("country_id",t.value.country_id),l.append("languages",U.value),l.append("activityAreas",z.value),l.append("_method","PUT"),yield h(l,k.id),b.value==""&&m.push({name:"admin.tender.index"})}),ae=()=>{t.value.company_logo=w.value.files[0]};return(l,a)=>{const le=de("Spin");return n(),s("div",ze,[r("div",Te,[Se,r("section",Ee,[o(b)!=""?(n(),ie(ce,{key:0},{default:ue(()=>[A(i(o(b)),1)]),_:1})):S("",!0),Le,r("form",{onSubmit:a[23]||(a[23]=pe(e=>oe(),["prevent"])),id:"tenderform",enctype:"multipart/form-data"},[r("div",Me,[r("div",Ae,[De,d(r("input",{required:"","onUpdate:modelValue":a[0]||(a[0]=e=>o(t).title=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[g,o(t).title]])]),r("div",null,[We,d(r("select",{required:"",onChange:te,"onUpdate:modelValue":a[1]||(a[1]=e=>o(t).continent_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(H),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Fe))),128))],544),[[u,o(t).continent_id]])]),r("div",null,[$e,d(r("select",{required:"",onChange:re,"onUpdate:modelValue":a[2]||(a[2]=e=>o(t).zone_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[C.value.length!=0?(n(!0),s(c,{key:0},p(C.value,e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Ne))),128)):(n(),s("option",je," Requires "+i(l.$t("continent")),1))],544),[[u,o(t).zone_id]])]),r("div",null,[Be,d(r("select",{required:"",onChange:ee,"onUpdate:modelValue":a[3]||(a[3]=e=>o(t).country_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[x.value.length!=0?(n(!0),s(c,{key:0},p(x.value,e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Oe))),128)):(n(),s("option",Pe," Requires "+i(l.$t("zoned")),1))],544),[[u,o(t).country_id]])]),r("div",null,[Re,d(r("select",{required:"","onUpdate:modelValue":a[4]||(a[4]=e=>o(t).city_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[f.value.length!=0?(n(!0),s(c,{key:0},p(f.value,e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Ze))),128)):(n(),s("option",Ye," Requires "+i(l.$t("country")),1))],512),[[u,o(t).city_id]])]),r("div",Ge,[Ie,d(r("input",{required:"","onUpdate:modelValue":a[5]||(a[5]=e=>o(t).location=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[g,o(t).location]])]),r("div",Je,[r("label",Ke,[A(i(l.$t("start-date"))+" ",1),He]),d(r("input",{required:"","onUpdate:modelValue":a[6]||(a[6]=e=>o(t).start_date=e),type:"date",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[g,o(t).start_date]])]),r("div",null,[Qe,d(r("input",{required:"","onUpdate:modelValue":a[7]||(a[7]=e=>o(t).company_name=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[g,o(t).company_name]])]),r("div",null,[Xe,d(r("input",{required:"","onUpdate:modelValue":a[8]||(a[8]=e=>o(t).company_email=e),type:"email",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[g,o(t).company_email]])]),r("div",null,[er,d(r("input",{"onUpdate:modelValue":a[9]||(a[9]=e=>o(t).company_website=e),type:"url",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[g,o(t).company_website]])]),r("div",null,[rr,r("input",{ref_key:"file",ref:w,onChange:a[10]||(a[10]=e=>ae()),type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)]),r("div",tr,[r("div",null,[or,d(r("input",{required:"","onUpdate:modelValue":a[11]||(a[11]=e=>o(t).min_price=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[g,o(t).min_price]])]),r("div",null,[ar,d(r("input",{required:"","onUpdate:modelValue":a[12]||(a[12]=e=>o(t).max_price=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[g,o(t).max_price]])]),r("div",null,[lr,d(r("select",{required:"","onUpdate:modelValue":a[13]||(a[13]=e=>o(t).currency_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(v),e=>(n(),s("option",{key:e.id,value:e.id},i(e.symbol+" "+e.name),9,nr))),128))],512),[[u,o(t).currency_id]])])]),r("div",sr,[dr,d(r("select",{required:"",multiple:"","onUpdate:modelValue":a[14]||(a[14]=e=>U.value=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(W),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,ir))),128))],512),[[u,U.value]])]),r("div",null,[ur,d(r("select",{required:"","onUpdate:modelValue":a[15]||(a[15]=e=>o(t).size_company_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(j),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,cr))),128))],512),[[u,o(t).size_company_id]])]),r("div",null,[pr,d(r("select",{required:"","onUpdate:modelValue":a[16]||(a[16]=e=>o(t).level_study_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(O),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,yr))),128))],512),[[u,o(t).level_study_id]])]),r("div",gr,[br,d(r("select",{required:"",multiple:"","onUpdate:modelValue":a[17]||(a[17]=e=>z.value=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o($),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,mr))),128))],512),[[u,z.value]])]),r("div",null,[fr,d(r("select",{required:"","onUpdate:modelValue":a[18]||(a[18]=e=>o(t).work_department_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(R),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,_r))),128))],512),[[u,o(t).work_department_id]])]),r("div",null,[vr,d(r("select",{required:"","onUpdate:modelValue":a[19]||(a[19]=e=>o(t).work_mode_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(Y),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,xr))),128))],512),[[u,o(t).work_mode_id]])]),r("div",null,[kr,d(r("select",{required:"","onUpdate:modelValue":a[20]||(a[20]=e=>o(t).offer_type_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(P),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,wr))),128))],512),[[u,o(t).offer_type_id]])]),r("div",null,[hr,d(r("select",{required:"","onUpdate:modelValue":a[21]||(a[21]=e=>o(t).year_experience_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(I),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Cr))),128))],512),[[u,o(t).year_experience_id]])]),r("div",Vr,[qr,d(r("textarea",{required:"",type:"text","onUpdate:modelValue":a[22]||(a[22]=e=>o(t).description=e),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`
                            `,512),[[g,o(t).description]])])]),r("div",Ur,[o(y)==0?(n(),s("button",zr," Save ")):S("",!0),o(y)==1?(n(),s("button",Tr,[ye(le,{size:"small"})])):S("",!0)])],32)])])])}}};export{Yr as default};
