"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=a,h=l["".concat(s,".").concat(f)]||l[f]||m[f]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},c="What is an Execution Trace?",i={unversionedId:"proof-system/what_is_a_trace",id:"proof-system/what_is_a_trace",title:"What is an Execution Trace?",description:"When a piece of code runs on a machine, the execution trace is a complete",source:"@site/docs/proof-system/what_is_a_trace.md",sourceDirName:"proof-system",slug:"/proof-system/what_is_a_trace",permalink:"/website-preview/risc0/risc0/pr/1042/next/proof-system/what_is_a_trace",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/proof-system/what_is_a_trace.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},s={},p=[],u={toc:p},l="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-an-execution-trace"},"What is an Execution Trace?"),(0,a.kt)("p",null,"When a piece of code runs on a machine, the ",(0,a.kt)("strong",{parentName:"p"},"execution trace")," is a complete\nrecord of the computation: a snapshot of the full state of the machine at each\nclock cycle of the computation."),(0,a.kt)("p",null,"It's typical to write an execution trace as a rectangular array, where each row\nshows the complete state of the machine at a given moment in time, and each\ncolumn shows a temporal record of some particular aspect of the computation\n(say, the value stored in a particular RISC-V register) at each clock cycle. A\nline-by-line analysis of the trace allows for a computational audit with respect\nto the program instructions and the underlying computer architecture."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RISC Zero's computational receipts use cutting-edge technology to audit an\nexecution trace while preserving computational privacy.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The core of a RISC Zero receipt is a\n",(0,a.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1042/next/reference-docs/about-starks"},"zk-STARK"),"; for a more technical description\nof how we turn an execution trace into a zk-STARK, see the ",(0,a.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1042/next/proof-system/proof-system-sequence-diagram"},"proof system\nsequence diagram")," and our ",(0,a.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1042/next/proof-system/stark-by-hand"},"STARK by\nHand")," explainer.")))}m.isMDXComponent=!0}}]);