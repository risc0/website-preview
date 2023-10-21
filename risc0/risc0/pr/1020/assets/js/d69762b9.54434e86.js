"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,h=l["".concat(s,".").concat(f)]||l[f]||m[f]||o;return r?a.createElement(h,c(c({ref:t},u),{},{components:r})):a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},c="What is an Execution Trace?",i={unversionedId:"proof-system/what_is_a_trace",id:"version-0.18/proof-system/what_is_a_trace",title:"What is an Execution Trace?",description:"When a piece of code runs on a machine, the execution trace is a complete record of the computation: a snapshot of the full state of the machine at each clock cycle of the computation.",source:"@site/versioned_docs/version-0.18/proof-system/what_is_a_trace.md",sourceDirName:"proof-system",slug:"/proof-system/what_is_a_trace",permalink:"/website-preview/risc0/risc0/pr/1020/proof-system/what_is_a_trace",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/proof-system/what_is_a_trace.md",tags:[],version:"0.18",sidebarPosition:2,frontMatter:{sidebar_position:2}},s={},p=[],u={toc:p},l="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-an-execution-trace"},"What is an Execution Trace?"),(0,n.kt)("p",null,"When a piece of code runs on a machine, the ",(0,n.kt)("strong",{parentName:"p"},"execution trace")," is a complete record of the computation: a snapshot of the full state of the machine at each clock cycle of the computation."),(0,n.kt)("p",null,"It's typical to write an execution trace as a rectangular array, where each row shows the complete state of the machine at a given moment in time, and each column shows a temporal record of some particular aspect of the computation (say, the value stored in a particular RISC-V register) at each clock cycle.\nA line-by-line analysis of the trace allows for a computational audit with respect to the program instructions and the underlying computer architecture."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"RISC Zero's computational receipts use cutting-edge technology to audit an execution trace while preserving computational privacy.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The core of a RISC Zero receipt is a ",(0,n.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1020/reference-docs/about-starks"},"zk-STARK"),"; for a more technical description of how we turn an execution trace into a zk-STARK, see the ",(0,n.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1020/proof-system/proof-system-sequence-diagram"},"proof system sequence diagram")," and our ",(0,n.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1020/proof-system/stark-by-hand"},"STARK by Hand")," explainer.")))}m.isMDXComponent=!0}}]);