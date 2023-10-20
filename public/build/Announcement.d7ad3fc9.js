var le=Object.defineProperty;var q=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var E=(c,a,d)=>a in c?le(c,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):c[a]=d,L=(c,a)=>{for(var d in a||(a={}))re.call(a,d)&&E(c,d,a[d]);if(q)for(var d of q(a))ie.call(a,d)&&E(c,d,a[d]);return c};var A=(c,a,d)=>new Promise((v,g)=>{var m=p=>{try{h(d.next(p))}catch($){g($)}},k=p=>{try{h(d.throw(p))}catch($){g($)}},h=p=>p.done?v(p.value):Promise.resolve(p.value).then(m,k);h((d=d.apply(c,a)).next())});import{d as l,e as r,f as o,F as f,x as _,g as y,h as u,R as ne,r as b,o as ae,T as de,a as ue,b as M,t as i,I as x,K as ce,J as V,V as ye,l as T,w as S,k as w,j as pe}from"./app.59e8d623.js";import{u as ge}from"./announcementServices.2b31cb9f.js";import{u as me}from"./universityServices.322bd2df.js";import{u as fe}from"./categoryAnnouncementServices.fb0e60ce.js";import{u as _e}from"./continentServices.497e44db.js";import{u as ve}from"./countryServices.be0576be.js";import{u as he}from"./cityServices.ccbc8354.js";import{u as be}from"./zoneServices.1394980d.js";import{r as xe}from"./PhotoIcon.18108ee3.js";import{r as we}from"./PlusCircleIcon.cb1c78f8.js";import{r as ke}from"./MegaphoneIcon.e07d9843.js";import{r as $e}from"./UserIcon.3f57577b.js";const Ce={class:"animate-pulse"},ze={class:"grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-3"},Ae={class:"mx-auto h-44 w-32 overflow-hidden"},Ve=ne('<div class="flex flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="flex w-full items-center justify-between"><div class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div>',1),Z={__name:"Ads",setup(c){const a=[1,2,3,4];return(d,v)=>(l(),r("div",Ce,[o("div",ze,[(l(),r(f,null,_(a,g=>o("div",{key:g,class:"rounded bg-gray-100 shadow"},[o("div",Ae,[y(u(xe),{class:"h-full w-full text-gray-200"})]),Ve])),64))])]))}},Ue={class:"mx-auto min-h-screen w-full bg-white xl:w-[90%]"},Ne={class:"py-2 text-center text-5xl font-bold capitalize text-primary-blue"},Se={class:"py-8 lg:px-16"},je={class:"mt-4 grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-3"},Fe={class:"text-xs lg:text-sm"},Ke={class:"dark:text-gray-200 text-gray-700"},Be={class:"text-xs lg:text-sm"},Re={class:"text-gray-700",for:"es"},qe=o("option",{value:""},"--------------",-1),Ee=["value"],Le={class:"text-xs lg:text-sm"},Me={class:"text-gray-700",for:"es"},Te=o("option",{value:""},"--------------",-1),Ze=["value"],De={key:0},Je={key:1},Ge={key:2},He={key:3},Ie={class:"text-xs lg:text-sm"},Oe={class:"text-gray-700",for:"es"},Pe=o("option",{value:""},"--------------",-1),Qe=["value"],We={key:0},Xe={key:1},Ye={key:2},et={key:3},tt={key:1,value:"null"},st={class:"text-xs lg:text-sm"},ot={class:"text-gray-700",for:"es"},lt=o("option",{value:""},"--------------",-1),rt=["value"],it={key:0},nt={key:1},at={key:2},dt={key:3},ut={key:1,value:"null"},ct={class:"text-xs lg:text-sm"},yt={class:"text-gray-700",for:"es"},pt=o("option",{value:""},"--------------",-1),gt=["value"],mt={key:0},ft={key:1},_t={key:2},vt={key:3},ht={key:1,value:"null"},bt={class:"divSelect2 text-xs lg:text-sm"},xt={class:"text-gray-700",for:"es"},wt={class:"flex items-end text-xs lg:text-sm"},kt=o("div",{class:"bg-primary-blue p-2 shadow"},null,-1),$t={class:"flex justify-end py-4"},Ct={class:"text-base leading-4"},zt={class:"py-8"},At={key:0},Vt={class:"relative"},Ut={key:0,class:"absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 p-2 text-center text-sm text-white"},Nt=["src","alt"],St={key:2,class:"h-48 w-full overflow-hidden rounded-t-lg bg-gray-50 py-10"},jt={class:"space-y-2 px-4 py-2 grow"},Ft={href:"#",class:"mt-2 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"},Kt={class:"text-2xl font-bold capitalize my-4 text-gray-800 hover:underline"},Bt={class:"flex h-10 items-center justify-between bg-gray-900 px-4 py-2"},Rt={key:0,class:"text-lg font-bold text-white"},qt={class:"flex items-center space-x-2 text-xs text-white"},Et={class:"flex space-x-1"},Lt={key:2},Yt={__name:"Announcement",setup(c){const{universities:a,getAllUniversities:d}=me(),{announcements:v,getAnnouncements:g,loading:m,page:k,isAll:h,filterAnnouncements:p}=ge(),{continents:$,getContinents:D}=_e(),{countries:J,getCountries:G}=ve(),{categoryAnnouncements:H,getCategoryAnnouncements:I}=fe(),{zones:O,getZones:P}=be(),{cities:Q,getCities:W}=he(),B=localStorage.user?JSON.parse(localStorage.user):"",j=b([]),U=b([]),C=b([]),z=b([]),F=b(null),K=b(!0);ae(()=>A(this,null,function*(){window.addEventListener("scroll",R),yield g(),yield D(),yield P(),yield G(),yield I(),yield W(),d()})),de(()=>A(this,null,function*(){k.value=1,window.removeEventListener("scroll",R)}));const R=s=>A(this,null,function*(){F.value&&F.value.getBoundingClientRect().bottom<window.innerHeight&&K.value&&!h.value&&t.searchKey==""&&t.category==""&&t.country==""&&t.continent==""&&t.university==""&&t.city==""&&t.zone==""&&(K.value=!1,k.value++,yield g(),K.value=!0)}),X=()=>A(this,null,function*(){t.searchKey!=""||t.category!=""||t.country!=""||t.continent!=""||t.university!=""||t.city!=""||t.zone!=""?(m.value=1,yield p(L({},t)),m.value=2):(k.value=1,h.value=!1,yield g())}),t=ue({searchKey:"",category:"",country:"",continent:"",university:"",city:"",zone:""}),Y=()=>{z.value=a.value.filter(s=>s.continent.id==t.continent&&s.zone.id==t.zone&&s.country.id==t.country&&s.city.id==t.city)},ee=()=>{C.value=Q.value.filter(s=>s.country_id==t.country),z.value=a.value.filter(s=>s.continent.id==t.continent&&s.zone.id==t.zone&&s.country.id==t.country),t.city=""},te=()=>{U.value=J.value.filter(s=>s.zone_id==t.zone),z.value=a.value.filter(s=>s.continent.id==t.continent&&s.zone.id==t.zone),t.country="",t.city="",C.value=[]},se=()=>{j.value=O.value.filter(s=>s.continent_id==t.continent),z.value=a.value.filter(s=>s.continent.id==t.continent),t.zone="",t.country="",t.city="",C.value=[],U.value=[]};return(s,n)=>{const N=M("router-link"),oe=M("NoContent");return l(),r("div",Ue,[o("h1",Ne,i(s.$t("ads-s"))+" "+i(s.$tc("student",1)),1),o("div",Se,[o("div",je,[o("div",Fe,[o("label",Ke,i(s.$t("key-words")),1),x(o("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>t.searchKey=e),class:"form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,512),[[ce,t.searchKey]])]),o("div",Be,[o("label",Re,i(s.$t("category")),1),x(o("select",{"onUpdate:modelValue":n[1]||(n[1]=e=>t.category=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[qe,(l(!0),r(f,null,_(u(H),e=>(l(),r("option",{key:e.id,value:e.id},i(e.name),9,Ee))),128))],512),[[V,t.category]])]),o("div",Le,[o("label",Me,i(s.$t("continent")),1),x(o("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>t.continent=e),onChange:n[3]||(n[3]=e=>se()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Te,(l(!0),r(f,null,_(u($),e=>(l(),r("option",{key:e.id,value:e.id},[s.$i18n.locale=="en"?(l(),r("span",De,i(e.name_en),1)):s.$i18n.locale=="fr"?(l(),r("span",Je,i(e.name_fr),1)):s.$i18n.locale=="es"?(l(),r("span",Ge,i(e.name_es),1)):(l(),r("span",He,i(e.name_pt),1))],8,Ze))),128))],544),[[V,t.continent]])]),o("div",Ie,[o("label",Oe,i(s.$t("zoned")),1),x(o("select",{"onUpdate:modelValue":n[4]||(n[4]=e=>t.zone=e),onChange:n[5]||(n[5]=e=>te()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Pe,j.value.length!=0?(l(!0),r(f,{key:0},_(j.value,e=>(l(),r("option",{key:e.id,value:e.id},[s.$i18n.locale=="en"?(l(),r("span",We,i(e.name_en),1)):s.$i18n.locale=="fr"?(l(),r("span",Xe,i(e.name_fr),1)):s.$i18n.locale=="es"?(l(),r("span",Ye,i(e.name_es),1)):(l(),r("span",et,i(e.name_pt),1))],8,Qe))),128)):(l(),r("option",tt," Requires "+i(s.$t("continent")),1))],544),[[V,t.zone]])]),o("div",st,[o("label",ot,i(s.$t("country")),1),x(o("select",{"onUpdate:modelValue":n[6]||(n[6]=e=>t.country=e),onChange:n[7]||(n[7]=e=>ee()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[lt,U.value.length!=0?(l(!0),r(f,{key:0},_(U.value,e=>(l(),r("option",{key:e.id,value:e.id},[s.$i18n.locale=="en"?(l(),r("span",it,i(e.name_en),1)):s.$i18n.locale=="fr"?(l(),r("span",nt,i(e.name_fr),1)):s.$i18n.locale=="es"?(l(),r("span",at,i(e.name_es),1)):(l(),r("span",dt,i(e.name_pt),1))],8,rt))),128)):(l(),r("option",ut," Requires "+i(s.$t("zoned")),1))],544),[[V,t.country]])]),o("div",ct,[o("label",yt,i(s.$t("city")),1),x(o("select",{"onUpdate:modelValue":n[8]||(n[8]=e=>t.city=e),onChange:n[9]||(n[9]=e=>Y()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[pt,C.value.length!=0?(l(!0),r(f,{key:0},_(C.value,e=>(l(),r("option",{key:e.id,value:e.id},[s.$i18n.locale=="en"?(l(),r("span",mt,i(e.name_en),1)):s.$i18n.locale=="fr"?(l(),r("span",ft,i(e.name_fr),1)):s.$i18n.locale=="es"?(l(),r("span",_t,i(e.name_es),1)):(l(),r("span",vt,i(e.name_pt),1))],8,gt))),128)):(l(),r("option",ht," Requires "+i(s.$t("country")),1))],544),[[V,t.city]])]),o("div",bt,[o("label",xt,i(s.$t("university")),1),y(ye,{modelValue:t.university,"onUpdate:modelValue":n[10]||(n[10]=e=>t.university=e),data:z.value,placeholder:"Select University",required:!1,resetField:!0,className:"w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data"])]),o("div",wt,[o("button",{type:"button",onClick:n[11]||(n[11]=e=>X()),class:"w-full rounded-md bg-primary-blue px-4 py-2.5 text-white"},i(s.$t("search")),1)])]),kt,o("div",$t,[u(B).type=="particular"||u(B).type=="admin"?(l(),T(N,{key:0,to:{name:"add.ads"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:S(()=>[y(u(we),{class:"h-6 w-6"}),o("p",Ct,i(s.$tc("add",2))+" "+i(s.$t("ads")),1)]),_:1},8,["to"])):w("",!0)]),o("div",zt,[u(m)==3?(l(),r("div",At,[y(Z)])):u(v).length!=0?(l(),r("div",{key:1,ref_key:"adsContainer",ref:F,class:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"},[(l(!0),r(f,null,_(u(v),e=>(l(),r("div",{class:"dark:bg-gray-800 relative overflow-hidden rounded-lg shadow-lg flex flex-col",key:e.id},[y(N,{to:{name:"show.ads",params:{id:e.id,slug:e.slug}},class:"block"},{default:S(()=>[o("div",Vt,[e.image[0]?(l(),r("div",Ut,[o("span",null,i(e.image.length),1)])):w("",!0),e.image[0]?(l(),r("img",{key:1,class:"h-48 w-full rounded-t-lg object-cover",src:e.image[0],alt:e.title},null,8,Nt)):(l(),r("div",St,[y(u(ke),{class:"h-full w-full text-gray-500"})]))])]),_:2},1032,["to"]),o("div",jt,[o("a",Ft,i(e.category.name.length<=30?e.category.name:e.category.name.substring(0,25)+"..."),1),y(N,{to:{name:"show.ads",params:{id:e.id,slug:e.slug}},class:"block grow"},{default:S(()=>[o("h1",Kt,i(e.title),1)]),_:2},1032,["to"])]),o("div",Bt,[e.price&&e.price!="null"?(l(),r("h1",Rt,i(e.price)+" "+i(e.currency.symbol),1)):w("",!0),o("div",qt,[o("div",Et,[y(u($e),{class:"h-4 w-4"}),y(N,{to:{name:"compte",params:{slug:e.user.slug,id:e.user.id}},class:"hover:text-primary-blue"},{default:S(()=>[pe(i(e.user.firstname),1)]),_:2},1032,["to"])])])])]))),128))],512)):w("",!0),u(m)==1?(l(),r("div",Lt,[y(Z)])):w("",!0),u(v).length==0&&u(m)!=1?(l(),T(oe,{key:3})):w("",!0)])])])}}};export{Yt as default};