import{u as U,a as E,o as F,r as j,c as s,d as a,f as n,e,g as t,m as c,t as l,F as g,x as D,I as A,w as p,j as v,k as h,P as J,l as K,i as N,K as P,b as y}from"./app.1a4e1017.js";import{_ as O}from"./FilterArticle.79ca5177.js";import{_ as R}from"./Report.89a8b560.js";import{u as G}from"./postServices.23f2812d.js";import{u as Q}from"./commentServices.fba1c71f.js";import{r as W}from"./CalendarIcon.b9c91da9.js";import{r as X}from"./UserIcon.d1156be0.js";import{r as Y}from"./ChatBubbleOvalLeftEllipsisIcon.7b9eb889.js";import{r as V}from"./UserCircleIcon.9ac3c994.js";import{r as Z}from"./ExclamationCircleIcon.d0766d05.js";import{r as ee}from"./PencilSquareIcon.37828d30.js";const te={class:"mx-auto flex min-h-screen w-full flex-col bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"},se={class:"lg:w-[70%]"},oe={key:0,class:"py-6 lg:px-4"},re={class:"overflow-hidden rounded-lg bg-white shadow-md"},ae=["src"],le={class:"p-6"},ne={class:"mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"},ie={class:"flex my-4 items-center gap-4 flex-wrap"},de={key:0},ce={key:1},ue={key:2},pe={key:3},me={class:"mt-2 flex space-x-2 text-xs text-gray-500"},_e={class:"flex space-x-1"},he={href:"#",class:"hover:text-primary-blue"},fe={class:"flex space-x-1"},xe={class:"flex space-x-1"},ge={href:"#",class:"hover:text-primary-blue"},ye=["innerHTML"],ve={class:"mt-4"},we={class:"flex items-center justify-between"},be=["src"],Ce={class:"mx-2 font-semibold text-gray-700"},ke={class:"flex items-center"},$e={class:"hidden lg:block"},Se={key:0,class:"ml-3"},Me={class:"flex items-center space-x-3 px-2 py-4"},Le=["href"],je=e("svg",{fill:"#25D366",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",class:"h-6 w-6"},[e("path",{d:"M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"})],-1),De=[je],Ne={key:1,class:"mt-4 px-8 py-4"},Pe={class:"h-10 w-10 overflow-hidden rounded-full shadow md:h-20 md:w-20"},Ve=["src"],ze={class:"mt-2 text-center text-xs font-bold hover:underline lg:text-sm"},Be={class:"text-center text-xs font-light lg:text-sm"},Te={class:"ml-2 w-full p-2 text-xs lg:text-lg"},qe={class:"mt-4 px-8 py-4"},He=e("label",{class:"text-gray-700",for:"pt"},[v("Laisser un Commentaire "),e("span",{class:"text-red-500"},"*")],-1),Ie={class:"mt-6"},Ue={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Ee={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Fe={key:1,class:"p-28"},Ae={class:"bg-white lg:w-[30%]"},tt={__name:"SinglePost",props:{id:{required:!0,type:String},slug:{required:!1,type:String}},setup(w){const f=w,{locale:b}=U(),z=window.location.href,{post:o,getPost2:B,loading:T}=G(),{createComment:q,errors:C,comments:k,getCommentsPost:$}=Q(),S=localStorage.user?JSON.parse(localStorage.user):"",d=E({user_id:S.id,post_id:"",content:""});F(async()=>{await B(f.id),await $(f.id),d.post_id=o.value.id});const x=j(!1),M=()=>{x.value=!x.value},m=j(0),H=async()=>{m.value=1,await q({...d}),m.value=0,d.content="",await $(f.id)};return(u,i)=>{const _=y("router-link"),L=y("Spin"),I=y("NoContent");return s(),a(g,null,[n(R,{open:x.value,toogleModal:M,id:w.id,type:"Post"},null,8,["open","id"]),e("div",te,[e("div",se,[t(o).length!=0?(s(),a("div",oe,[e("div",re,[t(o).type=="article"?(s(),a("img",{key:0,class:"h-96 w-full object-cover",src:t(o).image,alt:""},null,8,ae)):c("",!0),e("div",le,[e("div",null,[e("h1",ne,l(t(o).title),1),e("ul",ie,[(s(!0),a(g,null,D(t(o).ministries,r=>(s(),a("li",{class:"rounded py-1 px-2 text-xs capitalize text-white",style:A("background:"+r.color)},[u.$i18n.locale=="en"?(s(),a("span",de,l(r.name_en),1)):u.$i18n.locale=="fr"?(s(),a("span",ce,l(r.name_fr),1)):u.$i18n.locale=="es"?(s(),a("span",ue,l(r.name_es),1)):(s(),a("span",pe,l(r.name_pt),1))],4))),256))]),e("div",me,[e("div",_e,[n(t(W),{class:"h-4 w-4"}),e("a",he,l(new Date(t(o).date).toLocaleDateString(t(b),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",fe,[n(t(X),{class:"h-4 w-4"}),n(_,{to:{name:"compte",params:{slug:t(o).user.slug,id:t(o).user.id}},class:"hover:text-primary-blue"},{default:p(()=>[v(l(t(o).user.firstname),1)]),_:1},8,["to"])]),e("div",xe,[n(t(Y),{class:"h-4 w-4"}),e("a",ge,l(t(o).comments),1)])]),e("p",{class:"my-4 mt-2 py-4 text-gray-600 break-words",innerHTML:t(o).content},null,8,ye)]),e("div",ve,[e("div",we,[n(_,{to:{name:"compte",params:{slug:t(o).user.slug,id:t(o).user.id}},class:"flex items-center"},{default:p(()=>[t(o).user.avatar?(s(),a("img",{key:0,class:"h-16 w-16 rounded-full object-cover shadow",src:t(o).user.avatar},null,8,be)):(s(),h(t(V),{key:1,class:"h-10 w-10 text-gray-700"})),e("span",Ce,l(t(o).user.firstname),1)]),_:1},8,["to"]),e("div",ke,[e("div",null,[e("button",{onClick:i[0]||(i[0]=r=>M()),class:"flex cursor-pointer items-center space-x-2 rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-400 hover:border-white hover:bg-yellow-300 hover:text-white"},[n(t(Z),{class:"h-5 w-5"}),e("span",$e,l(u.$t("report")),1)])]),t(S).id==t(o).user.id?(s(),a("div",Se,[n(_,{to:{name:"edit.post",params:{id:t(o).id,type:t(o).type}}},{default:p(()=>[n(t(ee),{class:"h-5 w-5 cursor-pointer text-gray-400 hover:text-primary-blue"})]),_:1},8,["to"])])):c("",!0)])])]),e("div",Me,[e("a",{href:"whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you "+t(z)},De,8,Le)])]),t(k).length!=0?(s(),a("div",Ne,[(s(!0),a(g,null,D(t(k),r=>(s(),a("div",{class:"flex border-b py-4",key:r.id},[e("div",null,[n(_,{to:{name:"compte",params:{slug:r.user.slug,id:r.user.id}}},{default:p(()=>[e("div",Pe,[r.user.avatar?(s(),a("img",{key:0,src:r.user.avatar,class:"h-full w-full bg-cover object-cover",alt:""},null,8,Ve)):(s(),h(t(V),{key:1,class:"h-full w-full text-gray-500"}))]),e("h1",ze,l(r.user.firstname),1)]),_:2},1032,["to"]),e("h3",Be,l(new Date(r.date).toLocaleDateString(t(b),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",Te,l(r.content),1)]))),128))])):c("",!0),t(C)!=""?(s(),h(J,{key:2},{default:p(()=>[v(l(t(C)),1)]),_:1})):c("",!0),e("form",{onSubmit:i[3]||(i[3]=K(r=>H(),["prevent"]))},[e("div",qe,[He,N(e("textarea",{"onUpdate:modelValue":i[1]||(i[1]=r=>d.content=r),required:"",type:"text",id:"pt",class:"mt-2 block h-60 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`
                            `,512),[[P,d.content]]),e("div",Ie,[N(e("input",{type:"hidden","onUpdate:modelValue":i[2]||(i[2]=r=>d.post_id=r)},null,512),[[P,d.post_id]]),m.value==0?(s(),a("button",Ue,l(u.$t("save")),1)):c("",!0),m.value==1?(s(),a("button",Ee,[n(L,{size:"small"})])):c("",!0)])])],32)])])):t(T)==1?(s(),a("div",Fe,[n(L)])):(s(),h(I,{key:2}))]),e("div",Ae,[n(O)])])],64)}}};export{tt as default};
