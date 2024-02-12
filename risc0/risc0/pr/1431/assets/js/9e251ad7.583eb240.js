"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7122],{3546:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=r(5893),t=r(1151);const s={},i="Performance Benchmarks",o={id:"zkvm/benchmarks",title:"Performance Benchmarks",description:"Pregenerated benchmarks",source:"@site/api/zkvm/benchmarks.md",sourceDirName:"zkvm",slug:"/zkvm/benchmarks",permalink:"/website-preview/risc0/risc0/pr/1431/api/next/zkvm/benchmarks",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/benchmarks.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"zkVM Technical Specification",permalink:"/website-preview/risc0/risc0/pr/1431/api/next/zkvm/zkvm-specification"},next:{title:"Tutorials",permalink:"/website-preview/risc0/risc0/pr/1431/api/next/zkvm/tutorials/overview"}},c={},h=[{value:"Pregenerated benchmarks",id:"pregenerated-benchmarks",level:2},{value:"Generating your own benchmarks",id:"generating-your-own-benchmarks",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"performance-benchmarks",children:"Performance Benchmarks"}),"\n",(0,a.jsx)(n.h2,{id:"pregenerated-benchmarks",children:"Pregenerated benchmarks"}),"\n",(0,a.jsxs)(n.p,{children:["We have ",(0,a.jsx)(n.a,{href:"https://dev.risczero.com/datasheet.pdf",children:"a performance datasheet"})," with runtime and memory performance\ninformation. This information is organized by both program size and hardware\ntarget, and includes both CPU and GPU targets. The datasheet also includes the\nRISC Zero zkVM version used and the size of several example programs to give\ncontext for the ",(0,a.jsx)(n.a,{href:"/terminology#clock-cycles",children:"cycle count"})," size data."]}),"\n",(0,a.jsx)(n.h2,{id:"generating-your-own-benchmarks",children:"Generating your own benchmarks"}),"\n",(0,a.jsx)(n.p,{children:"You can generate benchmarks yourself to get performance data for your exact\nsystem, or if you want benchmarks for a different RISC Zero zkVM version than\nused in the datasheet."}),"\n",(0,a.jsxs)(n.p,{children:["To generate benchmarks, first ",(0,a.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1431/api/next/zkvm/install",children:"install Rust and the RISC Zero\ntoolchain"})," and clone the ",(0,a.jsx)(n.a,{href:"https://github.com/risc0/risc0",children:"risc0 repository"})," if you haven't already done\nso. Navigate to the risc0 source code directory and, if necessary, check out the\nbranch or tag you wish to generate benchmarks for. Then run:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo run --release --example loop\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will produce the benchmark data shown in the ",(0,a.jsx)(n.a,{href:"https://dev.risczero.com/datasheet.pdf",children:"datasheet"})," for your system\n(using the CPU) on the checked out version of the RISC Zero zkVM."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to benchmark a GPU, you will need to build with the ",(0,a.jsx)(n.code,{children:"cuda"})," or\n",(0,a.jsx)(n.code,{children:"metal"})," feature enabled (whichever is appropriate for your hardware). To do\nthis, use the following commands:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Metal"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo run --release -F metal --example loop\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"CUDA"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo run --release -F cuda --example loop\n"})}),"\n",(0,a.jsx)(n.p,{children:"We also have a Fibonacci computation benchmark, which you can run with"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo bench --bench fib\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will compute the 100th, 1000th, and 10000th Fibonacci numbers modulo 2^64\n(ten times for each). It will report both time and throughput (how many numbers\nwere added per second) with separate statistics for ",(0,a.jsx)(n.a,{href:"/terminology#execute",children:"execution"})," and\n",(0,a.jsx)(n.a,{href:"/terminology#prover",children:"proving"}),". As with the loop benchmark, the Fibonacci benchmark will use\nthe CPU by default, and you can benchmark a CUDA or Metal GPU by setting the\nappropriate feature flag."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(7294);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);