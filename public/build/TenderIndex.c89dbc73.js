var g=(y,l,n)=>new Promise((p,h)=>{var x=s=>{try{d(n.next(s))}catch(o){h(o)}},f=s=>{try{d(n.throw(s))}catch(o){h(o)}},d=s=>s.done?p(s.value):Promise.resolve(s.value).then(x,f);d((n=n.apply(y,l)).next())});import{r as v,o as E,b as w,d as b,e as k,f as t,g as i,w as r,h as u,I as V,K as B,l as D,j as _,t as m}from"./app.59e8d623.js";import{u as I}from"./tenderServices.da754325.js";import{r as N}from"./PlusCircleIcon.cb1c78f8.js";import{r as S}from"./TrashIcon.564fd26b.js";import{r as z}from"./BuildingOffice2Icon.228afd2b.js";const A={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},M={class:"z-0 h-full w-full p-4"},$={class:"flex justify-between bg-white px-8 py-5"},U=t("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Tender ",-1),F=t("p",{class:"text-base leading-4"},"Add Tender",-1),K={class:"flex flex-col bg-white pt-8"},L={class:"overflow-x-auto shadow-lg"},O={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},P={class:"items-center justify-between p-4 lg:flex"},q={class:"relative mt-1"},G=t("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[t("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),H={class:""},J=t("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),Q={class:"py-2"},R=["src"],se={__name:"TenderIndex",setup(y){const l=v([]),{tenders:n,getTenders:p,destroyTender:h,loading:x,errors:f}=I();E(()=>g(this,null,function*(){yield p()}));const d=C=>g(this,null,function*(){if(l.value.length!=0){const a=v([]);l.value.forEach(c=>{a.value.push(c.id)}),confirm("I you Sure ?")&&(yield h(a.value),f.value==""&&(yield p(),l.value=[]))}}),s=v("title"),o=v(""),T=[{text:"Company Logo",value:"company_logo"},{text:"Title",value:"title"},{text:"Author",value:"user.firstname"},{text:"Company Name",value:"company_name"},{text:"Company Email",value:"company_email"},{text:"Price",value:"min_price"},{text:"ACTION",value:"id"}];return(C,a)=>{const c=w("router-link"),j=w("EasyDataTable");return b(),k("div",A,[t("div",M,[t("div",$,[U,i(c,{to:{name:"admin.tender.create"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:r(()=>[i(u(N),{class:"h-6 w-6"}),F]),_:1},8,["to"])]),t("div",K,[t("div",L,[t("div",O,[t("div",P,[t("div",q,[G,V(t("input",{type:"text",id:"table-search","onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[B,o.value]])]),t("div",H,[t("button",{type:"button",title:"delete",onClick:a[1]||(a[1]=e=>d()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[i(u(S),{class:"h-6 w-6"}),J])])]),i(j,{"items-selected":l.value,"onUpdate:itemsSelected":a[2]||(a[2]=e=>l.value=e),headers:T,items:u(n),alternating:"","search-field":s.value,"search-value":o.value,"show-index":"","buttons-pagination":"",loading:u(x)},{"item-company_logo":r(e=>[t("div",Q,[e.company_logo?(b(),k("img",{key:0,src:e.company_logo,alt:"",class:"h-12 w-12 rounded-full object-cover"},null,8,R)):(b(),D(u(z),{key:1,class:"h-12 w-12"}))])]),"item-title":r(e=>[_(m(e.title.length<=30?e.title:e.title.substring(0,29)+"..."),1)]),"item-min_price":r(e=>[_(m(e.min_price)+" "+m(e.currency.symbol)+" - "+m(e.max_price)+" "+m(e.currency.symbol),1)]),"item-id":r(e=>[t("div",null,[i(c,{to:{name:"admin.tender.edit",params:{id:e.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:r(()=>[_("Edit")]),_:2},1032,["to"]),i(c,{to:{name:"show.job",params:{id:e.id,slug:e.slug}},class:"dark:text-blue-500 ml-3 text-red-600 hover:underline"},{default:r(()=>[_(" View ")]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{se as default};
