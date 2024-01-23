"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6147],{2724:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(5893),r=s(1151);const i={},o="Installation",l={id:"zkvm/install",title:"Installation",description:"These instructions tell you how to install (or update) RISC Zero tools so you can build your own RISC Zero zkVM projects. By following these instructions, you will install the [cargo risczero] tool for creating and building RISC Zero zkVM projects, as well as the RISC Zero toolchain used to build zkVM guest programs in Rust.",source:"@site/api/zkvm/install.md",sourceDirName:"zkvm",slug:"/zkvm/install",permalink:"/website-preview/risc0/risc0/pr/1240/api/next/zkvm/install",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/install.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"What is dev-mode, and how can you use it safely?",permalink:"/website-preview/risc0/risc0/pr/1240/api/next/zkvm/dev-mode"},next:{title:"Rust Resources",permalink:"/website-preview/risc0/risc0/pr/1240/api/next/zkvm/developer-guide/rust-resources"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"Update",id:"update",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.p,{children:["These instructions tell you how to install (or update) RISC Zero tools so you can build your own RISC Zero zkVM projects. By following these instructions, you will install the ",(0,n.jsx)(t.a,{href:"https://crates.io/crates/cargo-risczero",children:(0,n.jsx)(t.code,{children:"cargo risczero"})})," tool for creating and building RISC Zero zkVM projects, as well as the RISC Zero toolchain used to build zkVM guest programs in Rust."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["The RISC Zero zkVM requires Rust, so start by ",(0,n.jsxs)(t.a,{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",children:["installing Rust and ",(0,n.jsx)(t.code,{children:"rustup"})]})," if you don't already have it. Please note that you will need to follow the recommended Rust installation instructions that use ",(0,n.jsx)(t.a,{href:"https://rustup.rs/",children:"rustup"})," rather than any of the alternative Rust installation options, as RISC Zero depends on the ",(0,n.jsx)(t.a,{href:"https://rustup.rs/",children:"rustup"})," tool specifically."]}),"\n",(0,n.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(t.p,{children:["Next, install the ",(0,n.jsx)(t.a,{href:"https://crates.io/crates/cargo-risczero",children:(0,n.jsx)(t.code,{children:"cargo risczero"})})," tool and use its ",(0,n.jsxs)(t.a,{href:"https://crates.io/crates/cargo-risczero",children:[(0,n.jsx)(t.code,{children:"install"})," command"]})," to install the toolchain by running"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cargo install cargo-binstall\ncargo binstall cargo-risczero\ncargo risczero install\n"})}),"\n",(0,n.jsx)(t.p,{children:"If this is successful, it will finish by printing the message"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"The risc0 toolchain is now ready to use.\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can verify the toolchain was installed correctly by running"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"rustup toolchain list --verbose | grep risc0\n"})}),"\n",(0,n.jsxs)(t.p,{children:["which should list ",(0,n.jsx)(t.code,{children:"risc0"})," along with its path."]}),"\n",(0,n.jsx)(t.h2,{id:"update",children:"Update"}),"\n",(0,n.jsx)(t.p,{children:"To update your installation:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"cargo binstall cargo-risczero"})," to update the ",(0,n.jsx)(t.code,{children:"cargo risczero"})," tool, and"]}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"cargo risczero install"})," to update the RISC Zero toolchain."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);