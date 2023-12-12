"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1168],{1066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=r(5893),s=r(1151);const c={},n="Cryptography Acceleration",o={id:"zkvm/developer-guide/acceleration",title:"Cryptography Acceleration",description:'RISC Zero\u2019s rv32im implementation includes a number of specialized extension circuits, including two \u201caccelerators\u201d for cryptographic functions: SHA-256 and 256-bit modular multiplication, referred to as "bigint" multiplication. By implementing these operations directly in the \u201chardware\u201d of the zkVM, programs that use these accelerators execute faster and can be proven with significantly less resources .',source:"@site/api/zkvm/developer-guide/acceleration.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/acceleration",permalink:"/website-preview/risc0/risc0/pr/1217/api/next/zkvm/developer-guide/acceleration",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/developer-guide/acceleration.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Guest Optimization Guide",permalink:"/website-preview/risc0/risc0/pr/1217/api/next/zkvm/developer-guide/optimization"},next:{title:"Guest Profiling Guide",permalink:"/website-preview/risc0/risc0/pr/1217/api/next/zkvm/developer-guide/profiling"}},a={},l=[{value:"Accelerated Crates",id:"accelerated-crates",level:2},{value:"Using Accelerated Crates",id:"using-accelerated-crates",level:3},{value:"Adding Accelerator Support To Crates",id:"adding-accelerator-support-to-crates",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"cryptography-acceleration",children:"Cryptography Acceleration"}),"\n",(0,i.jsxs)(t.p,{children:["RISC Zero\u2019s rv32im implementation includes a number of specialized extension circuits, including two \u201caccelerators\u201d for cryptographic functions: SHA-256 and ",(0,i.jsx)(t.a,{href:"https://github.com/risc0/risc0/pull/466",children:"256-bit modular multiplication"}),', referred to as "bigint" multiplication. By implementing these operations directly in the \u201chardware\u201d of the zkVM, programs that use these accelerators execute faster and can be proven with significantly less resources ',(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"accelerated-crates",children:"Accelerated Crates"}),"\n",(0,i.jsx)(t.p,{children:'The SHA-256 and bigint accelerators are currently integrated in "accelerated" versions of popular cryptographic Rust crates.'}),"\n",(0,i.jsx)(t.p,{children:"These crates include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"https://github.com/risc0/RustCrypto-crypto-bigint/tree/risczero",children:["RustCrypto's ",(0,i.jsx)(t.code,{children:"crypto-bigint"})," crate"]})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"https://github.com/risc0/RustCrypto-hashes/tree/risczero",children:["RustCrypto's ",(0,i.jsx)(t.code,{children:"sha2"})," crate"]})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"https://github.com/risc0/RustCrypto-elliptic-curves/tree/risczero",children:["RustCrypto's ",(0,i.jsx)(t.code,{children:"k256"})," crate"]})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/risc0/curve25519-dalek/tree/risczero",children:"Dalek Cryptography's curve25519-dalek crate"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Each of these are forks of the original source code repository, with modifications to use RISC Zero cryptography extensions."}),"\n",(0,i.jsx)(t.h3,{id:"using-accelerated-crates",children:"Using Accelerated Crates"}),"\n",(0,i.jsxs)(t.p,{children:["When using any of the crates listed above directly, specifying the dependency as a ",(0,i.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories",children:"git dependency"}),". For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'[dependencies.sha2]\ngit = "https://github.com/risc0/RustCrypto-hashes"\ntag = "sha2-v0.10.6-risczero.0"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["When using cryptography indirectly, e.g. via the ",(0,i.jsx)(t.code,{children:"cookie"}),", ",(0,i.jsx)(t.code,{children:"oauth2"}),", or ",(0,i.jsx)(t.code,{children:"revm"}),", crates it may be possible to enable acceleration support without code changes by applying a ",(0,i.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/reference/overriding-dependencies.html#the-patch-section",children:"Cargo patch system"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["An example of how to use these crates to accelerate ECDSA signature verification can be in the ",(0,i.jsx)(t.a,{href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/ecdsa",children:"ECDSA example"}),". Note the ",(0,i.jsx)(t.a,{href:"https://github.com/risc0/risc0/blob/v0.18.0/examples/ecdsa/methods/guest/Cargo.toml#L13-L18",children:"use of the patched versions"})," of ",(0,i.jsx)(t.code,{children:"sha2"}),", ",(0,i.jsx)(t.code,{children:"crypto-bigint"})," and ",(0,i.jsx)(t.code,{children:"k256"})," crates used in the guest's ",(0,i.jsx)(t.code,{children:"Cargo.toml"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-accelerator-support-to-crates",children:"Adding Accelerator Support To Crates"}),"\n",(0,i.jsx)(t.p,{children:"It's possible to add accelerator support for your own crates."}),"\n",(0,i.jsxs)(t.p,{children:["An example of how to do this can be found in this ",(0,i.jsx)(t.a,{href:"https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..k256/v0.13.1-risczero.1",children:"diff of RISC Zero's k256 crate fork"}),", which shows the code changes needed to accelerate RustCrypto's secp256k1 ECDSA library. This fork starts from the base implementation, and changes the core operations to use the accelerated 256-bit modular multiplication instruction. E.g. ",(0,i.jsx)(t.a,{href:"https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..k256/v0.13.1-risczero.1#diff-ab10e01be1d99a874f90c9a6143bb1c64f37e04dcb220b5ab50b9273d99e0a0cR176-R179",children:(0,i.jsx)(t.code,{children:"FieldElement8x32R0::mul"})}),"."]}),"\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(t.p,{children:["This is similar to the cryptography support such as ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/AES_instruction_set#x86_architecture_processors",children:"AES-NI"})," or the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Intel_SHA_extensions",children:"SHA extensions"})," for x86 processors. In both cases, the circuitry is extended to compute otherwise expensive operations in fewer instruction cycles. ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>n});var i=r(7294);const s={},c=i.createContext(s);function n(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);