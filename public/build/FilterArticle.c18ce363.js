var h=($,k,d)=>new Promise((_,y)=>{var v=i=>{try{u(d.next(i))}catch(n){y(n)}},f=i=>{try{u(d.throw(i))}catch(n){y(n)}},u=i=>i.done?_(i.value):Promise.resolve(i.value).then(v,f);u((d=d.apply($,k)).next())});import{G as F,u as U,r as p,o as w,a as C,d as l,e as a,f as o,t as s,I as c,J as m,K as S,F as b,x as g}from"./app.59e8d623.js";const q={class:"z-0 w-full bg-white"},B={class:"inline-block bg-primary-blue px-2 py-1 text-white"},M={class:"space-y-2 border-t-2 border-primary-blue p-4 text-sm"},R={class:"text-gray-500"},D={value:"fr"},I={value:"en"},A={value:"es"},E={value:"pt"},G={class:"text-gray-500"},J=["placeholder"],K={class:"text-gray-500"},L=o("option",{value:""},"--------------",-1),N=["value"],T={key:0},Z={key:1},j={key:2},H={key:3},O={class:"text-gray-500"},P=o("option",{value:""},"--------------",-1),Q=["value"],W={key:0},X={key:1},Y={key:2},ee={key:3},te={key:1,value:"null"},oe={class:"text-gray-500"},se=o("option",{value:""},"--------------",-1),ne=["value"],le={key:0},ae={key:1},re={key:2},ie={key:3},ue={key:1,value:"null"},de={class:"text-gray-500"},pe=o("option",{value:""},"--------------",-1),ce=["value"],ye={key:0},me={key:1},_e={key:2},ve={key:3},ge={__name:"FilterArticle",setup($){const k=F(),{locale:d}=U(),_=p([]),y=p([]),v=p([]),f=p([]),u=p([]),i=p([]);w(()=>h(this,null,function*(){let t=yield axios.get("/api/continents");_.value=t.data.data,t=yield axios.get("/api/zones"),y.value=t.data.data,t=yield axios.get("/api/countries"),v.value=t.data.data,t=yield axios.get("/api/ministries"),f.value=t.data.data}));const n=C({country:"",continent:"",ministry:"",zone:"",lang:"",keywords:"",type:"article"}),x=()=>{u.value=y.value.filter(t=>t.continent_id==n.continent),n.country="",n.zone="",i.value=[]},z=()=>{i.value=v.value.filter(t=>t.zone_id==n.zone),n.country=""},V=()=>{k.replace({name:"articles",query:{lang:n.lang,continent:n.continent,zone:n.zone,country:n.country,ministry:n.ministry,keywords:n.keywords}})};return w(()=>h(this,null,function*(){n.lang=localStorage.lang?localStorage.lang:d.value})),(t,r)=>(l(),a("div",q,[o("h1",B,s(t.$t("filter-article")),1),o("form",null,[o("div",M,[o("div",null,[o("label",R,s(t.$t("language")),1),c(o("select",{"onUpdate:modelValue":r[0]||(r[0]=e=>n.lang=e),class:"form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"},[o("option",D,s(t.$t("fr")),1),o("option",I,s(t.$t("en")),1),o("option",A,s(t.$t("es")),1),o("option",E,s(t.$t("pt")),1)],512),[[m,n.lang]])]),o("div",null,[o("label",G,s(t.$t("key-words")),1),c(o("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=e=>n.keywords=e),placeholder:t.$t("key-words"),class:"form-input mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"},null,8,J),[[S,n.keywords]])]),o("div",null,[o("label",K,s(t.$t("continent")),1),c(o("select",{"onUpdate:modelValue":r[2]||(r[2]=e=>n.continent=e),onChange:r[3]||(r[3]=e=>x()),class:"form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"},[L,(l(!0),a(b,null,g(_.value,e=>(l(),a("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(l(),a("span",T,s(e.name_en),1)):t.$i18n.locale=="fr"?(l(),a("span",Z,s(e.name_fr),1)):t.$i18n.locale=="es"?(l(),a("span",j,s(e.name_es),1)):(l(),a("span",H,s(e.name_pt),1))],8,N))),128))],544),[[m,n.continent]])]),o("div",null,[o("label",O,s(t.$t("zoned")),1),c(o("select",{"onUpdate:modelValue":r[4]||(r[4]=e=>n.zone=e),onChange:r[5]||(r[5]=e=>z()),class:"form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"},[P,u.value.length!=0?(l(!0),a(b,{key:0},g(u.value,e=>(l(),a("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(l(),a("span",W,s(e.name_en),1)):t.$i18n.locale=="fr"?(l(),a("span",X,s(e.name_fr),1)):t.$i18n.locale=="es"?(l(),a("span",Y,s(e.name_es),1)):(l(),a("span",ee,s(e.name_pt),1))],8,Q))),128)):(l(),a("option",te," Requires "+s(t.$t("continent")),1))],544),[[m,n.zone]])]),o("div",null,[o("label",oe,s(t.$t("country")),1),c(o("select",{"onUpdate:modelValue":r[6]||(r[6]=e=>n.country=e),class:"form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"},[se,i.value.length!=0?(l(!0),a(b,{key:0},g(i.value,e=>(l(),a("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(l(),a("span",le,s(e.name_en),1)):t.$i18n.locale=="fr"?(l(),a("span",ae,s(e.name_fr),1)):t.$i18n.locale=="es"?(l(),a("span",re,s(e.name_es),1)):(l(),a("span",ie,s(e.name_pt),1))],8,ne))),128)):(l(),a("option",ue," Requires "+s(t.$t("zoned")),1))],512),[[m,n.country]])]),o("div",null,[o("label",de,s(t.$t("ministry")),1),c(o("select",{"onUpdate:modelValue":r[7]||(r[7]=e=>n.ministry=e),class:"form-select mt-1 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"},[pe,(l(!0),a(b,null,g(f.value,e=>(l(),a("option",{key:e.id,value:e.id},[t.$i18n.locale=="en"?(l(),a("span",ye,s(e.name_en),1)):t.$i18n.locale=="fr"?(l(),a("span",me,s(e.name_fr),1)):t.$i18n.locale=="es"?(l(),a("span",_e,s(e.name_es),1)):(l(),a("span",ve,s(e.name_pt),1))],8,ce))),128))],512),[[m,n.ministry]])]),o("div",null,[o("button",{type:"button",onClick:r[8]||(r[8]=e=>V()),class:"mt-3 w-full bg-primary-blue px-8 py-2 text-lg text-white"},s(t.$t("filter")),1)])])])]))}};export{ge as _};