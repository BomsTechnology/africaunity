var Q=Object.defineProperty;var T=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var U=(p,d,i)=>d in p?Q(p,d,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[d]=i,q=(p,d)=>{for(var i in d||(d={}))X.call(d,i)&&U(p,i,d[i]);if(T)for(var i of T(d))Y.call(d,i)&&U(p,i,d[i]);return p};var C=(p,d,i)=>new Promise((D,S)=>{var k=h=>{try{t(i.next(h))}catch(w){S(w)}},b=h=>{try{t(i.throw(h))}catch(w){S(w)}},t=h=>h.done?D(h.value):Promise.resolve(h.value).then(k,b);t((i=i.apply(p,d)).next())});import{u as Z,r as E,a as I,W as ee,b as j,d as n,e as a,g as l,f as s,h as e,l as g,t as o,k as m,w as v,j as f,F,x as te,P,m as G,I as B,K as V}from"./app.59e8d623.js";import{u as se}from"./demonstrationServices.7bddced6.js";import{u as ne}from"./demonstrationCommentServices.e1cf7603.js";import{_ as oe}from"./Report.4ab95d46.js";import{r as N}from"./CalendarIcon.26da48f1.js";import{r as ae}from"./UserIcon.3f57577b.js";import{r as J}from"./UserCircleIcon.87b9d93c.js";import{r as re}from"./ExclamationCircleIcon.747ce3af.js";import{r as ie}from"./PencilSquareIcon.f352cbc2.js";import{r as le}from"./EnvelopeIcon.3f29a68f.js";import{r as de}from"./PhoneIcon.b3e72d40.js";import{r as ce}from"./GlobeEuropeAfricaIcon.ee0e6795.js";import{r as me,a as _e}from"./MapIcon.9ab60fad.js";import{r as pe}from"./BuildingOffice2Icon.228afd2b.js";import{r as ue}from"./ComputerDesktopIcon.d07a67e5.js";import{a as he,r as ye}from"./MapPinIcon.d65636f0.js";import{r as fe}from"./ClockIcon.40acc189.js";const xe={class:"mx-auto flex min-h-screen w-full flex-col bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"},ge={class:"lg:w-[65%]"},ve={key:0,class:"py-6 px-4"},we={class:"overflow-hidden rounded-lg bg-white shadow-md"},ke={class:"flex items-center space-x-4 px-4"},be=["src"],$e={class:"p-6"},Ce={key:0,href:"#",class:"rounded bg-primary-blue py-1 px-2 text-sm capitalize text-white"},De={key:0},Se={key:1},Le={key:2},ze={key:3},Me={class:"mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"},je={class:"mt-2 flex space-x-2 text-xs text-gray-500"},Be={class:"flex space-x-1"},Ve={href:"#",class:"hover:text-primary-blue"},Ne={key:0},Ae={key:1},He={class:"flex space-x-1"},Te=["innerHTML"],Ue={class:"mt-4"},qe={class:"flex items-center justify-between"},Ee=["src"],Ie={class:"mx-2 font-semibold text-gray-700"},Fe={class:"flex items-center"},Pe={class:"hidden lg:block"},Ge={key:0,class:"ml-3"},Je={class:"flex items-center space-x-3 px-2 py-4"},Ke=["href"],Oe=s("svg",{fill:"#25D366",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",class:"h-6 w-6"},[s("path",{d:"M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"})],-1),Re=[Oe],We={key:0,class:"mt-4 px-8 py-4"},Qe={class:"h-10 w-10 overflow-hidden rounded-full shadow md:h-20 md:w-20"},Xe=["src"],Ye={class:"mt-2 text-center text-xs font-bold hover:underline lg:text-sm"},Ze={class:"text-center text-xs font-light lg:text-sm"},et={class:"ml-2 w-full p-2 text-xs lg:text-lg"},tt={class:"mt-4 px-8 py-4"},st=s("label",{class:"text-gray-700",for:"pt"},[f("Laisser un Commentaire "),s("span",{class:"text-red-500"},"*")],-1),nt={class:"mt-6"},ot={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},at={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},rt={key:1,class:"p-28"},it={class:"bg-white py-5 lg:w-[35%]"},lt={class:"space-y-3 rounded-md py-5 px-10 shadow"},dt={class:"text-2xl font-bold text-primary-blue"},ct={class:"flex items-center space-x-2 text-sm text-gray-500"},mt={class:"flex items-center space-x-2 text-sm text-gray-500"},_t={class:"grid gap-2 text-sm lg:grid-cols-2"},pt={key:0,class:"flex items-center space-x-2 text-gray-500"},ut={key:0},ht={key:1},yt={key:2},ft={key:3},xt={key:1,class:"flex items-center space-x-2 text-gray-500"},gt={key:0},vt={key:1},wt={key:2},kt={key:3},bt={key:2,class:"flex items-center space-x-2 text-gray-500"},$t={key:0},Ct={key:1},Dt={key:2},St={key:3},Lt={key:3,class:"flex items-center space-x-2 text-gray-500"},zt={key:0},Mt={key:1},jt={key:2},Bt={key:3},Vt={key:4,class:"flex items-center space-x-2 text-gray-500"},Nt={key:0},At={key:1},Ht={key:2},Tt={key:3},Ut={class:"flex items-center space-x-2 text-gray-500"},qt={class:"flex items-center space-x-2"},Et={key:0},It={key:0},Ft={class:"flex items-center space-x-2 text-sm text-gray-500"},Pt={class:"flex space-x-2 py-1"},Gt={key:0},Jt={key:0},Kt={key:1},Ot={key:2},Rt={key:3},Wt={class:"flex items-center space-x-2 text-sm text-gray-500"},Qt={class:"text-sm text-gray-500"},Xt={key:0},Yt={key:1},Zt={class:"flex items-center space-x-2 text-sm text-gray-500"},es={class:"mt-4 rounded-md py-5 shadow"},ts={key:1,class:"bg-green-50 py-4 px-2 text-green-700"},ss={class:"px-8"},ns={class:"text-xl font-bold text-primary-blue",for:"pt"},os=s("span",{class:"text-red-500"},"*",-1),as={class:"mt-6"},rs=s("input",{type:"hidden"},null,-1),is={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},ls={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},ds=s("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ls={__name:"SingleDemonstration",props:{id:String,slug:{required:!1,type:String}},setup(p){const d=p,{locale:i}=Z(),{createDemonstrationComment:D,errorsCmtAds:S,demonstrationComments:k,getDemonstrationCommentsPost:b}=ne(),{demonstration:t,getDemonstration:h,loading:w,errors:x}=se(),L=localStorage.user?JSON.parse(localStorage.user):"",z=E(!1),u=E(0),K=window.location.href,y=I({user_id:L.id,demonstration_id:"",content:""});ee(()=>C(this,null,function*(){yield h(d.id),yield b(d.id),y.demonstration_id=t.value.id}));const M=I({user:L.id,demonstration:d.id,content:""}),O=()=>C(this,null,function*(){u.value=1,yield D(q({},y)),u.value=0,y.content="",yield b(d.id)}),A=()=>{z.value=!z.value},R=()=>C(this,null,function*(){x.value="";try{u.value=1,yield axios.post("/api/demonstration-send-contact",M,{headers:{Authorization:`Bearer ${localStorage.token}`}}),u.value=2}catch(r){if(r.response.status==422){u.value=0;for(const _ in r.response.data.errors)x.value+=r.response.data.errors[_][0]+`
`}}});return(r,_)=>{const $=j("router-link"),H=j("Spin"),W=j("NoContent");return n(),a(F,null,[l(oe,{open:z.value,toogleModal:A,id:p.id,type:"Event"},null,8,["open","id"]),s("div",xe,[s("div",ge,[e(t).length!=0?(n(),a("div",ve,[s("div",we,[s("div",ke,[e(t).image?(n(),a("img",{key:0,src:e(t).image,alt:"",class:"h-72 w-full rounded-lg object-cover"},null,8,be)):(n(),g(e(N),{key:1,class:"h-28 w-28 text-gray-500"}))]),s("div",$e,[s("div",null,[e(t).demonstration_type?(n(),a("a",Ce,[r.$i18n.locale=="en"?(n(),a("span",De,o(e(t).demonstration_type.name_en),1)):r.$i18n.locale=="fr"?(n(),a("span",Se,o(e(t).demonstration_type.name_fr),1)):r.$i18n.locale=="es"?(n(),a("span",Le,o(e(t).demonstration_type.name_es),1)):(n(),a("span",ze,o(e(t).demonstration_type.name_pt),1))])):m("",!0),s("h1",Me,o(e(t).title),1),s("div",je,[s("div",Be,[l(e(N),{class:"h-4 w-4"}),s("a",Ve,[e(t).start_date==e(t).end_date?(n(),a("span",Ne,o(new Date(e(t).start_date).toLocaleDateString(e(i),{day:"numeric",year:"numeric",month:"long"})),1)):(n(),a("span",Ae,o(r.$t("of"))+" "+o(new Date(e(t).start_date).toLocaleDateString(e(i),{day:"numeric",year:"numeric",month:"long"}))+" "+o(r.$t("at"))+" "+o(new Date(e(t).end_date).toLocaleDateString(e(i),{day:"numeric",year:"numeric",month:"long"})),1))])]),s("div",He,[l(e(ae),{class:"h-4 w-4"}),l($,{to:{name:"compte",params:{slug:e(t).user.slug,id:e(t).user.id}},class:"hover:text-primary-blue"},{default:v(()=>[f(o(e(t).user.firstname),1)]),_:1},8,["to"])])]),s("p",{class:"my-4 mt-2 break-words py-4 text-gray-600",innerHTML:e(t).description},null,8,Te)]),s("div",Ue,[s("div",qe,[l($,{to:{name:"compte",params:{slug:e(t).user.slug,id:e(t).user.id}},class:"flex items-center"},{default:v(()=>[e(t).user.avatar?(n(),a("img",{key:0,class:"h-16 w-16 rounded-full object-cover shadow",src:e(t).user.avatar},null,8,Ee)):(n(),g(e(J),{key:1,class:"h-10 w-10 text-gray-700"})),s("span",Ie,o(e(t).user.firstname),1)]),_:1},8,["to"]),s("div",Fe,[s("div",null,[s("button",{onClick:_[0]||(_[0]=c=>A()),class:"flex cursor-pointer items-center space-x-2 rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-400 hover:border-white hover:bg-yellow-300 hover:text-white"},[l(e(re),{class:"h-5 w-5"}),s("span",Pe,o(r.$t("report")),1)])]),e(L).id==e(t).user.id?(n(),a("div",Ge,[l($,{to:{name:"edit.events",params:{id:e(t).id}}},{default:v(()=>[l(e(ie),{class:"h-5 w-5 cursor-pointer text-gray-400 hover:text-primary-blue"})]),_:1},8,["to"])])):m("",!0)])])]),s("div",Je,[s("a",{href:"whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you "+e(K)},Re,8,Ke)])]),e(k).length!=0?(n(),a("div",We,[(n(!0),a(F,null,te(e(k),c=>(n(),a("div",{class:"flex border-b py-4",key:c.id},[s("div",null,[l($,{to:{name:"compte",params:{slug:c.user.slug,id:c.user.id}}},{default:v(()=>[s("div",Qe,[c.user.avatar?(n(),a("img",{key:0,src:c.user.avatar,class:"h-full w-full bg-cover object-cover",alt:""},null,8,Xe)):(n(),g(e(J),{key:1,class:"h-full w-full text-gray-500"}))]),s("h1",Ye,o(c.user.firstname),1)]),_:2},1032,["to"]),s("h3",Ze,o(new Date(c.date).toLocaleDateString(e(i),{day:"numeric",year:"numeric",month:"long"})),1)]),s("div",et,o(c.content),1)]))),128))])):m("",!0),e(x)!=""?(n(),g(P,{key:1},{default:v(()=>[f(o(e(x)),1)]),_:1})):m("",!0),s("form",{onSubmit:_[3]||(_[3]=G(c=>O(),["prevent"]))},[s("div",tt,[st,B(s("textarea",{"onUpdate:modelValue":_[1]||(_[1]=c=>y.content=c),required:"",type:"text",id:"pt",class:"mt-2 block h-60 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`
                            `,512),[[V,y.content]]),s("div",nt,[B(s("input",{type:"hidden","onUpdate:modelValue":_[2]||(_[2]=c=>y.post_id=c)},null,512),[[V,y.post_id]]),u.value==0?(n(),a("button",ot,o(r.$t("save")),1)):m("",!0),u.value==1?(n(),a("button",at,[l(H,{size:"small"})])):m("",!0)])])],32)])])):e(w)==1?(n(),a("div",rt,[l(H)])):(n(),g(W,{key:2}))]),s("div",it,[s("div",lt,[s("h1",dt,o(r.$t("event-detail")),1),s("div",ct,[l(e(le),{class:"h-6 w-6"}),s("span",null,o(e(t).email),1)]),s("div",mt,[l(e(de),{class:"h-6 w-6"}),s("span",null,o(e(t).phone),1)]),s("div",_t,[e(t).continent?(n(),a("div",pt,[l(e(ce),{class:"h-6 w-6"}),s("span",null,[r.$i18n.locale=="en"?(n(),a("span",ut,o(e(t).continent.name_en),1)):r.$i18n.locale=="fr"?(n(),a("span",ht,o(e(t).continent.name_fr),1)):r.$i18n.locale=="es"?(n(),a("span",yt,o(e(t).continent.name_es),1)):(n(),a("span",ft,o(e(t).continent.name_pt),1))])])):m("",!0),e(t).zone?(n(),a("div",xt,[l(e(me),{class:"h-6 w-6"}),s("span",null,[r.$i18n.locale=="en"?(n(),a("span",gt,o(e(t).zone.name_en),1)):r.$i18n.locale=="fr"?(n(),a("span",vt,o(e(t).zone.name_fr),1)):r.$i18n.locale=="es"?(n(),a("span",wt,o(e(t).zone.name_es),1)):(n(),a("span",kt,o(e(t).zone.name_pt),1))])])):m("",!0),e(t).country?(n(),a("div",bt,[l(e(_e),{class:"h-6 w-6"}),s("span",null,[r.$i18n.locale=="en"?(n(),a("span",$t,o(e(t).country.name_en),1)):r.$i18n.locale=="fr"?(n(),a("span",Ct,o(e(t).country.name_fr),1)):r.$i18n.locale=="es"?(n(),a("span",Dt,o(e(t).country.name_es),1)):(n(),a("span",St,o(e(t).country.name_pt),1))])])):m("",!0),e(t).city?(n(),a("div",Lt,[l(e(pe),{class:"h-6 w-6"}),s("span",null,[r.$i18n.locale=="en"?(n(),a("span",zt,o(e(t).city.name_en),1)):r.$i18n.locale=="fr"?(n(),a("span",Mt,o(e(t).city.name_fr),1)):r.$i18n.locale=="es"?(n(),a("span",jt,o(e(t).city.name_es),1)):(n(),a("span",Bt,o(e(t).city.name_pt),1))])])):m("",!0),e(t).demonstration_mode?(n(),a("div",Vt,[l(e(ue),{class:"h-6 w-6"}),s("span",null,[r.$i18n.locale=="en"?(n(),a("span",Nt,o(e(t).demonstration_mode.name_en),1)):r.$i18n.locale=="fr"?(n(),a("span",At,o(e(t).demonstration_mode.name_fr),1)):r.$i18n.locale=="es"?(n(),a("span",Ht,o(e(t).demonstration_mode.name_es),1)):(n(),a("span",Tt,o(e(t).demonstration_mode.name_pt),1))])])):m("",!0),s("div",Ut,[l(e(he),{class:"h-6 w-6"}),s("span",qt,[s("span",null,[e(t).enter_type=="free"?(n(),a("span",Et,"Gratuit")):m("",!0)]),e(t).price&&e(t).currency?(n(),a("span",It,o(e(t).price+e(t).currency.symbol),1)):m("",!0)])])]),s("div",Ft,[l(e(fe),{class:"h-6 w-6"}),s("span",Pt,[e(t).demonstration_niche?(n(),a("span",Gt,[r.$i18n.locale=="en"?(n(),a("span",Jt,o(e(t).demonstration_niche.name_en),1)):r.$i18n.locale=="fr"?(n(),a("span",Kt,o(e(t).demonstration_niche.name_fr),1)):r.$i18n.locale=="es"?(n(),a("span",Ot,o(e(t).demonstration_niche.name_es),1)):(n(),a("span",Rt,o(e(t).demonstration_niche.name_pt),1))])):m("",!0),f(" - "),s("span",null,o(e(t).hourly),1)])]),s("div",Wt,[l(e(N),{class:"h-6 w-6"}),s("span",Qt,[e(t).start_date==e(t).end_date?(n(),a("span",Xt,o(new Date(e(t).start_date).toLocaleDateString(e(i),{day:"numeric",year:"numeric",month:"long"})),1)):(n(),a("span",Yt,o(r.$t("of"))+" "+o(new Date(e(t).start_date).toLocaleDateString(e(i),{day:"numeric",year:"numeric",month:"long"}))+" "+o(r.$t("at"))+" "+o(new Date(e(t).end_date).toLocaleDateString(e(i),{day:"numeric",year:"numeric",month:"long"})),1))])]),s("div",Zt,[l(e(ye),{class:"h-6 w-6"}),s("span",null,o(e(t).place_link),1)])]),s("div",es,[e(x)!=""?(n(),g(P,{key:0},{default:v(()=>[f(o(e(x)),1)]),_:1})):m("",!0),u.value==2?(n(),a("div",ts,[s("p",null,o(r.$t("msg-contact-sucess")),1)])):(n(),a("form",{key:2,onSubmit:_[5]||(_[5]=G(c=>R(),["prevent"]))},[s("div",ss,[s("label",ns,[f(o(r.$t("contact-ads"))+" ",1),os]),B(s("textarea",{"onUpdate:modelValue":_[4]||(_[4]=c=>M.content=c),required:"",type:"text",id:"pt",class:"mt-2 block h-60 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`
                        `,512),[[V,M.content]]),s("div",as,[rs,u.value==0?(n(),a("button",is,o(r.$t("send")),1)):m("",!0),u.value==1?(n(),a("button",ls,[f(o(r.$t("send"))+"... ",1),ds])):m("",!0)])])],32))])])])],64)}}};export{Ls as default};