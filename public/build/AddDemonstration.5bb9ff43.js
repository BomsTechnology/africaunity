import{r as g,o as se,a as ne,c as i,d as r,e as o,t as n,g as u,k as ie,w as re,j as d,m as h,l as le,i as a,K as m,J as c,F as p,x as _,f as x,H as ae,b as V}from"./app.1097d858.js";import{u as de}from"./zoneServices.a52bcaa1.js";import{u as ue}from"./cityServices.9e4adf68.js";import{u as ce}from"./countryServices.39eefecd.js";import{u as pe}from"./ministryServices.a46933d7.js";import{u as _e}from"./currencyServices.62941b04.js";import{u as me}from"./continentServices.eb5fdb99.js";import{u as ye}from"./activityAreaServices.3a5ba1f3.js";import{u as fe}from"./demonstrationServices.557c43ca.js";import{u as be}from"./demonstrationModeServices.8d6f5cde.js";import{u as ge}from"./demonstrationTypeServices.90cb8d0d.js";import{u as he}from"./demonstrationNicheServices.a72112c5.js";import{_ as ve}from"./RichText.4d506fcb.js";const ke={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},we={class:"w-full space-y-4 py-5 text-center"},$e={class:"text-4xl font-bold capitalize text-primary-blue"},xe={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},Ve={class:"text-xl font-semibold"},Ue={class:"text-md font-light text-gray-700"},qe={class:"mt-4"},Ce={class:"col-span-2"},De={class:"text-gray-700"},ze=o("span",{class:"text-red-500"},"*",-1),Re={class:"text-xs font-light text-gray-400"},Se={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Fe={class:"text-gray-700",for:"pt"},Le=o("span",{class:"text-red-500"},"*",-1),je=["value"],Be={key:0},Me={key:1},Oe={key:2},Ee={key:3},Ne={class:"text-gray-700",for:"pt"},Ze=o("span",{class:"text-red-500"},"*",-1),Ie=["value"],Je={key:0},Ae={key:1},Ge={key:2},He={key:3},Ke={class:"text-gray-700",for:"es"},Pe=o("span",{class:"text-red-500"},"*",-1),Qe=["value"],Te={key:0},We={key:1},Xe={key:2},Ye={key:3},et={class:"text-gray-700",for:"es"},tt=o("span",{class:"text-red-500"},"*",-1),ot=["value"],st={key:0},nt={key:1},it={key:2},rt={key:3},lt={key:1,value:"null"},at={class:"text-gray-700",for:"es"},dt=o("span",{class:"text-red-500"},"*",-1),ut=["value"],ct={key:0},pt={key:1},_t={key:2},mt={key:3},yt={key:1,value:"null"},ft={class:"d text-gray-700",for:"es"},bt=o("span",{class:"text-red-500"},"*",-1),gt=["value"],ht={key:0},vt={key:1},kt={key:2},wt={key:3},$t={key:1,value:"null"},xt={class:""},Vt={class:"text-gray-700",for:"es"},Ut=["value"],qt={key:0},Ct={key:1},Dt={key:2},zt={key:3},Rt={class:""},St={class:"text-gray-700",for:"pt"},Ft=["value"],Lt={key:0},jt={key:1},Bt={key:2},Mt={key:3},Ot={class:"sm:col-span-2"},Et={class:"text-gray-700",for:"pt"},Nt=o("span",{class:"text-red-500"},"*",-1),Zt={class:"sm:col-span-2"},It={class:"text-gray-700"},Jt=o("span",{class:"text-red-500"},"*",-1),At=o("option",{value:"free"},"Gratuit",-1),Gt=o("option",{value:"paying"},"Payant",-1),Ht=[At,Gt],Kt={class:"text-gray-700"},Pt={class:"text-gray-700",for:"es"},Qt=["value"],Tt={class:"text-gray-700"},Wt=o("span",{class:"text-red-500"},"*",-1),Xt={class:"text-gray-700"},Yt=o("span",{class:"text-red-500"},"*",-1),eo={class:"text-gray-700"},to=o("span",{class:"text-red-500"},"*",-1),oo=["value"],so={key:0},no={key:1},io={key:2},ro={key:3},lo={class:"text-gray-700"},ao=o("span",{class:"text-red-500"},"*",-1),uo={class:"text-gray-700"},co=o("span",{class:"text-red-500"},"*",-1),po={class:"text-gray-700"},_o=o("span",{class:"text-red-500"},"*",-1),mo={class:"sm:col-span-2 mt-4"},yo={class:"text-gray-700",for:"fr"},fo={class:"flex items-center space-x-4 py-4"},bo=["src","alt"],go={class:"sm:col-span-2 mt-4"},ho={class:"text-gray-700",for:"pt"},vo=o("span",{class:"text-red-500"},"*",-1),ko={class:"mt-6"},wo={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},$o={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Oo={__name:"AddDemonstration",setup(xo){const w=g(null),U=ae(),y=g([]),v=g([]),f=g([]),{zones:q,getZones:C}=de(),{cities:D,getCities:z}=ue(),{countries:R,getCountries:S}=ce(),{currencies:F,getCurrencies:L}=_e(),{continents:j,getContinents:B}=me(),{ministries:M,getMinistries:O}=pe(),{activityAreas:E,getActivityAreas:N}=ye(),{errors:k,loading:$,createDemonstration:Z}=fe(),{demonstrationTypes:I,getDemonstrationTypes:J}=ge(),{demonstrationModes:A,getDemonstrationModes:G}=be(),{demonstrationNiches:H,getDemonstrationNiches:K}=he(),b=localStorage.user?JSON.parse(localStorage.user):"";se(async()=>{await J(),await G(),await K(),await N(),await O(),await L(),await B(),await C(),await S(),await z()});const s=ne({title:"",user_id:b.id,description:"",price:"0",image:"",hourly:"",enter_type:"",place_link:"",start_date:"",end_date:"",email:b.email,phone:"",demonstration_type_id:"",demonstration_mode_id:"",demonstration_niche_id:"",currency_id:"",city_id:"",zone_id:"",continent_id:"",country_id:"",ministry_id:"",activity_area_id:""}),P=async()=>{let t=new FormData;t.append("title",s.title),t.append("description",s.description),t.append("price",s.price),t.append("image",s.image),t.append("email",s.email),t.append("hourly",s.hourly),t.append("start_date",s.start_date),t.append("end_date",s.end_date),t.append("phone",s.phone),t.append("enter_type",s.enter_type),t.append("user_id",s.user_id),t.append("currency_id",s.currency_id),t.append("place_link",s.place_link),t.append("demonstration_type_id",s.demonstration_type_id),t.append("demonstration_mode_id",s.demonstration_mode_id),t.append("demonstration_niche_id",s.demonstration_niche_id),t.append("city_id",s.city_id),t.append("zone_id",s.zone_id),t.append("continent_id",s.continent_id),t.append("country_id",s.country_id),t.append("ministry_id",s.ministry_id),t.append("activity_area_id",s.activity_area_id),await Z(t),k.value==""&&U.push({name:"compte",params:{slug:b.slug,id:b.id}})},Q=()=>{y.value=D.value.filter(t=>t.country_id==s.country_id),s.city_id=""},T=()=>{f.value=R.value.filter(t=>t.zone_id==s.zone_id),s.country_id="",s.city_id="",y.value=[]},W=()=>{v.value=q.value.filter(t=>t.continent_id==s.continent_id),s.zone_id="",s.country_id="",s.city_id="",y.value=[],f.value=[]},X=async()=>{s.image=w.value.files[0]};function Y(t){return URL.createObjectURL(t)}function ee(t){return URL.revokeObjectURL(t)}return(t,l)=>{const te=V("Error"),oe=V("Spin");return i(),r("div",ke,[o("div",we,[o("h1",$e,n(t.$tc("add",1))+" "+n(t.$tc("events",1)),1)]),o("section",xe,[u(k)!=""?(i(),ie(te,{key:0},{default:re(()=>[d(n(u(k)),1)]),_:1})):h("",!0),o("h1",Ve,n(t.$tc("add",1))+" "+n(t.$tc("events",1)),1),o("h2",Ue,n(t.$t("good-msg-post"))+" ! ",1),o("form",{onSubmit:l[25]||(l[25]=le(e=>P(),["prevent"])),id:"demonstrationform",enctype:"multipart/form-data"},[o("div",qe,[o("div",Ce,[o("label",De,[d(n(t.$t("title"))+" ",1),ze]),a(o("input",{required:"","onUpdate:modelValue":l[0]||(l[0]=e=>s.title=e),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[m,s.title]]),o("span",Re,n(s.title?s.title.length:0)+" of 50 Characters",1)]),o("div",Se,[o("div",null,[o("label",Fe,[d(n(t.$t("event-type"))+" ",1),Le]),a(o("select",{required:"","onUpdate:modelValue":l[1]||(l[1]=e=>s.demonstration_type_id=e),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),r(p,null,_(u(I),e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",Be,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",Me,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",Oe,n(e.name_es),1)):(i(),r("span",Ee,n(e.name_pt),1))],8,je))),128))],512),[[c,s.demonstration_type_id]])]),o("div",null,[o("label",Ne,[d(n(t.$t("event-mode"))+" ",1),Ze]),a(o("select",{required:"","onUpdate:modelValue":l[2]||(l[2]=e=>s.demonstration_mode_id=e),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),r(p,null,_(u(A),e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",Je,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",Ae,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",Ge,n(e.name_es),1)):(i(),r("span",He,n(e.name_pt),1))],8,Ie))),128))],512),[[c,s.demonstration_mode_id]])]),o("div",null,[o("label",Ke,[d(n(t.$t("continent"))+" ",1),Pe]),a(o("select",{required:"","onUpdate:modelValue":l[3]||(l[3]=e=>s.continent_id=e),onChange:l[4]||(l[4]=e=>W()),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),r(p,null,_(u(j),e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",Te,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",We,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",Xe,n(e.name_es),1)):(i(),r("span",Ye,n(e.name_pt),1))],8,Qe))),128))],544),[[c,s.continent_id]])]),o("div",null,[o("label",et,[d(n(t.$t("zoned"))+" ",1),tt]),a(o("select",{required:"","onUpdate:modelValue":l[5]||(l[5]=e=>s.zone_id=e),onChange:l[6]||(l[6]=e=>T()),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[v.value.length!=0?(i(!0),r(p,{key:0},_(v.value,e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",st,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",nt,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",it,n(e.name_es),1)):(i(),r("span",rt,n(e.name_pt),1))],8,ot))),128)):(i(),r("option",lt," Requires "+n(t.$t("continent")),1))],544),[[c,s.zone_id]])]),o("div",null,[o("label",at,[d(n(t.$t("country"))+" ",1),dt]),a(o("select",{required:"",onChange:l[7]||(l[7]=e=>Q()),"onUpdate:modelValue":l[8]||(l[8]=e=>s.country_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[f.value.length!=0?(i(!0),r(p,{key:0},_(f.value,e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",ct,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",pt,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",_t,n(e.name_es),1)):(i(),r("span",mt,n(e.name_pt),1))],8,ut))),128)):(i(),r("option",yt," Requires "+n(t.$t("zoned")),1))],544),[[c,s.country_id]])]),o("div",null,[o("label",ft,[d(n(t.$t("city"))+" ",1),bt]),a(o("select",{required:"","onUpdate:modelValue":l[9]||(l[9]=e=>s.city_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[y.value.length!=0?(i(!0),r(p,{key:0},_(y.value,e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",ht,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",vt,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",kt,n(e.name_es),1)):(i(),r("span",wt,n(e.name_pt),1))],8,gt))),128)):(i(),r("option",$t," Requires "+n(t.$t("country")),1))],512),[[c,s.city_id]])]),o("div",xt,[o("label",Vt,n(t.$t("activity-area")),1),a(o("select",{"onUpdate:modelValue":l[10]||(l[10]=e=>s.activity_area_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),r(p,null,_(u(E),e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",qt,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",Ct,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",Dt,n(e.name_es),1)):(i(),r("span",zt,n(e.name_pt),1))],8,Ut))),128))],512),[[c,s.activity_area_id]])]),o("div",Rt,[o("label",St,n(t.$t("ministry")),1),a(o("select",{"onUpdate:modelValue":l[11]||(l[11]=e=>s.ministry_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),r(p,null,_(u(M),e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",Lt,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",jt,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",Bt,n(e.name_es),1)):(i(),r("span",Mt,n(e.name_pt),1))],8,Ft))),128))],512),[[c,s.ministry_id]])]),o("div",Ot,[o("label",Et,[d(n(t.$t("location-link"))+" ",1),Nt]),a(o("input",{required:"","onUpdate:modelValue":l[12]||(l[12]=e=>s.place_link=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[m,s.place_link]])]),o("div",Zt,[o("label",It,[d(n(t.$t("enter-type")),1),Jt]),a(o("select",{required:"","onUpdate:modelValue":l[13]||(l[13]=e=>s.enter_type=e),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},Ht,512),[[c,s.enter_type]])]),o("div",null,[o("label",Kt,n(t.$t("price")),1),a(o("input",{"onUpdate:modelValue":l[14]||(l[14]=e=>s.price=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[m,s.price]])]),o("div",null,[o("label",Pt,n(t.$t("currency")),1),a(o("select",{"onUpdate:modelValue":l[15]||(l[15]=e=>s.currency_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),r(p,null,_(u(F),e=>(i(),r("option",{key:e.id,value:e.id},n(e.symbol+" "+e.name),9,Qt))),128))],512),[[c,s.currency_id]])]),o("div",null,[o("label",Tt,[d(n(t.$t("start-date"))+" ",1),Wt]),a(o("input",{"onUpdate:modelValue":l[16]||(l[16]=e=>s.start_date=e),type:"date",required:"",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[m,s.start_date]])]),o("div",null,[o("label",Xt,[d(n(t.$t("end-date"))+" ",1),Yt]),a(o("input",{"onUpdate:modelValue":l[17]||(l[17]=e=>s.end_date=e),type:"date",required:"",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[m,s.end_date]])]),o("div",null,[o("label",eo,[d(n(t.$t("niche"))+" ",1),to]),a(o("select",{required:"","onUpdate:modelValue":l[18]||(l[18]=e=>s.demonstration_niche_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),r(p,null,_(u(H),e=>(i(),r("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(i(),r("span",so,n(e.name_en),1)):t.$i18n.locale=="fr"?(i(),r("span",no,n(e.name_fr),1)):t.$i18n.locale=="es"?(i(),r("span",io,n(e.name_es),1)):(i(),r("span",ro,n(e.name_pt),1))],8,oo))),128))],512),[[c,s.demonstration_niche_id]])]),o("div",null,[o("label",lo,[d(n(t.$t("hour"))+" ",1),ao]),a(o("input",{"onUpdate:modelValue":l[19]||(l[19]=e=>s.hourly=e),type:"time",required:"",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[m,s.hourly]])]),o("div",null,[o("label",uo,[d(n(t.$t("contact-phone"))+" ",1),co]),a(o("input",{required:"","onUpdate:modelValue":l[20]||(l[20]=e=>s.phone=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[m,s.phone]])]),o("div",null,[o("label",po,[d(n(t.$t("contact-email"))+" ",1),_o]),a(o("input",{required:"","onUpdate:modelValue":l[21]||(l[21]=e=>s.email=e),type:"email",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[m,s.email]])])]),o("div",mo,[o("label",yo,n(t.$t("thumbnails")),1),o("div",fo,[s.image?(i(),r("img",{key:0,src:typeof s.image=="string"?s.image:Y(s.image),onLoad:l[22]||(l[22]=e=>typeof s.image=="string"?"":ee(s.image)),class:"h-16 w-16 rounded-full",alt:s.title},null,40,bo)):h("",!0),o("input",{ref_key:"file",ref:w,onChange:l[23]||(l[23]=e=>X()),accept:"image/*",type:"file",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])]),o("div",go,[o("label",ho,[d(n(t.$t("description"))+" ",1),vo]),x(ve,{modelValue:s.description,"onUpdate:modelValue":l[24]||(l[24]=e=>s.description=e)},null,8,["modelValue"])])]),o("div",ko,[u($)==0?(i(),r("button",wo,n(t.$t("save")),1)):h("",!0),u($)==1?(i(),r("button",$o,[x(oe,{size:"small"})])):h("",!0)])],32)])])}}};export{Oo as default};