"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9065],{9714:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(5893),t=r(1151);const o={sidebar_position:3,slug:"./quickstart"},s="zkVM Quick Start",a={id:"zkvm/quickstart",title:"zkVM Quick Start",description:"Welcome to the [zkVM] Quick Start page! Here are the steps between you and your first proof:",source:"@site/api/zkvm/quickstart.md",sourceDirName:"zkvm",slug:"/zkvm/quickstart",permalink:"/website-preview/risc0/risc0/pr/1047/api/next/zkvm/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"./quickstart"},sidebar:"api",previous:{title:"zkVM Overview",permalink:"/website-preview/risc0/risc0/pr/1047/api/next/zkvm/"},next:{title:"What is dev-mode, and how can you use it safely?",permalink:"/website-preview/risc0/risc0/pr/1047/api/next/zkvm/dev-mode"}},l={},c=[{value:"1. Install the RISC Zero Toolchain",id:"1-install-the-risc-zero-toolchain",level:2},{value:"2. Initialize a New Project",id:"2-initialize-a-new-project",level:2},{value:"3. Edit the boilerplate to build your first project",id:"3-edit-the-boilerplate-to-build-your-first-project",level:2},{value:"4. Quick Development: Leveraging Dev Mode",id:"4-quick-development-leveraging-dev-mode",level:2},{value:"5. Real Proof Generation",id:"5-real-proof-generation",level:2},{value:"6. Local &amp; Remote Proving",id:"6-local--remote-proving",level:2},{value:"Local Proving",id:"local-proving",level:3},{value:"Remote Proving",id:"remote-proving",level:3},{value:"Executor Statistics",id:"executor-statistics",level:3},{value:"Other options",id:"other-options",level:3}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"zkvm-quick-start",children:"zkVM Quick Start"}),"\n",(0,n.jsxs)(i.p,{children:["Welcome to the ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/zkvm/",children:"zkVM"})," Quick Start page! Here are the steps between you and your first proof:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Install the RISC Zero toolchain."}),"\n",(0,n.jsxs)(i.li,{children:["Initialize a new project using the ",(0,n.jsx)(i.a,{href:"https://docs.rs/cargo-risczero/*/cargo_risczero",children:"cargo risczero"})," tool."]}),"\n",(0,n.jsx)(i.li,{children:"Edit the boilerplate to build your first project."}),"\n",(0,n.jsxs)(i.li,{children:["Run your project locally or with ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/bonsai/",children:"Bonsai"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"1-install-the-risc-zero-toolchain",children:"1. Install the RISC Zero Toolchain"}),"\n",(0,n.jsxs)(i.p,{children:["If you have already installed Rust via ",(0,n.jsx)(i.code,{children:"rustup"}),", you can install our toolchain by running"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cargo install cargo-binstall\ncargo binstall cargo-risczero\ncargo risczero install\n"})}),"\n",(0,n.jsxs)(i.p,{children:["If you need to install Rust or encounter problems, take a look at our ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/zkvm/install",children:"full installation instructions"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"2-initialize-a-new-project",children:"2. Initialize a New Project"}),"\n",(0,n.jsxs)(i.p,{children:["Once you've installed the toolchain, you can initialize a new project using the [starter template] by running:\n[starter template]: ",(0,n.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/main/templates/rust-starter",children:"https://github.com/risc0/risc0/tree/main/templates/rust-starter"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cargo risczero new my_project\n"})}),"\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"https://docs.rs/cargo-risczero/*/cargo_risczero",children:"cargo risczero"})," docs for other options for initialization."]}),"\n",(0,n.jsx)(i.h2,{id:"3-edit-the-boilerplate-to-build-your-first-project",children:"3. Edit the boilerplate to build your first project"}),"\n",(0,n.jsxs)(i.p,{children:["In the codebase for your new project, you'll find a handful of places marked ",(0,n.jsx)(i.code,{children:"TODO"}),", where you'll need to make some changes in order to build your first project."]}),"\n",(0,n.jsxs)(i.p,{children:["Don't worry -- each ",(0,n.jsx)(i.code,{children:"TODO"})," comes with instructions for what you need to do, and the ",(0,n.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/main/examples/hello-world/tutorial.md",children:"Hello World tutorial"})," contains step-by-step instructions."]}),"\n",(0,n.jsx)(i.h2,{id:"4-quick-development-leveraging-dev-mode",children:"4. Quick Development: Leveraging Dev Mode"}),"\n",(0,n.jsxs)(i.p,{children:["During the development of your project, you might find that running your code can take a long time due to the proof generation process. To address this issue and allow for faster iterations of your code, we suggest utilizing ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/zkvm/dev-mode",children:"dev-mode"}),". This mode bypasses the time-consuming proof generation process. To activate dev-mode, simply set the environment variable ",(0,n.jsx)(i.code,{children:"RISC0_DEV_MODE=true"})," when executing your project (other acceptable values include ",(0,n.jsx)(i.code,{children:"1"})," and ",(0,n.jsx)(i.code,{children:"yes"}),")."]}),"\n",(0,n.jsx)(i.p,{children:"Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"RISC0_DEV_MODE=true cargo run --release\n"})}),"\n",(0,n.jsxs)(i.p,{children:["For a deeper understanding of dev-mode and its safe usage, please refer to our page explaining ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/zkvm/dev-mode",children:"what is dev-mode"}),". Please note that dev-mode is only meant to be used during development and testing. It should ",(0,n.jsx)(i.strong,{children:"never"})," be used in production."]}),"\n",(0,n.jsx)(i.h2,{id:"5-real-proof-generation",children:"5. Real Proof Generation"}),"\n",(0,n.jsxs)(i.p,{children:["Once you've reached a point where you're ready to generate real proofs, you can do so by unseting the ",(0,n.jsx)(i.code,{children:"RISC0_DEV_MODE"})," environment variable (or setting it to ",(0,n.jsx)(i.code,{children:"RISC0_DEV_MODE=false"}),"). We recommend that you additionally specify the feature flag ",(0,n.jsx)(i.code,{children:"disable-dev-mode"}),", which will ensure that dev-mode is not accidentally enabled. Please consult more information about ",(0,n.jsx)(i.code,{children:"disable-dev-mode"})," in the ",(0,n.jsx)(i.a,{href:"https://github.com/risc0/risc0#feature-flags",children:"feature flags"})," table, and the ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/zkvm/dev-mode",children:"dev-mode"})," page for more information."]}),"\n",(0,n.jsx)(i.p,{children:"Proceeding with the example above, generating proofs locally would be achieved by running:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"RISC0_DEV_MODE=false cargo run --release --features disable-dev-mode\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Note that ",(0,n.jsx)(i.code,{children:"RISC0_DEV_MODE=false"})," is the default behavior, so you can also simply run:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cargo run --release --features disable-dev-mode\n"})}),"\n",(0,n.jsxs)(i.p,{children:["We would always recommend using ",(0,n.jsx)(i.code,{children:"disable-dev-mode"})," in production, as it ensures that dev-mode is not accidentally enabled."]}),"\n",(0,n.jsxs)(i.p,{children:["Also, note that since now proofs are being generated, the execution time of your project will be significantly longer than when running in dev-mode. You might want to consider using ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/bonsai/",children:"Bonsai"})," to generate proofs remotely, as it will likely be faster than running proofs locally."]}),"\n",(0,n.jsx)(i.h2,{id:"6-local--remote-proving",children:"6. Local & Remote Proving"}),"\n",(0,n.jsxs)(i.p,{children:["You can build and run your zkVM applications using your own hardware, or you can upload your ",(0,n.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"})," to ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/bonsai/",children:"Bonsai"})," and make requests for proof generation as needed."]}),"\n",(0,n.jsx)(i.h3,{id:"local-proving",children:"Local Proving"}),"\n",(0,n.jsxs)(i.p,{children:["To run the zkVM on your own machine, we recommend at least 16GB of RAM.\nThe readme files on the ",(0,n.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/main/examples",children:"zkVM demo applications"})," show ",(0,n.jsx)(i.code,{children:"cargo"})," commands for local proof generation."]}),"\n",(0,n.jsx)(i.h3,{id:"remote-proving",children:"Remote Proving"}),"\n",(0,n.jsxs)(i.p,{children:["To run the zkVM remotely using ",(0,n.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1047/api/next/bonsai/",children:"Bonsai"}),", ",(0,n.jsx)(i.a,{href:"https://bonsai.xyz/apply",children:"request access"})," and set the environment variables ",(0,n.jsx)(i.code,{children:"BONSAI_API_KEY=<YOUR_API_KEY>"})," and ",(0,n.jsx)(i.code,{children:"BONSAI_API_URL=<BONSAI_URL>"}),".\nAdditional information is available in the ",(0,n.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/main/templates/rust-starter#running-proofs-remotely-on-bonsai",children:"starter template"})]}),"\n",(0,n.jsx)(i.h3,{id:"executor-statistics",children:"Executor Statistics"}),"\n",(0,n.jsxs)(i.p,{children:["To gain insights into your application's performance, you can obtain executor statistics by setting the ",(0,n.jsx)(i.code,{children:"RUST_LOG"})," environment variable to ",(0,n.jsx)(i.code,{children:'"executor=info"'}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Setting this filter will print statistics about the execution before proof generation, so you can get a sense of how computationally expensive your application is. Since the statistics concern only the executor phase, it is recommended to run your application in dev-mode to avoid the overhead of proof generation:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:'RISC0_DEV_MODE=1 RUST_LOG="executor=info" cargo run --release\n'})}),"\n",(0,n.jsx)(i.p,{children:"The statistics include:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Total Cycles"}),"\n",(0,n.jsx)(i.li,{children:"Session Cycle"}),"\n",(0,n.jsx)(i.li,{children:"Segments Count"}),"\n",(0,n.jsx)(i.li,{children:"Execution time"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Knowing these statistics is useful for estimating the cost of your application before submitting real workloads to Bonsai, as the cost of proof generation is proportional to the number of cycles and segments used."}),"\n",(0,n.jsx)(i.h3,{id:"other-options",children:"Other options"}),"\n",(0,n.jsxs)(i.p,{children:["Options such as GPU acceleration and skipping the proof generation are documented in the ",(0,n.jsx)(i.a,{href:"https://github.com/risc0/risc0#feature-flags",children:"feature flags"}),"."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Congratulations!"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"That's all it takes to build and run a minimal RISC Zero application."})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>a,a:()=>s});var n=r(7294);const t={},o=n.createContext(t);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);