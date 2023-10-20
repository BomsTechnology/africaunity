var T=Object.defineProperty;var N=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var V=(n,r,s)=>r in n?T(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s,w=(n,r)=>{for(var s in r||(r={}))$.call(r,s)&&V(n,s,r[s]);if(N)for(var s of N(r))A.call(r,s)&&V(n,s,r[s]);return n};var _=(n,r,s)=>new Promise((p,x)=>{var v=l=>{try{g(s.next(l))}catch(y){x(y)}},u=l=>{try{g(s.throw(l))}catch(y){x(y)}},g=l=>l.done?p(l.value):Promise.resolve(l.value).then(v,u);g((s=s.apply(n,r)).next())});import{r as M,a as K,o as P,c as G,b as H,d,e as c,f as e,h as b,l as S,w as z,j as B,t as E,P as I,k as h,m as J,I as m,K as f,g as U,F as O,x as Q}from"./app.59e8d623.js";import{u as R}from"./demonstrationModeServices.a54cb2c6.js";const W={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},X={class:"z-0 h-full w-full p-4"},Y=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"},"Event Mode")],-1),Z={class:"justify-between lg:flex"},ee={class:"bg-white px-6 pt-8 lg:w-[40%]"},te={class:"mb-4 text-2xl font-semibold"},se={key:0,class:"text-primary-blue underline"},ae={key:1,class:"text-primary-blue underline"},re=e("span",null,"Event Mode",-1),oe={class:""},de=e("label",{class:"dark:text-gray-200 text-gray-700"},"French Name",-1),le={class:""},ne=e("label",{class:"dark:text-gray-200 text-gray-700"},"English Name",-1),ie={class:""},ce=e("label",{class:"dark:text-gray-200 text-gray-700"},"Espanol Name",-1),ue={class:""},ge=e("label",{class:"dark:text-gray-200 text-gray-700"},"Portugues Name",-1),ye={class:"mt-6 flex justify-end"},be={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},pe={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},_e={class:"flex flex-col bg-white pt-8 lg:w-[60%]"},me={class:"overflow-x-auto border"},fe={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},xe={class:"p-4"},he=e("label",{for:"table-search",class:"sr-only"},"Search",-1),ve={class:"relative mt-1"},ke=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),we={class:"overflow-hidden"},Me={class:"dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"},Ee=e("thead",{class:"dark:bg-gray-700 bg-gray-100"},[e("tr",null,[e("th",{scope:"col",class:"dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"}," Name "),e("th",{scope:"col",class:"p-4"},[e("span",{class:"sr-only"},"Edit")])])],-1),Ce={key:0,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},De={class:"dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"},Ne={class:"whitespace-nowrap py-4 px-6 text-right text-sm font-medium"},Ve=["onClick"],Se=["onClick"],ze={key:1,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},Be={class:"dark:hover:bg-gray-700 hover:bg-gray-100"},Ie={colspan:"2",class:"dark:text-white w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"},Ue={key:2,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},je=e("tr",{class:"dark:hover:bg-gray-700 hover:bg-gray-100"},[e("td",{colspan:"2",class:"dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"}," No Data ")],-1),qe=[je],$e={__name:"DemonstrationMode",setup(n){const{demonstrationModes:r,updateDemonstrationMode:s,getDemonstrationModes:p,createDemonstrationMode:x,destroyDemonstrationMode:v,loading:u,errors:g}=R(),l=M(""),y=M(!1),k=M(""),t=K({name_fr:"",name_en:"",name_es:"",name_pt:""});P(()=>_(this,null,function*(){yield p()}));const j=()=>_(this,null,function*(){u.value=1,y.value?(yield s(w({},t),k.value),k.value=0,y.value=!1):yield x(w({},t)),yield p(),u.value=0,t.name_fr="",t.name_en="",t.name_es="",t.name_pt=""}),q=i=>_(this,null,function*(){confirm("I you Sure ?")&&(u.value=1,yield v(i),yield p(),u.value=0)}),F=i=>_(this,null,function*(){y.value=!0,k.value=i.id,t.name_en=i.name_en,t.name_es=i.name_es,t.name_pt=i.name_pt,t.name_fr=i.name_fr}),C=G(()=>r.value.filter(i=>i.name_en.toLowerCase().includes(l.value.toLowerCase())));return(i,o)=>{const D=H("Spin");return d(),c("div",W,[e("div",X,[Y,e("div",Z,[e("div",ee,[e("div",null,[e("h1",te,[y.value?(d(),c("span",ae,"Edit ")):(d(),c("span",se,"Add ")),re]),b(g)!=""?(d(),S(I,{key:0},{default:z(()=>[B(E(b(g)),1)]),_:1})):h("",!0),e("form",{class:"px-8",onSubmit:o[4]||(o[4]=J(a=>j(),["prevent"]))},[e("div",oe,[de,m(e("input",{required:"","onUpdate:modelValue":o[0]||(o[0]=a=>t.name_fr=a),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,t.name_fr]])]),e("div",le,[ne,m(e("input",{required:"","onUpdate:modelValue":o[1]||(o[1]=a=>t.name_en=a),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,t.name_en]])]),e("div",ie,[ce,m(e("input",{required:"","onUpdate:modelValue":o[2]||(o[2]=a=>t.name_es=a),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,t.name_es]])]),e("div",ue,[ge,m(e("input",{required:"","onUpdate:modelValue":o[3]||(o[3]=a=>t.name_pt=a),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[f,t.name_pt]])]),e("div",ye,[b(u)==0?(d(),c("button",be," Save ")):h("",!0),b(u)==1?(d(),c("button",pe,[U(D,{size:"small"})])):h("",!0)])],32)])]),e("div",_e,[e("div",me,[e("div",fe,[e("div",xe,[he,e("div",ve,[ke,m(e("input",{"onUpdate:modelValue":o[5]||(o[5]=a=>l.value=a),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[f,l.value]])])]),b(g)!=""?(d(),S(I,{key:0},{default:z(()=>[B(E(b(g)),1)]),_:1})):h("",!0),e("div",we,[e("table",Me,[Ee,C.value.length!=0?(d(),c("tbody",Ce,[(d(!0),c(O,null,Q(C.value,a=>(d(),c("tr",{key:a.id,class:"dark:hover:bg-gray-700 hover:bg-gray-100"},[e("td",De,E(a.name_en),1),e("td",Ne,[e("a",{onClick:L=>F(a),href:"#",class:"dark:text-blue-500 text-primary-blue hover:underline"},"Edit",8,Ve),e("a",{onClick:L=>q(a.id),href:"#",class:"dark:text-blue-500 ml-3 text-red-600 hover:underline"},"Delete",8,Se)])]))),128))])):b(u)==1?(d(),c("tbody",ze,[e("tr",Be,[e("td",Ie,[U(D,{size:"big"})])])])):(d(),c("tbody",Ue,qe))])])])])])])])])}}};export{$e as default};
