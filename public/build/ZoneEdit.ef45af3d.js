import{o as k,d as a,e as n,f as e,h as t,l as h,w,j as v,t as b,P as V,k as i,m as C,I as l,J as E,F as Z,x as z,K as d}from"./app.4a599ac6.js";import{u as B}from"./zoneServices.8186c0fc.js";import{u as M}from"./continentServices.aa02b2f5.js";const S={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},U={class:"z-0 h-full w-full p-4"},j=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"},"Edit Zone")],-1),F={class:"mx-auto bg-white p-6"},N=e("h2",{class:"text-md font-light text-gray-700"},"Edit a zone",-1),q={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},D={class:"col-span-2"},P=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent ",-1),T=["value"],A=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),H=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"English",-1),I=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Espa\xF1ol",-1),J=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Portugu\xEAs",-1),K={class:"mt-6 flex justify-end"},L={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},$={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},G=e("svg",{class:"mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),O=[G],Y={__name:"ZoneEdit",props:{id:{required:!0,type:String}},setup(p){const u=p,{continents:y,getContinents:f}=M(),{updateZone:m,getZone:x,errors:c,loading:g,zone:s}=B();k(async()=>{await x(u.id),await f()});const _=async()=>{await m(u.id)};return(Q,r)=>(a(),n("div",S,[e("div",U,[j,e("section",F,[t(c)!=""?(a(),h(V,{key:0},{default:w(()=>[v(b(t(c)),1)]),_:1})):i("",!0),N,e("form",{onSubmit:r[5]||(r[5]=C(o=>_(),["prevent"]))},[e("div",q,[e("div",D,[P,l(e("select",{required:"","onUpdate:modelValue":r[0]||(r[0]=o=>t(s).continent_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(a(!0),n(Z,null,z(t(y),o=>(a(),n("option",{key:o.id,value:o.id},b(o.name_en),9,T))),128))],512),[[E,t(s).continent_id]])]),e("div",null,[A,l(e("input",{id:"fr","onUpdate:modelValue":r[1]||(r[1]=o=>t(s).name_fr=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[d,t(s).name_fr]])]),e("div",null,[H,l(e("input",{id:"en","onUpdate:modelValue":r[2]||(r[2]=o=>t(s).name_en=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[d,t(s).name_en]])]),e("div",null,[I,l(e("input",{id:"es","onUpdate:modelValue":r[3]||(r[3]=o=>t(s).name_es=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[d,t(s).name_es]])]),e("div",null,[J,l(e("input",{type:"text","onUpdate:modelValue":r[4]||(r[4]=o=>t(s).name_pt=o),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[d,t(s).name_pt]])])]),e("div",K,[t(g)==0?(a(),n("button",L," Save ")):i("",!0),t(g)==1?(a(),n("button",$,O)):i("",!0)])],32)])])]))}};export{Y as default};
