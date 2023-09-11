import{a as f,c as n,d as l,e,g as d,k as p,w as m,j as x,t as _,P as k,m as u,l as h,i as s,K as a,f as w,b as v}from"./app.1a4e1017.js";import{u as C}from"./countryServices.fd8a20e9.js";const V={class:"relative h-auto w-full xl:mt-0 xl:p-4"},S={class:"z-0 h-full w-full p-4"},U=e("div",{class:"flex justify-between bg-white px-8 py-5 shadow-lg"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Add Country ")],-1),B={class:"mx-auto bg-white p-6 shadow-md"},E=e("h2",{class:"text-md font-light text-gray-700"}," Add a new country for the 04 languages of the website ",-1),N={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},j={class:"col-span-2"},A=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"Country Code",-1),z=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),D=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"English",-1),M=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Espa\xF1ol",-1),P=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Portugu\xEAs",-1),T={class:"mt-6 flex justify-end"},F={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},K={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},I={__name:"AnnouncementCommentCreate",setup($){const o=f({code_iso:"",name_fr:"",name_en:"",name_es:"",name_pt:""}),{createCountry:g,errors:i,loading:c}=C(),b=async()=>{await g({...o})};return(q,t)=>{const y=v("Spin");return n(),l("div",V,[e("div",S,[U,e("section",B,[d(i)!=""?(n(),p(k,{key:0},{default:m(()=>[x(_(d(i)),1)]),_:1})):u("",!0),E,e("form",{onSubmit:t[5]||(t[5]=h(r=>b(),["prevent"]))},[e("div",N,[e("div",j,[A,s(e("input",{id:"fr","onUpdate:modelValue":t[0]||(t[0]=r=>o.code_iso=r),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,o.code_iso]])]),e("div",null,[z,s(e("input",{id:"fr","onUpdate:modelValue":t[1]||(t[1]=r=>o.name_fr=r),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,o.name_fr]])]),e("div",null,[D,s(e("input",{id:"en","onUpdate:modelValue":t[2]||(t[2]=r=>o.name_en=r),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,o.name_en]])]),e("div",null,[M,s(e("input",{id:"es","onUpdate:modelValue":t[3]||(t[3]=r=>o.name_es=r),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,o.name_es]])]),e("div",null,[P,s(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=r=>o.name_pt=r),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,o.name_pt]])])]),e("div",T,[d(c)==0?(n(),l("button",F," Save ")):u("",!0),d(c)==1?(n(),l("button",K,[w(y,{size:"small"})])):u("",!0)])],32)])])])}}};export{I as default};
