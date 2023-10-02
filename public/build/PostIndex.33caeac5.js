import{r as d,o as V,B as z,d as v,e as x,f as e,t as m,g as a,w as l,h as c,I as A,K as B,k as D,j as g,G as E,b as f}from"./app.4a599ac6.js";import{u as N}from"./postServices.6fe0f2dd.js";import{r as S}from"./PlusCircleIcon.f06913c1.js";import{r as M}from"./TrashIcon.2cb27c3c.js";const U={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},$={class:"z-0 h-full w-full p-4"},q={class:"flex justify-between bg-white px-8 py-5"},F={class:"text-4xl font-bold capitalize text-primary-blue"},G={class:"text-base leading-4"},K={class:"flex flex-col bg-white pt-8"},L={class:"overflow-x-auto shadow-lg"},O={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},R={class:"items-center justify-between p-4 lg:flex"},Z={class:"relative mt-1"},H=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),J={class:""},Q=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),W={class:"py-2"},X=["src"],Y=g("Edit"),ee=g(" view "),oe={__name:"PostIndex",props:{type:{required:!0,type:String}},setup(o){const n=o,y=E(),{posts:b,getPostsAll:u,destroyPost:_,loading:w,errors:k}=N(),r=d([]),C=["article","propau"];V(async()=>{C.includes(n.type)||y.push({name:"admin.dash"}),await u(n.type)}),z(n,async(i,s)=>{await u(i.type)});const j=async()=>{if(r.value.length!=0){const i=d([]);r.value.forEach(s=>{i.value.push(s.id)}),confirm("I you Sure ?")&&(await _(i.value),k.value==""&&(await u(n.type),r.value=[]))}},I=d("title"),p=d(""),P=[{text:"Image",value:"image"},{text:"Title",value:"title"},{text:"Author",value:"user.firstname"},{text:"Language",value:"language"},{text:"Continent",value:"continent.name_en"},{text:"Zone",value:"zone.name_en"},{text:"Country",value:"country.name_en"},{text:"ACTION",value:"id"}];return(i,s)=>{const h=f("router-link"),T=f("EasyDataTable");return v(),x("div",U,[e("div",$,[e("div",q,[e("h1",F,m(o.type),1),a(h,{to:{name:"admin.post.create",params:{type:o.type}},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:l(()=>[a(c(S),{class:"h-6 w-6"}),e("p",G,"Add "+m(o.type),1)]),_:1},8,["to"])]),e("div",K,[e("div",L,[e("div",O,[e("div",R,[e("div",Z,[H,A(e("input",{type:"text",id:"table-search","onUpdate:modelValue":s[0]||(s[0]=t=>p.value=t),class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[B,p.value]])]),e("div",J,[e("button",{type:"button",title:"delete",onClick:s[1]||(s[1]=t=>j()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[a(c(M),{class:"h-6 w-6"}),Q])])]),a(T,{"items-selected":r.value,"onUpdate:items-selected":s[2]||(s[2]=t=>r.value=t),headers:P,items:c(b),alternating:"","search-field":I.value,"search-value":p.value,"show-index":"","buttons-pagination":"",loading:c(w)},{"item-image":l(t=>[e("div",W,[t.image?(v(),x("img",{key:0,src:t.image,alt:"",class:"h-10 w-10 rounded-full object-cover"},null,8,X)):D("",!0)])]),"item-title":l(t=>[g(m(t.title.length<=30?t.title:t.title.substring(0,29)+"..."),1)]),"item-id":l(t=>[e("div",null,[a(h,{to:{name:"admin.post.edit",params:{type:o.type,id:t.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:l(()=>[Y]),_:2},1032,["to"]),a(h,{to:{name:"show.post",params:{id:t.id,slug:t.slug}},class:"dark:text-blue-500 ml-3 text-indigo-600 hover:underline"},{default:l(()=>[ee]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{oe as default};
