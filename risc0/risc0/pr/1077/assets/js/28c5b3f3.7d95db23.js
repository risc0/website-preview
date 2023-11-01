"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7103],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={},i="About the FRI Protocol",l={unversionedId:"reference-docs/about-fri",id:"version-0.18/reference-docs/about-fri",title:"About the FRI Protocol",description:"The FRI (Fast, Reed-Solomon Interactive Oracle Proof of Proximity) protocol is the final component of RISC Zero's argument of computational integrity.",source:"@site/versioned_docs/version-0.18/reference-docs/about-fri.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-fri",permalink:"/website-preview/risc0/risc0/pr/1077/reference-docs/about-fri",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/reference-docs/about-fri.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"About Finite Fields",permalink:"/website-preview/risc0/risc0/pr/1077/reference-docs/about-finite-fields"},next:{title:"About PLONK and PLOOKUP",permalink:"/website-preview/risc0/risc0/pr/1077/reference-docs/about-plonk"}},s={},c=[{value:"Basic Function",id:"basic-function",level:2},{value:"Background",id:"background",level:2},{value:"Inside the Algorithm",id:"inside-the-algorithm",level:3},{value:"About DEEP-FRI",id:"about-deep-fri",level:3},{value:"Suggested Reading",id:"suggested-reading",level:2},{value:"Academic Papers",id:"academic-papers",level:3},{value:"Explanatory References",id:"explanatory-references",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-the-fri-protocol"},"About the FRI Protocol"),(0,o.kt)("p",null,"The FRI (",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1077/reference-docs/about-ntts-and-fourier"},(0,o.kt)("strong",{parentName:"a"},"F"),"ast"),", ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1077/reference-docs/about-rs-codes"},(0,o.kt)("strong",{parentName:"a"},"R"),"eed-Solomon")," ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Interactive_proof_system"},(0,o.kt)("strong",{parentName:"a"},"I"),"nteractive")," ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Oracle_machine"},"Oracle")," ",(0,o.kt)("a",{parentName:"p",href:"https://privacytools.seas.harvard.edu/files/privacytools/files/stoc283fp-rothblum.pdf"},"Proof of Proximity"),") protocol is the final component of RISC Zero's argument of computational integrity."),(0,o.kt)("p",null,"RISC Zero's ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1077/reference-docs/about-starks"},"STARK")," converts an assertion of computational integrity to an assertion about polynomial division.\nIn the language of Reed-Solomon codes, this assertion about polynomial division can be re-framed as an assertion about ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hamming_distance"},"block proximity"),".\nThe FRI protocol finishes the argument by proving the assertion about block proximity."),(0,o.kt)("h2",{id:"basic-function"},"Basic Function"),(0,o.kt)("p",null,"Given a Merkle root, the ",(0,o.kt)("em",{parentName:"p"},"FRI protocol")," is a recursive technique for proving that the associated Merkle leaves are associated with a low-degree polynomial."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("h3",{id:"inside-the-algorithm"},"Inside the Algorithm"),(0,o.kt)("p",null,"The FRI protocol consists of a number of ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," rounds followed by a number of ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," rounds."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In each ",(0,o.kt)("inlineCode",{parentName:"li"},"commit")," round, the Prover commits a new (smaller) Merkle tree corresponding to evaluations of a lower-degree polynomial; the round-by-round commitments depend on a random mixing parameter that allows for an audit-trail in the upcoming query round.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In each ",(0,o.kt)("inlineCode",{parentName:"li"},"commit")," round, the degree of the FRI polynomial and the size of the associated Merkle tree is reduced by a factor of 16, in the RISC Zero implementation."),(0,o.kt)("li",{parentName:"ul"},"RISC Zero runs ",(0,o.kt)("inlineCode",{parentName:"li"},"commit")," rounds until the degree of the FRI polynomial is less than or equal to 255."))),(0,o.kt)("li",{parentName:"ul"},"In each ",(0,o.kt)("inlineCode",{parentName:"li"},"query")," round, the Prover reveals Merkle branches (and leaves) from each of the FRI commitments. The branches revealed in the query rounds are selected using the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Fiat%E2%80%93Shamir_heuristic"},"Fiat-Shamir Heuristic"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Varying the number of ",(0,o.kt)("inlineCode",{parentName:"li"},"query")," rounds offers a tradeoff between security level and computational efficiency."))),(0,o.kt)("li",{parentName:"ul"},"RISC Zero's implementation for FRI can be found ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/blob/main/risc0/zkp/src/prove/fri.rs"},"here"))),(0,o.kt)("h3",{id:"about-deep-fri"},"About DEEP-FRI"),(0,o.kt)("p",null,"Shortly after the FRI protocol was released, an alternative protocol called DEEP-FRI was released.\nAlthough DEEP-FRI was initially thought to have improved soundness relative to FRI, the Proximity Gaps for Reed-Solomon Codes paper shows that the original FRI protocol offers the same soundness results as DEEP-FRI at less computational complexity.\nThe RISC Zero ZKP system uses the original FRI protocol."),(0,o.kt)("h2",{id:"suggested-reading"},"Suggested Reading"),(0,o.kt)("h3",{id:"academic-papers"},"Academic Papers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/654.pdf"},"Proximity Gaps for Reed-Solomon Codes (Ben-Sasson et. al, 2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://drops.dagstuhl.de/opus/volltexte/2018/9018/pdf/LIPIcs-ICALP-2018-14.pdf"},"Fast Reed Solomon Interactive Oracle Proofs of Proximity (Ben-Sasson et. al, 2017)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://guyrothblum.files.wordpress.com/2014/11/rvw13.pdf"},"Interactive Proofs of Proximity (Rothblum, Vadhan, and Widgerson, 2013)"))),(0,o.kt)("h3",{id:"explanatory-references"},"Explanatory References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RISC Zero Study Club ",(0,o.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1TuufbM8py2mGDkjMUg5FWZzw8VqNri4O/view?usp=share_link"},"Slides")," & ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=j35yz22OVGE"},"Video Recording")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/EllipticHector/status/1641842245337743367"},"FRI Sequence Diagram")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2022/1216.pdf"},"A summary on the FRI low degree test (Ulrich Hab\xf6ck, Orbis Labs, 2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/starkware/low-degree-testing-f7614f5172db"},"Low Degree Testing"),", part 3 of the STARK Math series"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vitalik.ca/general/2017/11/22/starks_part_2.html"},"Vitalik's FRI article")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aszepieniec.github.io/stark-anatomy/fri"},"Anatomy of a STARK, Part 3: FRI"))))}m.isMDXComponent=!0}}]);