import{c as a,d as r,e as n,_ as k,G as z,F as L,x as $,f as h,g as w,t as B,m as _,r as x,B as D,l as g,O as y,w as I,k as C,T as V}from"./app.1a4e1017.js";function j(c,u){return a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[n("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z","clip-rule":"evenodd"})])}function F(c,u){return a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[n("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z","clip-rule":"evenodd"})])}const M={class:"no-scrollbar h-36 w-full items-center justify-start space-x-2 overflow-x-auto rounded-b bg-gray-50 p-3"},U={key:0},A=["src","alt"],O=["src","onLoad","alt"],R=["onClick"],T={key:2,class:"absolute bottom-2 right-2 rounded-full bg-black/50 py-1 px-2 text-[10px] text-white"},N={__name:"UploadList",props:{files:{type:Array,default:[]}},emits:["removeItem"],setup(c,{emit:u}){const m=c,f=z(()=>m.files.reverse());function i(l){return URL.createObjectURL(l)}function v(l){return URL.revokeObjectURL(l)}function s(l){const d=["Bytes","KB","MB","GB","TB"];if(l===0)return"n/a";const e=parseInt(Math.floor(Math.log(l)/Math.log(1024)),10);return e===0?`${l} ${d[e]})`:`${(l/1024**e).toFixed(1)} ${d[e]}`}function p(l){u("removeItem",l)}return(l,d)=>(a(),r("div",M,[(a(!0),r(L,null,$(w(f),(e,t)=>(a(),r("div",{key:t,class:"relative inline-block h-full w-28 overflow-hidden rounded bg-white shadow sm:w-36"},[typeof e=="string"?(a(),r("div",U,[n("img",{src:e,alt:e.name},null,8,A)])):(a(),r("img",{key:1,src:i(e.file),onLoad:o=>v(e.file),alt:e.file.name,class:"h-full w-full object-cover"},null,40,O)),n("button",{type:"button",onClick:o=>p(e),class:"hover:text-secondary-color absolute top-2 left-2 rounded-full text-[10px] text-black/50 text-white"},[h(w(F),{class:"h-5 w-5"})],8,R),e.file?(a(),r("span",T,B(s(e.file.size)),1)):_("",!0)]))),128))]))}},S=k(N,[["__scopeId","data-v-3691789c"]]),G={class:"w-full"},E=["disabled"],H={for:"dropzone-file",class:"flex flex-col items-center justify-center text-center"},K=n("p",null,[n("span",{class:"block font-semibold"},"Drag and Drop files to upload"),n("span",{class:"block"},"Your files will be added automatically")],-1),Y={__name:"DropZone",props:{modelValue:{type:Array},multiple:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(c,{emit:u}){const m=c,f=x(null),i=x(!1),v=x(0),s=x([]);async function p(e){const t=e.target.files||e.dataTransfer.files||f.value.files;for(let o=0;o<t.length;o++){const b=t[o];s.value.push({id:v.value,file:b}),v.value++}u("update:modelValue",s.value),i.value=!1}D(m,async function(e,t){s.value=e.modelValue});async function l(e){s.value.splice(s.value.indexOf(e),1),s.value=s.value.reverse()}async function d(){i.value=!i.value}return(e,t)=>(a(),r("div",G,[n("div",{class:y([i.value?"bg-secondary-color flex w-full flex-col items-center justify-center rounded border-2 border-dashed p-4 transition-colors":"flex w-full flex-col items-center justify-center rounded border-2 border-dashed bg-white p-4 transition-colors"])},[c.multiple?(a(),r("input",{key:0,type:"file",multiple:"",accept:"image/*",name:"dropzone-file",id:"dropzone-file",class:"hidden",ref_key:"dropzoneFile",ref:f,onChange:t[0]||(t[0]=o=>p(o))},null,544)):(a(),r("input",{key:1,disabled:s.value.length!=0,type:"file",accept:"image/*",name:"dropzone-file",id:"dropzone-file",class:"hidden",ref_key:"dropzoneFile",ref:f,onChange:t[1]||(t[1]=o=>p(o))},null,40,E)),n("div",{class:"w-full",onDragenter:t[2]||(t[2]=g(o=>d(),["prevent"])),onDragover:t[3]||(t[3]=g(()=>{},["prevent"])),onDragleave:t[4]||(t[4]=o=>d()),onDrop:t[5]||(t[5]=g(o=>p(o),["prevent"]))},[n("label",H,[h(w(j),{class:y([i.value?"h-8 w-8 text-white lg:h-10 lg:w-10":"h-8 w-8 text-gray-500 lg:h-10 lg:w-10"])},null,8,["class"]),n("div",{class:y([i.value?"space-y-4 text-xs text-white ":"space-y-4 text-xs"])},[K,n("span",{class:y([i.value?"inline-block cursor-pointer rounded border border-white px-2 py-1 text-xs text-white":"inline-block cursor-pointer rounded border border-gray-600 px-2 py-1 text-xs text-gray-900"])},"Or select files",2)],2)])],32)],2),h(V,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 -translate-y-full absolute","enter-to-class":"opacity-1 translate-y-0","leave-active-class":"transition duration-500","leave-from-class":"opacity-1/2 translate-y-0","leave-to-class":"-translate-y-1/2 opacity-0 "},{default:I(()=>[s.value.length!=0?(a(),C(S,{key:0,files:s.value,onRemoveItem:l},null,8,["files"])):_("",!0)]),_:1})]))}};export{Y as _};
