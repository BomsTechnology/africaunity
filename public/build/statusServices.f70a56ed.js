import{r as o,n as u}from"./app.1a4e1017.js";function S(){const n=o([]),a=o(""),t=o(0);return{status:n,errorsStatus:a,loading:t,getStatus:async()=>{a.value="",t.value=!0;let e=await u.get("/api/status",{headers:{Authorization:`Bearer ${localStorage.token}`}});n.value=e.data.data,t.value=!1},createStatus:async e=>{a.value="";try{t.value=!0,await u.post("/api/status",e,{headers:{Authorization:`Bearer ${localStorage.token}`}}),t.value=0}catch(s){if(s.response.status==422){t.value=0;for(const r in s.response.data.errors)a.value+=s.response.data.errors[r][0]+`
`}}},updateStatus:async(e,s)=>{a.value="";try{t.value=!0,await u.put("/api/status/"+e,s,{headers:{Authorization:`Bearer ${localStorage.token}`}}),t.value=!1}catch(r){if(t.value=0,r.response.status==422)for(const l in r.response.data.errors)a.value+=r.response.data.errors[l][0]+`	
`}},destroyStatus:async e=>{a.value="";try{return t.value=!0,await u.delete("/api/status/"+e,{headers:{Authorization:`Bearer ${localStorage.token}`}}),t.value=!1,!0}catch{t.value=0,a.value="Impossible de supprimer ce statu"}}}}export{S as u};
