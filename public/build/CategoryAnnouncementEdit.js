var g=(u,i,n)=>new Promise((m,r)=>{var d=t=>{try{a(n.next(t))}catch(o){r(o)}},l=t=>{try{a(n.throw(t))}catch(o){r(o)}},a=t=>t.done?m(t.value):Promise.resolve(t.value).then(d,l);a((n=n.apply(u,i)).next())});import{o as x,b as _,d as c,e as p,f as e,h as s,l as h,w,j as v,t as k,P as C,k as y,m as A,I as S,K as E,g as V}from"./app.js";import{u as B}from"./categoryAnnouncementServices.js";const N={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},j={class:"z-0 h-full w-full p-4"},M=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Edit Category Announcement ")],-1),z={class:"mx-auto bg-white p-6"},D=e("h2",{class:"text-md font-light text-gray-700"}," Edit a categoryAnnouncement ",-1),T={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},q=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),F={class:"mt-6 flex justify-end"},I={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},K={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},G={__name:"CategoryAnnouncementEdit",props:{id:{required:!0,type:String}},setup(u){const i=u,{updateCategoryAnnouncement:n,getCategoryAnnouncement:m,errors:r,loading:d,categoryAnnouncement:l}=B();x(()=>g(this,null,function*(){yield m(i.id)}));const a=()=>g(this,null,function*(){yield n(i.id)});return(t,o)=>{const b=_("Spin");return c(),p("div",N,[e("div",j,[M,e("section",z,[s(r)!=""?(c(),h(C,{key:0},{default:w(()=>[v(k(s(r)),1)]),_:1})):y("",!0),D,e("form",{onSubmit:o[1]||(o[1]=A(f=>a(),["prevent"]))},[e("div",T,[e("div",null,[q,S(e("input",{id:"fr","onUpdate:modelValue":o[0]||(o[0]=f=>s(l).name=f),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[E,s(l).name]])])]),e("div",F,[s(d)==0?(c(),p("button",I," Save ")):y("",!0),s(d)==1?(c(),p("button",K,[V(b,{size:"small"})])):y("",!0)])],32)])])])}}};export{G as default};
