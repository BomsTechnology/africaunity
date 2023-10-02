import{r as _,o as B,a as M,d as r,e as a,f as e,t as n,h as u,l as D,w as F,j as i,P as j,k as m,m as z,I as d,K as c,g as p,V as E,J as x,F as h,x as v,G as J,b as T}from"./app.4a599ac6.js";import{u as G}from"./announcementServices.e0726625.js";import{u as I}from"./categoryAnnouncementServices.5b96b107.js";import{u as K}from"./currencyServices.9ec99a70.js";import{u as L}from"./universityServices.2fca3e2f.js";import{_ as O}from"./DropZone.0608e46a.js";import{_ as P}from"./RichText.8d5e383b.js";const R={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},H={class:"w-full space-y-4 py-5 text-center"},Q={class:"text-4xl font-bold capitalize text-primary-blue"},W={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},X={class:"text-xl font-semibold"},Y={class:"text-md font-light text-gray-700"},Z={class:"mt-4"},ee={class:"col-span-2"},te={class:"text-gray-700"},se=e("span",{class:"text-red-500"},"*",-1),oe={class:"text-xs font-light text-gray-400"},ne={class:"divSelect2 col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},le={class:"text-gray-700",for:"pt"},re=e("span",{class:"text-red-500"},"*",-1),ae={class:"text-gray-700",for:"pt"},ie=e("span",{class:"text-red-500"},"*",-1),de=["value"],ue={class:"text-gray-700"},ce=e("span",{class:"text-red-500"},"*",-1),me={class:"text-gray-700"},pe=e("span",{class:"text-red-500"},"*",-1),ge={key:0},fe={class:"text-gray-700"},be=e("span",{class:"text-red-500"},"*",-1),ye={key:1},_e={class:"text-gray-700",for:"es"},xe=e("span",{class:"text-red-500"},"*",-1),he=["value"],ve={class:"text-gray-700"},we={class:"text-gray-700"},Ve={class:"col-span-2 mt-4"},$e={class:"text-gray-700",for:"fr"},ke={class:"flex items-center space-x-4 py-4"},Ue={class:"col-span-2 mt-4"},Se={class:"text-gray-700 mb-2",for:"pt"},Ae=e("span",{class:"text-red-500"},"*",-1),Ce={class:"mt-6"},qe={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Ne={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Te={__name:"AddAnnouncement",setup(Be){const w=J(),b=localStorage.user?JSON.parse(localStorage.user):"",{categoryAnnouncements:V,getCategoryAnnouncements:$}=I(),{currencies:k,getCurrencies:U}=K(),{universities:S,getAllUniversities:A}=L();_(null),B(async()=>{g.value=!0,await $(),await U(),await A(),g.value=!1});const g=_(!1),s=M({title:"",user_id:b.id,description:"",price:"",image:[],adress:"",website:"",email:b.email,phone:"",category_announcement_id:"",currency_id:"",university_id:""}),{createAnnouncement:C,errors:f,loading:y}=G(),q=async()=>{await C({...s}),f.value==""&&w.push({name:"ads"})};return(l,o)=>{const N=T("Spin");return r(),a("div",R,[e("div",H,[e("h1",Q,n(l.$tc("add",2))+" "+n(l.$t("ads")),1)]),e("section",W,[u(f)!=""?(r(),D(j,{key:0},{default:F(()=>[i(n(u(f)),1)]),_:1})):m("",!0),e("h1",X,n(l.$tc("add",2))+" "+n(l.$t("ads")),1),e("h2",Y,n(l.$t("good-msg-post"))+" ! ",1),e("form",{onSubmit:o[11]||(o[11]=z(t=>q(),["prevent"])),id:"announcementform",enctype:"multipart/form-data"},[e("div",Z,[e("div",ee,[e("label",te,[i(n(l.$t("title"))+" ",1),se]),d(e("input",{required:"","onUpdate:modelValue":o[0]||(o[0]=t=>s.title=t),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.title]]),e("span",oe,n(s.title?s.title.length:0)+" of 50 Characters",1)]),e("div",ne,[e("div",null,[e("label",le,[i(n(l.$t("university"))+" ",1),re]),p(E,{modelValue:s.university_id,"onUpdate:modelValue":o[1]||(o[1]=t=>s.university_id=t),data:u(S),placeholder:"Select University",required:!1,resetField:!0,loading:g.value,className:"w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data","loading","className"])]),e("div",null,[e("label",ae,[i(n(l.$t("category"))+" ",1),ie]),d(e("select",{required:"","onUpdate:modelValue":o[2]||(o[2]=t=>s.category_announcement_id=t),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(r(!0),a(h,null,v(u(V),t=>(r(),a("option",{key:t.id,value:t.id},n(t.name),9,de))),128))],512),[[x,s.category_announcement_id]])]),e("div",null,[e("label",ue,[i(n(l.$t("contact-phone"))+" ",1),ce]),d(e("input",{required:"","onUpdate:modelValue":o[3]||(o[3]=t=>s.phone=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.phone]])]),e("div",null,[e("label",me,[i(n(l.$t("contact-email"))+" ",1),pe]),d(e("input",{required:"","onUpdate:modelValue":o[4]||(o[4]=t=>s.email=t),type:"email",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.email]])]),s.category_announcement_id!=10?(r(),a("div",ge,[e("label",fe,[i(n(l.$t("price"))+" ",1),be]),d(e("input",{required:"","onUpdate:modelValue":o[5]||(o[5]=t=>s.price=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.price]])])):m("",!0),s.category_announcement_id!=10?(r(),a("div",ye,[e("label",_e,[i(n(l.$t("currency"))+" ",1),xe]),d(e("select",{required:"","onUpdate:modelValue":o[6]||(o[6]=t=>s.currency_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(r(!0),a(h,null,v(u(k),t=>(r(),a("option",{key:t.id,value:t.id},n(t.symbol+" "+t.name),9,he))),128))],512),[[x,s.currency_id]])])):m("",!0),e("div",null,[e("label",ve,n(l.$t("adresse")),1),d(e("input",{"onUpdate:modelValue":o[7]||(o[7]=t=>s.adress=t),type:"text",placeholder:"Douala Cameroon",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.adress]])]),e("div",null,[e("label",we,n(l.$t("website")),1),d(e("input",{"onUpdate:modelValue":o[8]||(o[8]=t=>s.website=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,s.website]])])]),e("div",Ve,[e("label",$e,n(l.$t("thumbnails")),1),e("div",ke,[p(O,{modelValue:s.image,"onUpdate:modelValue":o[9]||(o[9]=t=>s.image=t),multiple:!0},null,8,["modelValue"])])]),e("div",Ue,[e("label",Se,[i(n(l.$t("description"))+" ",1),Ae]),p(P,{modelValue:s.description,"onUpdate:modelValue":o[10]||(o[10]=t=>s.description=t)},null,8,["modelValue"])])]),e("div",Ce,[u(y)==0?(r(),a("button",qe,n(l.$t("save")),1)):m("",!0),u(y)==1?(r(),a("button",Ne,[p(N,{size:"small"})])):m("",!0)])],32)])])}}};export{Te as default};
