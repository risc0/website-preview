"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8202],{2803:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=t(5893),o=t(1151);const n={sidebar_position:3,slug:"./quickstart"},s="zkVM Quick Start",l={id:"zkvm/quickstart",title:"zkVM Quick Start",description:"Welcome to the [zkVM] Quick Start page! Here are the steps between you and your first proof:",source:"@site/api_versioned_docs/version-0.18/zkvm/quickstart.md",sourceDirName:"zkvm",slug:"/zkvm/quickstart",permalink:"/website-preview/risc0/risc0/pr/1293/api/0.18/zkvm/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/quickstart.md",tags:[],version:"0.18",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"./quickstart"},sidebar:"docs",previous:{title:"zkVM Overview",permalink:"/website-preview/risc0/risc0/pr/1293/api/0.18/zkvm/"},next:{title:"Installation",permalink:"/website-preview/risc0/risc0/pr/1293/api/0.18/zkvm/install"}},a={},c=[{value:"1. Install the RISC Zero Toolchain",id:"1-install-the-risc-zero-toolchain",level:2},{value:"2. Initialize a New Project",id:"2-initialize-a-new-project",level:2},{value:"3. Edit the boilerplate to build your first project",id:"3-edit-the-boilerplate-to-build-your-first-project",level:2},{value:"4. Run your project, locally or remotely",id:"4-run-your-project-locally-or-remotely",level:2},{value:"Local &amp; Remote Proving",id:"local--remote-proving",level:2},{value:"Local Proving",id:"local-proving",level:3},{value:"Remote Proving",id:"remote-proving",level:3},{value:"Other options",id:"other-options",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"zkvm-quick-start",children:"zkVM Quick Start"}),"\n",(0,i.jsxs)(r.p,{children:["Welcome to the ",(0,i.jsx)(r.a,{href:"../zkvm/",children:"zkVM"})," Quick Start page! Here are the steps between you and your first proof:"]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Install the RISC Zero toolchain."}),"\n",(0,i.jsxs)(r.li,{children:["Initialize a new project using the ",(0,i.jsx)(r.a,{href:"https://docs.rs/cargo-risczero",children:"cargo risczero"})," tool."]}),"\n",(0,i.jsx)(r.li,{children:"Edit the boilerplate to build your first project."}),"\n",(0,i.jsxs)(r.li,{children:["Run your project locally or with ",(0,i.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1293/api/0.18/bonsai/",children:"Bonsai"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"1-install-the-risc-zero-toolchain",children:"1. Install the RISC Zero Toolchain"}),"\n",(0,i.jsxs)(r.p,{children:["If you have already installed Rust via ",(0,i.jsx)(r.code,{children:"rustup"}),", you can install our toolchain by running"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"cargo install cargo-risczero\ncargo risczero install\n"})}),"\n",(0,i.jsxs)(r.p,{children:["If you need to install Rust or encounter problems, take a look at our ",(0,i.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1293/api/0.18/zkvm/install",children:"full installation instructions"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"2-initialize-a-new-project",children:"2. Initialize a New Project"}),"\n",(0,i.jsxs)(r.p,{children:["Once you've installed the toolchain, you can initialize a new project using the [starter template] by running:\n[starter template]: ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.18/templates/rust-starter",children:"https://github.com/risc0/risc0/tree/release-0.18/templates/rust-starter"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"cargo risczero new my_project\n"})}),"\n",(0,i.jsxs)(r.p,{children:["See the ",(0,i.jsx)(r.a,{href:"https://docs.rs/cargo-risczero",children:"cargo risczero"})," docs for other options for initialization."]}),"\n",(0,i.jsx)(r.h2,{id:"3-edit-the-boilerplate-to-build-your-first-project",children:"3. Edit the boilerplate to build your first project"}),"\n",(0,i.jsxs)(r.p,{children:["In the codebase for your new project, you'll find a handful of places marked ",(0,i.jsx)(r.code,{children:"TODO"}),", where you'll need to make some changes in order to build your first project."]}),"\n",(0,i.jsxs)(r.p,{children:["Don't worry -- each ",(0,i.jsx)(r.code,{children:"TODO"})," comes with instructions for what you need to do, and the ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.18/examples/hello-world/tutorial.md",children:"Hello World tutorial"})," contains step-by-step instructions."]}),"\n",(0,i.jsx)(r.h2,{id:"4-run-your-project-locally-or-remotely",children:"4. Run your project, locally or remotely"}),"\n",(0,i.jsx)(r.p,{children:"The readme for your project includes instructions for how to run it, both locally or remotely.\nYou can build your example and run the prover locally with:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"cargo run --release\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Congratulations!"})," ",(0,i.jsx)("br",{}),(0,i.jsx)(r.em,{children:"That's all it takes to build and run a minimal RISC Zero application."})]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"local--remote-proving",children:"Local & Remote Proving"}),"\n",(0,i.jsxs)(r.p,{children:["You can build and run your zkVM applications using your own hardware, or you can upload your ",(0,i.jsx)(r.a,{href:"/terminology#guest-program",children:"guest program"})," to ",(0,i.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1293/api/0.18/bonsai/",children:"Bonsai"})," and make requests for proof generation as needed."]}),"\n",(0,i.jsx)(r.h3,{id:"local-proving",children:"Local Proving"}),"\n",(0,i.jsxs)(r.p,{children:["To run the zkVM on your own machine, we recommend at least 16GB of RAM.\nThe readme files on the ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.18/examples/",children:"zkVM demo applications"})," show ",(0,i.jsx)(r.code,{children:"cargo"})," commands for local proof generation."]}),"\n",(0,i.jsx)(r.h3,{id:"remote-proving",children:"Remote Proving"}),"\n",(0,i.jsxs)(r.p,{children:["To run the zkVM remotely using ",(0,i.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1293/api/0.18/bonsai/",children:"Bonsai"}),", ",(0,i.jsx)(r.a,{href:"https://bonsai.xyz/apply",children:"request access"})," and set the environment variables ",(0,i.jsx)(r.code,{children:"BONSAI_API_KEY=<YOUR_API_KEY>"})," and ",(0,i.jsx)(r.code,{children:"BONSAI_API_URL=<BONSAI_URL>"}),".\nAdditional information is available in the ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.18/templates/rust-starter#running-proofs-remotely-on-bonsai",children:"starter template"})]}),"\n",(0,i.jsx)(r.h3,{id:"other-options",children:"Other options"}),"\n",(0,i.jsxs)(r.p,{children:["Options such as GPU acceleration and skipping the proof generation are documented in the ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0#feature-flags",children:"feature flags"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>s});var i=t(7294);const o={},n=i.createContext(o);function s(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);