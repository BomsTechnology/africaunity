var n=(c,u,t)=>new Promise((e,d)=>{var p=s=>{try{l(t.next(s))}catch(a){d(a)}},v=s=>{try{l(t.throw(s))}catch(a){d(a)}},l=s=>s.done?e(s.value):Promise.resolve(s.value).then(p,v);l((t=t.apply(c,u)).next())});import{G as N,r as h,p as i}from"./app.59e8d623.js";function f(){N();const c=h([]),u=h([]),t=h(""),e=h(0);return{demonstrationNiches:c,demonstrationNiche:u,errors:t,loading:e,getDemonstrationNiches:()=>n(this,null,function*(){t.value="",e.value=!0;let a=yield i.get("/api/demonstrationNiches",{headers:{Authorization:`Bearer ${localStorage.token}`}});c.value=a.data.data,e.value=!1}),getDemonstrationNiche:a=>n(this,null,function*(){t.value="",e.value=!0;let o=yield i.get("/api/demonstrationNiches/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,u.value=o.data.data}),createDemonstrationNiche:a=>n(this,null,function*(){t.value="";try{e.value=!0,yield i.post("/api/demonstrationNiches",a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){if(o.response.status==422){e.value=0;for(const r in o.response.data.errors)t.value+=o.response.data.errors[r][0]+`
`}}}),updateDemonstrationNiche:(a,o)=>n(this,null,function*(){t.value="";try{e.value=!0;let r=yield i.put("/api/demonstrationNiches/"+o,a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=!1}catch(r){if(e.value=0,r.response.status==422)for(const m in r.response.data.errors)t.value+=r.response.data.errors[m][0]+`	
`}}),destroyDemonstrationNiche:a=>n(this,null,function*(){t.value="";try{e.value=!0,yield i.delete(`/api/demonstrationNiches/${JSON.stringify(a)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){e.value=0,o.response.status=="500"&&(t.value="Impossible de supprimer cette category")}})}}export{f as u};
