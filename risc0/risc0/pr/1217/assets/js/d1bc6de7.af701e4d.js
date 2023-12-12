"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[374],{5268:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=i(5893),t=i(1151);const o={sidebar_position:2,slug:"./"},n="zkVM Overview",a={id:"zkvm/zkvm_overview",title:"zkVM Overview",description:"WARNING: This software is still experimental, we do not recommend it for production use.",source:"@site/api_versioned_docs/version-0.19/zkvm/zkvm_overview.md",sourceDirName:"zkvm",slug:"/zkvm/",permalink:"/website-preview/risc0/risc0/pr/1217/api/zkvm/",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/zkvm_overview.md",tags:[],version:"0.19",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"./"},sidebar:"docs",previous:{title:"REST API",permalink:"/website-preview/risc0/risc0/pr/1217/api/bonsai/rest-api"},next:{title:"zkVM Quick Start",permalink:"/website-preview/risc0/risc0/pr/1217/api/zkvm/quickstart"}},c={},l=[{value:"zkvM Quick Start",id:"zkvm-quick-start",level:3},{value:"Building a zkVM Application",id:"building-a-zkvm-application",level:2},{value:"Deploying a zkVM Application",id:"deploying-a-zkvm-application",level:2},{value:"Micro Architecture",id:"micro-architecture",level:2},{value:"Continuations for limitless computations",id:"continuations-for-limitless-computations",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"zkvm-overview",children:"zkVM Overview"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"WARNING: This software is still experimental, we do not recommend it for production use."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["If you're ready to start building, check out our ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/quickstart",children:"zkVM Quick Start"})," and our ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.19/examples",children:"zkVM example applications"}),"."]})}),"\n",(0,s.jsxs)(r.p,{children:["The RISC Zero zero-knowledge virtual machine (zkVM) lets you ",(0,s.jsx)(r.a,{href:"/terminology#validity-proof",children:"prove"})," correct execution of arbitrary Rust code.\nBy allowing users to build zero-knowledge applications that ",(0,s.jsx)(r.strong,{children:"leverage existing Rust packages"}),", the RISC Zero zkVM makes it quick and easy to build powerful verifiable software applications.\nOur demos show how to:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["use chess crates to ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.19/examples/chess#zk-checkmate",children:"prove mate-in-one"})]}),"\n",(0,s.jsxs)(r.li,{children:["use JSON crate to make ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.19/examples/json#json-example",children:"proofs about private data"})]}),"\n",(0,s.jsxs)(r.li,{children:["use JPG crates to ",(0,s.jsx)(r.a,{href:"https://www.risczero.com/news/waldo",children:"prove you can find Waldo"})]}),"\n",(0,s.jsxs)(r.li,{children:["use Rust-Ethereum crates like ",(0,s.jsx)(r.a,{href:"https://github.com/bluealloy/revm",children:"revm"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/ethers-io/ethers.js",children:"ethers"}),", and ",(0,s.jsx)(r.a,{href:"https://github.com/alloy-rs",children:"alloy"})," to ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"https://risczero.com/news/zeth-release",children:"prove correct construction of Ethereum blocks"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"On any other proving platform, building any of these projects requires starting from the ground up.\nBy letting developers use the primitives they need, the RISC Zero zkVM makes verifiable software development a practical reality for projects of all scales."}),"\n",(0,s.jsxs)(r.p,{children:["We're focused on delivering a first-class developer experience together with first-class performance.\nWe offer an open-source prover that can prove computations of any size on standard consumer hardware, and we make it easy to request/receive proofs remotely with ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/bonsai/",children:"Bonsai"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"The documentation on this site will teach you how to write software for the RISC Zero zkVM, how to use the zkVM to generate proofs on your own machine, and how to use Bonsai for remote proof generation."}),"\n",(0,s.jsx)(r.h3,{id:"zkvm-quick-start",children:(0,s.jsx)(r.a,{href:"./quickstart",children:(0,s.jsx)(r.code,{children:"zkvM Quick Start"})})}),"\n",(0,s.jsx)(r.h2,{id:"building-a-zkvm-application",children:"Building a zkVM Application"}),"\n",(0,s.jsxs)(r.p,{children:["The core of a zkVM application is the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/developer-guide/guest-code-101",children:"guest program"}),".\nThe guest program is the part of the application that gets proven."]}),"\n",(0,s.jsxs)(r.p,{children:["To prove correct execution of the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/developer-guide/guest-code-101",children:"guest program"}),":"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/developer-guide/guest-code-101",children:"guest program"})," is compiled to an ",(0,s.jsx)(r.a,{href:"/terminology#elf-binary",children:"ELF binary"}),". ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.a,{href:"/terminology#executor",children:"executor"})," runs the ",(0,s.jsx)(r.a,{href:"/terminology#elf-binary",children:"ELF binary"})," and records the ",(0,s.jsx)(r.a,{href:"/terminology#session",children:"session"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.a,{href:"/terminology#prover",children:"prover"})," checks and proves the validity of the ",(0,s.jsx)(r.a,{href:"/terminology#session",children:"session"}),", outputting a ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/developer-guide/receipts",children:"receipt"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," You only need to worry about the details of step 2 & step 3 if you're running the zkVM on your own hardware.\nSee ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/developer-guide/host-code-101",children:"Host Code 101"})," for more details on these steps.\nIf you're using ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/bonsai/",children:"Bonsai"})," for remote proving, you won't need to write host code."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"From Guest Code to Receipt",src:i(8318).Z+"",width:"1778",height:"892"})}),"\n",(0,s.jsxs)(r.p,{children:["Anyone with a copy of the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/developer-guide/receipts",children:"receipt"})," can ",(0,s.jsx)(r.a,{href:"/terminology#verify",children:"verify"})," the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/developer-guide/guest-code-101",children:"guest program"}),"'s execution and read its ",(0,s.jsx)(r.a,{href:"/terminology#journal",children:"publicly shared outputs"}),".\nThe verification algorithm receives an ",(0,s.jsx)(r.a,{href:"/terminology#image-id",children:"ImageID"})," as a parameter; the ImageID serves as a cryptographic identifier for the expected ELF binary."]}),"\n",(0,s.jsx)(r.h2,{id:"deploying-a-zkvm-application",children:"Deploying a zkVM Application"}),"\n",(0,s.jsxs)(r.p,{children:["Once you've built a zkVM application, you can generate proofs on your own machine(s) or you can make requests to ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/bonsai/",children:"Bonsai"})," to generate proofs as needed."]}),"\n",(0,s.jsxs)(r.p,{children:["For local proof generation, we recommend a machine with at least 16GB of RAM.\nOptions for generating proofs using GPU acceleration and skipping proof generation are documented in the ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/risc0#feature-flags",children:"feature flags"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"micro-architecture",children:"Micro Architecture"}),"\n",(0,s.jsx)(r.p,{children:"The zkVM is a verifiable computer that works like a real embedded RISC-V micro-processor. This enables developers to more easily develop zk powerful applications."}),"\n",(0,s.jsx)(r.h3,{id:"continuations-for-limitless-computations",children:"Continuations for limitless computations"}),"\n",(0,s.jsxs)(r.p,{children:["Continuations allow the ",(0,s.jsx)(r.a,{href:"/terminology#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," to do large computations by splitting the work into small, independent ",(0,s.jsx)(r.a,{href:"/terminology#segment",children:"segments"})," of the same size.\nThis enables proofs generation on commodity hardware and makes zero knowledge computing widely accessible. To learn more, read the article on ",(0,s.jsx)(r.a,{href:"https://www.risczero.com/news/continuations",children:"continuations"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Ready to start building zkVM applications?"})," ",(0,s.jsx)("br",{}),"\nCheck out ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/quickstart",children:"zkVM Quickstart"})," & ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/developer-guide/guest-code-101",children:"Guest Code 101"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Want to browse some demos?"})," ",(0,s.jsx)("br",{}),"\nCheck out the ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.19/examples",children:"zkVM example applications"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Curious about performance?"})," ",(0,s.jsx)("br",{}),"\nCheck the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/zkvm/benchmarks",children:"performance benchmarks"})," page."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Looking for information about blockchain integration?"})," ",(0,s.jsx)("br",{}),"\nCheck out ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1217/api/bonsai/",children:"Bonsai"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Curious about Zeth?"}),(0,s.jsx)("br",{}),"\nRead the ",(0,s.jsx)(r.a,{href:"https://risczero.com/news/zeth-release",children:"article"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8318:(e,r,i)=>{i.d(r,{Z:()=>s});const s=i.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"},1151:(e,r,i)=>{i.d(r,{Z:()=>a,a:()=>n});var s=i(7294);const t={},o=s.createContext(t);function n(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);