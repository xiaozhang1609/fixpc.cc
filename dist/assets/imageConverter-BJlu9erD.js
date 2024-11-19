import{u as D,r,j as e}from"./index-D8C4Unn2.js";import{J as L}from"./jszip.min-GzY98O7_.js";import{F as k}from"./file-type-C6bsTJr7.js";import{U as z}from"./upload-B2LFwsKQ.js";import{D as E}from"./download-C70HVtDa.js";import{A}from"./alert-circle--aXGg6qA.js";function J(){D();const[n,v]=r.useState([]),[d,w]=r.useState("png"),[i,b]=r.useState(!1),[f,x]=r.useState(null),[g,u]=r.useState(0),p=r.useRef(null),[y,C]=r.useState(0),h=r.useCallback(a=>{const t=Array.from(a).filter(s=>s.type.startsWith("image/"));if(t.reduce((s,c)=>s+c.size,0)>50*1024*1024){x("总文件大小不能超过 50MB");return}x(t.length===0?"请上传图片文件":null),v(t),C(t.length)},[]),I=r.useCallback(async()=>{if(n.length===0||!p.current)return;b(!0),u(0);const a=new L;try{for(let s=0;s<n.length;s++){const c=n[s],o=new window.Image;o.src=URL.createObjectURL(c),await new Promise((U,j)=>{o.onload=()=>{const m=p.current,R=m.getContext("2d");m.width=o.width,m.height=o.height,R.drawImage(o,0,0),m.toBlob(N=>{N?(a.file(`${c.name.split(".")[0]}.${d}`,N),u(Math.round((s+1)/n.length*100)),U()):j("图片转换失败")},`image/${d}`)},o.onerror=()=>j("图片加载失败")})}const t=await a.generateAsync({type:"blob"}),l=document.createElement("a");l.href=URL.createObjectURL(t),l.download="转换后的图片.zip",l.click()}catch(t){x(typeof t=="string"?t:"转换过程中出现错误")}finally{b(!1),u(0)}},[n,d]),S=r.useCallback(()=>{const a=document.createElement("input");a.type="file",a.accept="image/*",a.multiple=!0,a.onchange=t=>{const l=t.target.files;l&&h(l)},a.click()},[h]);return e.jsxs("div",{className:"w-full max-w-5xl mx-auto p-4 md:p-6 space-y-6",children:[e.jsxs("div",{className:"card bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 p-6 md:p-8",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 pb-6 border-b border-gray-100 dark:border-gray-800",children:[e.jsx("div",{className:"p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-2xl",children:e.jsx(k,{className:"w-8 h-8 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50",children:"图片格式转换"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1.5 text-sm md:text-base",children:"支持批量转换图片格式，可同时转换多张图片"})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors",onDragOver:a=>a.preventDefault(),onDrop:a=>{a.preventDefault(),h(a.dataTransfer.files)},onClick:S,children:[e.jsx(z,{className:"w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["点击或拖拽上传图片",e.jsx("br",{}),e.jsx("span",{className:"text-sm text-gray-500",children:"支持批量上传，单次最大 50MB"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-800 dark:text-gray-200",children:[e.jsx(k,{className:"w-5 h-5"}),e.jsx("h2",{className:"font-medium",children:"选择输出格式"})]}),e.jsx("div",{className:"flex gap-6",children:["png","jpeg","webp"].map(a=>e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"format",value:a,checked:d===a,onChange:t=>w(t.target.value),className:"text-blue-600 focus:ring-blue-500"}),e.jsx("span",{className:"uppercase text-gray-700 dark:text-gray-300",children:a})]},a))})]}),y>0&&e.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl",children:e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["已选择 ",y," 张图片"]})}),i&&g>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300",style:{width:`${g}%`}})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["正在转换: ",g,"%"]})]}),e.jsxs("button",{onClick:I,disabled:n.length===0||i,className:"w-full h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",children:[i?e.jsx("span",{className:"loader","aria-hidden":"true"}):e.jsx(E,{className:"w-5 h-5"}),i?"正在转换...":"开始转换"]}),f&&e.jsxs("div",{className:"flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl",children:[e.jsx(A,{className:"w-5 h-5"}),e.jsx("span",{children:f})]})]})]}),e.jsx("canvas",{ref:p,className:"hidden"})]})}export{J as default};
