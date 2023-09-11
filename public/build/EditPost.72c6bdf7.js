import{r as y,u as te,o as se,c as l,d as a,e as n,t as o,j as d,O as w,l as _,g as r,k as j,w as oe,P as ne,m as u,i as c,K as F,J as b,F as v,x as h,f as le,H as ae,b as ie}from"./app.1a4e1017.js";import{u as re}from"./postServices.23f2812d.js";import{u as de}from"./continentServices.f9c47ce6.js";import{u as ue}from"./zoneServices.b49803b9.js";import{u as ce}from"./countryServices.fd8a20e9.js";import{u as pe}from"./ministryServices.f9c2b5ee.js";import{u as me}from"./cityServices.122c5699.js";import{_ as ye}from"./RichText.07ed44ec.js";const fe={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},ge={class:"w-full space-y-4 py-5 text-center"},_e={class:"text-4xl font-bold capitalize text-primary-blue"},be={class:"text-md text-gray-700"},ve={key:0},he={key:1},ke={class:"flex flex-col items-center justify-center lg:flex-row lg:space-x-3"},xe={class:"font-semibold"},$e={class:"mt-3 flex space-x-3 text-xs lg:mt-0 lg:text-sm"},we={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},Ce={class:"text-xl font-semibold"},qe={class:"text-md font-light text-gray-700"},Ve={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Ue={class:"col-span-2"},Se={class:"text-gray-700"},ze=n("span",{class:"text-red-500"},"*",-1),Re={class:"text-xs font-light text-gray-400"},Le={class:"col-span-2 lg:col-span-1"},Me={class:"text-gray-700",for:"es"},Pe=n("span",{class:"text-red-500"},"*",-1),je=["value"],Fe={key:0},Ne={key:1},Oe={key:2},Be={key:3},De={class:"col-span-2 lg:col-span-1"},Ee={class:"text-gray-700",for:"pt"},Ie=n("span",{class:"text-red-500"},"*",-1),Te=["value"],Ze={key:0},Je={key:1},He={key:2},Ke={key:3},Ae={key:1,value:"null"},Ge={class:"col-span-2 lg:col-span-1"},Qe={class:"text-gray-700",for:"es"},We=n("span",{class:"text-red-500"},"*",-1),Xe=["value"],Ye={key:0},et={key:1},tt={key:2},st={key:3},ot={key:1,value:"null"},nt={class:"col-span-2 lg:col-span-1"},lt={class:"d text-gray-700",for:"es"},at=["value"],it={key:0},rt={key:1},dt={key:2},ut={key:3},ct={key:1,value:"null"},pt={class:"col-span-2"},mt={class:"text-gray-700",for:"pt"},yt=n("span",{class:"text-red-500"},"*",-1),ft=["value"],gt={key:0},_t={key:1},bt={key:2},vt={key:3},ht={key:0,class:"col-span-2"},kt={class:"text-gray-700",for:"fr"},xt=n("span",{class:"text-red-500"},"*",-1),$t={class:"flex items-center space-x-4 py-4"},wt=["src","alt"],Ct={class:"col-span-2"},qt={class:"text-gray-700",for:"pt"},Vt=n("span",{class:"text-red-500"},"*",-1),Ut={key:1},St={key:1,class:"text-xs font-light text-gray-400"},zt={class:"mt-20"},Rt={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Lt={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Et={__name:"EditPost",props:{type:{required:!0,type:String},id:{required:!0,type:String}},setup(p){const f=p,C=ae(),q=y(null);let{locale:V}=te();const N=["article","propau"],m=localStorage.user?JSON.parse(localStorage.user):"",{updatePost:O,getPost:B,post:s,errors:U,loading:z}=re(),{continents:D,getContinents:E}=de(),{zones:I,getZones:T}=ue(),{countries:Z,getCountries:J}=ce(),{ministries:H,getMinistries:K}=pe(),{cities:A,getCities:G}=me(),k=y([]),S=y([]),x=y([]),g=y([]),R=y(0);se(async()=>{await B(f.id),R.value++,N.includes(f.type)||C.push({name:"home"});for(const e of s.value.ministries)k.value.push(e.id);V.value=s.value.language,await E(),await T(),P(!1),await J(),M(!1),await G(),L(!1),await K()});const Q=async()=>{let e=new FormData;e.append("image",s.value.image),e.append("title",s.value.title),e.append("type",s.value.type),e.append("user_id",s.value.user_id),e.append("language",s.value.language),e.append("content",s.value.content),e.append("continent_id",s.value.continent_id),e.append("zone_id",s.value.zone_id),e.append("country_id",s.value.country_id),e.append("city_id",s.city_id),e.append("ministries",k.value),e.append("_method","PUT"),await O(e,f.id),U.value==""&&(f.type=="article"?C.push({name:"compte",params:{name:m.firstname,slug:m.slug,id:m.id},query:{redirect:"article"}}):C.push({name:"compte",params:{name:m.firstname,slug:m.slug,id:m.id},query:{redirect:"propau"}}))},L=(e=!0)=>{g.value=A.value.filter(i=>i.country_id==s.value.country_id),e&&(s.value.city_id="")},M=(e=!0)=>{x.value=Z.value.filter(i=>i.zone_id==s.value.zone_id),e&&(s.value.country.id="",s.value.country_id="",g.value=[])},P=(e=!0)=>{S.value=I.value.filter(i=>i.continent_id==s.value.continent_id),e&&(s.value.zone_id="",s.value.country_id="",s.value.city_id="",g.value=[],x.value=[])},W=async()=>{console.log(q.value.files[0]),s.value.image=q.value.files[0]},$=e=>{s.value.language=e,V.value=e,localStorage.lang=V.value};function X(e){return URL.createObjectURL(e)}function Y(e){return URL.revokeObjectURL(e)}return(e,i)=>{const ee=ie("Spin");return l(),a("div",fe,[n("div",ge,[n("h1",_e,o(e.$t("edit"))+" "+o(p.type),1),n("h2",be,[d(o(e.$t("your"))+" "+o(p.type)+" ",1),f.type=="article"?(l(),a("span",ve,o(e.$t("add-desc-1")),1)):(l(),a("span",he,o(e.$tc("add-desc-1",2)),1))]),n("div",ke,[n("h1",xe,o(e.$t("select-lang"))+" :",1),n("div",$e,[n("button",{class:w([e.$i18n.locale!="fr"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:i[0]||(i[0]=_(t=>$("fr"),["prevent"]))},o(e.$t("fr")),3),n("button",{class:w([e.$i18n.locale!="en"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:i[1]||(i[1]=_(t=>$("en"),["prevent"]))},o(e.$t("en")),3),n("button",{class:w([e.$i18n.locale!="es"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:i[2]||(i[2]=_(t=>$("es"),["prevent"]))},o(e.$t("es")),3),n("button",{class:w([e.$i18n.locale!="pt"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:i[3]||(i[3]=_(t=>$("pt"),["prevent"]))},o(e.$t("pt")),3)])])]),n("section",we,[r(U)!=""?(l(),j(ne,{key:0},{default:oe(()=>[d(o(r(U)),1)]),_:1})):u("",!0),n("h1",Ce,o(e.$t("edit"))+" "+o(p.type),1),n("h2",qe,o(e.$t("good-msg-post"))+" ! ",1),n("form",{onSubmit:i[15]||(i[15]=_(t=>Q(),["prevent"])),id:"postform",enctype:"multipart/form-data"},[n("div",Ve,[n("div",Ue,[n("label",Se,[d(o(e.$t("title"))+" ",1),ze]),c(n("input",{required:"","onUpdate:modelValue":i[4]||(i[4]=t=>r(s).title=t),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[F,r(s).title]]),n("span",Re,o(r(s).title?r(s).title.length:0)+" of 50 Characters",1)]),n("div",Le,[n("label",Me,[d(o(e.$t("continent"))+" ",1),Pe]),c(n("select",{required:"","onUpdate:modelValue":i[5]||(i[5]=t=>r(s).continent_id=t),onChange:P,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(l(!0),a(v,null,h(r(D),t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",Fe,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",Ne,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",Oe,o(t.name_es),1)):(l(),a("span",Be,o(t.name_pt),1))],8,je))),128))],544),[[b,r(s).continent_id]])]),n("div",De,[n("label",Ee,[d(o(e.$t("zoned")),1),Ie]),c(n("select",{required:"",onChange:M,"onUpdate:modelValue":i[6]||(i[6]=t=>r(s).zone_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[S.value.length!=0?(l(!0),a(v,{key:0},h(S.value,t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",Ze,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",Je,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",He,o(t.name_es),1)):(l(),a("span",Ke,o(t.name_pt),1))],8,Te))),128)):(l(),a("option",Ae," Requires "+o(e.$t("continent")),1))],544),[[b,r(s).zone_id]])]),n("div",Ge,[n("label",Qe,[d(o(e.$t("country")),1),We]),c(n("select",{required:"",onChange:i[7]||(i[7]=t=>L()),"onUpdate:modelValue":i[8]||(i[8]=t=>r(s).country_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[x.value.length!=0?(l(!0),a(v,{key:0},h(x.value,t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",Ye,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",et,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",tt,o(t.name_es),1)):(l(),a("span",st,o(t.name_pt),1))],8,Xe))),128)):(l(),a("option",ot," Requires "+o(e.$t("zoned")),1))],544),[[b,r(s).country_id]])]),n("div",nt,[n("label",lt,o(e.$t("city")),1),c(n("select",{required:"","onUpdate:modelValue":i[9]||(i[9]=t=>r(s).city_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[g.value.length!=0?(l(!0),a(v,{key:0},h(g.value,t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",it,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",rt,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",dt,o(t.name_es),1)):(l(),a("span",ut,o(t.name_pt),1))],8,at))),128)):(l(),a("option",ct," Requires "+o(e.$t("country")),1))],512),[[b,r(s).city_id]])]),n("div",pt,[n("label",mt,[d(o(e.$t("ministry"))+" ",1),yt]),c(n("select",{required:"",multiple:"","onUpdate:modelValue":i[10]||(i[10]=t=>k.value=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(l(!0),a(v,null,h(r(H),t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",gt,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",_t,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",bt,o(t.name_es),1)):(l(),a("span",vt,o(t.name_pt),1))],8,ft))),128))],512),[[b,k.value]])]),p.type=="article"?(l(),a("div",ht,[n("label",kt,[d(o(e.$t("thumbnails"))+" ",1),xt]),n("div",$t,[r(s).image?(l(),a("img",{key:0,src:typeof r(s).image=="string"?r(s).image:X(r(s).image),onLoad:i[11]||(i[11]=t=>typeof r(s).image=="string"?"":Y(r(s).image)),class:"h-16 w-16 rounded-full",alt:r(s).title},null,40,wt)):u("",!0),n("input",{ref_key:"file",ref:q,onChange:i[12]||(i[12]=t=>W()),type:"file",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])])):u("",!0),n("div",Ct,[n("label",qt,[d(o(e.$t("content"))+" ",1),Vt]),p.type=="article"?(l(),j(ye,{key:R.value,modelValue:r(s).content,"onUpdate:modelValue":i[13]||(i[13]=t=>r(s).content=t)},null,8,["modelValue"])):(l(),a("div",Ut,[r(s).content?c((l(),a("textarea",{key:0,required:"","onUpdate:modelValue":i[14]||(i[14]=t=>r(s).content=t),maxlength:"2000",class:"mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`
                            `,512)),[[F,r(s).content]]):u("",!0),r(s).content?(l(),a("span",St,o(r(s).content.length)+" of 2000 Characters",1)):u("",!0)]))])]),n("div",zt,[r(z)==0?(l(),a("button",Rt,o(e.$t("save")),1)):u("",!0),r(z)==1?(l(),a("button",Lt,[le(ee,{size:"small"})])):u("",!0)])],32)])])}}};export{Et as default};