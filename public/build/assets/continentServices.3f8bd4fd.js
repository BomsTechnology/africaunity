import{r,I as c,n as o}from"./app.fb44c589.js";function f(){const u=c(),l=r([]),s=r([]),n=r(""),e=r(0);return{continents:l,continent:s,errors:n,loading:e,getContinents:async()=>{n.value="",e.value=!0;let a=await o.get("/api/continents",{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=a.data.data,e.value=!1},getContinent:async a=>{n.value="",e.value=!0;let t=await o.get("/api/continents/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,s.value=t.data.data},createContinent:async a=>{n.value="";try{e.value=!0,await o.post("/api/continents",a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,u.push({name:"admin.continent.index"})}catch(t){if(t.response.status==422){e.value=0;for(const i in t.response.data.errors)n.value+=t.response.data.errors[i][0]+`
`}}},updateContinent:async a=>{n.value="";try{e.value=!0,await o.put("/api/continents/"+a,s.value,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,u.push({name:"admin.continent.index"})}catch(t){if(e.value=0,t.response.status==422)for(const i in t.response.data.errors)n.value+=t.response.data.errors[i][0]+`	
`}},destroyContinent:async a=>{n.value="";try{return e.value=!0,await o.delete(`/api/continents/${JSON.stringify(a)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch{e.value=0,n.value="Impossible de supprimer ce continent"}}}}export{f as u};