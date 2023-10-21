"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={},a="About RISC-V",c={unversionedId:"reference-docs/about-risc-v",id:"version-0.18/reference-docs/about-risc-v",title:"About RISC-V",description:"RISC-V is a minimal, modular Von Neumann architecture.",source:"@site/versioned_docs/version-0.18/reference-docs/about-risc-v.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-risc-v",permalink:"/website-preview/risc0/risc0/pr/1020/reference-docs/about-risc-v",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/reference-docs/about-risc-v.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"About Number Theoretic Transforms",permalink:"/website-preview/risc0/risc0/pr/1020/reference-docs/about-ntts-and-fourier"},next:{title:"About Reed Solomon Codes",permalink:"/website-preview/risc0/risc0/pr/1020/reference-docs/about-rs-codes"}},s={},l=[{value:"Relevance in RISC Zero",id:"relevance-in-risc-zero",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Suggested Reading and Videos",id:"suggested-reading-and-videos",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-risc-v"},"About RISC-V"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/RISC-V"},"RISC-V")," is a minimal, modular ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Von_Neumann_architecture"},"Von Neumann architecture"),"."),(0,i.kt)("h2",{id:"relevance-in-risc-zero"},"Relevance in RISC Zero"),(0,i.kt)("p",null,"The simplicity of RISC-V as well as the maturity of the RISC-V ecosystem makes it ideal for a zero-knowledge virtual machine.\nRISC Zero's ",(0,i.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1020/zkvm/"},"zkVM")," implements the RISC-V rv32im specification, which consists of the rv32i base with the multiplication extension.\nThis means that developers can write code in languages such as Rust, Go, and C, compile the code to RISC-V assembly code, and execute it on the zkVM."),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"The specification of rv32im is defined in ",(0,i.kt)("a",{parentName:"p",href:"https://riscv.org/wp-content/uploads/2019/12/riscv-spec-20191213.pdf"},"The RISC-V Instruction Set Manual, Volume I: User-Level ISA"),".\nA succinct summary of the architecture is available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jameslzhu/riscv-card/blob/master/riscv-card.pdf"},"here")),(0,i.kt)("h2",{id:"suggested-reading-and-videos"},"Suggested Reading and Videos"),(0,i.kt)("p",null,"For more on how these ideas fit into RISC Zero's system, we recommend:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RISC Zero's talk from zk Summit 7: ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=od033ugtlYQ&list=PLcPzhUaCxlCgCvzkkaBWzVuHdBRsTNxj1&index=7"},"Encoding Von-Neumann Architectures in Zero-Knowledge Proof Systems")),(0,i.kt)("li",{parentName:"ul"},"RISC Zero Study Club: What is RISC-V and what does it have to do with RISC Zero's zkVM -- ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=11DIflEwx50&list=PLcPzhUaCxlCjdhONxEYZ1dgKjZh3ZvPtl&index=5&t=1s"},"video")," and ",(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1p7E5Sgi__5_CevGKHpTwrlb0KWjSaYPU/view"},"slides"))))}p.isMDXComponent=!0}}]);