import{r as o,n as f,o as T,c as i,d as y,e,i as b,J as B,K as M,f as x,g as d,w as v,k as _,t as z,m as D,b as w}from"./app.1a4e1017.js";import{r as V}from"./TrashIcon.f2b32d03.js";import{r as C}from"./UserCircleIcon.9ac3c994.js";function N(){const c=o([]),u=o([]),l=o(""),a=o(0);return{reportings:c,reporting:u,errors:l,loading:a,getReportings:async()=>{l.value="",a.value=!0;let r=await f.get("/api/reports",{headers:{Authorization:`Bearer ${localStorage.token}`}});c.value=r.data.data,a.value=!1},destroyReporting:async r=>{l.value="";try{return a.value=!0,await f.delete(`/api/reports/${JSON.stringify(r)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),a.value=!1,!0}catch{a.value=0,l.value="Impossible de supprimer ce reporting"}}}}const $={class:"relative h-auto min-h-screen w-full bg-white xl:mt-0 xl:p-4"},j={class:"z-0 h-full w-full p-4"},U=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Reporting ")],-1),A={class:"items-center justify-between lg:flex"},I={class:"items-end space-x-2 p-4 lg:flex"},O=e("label",{for:""},"Filter by:",-1),F=e("option",{value:"firstname"},"Name",-1),H=e("option",{value:"email"},"Email",-1),J=[F,H],L={class:"relative mt-1"},P=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),K={class:""},q=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),G=["src"],Q={class:"block"},W=["innerHTML"],ee={__name:"Reporting",setup(c){const{reportings:u,getReportings:l,destroyReporting:a,loading:h,errors:m}=N(),r=o([]),n=o("firstname"),p=o("");T(async()=>{await l()});const k=async()=>{if(r.value.length!=0){const g=o([]);r.value.forEach(s=>{g.value.push(s.id)}),confirm("I you Sure ?")&&(await a(g.value),m.value==""&&(await l(),r.value=[]))}},R=[{text:"USER REPORT",value:"user"},{text:"Type",value:"type"},{text:"REPORTED",value:"reported"}];return(g,s)=>{const E=w("router-link"),S=w("EasyDataTable");return i(),y("div",$,[e("div",j,[U,e("div",A,[e("div",I,[e("div",null,[O,b(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>n.value=t),class:"form-select mt-2 block w-32 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},J,512),[[B,n.value]])]),e("div",L,[P,b(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>p.value=t),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[M,p.value]])])]),e("div",K,[e("button",{type:"button",title:"delete",onClick:s[2]||(s[2]=t=>k()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[x(d(V),{class:"h-6 w-6"}),q])])]),x(S,{"items-selected":r.value,"onUpdate:items-selected":s[3]||(s[3]=t=>r.value=t),headers:R,items:d(u),alternating:"","search-field":n.value,"search-value":p.value,"show-index":"","buttons-pagination":"",loading:d(h)},{"item-user":v(t=>[t.user?(i(),_(E,{key:0,to:{name:"compte",params:{slug:t.user.slug,id:t.user.id}},class:"flex items-center gap-2 py-3 text-indigo-600 hover:underline"},{default:v(()=>[t.user.avatar?(i(),y("img",{key:0,src:t.user.avatar,alt:"",class:"h-12 w-12 rounded-full object-cover"},null,8,G)):(i(),_(d(C),{key:1,class:"h-12 w-12 text-gray-700"})),e("span",Q,z(t.user.firstname),1)]),_:2},1032,["to"])):D("",!0)]),expand:v(t=>[e("div",{class:"p-4",innerHTML:t.content},null,8,W)]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])}}};export{ee as default};
