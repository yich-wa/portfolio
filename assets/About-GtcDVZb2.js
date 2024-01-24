import{r as a,j as s,m as v,S as y,E as N,L as x,a as E}from"./index-7VhDJTNS.js";import{R as h,S as p,a as k}from"./ResImg-TiEJBiTz.js";import{g as o,S as b}from"./ScrollTrigger-NVtKjWm5.js";import{u as g}from"./useOnScreen-EHs9hyEv.js";import{B as j}from"./Button-06DyBFBi.js";const S=""+new URL("smallSelf-J0oCHf85.webp",import.meta.url).href,w=()=>{const[e,t]=a.useState(!1),l=a.useRef(!1);return a.useEffect(()=>{l.current||(setTimeout(()=>{t(!0)},2e3),l.current=!0)}),e?s.jsxs("div",{className:"scroll-down-con",children:[s.jsx("div",{}),s.jsx("div",{})]}):null},R=()=>{const[e,t]=a.useState(!0);return s.jsxs("div",{className:"about-me-container",onWheel:()=>e&&t(!1),children:[s.jsxs("div",{className:"md:p-16 p-8 md:pr-4",children:[s.jsxs("div",{className:"flex flex-start gap-4 md:my-12 mb-8",children:[s.jsx("div",{className:"head-text",children:"ABOUT"}),s.jsx("div",{className:"bold-head-text",children:" ME"})]}),s.jsx("div",{className:"light-text my-2",children:"A Frontend Developer with 2 years experiences."}),s.jsx("div",{className:"light-text my-2",children:"Self-motivated, and willing to learn new tech."}),s.jsx("div",{className:"light-text my-2",children:"Currently looking for a remote Frontend position."})]}),s.jsx("div",{className:"relative md:m-0 mx-8 mb-8 xl:w-[70vw] w-[896px] h-[100vh] dark:bg-black-picbg bg-white-picbg",children:s.jsx(h,{outClassName:"self-img",posClassName:"w-[100%] h-[100%] object-cover grayscale-[65%] dark:brightness-[85%]",bigSrc:v,smallSrc:S})}),e&&s.jsx(w,{})]})},M=()=>{const[e,t]=a.useState(!0);return s.jsxs("div",{className:"about-me-container",style:{height:window.innerHeight},onTouchMove:()=>e&&t(!1),children:[s.jsx("div",{className:"absolute top-0 left-0 mx-0 mb-8 w-full dark:bg-black-picbg bg-white-picbg",style:{height:window.innerHeight},children:s.jsx(h,{outClassName:"self-img",posClassName:"w-[100%] h-[100%] object-cover grayscale-[65%] dark:brightness-[85%]",bigSrc:v,smallSrc:S})}),s.jsxs("div",{className:"md:p-16 p-8 md:pr-4",children:[s.jsxs("div",{className:"flex flex-start gap-2 md:my-12 mb-8",children:[s.jsx("div",{className:"head-text",children:"ABOUT"}),s.jsx("div",{className:"bold-head-text",children:" ME"})]}),s.jsx("div",{className:"primary-light-text my-2",children:"A Frontend Developer with 2 years experiences."}),s.jsx("div",{className:"primary-light-text my-2",children:"Self-motivated, and willing to learn new tech."}),s.jsx("div",{className:"primary-light-text my-2",children:"Currently looking for a remote Frontend position."})]}),e&&s.jsx(w,{})]})},f=2,T=({circleItems:e,radius:t,cIndex:l,setCenterText:i})=>{const c=r=>t*Math.cos(Math.PI*2*r/e.length)+t-f/2+"rem",m=r=>t*Math.sin(Math.PI*2*r/e.length)+t-f/2+"rem";return s.jsx("div",{className:"skill-circle",style:{margin:`${3.5*l}rem`,width:`${7*(5-l)}rem`,height:`${7*(5-l)}rem`},children:e.map((r,n)=>s.jsx("div",{className:"skill-circle-item",style:{left:c(n),top:m(n)},onMouseEnter:()=>i(r.name),onMouseLeave:()=>i("Skills"),children:s.jsx("img",{src:r.imageUrl})},n))})},C=()=>{const e=a.useRef(null),[t,l]=a.useState(!1),i=g(e),[c,m]=a.useState(!1),[r,n]=a.useState("Skills");return a.useEffect(()=>{i&&!c&&m(!0)},[i]),s.jsxs("div",{ref:e,className:`skill-system ${t?"skill-system-active":""} `,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[c&&y.map((u,d)=>s.jsx(T,{circleItems:u.items,cIndex:d,radius:(5-d)*3.5,setCenterText:n},d)),s.jsx("div",{className:"content-text ss-center-text center-container",children:r},r)]})};o.registerPlugin(b);o.defaults({ease:"power1.out",duration:2});const A=()=>{const e=!!localStorage.isMobile,t=a.useRef(!1),l=a.useRef(null),i=a.useRef(null),c=a.useRef(null);return a.useEffect(()=>{t.current||(o.to(i.current,{scrollTrigger:{trigger:l.current,start:`top ${e?80:60}%`,end:`top ${e?70:50}%`,scrub:!0,toggleActions:"restart pause reverse pause"},backgroundSize:"100% 100%"}),o.to(c.current,{scrollTrigger:{trigger:l.current,start:`top ${e?70:50}%`,end:`top ${e?60:40}%`,scrub:!0,toggleActions:"restart pause reverse pause"},backgroundSize:"100% 100%"}),t.current=!0)}),s.jsxs("div",{ref:l,className:"skills-wrapper",children:[s.jsxs("div",{className:"flex flex-col justify-start items-center gap-4 mt-24 mb-8",children:[s.jsx("div",{ref:i,className:"gradual-content-line head-text relative",children:"my skills"}),s.jsx("div",{ref:c,className:"gradual-content-line bold-head-text relative",children:"Front end & architecture"}),s.jsx("div",{className:"light-text",children:"Continue to study and learn new skills."})]}),s.jsx(C,{})]})};o.registerPlugin(b);o.defaults({});const $=()=>{const e=a.useRef(!1);return a.useEffect(()=>{if(e.current)return;const t=o.utils.toArray(".st-item"),l=t.shift();o.to(l,{scrollTrigger:{trigger:l,start:"top 60%",end:"bottom 25%",scrub:!0,toggleActions:"restart pause reverse pause",toggleClass:"st-item-active"}}),t.forEach((i,c)=>{o.to(i,{scrollTrigger:{trigger:i,start:"top 25%",end:"bottom 25%",scrub:!0,toggleActions:"restart pause reverse pause",toggleClass:"st-item-active"}})}),t.length>0&&(e.current=!0)}),s.jsx("section",{className:"w-[100%]",children:N.map(t=>s.jsxs("div",{className:`st-item exp-item-container ${t.isEdu?"edu-item":""}`,children:[s.jsxs("div",{className:"flex flex-row justify-between  items-start my-16 gap-8",children:[s.jsxs("div",{className:"title-con",children:[s.jsx("span",{className:"subhead-text mr-2",children:t.preTitle}),s.jsx("span",{className:"bold-subhead-text",children:t.title})]}),s.jsxs("div",{className:"exp-title-right",children:[s.jsxs("div",{className:"flex justify-start md:items-start items-center h-12",children:[s.jsx("img",{src:t.icon,alt:t.name,className:"w-6 h-6 mr-3 object-contain "}),s.jsx("div",{className:"primary-light-text",children:`${t.name}, ${t.site}`})]}),s.jsx("div",{className:"primary-light-text",children:t.date})]})]}),s.jsxs("div",{className:"exp-pc-content-con",children:[s.jsxs("div",{className:"ex-description scene-text-con",children:[s.jsx("div",{className:"light-text",children:t.description}),s.jsxs(x,{to:t.link,target:"_blank",rel:"",className:"my-4 flex items-center gap-2",children:[s.jsx("div",{className:"visit-text",children:t.live}),s.jsx("div",{className:"visit-container ",children:s.jsx(p,{})})]})]}),s.jsx(h,{outClassName:"",posClassName:"scene-pic scene-pic-con",bigSrc:t.scenePic,smallSrc:t.smallScenePic,alt:t.name})]})]},`${t.name}-${t.title}`))})},L=({experience:e,displayIndex:t,setDisplayIndex:l,index:i})=>{const c=a.useRef(null),m=g(c),[r,n]=a.useState(!1);a.useEffect(()=>{m&&!r&&n(!0)},[m]);const u=d=>{if(d===t){l(-1);return}l(d)};return s.jsxs("div",{ref:c,children:[!r&&s.jsx("div",{className:"h-[14.25rem] w-full"}),r&&s.jsxs("div",{className:`st-item exp-mobile-item-container ${e.isEdu?"edu-item":""} ${t===i?"st-item-active":""}`,children:[s.jsxs("div",{className:"flex flex-col justify-start items-start mt-16",onClick:()=>u(i),children:[s.jsxs("div",{className:"flex justify-between items-start w-full",children:[s.jsxs("div",{className:"title-con my-2",children:[s.jsx("div",{className:"subhead-text",children:e.preTitle}),s.jsx("div",{className:"bold-subhead-text",children:e.title})]}),s.jsx("div",{className:"fold-container",children:s.jsx(k,{})})]}),s.jsxs("div",{className:"start-container gap-8",children:[s.jsx("div",{className:"primary-light-text",children:e.date}),s.jsxs("div",{className:"flex justify-start md:items-start items-center h-12",children:[s.jsx("img",{src:e.icon,alt:e.name,className:"w-6 h-6 mr-3 object-contain item-represent-icon"}),s.jsx("div",{className:"primary-light-text",children:`${e.name}, ${e.site}`})]})]})]}),s.jsxs("div",{className:"exp-mobile-content-con",children:[s.jsx(h,{outClassName:"",posClassName:"scene-pic scene-pic-con",bigSrc:e.scenePic,smallSrc:e.smallScenePic,alt:e.name}),s.jsxs("div",{className:"ex-description scene-text-con",children:[s.jsx("div",{className:"light-text",children:e.description}),s.jsxs(x,{to:e.link,target:"_blank",rel:"",className:"py-4 flex items-center gap-2",children:[s.jsx("div",{className:"visit-text",children:e.live}),s.jsx("div",{className:"visit-container ",children:s.jsx(p,{})})]})]})]})]},`${e.name}-${e.title}`)]})},H=()=>{const[e,t]=a.useState(-1);return s.jsx("section",{className:"w-[100%]",children:N.map((l,i)=>s.jsx(L,{index:i,experience:l,displayIndex:e,setDisplayIndex:t},i))})},I=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:16,width:12,viewBox:"0 0 384 512",...e},a.createElement("path",{d:"M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"})),P=""+new URL("Resume-Yichao-4q9Zpgr8.pdf",import.meta.url).href,D=()=>{const e=a.useRef(),t=g(e);return s.jsx("section",{ref:e,className:`ro-container ${t?"ro-container-active":""}`,children:s.jsxs("div",{className:"reach-out",children:[s.jsxs("div",{className:"react-out-text",children:[s.jsx("span",{className:"ro-first-line gradual-content-line head-text center-container md:mb-4 mb-2",children:"LET'S CREATE"}),s.jsx("span",{className:"ro-second-line gradual-content-line bold-head-text",children:"SOMETHING GREAT TOGETHER!"}),s.jsx("span",{className:"smallest-text center-container mt-4",children:"A dream we dream together is reality."})]}),s.jsxs("div",{className:"flex gap-8",children:[s.jsx("div",{className:"ro-button opacity-30 w-44",children:s.jsx(x,{to:"/contact",children:s.jsx(j,{name:"contact",icon:()=>s.jsx(E,{})})})}),s.jsx("div",{className:"ro-button opacity-30 w-44",children:s.jsx("a",{href:P,download:"Resume-Yichao.pdf",children:s.jsx(j,{name:"resume",icon:()=>s.jsx(I,{})})})})]})]})})},U=()=>{const e=!!localStorage.isMobile;return s.jsxs("section",{className:"page-content max-container",children:[e?s.jsx(M,{}):s.jsx(R,{}),s.jsx(A,{}),e?s.jsx(H,{}):s.jsx($,{}),s.jsx(D,{})]})};export{U as default};
