import{c as E,u as F,r as i,R as f,j as e,L as C}from"./index-D8C4Unn2.js";import{M as B}from"./monitor-DtySFnLX.js";import{D as R}from"./download-C70HVtDa.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=E("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),o={even4:[{x:0,y:0,width:.5,height:.5},{x:.5,y:0,width:.5,height:.5},{x:0,y:.5,width:.5,height:.5},{x:.5,y:.5,width:.5,height:.5}],vertical3:[{x:0,y:0,width:.33,height:1},{x:.33,y:0,width:.34,height:1},{x:.67,y:0,width:.33,height:1}],vertical4:[{x:0,y:0,width:.25,height:1},{x:.25,y:0,width:.25,height:1},{x:.5,y:0,width:.25,height:1},{x:.75,y:0,width:.25,height:1}]},D=[{value:"1920x1080",label:"1920x1080 (16:9)"},{value:"2560x1440",label:"2560x1440 (16:9)"},{value:"3840x2160",label:"3840x2160 (4K)"}],$=["#F7F8FA","#2ECC71","#E74C3C","#F39C12","#9B59B6","#1ABC9C","#34495E","#7F8C8D"],b={even4:{classic:["#2C3E50","#E74C3C","#ECF0F1","#3498DB"],nature:["#27AE60","#2ECC71","#F1C40F","#E67E22"],modern:["#34495E","#9B59B6","#1ABC9C","#F39C12"]},vertical3:{classic:["#2C3E50","#E74C3C","#3498DB"],nature:["#27AE60","#2ECC71","#F1C40F"],modern:["#34495E","#9B59B6","#1ABC9C"]},vertical4:{classic:["#2C3E50","#E74C3C","#3498DB","#ECF0F1"],nature:["#27AE60","#2ECC71","#F1C40F","#E67E22"],modern:["#34495E","#9B59B6","#1ABC9C","#F39C12"]}},L=[{id:"even4",label:"2x2",icon:o.even4},{id:"vertical3",label:"1x3",icon:o.vertical3},{id:"vertical4",label:"1x4",icon:o.vertical4}];function q(){const{t:n}=F(),[r,y]=i.useState("even4"),[t,j]=i.useState("1920x1080"),[d,p]=i.useState([]),h=i.useRef(null),g=i.useCallback(()=>"#"+Array.from({length:6},()=>"0123456789ABCDEF"[Math.floor(Math.random()*16)]).join(""),[]),m=i.useCallback(()=>{p(o[r].map(()=>g()))},[r,g]),v=(a,s)=>{p(l=>Object.assign([...l],{[a]:s}))},u=i.useCallback(()=>{const a=h.current;if(!a)return;const[s,l]=t.split("x").map(Number);a.width=s,a.height=l;const c=a.getContext("2d");c&&o[r].forEach((x,k)=>{c.fillStyle=d[k]||g(),c.fillRect(x.x*s,x.y*l,x.width*s,x.height*l)})},[d,r,t,g]),w=i.useCallback(()=>{if(!h.current)return;u();const a=document.createElement("a");a.download=`wallpaper_${t}.png`,a.href=h.current.toDataURL("image/png"),a.click()},[u,t]);f.useEffect(()=>{m()},[r,m]),f.useEffect(()=>{u()},[d,r,t,u]);const N=(a,s)=>e.jsx("div",{className:`w-full h-full ${a==="vertical3"?"grid grid-cols-3":a==="vertical4"?"grid grid-cols-4":"grid grid-cols-2 grid-rows-2"}`,children:b[a][s].map((l,c)=>e.jsx("div",{className:"w-full h-full",style:{backgroundColor:l}},c))});return e.jsxs("div",{className:"w-full max-w-7xl mx-auto p-4 md:p-6",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl transition-all duration-300 group-hover:scale-110"}),e.jsx("div",{className:"relative p-3 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-xl",children:e.jsx(C,{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:rotate-12"})})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",children:n("quadWallpaper")}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:n("quadWallpaperDesc")})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 h-full",children:[e.jsx("div",{className:"lg:col-span-1 h-full",children:e.jsxs("div",{className:"card p-6 space-y-10 h-full",children:[e.jsx("div",{className:"space-y-8",children:L.map(a=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg",children:e.jsx(C,{className:"w-5 h-5 text-indigo-600 dark:text-indigo-400"})}),e.jsx("h3",{className:"text-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:a.label})]}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:["classic","nature","modern"].map(s=>e.jsx("button",{onClick:()=>{y(a.id),p(b[a.id][s])},className:`group relative border border-gray-200 dark:border-gray-700 
                          hover:border-blue-500 transition-colors ${r===a.id?"border-blue-500":""}`,style:{aspectRatio:"16/9"},children:N(a.id,s)},s))})]},a.id))}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(B,{className:"w-6 h-6 text-gray-500"}),e.jsx("h2",{className:"text-lg font-medium text-gray-700 dark:text-gray-300",children:n("resolution")})]}),e.jsx("select",{value:t,onChange:a=>j(a.target.value),className:"w-full p-3 text-base rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",children:D.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("button",{onClick:m,className:"btn-secondary h-12 text-base gap-3 group",children:[e.jsx(A,{className:"w-6 h-6 transition-transform duration-300 group-hover:rotate-180"}),e.jsx("span",{children:n("refreshColors")})]}),e.jsxs("button",{onClick:w,className:"btn-primary h-12 text-base gap-3 group",children:[e.jsx(R,{className:"w-6 h-6 transition-transform duration-300 group-hover:translate-y-1"}),e.jsx("span",{children:n("downloadWallpaper")})]})]})]})}),e.jsxs("div",{className:"lg:col-span-2 space-y-8 h-full flex flex-col",children:[e.jsx("div",{className:"card p-6 flex-grow",children:e.jsx("div",{className:"relative w-full h-full overflow-hidden rounded-xl shadow-sm bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",style:{paddingBottom:`${parseInt(t.split("x")[1])/parseInt(t.split("x")[0])*100}%`},children:o[r].map((a,s)=>e.jsx("div",{className:"absolute transition-all duration-300 hover:shadow-lg",style:{left:`${a.x*100}%`,top:`${a.y*100}%`,width:`${a.width*100}%`,height:`${a.height*100}%`,backgroundColor:d[s]||"#000000"}},s))})}),e.jsx("div",{className:"card p-6",children:e.jsx("div",{className:`grid gap-4 ${r==="even4"?"grid-cols-2":r==="vertical3"?"grid-cols-3":"grid-cols-4"}`,children:d.map((a,s)=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"color",value:a,onChange:l=>v(s,l.target.value),className:"w-full h-10 rounded-lg cursor-pointer"}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:$.map(l=>e.jsx("button",{onClick:()=>v(s,l),className:"w-6 h-6 rounded-full cursor-pointer hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all",style:{backgroundColor:l}},l))})]},s))})})]})]}),e.jsx("canvas",{ref:h,className:"hidden"})]})}export{q as default};