var h=(n,d,r)=>new Promise((c,p)=>{var g=l=>{try{a(r.next(l))}catch(u){p(u)}},x=l=>{try{a(r.throw(l))}catch(u){p(u)}},a=l=>l.done?c(l.value):Promise.resolve(l.value).then(g,x);a((r=r.apply(n,d)).next())});import{r as v,o as j,B as I,b as k,d as C,e as T,f as e,t as _,g as o,w as i,h as y,I as M,K as N,k as S,j as w}from"./app.59e8d623.js";import{u as B}from"./universityServices.322bd2df.js";import{r as D}from"./PlusCircleIcon.cb1c78f8.js";import{r as E}from"./TrashIcon.564fd26b.js";const z={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},A={class:"z-0 h-full w-full p-4"},H={class:"flex justify-between bg-white px-8 py-5"},L={class:"text-4xl font-bold capitalize text-primary-blue"},$={class:"text-base leading-4"},q={class:"flex flex-col bg-white pt-8"},F={class:"overflow-x-auto shadow-lg"},K={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},O={class:"items-center justify-between p-4 lg:flex"},G={class:"relative mt-1"},J=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),P={class:""},Q=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),R={class:"py-2"},W=["src"],X=["innerHTML"],ae={__name:"UniversityIndex",props:{type:{required:!0,type:String}},setup(n){const d=n,{universities:r,getAllUniversities:c,destroyUniversity:p,loading:g,errors:x}=B();v("");const a=v([]);j(()=>h(this,null,function*(){yield c(d.type)}));const l=b=>h(this,null,function*(){if(a.value.length!=0){const s=v([]);a.value.forEach(m=>{s.value.push(m.id)}),confirm("I you Sure ?")&&(yield p(s.value),x.value==""&&(yield c(d.type),a.value=[]))}});I(d,(b,s)=>h(this,null,function*(){yield c(b.type)}));const u=v("name"),f=v(""),U=[{text:"Image",value:"image"},{text:"Type",value:"type"},{text:"Name",value:"name"},{text:"Continent",value:"continent.name_en"},{text:"Country",value:"country.name_en"},{text:"City",value:"city.name_en"},{text:"ACTION",value:"id"}];return(b,s)=>{const m=k("router-link"),V=k("EasyDataTable");return C(),T("div",z,[e("div",A,[e("div",H,[e("h1",L,_(n.type),1),o(m,{to:{name:"admin.university.create",params:{type:n.type}},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:i(()=>[o(y(D),{class:"h-6 w-6"}),e("p",$,"Add "+_(n.type),1)]),_:1},8,["to"])]),e("div",q,[e("div",F,[e("div",K,[e("div",O,[e("div",G,[J,M(e("input",{type:"text",id:"table-search","onUpdate:modelValue":s[0]||(s[0]=t=>f.value=t),class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[N,f.value]])]),e("div",P,[e("button",{type:"button",title:"delete",onClick:s[1]||(s[1]=t=>l()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[o(y(E),{class:"h-6 w-6"}),Q])])]),o(V,{"items-selected":a.value,"onUpdate:itemsSelected":s[2]||(s[2]=t=>a.value=t),headers:U,items:y(r),alternating:"","search-field":u.value,"search-value":f.value,"show-index":"","buttons-pagination":"",loading:y(g)},{"item-image":i(t=>[e("div",R,[t.image?(C(),T("img",{key:0,src:t.image,alt:"",class:"h-10 w-10 rounded-full object-cover"},null,8,W)):S("",!0)])]),"item-name":i(t=>[w(_(t.name.length<=30?t.name:t.name.substring(0,29)+"..."),1)]),expand:i(t=>[e("div",{class:"p-4",innerHTML:t.description},null,8,X)]),"item-id":i(t=>[e("div",null,[o(m,{to:{name:"admin.university.edit",params:{id:t.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:i(()=>[w("Edit")]),_:2},1032,["to"]),o(m,{to:{name:"show.university",params:{id:t.id,slug:t.slug}},class:"dark:text-blue-500 ml-3 text-indigo-600 hover:underline"},{default:i(()=>[w(" view ")]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{ae as default};