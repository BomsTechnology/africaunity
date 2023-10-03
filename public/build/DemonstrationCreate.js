var x=(C,w,b)=>new Promise((f,g)=>{var h=u=>{try{v(b.next(u))}catch(k){g(k)}},V=u=>{try{v(b.throw(u))}catch(k){g(k)}},v=u=>u.done?f(u.value):Promise.resolve(u.value).then(h,V);v((b=b.apply(C,w)).next())});import{r as $,G as ee,a as te,o as oe,b as R,d as r,e as i,f as t,t as n,h as p,l as se,w as ne,j as a,k as U,m as re,I as d,K as c,J as m,F as _,x as y,g as ie}from"./app.js";import{u as le}from"./zoneServices.js";import{u as ae}from"./cityServices.js";import{u as de}from"./countryServices.js";import{u as ue}from"./currencyServices.js";import{u as pe}from"./continentServices.js";import{u as ce}from"./demonstrationServices.js";import{u as me}from"./demonstrationModeServices.js";import{u as _e}from"./demonstrationTypeServices.js";import{u as ye}from"./demonstrationNicheServices.js";const fe={class:"text-center text-2xl font-bold text-gray-500 sm:text-4xl"},be={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},ge={class:"mt-4"},he={class:"col-span-2"},ve={class:"text-gray-700"},ke=t("span",{class:"text-red-500"},"*",-1),we={class:"text-xs font-light text-gray-400"},xe={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},$e={class:"text-gray-700",for:"pt"},Ue=t("span",{class:"text-red-500"},"*",-1),Ve=["value"],qe={key:0},Ce={key:1},De={key:2},ze={key:3},Re={class:"text-gray-700",for:"pt"},Se=t("span",{class:"text-red-500"},"*",-1),Fe=["value"],Le={key:0},je={key:1},Be={key:2},Oe={key:3},Ee={class:"text-gray-700",for:"es"},Ie=t("span",{class:"text-red-500"},"*",-1),Ne=["value"],Ze={key:0},Ge={key:1},Je={key:2},Me={key:3},Ke={class:"text-gray-700",for:"es"},Pe=t("span",{class:"text-red-500"},"*",-1),Ae=["value"],He={key:0},Qe={key:1},Te={key:2},We={key:3},Xe={key:1,value:"null"},Ye={class:"text-gray-700",for:"es"},et=t("span",{class:"text-red-500"},"*",-1),tt=["value"],ot={key:0},st={key:1},nt={key:2},rt={key:3},it={key:1,value:"null"},lt={class:"d text-gray-700",for:"es"},at=t("span",{class:"text-red-500"},"*",-1),dt=["value"],ut={key:0},pt={key:1},ct={key:2},mt={key:3},_t={key:1,value:"null"},yt={class:"sm:col-span-2"},ft={class:"text-gray-700",for:"pt"},bt=t("span",{class:"text-red-500"},"*",-1),gt={class:"sm:col-span-2"},ht={class:"text-gray-700"},vt=t("span",{class:"text-red-500"},"*",-1),kt=t("option",{value:"free"},"Gratuit",-1),wt=t("option",{value:"paying"},"Payant",-1),xt=[kt,wt],$t={class:"text-gray-700"},Ut={class:"text-gray-700",for:"es"},Vt=["value"],qt={class:"text-gray-700"},Ct=t("span",{class:"text-red-500"},"*",-1),Dt={class:"text-gray-700"},zt=t("span",{class:"text-red-500"},"*",-1),Rt={class:"text-gray-700"},St=t("span",{class:"text-red-500"},"*",-1),Ft=["value"],Lt={key:0},jt={key:1},Bt={key:2},Ot={key:3},Et={class:"text-gray-700"},It=t("span",{class:"text-red-500"},"*",-1),Nt={class:"text-gray-700"},Zt=t("span",{class:"text-red-500"},"*",-1),Gt={class:"text-gray-700"},Jt=t("span",{class:"text-red-500"},"*",-1),Mt={class:"sm:col-span-2 mt-4"},Kt={class:"text-gray-700",for:"fr"},Pt={class:"flex items-center space-x-4 py-4"},At=["src","alt"],Ht={class:"sm:col-span-2 mt-4"},Qt={class:"text-gray-700",for:"pt"},Tt=t("span",{class:"text-red-500"},"*",-1),Wt={class:"mt-20"},Xt={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Yt={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},co={__name:"DemonstrationCreate",setup(C){const w=$(null),b=ee(),f=$([]),g=$([]),h=$([]),{zones:V,getZones:v}=le(),{cities:u,getCities:k}=ae(),{countries:S,getCountries:F}=de(),{currencies:L,getCurrencies:j}=ue(),{continents:B,getContinents:O}=pe(),{errors:q,loading:D,createDemonstration:E}=ce(),{demonstrationTypes:I,getDemonstrationTypes:N}=_e(),{demonstrationModes:Z,getDemonstrationModes:G}=me(),{demonstrationNiches:J,getDemonstrationNiches:M}=ye(),z=localStorage.user?JSON.parse(localStorage.user):"",s=te({title:"",user_id:z.id,description:"",price:"0",image:"",hourly:"",enter_type:"",place_link:"",start_date:"",end_date:"",email:z.email,phone:"",demonstration_type_id:"",demonstration_mode_id:"",demonstration_niche_id:"",currency_id:"",city_id:"",zone_id:"",continent_id:"",country_id:""});oe(()=>x(this,null,function*(){yield N(),yield G(),yield M(),yield j(),yield O(),yield v(),yield F(),yield k()}));const K=()=>x(this,null,function*(){let o=new FormData;o.append("title",s.title),o.append("description",s.description),o.append("price",s.price),o.append("image",s.image),o.append("email",s.email),o.append("hourly",s.hourly),o.append("start_date",s.start_date),o.append("end_date",s.end_date),o.append("phone",s.phone),o.append("enter_type",s.enter_type),o.append("user_id",s.user_id),o.append("currency_id",s.currency_id),o.append("place_link",s.place_link),o.append("demonstration_type_id",s.demonstration_type_id),o.append("demonstration_mode_id",s.demonstration_mode_id),o.append("demonstration_niche_id",s.demonstration_niche_id),o.append("city_id",s.city_id),o.append("zone_id",s.zone_id),o.append("continent_id",s.continent_id),o.append("country_id",s.country_id),yield E(o),q.value==""&&b.push({name:"admin.event.index"})}),P=()=>{f.value=u.value.filter(o=>o.country_id==s.country_id),s.city_id=""},A=()=>{h.value=S.value.filter(o=>o.zone_id==s.zone_id),s.country_id="",s.city_id="",f.value=[]},H=()=>{g.value=V.value.filter(o=>o.continent_id==s.continent_id),s.zone_id="",s.country_id="",s.city_id="",f.value=[],h.value=[]},Q=()=>x(this,null,function*(){s.image=w.value.files[0]});function T(o){return URL.createObjectURL(o)}function W(o){return URL.revokeObjectURL(o)}return(o,l)=>{const X=R("Error"),Y=R("Spin");return r(),i("div",null,[t("h1",fe,n(o.$tc("add",1))+" Demonstration ",1),t("section",be,[p(q)!=""?(r(),se(X,{key:0},{default:ne(()=>[a(n(p(q)),1)]),_:1})):U("",!0),t("form",{onSubmit:l[23]||(l[23]=re(e=>K(),["prevent"])),id:"postform",enctype:"multipart/form-data"},[t("div",ge,[t("div",he,[t("label",ve,[a(n(o.$t("title"))+" ",1),ke]),d(t("input",{required:"","onUpdate:modelValue":l[0]||(l[0]=e=>s.title=e),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.title]]),t("span",we,n(s.title?s.title.length:0)+" of 50 Characters",1)]),t("div",xe,[t("div",null,[t("label",$e,[a(n(o.$t("event-type"))+" ",1),Ue]),d(t("select",{required:"","onUpdate:modelValue":l[1]||(l[1]=e=>s.demonstration_type_id=e),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(r(!0),i(_,null,y(p(I),e=>(r(),i("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(r(),i("span",qe,n(e.name_en),1)):o.$i18n.locale=="fr"?(r(),i("span",Ce,n(e.name_fr),1)):o.$i18n.locale=="es"?(r(),i("span",De,n(e.name_es),1)):(r(),i("span",ze,n(e.name_pt),1))],8,Ve))),128))],512),[[m,s.demonstration_type_id]])]),t("div",null,[t("label",Re,[a(n(o.$t("event-mode"))+" ",1),Se]),d(t("select",{required:"","onUpdate:modelValue":l[2]||(l[2]=e=>s.demonstration_mode_id=e),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(r(!0),i(_,null,y(p(Z),e=>(r(),i("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(r(),i("span",Le,n(e.name_en),1)):o.$i18n.locale=="fr"?(r(),i("span",je,n(e.name_fr),1)):o.$i18n.locale=="es"?(r(),i("span",Be,n(e.name_es),1)):(r(),i("span",Oe,n(e.name_pt),1))],8,Fe))),128))],512),[[m,s.demonstration_mode_id]])]),t("div",null,[t("label",Ee,[a(n(o.$t("continent"))+" ",1),Ie]),d(t("select",{required:"","onUpdate:modelValue":l[3]||(l[3]=e=>s.continent_id=e),onChange:l[4]||(l[4]=e=>H()),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(r(!0),i(_,null,y(p(B),e=>(r(),i("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(r(),i("span",Ze,n(e.name_en),1)):o.$i18n.locale=="fr"?(r(),i("span",Ge,n(e.name_fr),1)):o.$i18n.locale=="es"?(r(),i("span",Je,n(e.name_es),1)):(r(),i("span",Me,n(e.name_pt),1))],8,Ne))),128))],544),[[m,s.continent_id]])]),t("div",null,[t("label",Ke,[a(n(o.$t("zoned"))+" ",1),Pe]),d(t("select",{required:"","onUpdate:modelValue":l[5]||(l[5]=e=>s.zone_id=e),onChange:l[6]||(l[6]=e=>A()),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[g.value.length!=0?(r(!0),i(_,{key:0},y(g.value,e=>(r(),i("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(r(),i("span",He,n(e.name_en),1)):o.$i18n.locale=="fr"?(r(),i("span",Qe,n(e.name_fr),1)):o.$i18n.locale=="es"?(r(),i("span",Te,n(e.name_es),1)):(r(),i("span",We,n(e.name_pt),1))],8,Ae))),128)):(r(),i("option",Xe," Requires "+n(o.$t("continent")),1))],544),[[m,s.zone_id]])]),t("div",null,[t("label",Ye,[a(n(o.$t("country"))+" ",1),et]),d(t("select",{required:"",onChange:l[7]||(l[7]=e=>P()),"onUpdate:modelValue":l[8]||(l[8]=e=>s.country_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[h.value.length!=0?(r(!0),i(_,{key:0},y(h.value,e=>(r(),i("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(r(),i("span",ot,n(e.name_en),1)):o.$i18n.locale=="fr"?(r(),i("span",st,n(e.name_fr),1)):o.$i18n.locale=="es"?(r(),i("span",nt,n(e.name_es),1)):(r(),i("span",rt,n(e.name_pt),1))],8,tt))),128)):(r(),i("option",it," Requires "+n(o.$t("zoned")),1))],544),[[m,s.country_id]])]),t("div",null,[t("label",lt,[a(n(o.$t("city"))+" ",1),at]),d(t("select",{required:"","onUpdate:modelValue":l[9]||(l[9]=e=>s.city_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[f.value.length!=0?(r(!0),i(_,{key:0},y(f.value,e=>(r(),i("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(r(),i("span",ut,n(e.name_en),1)):o.$i18n.locale=="fr"?(r(),i("span",pt,n(e.name_fr),1)):o.$i18n.locale=="es"?(r(),i("span",ct,n(e.name_es),1)):(r(),i("span",mt,n(e.name_pt),1))],8,dt))),128)):(r(),i("option",_t," Requires "+n(o.$t("country")),1))],512),[[m,s.city_id]])]),t("div",yt,[t("label",ft,[a(n(o.$t("location-link"))+" ",1),bt]),d(t("input",{required:"","onUpdate:modelValue":l[10]||(l[10]=e=>s.place_link=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.place_link]])]),t("div",gt,[t("label",ht,[a(n(o.$t("enter-type")),1),vt]),d(t("select",{required:"","onUpdate:modelValue":l[11]||(l[11]=e=>s.enter_type=e),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},xt,512),[[m,s.enter_type]])]),t("div",null,[t("label",$t,n(o.$t("price")),1),d(t("input",{"onUpdate:modelValue":l[12]||(l[12]=e=>s.price=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.price]])]),t("div",null,[t("label",Ut,n(o.$t("currency")),1),d(t("select",{"onUpdate:modelValue":l[13]||(l[13]=e=>s.currency_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(r(!0),i(_,null,y(p(L),e=>(r(),i("option",{key:e.id,value:e.id},n(e.symbol+" "+e.name),9,Vt))),128))],512),[[m,s.currency_id]])]),t("div",null,[t("label",qt,[a(n(o.$t("start-date"))+" ",1),Ct]),d(t("input",{"onUpdate:modelValue":l[14]||(l[14]=e=>s.start_date=e),type:"date",required:"",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.start_date]])]),t("div",null,[t("label",Dt,[a(n(o.$t("end-date"))+" ",1),zt]),d(t("input",{"onUpdate:modelValue":l[15]||(l[15]=e=>s.end_date=e),type:"date",required:"",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.end_date]])]),t("div",null,[t("label",Rt,[a(n(o.$t("niche"))+" ",1),St]),d(t("select",{required:"","onUpdate:modelValue":l[16]||(l[16]=e=>s.demonstration_niche_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(r(!0),i(_,null,y(p(J),e=>(r(),i("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(r(),i("span",Lt,n(e.name_en),1)):o.$i18n.locale=="fr"?(r(),i("span",jt,n(e.name_fr),1)):o.$i18n.locale=="es"?(r(),i("span",Bt,n(e.name_es),1)):(r(),i("span",Ot,n(e.name_pt),1))],8,Ft))),128))],512),[[m,s.demonstration_niche_id]])]),t("div",null,[t("label",Et,[a(n(o.$t("hour"))+" ",1),It]),d(t("input",{"onUpdate:modelValue":l[17]||(l[17]=e=>s.hourly=e),type:"time",required:"",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.hourly]])]),t("div",null,[t("label",Nt,[a(n(o.$t("contact-phone"))+" ",1),Zt]),d(t("input",{required:"","onUpdate:modelValue":l[18]||(l[18]=e=>s.phone=e),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.phone]])]),t("div",null,[t("label",Gt,[a(n(o.$t("contact-email"))+" ",1),Jt]),d(t("input",{required:"","onUpdate:modelValue":l[19]||(l[19]=e=>s.email=e),type:"email",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.email]])])]),t("div",Mt,[t("label",Kt,n(o.$t("thumbnails")),1),t("div",Pt,[s.image?(r(),i("img",{key:0,src:typeof s.image=="string"?s.image:T(s.image),onLoad:l[20]||(l[20]=e=>typeof s.image=="string"?"":W(s.image)),class:"h-16 w-16 rounded-full",alt:s.title},null,40,At)):U("",!0),t("input",{ref_key:"file",ref:w,onChange:l[21]||(l[21]=e=>Q()),accept:"image/*",type:"file",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])]),t("div",Ht,[t("label",Qt,[a(n(o.$t("description"))+" ",1),Tt]),d(t("textarea",{required:"",type:"text","onUpdate:modelValue":l[22]||(l[22]=e=>s.description=e),id:"pt",class:"mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`
                        `,512),[[c,s.description]])])]),t("div",Wt,[p(D)==0?(r(),i("button",Xt,n(o.$t("save")),1)):U("",!0),p(D)==1?(r(),i("button",Yt,[a(n(o.$t("save"))+"... ",1),ie(Y,{size:"small"})])):U("",!0)])],32)])])}}};export{co as default};
