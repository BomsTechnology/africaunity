import{u as Q,r as c,a as W,o as X,c as a,d as r,e as t,t as o,O as v,l as f,g as u,k as Y,w as L,h as i,m as p,j as m,K as M,J as x,F as k,x as w,f as ee,T as te,I as se}from"./app.fb44c589.js";import{E as oe}from"./Error.85489273.js";import{u as ne}from"./postServices.9bba598e.js";import{u as ae}from"./continentServices.3f8bd4fd.js";import{u as re}from"./zoneServices.97066860.js";import{u as le}from"./countryServices.da13ab14.js";import{u as ie}from"./ministryServices.88482c88.js";import"./_plugin-vue_export-helper.cdc0426e.js";const de={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},ce={class:"w-full space-y-4 py-5 text-center"},ue={class:"text-4xl font-bold capitalize text-primary-blue"},pe={class:"text-md text-gray-700"},me={class:"flex flex-col items-center justify-center lg:flex-row lg:space-x-3"},ye={class:"font-semibold"},ge={class:"mt-3 inline-flex w-full justify-center space-x-3 text-xs lg:mt-0 lg:text-sm"},fe={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},_e={class:"text-xl font-semibold"},be={class:"text-md font-light text-gray-700"},he={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},ve={class:"col-span-2"},xe={class:"dark:text-gray-200 text-gray-700"},ke=t("span",{class:"text-red-500"},"*",-1),we={class:"text-xs font-light text-gray-400"},$e={class:"col-span-2 lg:col-span-1"},Ce={class:"dark:text-gray-200 text-gray-700",for:"es"},ze=t("span",{class:"text-red-500"},"*",-1),Se=["value"],Ve={key:0},Ue={key:1},qe={key:2},je={key:3},Le={class:"col-span-2 lg:col-span-1"},Me={class:"dark:text-gray-200 text-gray-700",for:"pt"},Fe=t("span",{class:"text-red-500"},"*",-1),Be=["value"],Ne={key:0},Oe={key:1},Re={key:2},De={key:3},Ee={key:1,value:"null"},Ie={class:"col-span-2 lg:col-span-1"},Pe={class:"dark:text-gray-200 text-gray-700",for:"es"},Te=t("span",{class:"text-red-500"},"*",-1),Ze=["value"],Ae={key:0},Je={key:1},He={key:2},Ke={key:3},Ge={key:1,value:"null"},Qe={class:"col-span-2 lg:col-span-1"},We={class:"dark:text-gray-200 text-gray-700",for:"pt"},Xe=t("span",{class:"text-red-500"},"*",-1),Ye=["value"],et={key:0},tt={key:1},st={key:2},ot={key:3},nt={key:0,class:"col-span-2"},at={class:"dark:text-gray-200 text-gray-700",for:"fr"},rt=t("span",{class:"text-red-500"},"*",-1),lt={class:"flex items-center space-x-4 py-4"},it=["src","alt"],dt={class:"col-span-2"},ct={class:"dark:text-gray-200 text-gray-700",for:"pt"},ut=t("span",{class:"text-red-500"},"*",-1),pt={key:1},mt={class:"text-xs font-light text-gray-400"},yt={class:"mt-20"},gt={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},ft={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},_t=t("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),bt={key:0,class:"text-xs font-light italic"},St={__name:"AddPost",props:{type:{type:String}},setup(d){const y=d,$=se(),{locale:U}=Q(),F=["article","propau"],g=localStorage.user?JSON.parse(localStorage.user):"",{continents:B,getContinents:N}=ae(),{zones:O,getZones:R}=re(),{countries:D,getCountries:E}=le(),{ministries:I,getMinistries:P}=ie(),_=c(""),C=c(""),q=c(null),z=c([]),b=c([]),S=c(0),n=W({title:"",type:y.type,user_id:g.id,language:"fr",content:"",image:"",continent_id:"",zone_id:"",country_id:"",ministry_id:""});X(async()=>{F.includes(y.type)||$.push({name:"home"}),await N(),await R(),await E(),await P(),y.type=="article"&&(sceditor.create(_.value,{format:"xhtml",style:"https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",height:400,toolbarExclude:"indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",icons:"material"}),_.value.value==""),S.value++});const T=()=>{z.value=O.value.filter(e=>e.continent_id==n.continent_id),n.country_id="",n.zone_id="",b.value=[]},Z=()=>{b.value=D.value.filter(e=>e.zone_id==n.zone_id),n.country_id=""},{createPost:A,errors:V,loading:j}=ne(),J=async()=>{if(y.type=="article"&&(n.content=_.value.value,S.value==1)){S.value++,C.value="please click again";return}let e=new FormData;e.append("image",n.image),e.append("title",n.title),e.append("type",n.type),e.append("user_id",n.user_id),e.append("language",localStorage.lang),e.append("content",n.content),e.append("continent_id",n.continent_id),e.append("zone_id",n.zone_id),e.append("country_id",n.country_id),e.append("ministry_id",n.ministry_id),await A(e),V.value==""&&(y.type=="article"?$.push({name:"compte",params:{slug:g.slug,id:g.id,redirect:"article"}}):$.push({name:"compte",params:{slug:g.slug,id:g.id,redirect:"propau"}}))},H=()=>{n.image=q.value.files[0]},h=e=>{U.value=e,localStorage.lang=U.value};function K(e){return URL.createObjectURL(e)}function G(e){return URL.revokeObjectURL(e)}return(e,l)=>(a(),r("div",de,[t("div",ce,[t("h1",ue,o(e.$t("add"))+" "+o(d.type),1),t("h2",pe,o(e.$t("your"))+" "+o(d.type)+" "+o(e.$t("add-desc-1")),1),t("div",me,[t("h1",ye,o(e.$t("select-lang"))+" :",1),t("div",ge,[t("button",{class:v([e.$i18n.locale!="fr"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:l[0]||(l[0]=f(s=>h("fr"),["prevent"]))},o(e.$t("fr")),3),t("button",{class:v([e.$i18n.locale!="en"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:l[1]||(l[1]=f(s=>h("en"),["prevent"]))},o(e.$t("en")),3),t("button",{class:v([e.$i18n.locale!="es"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:l[2]||(l[2]=f(s=>h("es"),["prevent"]))},o(e.$t("es")),3),t("button",{class:v([e.$i18n.locale!="pt"?"rounded-md bg-menu px-3 py-1 text-white":"rounded-md bg-primary-blue px-3 py-1 text-white"]),onClick:l[3]||(l[3]=f(s=>h("pt"),["prevent"]))},o(e.$t("pt")),3)])])]),t("section",fe,[u(V)!=""?(a(),Y(oe,{key:0},{default:L(()=>[i(o(u(V)),1)]),_:1})):p("",!0),t("h1",_e,o(e.$t("add"))+" "+o(d.type),1),t("h2",be,o(e.$t("good-msg-post"))+" ! ",1),t("form",{onSubmit:l[12]||(l[12]=f(s=>J(),["prevent"])),id:"postform",enctype:"multipart/form-data"},[t("div",he,[t("div",ve,[t("label",xe,[i(o(e.$t("title"))+" ",1),ke]),m(t("input",{required:"","onUpdate:modelValue":l[4]||(l[4]=s=>n.title=s),maxlength:"50",type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[M,n.title]]),t("span",we,o(n.title.length)+" of 50 Characters",1)]),t("div",$e,[t("label",Ce,[i(o(e.$t("continent"))+" ",1),ze]),m(t("select",{required:"","onUpdate:modelValue":l[5]||(l[5]=s=>n.continent_id=s),onChange:T,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(a(!0),r(k,null,w(u(B),s=>(a(),r("option",{key:s.id,value:s.id},[e.$i18n.locale=="en"?(a(),r("span",Ve,o(s.name_en),1)):e.$i18n.locale=="fr"?(a(),r("span",Ue,o(s.name_fr),1)):e.$i18n.locale=="es"?(a(),r("span",qe,o(s.name_es),1)):(a(),r("span",je,o(s.name_pt),1))],8,Se))),128))],544),[[x,n.continent_id]])]),t("div",Le,[t("label",Me,[i(o(e.$t("zoned")),1),Fe]),m(t("select",{required:"",onChange:Z,"onUpdate:modelValue":l[6]||(l[6]=s=>n.zone_id=s),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[z.value.length!=0?(a(!0),r(k,{key:0},w(z.value,s=>(a(),r("option",{key:s.id,value:s.id},[e.$i18n.locale=="en"?(a(),r("span",Ne,o(s.name_en),1)):e.$i18n.locale=="fr"?(a(),r("span",Oe,o(s.name_fr),1)):e.$i18n.locale=="es"?(a(),r("span",Re,o(s.name_es),1)):(a(),r("span",De,o(s.name_pt),1))],8,Be))),128)):(a(),r("option",Ee," Select "+o(e.$t("continent")),1))],544),[[x,n.zone_id]])]),t("div",Ie,[t("label",Pe,[i(o(e.$t("country")),1),Te]),m(t("select",{required:"","onUpdate:modelValue":l[7]||(l[7]=s=>n.country_id=s),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[b.value.length!=0?(a(!0),r(k,{key:0},w(b.value,s=>(a(),r("option",{key:s.id,value:s.id},[e.$i18n.locale=="en"?(a(),r("span",Ae,o(s.name_en),1)):e.$i18n.locale=="fr"?(a(),r("span",Je,o(s.name_fr),1)):e.$i18n.locale=="es"?(a(),r("span",He,o(s.name_es),1)):(a(),r("span",Ke,o(s.name_pt),1))],8,Ze))),128)):(a(),r("option",Ge," Select "+o(e.$t("zoned")),1))],512),[[x,n.country_id]])]),t("div",Qe,[t("label",We,[i(o(e.$t("ministry")),1),Xe]),m(t("select",{required:"","onUpdate:modelValue":l[8]||(l[8]=s=>n.ministry_id=s),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(a(!0),r(k,null,w(u(I),s=>(a(),r("option",{key:s.id,value:s.id},[e.$i18n.locale=="en"?(a(),r("span",et,o(s.name_en),1)):e.$i18n.locale=="fr"?(a(),r("span",tt,o(s.name_fr),1)):e.$i18n.locale=="es"?(a(),r("span",st,o(s.name_es),1)):(a(),r("span",ot,o(s.name_pt),1))],8,Ye))),128))],512),[[x,n.ministry_id]])]),d.type=="article"?(a(),r("div",nt,[t("label",at,[i(o(e.$t("thumbnails"))+" ",1),rt]),t("div",lt,[n.image?(a(),r("img",{key:0,src:typeof n.image=="string"?n.image:K(n.image),onLoad:l[9]||(l[9]=s=>typeof n.image=="string"?"":G(n.image)),class:"h-16 w-16 rounded-full",alt:n.title},null,40,it)):p("",!0),t("input",{required:"",ref_key:"file",ref:q,onChange:l[10]||(l[10]=s=>H()),accept:"image/*",type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])])):p("",!0),t("div",dt,[t("label",ct,[i(o(e.$t("content"))+" ",1),ut]),d.type=="article"?(a(),r("textarea",{key:0,required:"",ref_key:"textarea",ref:_,class:"h-96 w-full"},`\r
                        `,512)):(a(),r("div",pt,[m(t("textarea",{required:"","onUpdate:modelValue":l[11]||(l[11]=s=>n.content=s),maxlength:"2000",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                            `,512),[[M,n.content]]),t("span",mt,o(n.content.length)+" of 2000 Characters",1)]))])]),t("div",yt,[u(j)==0?(a(),r("button",gt,o(e.$t("save")),1)):p("",!0),u(j)==1?(a(),r("button",ft,[i(o(e.$t("save"))+"... ",1),_t])):p("",!0),ee(te,{"enter-active-class":" transition-all  ","enter-from-class":" opacity-0  -translate-y-10","enter-to-class":"  opacity-1 translate-y-0","leave-active-class":"","leave-from-class":"","leave-to-class":""},{default:L(()=>[C.value!=""?(a(),r("span",bt,o(C.value),1)):p("",!0)]),_:1})])],32)])]))}};export{St as default};