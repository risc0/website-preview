"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[363],{1206:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=i(5893),t=i(1151);const n={},s="About the FRI Protocol",a={id:"reference-docs/about-fri",title:"About the FRI Protocol",description:"The FRI (Fast, Reed-Solomon Interactive Oracle Proof of Proximity) protocol is the final component of RISC Zero's argument of computational integrity.",source:"@site/docs/reference-docs/about-fri.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-fri",permalink:"/website-preview/risc0/risc0/pr/1240/reference-docs/about-fri",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"About Finite Fields",permalink:"/website-preview/risc0/risc0/pr/1240/reference-docs/about-finite-fields"},next:{title:"About PLONK and PLOOKUP",permalink:"/website-preview/risc0/risc0/pr/1240/reference-docs/about-plonk"}},c={},l=[{value:"Basic Function",id:"basic-function",level:2},{value:"Background",id:"background",level:2},{value:"Inside the Algorithm",id:"inside-the-algorithm",level:3},{value:"About DEEP-FRI",id:"about-deep-fri",level:3},{value:"Suggested Reading",id:"suggested-reading",level:2},{value:"Academic Papers",id:"academic-papers",level:3},{value:"Explanatory References",id:"explanatory-references",level:3}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"about-the-fri-protocol",children:"About the FRI Protocol"}),"\n",(0,o.jsxs)(r.p,{children:["The FRI (",(0,o.jsxs)(r.a,{href:"about-ntts-and-fourier",children:[(0,o.jsx)(r.strong,{children:"F"}),"ast"]}),", ",(0,o.jsxs)(r.a,{href:"/website-preview/risc0/risc0/pr/1240/reference-docs/about-rs-codes",children:[(0,o.jsx)(r.strong,{children:"R"}),"eed-Solomon"]})," ",(0,o.jsxs)(r.a,{href:"https://en.wikipedia.org/wiki/Interactive_proof_system",children:[(0,o.jsx)(r.strong,{children:"I"}),"nteractive"]})," ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Oracle_machine",children:"Oracle"})," ",(0,o.jsx)(r.a,{href:"https://privacytools.seas.harvard.edu/files/privacytools/files/stoc283fp-rothblum.pdf",children:"Proof of Proximity"}),") protocol is the final component of RISC Zero's argument of computational integrity."]}),"\n",(0,o.jsxs)(r.p,{children:["RISC Zero's ",(0,o.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1240/reference-docs/about-starks",children:"STARK"})," converts an assertion of computational integrity to an assertion about polynomial division.\nIn the language of Reed-Solomon codes, this assertion about polynomial division can be re-framed as an assertion about ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Hamming_distance",children:"block proximity"}),".\nThe FRI protocol finishes the argument by proving the assertion about block proximity."]}),"\n",(0,o.jsx)(r.h2,{id:"basic-function",children:"Basic Function"}),"\n",(0,o.jsxs)(r.p,{children:["Given a Merkle root, the ",(0,o.jsx)(r.em,{children:"FRI protocol"})," is a recursive technique for proving that the associated Merkle leaves are associated with a low-degree polynomial."]}),"\n",(0,o.jsx)(r.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(r.h3,{id:"inside-the-algorithm",children:"Inside the Algorithm"}),"\n",(0,o.jsxs)(r.p,{children:["The FRI protocol consists of a number of ",(0,o.jsx)(r.code,{children:"commit"})," rounds followed by a number of ",(0,o.jsx)(r.code,{children:"query"})," rounds."]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["In each ",(0,o.jsx)(r.code,{children:"commit"})," round, the Prover commits a new (smaller) Merkle tree corresponding to evaluations of a lower-degree polynomial; the round-by-round commitments depend on a random mixing parameter that allows for an audit-trail in the upcoming query round.","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["In each ",(0,o.jsx)(r.code,{children:"commit"})," round, the degree of the FRI polynomial and the size of the associated Merkle tree is reduced by a factor of 16, in the RISC Zero implementation."]}),"\n",(0,o.jsxs)(r.li,{children:["RISC Zero runs ",(0,o.jsx)(r.code,{children:"commit"})," rounds until the degree of the FRI polynomial is less than or equal to 255."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["In each ",(0,o.jsx)(r.code,{children:"query"})," round, the Prover reveals Merkle branches (and leaves) from each of the FRI commitments. The branches revealed in the query rounds are selected using the ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Fiat%E2%80%93Shamir_heuristic",children:"Fiat-Shamir Heuristic"}),".","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Varying the number of ",(0,o.jsx)(r.code,{children:"query"})," rounds offers a tradeoff between security level and computational efficiency."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["RISC Zero's implementation for FRI can be found ",(0,o.jsx)(r.a,{href:"https://github.com/risc0/risc0/blob/main/risc0/zkp/src/prove/fri.rs",children:"here"})]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"about-deep-fri",children:"About DEEP-FRI"}),"\n",(0,o.jsx)(r.p,{children:"Shortly after the FRI protocol was released, an alternative protocol called DEEP-FRI was released.\nAlthough DEEP-FRI was initially thought to have improved soundness relative to FRI, the Proximity Gaps for Reed-Solomon Codes paper shows that the original FRI protocol offers the same soundness results as DEEP-FRI at less computational complexity.\nThe RISC Zero ZKP system uses the original FRI protocol."}),"\n",(0,o.jsx)(r.h2,{id:"suggested-reading",children:"Suggested Reading"}),"\n",(0,o.jsx)(r.h3,{id:"academic-papers",children:"Academic Papers"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://eprint.iacr.org/2020/654.pdf",children:"Proximity Gaps for Reed-Solomon Codes (Ben-Sasson et. al, 2020)"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://drops.dagstuhl.de/opus/volltexte/2018/9018/pdf/LIPIcs-ICALP-2018-14.pdf",children:"Fast Reed Solomon Interactive Oracle Proofs of Proximity (Ben-Sasson et. al, 2017)"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://guyrothblum.files.wordpress.com/2014/11/rvw13.pdf",children:"Interactive Proofs of Proximity (Rothblum, Vadhan, and Widgerson, 2013)"})}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"explanatory-references",children:"Explanatory References"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["RISC Zero Study Club ",(0,o.jsx)(r.a,{href:"https://drive.google.com/file/d/1TuufbM8py2mGDkjMUg5FWZzw8VqNri4O/view?usp=share_link",children:"Slides"})," & ",(0,o.jsx)(r.a,{href:"https://www.youtube.com/watch?v=j35yz22OVGE",children:"Video Recording"})]}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://twitter.com/EllipticHector/status/1641842245337743367",children:"FRI Sequence Diagram"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://eprint.iacr.org/2022/1216.pdf",children:"A summary on the FRI low degree test (Ulrich Hab\xf6ck, Orbis Labs, 2022)"})}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://medium.com/starkware/low-degree-testing-f7614f5172db",children:"Low Degree Testing"}),", part 3 of the STARK Math series"]}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://vitalik.ca/general/2017/11/22/starks_part_2.html",children:"Vitalik's FRI article"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://aszepieniec.github.io/stark-anatomy/fri",children:"Anatomy of a STARK, Part 3: FRI"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>a,a:()=>s});var o=i(7294);const t={},n=o.createContext(t);function s(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);