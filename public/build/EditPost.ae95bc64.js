var S=(c,y,p)=>new Promise((h,_)=>{var R=d=>{try{v(p.next(d))}catch(s){_(s)}},m=d=>{try{v(p.throw(d))}catch(s){_(s)}},v=d=>d.done?h(d.value):Promise.resolve(d.value).then(R,m);v((p=p.apply(c,y)).next())});import{G as se,r as b,u as oe,o as ne,b as le,d as l,e as a,f as n,t as o,j as u,n as z,m as x,h as r,l as D,w as ae,P as ie,k as f,I as g,K as I,J as $,F as w,x as C,g as re}from"./app.59e8d623.js";import{u as de}from"./postServices.f699ba46.js";import{u as ue}from"./continentServices.497e44db.js";import{u as ce}from"./zoneServices.1394980d.js";import{u as pe}from"./countryServices.be0576be.js";import{u as me}from"./ministryServices.0fd79df8.js";import{u as ye}from"./cityServices.ccbc8354.js";import{_ as fe}from"./RichText.3e014ce4.js";const ge={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},_e={class:"w-full space-y-4 py-5 text-center"},be={class:"text-4xl font-bold capitalize text-primary-blue"},he={class:"text-md text-gray-700"},ve={key:0},ke={key:1},xe={class:"flex flex-col items-center justify-center lg:flex-row lg:space-x-3"},$e={class:"font-semibold"},we={class:"mt-3 flex space-x-3 text-xs lg:mt-0 lg:text-sm"},Ce={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},Ve={class:"text-xl font-semibold"},qe={class:"text-md font-light text-gray-700"},Ue={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Se={class:"col-span-2"},ze={class:"text-gray-700"},Re=n("span",{class:"text-red-500"},"*",-1),Le={class:"text-xs font-light text-gray-400"},Me={class:"col-span-2 lg:col-span-1"},Pe={class:"text-gray-700",for:"es"},je=n("span",{class:"text-red-500"},"*",-1),Fe=["value"],Ne={key:0},Be={key:1},De={key:2},Ie={key:3},Oe={class:"col-span-2 lg:col-span-1"},Ee={class:"text-gray-700",for:"pt"},Te=n("span",{class:"text-red-500"},"*",-1),Ze=["value"],Je={key:0},Ge={key:1},Ke={key:2},Ae={key:3},He={key:1,value:"null"},Qe={class:"col-span-2 lg:col-span-1"},We={class:"text-gray-700",for:"es"},Xe=n("span",{class:"text-red-500"},"*",-1),Ye=["value"],et={key:0},tt={key:1},st={key:2},ot={key:3},nt={key:1,value:"null"},lt={class:"col-span-2 lg:col-span-1"},at={class:"d text-gray-700",for:"es"},it=["value"],rt={key:0},dt={key:1},ut={key:2},ct={key:3},pt={key:1,value:"null"},mt={class:"col-span-2"},yt={class:"text-gray-700",for:"pt"},ft=n("span",{class:"text-red-500"},"*",-1),gt=["value"],_t={key:0},bt={key:1},ht={key:2},vt={key:3},kt={key:0,class:"col-span-2"},xt={class:"text-gray-700",for:"fr"},$t=n("span",{class:"text-red-500"},"*",-1),wt={class:"flex items-center space-x-4 py-4"},Ct=["src","alt"],Vt={class:"col-span-2"},qt={class:"text-gray-700",for:"pt"},Ut=n("span",{class:"text-red-500"},"*",-1),St={key:1},zt={key:1,class:"text-xs font-light text-gray-400"},Rt={class:"mt-20"},Lt={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Mt={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Tt={__name:"EditPost",props:{type:{required:!0,type:String},id:{required:!0,type:String}},setup(c){const y=c,p=se(),h=b(null);let{locale:_}=oe();const R=["article","propau"],m=localStorage.user?JSON.parse(localStorage.user):"",{updatePost:v,getPost:d,post:s,errors:L,loading:P}=de(),{continents:O,getContinents:E}=ue(),{zones:T,getZones:Z}=ce(),{countries:J,getCountries:G}=pe(),{ministries:K,getMinistries:A}=me(),{cities:H,getCities:Q}=ye(),V=b([]),M=b([]),q=b([]),k=b([]),j=b(0);ne(()=>S(this,null,function*(){yield d(y.id),j.value++,R.includes(y.type)||p.push({name:"home"});for(const e of s.value.ministries)V.value.push(e.id);_.value=s.value.language,yield E(),yield Z(),B(!1),yield G(),N(!1),yield Q(),F(!1),yield A()}));const W=()=>S(this,null,function*(){let e=new FormData;e.append("image",s.value.image),e.append("title",s.value.title),e.append("type",s.value.type),e.append("user_id",s.value.user_id),e.append("language",s.value.language),e.append("content",s.value.content),e.append("continent_id",s.value.continent_id),e.append("zone_id",s.value.zone_id),e.append("country_id",s.value.country_id),e.append("city_id",s.city_id?s.city_id:null),e.append("ministries",V.value),e.append("_method","PUT"),yield v(e,y.id),L.value==""&&(y.type=="article"?p.push({name:"compte",params:{name:m.firstname,slug:m.slug,id:m.id},query:{redirect:"article"}}):p.push({name:"compte",params:{name:m.firstname,slug:m.slug,id:m.id},query:{redirect:"propau"}}))}),F=(e=!0)=>{k.value=H.value.filter(i=>i.country_id==s.value.country_id),e&&(s.value.city_id="")},N=(e=!0)=>{q.value=J.value.filter(i=>i.zone_id==s.value.zone_id),e&&(s.value.country.id="",s.value.country_id="",k.value=[])},B=(e=!0)=>{M.value=T.value.filter(i=>i.continent_id==s.value.continent_id),e&&(s.value.zone_id="",s.value.country_id="",s.value.city_id="",k.value=[],q.value=[])},X=()=>S(this,null,function*(){console.log(h.value.files[0]),s.value.image=h.value.files[0]}),U=e=>{s.value.language=e,_.value=e,localStorage.lang=_.value};function Y(e){return URL.createObjectURL(e)}function ee(e){return URL.revokeObjectURL(e)}return(e,i)=>{const te=le("Spin");return l(),a("div",ge,[n("div",_e,[n("h1",be,o(e.$t("edit"))+" "+o(c.type),1),n("h2",he,[u(o(e.$t("your"))+" "+o(c.type)+" ",1),y.type=="article"?(l(),a("span",ve,o(e.$t("add-desc-1")),1)):(l(),a("span",ke,o(e.$tc("add-desc-1",2)),1))]),n("div",xe,[n("h1",$e,o(e.$t("select-lang"))+" :",1),n("div",we,[n("button",{class:z([e.$i18n.locale!="fr"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:i[0]||(i[0]=x(t=>U("fr"),["prevent"]))},o(e.$t("fr")),3),n("button",{class:z([e.$i18n.locale!="en"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:i[1]||(i[1]=x(t=>U("en"),["prevent"]))},o(e.$t("en")),3),n("button",{class:z([e.$i18n.locale!="es"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:i[2]||(i[2]=x(t=>U("es"),["prevent"]))},o(e.$t("es")),3),n("button",{class:z([e.$i18n.locale!="pt"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:i[3]||(i[3]=x(t=>U("pt"),["prevent"]))},o(e.$t("pt")),3)])])]),n("section",Ce,[r(L)!=""?(l(),D(ie,{key:0},{default:ae(()=>[u(o(r(L)),1)]),_:1})):f("",!0),n("h1",Ve,o(e.$t("edit"))+" "+o(c.type),1),n("h2",qe,o(e.$t("good-msg-post"))+" ! ",1),n("form",{onSubmit:i[15]||(i[15]=x(t=>W(),["prevent"])),id:"postform",enctype:"multipart/form-data"},[n("div",Ue,[n("div",Se,[n("label",ze,[u(o(e.$t("title"))+" ",1),Re]),g(n("input",{required:"","onUpdate:modelValue":i[4]||(i[4]=t=>r(s).title=t),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[I,r(s).title]]),n("span",Le,o(r(s).title?r(s).title.length:0)+" of 50 Characters",1)]),n("div",Me,[n("label",Pe,[u(o(e.$t("continent"))+" ",1),je]),g(n("select",{required:"","onUpdate:modelValue":i[5]||(i[5]=t=>r(s).continent_id=t),onChange:B,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(l(!0),a(w,null,C(r(O),t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",Ne,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",Be,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",De,o(t.name_es),1)):(l(),a("span",Ie,o(t.name_pt),1))],8,Fe))),128))],544),[[$,r(s).continent_id]])]),n("div",Oe,[n("label",Ee,[u(o(e.$t("zoned")),1),Te]),g(n("select",{required:"",onChange:N,"onUpdate:modelValue":i[6]||(i[6]=t=>r(s).zone_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[M.value.length!=0?(l(!0),a(w,{key:0},C(M.value,t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",Je,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",Ge,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",Ke,o(t.name_es),1)):(l(),a("span",Ae,o(t.name_pt),1))],8,Ze))),128)):(l(),a("option",He," Requires "+o(e.$t("continent")),1))],544),[[$,r(s).zone_id]])]),n("div",Qe,[n("label",We,[u(o(e.$t("country")),1),Xe]),g(n("select",{required:"",onChange:i[7]||(i[7]=t=>F()),"onUpdate:modelValue":i[8]||(i[8]=t=>r(s).country_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[q.value.length!=0?(l(!0),a(w,{key:0},C(q.value,t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",et,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",tt,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",st,o(t.name_es),1)):(l(),a("span",ot,o(t.name_pt),1))],8,Ye))),128)):(l(),a("option",nt," Requires "+o(e.$t("zoned")),1))],544),[[$,r(s).country_id]])]),n("div",lt,[n("label",at,o(e.$t("city")),1),g(n("select",{"onUpdate:modelValue":i[9]||(i[9]=t=>r(s).city_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[k.value.length!=0?(l(!0),a(w,{key:0},C(k.value,t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",rt,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",dt,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",ut,o(t.name_es),1)):(l(),a("span",ct,o(t.name_pt),1))],8,it))),128)):(l(),a("option",pt," Requires "+o(e.$t("country")),1))],512),[[$,r(s).city_id]])]),n("div",mt,[n("label",yt,[u(o(e.$t("ministry"))+" ",1),ft]),g(n("select",{required:"",multiple:"","onUpdate:modelValue":i[10]||(i[10]=t=>V.value=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(l(!0),a(w,null,C(r(K),t=>(l(),a("option",{key:t.id,value:t.id},[e.$i18n.locale=="en"?(l(),a("span",_t,o(t.name_en),1)):e.$i18n.locale=="fr"?(l(),a("span",bt,o(t.name_fr),1)):e.$i18n.locale=="es"?(l(),a("span",ht,o(t.name_es),1)):(l(),a("span",vt,o(t.name_pt),1))],8,gt))),128))],512),[[$,V.value]])]),c.type=="article"?(l(),a("div",kt,[n("label",xt,[u(o(e.$t("thumbnails"))+" ",1),$t]),n("div",wt,[r(s).image?(l(),a("img",{key:0,src:typeof r(s).image=="string"?r(s).image:Y(r(s).image),onLoad:i[11]||(i[11]=t=>typeof r(s).image=="string"?"":ee(r(s).image)),class:"h-16 w-16 rounded-full",alt:r(s).title},null,40,Ct)):f("",!0),n("input",{ref_key:"file",ref:h,onChange:i[12]||(i[12]=t=>X()),type:"file",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])])):f("",!0),n("div",Vt,[n("label",qt,[u(o(e.$t("content"))+" ",1),Ut]),c.type=="article"?(l(),D(fe,{key:j.value,modelValue:r(s).content,"onUpdate:modelValue":i[13]||(i[13]=t=>r(s).content=t)},null,8,["modelValue"])):(l(),a("div",St,[r(s).content?g((l(),a("textarea",{key:0,required:"","onUpdate:modelValue":i[14]||(i[14]=t=>r(s).content=t),maxlength:"2000",class:"mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`
                            `,512)),[[I,r(s).content]]):f("",!0),r(s).content?(l(),a("span",zt,o(r(s).content.length)+" of 2000 Characters",1)):f("",!0)]))])]),n("div",Rt,[r(P)==0?(l(),a("button",Lt,o(e.$t("save")),1)):f("",!0),r(P)==1?(l(),a("button",Mt,[re(te,{size:"small"})])):f("",!0)])],32)])])}}};export{Tt as default};
