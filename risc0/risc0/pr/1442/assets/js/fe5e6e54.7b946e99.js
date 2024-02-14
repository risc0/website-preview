"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9966],{3885:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=n(5893),s=n(1151);const o={},r="zkVM Technical Specification",c={id:"zkvm/developer-guide/zkvm-specification",title:"zkVM Technical Specification",description:"Like many other execution environments, the zkVM has unique characteristics",source:"@site/api_versioned_docs/version-0.19/zkvm/developer-guide/zkvm-specification.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/zkvm-specification",permalink:"/website-preview/risc0/risc0/pr/1442/api/0.19/zkvm/developer-guide/zkvm-specification",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/developer-guide/zkvm-specification.md",tags:[],version:"0.19",frontMatter:{},sidebar:"docs",previous:{title:"Profiling guest code",permalink:"/website-preview/risc0/risc0/pr/1442/api/0.19/zkvm/developer-guide/profiling"},next:{title:"Performance Benchmarks",permalink:"/website-preview/risc0/risc0/pr/1442/api/0.19/zkvm/benchmarks"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"The zkVM Execution Model",id:"the-zkvm-execution-model",level:2},{value:"zkVM Memory Layout",id:"zkvm-memory-layout",level:2},{value:"zkVM Memory Model",id:"zkvm-memory-model",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"zkvm-technical-specification",children:"zkVM Technical Specification"}),"\n",(0,t.jsxs)(i.p,{children:["Like many other execution environments, the zkVM has unique characteristics\nthat developers may find helpful when programming. The following description of\nzkVM characteristics assume familiarity with systems programming concepts. Those\nwho are not familiar may want to consult additional resources such as\n",(0,t.jsx)(i.a,{href:"https://wiki.osdev.org/Main_Page",children:"OsDevWiki"})," to understand the terminology."]}),"\n",(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"The zkVM is a software emulator that implements a 32-bit RISC-V instruction set.\nOne thing to note about the zkVM is that it does not use features that one\ntypically finds in a traditional processor. This was done to enable the zkVM to\nefficiently generate proofs on commodity hardware. While the emulator is more\nsimple than hardware processors, this is sufficient to run many useful\ncomputations such as Ethereum block production and cryptographic signature\nverification. The following section describes key characteristics of the zkVM\nimplementation."}),"\n",(0,t.jsx)(i.h2,{id:"the-zkvm-execution-model",children:"The zkVM Execution Model"}),"\n",(0,t.jsxs)(i.p,{children:["The zkVM implements the ",(0,t.jsx)(i.code,{children:"RV32IM"})," instruction set. This is the ",(0,t.jsx)(i.code,{children:"RV32I"})," base\ninstruction along with the multiplication (",(0,t.jsx)(i.code,{children:"M"}),") feature. We do not implement\n",(0,t.jsx)(i.code,{children:"CRS"})," instructions. This means that a program does not have what is typically\ndescribed as privileged and user modes. We do not implement loads or stores to\nunaligned addresses. So all addresses must be multiples of ",(0,t.jsx)(i.code,{children:"0x4"})," and all code\nmust be mapped to addresses divisible by ",(0,t.jsx)(i.code,{children:"0x4"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["We extend the ",(0,t.jsx)(i.code,{children:"RV32IM"})," ISA by using the ",(0,t.jsx)(i.code,{children:"ECALL"})," instruction. We do this in order\nto add instructions that are specific to zero knowledge computing."]}),"\n",(0,t.jsx)(i.p,{children:"The zkVM does not support interrupts and there is no built-in notion of a\nscheduler. The zkVM runs programs using a single-thread environment without\npreemption, so there is also no support for atomic instructions. If the\nexecution raises an exception such as an unaligned access, the execution\nterminates without executing exception handlers."}),"\n",(0,t.jsx)(i.h2,{id:"zkvm-memory-layout",children:"zkVM Memory Layout"}),"\n",(0,t.jsx)(i.p,{children:"The following table summarizes the layout of the zkVM memory"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Address Range"}),(0,t.jsx)(i.th,{children:"Size"}),(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"0x00000000 - 0x000003ff"})}),(0,t.jsx)(i.td,{children:"1 KB"}),(0,t.jsx)(i.td,{children:"Invalid page"}),(0,t.jsx)(i.td,{children:"This page of memory is invalid, so that dereferencing a NULL address will result in a failure"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"0x00000400 - 0x0BFFFFFF"})}),(0,t.jsx)(i.td,{children:"192 MB"}),(0,t.jsx)(i.td,{children:"User Memory"}),(0,t.jsx)(i.td,{children:"Contains code, heap, and stack of the guest program"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"0x0C000000 - 0x0CFFFFFF"})}),(0,t.jsx)(i.td,{children:"16 MB"}),(0,t.jsx)(i.td,{children:"System Memory"}),(0,t.jsx)(i.td,{children:"Contains RISC-V registers and non-leaf Merkle tree nodes for the page table"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"0x0D000000 - 0x0DFFFFFF"})}),(0,t.jsx)(i.td,{children:"16 MB"}),(0,t.jsx)(i.td,{children:"Page Table"}),(0,t.jsx)(i.td,{children:"Contains the Page Table"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"zkvm-memory-model",children:"zkVM Memory Model"}),"\n",(0,t.jsx)(i.p,{children:"The zkVM executes instructions in order; in other\nwords, instructions are never reordered and the zkVM's memory model is\nsequentially consistent. Unlike many processors, the zkVM has no notion of\ntraditional memory caches and cache-coherency protocols implemented in the zkVM."})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>r});var t=n(7294);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);