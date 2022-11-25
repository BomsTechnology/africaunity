import{r as b,o as te,a as oe,c as s,d as i,e as r,g as d,k as ae,w as se,h as ie,t as n,m as x,l as le,j as l,K as y,J as u,F as c,x as p,I as ne}from"./app.fb44c589.js";import{E as de}from"./Error.85489273.js";import{u as ue}from"./jobOfferServices.77f08fd4.js";import{u as ce}from"./currencyServices.6322c318.js";import{u as pe}from"./activityAreaServices.5fe4d436.js";import{u as ye,a as ge}from"./workDepartmentServices.7a78c6b3.js";import{u as me,a as be,b as fe,c as _e}from"./yearExperienceServices.ff41386c.js";import{u as xe}from"./languageServices.8fa47d30.js";import{u as ke}from"./countryServices.da13ab14.js";import{u as ve}from"./zoneServices.97066860.js";import{u as we}from"./continentServices.3f8bd4fd.js";import{u as he}from"./cityServices.526eea0e.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Ce={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},Ve={class:"z-0 w-full p-4"},Ue=r("div",{class:"flex w-full justify-between bg-white px-8 py-5"},[r("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Add JobOffer ")],-1),qe={class:"mx-auto w-full bg-white p-6"},ze=r("h2",{class:"text-md font-light text-gray-700"}," Add a new JobOffer ",-1),Oe={class:""},Se={class:"col-span-2"},Ae=r("label",{class:"dark:text-gray-200 text-gray-700"},"Title",-1),Me={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Je=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent",-1),Le=["value"],je=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Zone",-1),De=["value"],We={key:1,value:"null"},Ee=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country",-1),Fe=["value"],Be={key:1,value:"null"},Ne=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"City",-1),Te=["value"],$e={key:1,value:"null"},Ze={class:"col-span-2"},Ye=r("label",{class:"dark:text-gray-200 text-gray-700"},"Location",-1),Pe={class:"col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"},He=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Name",-1),Ie=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Email",-1),Ke=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Website",-1),Re=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company logo",-1),Ge={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"},Qe=r("label",{class:"dark:text-gray-200 text-gray-700"},"Min Price",-1),Xe=r("label",{class:"dark:text-gray-200 text-gray-700"},"Max Price",-1),er=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Currency",-1),rr=["value"],tr={class:"col-span-2"},or=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Languages",-1),ar=["value"],sr={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},ir=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Size Company",-1),lr=["value"],nr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Level Study",-1),dr=["value"],ur={class:"col-span-2"},cr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Activity Areas",-1),pr=["value"],yr={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},gr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Work Department",-1),mr=["value"],br=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Work Mode",-1),fr=["value"],_r=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Offer Type",-1),xr=["value"],kr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Year Experience",-1),vr=["value"],wr={class:"col-span-2"},hr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Description",-1),Cr={class:"mt-6 flex justify-end"},Vr={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},Ur={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},qr=r("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[r("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),r("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),zr=[qr],$r={__name:"JobOfferCreate",setup(Or){const w=ne(),k=b(null),h=JSON.parse(localStorage.user),{currencies:C,getCurrencies:V}=ce(),{languages:U,getLanguages:q}=xe(),{activityAreas:z,getActivityAreas:O}=pe(),{sizeCompanies:S,getSizeCompanies:A}=ye(),{levelStudies:M,getLevelStudies:J}=me(),{offerTypes:L,getOfferTypes:j}=be(),{workDepartments:D,getWorkDepartments:W}=ge(),{workModes:E,getWorkModes:F}=fe(),{yearExperiences:B,getYearExperiences:N}=_e(),{countries:T,getCountries:$}=ke(),{zones:Z,getZones:Y}=ve(),{continents:P,getContinents:H}=we(),{cities:I,getCities:K}=he(),f=b([]),m=b([]),g=b([]);te(async()=>{await V(),await H(),await Y(),await N(),await F(),await W(),await J(),await A(),await j(),await O(),await q(),await $(),await K()});const t=oe({title:"",description:"",location:"",company_name:"",company_email:"",company_website:"",company_logo:"",min_price:"",max_price:"",user_id:h.id,currency_id:"",year_experience_id:"",work_department_id:"",work_mode_id:"",size_company_id:"",offer_type_id:"",level_study_id:"",city_id:"",zone_id:"",continent_id:"",country_id:"",languages:[],activityAreas:[]}),{createJobOffer:R,errors:_,loading:v}=ue(),G=()=>{g.value=I.value.filter(a=>a.country_id==t.country_id),t.city_id=""},Q=()=>{m.value=T.value.filter(a=>a.zone_id==t.zone_id),t.country_id="",t.city_id="",g.value=[]},X=()=>{f.value=Z.value.filter(a=>a.continent_id==t.continent_id),t.zone_id="",t.country_id="",t.city_id="",g.value=[],m.value=[]},ee=async()=>{let a=new FormData;a.append("title",t.title),a.append("description",t.description),a.append("location",t.location),a.append("company_name",t.company_name),a.append("company_email",t.company_email),a.append("company_website",t.company_website),a.append("company_logo",t.company_logo),a.append("min_price",t.min_price),a.append("max_price",t.max_price),a.append("user_id",t.user_id),a.append("currency_id",t.currency_id),a.append("year_experience_id",t.year_experience_id),a.append("work_department_id",t.work_department_id),a.append("work_mode_id",t.work_mode_id),a.append("size_company_id",t.size_company_id),a.append("offer_type_id",t.offer_type_id),a.append("level_study_id",t.level_study_id),a.append("city_id",t.city_id),a.append("zone_id",t.zone_id),a.append("continent_id",t.continent_id),a.append("country_id",t.country_id),a.append("languages",t.languages),a.append("activityAreas",t.activityAreas),await R(a),_.value==""&&w.push({name:"admin.jobOffer.index"})},re=()=>{t.company_logo=k.value.files[0]};return(a,o)=>(s(),i("div",Ce,[r("div",Ve,[Ue,r("section",qe,[d(_)!=""?(s(),ae(de,{key:0},{default:se(()=>[ie(n(d(_)),1)]),_:1})):x("",!0),ze,r("form",{onSubmit:o[22]||(o[22]=le(e=>ee(),["prevent"])),id:"jobOfferform",enctype:"multipart/form-data"},[r("div",Oe,[r("div",Se,[Ae,l(r("input",{required:"","onUpdate:modelValue":o[0]||(o[0]=e=>t.title=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.title]])]),r("div",Me,[r("div",null,[Je,l(r("select",{required:"",onChange:X,"onUpdate:modelValue":o[1]||(o[1]=e=>t.continent_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(P),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,Le))),128))],544),[[u,t.continent_id]])]),r("div",null,[je,l(r("select",{required:"","onUpdate:modelValue":o[2]||(o[2]=e=>t.zone_id=e),onChange:Q,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[f.value.length!=0?(s(!0),i(c,{key:0},p(f.value,e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,De))),128)):(s(),i("option",We," Select "+n(a.$t("continent")),1))],544),[[u,t.zone_id]])]),r("div",null,[Ee,l(r("select",{required:"",onChange:G,"onUpdate:modelValue":o[3]||(o[3]=e=>t.country_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[m.value.length!=0?(s(!0),i(c,{key:0},p(m.value,e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,Fe))),128)):(s(),i("option",Be," Select "+n(a.$t("zoned")),1))],544),[[u,t.country_id]])]),r("div",null,[Ne,l(r("select",{required:"","onUpdate:modelValue":o[4]||(o[4]=e=>t.city_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[g.value.length!=0?(s(!0),i(c,{key:0},p(g.value,e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,Te))),128)):(s(),i("option",$e," Select "+n(a.$t("country")),1))],512),[[u,t.city_id]])])]),r("div",Ze,[Ye,l(r("input",{required:"","onUpdate:modelValue":o[5]||(o[5]=e=>t.location=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.location]])]),r("div",Pe,[r("div",null,[He,l(r("input",{required:"","onUpdate:modelValue":o[6]||(o[6]=e=>t.company_name=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.company_name]])]),r("div",null,[Ie,l(r("input",{required:"","onUpdate:modelValue":o[7]||(o[7]=e=>t.company_email=e),type:"email",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.company_email]])]),r("div",null,[Ke,l(r("input",{"onUpdate:modelValue":o[8]||(o[8]=e=>t.company_website=e),type:"url",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.company_website]])]),r("div",null,[Re,r("input",{ref_key:"file",ref:k,onChange:o[9]||(o[9]=e=>re()),type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])]),r("div",Ge,[r("div",null,[Qe,l(r("input",{required:"","onUpdate:modelValue":o[10]||(o[10]=e=>t.min_price=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.min_price]])]),r("div",null,[Xe,l(r("input",{required:"","onUpdate:modelValue":o[11]||(o[11]=e=>t.max_price=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.max_price]])]),r("div",null,[er,l(r("select",{required:"","onUpdate:modelValue":o[12]||(o[12]=e=>t.currency_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(C),e=>(s(),i("option",{key:e.id,value:e.id},n(e.symbol+" "+e.name),9,rr))),128))],512),[[u,t.currency_id]])])]),r("div",tr,[or,l(r("select",{required:"",multiple:"","onUpdate:modelValue":o[13]||(o[13]=e=>t.languages=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(U),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,ar))),128))],512),[[u,t.languages]])]),r("div",sr,[r("div",null,[ir,l(r("select",{required:"","onUpdate:modelValue":o[14]||(o[14]=e=>t.size_company_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(S),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,lr))),128))],512),[[u,t.size_company_id]])]),r("div",null,[nr,l(r("select",{required:"","onUpdate:modelValue":o[15]||(o[15]=e=>t.level_study_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(M),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,dr))),128))],512),[[u,t.level_study_id]])])]),r("div",ur,[cr,l(r("select",{required:"",multiple:"","onUpdate:modelValue":o[16]||(o[16]=e=>t.activityAreas=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(z),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,pr))),128))],512),[[u,t.activityAreas]])]),r("div",yr,[r("div",null,[gr,l(r("select",{required:"","onUpdate:modelValue":o[17]||(o[17]=e=>t.work_department_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(D),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,mr))),128))],512),[[u,t.work_department_id]])]),r("div",null,[br,l(r("select",{required:"","onUpdate:modelValue":o[18]||(o[18]=e=>t.work_mode_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(E),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,fr))),128))],512),[[u,t.work_mode_id]])]),r("div",null,[_r,l(r("select",{required:"","onUpdate:modelValue":o[19]||(o[19]=e=>t.offer_type_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(L),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,xr))),128))],512),[[u,t.offer_type_id]])]),r("div",null,[kr,l(r("select",{required:"","onUpdate:modelValue":o[20]||(o[20]=e=>t.year_experience_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(B),e=>(s(),i("option",{key:e.id,value:e.id},n(e.name_en),9,vr))),128))],512),[[u,t.year_experience_id]])])]),r("div",wr,[hr,l(r("textarea",{required:"",type:"text","onUpdate:modelValue":o[21]||(o[21]=e=>t.description=e),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                            `,512),[[y,t.description]])])]),r("div",Cr,[d(v)==0?(s(),i("button",Vr," Save ")):x("",!0),d(v)==1?(s(),i("button",Ur,zr)):x("",!0)])],32)])])]))}};export{$r as default};