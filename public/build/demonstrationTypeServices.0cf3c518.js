var r=(u,l,t)=>new Promise((e,y)=>{var d=s=>{try{p(t.next(s))}catch(a){y(a)}},v=s=>{try{p(t.throw(s))}catch(a){y(a)}},p=s=>s.done?e(s.value):Promise.resolve(s.value).then(d,v);p((t=t.apply(u,l)).next())});import{G as T,r as c,p as i}from"./app.59e8d623.js";function h(){T();const u=c([]),l=c([]),t=c(""),e=c(0);return{demonstrationTypes:u,demonstrationType:l,errors:t,loading:e,getDemonstrationTypes:()=>r(this,null,function*(){t.value="",e.value=!0;let a=yield i.get("/api/demonstrationTypes",{headers:{Authorization:`Bearer ${localStorage.token}`}});u.value=a.data.data,e.value=!1}),getDemonstrationType:a=>r(this,null,function*(){t.value="",e.value=!0;let o=yield i.get("/api/demonstrationTypes/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,l.value=o.data.data}),createDemonstrationType:a=>r(this,null,function*(){t.value="";try{e.value=!0,yield i.post("/api/demonstrationTypes",a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){if(o.response.status==422){e.value=0;for(const n in o.response.data.errors)t.value+=o.response.data.errors[n][0]+`
`}}}),updateDemonstrationType:(a,o)=>r(this,null,function*(){t.value="";try{e.value=!0,yield i.put("/api/demonstrationTypes/"+o,a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(n){if(e.value=0,n.response.status==422)for(const m in n.response.data.errors)t.value+=n.response.data.errors[m][0]+`	
`}}),destroyDemonstrationType:a=>r(this,null,function*(){t.value="";try{e.value=!0,yield i.delete(`/api/demonstrationTypes/${JSON.stringify(a)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){e.value=0,o.response.status=="500"&&(t.value="Impossible de supprimer cette category")}})}}export{h as u};