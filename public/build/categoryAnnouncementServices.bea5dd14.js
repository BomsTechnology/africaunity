import{r,H as i,n as o}from"./app.1a4e1017.js";function A(){const c=i(),l=r([]),s=r([]),t=r(""),e=r(0);return{categoryAnnouncements:l,categoryAnnouncement:s,errors:t,loading:e,getCategoryAnnouncements:async()=>{t.value="",e.value=!0;let n=await o.get("/api/categoryAnnouncements",{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=n.data.data,e.value=!1},getCategoryAnnouncement:async n=>{t.value="",e.value=!0;let a=await o.get("/api/categoryAnnouncements/"+n,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,s.value=a.data.data},createCategoryAnnouncement:async n=>{t.value="";try{e.value=!0,await o.post("/api/categoryAnnouncements",n,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,c.push({name:"admin.category.index"})}catch(a){if(a.response.status==422){e.value=0;for(const u in a.response.data.errors)t.value+=a.response.data.errors[u][0]+`
`}}},updateCategoryAnnouncement:async n=>{t.value="";try{e.value=!0,await o.put("/api/categoryAnnouncements/"+n,s.value,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,c.push({name:"admin.category.index"})}catch(a){if(e.value=0,a.response.status==422)for(const u in a.response.data.errors)t.value+=a.response.data.errors[u][0]+`	
`}},destroyCategoryAnnouncement:async n=>{t.value="";try{e.value=!0,await o.delete(`/api/categoryAnnouncements/${JSON.stringify(n)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(a){e.value=0,a.response.status=="500"&&(t.value="Impossible de supprimer ce pays")}}}}export{A as u};
