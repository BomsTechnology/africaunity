import{r as s,u as p,H as v,n as o}from"./app.1a4e1017.js";function m(){const l=v(),i=s([]),n=s([]),t=s(""),e=s(0),{locale:c}=p();return{countries:i,country:n,errors:t,loading:e,getCountries:async()=>{t.value="",e.value=!0;let r=await o.get(`/api/countries/language/${c.value}`,{headers:{Authorization:`Bearer ${localStorage.token}`}});i.value=r.data.data,e.value=!1},getCountry:async r=>{t.value="",e.value=!0;let a=await o.get("/api/countries/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,n.value=a.data.data},createCountry:async r=>{t.value="";try{e.value=!0,await o.post("/api/countries",r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,l.push({name:"admin.country.index"})}catch(a){if(a.response.status==422){e.value=0;for(const u in a.response.data.errors)t.value+=a.response.data.errors[u][0]+`
`}}},updateCountry:async r=>{t.value="";try{e.value=!0,await o.put("/api/countries/"+r,n.value,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,l.push({name:"admin.country.index"})}catch(a){if(e.value=0,a.response.status==422)for(const u in a.response.data.errors)t.value+=a.response.data.errors[u][0]+`	
`}},destroyCountry:async r=>{t.value="";try{e.value=!0,await o.delete(`/api/countries/${JSON.stringify(r)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(a){e.value=0,a.response.status=="500"&&(t.value="Impossible de supprimer ce pays")}}}}export{m as u};