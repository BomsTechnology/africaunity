var i=(u,l,r)=>new Promise((a,e)=>{var y=o=>{try{c(r.next(o))}catch(p){e(p)}},g=o=>{try{c(r.throw(o))}catch(p){e(p)}},c=o=>o.done?a(o.value):Promise.resolve(o.value).then(y,g);c((r=r.apply(u,l)).next())});import{G as h,r as v,u as f,p as n}from"./app.59e8d623.js";function $(){const u=h(),l=v([]),r=v([]),a=v(""),e=v(0),{locale:y}=f();return{cities:l,city:r,errors:a,loading:e,getCities:()=>i(this,null,function*(){a.value="",e.value=!0;let s=yield n.get(`/api/cities/language/${y.value}`,{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=s.data.data,e.value=!1}),getCity:s=>i(this,null,function*(){a.value="",e.value=!0;let t=yield n.get("/api/cities/"+s,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,r.value=t.data.data}),createCity:s=>i(this,null,function*(){a.value="";try{e.value=!0,yield n.post("/api/cities",s,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,u.push({name:"admin.city.index"})}catch(t){if(t.response.status==422){e.value=0;for(const d in t.response.data.errors)a.value+=t.response.data.errors[d][0]+`
`}}}),updateCity:s=>i(this,null,function*(){a.value="";try{e.value=!0,yield n.put("/api/cities/"+s,r.value,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,u.push({name:"admin.city.index"})}catch(t){if(e.value=0,t.response.status==422)for(const d in t.response.data.errors)a.value+=t.response.data.errors[d][0]+`	
`}}),destroyCity:s=>i(this,null,function*(){a.value="";try{e.value=!0,yield n.delete(`/api/cities/${JSON.stringify(s)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){e.value=0,t.response.status=="500"&&(a.value="Impossible de supprimer ce pays")}})}}export{$ as u};
