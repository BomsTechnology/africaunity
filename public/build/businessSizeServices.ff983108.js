var u=(l,c,s)=>new Promise((e,v)=>{var y=o=>{try{p(s.next(o))}catch(a){v(a)}},d=o=>{try{p(s.throw(o))}catch(a){v(a)}},p=o=>o.done?e(o.value):Promise.resolve(o.value).then(y,d);p((s=s.apply(l,c)).next())});import{r as i,p as n}from"./app.59e8d623.js";function h(){const l=i([]),c=i([]),s=i(""),e=i(0);return{businessTypes:l,businessType:c,errorsBT:s,loading:e,getBusinessTypes:()=>u(this,null,function*(){s.value="",e.value=!0;let a=yield n.get("/api/businessTypes",{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=a.data.data,e.value=!1}),getBusinessType:a=>u(this,null,function*(){s.value="",e.value=!0;let t=yield n.get("/api/businessTypes/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,c.value=t.data.data}),createBusinessType:a=>u(this,null,function*(){s.value="";try{e.value=!0,yield n.post("/api/businessTypes",a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=0}catch(t){if(t.response.status==422){e.value=0;for(const r in t.response.data.errors)s.value+=t.response.data.errors[r][0]+`
`}}}),updateBusinessType:(a,t)=>u(this,null,function*(){s.value="";try{e.value=!0,yield n.put("/api/businessTypes/"+a,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(r){if(e.value=0,r.response.status==422)for(const B in r.response.data.errors)s.value+=r.response.data.errors[B][0]+`	
`}}),destroyBusinessType:a=>u(this,null,function*(){s.value="";try{return e.value=!0,yield n.delete("/api/businessTypes/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(t){e.value=0,s.value="Impossible de supprimer ce businessType"}})}}function g(){const l=i([]),c=i([]),s=i(""),e=i(0);return{businessSizes:l,businessSize:c,errorsBS:s,loading:e,getBusinessSizes:()=>u(this,null,function*(){s.value="",e.value=!0;let a=yield n.get("/api/businessSizes",{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=a.data.data,e.value=!1}),getBusinessSize:a=>u(this,null,function*(){s.value="",e.value=!0;let t=yield n.get("/api/businessSizes/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,c.value=t.data.data}),createBusinessSize:a=>u(this,null,function*(){s.value="";try{e.value=!0,yield n.post("/api/businessSizes",a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=0}catch(t){if(t.response.status==422){e.value=0;for(const r in t.response.data.errors)s.value+=t.response.data.errors[r][0]+`
`}}}),updateBusinessSize:(a,t)=>u(this,null,function*(){s.value="";try{e.value=!0,yield n.put("/api/businessSizes/"+a,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(r){if(e.value=0,r.response.status==422)for(const B in r.response.data.errors)s.value+=r.response.data.errors[B][0]+`	
`}}),destroyBusinessSize:a=>u(this,null,function*(){s.value="";try{return e.value=!0,yield n.delete("/api/businessSizes/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(t){e.value=0,s.value="Impossible de supprimer ce businessSize"}})}}export{h as a,g as u};