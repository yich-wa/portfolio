import{r as l,j as e,P as d,L as x}from"./index-3ra36EY2.js";import{R as g,S as p,a as h}from"./ResImg-qbjy_t7B.js";import{g as i,S as u}from"./ScrollTrigger-NVtKjWm5.js";i.registerPlugin(u);i.defaults({ease:"power1.out",duration:2});const N=()=>{const c=!!localStorage.isMobile,n=l.useRef(!1),[o,m]=l.useState(!1);return l.useEffect(()=>{const s=i.utils.toArray(".pi-pic-img"),a=i.utils.toArray(".project-item-container");n.current||(c||a.forEach((t,r)=>{i.to(t,{yPercent:100,ease:"none",scrollTrigger:{trigger:t,start:"bottom bottom",end:"bottom up",scrub:!0,toggleActions:"restart pause reverse pause"}})}),a.forEach((t,r)=>{i.to(s[r],{ease:"none",opacity:1,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scrollTrigger:{trigger:t,start:`top ${c?"70":"80"}%`,end:"bottom bottom",scrub:!0,toggleClass:"pi-item-active"}})}),a.length>0&&(n.current=!0))}),e.jsx("section",{className:"page-content max-container md:px-12 px-8",children:d.map((s,a)=>e.jsxs("div",{className:`project-item-container ${o?"st-item-active":""}`,children:[e.jsx("div",{className:`${a===0?"first-pi-pic":""} pi-pic`,children:e.jsx(g,{outClassName:"pi-pic-img",posClassName:"w-[100%] h-[100%] object-contain",bigSrc:s.img,smallSrc:s.smallImg})}),e.jsxs("div",{className:"md:w-1/4 md:min-w-[248.5px] w-full md:pl-4",children:[e.jsxs("div",{className:"mt-4 mb-4 start-container",children:[e.jsx("div",{className:"bold-subhead-text mr-2",children:s.name}),e.jsx("div",{className:"subhead-text",children:s.type})]}),e.jsx("div",{className:"visit-text mt-1",children:s.shortDescription}),e.jsx("div",{className:"visit-text mt-1",children:s.date}),e.jsx("div",{className:"start-container gap-2 mt-2",children:s.keyWords.map(t=>e.jsx("div",{className:"light-text",children:`#${t}`},t))}),e.jsxs("div",{className:"flex justify-between items-end mb-2",children:[e.jsxs(x,{to:s.link,target:"_blank",rel:"",className:"mt-4 flex items-center gap-2",children:[e.jsx("img",{src:s.iconUrl,alt:"threads",className:"w-6 h-6 object-contain object-left item-represent-icon"}),e.jsx("div",{className:"visit-text",children:s.live}),e.jsx("div",{className:"visit-container ",children:e.jsx(p,{})})]}),e.jsx("div",{className:"fold-container",onClick:()=>m(!o),children:e.jsx(h,{})})]}),e.jsx("div",{className:"mpi-fold-content",children:s.points.map((t,r)=>e.jsx("p",{className:"relative project-point my-4 indent-4 light-text",children:t},r))})]})]},s.name))})};export{N as default};
