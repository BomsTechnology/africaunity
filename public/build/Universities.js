var Y=Object.defineProperty;var q=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var E=(c,d,r)=>d in c?Y(c,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[d]=r,L=(c,d)=>{for(var r in d||(d={}))ee.call(d,r)&&E(c,r,d[r]);if(q)for(var r of q(d))te.call(d,r)&&E(c,r,d[r]);return c};var _=(c,d,r)=>new Promise((p,y)=>{var C=m=>{try{v(r.next(m))}catch(b){y(b)}},S=m=>{try{v(r.throw(m))}catch(b){y(b)}},v=m=>m.done?p(m.value):Promise.resolve(m.value).then(C,S);v((r=r.apply(c,d)).next())});import{d as t,e as s,f as a,F as h,x as f,g,h as u,R as se,r as w,o as oe,T as ne,a as ae,b as M,t as n,l as T,w as z,k as x,I as $,K as le,J as N,j as Z}from"./app.js";import{u as re}from"./universityServices.js";import{u as ie}from"./continentServices.js";import{u as de}from"./countryServices.js";import{u as ce}from"./cityServices.js";import{u as ue}from"./zoneServices.js";import{r as me}from"./PhotoIcon.js";import{r as pe}from"./PlusCircleIcon.js";const ye={class:"animate-pulse"},_e={class:"grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-2 lg:grid-cols-4"},ge={class:"mx-auto h-44 w-32 overflow-hidden"},he=se('<div class="flex flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div>',1),D={__name:"University",setup(c){const d=[1,2,3,4,5,6];return(r,p)=>(t(),s("div",ye,[a("div",_e,[(t(),s(h,null,f(d,y=>a("div",{key:y,class:"h-80 rounded bg-gray-100 shadow"},[a("div",ge,[g(u(me),{class:"h-full w-full text-gray-200"})]),he])),64))])]))}},fe={class:"mx-auto min-h-screen w-full bg-white xl:w-[90%]"},ve={class:"py-2 text-center text-5xl font-bold capitalize text-primary-blue"},be={class:"py-8 lg:px-16"},ke={class:"flex justify-end py-4"},we={class:"text-base leading-4"},xe={class:"grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-4"},$e={class:"text-xs lg:text-sm"},Ce={class:"dark:text-gray-200 text-gray-700"},Ue={class:"text-xs lg:text-sm"},Ve={class:"text-gray-700",for:"es"},ze=a("option",{value:""},"--------------",-1),Ne=["value"],Se={key:0},je={key:1},Ke={key:2},Be={key:3},Fe={class:"text-xs lg:text-sm"},Re={class:"text-gray-700",for:"es"},qe=a("option",{value:""},"--------------",-1),Ee=["value"],Le={key:0},Me={key:1},Te={key:2},Ze={key:3},De={key:1,value:"null"},Je={class:"text-xs lg:text-sm"},Ae={class:"text-gray-700",for:"es"},Ge=a("option",{value:""},"--------------",-1),He=["value"],Ie={key:0},Oe={key:1},Pe={key:2},Qe={key:3},We={key:1,value:"null"},Xe={class:"text-xs lg:text-sm"},Ye={class:"text-gray-700",for:"es"},et=a("option",{value:""},"--------------",-1),tt=["value"],st={key:0},ot={key:1},nt={key:2},at={key:3},lt={key:1,value:"null"},rt={class:"flex items-end text-xs lg:text-sm"},it=a("div",{class:"bg-primary-blue p-2 shadow"},null,-1),dt={key:0},ct=["src"],ut={class:"p-6"},mt={key:0,href:"#",class:"rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"},pt={key:0},yt={key:1},_t={key:2},gt={key:3},ht={class:"mt-4 flex items-center justify-between text-sm"},ft={key:2},zt={__name:"Universities",setup(c){const{universities:d,getUniversities:r,loading:p,page:y,isAll:C,filterUniversities:S}=re(),{continents:v,getContinents:m}=ie(),{countries:b,getCountries:J}=de(),{zones:A,getZones:G}=ue(),{cities:H,getCities:I}=ce(),j=w([]),U=w([]),k=w([]),K=w(null),B=w(!0),F=localStorage.user?JSON.parse(localStorage.user):"";oe(()=>_(this,null,function*(){window.addEventListener("scroll",R),yield r(),yield m(),yield G(),yield J(),yield I()})),ne(()=>_(this,null,function*(){y.value=1,window.removeEventListener("scroll",R)}));const R=o=>_(this,null,function*(){K.value&&K.value.getBoundingClientRect().bottom<window.innerHeight&&B.value&&!C.value&&l.country==""&&l.continent==""&&l.city==""&&l.zone==""&&l.searchKey==""&&(B.value=!1,y.value++,yield r(),B.value=!0)}),O=()=>_(this,null,function*(){l.country!=""||l.continent!=""||l.city!=""||l.zone!=""||l.searchKey!=""?(p.value=1,yield S(L({},l)),p.value=2):(y.value=1,C.value=!1,yield r())}),l=ae({country:"",continent:"",city:"",zone:"",searchKey:""}),P=()=>_(this,null,function*(){k.value=H.value.filter(o=>o.country_id==l.country),l.city=""}),Q=()=>_(this,null,function*(){U.value=b.value.filter(o=>o.zone_id==l.zone),l.country="",l.city="",k.value=[]}),W=()=>_(this,null,function*(){j.value=A.value.filter(o=>o.continent_id==l.continent),l.zone="",l.country="",l.city="",k.value=[],U.value=[]});return(o,i)=>{const V=M("router-link"),X=M("NoContent");return t(),s("div",fe,[a("h1",ve,n(o.$t("univerities")),1),a("div",be,[a("div",ke,[u(F).type=="particular"||u(F).type=="admin"?(t(),T(V,{key:0,to:{name:"add.ads"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:z(()=>[g(u(pe),{class:"h-6 w-6"}),a("p",we,n(o.$tc("add",2))+" "+n(o.$t("ads")),1)]),_:1},8,["to"])):x("",!0)]),a("div",xe,[a("div",$e,[a("label",Ce,n(o.$t("key-words")),1),$(a("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=e=>l.searchKey=e),class:"form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,512),[[le,l.searchKey]])]),a("div",Ue,[a("label",Ve,n(o.$t("continent")),1),$(a("select",{onChange:i[1]||(i[1]=e=>W()),"onUpdate:modelValue":i[2]||(i[2]=e=>l.continent=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[ze,(t(!0),s(h,null,f(u(v),e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Se,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",je,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Ke,n(e.name_es),1)):(t(),s("span",Be,n(e.name_pt),1))],8,Ne))),128))],544),[[N,l.continent]])]),a("div",Fe,[a("label",Re,n(o.$t("zoned")),1),$(a("select",{"onUpdate:modelValue":i[3]||(i[3]=e=>l.zone=e),onChange:i[4]||(i[4]=e=>Q()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[qe,j.value.length!=0?(t(!0),s(h,{key:0},f(j.value,e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Le,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Me,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Te,n(e.name_es),1)):(t(),s("span",Ze,n(e.name_pt),1))],8,Ee))),128)):(t(),s("option",De," Requires "+n(o.$t("continent")),1))],544),[[N,l.zone]])]),a("div",Je,[a("label",Ae,n(o.$t("country")),1),$(a("select",{"onUpdate:modelValue":i[5]||(i[5]=e=>l.country=e),onChange:i[6]||(i[6]=e=>P()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Ge,U.value.length!=0?(t(!0),s(h,{key:0},f(U.value,e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Ie,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Oe,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Pe,n(e.name_es),1)):(t(),s("span",Qe,n(e.name_pt),1))],8,He))),128)):(t(),s("option",We," Requires "+n(o.$t("zoned")),1))],544),[[N,l.country]])]),a("div",Xe,[a("label",Ye,n(o.$t("city")),1),$(a("select",{"onUpdate:modelValue":i[7]||(i[7]=e=>l.city=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[et,k.value.length!=0?(t(!0),s(h,{key:0},f(k.value,e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",st,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",ot,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",nt,n(e.name_es),1)):(t(),s("span",at,n(e.name_pt),1))],8,tt))),128)):(t(),s("option",lt," Requires "+n(o.$t("country")),1))],512),[[N,l.city]])]),a("div",rt,[a("button",{type:"button",onClick:i[8]||(i[8]=e=>O()),class:"w-full rounded-md bg-primary-blue px-4 py-2.5 text-white"},n(o.$t("search")),1)])]),it,u(p)==3?(t(),s("div",dt,[g(D)])):u(d).length!=0?(t(),s("div",{key:1,class:"grid grid-cols-1 gap-8 px-10 py-8 md:grid-cols-2 lg:grid-cols-4",ref_key:"universityContainer",ref:K},[(t(!0),s(h,null,f(u(d),e=>(t(),s("div",{class:"dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md",key:e.id},[g(V,{to:{name:"show.university",params:{id:e.id,slug:e.slug}}},{default:z(()=>[a("img",{class:"h-44 w-full object-cover",src:e.image,alt:""},null,8,ct)]),_:2},1032,["to"]),a("div",ut,[a("div",null,[e.city?(t(),s("a",mt,[o.$i18n.locale=="en"?(t(),s("span",pt,n(e.city.name_en+"-"+e.country.code_iso),1)):o.$i18n.locale=="fr"?(t(),s("span",yt,n(e.city.name_fr+"-"+e.country.code_iso),1)):o.$i18n.locale=="es"?(t(),s("span",_t,n(e.city.name_es+"-"+e.country.code_iso),1)):(t(),s("span",gt,n(e.country.name_pt+"-"+e.country.code_iso),1))])):x("",!0),g(V,{to:{name:"show.university",params:{id:e.id,slug:e.slug}},class:"dark:text-white mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"},{default:z(()=>[Z(n(e.name.length<=30?e.name:e.name.substring(0,27)+"..."),1)]),_:2},1032,["to"])]),a("div",ht,[g(V,{to:{name:"show.university",params:{id:e.id,slug:e.slug}},class:"dark:text-blue-400 text-blue-600 hover:underline"},{default:z(()=>[Z(n(o.$t("read-more")),1)]),_:2},1032,["to"])])])]))),128))],512)):x("",!0),u(p)==1?(t(),s("div",ft,[g(D)])):x("",!0),u(d).length==0&&u(p)!=1?(t(),T(X,{key:3})):x("",!0)])])}}};export{zt as default};
