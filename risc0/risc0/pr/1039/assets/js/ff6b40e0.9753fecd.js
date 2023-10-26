"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,h=u["".concat(p,".").concat(k)]||u[k]||m[k]||n;return r?i.createElement(h,o(o({ref:t},l),{},{components:r})):i.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2,slug:"./"},o="zkVM Overview",s={unversionedId:"zkvm/zkvm_overview",id:"zkvm/zkvm_overview",title:"zkVM Overview",description:"WARNING: This software is still experimental, we do not recommend it for production use.",source:"@site/docs/zkvm/zkvm_overview.md",sourceDirName:"zkvm",slug:"/zkvm/",permalink:"/website-preview/risc0/risc0/pr/1039/next/zkvm/",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/zkvm/zkvm_overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"./"},sidebar:"GettingStartedSidebar",previous:{title:"A Blockchain Developer's Guide to the zkVM",permalink:"/website-preview/risc0/risc0/pr/1039/next/bonsai/blockchain-zkvm-guide"},next:{title:"zkVM Quick Start",permalink:"/website-preview/risc0/risc0/pr/1039/next/zkvm/quickstart"}},p={},c=[{value:"zkvM Quick Start",id:"zkvm-quick-start",level:3},{value:"Building a zkVM Application",id:"building-a-zkvm-application",level:2},{value:"Deploying a zkVM Application",id:"deploying-a-zkvm-application",level:2},{value:"Next Steps",id:"next-steps",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zkvm-overview"},"zkVM Overview"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"WARNING: This software is still experimental, we do not recommend it for production use.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you're ready to start building, check out our ",(0,a.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/quickstart"},"zkVM Quick Start")," and our ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples"},"zkVM example applications"),".")),(0,a.kt)("p",null,"The RISC Zero zero-knowledge virtual machine (zkVM) lets you ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#validity-proof"},"prove")," correct execution of arbitrary Rust code.\nBy allowing users to build zero-knowledge applications that ",(0,a.kt)("strong",{parentName:"p"},"leverage existing Rust packages"),", the RISC Zero zkVM makes it quick and easy to build powerful verifiable software applications.\nOur demos show how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use chess crates to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/chess#zk-checkmate"},"prove mate-in-one")),(0,a.kt)("li",{parentName:"ul"},"use JSON crate to make ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/tree/main/examples/json#json-example"},"proofs about private data")),(0,a.kt)("li",{parentName:"ul"},"use JPG crates to ",(0,a.kt)("a",{parentName:"li",href:"https://www.risczero.com/news/waldo"},"prove you can find Waldo")),(0,a.kt)("li",{parentName:"ul"},"use Rust-Ethereum crates like ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bluealloy/revm"},"revm"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js"},"ethers"),", and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/alloy-rs"},"alloy")," to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://risczero.com/news/zeth-release"},"prove correct construction of Ethereum blocks")),".")),(0,a.kt)("p",null,"On any other proving platform, building any of these projects requires starting from the ground up.\nBy letting developers use the primitives they need, the RISC Zero zkVM makes verifiable software development a practical reality for projects of all scales."),(0,a.kt)("p",null,"We're focused on delivering a first-class developer experience together with first-class performance.\nWe offer an open-source prover that can prove computations of any size on standard consumer hardware, and we make it easy to request/receive proofs remotely with ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/bonsai/"},"Bonsai"),"."),(0,a.kt)("p",null,"The documentation on this site will teach you how to write software for the RISC Zero zkVM, how to use the zkVM to generate proofs on your own machine, and how to use Bonsai for remote proof generation."),(0,a.kt)("h3",{id:"zkvm-quick-start"},(0,a.kt)("a",{parentName:"h3",href:"./quickstart"},(0,a.kt)("inlineCode",{parentName:"a"},"zkvM Quick Start"))),(0,a.kt)("h2",{id:"building-a-zkvm-application"},"Building a zkVM Application"),(0,a.kt)("p",null,"The core of a zkVM application is the ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/guest-code-101"},"guest program"),".\nThe guest program is the part of the application that gets proven."),(0,a.kt)("p",null,"To prove correct execution of the ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/guest-code-101"},"guest program"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/guest-code-101"},"guest program")," is compiled to an ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#elf-binary"},"ELF binary"),". ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#executor"},"executor")," runs the ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#elf-binary"},"ELF binary")," and records the ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#session"},"session"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#prover"},"prover")," checks and proves the validity of the ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#session"},"session"),", outputting a ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/receipts"},"receipt"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You only need to worry about the details of step 2 & step 3 if you're running the zkVM on your own hardware.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/host-code-101"},"Host Code 101")," for more details on these steps.\nIf you're using ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/bonsai/"},"Bonsai")," for remote proving, you won't need to write host code.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"From Guest Code to Receipt",src:r(8318).Z,width:"1778",height:"892"})),(0,a.kt)("p",null,"Anyone with a copy of the ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/receipts"},"receipt")," can ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#verify"},"verify")," the ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/guest-code-101"},"guest program"),"'s execution and read its ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#journal"},"publicly shared outputs"),".\nThe verification algorithm receives an ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/terminology#image-id"},"ImageID")," as a parameter; the ImageID serves as a cryptographic identifier for the expected ELF binary."),(0,a.kt)("h2",{id:"deploying-a-zkvm-application"},"Deploying a zkVM Application"),(0,a.kt)("p",null,"Once you've built a zkVM application, you can generate proofs on your own machine(s) or you can make requests to ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/bonsai/"},"Bonsai")," to generate proofs as needed."),(0,a.kt)("p",null,"For local proof generation, we recommend a machine with at least 16GB of RAM.\nOptions for generating proofs using GPU acceleration and skipping proof generation are documented in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0#feature-flags"},"feature flags"),"."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Ready to start building zkVM applications?")," ",(0,a.kt)("br",null),"\nCheck out ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/quickstart"},"zkVM Quickstart")," & ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/guest-code-101"},"Guest Code 101"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Want to browse some demos?")," ",(0,a.kt)("br",null),"\nCheck out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples"},"zkVM example applications"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Curious about performance?")," ",(0,a.kt)("br",null),"\nCheck the ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/zkvm/benchmarks"},"performance benchmarks")," page."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Looking for information about blockchain integration?")," ",(0,a.kt)("br",null),"\nCheck out ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1039/next/bonsai/"},"Bonsai"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Curious about Zeth?"),(0,a.kt)("br",null),"\nRead the ",(0,a.kt)("a",{parentName:"p",href:"https://risczero.com/news/zeth-release"},"article"),"."))}m.isMDXComponent=!0},8318:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"}}]);