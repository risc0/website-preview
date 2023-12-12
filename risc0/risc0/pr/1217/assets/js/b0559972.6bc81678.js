"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[785],{3049:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=t(5893),i=t(1151);const c={},n="Cryptography Acceleration",o={id:"zkvm/developer-guide/acceleration",title:"Cryptography Acceleration",description:'RISC Zero\u2019s rv32im implementation includes a number of specialized extension circuits, including two \u201caccelerators\u201d for cryptographic functions: SHA-256 and 256-bit modular multiplication, referred to as "bigint" multiplication. By implementing these operations directly in the \u201chardware\u201d of the zkVM, programs that use these accelerators execute faster and can be proven with significantly less resources .',source:"@site/api_versioned_docs/version-0.18/zkvm/developer-guide/acceleration.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/acceleration",permalink:"/website-preview/risc0/risc0/pr/1217/api/0.18/zkvm/developer-guide/acceleration",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/developer-guide/acceleration.md",tags:[],version:"0.18",frontMatter:{},sidebar:"docs",previous:{title:"Receipts 101",permalink:"/website-preview/risc0/risc0/pr/1217/api/0.18/zkvm/developer-guide/receipts"},next:{title:"Performance Benchmarks",permalink:"/website-preview/risc0/risc0/pr/1217/api/0.18/zkvm/benchmarks"}},a={},l=[{value:"Accelerated Crates",id:"accelerated-crates",level:2},{value:"Using Accelerated Crates",id:"using-accelerated-crates",level:3},{value:"Adding Accelerator Support To Crates",id:"adding-accelerator-support-to-crates",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"cryptography-acceleration",children:"Cryptography Acceleration"}),"\n",(0,s.jsxs)(r.p,{children:["RISC Zero\u2019s rv32im implementation includes a number of specialized extension circuits, including two \u201caccelerators\u201d for cryptographic functions: SHA-256 and ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/risc0/pull/466",children:"256-bit modular multiplication"}),', referred to as "bigint" multiplication. By implementing these operations directly in the \u201chardware\u201d of the zkVM, programs that use these accelerators execute faster and can be proven with significantly less resources ',(0,s.jsx)(r.sup,{children:(0,s.jsx)(r.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"accelerated-crates",children:"Accelerated Crates"}),"\n",(0,s.jsx)(r.p,{children:'The SHA-256 and bigint accelerators are currently integrated in "accelerated" versions of popular cryptographic Rust crates.'}),"\n",(0,s.jsx)(r.p,{children:"These crates include:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsxs)(r.a,{href:"https://github.com/risc0/RustCrypto-crypto-bigint/tree/risczero",children:["RustCrypto's ",(0,s.jsx)(r.code,{children:"crypto-bigint"})," crate"]})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsxs)(r.a,{href:"https://github.com/risc0/RustCrypto-hashes/tree/risczero",children:["RustCrypto's ",(0,s.jsx)(r.code,{children:"sha2"})," crate"]})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsxs)(r.a,{href:"https://github.com/risc0/RustCrypto-elliptic-curves/tree/risczero",children:["RustCrypto's ",(0,s.jsx)(r.code,{children:"k256"})," crate"]})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/risc0/curve25519-dalek/tree/risczero",children:"Dalek Cryptography's curve25519-dalek crate"})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Each of these are forks of the original source code repository, with modifications to use RISC Zero cryptography extensions."}),"\n",(0,s.jsx)(r.h3,{id:"using-accelerated-crates",children:"Using Accelerated Crates"}),"\n",(0,s.jsxs)(r.p,{children:["When using any of the crates listed above directly, specifying the dependency as a ",(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories",children:"git dependency"}),". For example:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-toml",children:'[dependencies]\nsha2 = { git = "https://github.com/risc0/RustCrypto-hashes", tag = "sha2-v0.10.6-risczero.0" }\n'})}),"\n",(0,s.jsxs)(r.p,{children:["When using cryptography indirectly, e.g. via the ",(0,s.jsx)(r.code,{children:"cookie"}),", ",(0,s.jsx)(r.code,{children:"oauth2"}),", or ",(0,s.jsx)(r.code,{children:"revm"}),", crates it may be possible to enable acceleration support without code changes by applying a ",(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/cargo/reference/overriding-dependencies.html#the-patch-section",children:"Cargo patch system"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["An example of how to use these crates to accelerate ECDSA signature verification can be in the ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/ecdsa",children:"ECDSA example"}),". Note the ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/risc0/blob/v0.18.0/examples/ecdsa/methods/guest/Cargo.toml#L13-L18",children:"use of the patched versions"})," of ",(0,s.jsx)(r.code,{children:"sha2"}),", ",(0,s.jsx)(r.code,{children:"crypto-bigint"})," and ",(0,s.jsx)(r.code,{children:"k256"})," crates used in the guest's ",(0,s.jsx)(r.code,{children:"Cargo.toml"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"adding-accelerator-support-to-crates",children:"Adding Accelerator Support To Crates"}),"\n",(0,s.jsx)(r.p,{children:"It's possible to add accelerator support for your own crates."}),"\n",(0,s.jsxs)(r.p,{children:["An example of how to do this can be found in this ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..k256/v0.13.1-risczero.1",children:"diff of RISC Zero's k256 crate fork"}),", which shows the code changes needed to accelerate RustCrypto's secp256k1 ECDSA library. This fork starts from the base implementation, and changes the core operations to use the accelerated 256-bit modular multiplication instruction. E.g. ",(0,s.jsx)(r.a,{href:"https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..k256/v0.13.1-risczero.1#diff-ab10e01be1d99a874f90c9a6143bb1c64f37e04dcb220b5ab50b9273d99e0a0cR176-R179",children:(0,s.jsx)(r.code,{children:"FieldElement8x32R0::mul"})}),"."]}),"\n",(0,s.jsxs)(r.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(r.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(r.p,{children:["This is similar to the cryptography support such as ",(0,s.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/AES_instruction_set#x86_architecture_processors",children:"AES-NI"})," or the ",(0,s.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Intel_SHA_extensions",children:"SHA extensions"})," for x86 processors. In both cases, the circuitry is extended to compute otherwise expensive operations in fewer instruction cycles. ",(0,s.jsx)(r.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>n});var s=t(7294);const i={},c=s.createContext(i);function n(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);