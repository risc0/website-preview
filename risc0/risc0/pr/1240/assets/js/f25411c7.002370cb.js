"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3082],{2839:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=t(5893),i=t(1151);const n={},o="Installation",l={id:"zkvm/install",title:"Installation",description:"These instructions tell you how to install (or update) RISC Zero tools so you can build your own RISC Zero zkVM projects. By following these instructions, you will install the [cargo risczero] tool for creating and building RISC Zero zkVM projects, as well as the RISC Zero toolchain used to build zkVM guest programs in Rust.",source:"@site/api_versioned_docs/version-0.19/zkvm/install.md",sourceDirName:"zkvm",slug:"/zkvm/install",permalink:"/website-preview/risc0/risc0/pr/1240/api/zkvm/install",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/install.md",tags:[],version:"0.19",frontMatter:{},sidebar:"docs",previous:{title:"What is dev-mode, and how can you use it safely?",permalink:"/website-preview/risc0/risc0/pr/1240/api/zkvm/dev-mode"},next:{title:"Rust Resources",permalink:"/website-preview/risc0/risc0/pr/1240/api/zkvm/developer-guide/rust-resources"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"Update",id:"update",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.p,{children:["These instructions tell you how to install (or update) RISC Zero tools so you can build your own RISC Zero zkVM projects. By following these instructions, you will install the ",(0,r.jsx)(s.a,{href:"https://crates.io/crates/cargo-risczero",children:(0,r.jsx)(s.code,{children:"cargo risczero"})})," tool for creating and building RISC Zero zkVM projects, as well as the RISC Zero toolchain used to build zkVM guest programs in Rust."]}),"\n",(0,r.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(s.p,{children:["The RISC Zero zkVM requires Rust, so start by ",(0,r.jsxs)(s.a,{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",children:["installing Rust and ",(0,r.jsx)(s.code,{children:"rustup"})]})," if you don't already have it. Please note that you will need to follow the recommended Rust installation instructions that use ",(0,r.jsx)(s.a,{href:"https://rustup.rs/",children:"rustup"})," rather than any of the alternative Rust installation options, as RISC Zero depends on the ",(0,r.jsx)(s.a,{href:"https://rustup.rs/",children:"rustup"})," tool specifically."]}),"\n",(0,r.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(s.p,{children:["Next, install the ",(0,r.jsx)(s.a,{href:"https://crates.io/crates/cargo-risczero",children:(0,r.jsx)(s.code,{children:"cargo risczero"})})," tool and use its ",(0,r.jsxs)(s.a,{href:"https://crates.io/crates/cargo-risczero",children:[(0,r.jsx)(s.code,{children:"install"})," command"]})," to install the toolchain by running"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"cargo install cargo-binstall\ncargo binstall cargo-risczero\ncargo risczero install\n"})}),"\n",(0,r.jsx)(s.p,{children:"If this is successful, it will finish by printing the message"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-text",children:"The risc0 toolchain is now ready to use.\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can verify the toolchain was installed correctly by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"rustup toolchain list --verbose | grep risc0\n"})}),"\n",(0,r.jsxs)(s.p,{children:["which should list ",(0,r.jsx)(s.code,{children:"risc0"})," along with its path."]}),"\n",(0,r.jsx)(s.h2,{id:"update",children:"Update"}),"\n",(0,r.jsx)(s.p,{children:"To update your installation:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Run ",(0,r.jsx)(s.code,{children:"cargo binstall cargo-risczero"})," to update the ",(0,r.jsx)(s.code,{children:"cargo risczero"})," tool, and"]}),"\n",(0,r.jsxs)(s.li,{children:["Run ",(0,r.jsx)(s.code,{children:"cargo risczero install"})," to update the RISC Zero toolchain."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>o});var r=t(7294);const i={},n=r.createContext(i);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);