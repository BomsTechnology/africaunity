import{u as X,r as _,a as Y,o as ee,c as n,d as i,e as o,t as s,j as r,O as x,l as g,g as p,k as R,w as te,P as se,m,i as u,K as j,J as f,F as h,x as b,f as oe,H as ne,b as ie}from"./app.1a4e1017.js";import{u as ae}from"./postServices.23f2812d.js";import{u as le}from"./continentServices.f9c47ce6.js";import{u as re}from"./zoneServices.b49803b9.js";import{u as de}from"./countryServices.fd8a20e9.js";import{u as ue}from"./ministryServices.f9c2b5ee.js";import{u as ce}from"./cityServices.122c5699.js";import{_ as pe}from"./RichText.07ed44ec.js";const me={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},ye={class:"w-full space-y-4 py-5 text-center"},_e={class:"text-4xl font-bold capitalize text-primary-blue"},ge={key:0},fe={key:1},he={class:"text-md text-gray-700"},be={key:0},ve={key:1},ke={class:"flex flex-col items-center justify-center lg:flex-row lg:space-x-3"},$e={class:"font-semibold"},xe={class:"mt-3 inline-flex w-full justify-center space-x-3 text-xs lg:mt-0 lg:text-sm"},we={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},Ce={class:"text-xl font-semibold"},Ve={key:0},qe={key:1},Ue={class:"text-md font-light text-gray-700"},Se={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},ze={class:"col-span-2"},Re={class:"text-gray-700"},je=o("span",{class:"text-red-500"},"*",-1),Le={class:"text-xs font-light text-gray-400"},Fe={class:"col-span-2 lg:col-span-1"},Me={class:"text-gray-700",for:"es"},Pe=o("span",{class:"text-red-500"},"*",-1),Ne=["value"],Oe={key:0},Be={key:1},De={key:2},Ie={key:3},Ze={class:"col-span-2 lg:col-span-1"},Ae={class:"text-gray-700",for:"pt"},Ee=o("span",{class:"text-red-500"},"*",-1),Je=["value"],Te={key:0},He={key:1},Ke={key:2},Ge={key:3},Qe={key:1,value:"null"},We={class:"col-span-2 lg:col-span-1"},Xe={class:"text-gray-700",for:"es"},Ye=o("span",{class:"text-red-500"},"*",-1),et=["value"],tt={key:0},st={key:1},ot={key:2},nt={key:3},it={key:1,value:"null"},at={class:"col-span-2 lg:col-span-1"},lt={class:"d text-gray-700",for:"es"},rt=["value"],dt={key:0},ut={key:1},ct={key:2},pt={key:3},mt={key:1,value:"null"},yt={class:"col-span-2"},_t={class:"text-gray-700",for:"pt"},gt=o("span",{class:"text-red-500"},"*",-1),ft=["value"],ht={key:0},bt={key:1},vt={key:2},kt={key:3},$t={key:0,class:"col-span-2"},xt={class:"text-gray-700",for:"fr"},wt=o("span",{class:"text-red-500"},"*",-1),Ct={class:"flex items-center space-x-4 py-4"},Vt=["src","alt"],qt={class:"col-span-2"},Ut={class:"text-gray-700",for:"pt"},St=o("span",{class:"text-red-500"},"*",-1),zt={key:1},Rt={class:"text-xs font-light text-gray-400"},jt={key:2,class:"text-xs font-light italic"},Lt={class:"ml-1 text-primary-blue"},Ft={href:"/add/propau"},Mt={class:"mt-20"},Pt={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Nt={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Tt={__name:"AddPost",props:{type:{type:String}},setup(c){const d=c,w=ne(),{locale:C}=X();_([]);const L=["article","propau"],y=localStorage.user?JSON.parse(localStorage.user):"",{continents:F,getContinents:M}=le(),{zones:P,getZones:N}=re(),{countries:O,getCountries:B}=de(),{ministries:D,getMinistries:I}=ue(),U=_(null),V=_([]),v=_([]),k=_([]),{cities:Z,getCities:A}=ce(),a=Y({title:"",type:d.type,user_id:y.id,language:C.value,content:"",image:"",continent_id:"",city_id:"",zone_id:"",country_id:"",ministries:[]});ee(async()=>{L.includes(d.type)||w.push({name:"home"}),await M(),await N(),await B(),await A(),S(!1),await I()});const S=(e=!0)=>{k.value=Z.value.filter(l=>l.country_id==a.country_id),e&&(a.city_id="")},E=()=>{v.value=O.value.filter(e=>e.zone_id==a.zone_id),a.country_id=""},J=(e=!0)=>{V.value=P.value.filter(l=>l.continent_id==a.continent_id),e&&(a.zone_id="",a.country_id="",a.city_id="",k.value=[],v.value=[])},{createPost:T,errors:q,loading:z}=ae(),H=async()=>{let e=new FormData;e.append("image",a.image),e.append("title",a.title),e.append("type",a.type),e.append("user_id",a.user_id),e.append("language",localStorage.lang),e.append("content",a.content),e.append("continent_id",a.continent_id),e.append("zone_id",a.zone_id),e.append("city_id",a.city_id),e.append("country_id",a.country_id),e.append("ministries",a.ministries),await T(e),q.value==""&&(d.type=="article"?w.push({name:"compte",params:{slug:y.slug,id:y.id},query:{redirect:"article"}}):w.push({name:"compte",params:{slug:y.slug,id:y.id},query:{redirect:"propau"}}))},K=()=>{a.image=U.value.files[0]},$=e=>{C.value=e,localStorage.lang=C.value};function G(e){return URL.createObjectURL(e)}function Q(e){return URL.revokeObjectURL(e)}return(e,l)=>{const W=ie("Spin");return n(),i("div",me,[o("div",ye,[o("h1",_e,[d.type=="article"?(n(),i("span",ge,s(e.$t("add")),1)):(n(),i("span",fe,s(e.$tc("add",2)),1)),r(" "+s(d.type),1)]),o("h2",he,[r(s(e.$t("your"))+" "+s(c.type)+" ",1),d.type=="article"?(n(),i("span",be,s(e.$t("add-desc-1")),1)):(n(),i("span",ve,s(e.$tc("add-desc-1",2)),1))]),o("div",ke,[o("h1",$e,s(e.$t("select-lang"))+" :",1),o("div",xe,[o("button",{class:x([e.$i18n.locale!="fr"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:l[0]||(l[0]=g(t=>$("fr"),["prevent"]))},s(e.$t("fr")),3),o("button",{class:x([e.$i18n.locale!="en"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:l[1]||(l[1]=g(t=>$("en"),["prevent"]))},s(e.$t("en")),3),o("button",{class:x([e.$i18n.locale!="es"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:l[2]||(l[2]=g(t=>$("es"),["prevent"]))},s(e.$t("es")),3),o("button",{class:x([e.$i18n.locale!="pt"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:l[3]||(l[3]=g(t=>$("pt"),["prevent"]))},s(e.$t("pt")),3)])])]),o("section",we,[p(q)!=""?(n(),R(se,{key:0},{default:te(()=>[r(s(p(q)),1)]),_:1})):m("",!0),o("h1",Ce,[d.type=="article"?(n(),i("span",Ve,s(e.$t("add")),1)):(n(),i("span",qe,s(e.$tc("add",2)),1)),r(" "+s(c.type),1)]),o("h2",Ue,s(e.$t("good-msg-post"))+" ! ",1),o("form",{onSubmit:l[15]||(l[15]=g(t=>H(),["prevent"])),id:"postform",enctype:"multipart/form-data"},[o("div",Se,[o("div",ze,[o("label",Re,[r(s(e.$t("title"))+" ",1),je]),u(o("input",{required:"","onUpdate:modelValue":l[4]||(l[4]=t=>a.title=t),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[j,a.title]]),o("span",Le,s(a.title.length)+" of 50 Characters",1)]),o("div",Fe,[o("label",Me,[r(s(e.$t("continent"))+" ",1),Pe]),u(o("select",{required:"","onUpdate:modelValue":l[5]||(l[5]=t=>a.continent_id=t),onChange:J,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),i(h,null,b(p(F),t=>(n(),i("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(n(),i("span",Oe,s(t.name_en),1)):e.$i18n.locale=="fr"?(n(),i("span",Be,s(t.name_fr),1)):e.$i18n.locale=="es"?(n(),i("span",De,s(t.name_es),1)):(n(),i("span",Ie,s(t.name_pt),1))],8,Ne))),128))],544),[[f,a.continent_id]])]),o("div",Ze,[o("label",Ae,[r(s(e.$t("zoned")),1),Ee]),u(o("select",{required:"",onChange:E,"onUpdate:modelValue":l[6]||(l[6]=t=>a.zone_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[V.value.length!=0?(n(!0),i(h,{key:0},b(V.value,t=>(n(),i("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(n(),i("span",Te,s(t.name_en),1)):e.$i18n.locale=="fr"?(n(),i("span",He,s(t.name_fr),1)):e.$i18n.locale=="es"?(n(),i("span",Ke,s(t.name_es),1)):(n(),i("span",Ge,s(t.name_pt),1))],8,Je))),128)):(n(),i("option",Qe," Requires "+s(e.$t("continent")),1))],544),[[f,a.zone_id]])]),o("div",We,[o("label",Xe,[r(s(e.$t("country")),1),Ye]),u(o("select",{required:"",onChange:l[7]||(l[7]=t=>S()),"onUpdate:modelValue":l[8]||(l[8]=t=>a.country_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[v.value.length!=0?(n(!0),i(h,{key:0},b(v.value,t=>(n(),i("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(n(),i("span",tt,s(t.name_en),1)):e.$i18n.locale=="fr"?(n(),i("span",st,s(t.name_fr),1)):e.$i18n.locale=="es"?(n(),i("span",ot,s(t.name_es),1)):(n(),i("span",nt,s(t.name_pt),1))],8,et))),128)):(n(),i("option",it," Requires "+s(e.$t("zoned")),1))],544),[[f,a.country_id]])]),o("div",at,[o("label",lt,s(e.$t("city")),1),u(o("select",{required:"","onUpdate:modelValue":l[9]||(l[9]=t=>a.city_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[k.value.length!=0?(n(!0),i(h,{key:0},b(k.value,t=>(n(),i("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(n(),i("span",dt,s(t.name_en),1)):e.$i18n.locale=="fr"?(n(),i("span",ut,s(t.name_fr),1)):e.$i18n.locale=="es"?(n(),i("span",ct,s(t.name_es),1)):(n(),i("span",pt,s(t.name_pt),1))],8,rt))),128)):(n(),i("option",mt," Requires "+s(e.$t("country")),1))],512),[[f,a.city_id]])]),o("div",yt,[o("label",_t,[r(s(e.$t("ministry")),1),gt]),u(o("select",{required:"",multiple:"","onUpdate:modelValue":l[10]||(l[10]=t=>a.ministries=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),i(h,null,b(p(D),t=>(n(),i("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(n(),i("span",ht,s(t.name_en),1)):e.$i18n.locale=="fr"?(n(),i("span",bt,s(t.name_fr),1)):e.$i18n.locale=="es"?(n(),i("span",vt,s(t.name_es),1)):(n(),i("span",kt,s(t.name_pt),1))],8,ft))),128))],512),[[f,a.ministries]])]),c.type=="article"?(n(),i("div",$t,[o("label",xt,[r(s(e.$t("thumbnails"))+" ",1),wt]),o("div",Ct,[a.image?(n(),i("img",{key:0,src:typeof a.image=="string"?a.image:G(a.image),onLoad:l[11]||(l[11]=t=>typeof a.image=="string"?"":Q(a.image)),class:"h-16 w-16 rounded-full",alt:a.title},null,40,Vt)):m("",!0),o("input",{required:"",ref_key:"file",ref:U,onChange:l[12]||(l[12]=t=>K()),accept:"image/*",type:"file",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])])):m("",!0),o("div",qt,[o("label",Ut,[r(s(e.$t("content"))+" ",1),St]),c.type=="article"?(n(),R(pe,{key:0,modelValue:a.content,"onUpdate:modelValue":l[13]||(l[13]=t=>a.content=t)},null,8,["modelValue"])):(n(),i("div",zt,[u(o("textarea",{required:"","onUpdate:modelValue":l[14]||(l[14]=t=>a.content=t),maxlength:"1000",class:"mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`
                            `,512),[[j,a.content]]),o("span",Rt,s(a.content.length)+" of 1000 Characters",1)])),c.type=="article"?(n(),i("span",jt,[o("span",null,s(e.$t("instead-add-propau")),1),o("span",Lt,[o("a",Ft,s(e.$tc("add",2))+" PropAU",1)])])):m("",!0)])]),o("div",Mt,[p(z)==0?(n(),i("button",Pt,s(e.$t("save")),1)):m("",!0),p(z)==1?(n(),i("button",Nt,[oe(W,{size:"small"})])):m("",!0)])],32)])])}}};export{Tt as default};