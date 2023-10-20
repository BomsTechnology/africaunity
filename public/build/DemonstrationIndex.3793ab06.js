var x=(y,l,r)=>new Promise((v,u)=>{var m=s=>{try{d(r.next(s))}catch(o){u(o)}},_=s=>{try{d(r.throw(s))}catch(o){u(o)}},d=s=>s.done?v(s.value):Promise.resolve(s.value).then(m,_);d((r=r.apply(y,l)).next())});import{G as j,r as p,o as I,b as w,d as b,e as k,f as t,g as i,w as n,h as c,I as B,K as C,l as S,j as h,t as D}from"./app.59e8d623.js";import{u as V}from"./demonstrationServices.7bddced6.js";import{r as z}from"./PlusCircleIcon.cb1c78f8.js";import{r as A}from"./TrashIcon.564fd26b.js";import{r as M}from"./CalendarIcon.26da48f1.js";const N={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},$={class:"z-0 h-full w-full p-4"},U={class:"flex justify-between bg-white px-8 py-5"},F=t("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Events ",-1),G=t("p",{class:"text-base leading-4"},"Add Event",-1),K={class:"flex flex-col bg-white pt-8"},O={class:"overflow-x-auto shadow-lg"},P={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},R={class:"items-center justify-between p-4 lg:flex"},q={class:"relative mt-1"},H=t("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[t("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),J={class:""},L=t("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),Q={class:"py-2"},W=["src"],ae={__name:"DemonstrationIndex",setup(y){j();const l=p([]),{demonstrations:r,loading:v,destroyDemonstration:u,getDemonstrations:m,errors:_}=V();I(function(){return x(this,null,function*(){yield m()})});const d=()=>x(this,null,function*(){if(l.value.length!=0){const g=p([]);l.value.forEach(a=>{g.value.push(a.id)}),confirm("I you Sure ?")&&(yield u(g.value),_.value==""&&(yield m(),l.value=[]))}}),s=p("title"),o=p(""),E=[{text:"Image",value:"image"},{text:"Title",value:"title"},{text:"Author",value:"user.firstname"},{text:"Type",value:"demonstration_type.name_en"},{text:"ACTION",value:"id"}];return(g,a)=>{const f=w("router-link"),T=w("EasyDataTable");return b(),k("div",N,[t("div",$,[t("div",U,[F,i(f,{to:{name:"admin.event.create"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:n(()=>[i(c(z),{class:"h-6 w-6"}),G]),_:1},8,["to"])]),t("div",K,[t("div",O,[t("div",P,[t("div",R,[t("div",q,[H,B(t("input",{type:"text",id:"table-search","onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[C,o.value]])]),t("div",J,[t("button",{type:"button",title:"delete",onClick:a[1]||(a[1]=e=>d()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[i(c(A),{class:"h-6 w-6"}),L])])]),i(T,{"items-selected":l.value,"onUpdate:itemsSelected":a[2]||(a[2]=e=>l.value=e),headers:E,items:c(r),alternating:"","search-field":s.value,"search-value":o.value,"show-index":"","buttons-pagination":"",loading:c(v)},{"item-image":n(e=>[t("div",Q,[e.image?(b(),k("img",{key:0,src:e.image,alt:"",class:"h-10 w-10 rounded-full object-cover"},null,8,W)):(b(),S(c(M),{key:1,class:"h-10 text-gray-600"}))])]),"item-title":n(e=>[h(D(e.title.length<=30?e.title:e.title.substring(0,29)+"..."),1)]),"item-demonstration_type.name_en":n(e=>[h(D(e.demonstration_type.name_en<=30?e.demonstration_type.name_en:e.demonstration_type.name_en.substring(0,29)+"..."),1)]),"item-id":n(e=>[t("div",null,[i(f,{to:{name:"admin.event.edit",params:{id:e.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:n(()=>[h("Edit")]),_:2},1032,["to"]),i(f,{to:{name:"show.events",params:{id:e.id,slug:e.slug}},class:"dark:text-blue-500 ml-3 text-indigo-600 hover:underline"},{default:n(()=>[h(" view ")]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{ae as default};