var o=(n,u,r)=>new Promise((e,d)=>{var c=l=>{try{p(r.next(l))}catch(g){d(g)}},h=l=>{try{p(r.throw(l))}catch(g){d(g)}},p=l=>l.done?e(l.value):Promise.resolve(l.value).then(c,h);p((r=r.apply(n,u)).next())});import{r as i,p as s,q as v}from"./app.59e8d623.js";function $(){const n=i([]),u=i([]),r=i(""),e=i(0),d=i(!1),c=i(1);return{isAll:d,page:c,tenders:n,tender:u,errors:r,loading:e,filterJobs:a=>o(this,null,function*(){r.value="";try{e.value=3;let t=yield s.post("/api/tenders-filter",a,{headers:{Authorization:`Bearer ${localStorage.token}`}});n.value=t.data.data,e.value=!1}catch(t){t.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}),getTenders:()=>o(this,null,function*(){r.value="";try{e.value=!0;let a=yield s.get("/api/tenders/",{headers:{Authorization:`Bearer ${localStorage.token}`}});n.value=a.data.data,e.value=!1}catch(a){a.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}),getTender:a=>o(this,null,function*(){r.value="";try{e.value=!0;let t=yield s.get("/api/tenders/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,u.value=t.data.data}catch(t){t.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}),createTender:a=>o(this,null,function*(){r.value="";try{e.value=!0,yield s.post("/api/tenders",a,{headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"multipart/form-data"}}),e.value=!1}catch(t){if(t.response.status==422){e.value=0;for(const m in t.response.data.errors)r.value+=t.response.data.errors[m][0]+`
`}}}),updateTender:a=>o(this,null,function*(){r.value="";try{e.value=!0,yield s.post("/api/tenders/"+u.value.id,a,{headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"multipart/form-data"}}),e.value=!1}catch(t){if(e.value=0,t.response.status==422)for(const m in t.response.data.errors)r.value+=t.response.data.errors[m][0]+`	
`}}),destroyTender:a=>o(this,null,function*(){r.value="";try{e.value=!0,yield s.delete(`/api/tenders/${JSON.stringify(a)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){e.value=0,t.response.status=="500"&&(r.value="Impossible de supprimer ce tender")}}),getTendersUser:a=>o(this,null,function*(){r.value="";try{e.value=!0;let t=yield s.get("/api/tenders-user/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});n.value=t.data.data,e.value=!1}catch(t){t.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}),getTender2:a=>o(this,null,function*(){r.value="",e.value=!0;let t=yield s.get("/api/tenders2/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,u.value=t.data.data}),markFilled:a=>o(this,null,function*(){r.value="";try{e.value=!0,yield s.get("/api/tenders-mark-filled/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){e.value=0,t.response.status=="500"&&(r.value="Impossible de supprimer ce tender")}}),getTendersFront:()=>o(this,null,function*(){r.value="";try{e.value=!0;let a=yield s.get("/api/tenders-front?page="+c.value,{headers:{Authorization:`Bearer ${localStorage.token}`}});c.value==1?n.value=a.data.data:n.value=n.value.concat(a.data.data),e.value=!1,a.data.data.length==0&&(d.value=!0)}catch(a){a&&a.response.status==401?(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):console.log(a)}})}}export{$ as u};