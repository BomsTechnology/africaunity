var s=(l,d,a)=>new Promise((e,k)=>{var p=r=>{try{c(a.next(r))}catch(o){k(o)}},v=r=>{try{c(a.throw(r))}catch(o){k(o)}},c=r=>r.done?e(r.value):Promise.resolve(r.value).then(p,v);c((a=a.apply(l,d)).next())});import{r as i,p as n}from"./app.js";function g(){const l=i([]),d=i([]),a=i(""),e=i(0);return{workModes:l,workMode:d,errorsWM:a,loading:e,getWorkModes:()=>s(this,null,function*(){a.value="",e.value=!0;let o=yield n.get("/api/workModes",{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=o.data.data,e.value=!1}),getWorkMode:o=>s(this,null,function*(){a.value="",e.value=!0;let t=yield n.get("/api/workModes/"+o,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,d.value=t.data.data}),createWorkMode:o=>s(this,null,function*(){a.value="";try{e.value=!0,yield n.post("/api/workModes",o,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){if(t.response.status==422){e.value=0;for(const u in t.response.data.errors)a.value+=t.response.data.errors[u][0]+`
`}}}),updateWorkMode:(o,t)=>s(this,null,function*(){a.value="";try{e.value=!0,yield n.put("/api/workModes/"+o,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(u){if(e.value=0,u.response.status==422)for(const M in u.response.data.errors)a.value+=u.response.data.errors[M][0]+`	
`}}),destroyWorkMode:o=>s(this,null,function*(){a.value="";try{return e.value=!0,yield n.delete("/api/workModes/"+o,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(t){e.value=0,a.value="Impossible de supprimer ce workMode"}})}}export{g as u};
