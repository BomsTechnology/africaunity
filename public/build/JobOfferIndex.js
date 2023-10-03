var x=(y,l,i)=>new Promise((m,p)=>{var v=s=>{try{d(i.next(s))}catch(o){p(o)}},_=s=>{try{d(i.throw(s))}catch(o){p(o)}},d=s=>s.done?m(s.value):Promise.resolve(s.value).then(v,_);d((i=i.apply(y,l)).next())});import{r as b,o as J,b as w,d as g,e as k,f as t,g as n,w as r,h as u,I as E,K as T,l as V,j as h,t as f}from"./app.js";import{u as B}from"./jobOfferServices.js";import{r as D}from"./PlusCircleIcon.js";import{r as I}from"./TrashIcon.js";import{r as N}from"./BuildingOffice2Icon.js";const S={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},z={class:"z-0 h-full w-full p-4"},A={class:"flex justify-between bg-white px-8 py-5"},M=t("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," JobOffer ",-1),$=t("p",{class:"text-base leading-4"},"Add JobOffer",-1),U={class:"flex flex-col bg-white pt-8"},F={class:"overflow-x-auto shadow-lg"},K={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},L={class:"items-center justify-between p-4 lg:flex"},P={class:"relative mt-1"},q=t("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[t("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),G={class:""},H=t("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),Q={class:"py-2"},R=["src"],se={__name:"JobOfferIndex",setup(y){const l=b([]),{jobOffers:i,getJobOffers:m,destroyJobOffer:p,loading:v,errors:_}=B();J(()=>x(this,null,function*(){yield m()}));const d=j=>x(this,null,function*(){if(l.value.length!=0){const a=b([]);l.value.forEach(c=>{a.value.push(c.id)}),confirm("I you Sure ?")&&(yield p(a.value),_.value==""&&(yield m(),l.value=[]))}}),s=b("title"),o=b(""),O=[{text:"Company Logo",value:"company_logo"},{text:"Title",value:"title"},{text:"Author",value:"user.firstname"},{text:"Company Name",value:"company_name"},{text:"Company Email",value:"company_email"},{text:"Price",value:"min_price"},{text:"ACTION",value:"id"}];return(j,a)=>{const c=w("router-link"),C=w("EasyDataTable");return g(),k("div",S,[t("div",z,[t("div",A,[M,n(c,{to:{name:"admin.jobOffer.create"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:r(()=>[n(u(D),{class:"h-6 w-6"}),$]),_:1},8,["to"])]),t("div",U,[t("div",F,[t("div",K,[t("div",L,[t("div",P,[q,E(t("input",{type:"text",id:"table-search","onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[T,o.value]])]),t("div",G,[t("button",{type:"button",title:"delete",onClick:a[1]||(a[1]=e=>d()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[n(u(I),{class:"h-6 w-6"}),H])])]),n(C,{"items-selected":l.value,"onUpdate:itemsSelected":a[2]||(a[2]=e=>l.value=e),headers:O,items:u(i),alternating:"","search-field":s.value,"search-value":o.value,"show-index":"","buttons-pagination":"",loading:u(v)},{"item-company_logo":r(e=>[t("div",Q,[e.company_logo?(g(),k("img",{key:0,src:e.company_logo,alt:"",class:"h-12 w-12 rounded-full object-cover"},null,8,R)):(g(),V(u(N),{key:1,class:"h-12 w-12"}))])]),"item-title":r(e=>[h(f(e.title.length<=30?e.title:e.title.substring(0,29)+"..."),1)]),"item-min_price":r(e=>[h(f(e.min_price)+" "+f(e.currency.symbol)+" - "+f(e.max_price)+" "+f(e.currency.symbol),1)]),"item-id":r(e=>[t("div",null,[n(c,{to:{name:"admin.jobOffer.edit",params:{id:e.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:r(()=>[h("Edit")]),_:2},1032,["to"]),n(c,{to:{name:"show.job",params:{id:e.id,slug:e.slug}},class:"dark:text-blue-500 ml-3 text-red-600 hover:underline"},{default:r(()=>[h(" View ")]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{se as default};
