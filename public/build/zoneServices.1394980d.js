var n=(l,i,s)=>new Promise((t,e)=>{var d=r=>{try{c(s.next(r))}catch(p){e(p)}},g=r=>{try{c(s.throw(r))}catch(p){e(p)}},c=r=>r.done?t(r.value):Promise.resolve(r.value).then(d,g);c((s=s.apply(l,i)).next())});import{G as z,r as v,u as f,p as u}from"./app.59e8d623.js";function k(){const l=z(),i=v([]),s=v([]),t=v(""),e=v(0),{locale:d}=f();return{zones:i,zone:s,errors:t,loading:e,getZones:()=>n(this,null,function*(){t.value="",e.value=!0;let o=yield u.get(`/api/zones/language/${d.value}`,{headers:{Authorization:`Bearer ${localStorage.token}`}});i.value=o.data.data,e.value=!1}),getZone:o=>n(this,null,function*(){t.value="",e.value=!0;try{let a=yield u.get("/api/zones/"+o,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,s.value=a.data.data}catch(a){return!1}}),createZone:o=>n(this,null,function*(){t.value="";try{e.value=!0,yield u.post("/api/zones",o,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,l.push({name:"admin.zone.index"})}catch(a){if(a.response.status==422){e.value=0;for(const h in a.response.data.errors)t.value+=a.response.data.errors[h][0]+`
`}}}),updateZone:o=>n(this,null,function*(){t.value="";try{e.value=!0,yield u.put("/api/zones/"+o,s.value,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,l.push({name:"admin.zone.index"})}catch(a){if(e.value=0,a.response.status==422)for(const h in a.response.data.errors)t.value+=a.response.data.errors[h][0]+`	
`}}),destroyZone:o=>n(this,null,function*(){t.value="";try{return e.value=!0,yield u.delete(`/api/zones/${JSON.stringify(o)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(a){e.value=0,a.response.status=="500"&&(t.value="Impossible de supprimer cette zone")}})}}export{k as u};
