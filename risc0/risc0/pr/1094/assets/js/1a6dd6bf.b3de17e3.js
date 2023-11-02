"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[897],{503:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(5893),t=o(1151);const i={},s="About Reed Solomon Codes",c={id:"reference-docs/about-rs-codes",title:"About Reed Solomon Codes",description:"Reed Solomon codes (RS codes) are a family of error correcting codes based on polynomials over finite fields.",source:"@site/docs/reference-docs/about-rs-codes.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-rs-codes",permalink:"/website-preview/risc0/risc0/pr/1094/reference-docs/about-rs-codes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"About RISC-V",permalink:"/website-preview/risc0/risc0/pr/1094/reference-docs/about-risc-v"},next:{title:"Contributor's Guide",permalink:"/website-preview/risc0/risc0/pr/1094/contributors-guide"}},a={},d=[{value:"Documentation",id:"documentation",level:2},{value:"Basic Function",id:"basic-function",level:2},{value:"Background",id:"background",level:2},{value:"Suggested Reading and Videos",id:"suggested-reading-and-videos",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"about-reed-solomon-codes",children:"About Reed Solomon Codes"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction",children:"Reed Solomon codes"})," (RS codes) are a family of ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Error_correction_code",children:"error correcting codes"})," based on polynomials over ",(0,n.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1094/reference-docs/about-finite-fields",children:"finite fields"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsxs)(r.p,{children:["Implementation and documentation for Reed-Solomon encoding is in the ",(0,n.jsx)(r.code,{children:"risc0-zkp-core"})," ",(0,n.jsx)(r.a,{href:"https://github.com/risc0/risc0#rust-crates",children:"Rust crate"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"basic-function",children:"Basic Function"}),"\n",(0,n.jsxs)(r.p,{children:["A RISC Zero ",(0,n.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html",children:"receipt"})," demonstrates the validity of the associated ",(0,n.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1094/proof-system/what_is_a_trace",children:"execution trace"})," by encoding the execution instructions and the trace data into polynomials and then making various assertions about those polynomials.\nWe refer to this process as ",(0,n.jsx)(r.em,{children:"arithmetization of the trace"}),", and RISC Zero's arithmetization is based on Reed Solomon encoding."]}),"\n",(0,n.jsx)(r.h2,{id:"background",children:"Background"}),"\n",(0,n.jsxs)(r.p,{children:["Adding a ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Parity_bit",children:"parity bit"})," to a binary string offers a form of error detection.\nError correcting codes extend this line of thinking: when sending data that may get corrupted, we can allow the recipient to detect and correct errors by adding some error correcting bits.\nReed-Solomon codes are an industry standard for error correction; they're used in many signal processing applications, including cell communication, QR codes, and ",(0,n.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1094/reference-docs/about-starks",children:"STARKs"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["In the context of RISC Zero's receipts, the relevance of Reed-Solomon codes is quite a bit more nuanced than the standard error correction use cases.\nThe error amplification of Reed-Solomon encoding provides cryptographic soundness to RISC Zero's computational receipts.\nDuring the process of generating a receipt, any errors in the trace are ",(0,n.jsx)(r.em,{children:"amplified"})," by the process of arithmetization.\nThis error amplification means that even a single error in the execution trace can be easily identified."]}),"\n",(0,n.jsx)(r.h2,{id:"suggested-reading-and-videos",children:"Suggested Reading and Videos"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://drive.google.com/file/d/1p0AZ3E4kLIDmFslW_c47YGb-EgeXc_YZ/view",children:"Slides"}),", ",(0,n.jsx)(r.a,{href:"https://youtu.be/Yu9DHhdSqQo",children:"recording"}),", and ",(0,n.jsx)(r.a,{href:"https://drive.google.com/file/d/1JtzBGxz1c-PDVIIRmWa85_A22NS9dlL-/view?usp=share_link",children:"practice problems"})," from RISC Zero Study Club"]}),"\n",(0,n.jsxs)(r.li,{children:["3blue1brown has two videos that offer a great introduction to error correcting codes: ",(0,n.jsx)(r.a,{href:"https://www.youtube.com/watch?v=X8jsijhllIA",children:"Part 1"})," and ",(0,n.jsx)(r.a,{href:"https://www.youtube.com/watch?v=b3NxrZOu_CE&t=0s",children:"Part 2"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Mary Wootters has a fantastic course on Algebraic Coding Theory. The ",(0,n.jsx)(r.a,{href:"https://www.youtube.com/playlist?list=PLkvhuSoxwjI_UudECvFYArvG0cLbFlzSr",children:"YouTube"})," and the ",(0,n.jsx)(r.a,{href:"https://web.stanford.edu/class/cs250/",children:"course website"})," are both great resources.","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.youtube.com/watch?v=yQkEnde2lNg&list=PLkvhuSoxwjI_UudECvFYArvG0cLbFlzSr&index=16",children:"Reed-Solomon Lesson"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.a,{href:"https://epubs.siam.org/doi/10.1137/0108018",children:"Reed-Solomon paper"})," is quite clear and only a few pages long."]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.a,{href:"https://eprint.iacr.org/2020/654.pdf",children:"Proximity Gaps for Reed-Solomon Codes"})," paper is central to the soundness of the RISC Zero proof system.","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["See also ",(0,n.jsx)(r.a,{href:"https://www.youtube.com/watch?v=v0ZHUPzKotY",children:"Dan Carmon's talk"})," at the IEEE Symposium on the Foundations of Computer Science"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,r,o)=>{o.d(r,{Z:()=>c,a:()=>s});var n=o(7294);const t={},i=n.createContext(t);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);