var r=(l,v,i)=>new Promise((t,a)=>{var g=u=>{try{d(i.next(u))}catch(h){a(h)}},m=u=>{try{d(i.throw(u))}catch(h){a(h)}},d=u=>u.done?t(u.value):Promise.resolve(u.value).then(g,m);d((i=i.apply(l,v)).next())});import{r as c,p as n,q as p}from"./app.59e8d623.js";function D(){const l=c([]),v=c([]),i=c([]),t=c(""),a=c(0),g=c([]),m=c([]),d=c(!1),u=c(1);return{isAll:d,page:u,filterPost:s=>r(this,null,function*(){t.value="";try{a.value=3;let e=yield n.post("/api/posts-filter",s,{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=e.data.data,a.value=0}catch(e){e.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=e.response.data.message}}),posts:l,post:i,errors:t,loading:a,getPosts:(s,e)=>r(this,null,function*(){t.value="",a.value=!0;try{let o=yield n.get("/api/posts-type/"+s+"/"+e+"?page="+u.value,{headers:{Authorization:`Bearer ${localStorage.token}`}});u.value==1?l.value=o.data.data:l.value=l.value.concat(o.data.data),a.value=!1,o.data.data.length==0&&(d.value=!0)}catch(o){o.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=o.response.data.message}}),getPost:s=>r(this,null,function*(){t.value="";try{a.value=!0;let e=yield n.get("/api/posts/"+s,{headers:{Authorization:`Bearer ${localStorage.token}`}});a.value=0,i.value=e.data.data}catch(e){e.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=e.response.data.message}}),createPost:s=>r(this,null,function*(){t.value="";try{a.value=!0,yield n.post("/api/posts",s,{headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"multipart/form-data"}}),a.value=!1}catch(e){if(a.value=0,e.response.status==422)for(const o in e.response.data.errors)t.value+=e.response.data.errors[o][0]+`
`;else t.value=e.response.data.message}}),updatePost:s=>r(this,null,function*(){t.value="";try{a.value=!0,yield n.post("/api/posts/"+i.value.id,s,{headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"multipart/form-data"}}),a.value=!1}catch(e){if(a.value=0,e.response.status==422)for(const o in e.response.data.errors)t.value+=e.response.data.errors[o][0]+`	
`;else t.value=e.response.data.message}}),destroyPost:s=>r(this,null,function*(){t.value="";try{a.value=!0,yield n.delete(`/api/posts/${JSON.stringify(s)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),a.value=!1}catch(e){a.value=0,e.response.status=="500"?t.value="Impossible de supprimer ce post":t.value=e.response.data.message}}),getPostCarousssel:s=>r(this,null,function*(){t.value="";try{a.value=!0;let e=yield n.get("/api/posts-caroussel/"+s,{headers:{Authorization:`Bearer ${localStorage.token}`}});v.value=e.data.data,a.value=!1}catch(e){e.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=e.response.data.message}}),postCaroussel:v,getPost2:s=>r(this,null,function*(){t.value="";try{a.value=!0;let e=yield n.get("/api/posts2/"+s,{headers:{Authorization:`Bearer ${localStorage.token}`}});i.value=e.data.data,a.value=0}catch(e){e.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=e.response.data.message}}),getPostsAll:s=>r(this,null,function*(){t.value="";try{a.value=!0;let e=yield n.get("/api/posts-all/"+s,{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=e.data.data,a.value=!1}catch(e){e.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=e.response.data.message}}),getPostsUser:s=>r(this,null,function*(){t.value="";try{a.value=!0;let e=yield n.get("/api/posts-user/"+s,{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=e.data.data,g.value=l.value.filter(o=>o.type=="article"),m.value=l.value.filter(o=>o.type=="propau"),a.value=!1}catch(e){e.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=e.response.data.message}}),articles:g,getPostsByDate:(s,e)=>r(this,null,function*(){t.value="";try{a.value=!0;let o=yield n.get("/api/posts-date/"+s+"/"+e,{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=o.data.data,a.value=!1}catch(o){o.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=o.response.data.message}}),propau:m,getPostShared:s=>r(this,null,function*(){t.value="";try{a.value=!0;let e=yield n.get("/api/post-shared/"+s,{headers:{Authorization:`Bearer ${localStorage.token}`}});i.value=e.data.data,a.value=0}catch(e){e.response.status==401?(p.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user")):t.value=e.response.data.message}})}}export{D as u};