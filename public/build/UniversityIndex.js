var x=(_,h,i)=>new Promise((p,v)=>{var g=s=>{try{d(i.next(s))}catch(n){v(n)}},l=s=>{try{d(i.throw(s))}catch(n){v(n)}},d=s=>s.done?p(s.value):Promise.resolve(s.value).then(g,l);d((i=i.apply(_,h)).next())});import{r as u,o as T,b,d as y,e as w,f as e,g as o,w as r,h as m,I as j,K as I,k as M,j as f,t as N}from"./app.js";import{u as V}from"./universityServices.js";import{r as D}from"./PlusCircleIcon.js";import{r as E}from"./TrashIcon.js";const S={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},z={class:"z-0 h-full w-full p-4"},A={class:"flex justify-between bg-white px-8 py-5"},B=e("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," University ",-1),H=e("p",{class:"text-base leading-4"},"Add University",-1),L={class:"flex flex-col bg-white pt-8"},$={class:"overflow-x-auto shadow-lg"},F={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},K={class:"items-center justify-between p-4 lg:flex"},O={class:"relative mt-1"},q=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),G={class:""},J=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),P={class:"py-2"},Q=["src"],R=["innerHTML"],te={__name:"UniversityIndex",setup(_){const{universities:h,getAllUniversities:i,destroyUniversity:p,loading:v,errors:g}=V();u("");const l=u([]);T(()=>x(this,null,function*(){yield i()}));const d=C=>x(this,null,function*(){if(l.value.length!=0){const a=u([]);l.value.forEach(c=>{a.value.push(c.id)}),confirm("I you Sure ?")&&(yield p(a.value),g.value==""&&(yield i(),l.value=[]))}}),s=u("name"),n=u(""),k=[{text:"Image",value:"image"},{text:"Name",value:"name"},{text:"Continent",value:"continent.name_en"},{text:"Country",value:"country.name_en"},{text:"City",value:"city.name_en"},{text:"ACTION",value:"id"}];return(C,a)=>{const c=b("router-link"),U=b("EasyDataTable");return y(),w("div",S,[e("div",z,[e("div",A,[B,o(c,{to:{name:"admin.university.create"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:r(()=>[o(m(D),{class:"h-6 w-6"}),H]),_:1},8,["to"])]),e("div",L,[e("div",$,[e("div",F,[e("div",K,[e("div",O,[q,j(e("input",{type:"text",id:"table-search","onUpdate:modelValue":a[0]||(a[0]=t=>n.value=t),class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[I,n.value]])]),e("div",G,[e("button",{type:"button",title:"delete",onClick:a[1]||(a[1]=t=>d()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[o(m(E),{class:"h-6 w-6"}),J])])]),o(U,{"items-selected":l.value,"onUpdate:itemsSelected":a[2]||(a[2]=t=>l.value=t),headers:k,items:m(h),alternating:"","search-field":s.value,"search-value":n.value,"show-index":"","buttons-pagination":"",loading:m(v)},{"item-image":r(t=>[e("div",P,[t.image?(y(),w("img",{key:0,src:t.image,alt:"",class:"h-10 w-10 rounded-full object-cover"},null,8,Q)):M("",!0)])]),"item-name":r(t=>[f(N(t.name.length<=30?t.name:t.name.substring(0,29)+"..."),1)]),expand:r(t=>[e("div",{class:"p-4",innerHTML:t.description},null,8,R)]),"item-id":r(t=>[e("div",null,[o(c,{to:{name:"admin.university.edit",params:{id:t.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:r(()=>[f("Edit")]),_:2},1032,["to"]),o(c,{to:{name:"show.university",params:{id:t.id,slug:t.slug}},class:"dark:text-blue-500 ml-3 text-indigo-600 hover:underline"},{default:r(()=>[f(" view ")]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{te as default};
