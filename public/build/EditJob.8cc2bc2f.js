var j=(C,w,h)=>new Promise((x,$)=>{var z=_=>{try{g(h.next(_))}catch(v){$(v)}},o=_=>{try{g(h.throw(_))}catch(v){$(v)}},g=_=>_.done?x(_.value):Promise.resolve(_.value).then(z,o);g((h=h.apply(C,w)).next())});import{G as _e,r as b,o as fe,b as ge,d as n,e as l,f as s,t as a,h as r,l as S,w as be,j as d,P as he,k as c,m as ve,I as u,K as f,J as p,F as m,x as y,g as ke}from"./app.59e8d623.js";import{u as we}from"./jobOfferServices.aa5ebd3f.js";import{u as xe}from"./currencyServices.5cc22889.js";import{u as $e}from"./activityAreaServices.ea91f1d7.js";import{u as Ve,a as Ue}from"./workDepartmentServices.ebac1f86.js";import{u as qe}from"./levelStudyServices.5acf4292.js";import{u as Ce,a as ze}from"./yearExperienceServices.71201b64.js";import{u as Oe}from"./contractTypeServices.0a13207d.js";import{u as je}from"./workModeServices.4a281b3f.js";import{u as Le}from"./languageServices.732ede50.js";import{u as Re}from"./countryServices.be0576be.js";import{u as Je}from"./zoneServices.1394980d.js";import{u as Fe}from"./continentServices.497e44db.js";import{u as Se}from"./cityServices.ccbc8354.js";import{_ as Be}from"./RichText.3e014ce4.js";const Me={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},Ne={class:"w-full space-y-4 py-5 text-center"},We={class:"text-4xl font-bold capitalize text-primary-blue"},Ie={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},Ze={class:"text-xl font-semibold"},Ae={class:"text-md font-light text-gray-700"},De={class:"mt-4"},Pe={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Ye={class:"col-span-1"},Ee={class:"text-gray-700"},Ge=s("span",{class:"text-red-500"},"*",-1),Ke={class:"text-xs font-light text-gray-400"},He={class:"col-span-1"},Qe=s("label",{class:"text-gray-700"},[d("Reference "),s("span",{class:"text-red-500"},"*")],-1),Xe={class:"text-xs font-light text-gray-400"},Te={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},et={class:"text-gray-700",for:"es"},tt=s("span",{class:"text-red-500"},"*",-1),ot=["value"],st={key:0},nt={key:1},lt={key:2},at={key:3},rt={class:"text-gray-700",for:"es"},it=s("span",{class:"text-red-500"},"*",-1),dt=["value"],ut={key:0},ct={key:1},pt={key:2},mt={key:3},yt={key:1,value:"null"},_t={class:"text-gray-700",for:"es"},ft=s("span",{class:"text-red-500"},"*",-1),gt=["value"],bt={key:0},ht={key:1},vt={key:2},kt={key:3},wt={key:1,value:"null"},xt={class:"text-gray-700",for:"es"},$t=s("span",{class:"text-red-500"},"*",-1),Vt=["value"],Ut={key:0},qt={key:1},Ct={key:2},zt={key:3},Ot={key:1,value:"null"},jt={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Lt={class:""},Rt={class:"text-gray-700"},Jt=s("span",{class:"text-red-500"},"*",-1),Ft={class:""},St={class:"text-gray-700"},Bt=s("span",{class:"text-red-500"},"*",-1),Mt={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Nt={class:"text-gray-700"},Wt=s("span",{class:"text-red-500"},"*",-1),It={class:"text-gray-700"},Zt=s("span",{class:"text-red-500"},"*",-1),At={class:"text-gray-700"},Dt={class:"text-gray-700"},Pt={class:"flex items-center space-x-4 py-4"},Yt=["src","alt"],Et=s("span",{class:"text-xs font-light text-gray-500"},"(Format: png, jpg, jpeg, webp | max: 500*500)",-1),Gt={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"},Kt={class:"text-gray-700"},Ht=s("span",{class:"text-red-500"},"*",-1),Qt={class:"text-gray-700"},Xt=s("span",{class:"text-red-500"},"*",-1),Tt={class:"text-gray-700",for:"es"},eo=s("span",{class:"text-red-500"},"*",-1),to=["value"],oo={class:"col-span-2 mt-4"},so={class:"text-gray-700",for:"es"},no={class:"hidden text-xs font-light lg:inline-block"},lo=s("span",{class:"text-red-500"},"*",-1),ao=["value"],ro={key:0},io={key:1},uo={key:2},co={key:3},po={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},mo={class:"text-gray-700",for:"es"},yo=s("span",{class:"text-red-500"},"*",-1),_o=["value"],fo={class:"text-gray-700",for:"es"},go=s("span",{class:"text-red-500"},"*",-1),bo=["value"],ho={key:0},vo={key:1},ko={key:2},wo={key:3},xo={class:"col-span-2 mt-4"},$o={class:"text-gray-700",for:"es"},Vo={class:"hidden text-xs font-light lg:inline-block"},Uo=s("span",{class:"text-red-500"},"*",-1),qo=["value"],Co={key:0},zo={key:1},Oo={key:2},jo={key:3},Lo={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Ro={class:"text-gray-700",for:"es"},Jo=s("span",{class:"text-red-500"},"*",-1),Fo=["value"],So={key:0},Bo={key:1},Mo={key:2},No={key:3},Wo={class:"text-gray-700",for:"es"},Io=s("span",{class:"text-red-500"},"*",-1),Zo=["value"],Ao={key:0},Do={key:1},Po={key:2},Yo={key:3},Eo={class:"text-gray-700",for:"es"},Go=s("span",{class:"text-red-500"},"*",-1),Ko=["value"],Ho={key:0},Qo={key:1},Xo={key:2},To={key:3},es={class:"text-gray-700",for:"es"},ts=s("span",{class:"text-red-500"},"*",-1),os=["value"],ss={key:0},ns={key:1},ls={key:2},as={key:3},rs={class:"sm:col-span-2 mt-4"},is={class:"text-gray-700",for:"es"},ds=s("span",{class:"text-red-500"},"*",-1),us=["value"],cs={key:0},ps={key:1},ms={key:2},ys={key:3},_s={class:"col-span-2 mt-4"},fs={class:"text-gray-700 mb-2",for:"pt"},gs=s("span",{class:"text-red-500"},"*",-1),bs={class:"mt-6"},hs={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},vs={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Bs={__name:"EditJob",props:{id:{required:!0,type:String}},setup(C){const w=C,h=_e(),x=b(null),{updateJobOffer:$,getJobOffer:z,jobOffer:o,errors:g,loading:_}=we(),{currencies:v,getCurrencies:B}=xe(),{languages:M,getLanguages:N}=Le(),{activityAreas:W,getActivityAreas:I}=$e(),{sizeCompanies:Z,getSizeCompanies:A}=Ve(),{levelStudies:D,getLevelStudies:P}=qe(),{offerTypes:Y,getOfferTypes:E}=Ce(),{contractTypes:G,getContractTypes:K}=Oe(),{workDepartments:H,getWorkDepartments:Q}=Ue(),{workModes:X,getWorkModes:T}=je(),{yearExperiences:ee,getYearExperiences:te}=ze(),{countries:oe,getCountries:se}=Re(),{zones:ne,getZones:le}=Je(),{continents:ae,getContinents:re}=Fe(),{cities:ie,getCities:de}=Se(),V=b([]),U=b([]),O=b([]),q=b([]),k=b([]),L=b(0),R=(t=!0)=>{k.value=ie.value.filter(i=>i.country_id==o.value.country.id),t&&(o.value.city.id="")},J=(t=!0)=>{q.value=oe.value.filter(i=>i.zone_id==o.value.zone.id),t&&(o.value.country.id="",o.value.city.id="",k.value=[])},F=(t=!0)=>{O.value=ne.value.filter(i=>i.continent_id==o.value.continent.id),t&&(o.value.zone.id="",o.value.country.id="",o.value.city.id="",k.value=[],q.value=[])};fe(()=>j(this,null,function*(){yield z(w.id),L.value++;for(const t of o.value.activity_areas)U.value.push(t.id);for(const t of o.value.languages)V.value.push(t.id);yield re(),yield le(),F(!1),yield se(),J(!1),yield de(),R(!1),yield B(),yield te(),yield T(),yield Q(),yield P(),yield A(),yield E(),yield K(),yield I(),yield N(),o.value.company_logo=""}));const ue=()=>j(this,null,function*(){let t=new FormData;t.append("title",o.value.title),t.append("description",o.value.description),t.append("location",o.value.location),t.append("reference",o.value.reference),t.append("company_name",o.value.company_name),t.append("company_email",o.value.company_email),t.append("company_website",o.value.company_website),t.append("company_logo",o.value.company_logo),t.append("min_price",o.value.min_price),t.append("max_price",o.value.max_price),t.append("start_date",o.value.start_date),t.append("user_id",o.value.user.id),t.append("currency_id",o.value.currency.id),t.append("year_experience_id",o.value.year_experience.id),t.append("contract_type_id",o.value.contract_type.id),t.append("work_department_id",o.value.work_department.id),t.append("work_mode_id",o.value.work_mode.id),t.append("size_company_id",o.value.size_company.id),t.append("offer_type_id",o.value.offer_type.id),t.append("level_study_id",o.value.level_study.id),t.append("city_id",o.value.city.id),t.append("zone_id",o.value.zone.id),t.append("continent_id",o.value.continent.id),t.append("country_id",o.value.country.id),t.append("languages",V.value),t.append("activityAreas",U.value),t.append("_method","PUT"),yield $(t,w.id),g.value==""&&h.push({name:"jobs"})}),ce=()=>{o.value.company_logo=x.value.files[0]};function pe(t){return URL.createObjectURL(t)}function me(t){return URL.revokeObjectURL(t)}return(t,i)=>{const ye=ge("Spin");return n(),l("div",Me,[s("div",Ne,[s("h1",We,a(t.$t("edit"))+" Job ",1)]),s("section",Ie,[r(g)!=""?(n(),S(he,{key:0},{default:be(()=>[d(a(r(g)),1)]),_:1})):c("",!0),s("h1",Ze,a(t.$t("edit"))+" Job",1),s("h2",Ae,a(t.$t("good-msg-post"))+" ! ",1),s("form",{onSubmit:i[26]||(i[26]=ve(e=>ue(),["prevent"])),id:"jobOfferform",enctype:"multipart/form-data"},[s("div",De,[s("div",Pe,[s("div",Ye,[s("label",Ee,[d(a(t.$t("title"))+" ",1),Ge]),u(s("input",{required:"","onUpdate:modelValue":i[0]||(i[0]=e=>r(o).title=e),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).title]]),s("span",Ke,a(r(o).title?r(o).title.length:0)+" of 50 Characters",1)]),s("div",He,[Qe,u(s("input",{required:"","onUpdate:modelValue":i[1]||(i[1]=e=>r(o).reference=e),maxlength:"10",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).reference]]),s("span",Xe,a(r(o).reference?r(o).reference.length:0)+" of 10 Characters",1)])]),s("div",Te,[s("div",null,[s("label",et,[d(a(t.$t("continent"))+" ",1),tt]),r(o).continent?u((n(),l("select",{key:0,required:"",onChange:F,"onUpdate:modelValue":i[2]||(i[2]=e=>r(o).continent.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(ae),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",st,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",nt,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",lt,a(e.name_es),1)):(n(),l("span",at,a(e.name_pt),1))],8,ot))),128))],544)),[[p,r(o).continent.id]]):c("",!0)]),s("div",null,[s("label",rt,[d(a(t.$t("zoned"))+" ",1),it]),r(o).zone?u((n(),l("select",{key:0,required:"",onChange:J,"onUpdate:modelValue":i[3]||(i[3]=e=>r(o).zone.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[O.value.length!=0?(n(!0),l(m,{key:0},y(O.value,e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",ut,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",ct,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",pt,a(e.name_es),1)):(n(),l("span",mt,a(e.name_pt),1))],8,dt))),128)):(n(),l("option",yt," Requires "+a(t.$t("continent")),1))],544)),[[p,r(o).zone.id]]):c("",!0)]),s("div",null,[s("label",_t,[d(a(t.$t("country"))+" ",1),ft]),r(o).country?u((n(),l("select",{key:0,required:"",onChange:R,"onUpdate:modelValue":i[4]||(i[4]=e=>r(o).country.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[q.value.length!=0?(n(!0),l(m,{key:0},y(q.value,e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",bt,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",ht,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",vt,a(e.name_es),1)):(n(),l("span",kt,a(e.name_pt),1))],8,gt))),128)):(n(),l("option",wt," Requires "+a(t.$t("zoned")),1))],544)),[[p,r(o).country.id]]):c("",!0)]),s("div",null,[s("label",xt,[d(a(t.$t("city"))+" ",1),$t]),r(o).city?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[5]||(i[5]=e=>r(o).city.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[k.value.length!=0?(n(!0),l(m,{key:0},y(k.value,e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",Ut,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",qt,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",Ct,a(e.name_es),1)):(n(),l("span",zt,a(e.name_pt),1))],8,Vt))),128)):(n(),l("option",Ot," Requires "+a(t.$t("country")),1))],512)),[[p,r(o).city.id]]):c("",!0)])]),s("div",jt,[s("div",Lt,[s("label",Rt,[d(a(t.$t("location"))+" ",1),Jt]),u(s("input",{required:"","onUpdate:modelValue":i[6]||(i[6]=e=>r(o).location=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).location]])]),s("div",Ft,[s("label",St,[d(a(t.$t("start-date"))+" ",1),Bt]),u(s("input",{required:"","onUpdate:modelValue":i[7]||(i[7]=e=>r(o).start_date=e),type:"date",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).start_date]])])]),s("div",Mt,[s("div",null,[s("label",Nt,[d(a(t.$t("company-name"))+" ",1),Wt]),u(s("input",{required:"","onUpdate:modelValue":i[8]||(i[8]=e=>r(o).company_name=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).company_name]])]),s("div",null,[s("label",It,[d(a(t.$t("company-email"))+" ",1),Zt]),u(s("input",{required:"","onUpdate:modelValue":i[9]||(i[9]=e=>r(o).company_email=e),type:"email",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).company_email]])]),s("div",null,[s("label",At,a(t.$t("company-website")),1),u(s("input",{"onUpdate:modelValue":i[10]||(i[10]=e=>r(o).company_website=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).company_website]])]),s("div",null,[s("label",Dt,a(t.$t("company-logo")),1),s("div",Pt,[r(o).company_logo?(n(),l("img",{key:0,src:typeof r(o).company_logo=="string"?r(o).company_logo:pe(r(o).company_logo),onLoad:i[11]||(i[11]=e=>typeof r(o).company_logo=="string"?"":me(r(o).company_logo)),class:"h-16 w-16 rounded-full",alt:r(o).title},null,40,Yt)):c("",!0),s("input",{ref_key:"file",ref:x,onChange:i[12]||(i[12]=e=>ce()),type:"file",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)]),Et])]),s("div",Gt,[s("div",null,[s("label",Kt,[d(a(t.$t("salary"))+" Min ",1),Ht]),u(s("input",{required:"","onUpdate:modelValue":i[13]||(i[13]=e=>r(o).min_price=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).min_price]])]),s("div",null,[s("label",Qt,[d(a(t.$t("salary"))+" Max ",1),Xt]),u(s("input",{required:"","onUpdate:modelValue":i[14]||(i[14]=e=>r(o).max_price=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,r(o).max_price]])]),s("div",null,[s("label",Tt,[d(a(t.$t("currency"))+" ",1),eo]),r(o).currency?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[15]||(i[15]=e=>r(o).currency.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(v),e=>(n(),l("option",{key:e.id,value:e.id},a(e.symbol+" "+e.name),9,to))),128))],512)),[[p,r(o).currency.id]]):c("",!0)])]),s("div",oo,[s("label",so,[d(a(t.$t("language")+" "+t.$tc("of",2)+" "+t.$t("work"))+" ",1),s("span",no,"("+a(t.$t("maintain-crtl"))+")",1),lo]),u(s("select",{required:"",multiple:"","onUpdate:modelValue":i[16]||(i[16]=e=>V.value=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(M),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",ro,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",io,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",uo,a(e.name_es),1)):(n(),l("span",co,a(e.name_pt),1))],8,ao))),128))],512),[[p,V.value]])]),s("div",po,[s("div",null,[s("label",mo,[d(a(t.$t("size-company"))+" ",1),yo]),r(o).size_company?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[17]||(i[17]=e=>r(o).size_company.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(Z),e=>(n(),l("option",{key:e.id,value:e.id},a(e.name_en),9,_o))),128))],512)),[[p,r(o).size_company.id]]):c("",!0)]),s("div",null,[s("label",fo,[d(a(t.$t("level-study"))+" ",1),go]),r(o).level_study?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[18]||(i[18]=e=>r(o).level_study.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(D),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",ho,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",vo,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",ko,a(e.name_es),1)):(n(),l("span",wo,a(e.name_pt),1))],8,bo))),128))],512)),[[p,r(o).level_study.id]]):c("",!0)])]),s("div",xo,[s("label",$o,[d(a(t.$t("activity-area"))+" ",1),s("span",Vo,"("+a(t.$t("maintain-crtl"))+")",1),Uo]),u(s("select",{required:"",multiple:"","onUpdate:modelValue":i[19]||(i[19]=e=>U.value=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(W),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",Co,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",zo,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",Oo,a(e.name_es),1)):(n(),l("span",jo,a(e.name_pt),1))],8,qo))),128))],512),[[p,U.value]])]),s("div",Lo,[s("div",null,[s("label",Ro,[d(a(t.$t("work-dept"))+" ",1),Jo]),r(o).work_department?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[20]||(i[20]=e=>r(o).work_department.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(H),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",So,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",Bo,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",Mo,a(e.name_es),1)):(n(),l("span",No,a(e.name_pt),1))],8,Fo))),128))],512)),[[p,r(o).work_department.id]]):c("",!0)]),s("div",null,[s("label",Wo,[d(a(t.$t("work-mode"))+" ",1),Io]),r(o).work_mode?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[21]||(i[21]=e=>r(o).work_mode.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(X),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",Ao,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",Do,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",Po,a(e.name_es),1)):(n(),l("span",Yo,a(e.name_pt),1))],8,Zo))),128))],512)),[[p,r(o).work_mode.id]]):c("",!0)]),s("div",null,[s("label",Eo,[d(a(t.$t("offer-type"))+" ",1),Go]),r(o).offer_type?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[22]||(i[22]=e=>r(o).offer_type.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(Y),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",Ho,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",Qo,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",Xo,a(e.name_es),1)):(n(),l("span",To,a(e.name_pt),1))],8,Ko))),128))],512)),[[p,r(o).offer_type.id]]):c("",!0)]),s("div",null,[s("label",es,[d(a(t.$t("contract-type"))+" ",1),ts]),r(o).contract_type?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[23]||(i[23]=e=>r(o).contract_type.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(G),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",ss,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",ns,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",ls,a(e.name_es),1)):(n(),l("span",as,a(e.name_pt),1))],8,os))),128))],512)),[[p,r(o).contract_type.id]]):c("",!0)]),s("div",rs,[s("label",is,[d(a(t.$t("y-experience"))+" ",1),ds]),r(o).year_experience?u((n(),l("select",{key:0,required:"","onUpdate:modelValue":i[24]||(i[24]=e=>r(o).year_experience.id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),l(m,null,y(r(ee),e=>(n(),l("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(n(),l("span",cs,a(e.name_en),1)):t.$i18n.locale=="fr"?(n(),l("span",ps,a(e.name_fr),1)):t.$i18n.locale=="es"?(n(),l("span",ms,a(e.name_es),1)):(n(),l("span",ys,a(e.name_pt),1))],8,us))),128))],512)),[[p,r(o).year_experience.id]]):c("",!0)])]),s("div",_s,[s("label",fs,[d(a(t.$t("description"))+" ",1),gs]),(n(),S(Be,{key:L.value,modelValue:r(o).description,"onUpdate:modelValue":i[25]||(i[25]=e=>r(o).description=e)},null,8,["modelValue"]))])]),s("div",bs,[r(_)==0?(n(),l("button",hs,a(t.$t("save")),1)):c("",!0),r(_)==1?(n(),l("button",vs,[ke(ye,{size:"small"})])):c("",!0)])],32)])])}}};export{Bs as default};
