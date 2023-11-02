"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5940],{8025:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=i(5893),t=i(1151);const n={},c="Guest Code 101",o={id:"zkvm/developer-guide/guest-code-101",title:"Guest Code 101",description:"In a [zkVM application], the [guest code] is the code that will be executed and proven by the zkVM.",source:"@site/api/zkvm/developer-guide/guest-code-101.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/guest-code-101",permalink:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/developer-guide/guest-code-101",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/developer-guide/guest-code-101.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Rust Resources",permalink:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/developer-guide/rust-resources"},next:{title:"Host Code 101",permalink:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/developer-guide/host-code-101"}},l={},d=[{value:"Basic Guest Funtionality: Reading, Writing, and Committing",id:"basic-guest-funtionality-reading-writing-and-committing",level:2},{value:"Tools for Debugging &amp; Optimization",id:"tools-for-debugging--optimization",level:2},{value:"Boilerplate before <code>main()</code>",id:"boilerplate-before-main",level:2},{value:"Happy Building!",id:"happy-building",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"guest-code-101",children:"Guest Code 101"}),"\n",(0,r.jsxs)(s.p,{children:["In a ",(0,r.jsx)(s.a,{href:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/",children:"zkVM application"}),", the ",(0,r.jsx)(s.a,{href:"/terminology#guest",children:"guest code"})," is the code that will be executed and proven by the zkVM."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"From Guest Code to Receipt",src:i(8318).Z+"",width:"1778",height:"892"})}),"\n",(0,r.jsxs)(s.p,{children:["This page serves as an introduction to writing RISC Zero ",(0,r.jsx)(s.a,{href:"/terminology#guest",children:"guest code"}),", to help you get started building applications for ",(0,r.jsx)(s.a,{href:"/website-preview/risc0/risc0/pr/1082/api/next/bonsai/",children:"Bonsai"})," and the ",(0,r.jsx)(s.a,{href:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/",children:"zkVM"}),"."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["For a guide to writing and running your first guest code, check out our ",(0,r.jsx)(s.a,{href:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/quickstart",children:"zkVM Quick Start"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["For a simple example, check out the ",(0,r.jsx)(s.a,{href:"https://github.com/risc0/risc0/tree/main/examples/hello-world",children:"Hello World demo"}),", where the ",(0,r.jsx)(s.a,{href:"/terminology#guest",children:"guest"})," receives two inputs from the ",(0,r.jsx)(s.a,{href:"/terminology#host",children:"host"})," and commits their product to the ",(0,r.jsx)(s.a,{href:"/terminology#journal",children:"journal"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The full functionality of the guest is documented in the ",(0,r.jsxs)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest",children:[(0,r.jsx)(s.code,{children:"guest"})," module"]})," of the ",(0,r.jsxs)(s.a,{href:"https://docs.rs/risc0-zkvm",children:[(0,r.jsx)(s.code,{children:"risc0-zkvm"})," Rust crate"]}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"basic-guest-funtionality-reading-writing-and-committing",children:"Basic Guest Funtionality: Reading, Writing, and Committing"}),"\n",(0,r.jsx)(s.p,{children:"To build a zkVM application, we need our guest program to be able to:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"read inputs,"}),"\n",(0,r.jsxs)(s.li,{children:["write private outputs to the ",(0,r.jsx)(s.a,{href:"/terminology#host",children:"host"}),", and"]}),"\n",(0,r.jsxs)(s.li,{children:["commit public outputs to the ",(0,r.jsx)(s.a,{href:"/terminology#journal",children:"journal"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["To support various use cases, there are a number of functions that can be called from the guest for reading/writing/committing. For a complete list, see the ",(0,r.jsxs)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest",children:[(0,r.jsx)(s.code,{children:"guest"})," module"]})," documentation; we include a brief list which should be sufficient for building your first application:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Reading inputs"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.read.html",children:(0,r.jsx)(s.code,{children:"env::read"})}),", ",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.read_slice.html",children:(0,r.jsx)(s.code,{children:"env::read_slice"})}),", and ",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdin.html",children:(0,r.jsx)(s.code,{children:"env::stdin"})})]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["Writing private outputs to ",(0,r.jsx)(s.a,{href:"/terminology#host",children:"host"})]}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.write.html",children:(0,r.jsx)(s.code,{children:"env::write"})}),", ",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.write_slice.html",children:(0,r.jsx)(s.code,{children:"env::write_slice"})}),", ",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdout.html",children:(0,r.jsx)(s.code,{children:"env::stdout"})}),", ",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stderr.html",children:(0,r.jsx)(s.code,{children:"env::stderr"})})]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["Committing private outputs ",(0,r.jsx)(s.a,{href:"/terminology#journal",children:"journal"})]}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.code,{children:"env::commit"}),", ",(0,r.jsx)(s.code,{children:"env::commit_slice"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"tools-for-debugging--optimization",children:"Tools for Debugging & Optimization"}),"\n",(0,r.jsxs)(s.p,{children:["There are also a number of functions available to support with debugging and performance analysis. As above, we refer to the ",(0,r.jsxs)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest",children:[(0,r.jsx)(s.code,{children:"guest"})," module"]})," for a full list, but include some highlights here:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Count Cycles"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.get_cycle_count.html",children:(0,r.jsx)(s.code,{children:"env::get_cycle_count"})})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Print a debug message"}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.log.html",children:(0,r.jsx)(s.code,{children:"env::log"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For more information on optimization & performance, see our pages on ",(0,r.jsx)(s.a,{href:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/developer-guide/acceleration",children:"Cryptography Acceleration"})," and ",(0,r.jsx)(s.a,{href:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/benchmarks",children:"Benchmarking"}),"."]}),"\n",(0,r.jsxs)(s.h2,{id:"boilerplate-before-main",children:["Boilerplate before ",(0,r.jsx)(s.code,{children:"main()"})]}),"\n",(0,r.jsxs)(s.p,{children:["In our ",(0,r.jsx)(s.a,{href:"https://github.com/risc0/risc0/tree/v0.18.0/templates/rust-starter",children:"template"})," and ",(0,r.jsx)(s.a,{href:"https://github.com/risc0/risc0/tree/v0.18.0/examples",children:"examples"}),", there's a bit of boilerplate code before ",(0,r.jsx)(s.code,{children:"main()"}),". In this section, we explain what each of those lines is doing:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"#![no_std]"})," ",(0,r.jsx)("br",{}),"\nThe guest code should be as lightweight as possible for performance reasons. So, since we aren't using ",(0,r.jsx)(s.code,{children:"std"}),", we exclude it."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"#![no_main]"})," ",(0,r.jsx)("br",{}),"\nThe guest code is never launched as a standalone Rust executable, so we specify ",(0,r.jsx)(s.code,{children:"#![no_main]"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"risc0_zkvm_guest::entry!(main);"})," ",(0,r.jsx)("br",{}),"\nWe must make the guest code available for the host to launch, and to do that we must specify which function to call when the host starts executing this guest code. We use the ",(0,r.jsx)(s.code,{children:"risc0_zkvm_guest::entry!"})," macro to indicate the initial guest function to call, which in this case is ",(0,r.jsx)(s.code,{children:"main"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"happy-building",children:"Happy Building!"}),"\n",(0,r.jsxs)(s.p,{children:["Hopefully, this guide and the ",(0,r.jsx)(s.a,{href:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/quickstart",children:"zkVM Quick Start"})," page will be sufficient for you to build your first ",(0,r.jsx)(s.a,{href:"/website-preview/risc0/risc0/pr/1082/api/next/zkvm/",children:"zkVM application"}),"!"]}),"\n",(0,r.jsxs)(s.p,{children:["If you run into problems, don't be a stranger!\nYou can file an issue on ",(0,r.jsx)(s.a,{href:"https://github.com/risc0/website",children:"these docs"})," or the ",(0,r.jsx)(s.a,{href:"https://github.com/risc0/risc0/tree/v0.18.0/examples",children:"examples"}),", and we're happy to answer questions on ",(0,r.jsx)(s.a,{href:"https://discord.gg/risczero",children:"Discord"}),"."]})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8318:(e,s,i)=>{i.d(s,{Z:()=>r});const r=i.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"},1151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>c});var r=i(7294);const t={},n=r.createContext(t);function c(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);