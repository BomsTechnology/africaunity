var T=Object.defineProperty;var V=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var S=(d,r,s)=>r in d?T(d,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[r]=s,w=(d,r)=>{for(var s in r||(r={}))$.call(r,s)&&S(d,s,r[s]);if(V)for(var s of V(r))A.call(r,s)&&S(d,s,r[s]);return d};var _=(d,r,s)=>new Promise((p,f)=>{var v=n=>{try{g(s.next(n))}catch(y){f(y)}},u=n=>{try{g(s.throw(n))}catch(y){f(y)}},g=n=>n.done?p(n.value):Promise.resolve(n.value).then(v,u);g((s=s.apply(d,r)).next())});import{r as N,a as K,o as P,c as G,b as H,d as l,e as c,f as e,h as b,l as z,w as B,j as I,t as E,P as M,k as x,m as J,I as m,K as h,g as U,F as O,x as Q}from"./app.59e8d623.js";import{u as R}from"./demonstrationNicheServices.28aa2352.js";const W={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},X={class:"z-0 h-full w-full p-4"},Y=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Event Niche ")],-1),Z={class:"justify-between lg:flex"},ee={class:"bg-white px-6 pt-8 lg:w-[40%]"},te={class:"mb-4 text-2xl font-semibold"},se={key:0,class:"text-primary-blue underline"},ae={key:1,class:"text-primary-blue underline"},re=e("span",null,"Event Niche",-1),oe={class:""},le=e("label",{class:"dark:text-gray-200 text-gray-700"},"French Name",-1),ne={class:""},de=e("label",{class:"dark:text-gray-200 text-gray-700"},"English Name",-1),ie={class:""},ce=e("label",{class:"dark:text-gray-200 text-gray-700"},"Espanol Name",-1),ue={class:""},ge=e("label",{class:"dark:text-gray-200 text-gray-700"},"Portugues Name",-1),ye={class:"mt-6 flex justify-end"},be={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},pe={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},_e={class:"flex flex-col bg-white pt-8 lg:w-[60%]"},me={class:"overflow-x-auto border"},he={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},fe={class:"p-4"},xe=e("label",{for:"table-search",class:"sr-only"},"Search",-1),ve={class:"relative mt-1"},ke=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),we={class:"overflow-hidden"},Ne={class:"dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"},Ee=e("thead",{class:"dark:bg-gray-700 bg-gray-100"},[e("tr",null,[e("th",{scope:"col",class:"dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"}," Name "),e("th",{scope:"col",class:"p-4"},[e("span",{class:"sr-only"},"Edit")])])],-1),Ce={key:0,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},De={class:"dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"},Ve={class:"whitespace-nowrap py-4 px-6 text-right text-sm font-medium"},Se=["onClick"],ze=["onClick"],Be={key:1,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},Ie={class:"dark:hover:bg-gray-700 hover:bg-gray-100"},Me={colspan:"2",class:"dark:text-white w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"},Ue={key:2,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},je=e("tr",{class:"dark:hover:bg-gray-700 hover:bg-gray-100"},[e("td",{colspan:"2",class:"dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"}," No Data ")],-1),qe=[je],$e={__name:"DemonstrationNiche",setup(d){const{demonstrationNiches:r,updateDemonstrationNiche:s,getDemonstrationNiches:p,createDemonstrationNiche:f,destroyDemonstrationNiche:v,loading:u,errors:g}=R(),n=N(""),y=N(!1),k=N(""),t=K({name_fr:"",name_en:"",name_es:"",name_pt:""});P(()=>_(this,null,function*(){yield p()}));const j=()=>_(this,null,function*(){u.value=1,y.value?(yield s(w({},t),k.value),y.value=!1,k.value=0):yield f(w({},t)),yield p(),u.value=0,t.name_fr="",t.name_en="",t.name_es="",t.name_pt=""}),q=i=>_(this,null,function*(){confirm("I you Sure ?")&&(u.value=1,yield v(i),yield p(),u.value=0)}),F=i=>_(this,null,function*(){y.value=!0,k.value=i.id,t.name_en=i.name_en,t.name_es=i.name_es,t.name_pt=i.name_pt,t.name_fr=i.name_fr}),C=G(()=>r.value.filter(i=>i.name_en.toLowerCase().includes(n.value.toLowerCase())));return(i,o)=>{const D=H("Spin");return l(),c("div",W,[e("div",X,[Y,e("div",Z,[e("div",ee,[e("div",null,[e("h1",te,[y.value?(l(),c("span",ae,"Edit ")):(l(),c("span",se,"Add ")),re]),b(g)!=""?(l(),z(M,{key:0},{default:B(()=>[I(E(b(g)),1)]),_:1})):x("",!0),e("form",{class:"px-8",onSubmit:o[4]||(o[4]=J(a=>j(),["prevent"]))},[e("div",oe,[le,m(e("input",{required:"","onUpdate:modelValue":o[0]||(o[0]=a=>t.name_fr=a),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[h,t.name_fr]])]),e("div",ne,[de,m(e("input",{required:"","onUpdate:modelValue":o[1]||(o[1]=a=>t.name_en=a),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[h,t.name_en]])]),e("div",ie,[ce,m(e("input",{required:"","onUpdate:modelValue":o[2]||(o[2]=a=>t.name_es=a),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[h,t.name_es]])]),e("div",ue,[ge,m(e("input",{required:"","onUpdate:modelValue":o[3]||(o[3]=a=>t.name_pt=a),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[h,t.name_pt]])]),e("div",ye,[b(u)==0?(l(),c("button",be," Save ")):x("",!0),b(u)==1?(l(),c("button",pe,[U(D,{size:"small"})])):x("",!0)])],32)])]),e("div",_e,[e("div",me,[e("div",he,[e("div",fe,[xe,e("div",ve,[ke,m(e("input",{"onUpdate:modelValue":o[5]||(o[5]=a=>n.value=a),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[h,n.value]])])]),b(g)!=""?(l(),z(M,{key:0},{default:B(()=>[I(E(b(g)),1)]),_:1})):x("",!0),e("div",we,[e("table",Ne,[Ee,C.value.length!=0?(l(),c("tbody",Ce,[(l(!0),c(O,null,Q(C.value,a=>(l(),c("tr",{key:a.id,class:"dark:hover:bg-gray-700 hover:bg-gray-100"},[e("td",De,E(a.name_en),1),e("td",Ve,[e("a",{onClick:L=>F(a),href:"#",class:"dark:text-blue-500 text-primary-blue hover:underline"},"Edit",8,Se),e("a",{onClick:L=>q(a.id),href:"#",class:"dark:text-blue-500 ml-3 text-red-600 hover:underline"},"Delete",8,ze)])]))),128))])):b(u)==1?(l(),c("tbody",Be,[e("tr",Ie,[e("td",Me,[U(D,{size:"big"})])])])):(l(),c("tbody",Ue,qe))])])])])])])])])}}};export{$e as default};