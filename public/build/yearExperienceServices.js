var o=(n,i,a)=>new Promise((e,v)=>{var y=c=>{try{p(a.next(c))}catch(r){v(r)}},f=c=>{try{p(a.throw(c))}catch(r){v(r)}},p=c=>c.done?e(c.value):Promise.resolve(c.value).then(y,f);p((a=a.apply(n,i)).next())});import{r as u,p as l}from"./app.js";function g(){const n=u([]),i=u([]),a=u(""),e=u(0);return{levelStudies:n,levelStudy:i,errorsLS:a,loading:e,getLevelStudies:()=>o(this,null,function*(){a.value="",e.value=!0;let r=yield l.get("/api/levelStudies",{headers:{Authorization:`Bearer ${localStorage.token}`}});n.value=r.data.data,e.value=!1}),getLevelStudy:r=>o(this,null,function*(){a.value="",e.value=!0;let t=yield l.get("/api/levelStudies/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,i.value=t.data.data}),createLevelStudy:r=>o(this,null,function*(){a.value="";try{e.value=!0,yield l.post("/api/levelStudies",r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){if(t.response.status==422){e.value=0;for(const s in t.response.data.errorsLS)a.value+=t.response.data.errorsLS[s][0]+`
`}}}),updateLevelStudy:(r,t)=>o(this,null,function*(){a.value="";try{e.value=!0,yield l.put("/api/levelStudies/"+r,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(s){if(e.value=0,s.response.status==422)for(const d in s.response.data.errorsLS)a.value+=s.response.data.errorsLS[d][0]+`	
`}}),destroyLevelStudy:r=>o(this,null,function*(){a.value="";try{e.value=!0,yield l.delete("/api/levelStudies/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){e.value=0,t.response.status=="500"&&(a.value="Impossible de supprimer ce pays")}})}}function E(){const n=u([]),i=u([]),a=u(""),e=u(0);return{offerTypes:n,offerType:i,errorsOT:a,loading:e,getOfferTypes:()=>o(this,null,function*(){a.value="",e.value=!0;let r=yield l.get("/api/offerTypes",{headers:{Authorization:`Bearer ${localStorage.token}`}});n.value=r.data.data,e.value=!1}),getOfferType:r=>o(this,null,function*(){a.value="",e.value=!0;let t=yield l.get("/api/offerTypes/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,i.value=t.data.data}),createOfferType:r=>o(this,null,function*(){a.value="";try{e.value=!0,yield l.post("/api/offerTypes",r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){if(t.response.status==422){e.value=0;for(const s in t.response.data.errorsOT)a.value+=t.response.data.errorsOT[s][0]+`
`}}}),updateOfferType:(r,t)=>o(this,null,function*(){a.value="";try{e.value=!0,yield l.put("/api/offerTypes/"+r,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(s){if(e.value=0,s.response.status==422)for(const d in s.response.data.errorsOT)a.value+=s.response.data.errorsOT[d][0]+`	
`}}),destroyOfferType:r=>o(this,null,function*(){a.value="";try{return e.value=!0,yield l.delete("/api/offerTypes/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(t){e.value=0,a.value="Impossible de supprimer ce offerType"}})}}function T(){const n=u([]),i=u([]),a=u(""),e=u(0);return{yearExperiences:n,yearExperience:i,errorsYE:a,loading:e,getYearExperiences:()=>o(this,null,function*(){a.value="",e.value=!0;let r=yield l.get("/api/yearExperiences",{headers:{Authorization:`Bearer ${localStorage.token}`}});n.value=r.data.data,e.value=!1}),getYearExperience:r=>o(this,null,function*(){a.value="",e.value=!0;let t=yield l.get("/api/yearExperiences/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,i.value=t.data.data}),createYearExperience:r=>o(this,null,function*(){a.value="";try{e.value=!0,yield l.post("/api/yearExperiences",r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(t){if(t.response.status==422){e.value=0;for(const s in t.response.data.errorsYE)a.value+=t.response.data.errorsYE[s][0]+`
`}}}),updateYearExperience:(r,t)=>o(this,null,function*(){a.value="";try{e.value=!0,yield l.put("/api/yearExperiences/"+r,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(s){if(e.value=0,s.response.status==422)for(const d in s.response.data.errorsYE)a.value+=s.response.data.errorsYE[d][0]+`	
`}}),destroyYearExperience:r=>o(this,null,function*(){a.value="";try{return e.value=!0,yield l.delete("/api/yearExperiences/"+r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(t){e.value=0,a.value="Impossible de supprimer ce yearExperience"}})}}export{E as a,T as b,g as u};
