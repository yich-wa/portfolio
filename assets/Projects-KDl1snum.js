import{r as l,j as e,L as d,P as p}from"./index-7VhDJTNS.js";import{g as r,S as g}from"./ScrollTrigger-NVtKjWm5.js";import{R as x,S as h,a as u}from"./ResImg-TiEJBiTz.js";const v=({isFirstItem:c,project:t})=>{const[i,a]=l.useState(!1),n=s=>s.id==="pc-pi-right"?!1:s.tagName==="A"?!0:n(s.parentElement),o=s=>{n(s.target)||a(!i)};return e.jsxs("div",{className:"project-item-container",children:[e.jsx("div",{className:`${c?"first-pi-pic":""} pi-pic`,children:e.jsx(x,{outClassName:"pi-pic-img",posClassName:"w-[100%] h-[100%] object-contain",bigSrc:t.img,smallSrc:t.smallImg,threshold:.05})}),e.jsxs("div",{id:"pc-pi-right",className:`pc-pi-right ${i?"pcp-item-active":""}`,onClick:s=>o(s),children:[e.jsxs("div",{className:"mt-4 mb-4 start-container",children:[e.jsx("div",{className:"bold-subhead-text mr-2",children:t.name}),e.jsx("div",{className:"subhead-text",children:t.type})]}),e.jsx("div",{className:"visit-text mt-1",children:t.shortDescription}),e.jsx("div",{className:"visit-text mt-1",children:t.date}),e.jsx("div",{className:"start-container gap-2 mt-2 flex-wrap",children:t.keyWords.map(s=>e.jsx("div",{className:"light-text whitespace-nowrap",children:`#${s}`},s))}),e.jsxs("div",{className:"flex justify-between items-end mb-2",children:[e.jsxs(d,{to:t.link,target:"_blank",rel:"",className:"mt-4 flex items-center gap-2",children:[e.jsx("img",{src:t.iconUrl,alt:"threads",className:"w-6 h-6 object-contain object-left item-represent-icon"}),e.jsx("div",{className:"visit-text",children:t.live}),e.jsx("div",{className:"visit-container ",children:e.jsx(h,{})})]}),e.jsx("div",{className:"fold-container",children:e.jsx(u,{})})]}),e.jsx("div",{className:"mpi-fold-content",children:t.points.map((s,m)=>e.jsx("p",{className:"relative project-point my-4 indent-4 light-text",children:s},m))})]})]})};r.registerPlugin(g);r.defaults({ease:"power1.out",duration:2});const b=()=>{const c=l.useRef(!1);return l.useEffect(()=>{const t=r.utils.toArray(".pi-pic-img"),i=r.utils.toArray(".project-item-container");c.current||(i.forEach((a,n)=>{r.to(a,{yPercent:100,ease:"none",scrollTrigger:{trigger:a,start:"bottom bottom",end:"bottom up",scrub:!0,toggleActions:"restart pause reverse pause"}})}),i.forEach((a,n)=>{r.to(t[n],{ease:"none",opacity:1,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scrollTrigger:{trigger:a,start:"top 83%",end:"bottom bottom",scrub:!0,toggleClass:"pi-item-active"}})}),i.length>0&&(c.current=!0))}),e.jsx("section",{className:"page-content max-container md:px-12 px-8",children:p.map((t,i)=>e.jsx(v,{isFirstItem:i===0,project:t},t.name))})};export{b as default};
