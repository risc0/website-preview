"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7065],{5395:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(5893),r=t(1151);const i={},o="Installation",l={id:"zkvm/install",title:"Installation",description:"These instructions tell you how to install (or update) RISC Zero tools so you",source:"@site/api_versioned_docs/version-0.20/zkvm/install.md",sourceDirName:"zkvm",slug:"/zkvm/install",permalink:"/website-preview/risc0/risc0/pr/1442/api/zkvm/install",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/install.md",tags:[],version:"0.20",frontMatter:{},sidebar:"api",previous:{title:"dev-mode",permalink:"/website-preview/risc0/risc0/pr/1442/api/zkvm/dev-mode"},next:{title:"Rust Resources",permalink:"/website-preview/risc0/risc0/pr/1442/api/zkvm/rust-resources"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"Update",id:"update",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.p,{children:["These instructions tell you how to install (or update) RISC Zero tools so you\ncan build your own RISC Zero zkVM projects. By following these instructions, you\nwill install the ",(0,n.jsx)(s.a,{href:"https://crates.io/crates/cargo-risczero",children:(0,n.jsx)(s.code,{children:"cargo risczero"})})," tool for creating and\nbuilding RISC Zero zkVM projects, as well as the RISC Zero toolchain used to\nbuild zkVM guest programs in Rust."]}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.p,{children:["The RISC Zero zkVM requires Rust, so start by ",(0,n.jsxs)(s.a,{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",children:["installing Rust and\n",(0,n.jsx)(s.code,{children:"rustup"})]})," if you don't already have it. Please note that you will\nneed to follow the recommended Rust installation instructions that use ",(0,n.jsx)(s.a,{href:"https://rustup.rs/",children:"rustup"}),"\nrather than any of the alternative Rust installation options, as RISC Zero\ndepends on the ",(0,n.jsx)(s.a,{href:"https://rustup.rs/",children:"rustup"})," tool specifically."]}),"\n",(0,n.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(s.p,{children:["Next, install the ",(0,n.jsx)(s.a,{href:"https://crates.io/crates/cargo-risczero",children:(0,n.jsx)(s.code,{children:"cargo risczero"})})," tool and use its ",(0,n.jsxs)(s.a,{href:"https://crates.io/crates/cargo-risczero",children:[(0,n.jsx)(s.code,{children:"install"}),"\ncommand"]})," to install the toolchain by running:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cargo install cargo-binstall\ncargo binstall cargo-risczero\ncargo risczero install\n"})}),"\n",(0,n.jsx)(s.p,{children:"If this is successful, it will finish by printing the message"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"The risc0 toolchain is now ready to use.\n"})}),"\n",(0,n.jsx)(s.p,{children:"You can verify the toolchain was installed correctly by running"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"rustup toolchain list --verbose | grep risc0\n"})}),"\n",(0,n.jsxs)(s.p,{children:["which should list ",(0,n.jsx)(s.code,{children:"risc0"})," along with its path."]}),"\n",(0,n.jsx)(s.h2,{id:"update",children:"Update"}),"\n",(0,n.jsx)(s.p,{children:"To update your installation:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Run ",(0,n.jsx)(s.code,{children:"cargo binstall cargo-risczero"})," to update the ",(0,n.jsx)(s.code,{children:"cargo risczero"})," tool, and"]}),"\n",(0,n.jsxs)(s.li,{children:["Run ",(0,n.jsx)(s.code,{children:"cargo risczero install"})," to update the RISC Zero toolchain."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>o});var n=t(7294);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);