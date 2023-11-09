"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5838],{4404:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=r(5893),t=r(1151);const i={},o="About STARKs",c={id:"reference-docs/about-starks",title:"About STARKs",description:"The seal on a RISC Zero receipt is generated using a zk-STARK: a zero knowledge, scalable, transparent argument of knowledge.",source:"@site/docs/reference-docs/about-starks.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-starks",permalink:"/website-preview/risc0/risc0/pr/1132/reference-docs/about-starks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"About PLONK and PLOOKUP",permalink:"/website-preview/risc0/risc0/pr/1132/reference-docs/about-plonk"},next:{title:"About Number Theoretic Transforms",permalink:"/website-preview/risc0/risc0/pr/1132/reference-docs/about-ntts-and-fourier"}},a={},l=[{value:"Documentation",id:"documentation",level:2},{value:"References",id:"references",level:2},{value:"Less Technical",id:"less-technical",level:3},{value:"More Technical",id:"more-technical",level:3},{value:"Most Technical",id:"most-technical",level:3}];function h(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"about-starks",children:"About STARKs"}),"\n",(0,s.jsxs)(n.p,{children:["The seal on a RISC Zero receipt is generated using a ",(0,s.jsx)(n.strong,{children:"zk-STARK"}),": a ",(0,s.jsx)(n.em,{children:"zero knowledge, scalable, transparent argument of knowledge."})]}),"\n",(0,s.jsxs)(n.p,{children:["STARKs are a highly technical process - an innovation in the world of zero-knowledge cryptography introduced by Eli Ben-Sasson et. al in 2018.\nIn order to prove the integrity of a computation with a STARK, the prover arithmetizes the entire question.\nBy encoding the ",(0,s.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1132/proof-system/what_is_a_trace",children:"execution trace"})," into ",(0,s.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1132/reference-docs/about-finite-fields",children:"polynomials"}),", the statement of computational integrity is reduced to a statement about polynomial division."]}),"\n",(0,s.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(n.p,{children:["In the context of the RISC Zero zkVM, the term ",(0,s.jsx)(n.strong,{children:"seal"})," refers to the zk-STARK that attests to the integrity of the trace.\nThe following documentation describes the RISC Zero zk-STARK in more detail:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1132/proof-system/",children:"Proof system sequence diagram"})," ",(0,s.jsx)("br",{})," This document includes a sequence diagram and step-by-step specification of the RISC Zero zk-STARK."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1132/proof-system/stark-by-hand",children:"STARK by Hand"})," ",(0,s.jsx)("br",{})," This document shows a simplified, concrete example of the construction of a RISC Zero seal."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)(n.p,{children:"We recommend the following external references on STARKs:"}),"\n",(0,s.jsx)(n.h3,{id:"less-technical",children:"Less Technical"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://medium.com/@eli_1210/extreme-integrity-in-decentralized-world-a56da4c730ea",children:"Extreme Integrity in Decentralized World"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://medium.com/starkware/the-cambrian-explosion-of-crypto-proofs-7ac080ac9aed",children:"Cambrian Explosion of Crypto Proofs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://consensys.net/blog/blockchain-explained/zero-knowledge-proofs-starks-vs-snarks/",children:"STARKs vs. SNARKS (Consensys, 2021)"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"more-technical",children:"More Technical"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://aszepieniec.github.io/stark-anatomy/",children:"Anatomy of a Stark"})," (developer focused)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://medium.com/tag/stark-math",children:"The Starkmath series"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://starkware.co/stark-101/",children:"STARK 101"})," (developer focused)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://vitalik.ca/general/2017/11/09/starks_part_1.html",children:"Vitalik's STARK series"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"most-technical",children:"Most Technical"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2018/046.pdf",children:"The STARK paper (Ben-Sasson et al, 2018)"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var s=r(7294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);