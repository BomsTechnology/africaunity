var o=(l,u,r)=>new Promise((e,f)=>{var c=n=>{try{d(r.next(n))}catch(p){f(p)}},m=n=>{try{d(r.throw(n))}catch(p){f(p)}},d=n=>n.done?e(n.value):Promise.resolve(n.value).then(c,m);d((r=r.apply(l,u)).next())});import{r as i,p as s,q as v}from"./app.js";function j(){const l=i([]),u=i([]),r=i(""),e=i(0),f=i(!1),c=i(1);return{isAll:f,page:c,jobOffers:l,jobOffer:u,errors:r,loading:e,filterJobs:a=>o(this,null,function*(){r.value="";try{e.value=3;let t=yield s.post("/api/jobOffers-filter",a,{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=t.data.data,e.value=!1}catch(t){t.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}),getJobOffers:()=>o(this,null,function*(){r.value="";try{e.value=!0;let a=yield s.get("/api/jobOffers/",{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=a.data.data,e.value=!1}catch(a){a.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}),getJobOffer:a=>o(this,null,function*(){r.value="";try{e.value=!0;let t=yield s.get("/api/jobOffers/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,u.value=t.data.data}catch(t){t.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}),createJobOffer:a=>o(this,null,function*(){r.value="";try{e.value=!0,yield s.post("/api/jobOffers",a,{headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"multipart/form-data"}}),e.value=!1}catch(t){if(t.response.status==422){e.value=0;for(const g in t.response.data.errors)r.value+=t.response.data.errors[g][0]+`
`}}}),updateJobOffer:a=>o(this,null,function*(){r.value="";try{e.value=!0,yield s.post("/api/jobOffers/"+u.value.id,a,{headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"multipart/form-data"}}),e.value=!1}catch(t){if(e.value=0,t.response.status==422)for(const g in t.response.data.errors)r.value+=t.response.data.errors[g][0]+`	
`}}),destroyJobOffer:a=>o(this,null,function*(){r.value="";try{e.value=!0,yield s.delete(`/api/jobOffers/${JSON.stringify(a)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){e.value=0,t.response.status=="500"&&(r.value="Impossible de supprimer ce jobOffer")}}),getJobOffersUser:a=>o(this,null,function*(){r.value="";try{e.value=!0;let t=yield s.get("/api/jobOffers-user/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=t.data.data,e.value=!1}catch(t){t.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}),getJobOffer2:a=>o(this,null,function*(){r.value="",e.value=!0;let t=yield s.get("/api/jobOffers2/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,u.value=t.data.data}),markFilled:a=>o(this,null,function*(){r.value="";try{e.value=!0,yield s.get("/api/jobOffers-mark-filled/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){e.value=0,t.response.status=="500"&&(r.value="Impossible de supprimer ce jobOffer")}}),getJobOffersFront:()=>o(this,null,function*(){r.value="";try{e.value=!0;let a=yield s.get("/api/jobOffers-front?page="+c.value,{headers:{Authorization:`Bearer ${localStorage.token}`}});c.value==1?l.value=a.data.data:l.value=l.value.concat(a.data.data),e.value=!1,a.data.data.length==0&&(f.value=!0)}catch(a){a.response.status==401&&(v.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}})}}export{j as u};
