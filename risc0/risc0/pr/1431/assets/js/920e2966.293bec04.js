"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3328],{3252:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=r(5893),n=r(1151);const o={},s="A Blockchain Developer's Guide to the zkVM",a={id:"bonsai/blockchain-zkvm-guide",title:"A Blockchain Developer's Guide to the zkVM",description:"(To start building on [Bonsai], check out the [Bonsai Quick Start] page.)",source:"@site/api_versioned_docs/version-0.20/bonsai/blockchain-zkvm-guide.md",sourceDirName:"bonsai",slug:"/bonsai/blockchain-zkvm-guide",permalink:"/website-preview/risc0/risc0/pr/1431/api/bonsai/blockchain-zkvm-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/bonsai/blockchain-zkvm-guide.md",tags:[],version:"0.20",frontMatter:{},sidebar:"api",previous:{title:"Bonsai on Ethereum",permalink:"/website-preview/risc0/risc0/pr/1431/api/bonsai/bonsai-on-eth"},next:{title:"Ethereum Examples",permalink:"/website-preview/risc0/risc0/pr/1431/api/bonsai/eth-examples"}},c={},h=[{value:"The role of the zkVM in Bonsai",id:"the-role-of-the-zkvm-in-bonsai",level:2},{value:"Writing Rust code",id:"writing-rust-code",level:2},{value:"Retrieving and handling zkVM receipts",id:"retrieving-and-handling-zkvm-receipts",level:2},{value:"I/O between the EVM blockchain and the zkVM",id:"io-between-the-evm-blockchain-and-the-zkvm",level:2},{value:"Why am I seeing errors?",id:"why-am-i-seeing-errors",level:2},{value:"Diving deeper",id:"diving-deeper",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"a-blockchain-developers-guide-to-the-zkvm",children:"A Blockchain Developer's Guide to the zkVM"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["(To start building on ",(0,t.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1431/api/bonsai/",children:"Bonsai"}),", check out the ",(0,t.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1431/api/bonsai/quickstart",children:"Bonsai Quick Start"})," page.)"]})}),"\n",(0,t.jsxs)(i.p,{children:["In order to prove code using Bonsai, you need to write the code you want proven. That is, you'll need to write a ",(0,t.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"})," for the ",(0,t.jsx)(i.a,{href:"/terminology#zero-knowledge-virtual-machine-zkvm",children:"zkVM"}),". This guide will focus on the core techniques a blockchain developer will need to write zkVM code to prove in Bonsai. We have ",(0,t.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1431/api/zkvm/",children:"a number of guides"})," for developing for the zkVM more generally if you want to dive deeper!"]}),"\n",(0,t.jsx)(i.h2,{id:"the-role-of-the-zkvm-in-bonsai",children:"The role of the zkVM in Bonsai"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Bonsai ETH Relay overview",src:r(6915).Z+"",width:"4156",height:"2492"})}),"\n",(0,t.jsxs)(i.p,{children:["The zkVM is used as an internal component of Bonsai. It is what runs your program off-chain and ",(0,t.jsx)(i.a,{href:"/terminology#validity-proof",children:"proves"})," your code was ",(0,t.jsx)(i.a,{href:"/terminology#execute",children:"executed"})," in a way anyone can ",(0,t.jsx)(i.a,{href:"/terminology#verify",children:"verify"}),". Bonsai runs most of the zkVM for you: all you need to provide is the code you want proven, which we call the zkVM ",(0,t.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"}),", and its input."]}),"\n",(0,t.jsx)(i.h2,{id:"writing-rust-code",children:"Writing Rust code"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/terminology#guest-program",children:"Guest programs"})," are written in ",(0,t.jsx)(i.a,{href:"https://www.rust-lang.org/",children:"Rust"}),". If you're new to ",(0,t.jsx)(i.a,{href:"https://www.rust-lang.org/",children:"Rust"}),", we recommend their ",(0,t.jsx)(i.a,{href:"https://www.rust-lang.org/learn",children:"official learning resources"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["When creating your ",(0,t.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"}),", you can write ",(0,t.jsx)(i.a,{href:"https://www.rust-lang.org/",children:"Rust"})," code in the usual way, including importing packages others have written. We do provide some additional zkVM-specific functionality, most notably ",(0,t.jsx)(i.code,{children:"env::read_slice"})," for reading the input data sent from your smart contract and ",(0,t.jsx)(i.code,{children:"env::commit_slice"})," for ",(0,t.jsx)(i.a,{href:"/terminology#commit",children:"committing"})," public results to the ",(0,t.jsx)(i.a,{href:"/terminology#journal",children:"journal"})," (see below)."]}),"\n",(0,t.jsxs)(i.p,{children:["This is, in principle, everything you need to know to use the zkVM with Bonsai: write ",(0,t.jsx)(i.a,{href:"https://www.rust-lang.org/",children:"Rust"})," code that does whatever it is you want proven, and use the ",(0,t.jsx)(i.code,{children:"env"})," functions to read inputs from, and commit results to, your smart contract. But if you continue reading we'll provide further orientation to the role of the zkVM and some useful tips and tricks for writing zkVM code."]}),"\n",(0,t.jsx)(i.h2,{id:"retrieving-and-handling-zkvm-receipts",children:"Retrieving and handling zkVM receipts"}),"\n",(0,t.jsxs)(i.p,{children:["Once Bonsai proves your code, it will give you access to this proof with a ",(0,t.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"}),". Much like a paper receipt, the zkVM ",(0,t.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"})," can be handed to someone else to demonstrate that a program was executed with integrity. The ",(0,t.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"})," also contains any computational results we've chosen to share in its ",(0,t.jsx)(i.a,{href:"/terminology#journal",children:"journal"}),", so we know our results came from the faithfully executed program."]}),"\n",(0,t.jsx)(i.h2,{id:"io-between-the-evm-blockchain-and-the-zkvm",children:"I/O between the EVM blockchain and the zkVM"}),"\n",(0,t.jsx)(i.p,{children:"The zkVM doesn't natively speak EVM bytecode, so you'll want to decode and encode your smart contract inputs and outputs inside of your provable zkVM guest program. This will allow you to store off-chain program inputs in regular Rust variables and use them during computation. Because your shared outputs will be encoded back into EVM bytecode, you'll be able to read results back into app contracts."}),"\n",(0,t.jsxs)(i.p,{children:["Because the zkVM supports general-purpose instructions, you can use standard Rust libraries including ",(0,t.jsx)(i.a,{href:"https://github.com/rust-ethereum/ethabi",children:"ethabi"}),", a Rust library for decoding and encoding EVM bytecode."]}),"\n",(0,t.jsx)(i.h2,{id:"why-am-i-seeing-errors",children:"Why am I seeing errors?"}),"\n",(0,t.jsxs)(i.p,{children:["We have an ",(0,t.jsx)(i.a,{href:"/faq",children:"FAQ"})," that discusses some frequently encountered problems. You can also ask us questions on ",(0,t.jsx)(i.a,{href:"https://discord.gg/risczero",children:"Discord"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"diving-deeper",children:"Diving deeper"}),"\n",(0,t.jsxs)(i.p,{children:["We have ",(0,t.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1431/api/zkvm/",children:"extensive resources"})," on writing zkVM code. Many of these resources assume you are developing without the aid of Bonsai. Here are some differences you might encounter when reading these docs:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["zkVM docs frequently refer to the ",(0,t.jsx)(i.a,{href:"/terminology#guest",children:"guest"})," and ",(0,t.jsx)(i.a,{href:"/terminology#host",children:"host"}),". With Bonsai, you only write code for the ",(0,t.jsx)(i.a,{href:"/terminology#guest",children:"guest"}),"; Bonsai itself runs the ",(0,t.jsx)(i.a,{href:"/terminology#host",children:"host"}),". A partial exception is providing inputs and receiving the ",(0,t.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"}),", which is handled by the ",(0,t.jsx)(i.a,{href:"/terminology#host",children:"host"})," without Bonsai, whereas with the Bonsai ETH Relay your smart contract must handle these duties."]}),"\n",(0,t.jsxs)(i.li,{children:["You might see our zkVM documentation refer to sessions, and segments. These code-level concepts are related to ",(0,t.jsx)(i.a,{href:"https://www.risczero.com/news/continuations",children:"continuations"}),", a feature that lets us design our zkVM program proof work to be parallelizable and not limited by the size of the program to be proven. Bonsai takes advantage of this feature to parallelize proofs about off-chain computation. If you're reading about these in zkVM documentation, you're almost certainly looking at host-side details that you don't need in order to write provable code."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},6915:(e,i,r)=>{r.d(i,{Z:()=>t});const t=r.p+"assets/images/bonsai_ethereum-76e1795a2f79cbc67ff530d289aa1856.png"},1151:(e,i,r)=>{r.d(i,{Z:()=>a,a:()=>s});var t=r(7294);const n={},o=t.createContext(n);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);