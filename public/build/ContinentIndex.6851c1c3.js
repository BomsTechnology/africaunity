import{o as k,r as l,c as h,d as C,e,f as n,w as r,g as a,i as E,K as N,k as V,j as f,t as j,P as B,m as D,b as p}from"./app.1a4e1017.js";import{u as T}from"./continentServices.f9c47ce6.js";import{r as I}from"./PlusCircleIcon.874dacff.js";import{r as M}from"./TrashIcon.f2b32d03.js";const S={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},z={class:"z-0 h-full w-full p-4"},A={class:"flex justify-between bg-white px-8 py-5"},U=e("h1",{class:"text-4xl font-bold text-primary-blue"},"Continent",-1),$=e("p",{class:"text-base leading-4"},"Add Continent",-1),F={class:"flex flex-col bg-white pt-8"},K={class:"overflow-x-auto shadow-lg"},O={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},P={class:"items-center justify-between p-4 lg:flex"},q={class:"relative mt-1"},G=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),H={class:""},J=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),L=f("Edit"),Z={__name:"ContinentIndex",setup(Q){const{continents:v,getContinents:u,destroyContinent:x,loading:_,errors:i}=T();k(async()=>{await u()});const o=l([]),b=async()=>{if(o.value.length!=0){const c=l([]);o.value.forEach(t=>{c.value.push(t.id)}),confirm("I you Sure ?")&&(await x(c.value),i.value==""&&(await u(),o.value=[]))}},g=l("name_en"),d=l(""),y=[{text:"Name",value:"name_en"},{text:"ACTION",value:"id"}];return(c,t)=>{const m=p("router-link"),w=p("EasyDataTable");return h(),C("div",S,[e("div",z,[e("div",A,[U,n(m,{to:{name:"admin.continent.create"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:r(()=>[n(a(I),{class:"h-6 w-6"}),$]),_:1},8,["to"])]),e("div",F,[e("div",K,[e("div",O,[e("div",P,[e("div",q,[G,E(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[N,d.value]])]),e("div",H,[e("button",{type:"button",title:"delete",onClick:t[1]||(t[1]=s=>b()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[n(a(M),{class:"h-6 w-6"}),J])])]),a(i)!=""?(h(),V(B,{key:0},{default:r(()=>[f(j(a(i)),1)]),_:1})):D("",!0),n(w,{"items-selected":o.value,"onUpdate:items-selected":t[2]||(t[2]=s=>o.value=s),headers:y,items:a(v),alternating:"","search-field":g.value,"search-value":d.value,"show-index":"","buttons-pagination":"",loading:a(_)},{"item-id":r(s=>[e("div",null,[n(m,{to:{name:"admin.continent.edit",params:{id:s.id}},href:"#",class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:r(()=>[L]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{Z as default};
