var ha=Object.defineProperty;var Le=Object.getOwnPropertySymbols;var Sa=Object.prototype.hasOwnProperty,Ta=Object.prototype.propertyIsEnumerable;var ze=(f,d,v)=>d in f?ha(f,d,{enumerable:!0,configurable:!0,writable:!0,value:v}):f[d]=v,y=(f,d)=>{for(var v in d||(d={}))Sa.call(d,v)&&ze(f,v,d[v]);if(Le)for(var v of Le(d))Ta.call(d,v)&&ze(f,v,d[v]);return f};var h=(f,d,v)=>new Promise((we,V)=>{var ke=p=>{try{x(v.next(p))}catch(z){V(z)}},T=p=>{try{x(v.throw(p))}catch(z){V(z)}},x=p=>p.done?we(p.value):Promise.resolve(p.value).then(ke,T);x((v=v.apply(f,d)).next())});import{r as S,a as Ca,o as La,c as za,b as Ba,d as o,e as i,f as a,j as M,F as C,x as L,t as k,k as g,I as w,J as Ea,l as xe,w as he,P as Se,m as Be,K as _,g as Ee}from"./app.59e8d623.js";import{u as Aa}from"./languageServices.732ede50.js";import{u as Ua}from"./statusServices.c45b34fd.js";import{a as Ma,u as Va}from"./businessSizeServices.ff983108.js";import{u as Na}from"./activityAreaServices.ea91f1d7.js";import{u as Wa,a as Oa}from"./workDepartmentServices.ebac1f86.js";import{u as Da}from"./levelStudyServices.5acf4292.js";import{u as qa,a as Ya}from"./yearExperienceServices.71201b64.js";import{u as Ia}from"./contractTypeServices.0a13207d.js";import{u as ja}from"./workModeServices.4a281b3f.js";import{u as $a}from"./legalStatusServices.44dc14c3.js";import{u as Fa,a as Pa}from"./schoolingTypeServices.95d27e41.js";const Ka={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},Ha={class:"z-0 h-full w-full p-4"},Ja={class:"flex justify-between bg-white px-8 py-5"},Ga={class:"text-4xl font-bold text-primary-blue"},Qa={key:0},Ra=["value"],Xa={class:"justify-between lg:flex"},Za={class:"bg-white px-6 pt-8 lg:w-[40%]"},et={key:0},at={class:"mb-4 text-2xl font-semibold"},tt=a("span",{class:"text-primary-blue underline"},"Add ",-1),lt={key:0},st={class:""},rt=a("label",{class:"dark:text-gray-200 text-gray-700"},"French Name",-1),ut={class:""},ot=a("label",{class:"dark:text-gray-200 text-gray-700"},"English Name",-1),it={class:""},vt=a("label",{class:"dark:text-gray-200 text-gray-700"},"Espanol Name",-1),nt={class:""},dt=a("label",{class:"dark:text-gray-200 text-gray-700"},"Portugues Name",-1),ct={class:"mt-6 flex justify-end"},yt={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},bt={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},pt={key:1},gt={class:"mb-4 text-2xl font-semibold"},ft=a("span",{class:"text-primary-blue underline"},"Edit ",-1),mt={key:0},wt={class:""},kt=a("label",{class:"dark:text-gray-200 text-gray-700"},"French Name",-1),_t={class:""},xt=a("label",{class:"dark:text-gray-200 text-gray-700"},"English Name",-1),ht={class:""},St=a("label",{class:"dark:text-gray-200 text-gray-700"},"Espanol Name",-1),Tt={class:""},Ct=a("label",{class:"dark:text-gray-200 text-gray-700"},"Portugues Name",-1),Lt={class:"mt-6 flex justify-end"},zt={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},Bt={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},Et={class:"flex flex-col bg-white pt-8 lg:w-[60%]"},At={class:"overflow-x-auto border"},Ut={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},Mt={class:"p-4"},Vt=a("label",{for:"table-search",class:"sr-only"},"Search",-1),Nt={class:"relative mt-1"},Wt=a("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[a("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),Ot={class:"overflow-hidden"},Dt={class:"dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"},qt=a("thead",{class:"dark:bg-gray-700 bg-gray-100"},[a("tr",null,[a("th",{scope:"col",class:"dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"}," Name "),a("th",{scope:"col",class:"p-4"},[a("span",{class:"sr-only"},"Edit")])])],-1),Yt={key:0,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},It={class:"dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"},jt={class:"whitespace-nowrap py-4 px-6 text-right text-sm font-medium"},$t=["onClick"],Ft=["onClick"],Pt={key:1,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},Kt=a("tr",{class:"dark:hover:bg-gray-700 hover:bg-gray-100"},[a("td",{colspan:"2",class:"dark:text-white w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"},[a("svg",{class:"mx-auto h-16 w-16 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[a("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),a("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1),Ht=[Kt],Jt={key:2,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},Gt={class:"dark:hover:bg-gray-700 hover:bg-gray-100"},Qt={colspan:"2",class:"dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"},Rt={key:0},dl={__name:"OtherTools",setup(f){const{universitySectors:d,getUniversitySectors:v,createUniversitySector:we,destroyUniversitySector:V,updateUniversitySector:ke,errorsUS:T}=Fa(),{schoolingTypes:x,getSchoolingTypes:p,createSchoolingType:z,destroySchoolingType:Ae,updateSchoolingType:Ue,errorsST:N}=Pa(),{languages:B,getLanguages:E,createLanguage:Me,destroyLanguage:Ve,updateLanguage:Ne,errorsLang:A}=Aa(),{status:W,getStatus:O,createStatus:We,updateStatus:Oe,destroyStatus:De,errorsStatus:D}=Ua(),{businessTypes:q,getBusinessTypes:Y,createBusinessType:qe,destroyBusinessType:Ye,updateBusinessType:Ie,errorsBT:I}=Ma(),{businessSizes:j,getBusinessSizes:$,createBusinessSize:je,destroyBusinessSize:$e,updateBusinessSize:Fe,errorsBS:F}=Va(),{activityAreas:P,getActivityAreas:K,createActivityArea:Pe,destroyActivityArea:Ke,updateActivityArea:He,errorsActivy:H}=Na(),{legalStatuses:J,getLegalStatuses:G,createLegalStatus:Je,destroyLegalStatus:Ge,updateLegalStatus:Qe,errorsLegal:Q}=$a(),{sizeCompanies:R,getSizeCompanies:X,createSizeCompany:Re,destroySizeCompany:Xe,updateSizeCompany:Ze,errorsSC:Z}=Wa(),{levelStudies:ee,getLevelStudies:ae,createLevelStudy:ea,destroyLevelStudy:aa,updateLevelStudy:ta,errorsLS:te}=Da(),{offerTypes:le,getOfferTypes:se,createOfferType:la,destroyOfferType:sa,updateOfferType:ra,errorsOT:re}=qa(),{contractTypes:ue,getContractTypes:oe,createContractType:ua,destroyContractType:oa,updateContractType:ia,errorsCT:ie}=Ia(),{workDepartments:ve,getWorkDepartments:ne,createWorkDepartment:va,destroyWorkDepartment:na,updateWorkDepartment:da,errorsWD:de}=Oa(),{workModes:ce,getWorkModes:ye,createWorkMode:ca,destroyWorkMode:ya,updateWorkMode:ba,errorsWM:be}=ja(),{yearExperiences:pe,getYearExperiences:ge,createYearExperience:pa,destroyYearExperience:ga,updateYearExperience:fa,errorsYE:fe}=Ya(),_e=S(""),m=S(0),b=S(0),t=S([]),e=S(""),me=S(!1),n=S(""),U=["Language","Activity Area","Businnes Type","Business Size","Legal Status","Work Department","Year Experience","Work Mode","Level Studies","Offer Type","Contract Type","Size Company","Status","Schooling Type","University Sector"],l=Ca({name_fr:"",name_en:"",name_es:"",name_pt:""});La(()=>h(this,null,function*(){b.value=1,yield E(),e.value=A.value,t.value=B.value,b.value=0}));const ma=()=>h(this,null,function*(){switch(b.value=1,m.value){case 0:yield Me(y({},l)),e.value=A.value,e.value==""&&(yield E(),t.value=B.value);break;case 1:yield Pe(y({},l)),e.value=H.value,e.value==""&&(yield K(),t.value=P.value);break;case 2:yield qe(y({},l)),e.value=I.value,e.value==""&&(yield Y(),t.value=q.value);break;case 3:yield je(y({},l)),e.value=F.value,e.value==""&&(yield $(),t.value=j.value);break;case 4:yield Je(y({},l)),e.value=Q.value,e.value==""&&(yield G(),t.value=J.value);break;case 5:yield va(y({},l)),e.value=de.value,e.value==""&&(yield ne(),t.value=ve.value);break;case 6:yield pa(y({},l)),e.value=fe.value,e.value==""&&(yield ge(),t.value=pe.value);break;case 7:yield ca(y({},l)),e.value=be.value,e.value==""&&(yield ye(),t.value=ce.value);break;case 8:yield ea(y({},l)),e.value=te.value,e.value==""&&(yield ae(),t.value=ee.value);break;case 9:yield la(y({},l)),e.value=re.value,e.value==""&&(yield se(),t.value=le.value);break;case 10:yield ua(y({},l)),e.value=ie.value,e.value==""&&(yield oe(),t.value=ue.value);break;case 11:yield Re(y({},l)),e.value=Z.value,e.value==""&&(yield X(),t.value=R.value);break;case 12:yield We(y({},l)),e.value=D.value,e.value==""&&(yield O(),t.value=W.value);break;case 13:yield z(y({},l)),e.value=N.value,e.value==""&&(yield p(),t.value=x.value);break;case 14:yield we(y({},l)),e.value=T.value,e.value==""&&(yield v(),t.value=d.value);break}l.name_fr="",l.name_en="",l.name_es="",l.name_pt="",b.value=0}),wa=()=>h(this,null,function*(){switch(b.value=1,m.value){case 0:yield Ne(n.value,l),e.value=A.value,e.value==""&&(yield E(),t.value=B.value);break;case 1:yield He(n.value,l),e.value=H.value,e.value==""&&(yield K(),t.value=P.value);break;case 2:yield Ie(n.value,l),e.value=I.value,e.value==""&&(yield Y(),t.value=q.value);break;case 3:yield Fe(n.value,l),e.value=F.value,e.value==""&&(yield $(),t.value=j.value);break;case 4:yield Qe(n.value,l),e.value=Q.value,e.value==""&&(yield G(),t.value=J.value);break;case 5:yield da(n.value,l),e.value=de.value,e.value==""&&(yield ne(),t.value=ve.value);break;case 6:yield fa(n.value,l),e.value=fe.value,e.value==""&&(yield ge(),t.value=pe.value);break;case 7:yield ba(n.value,l),e.value=be.value,e.value==""&&(yield ye(),t.value=ce.value);break;case 8:yield ta(n.value,l),e.value=te.value,e.value==""&&(yield ae(),t.value=ee.value);break;case 9:yield ra(n.value,l),e.value=re.value,e.value==""&&(yield se(),t.value=le.value);break;case 10:yield ia(n.value,l),e.value=ie.value,e.value==""&&(yield oe(),t.value=ue.value);break;case 11:yield Ze(n.value,l),e.value=Z.value,e.value==""&&(yield X(),t.value=R.value);break;case 12:yield Oe(n.value,l),e.value=D.value,e.value==""&&(yield O(),t.value=W.value);break;case 13:yield Ue(n.value,l),e.value=N.value,e.value==""&&(yield p(),t.value=x.value);break;case 14:yield ke(n.value,l),e.value=T.value,e.value==""&&(yield v(),t.value=d.value);break}b.value=0,l.name_fr="",l.name_en="",l.name_es="",l.name_pt="",n.value=0,me.value=!1}),ka=u=>h(this,null,function*(){if(confirm("I you Sure ?")){switch(b.value=1,m.value){case 0:yield Ve(u),e.value=A.value,e.value==""&&(yield E(),t.value=B.value);break;case 1:yield Ke(u),e.value=H.value,e.value==""&&(yield K(),t.value=P.value);break;case 2:yield Ye(u),e.value=I.value,e.value==""&&(yield Y(),t.value=q.value);break;case 3:yield $e(u),e.value=F.value,e.value==""&&(yield $(),t.value=j.value);break;case 4:yield Ge(u),e.value=Q.value,e.value==""&&(yield G(),t.value=J.value);break;case 5:yield na(u),e.value=de.value,e.value==""&&(yield ne(),t.value=ve.value);break;case 6:yield ga(u),e.value=fe.value,e.value==""&&(yield ge(),t.value=pe.value);break;case 7:yield ya(u),e.value=be.value,e.value==""&&(yield ye(),t.value=ce.value);break;case 8:yield aa(u),e.value=te.value,e.value==""&&(yield ae(),t.value=ee.value);break;case 9:yield sa(u),e.value=re.value,e.value==""&&(yield se(),t.value=le.value);break;case 10:yield oa(u),e.value=ie.value,e.value==""&&(yield oe(),t.value=ue.value);break;case 11:yield Xe(u),e.value=Z.value,e.value==""&&(yield X(),t.value=R.value);break;case 12:yield De(u),e.value=D.value,e.value==""&&(yield O(),t.value=W.value);break;case 13:yield Ae(u),e.value=N.value,e.value==""&&(yield p(),t.value=x.value);break;case 14:yield V(u),e.value=T.value,e.value==""&&(yield v(),t.value=d.value);break}b.value=0}}),_a=()=>h(this,null,function*(){switch(b.value=1,m.value){case 0:yield E(),e.value=A.value,e.value==""&&(t.value=B.value);break;case 1:yield K(),e.value=H.value,e.value==""&&(t.value=P.value);break;case 2:yield Y(),e.value=I.value,e.value==""&&(t.value=q.value);break;case 3:yield $(),e.value=F.value,e.value==""&&(t.value=j.value);break;case 4:yield G(),e.value=Q.value,e.value==""&&(t.value=J.value);break;case 5:yield ne(),e.value=de.value,e.value==""&&(t.value=ve.value);break;case 6:yield ge(),e.value=fe.value,e.value==""&&(t.value=pe.value);break;case 7:yield ye(),e.value=be.value,e.value==""&&(t.value=ce.value);break;case 8:yield ae(),e.value=te.value,e.value==""&&(t.value=ee.value);break;case 9:yield se(),e.value=re.value,e.value==""&&(t.value=le.value);break;case 10:yield oe(),e.value=ie.value,e.value==""&&(t.value=ue.value);break;case 11:yield X(),e.value=Z.value,e.value==""&&(t.value=R.value);break;case 12:yield O(),e.value=D.value,e.value==""&&(t.value=W.value);break;case 13:yield p(),e.value=N.value,e.value==""&&(t.value=x.value);break;case 14:yield v(),e.value=T.value,e.value==""&&(t.value=d.value);break}l.name_fr="",l.name_en="",l.name_es="",l.name_pt="",n.value=0,me.value=!1,b.value=0}),xa=u=>h(this,null,function*(){me.value=!0,n.value=u.id,l.name_en=u.name_en,l.name_es=u.name_es,l.name_pt=u.name_pt,l.name_fr=u.name_fr}),Te=za(()=>t.value.filter(u=>u.name_en.toLowerCase().includes(_e.value.toLowerCase())));return(u,r)=>{const Ce=Ba("Spin");return o(),i("div",Ka,[a("div",Ha,[a("div",Ja,[a("h1",Ga,[M(" Other - "),(o(),i(C,null,L(U,(s,c)=>a("span",{key:c},[m.value===c?(o(),i("span",Qa,k(s),1)):g("",!0)])),64))]),a("div",null,[w(a("select",{onChange:r[0]||(r[0]=s=>_a()),"onUpdate:modelValue":r[1]||(r[1]=s=>m.value=s),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(o(),i(C,null,L(U,(s,c)=>a("option",{key:c,value:c},k(s),9,Ra)),64))],544),[[Ea,m.value]])])]),a("div",Xa,[a("div",Za,[me.value?(o(),i("div",pt,[a("h1",gt,[ft,(o(),i(C,null,L(U,(s,c)=>a("span",{key:c},[m.value===c?(o(),i("span",mt,k(s),1)):g("",!0)])),64))]),e.value!=""?(o(),xe(Se,{key:0},{default:he(()=>[M(k(e.value),1)]),_:1})):g("",!0),a("form",{class:"px-8",onSubmit:r[11]||(r[11]=Be(s=>wa(),["prevent"]))},[a("div",wt,[kt,w(a("input",{required:"","onUpdate:modelValue":r[7]||(r[7]=s=>l.name_fr=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,l.name_fr]])]),a("div",_t,[xt,w(a("input",{required:"","onUpdate:modelValue":r[8]||(r[8]=s=>l.name_en=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,l.name_en]])]),a("div",ht,[St,w(a("input",{required:"","onUpdate:modelValue":r[9]||(r[9]=s=>l.name_es=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,l.name_es]])]),a("div",Tt,[Ct,w(a("input",{required:"","onUpdate:modelValue":r[10]||(r[10]=s=>l.name_pt=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,l.name_pt]])]),a("div",Lt,[b.value==0?(o(),i("button",zt," Save ")):g("",!0),b.value==1?(o(),i("button",Bt,[Ee(Ce,{size:"small"})])):g("",!0)])],32)])):(o(),i("div",et,[a("h1",at,[tt,(o(),i(C,null,L(U,(s,c)=>a("span",{key:c},[m.value===c?(o(),i("span",lt,k(s),1)):g("",!0)])),64))]),e.value!=""?(o(),xe(Se,{key:0},{default:he(()=>[M(k(e.value),1)]),_:1})):g("",!0),a("form",{class:"px-8",onSubmit:r[6]||(r[6]=Be(s=>ma(),["prevent"]))},[a("div",st,[rt,w(a("input",{required:"","onUpdate:modelValue":r[2]||(r[2]=s=>l.name_fr=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,l.name_fr]])]),a("div",ut,[ot,w(a("input",{required:"","onUpdate:modelValue":r[3]||(r[3]=s=>l.name_en=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,l.name_en]])]),a("div",it,[vt,w(a("input",{required:"","onUpdate:modelValue":r[4]||(r[4]=s=>l.name_es=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,l.name_es]])]),a("div",nt,[dt,w(a("input",{required:"","onUpdate:modelValue":r[5]||(r[5]=s=>l.name_pt=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,l.name_pt]])]),a("div",ct,[b.value==0?(o(),i("button",yt," Save ")):g("",!0),b.value==1?(o(),i("button",bt,[Ee(Ce,{size:"small"})])):g("",!0)])],32)]))]),a("div",Et,[a("div",At,[a("div",Ut,[a("div",Mt,[Vt,a("div",Nt,[Wt,w(a("input",{"onUpdate:modelValue":r[12]||(r[12]=s=>_e.value=s),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[_,_e.value]])])]),e.value!=""?(o(),xe(Se,{key:0},{default:he(()=>[M(k(e.value),1)]),_:1})):g("",!0),a("div",Ot,[a("table",Dt,[qt,Te.value.length!=0?(o(),i("tbody",Yt,[(o(!0),i(C,null,L(Te.value,s=>(o(),i("tr",{key:s.id,class:"dark:hover:bg-gray-700 hover:bg-gray-100"},[a("td",It,k(s.name_en),1),a("td",jt,[a("a",{onClick:c=>xa(s),href:"#",class:"dark:text-blue-500 text-primary-blue hover:underline"},"Edit",8,$t),a("a",{onClick:c=>ka(s.id),href:"#",class:"dark:text-blue-500 ml-3 text-red-600 hover:underline"},"Delete",8,Ft)])]))),128))])):b.value==1?(o(),i("tbody",Pt,Ht)):(o(),i("tbody",Jt,[a("tr",Gt,[a("td",Qt,[M(" NO "),(o(),i(C,null,L(U,(s,c)=>a("span",{key:c},[m.value===c?(o(),i("span",Rt,k(s),1)):g("",!0)])),64))])])]))])])])])])])])])}}};export{dl as default};
