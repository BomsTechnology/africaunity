var o=(c,p,a)=>new Promise((e,f)=>{var y=u=>{try{i(a.next(u))}catch(r){f(r)}},v=u=>{try{i(a.throw(u))}catch(r){f(r)}},i=u=>u.done?e(u.value):Promise.resolve(u.value).then(y,v);i((a=a.apply(c,p)).next())});import{r as l,p as n}from"./app.59e8d623.js";function E(){const c=l([]),p=l([]),a=l(""),e=l(0);return{offerTypes:c,offerType:p,errorsOT:a,loading:e,getOfferTypes:()=>o(this,null,function*(){a.value="",e.value=!0;let r=yield n.get("/api/offerTypes",{headers:{Authorization:`Bearer ${localStorage.token}`}});c.value=r.data.data,e.value=!1}),getOfferType:r=>o(this,null,function*(){a.value="",e.value=!0;let t=yield n.get("/api/offerTypes/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,p.value=t.data.data}),createOfferType:r=>o(this,null,function*(){a.value="";try{e.value=!0,yield n.post("/api/offerTypes",r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){if(t.response.status==422){e.value=0;for(const s in t.response.data.errorsOT)a.value+=t.response.data.errorsOT[s][0]+`
`}}}),updateOfferType:(r,t)=>o(this,null,function*(){a.value="";try{e.value=!0,yield n.put("/api/offerTypes/"+r,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(s){if(e.value=0,s.response.status==422)for(const d in s.response.data.errorsOT)a.value+=s.response.data.errorsOT[d][0]+`	
`}}),destroyOfferType:r=>o(this,null,function*(){a.value="";try{return e.value=!0,yield n.delete("/api/offerTypes/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(t){e.value=0,a.value="Impossible de supprimer ce offerType"}})}}function T(){const c=l([]),p=l([]),a=l(""),e=l(0);return{yearExperiences:c,yearExperience:p,errorsYE:a,loading:e,getYearExperiences:()=>o(this,null,function*(){a.value="",e.value=!0;let r=yield n.get("/api/yearExperiences",{headers:{Authorization:`Bearer ${localStorage.token}`}});c.value=r.data.data,e.value=!1}),getYearExperience:r=>o(this,null,function*(){a.value="",e.value=!0;let t=yield n.get("/api/yearExperiences/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,p.value=t.data.data}),createYearExperience:r=>o(this,null,function*(){a.value="";try{e.value=!0,yield n.post("/api/yearExperiences",r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){if(t.response.status==422){e.value=0;for(const s in t.response.data.errorsYE)a.value+=t.response.data.errorsYE[s][0]+`
`}}}),updateYearExperience:(r,t)=>o(this,null,function*(){a.value="";try{e.value=!0,yield n.put("/api/yearExperiences/"+r,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(s){if(e.value=0,s.response.status==422)for(const d in s.response.data.errorsYE)a.value+=s.response.data.errorsYE[d][0]+`	
`}}),destroyYearExperience:r=>o(this,null,function*(){a.value="";try{return e.value=!0,yield n.delete("/api/yearExperiences/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(t){e.value=0,a.value="Impossible de supprimer ce yearExperience"}})}}export{T as a,E as u};