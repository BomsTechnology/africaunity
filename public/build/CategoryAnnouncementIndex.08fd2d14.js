import{o as C,r as l,d as h,e as A,f as e,g as r,w as n,h as a,I as E,K as N,l as V,j as g,t as j,k as B,b as u}from"./app.4a599ac6.js";import{u as D}from"./categoryAnnouncementServices.5b96b107.js";import{r as I}from"./PlusCircleIcon.f06913c1.js";import{r as T}from"./TrashIcon.2cb27c3c.js";const M={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},S={class:"z-0 h-full w-full p-4"},z={class:"flex justify-between bg-white px-8 py-5"},U=e("h1",{class:"text-4xl font-bold text-primary-blue"}," Category Announcement ",-1),$=e("p",{class:"text-base leading-4"},"Add Category",-1),F={class:"flex flex-col bg-white pt-8"},K={class:"overflow-x-auto shadow-lg"},O={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},q={class:"items-center justify-between p-4 lg:flex"},G={class:"relative mt-1"},H=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),J={class:""},L=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),P=g("Edit"),Z={__name:"CategoryAnnouncementIndex",setup(Q){const{categoryAnnouncements:f,getCategoryAnnouncements:m,destroyCategoryAnnouncement:v,loading:x,errors:i}=D();C(async()=>{await m()});const o=l([]),y=async()=>{if(o.value.length!=0){const c=l([]);o.value.forEach(t=>{c.value.push(t.id)}),confirm("I you Sure ?")&&(await v(c.value),i.value==""&&(await m(),o.value=[]))}},_=l("name"),d=l(""),b=[{text:"Name",value:"name"},{text:"ACTION",value:"id"}];return(c,t)=>{const p=u("router-link"),w=u("Error"),k=u("EasyDataTable");return h(),A("div",M,[e("div",S,[e("div",z,[U,r(p,{to:{name:"admin.category.create"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:n(()=>[r(a(I),{class:"h-6 w-6"}),$]),_:1},8,["to"])]),e("div",F,[e("div",K,[e("div",O,[e("div",q,[e("div",G,[H,E(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[N,d.value]])]),e("div",J,[e("button",{type:"button",title:"delete",onClick:t[1]||(t[1]=s=>y()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[r(a(T),{class:"h-6 w-6"}),L])])]),a(i)!=""?(h(),V(w,{key:0},{default:n(()=>[g(j(a(i)),1)]),_:1})):B("",!0),r(k,{"items-selected":o.value,"onUpdate:items-selected":t[2]||(t[2]=s=>o.value=s),headers:b,items:a(f),alternating:"","search-field":_.value,"search-value":d.value,"show-index":"","buttons-pagination":"",loading:a(x)},{"item-id":n(s=>[e("div",null,[r(p,{to:{name:"admin.category.edit",params:{id:s.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:n(()=>[P]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{Z as default};
