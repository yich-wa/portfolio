import{r as a,j as s,L as o,P as x}from"./index-3ra36EY2.js";import{R as h,S as j,a as v}from"./ResImg-qbjy_t7B.js";import{u as f}from"./useOnScreen-F3EdMhsb.js";const p=({project:e})=>{const i=a.useRef(null),[c,r]=a.useState(!1),n=f(i),[l,m]=a.useState(!1);return a.useEffect(()=>{n&&!l&&m(!0)},[n]),s.jsxs("div",{ref:i,children:[!l&&s.jsx("div",{className:"h-[31.8rem] w-full mt-12"}),l&&s.jsxs("div",{className:`mpi-container ${c?"st-item-active":""}`,children:[s.jsx("div",{className:"pi-pic first-pi-pic",children:s.jsx(h,{outClassName:"pi-pic-img",posClassName:"w-[100%] h-[100%] object-contain",bigSrc:e.img,smallSrc:e.smallImg})}),s.jsxs("div",{className:"px-3",children:[s.jsxs("div",{className:"flex justify-between items-end",children:[s.jsxs("div",{className:"start-container",children:[s.jsx("div",{className:"bold-content-text mr-2",children:e.name}),s.jsx("div",{className:"bold-content-text",children:e.type})]}),s.jsx("div",{className:"primary-light-text",children:e.date})]}),s.jsx("div",{className:"primary-light-text mt-2",children:e.shortDescription}),s.jsx("div",{className:"start-container gap-2 mt-2",children:e.keyWords.map(t=>s.jsx("div",{className:"light-text",children:`#${t}`},t))}),s.jsxs("div",{className:"flex justify-between items-end my-4",children:[s.jsxs(o,{to:e.link,target:"_blank",rel:"",className:"flex items-center gap-2",children:[s.jsx("img",{src:e.iconUrl,alt:"threads",className:"w-6 h-6 object-contain object-left item-represent-icon"}),s.jsx("div",{className:"primary-light-text",children:e.live}),s.jsx("div",{className:"visit-container",children:s.jsx(j,{})})]}),s.jsx("div",{className:"fold-container",onClick:()=>r(!c),children:s.jsx(v,{})})]}),s.jsx("div",{className:"mpi-fold-content",children:e.points.map((t,d)=>s.jsx("p",{className:"relative project-point my-4 indent-4 light-text",children:t},d))})]})]})]})},y=()=>s.jsx("section",{className:"page-content w-full min-h-[calc(100vh-9rem)] p-16 px-8 flex flex-col justify-start",children:x.map((e,i)=>s.jsx(p,{project:e},i))});export{y as default};
