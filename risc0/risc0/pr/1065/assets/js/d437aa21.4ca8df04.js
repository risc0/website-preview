"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5352],{1561:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(5893),n=r(1151);const s={},o="Receipts 101",c={id:"zkvm/developer-guide/receipts",title:"Receipts 101",description:"A brief introduction to the RISC Zero [receipt].",source:"@site/api_versioned_docs/version-0.19/zkvm/developer-guide/receipts.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/receipts",permalink:"/website-preview/risc0/risc0/pr/1065/api/zkvm/developer-guide/receipts",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/developer-guide/receipts.md",tags:[],version:"0.19",frontMatter:{},sidebar:"docs",previous:{title:"Host Code 101",permalink:"/website-preview/risc0/risc0/pr/1065/api/zkvm/developer-guide/host-code-101"},next:{title:"Cryptography Acceleration",permalink:"/website-preview/risc0/risc0/pr/1065/api/zkvm/developer-guide/acceleration"}},a={},l=[{value:"What is a receipt?",id:"what-is-a-receipt",level:2},{value:"How are receipts used?",id:"how-are-receipts-used",level:2},{value:"Extracting the Journal",id:"extracting-the-journal",level:2},{value:"Verifying a Receipt",id:"verifying-a-receipt",level:2},{value:"Serializing and Deserializing Receipts",id:"serializing-and-deserializing-receipts",level:2},{value:"Happy Building!",id:"happy-building",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"receipts-101",children:"Receipts 101"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["A brief introduction to the RISC Zero ",(0,t.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"}),"."]})}),"\n",(0,t.jsx)(i.h2,{id:"what-is-a-receipt",children:"What is a receipt?"}),"\n",(0,t.jsx)(i.p,{children:"A receipt gives the results of your program along with proof that they were produced honestly."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"From Guest Code to Receipt",src:r(8318).Z+"",width:"1778",height:"892"})}),"\n",(0,t.jsxs)(i.p,{children:["When you execute your ",(0,t.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1065/api/zkvm/",children:"zkVM application"}),", the output of your application is included in a ",(0,t.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"}),".\nThe ",(0,t.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"})," serves as a succinct ",(0,t.jsx)(i.a,{href:"/terminology#proof",children:"validity proof"})," for the ",(0,t.jsx)(i.a,{href:"/terminology#execution-trace",children:"execution"})," of your application.\nReceipts can be passed to third parties and ",(0,t.jsx)(i.a,{href:"/terminology#verify",children:"verified"})," in order to cryptographically attest to the validity of your application's output."]}),"\n",(0,t.jsxs)(i.p,{children:["The receipt consists of a ",(0,t.jsx)(i.a,{href:"/terminology#journal",children:"journal"})," and a ",(0,t.jsx)(i.a,{href:"/terminology#seal",children:"seal"}),".\nThe journal attests to the public outputs of the program, and\nthe seal is the opaque blob that cryptographically attests to the validity of the receipt."]}),"\n",(0,t.jsx)(i.h2,{id:"how-are-receipts-used",children:"How are receipts used?"}),"\n",(0,t.jsxs)(i.p,{children:["Suppose Alice and Bob have agreed on some computation that needs to get done.\nIn particular, they've agreed on some zkVM ",(0,t.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"}),", and they each have access to the source code and the ",(0,t.jsx)(i.a,{href:"/terminology#image-id",children:"Image ID"})," for that guest program.\n(In practice, Bob may retrieve the Image ID either by constructing it himself or retrieving it from a trusted channel.)"]}),"\n",(0,t.jsx)(i.p,{children:"Alice runs the zkVM to generate a receipt, and then Alice sends the receipt to Bob.\nAfter receiving the receipt, Bob can:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["inspect the receipt to extract the ",(0,t.jsx)(i.a,{href:"/terminology#journal",children:"journal"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/terminology#verify",children:"verify"})," the receipt to ensure that:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["the ",(0,t.jsx)(i.a,{href:"/terminology#execution-trace",children:"execution"})," was valid, and"]}),"\n",(0,t.jsxs)(i.li,{children:["the ",(0,t.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"})," that executed was consistent with the expected ",(0,t.jsx)(i.a,{href:"/terminology#image-id",children:"image ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"extracting-the-journal",children:"Extracting the Journal"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"/terminology#journal",children:"journal"})," contains the public outputs of the computation.\nUsers can extract the journal from a receipt using ",(0,t.jsx)(i.a,{href:"https://docs.rs/risc0-zkvm/0.19/risc0_zkvm/struct.Receipt.html#structfield.journal",children:"receipt.journal"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"verifying-a-receipt",children:"Verifying a Receipt"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/terminology#verify",children:"Verifying"})," the receipt provides cryptographic assurance that the ",(0,t.jsx)(i.a,{href:"/terminology#journal",children:"journal"})," was created honestly using the ",(0,t.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"})," with the expected ",(0,t.jsx)(i.a,{href:"/terminology#image-id",children:"Image ID"}),".\nUsers can verify the receipt using ",(0,t.jsx)(i.a,{href:"https://docs.rs/risc0-zkvm/0.19/risc0_zkvm/struct.Receipt.html#method.verify",children:"receipt.verify()"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"serializing-and-deserializing-receipts",children:"Serializing and Deserializing Receipts"}),"\n",(0,t.jsxs)(i.p,{children:["For serializing and deserializing, you can use ",(0,t.jsx)(i.a,{href:"https://crates.io/crates/serde",children:"serde"})," which supports many encoding formats.\nThere isn't a one-size-fits-all solution here, but one option is:"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"let bytes = bincode::serialize(&receipt);"})}),"\n",(0,t.jsx)(i.h2,{id:"happy-building",children:"Happy Building!"}),"\n",(0,t.jsxs)(i.p,{children:["Hopefully, these guides and the ",(0,t.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1065/api/zkvm/quickstart",children:"zkVM Quick Start"})," page will be sufficient for you to build your first ",(0,t.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1065/api/zkvm/",children:"zkVM application"}),"!"]}),"\n",(0,t.jsxs)(i.p,{children:["If you run into problems, don't be a stranger!\nYou can file an issue on ",(0,t.jsx)(i.a,{href:"https://github.com/risc0/website",children:"these docs"})," or the ",(0,t.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/release-0.19/examples",children:"examples"}),", and we're happy to answer questions on ",(0,t.jsx)(i.a,{href:"https://discord.gg/risczero",children:"Discord"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8318:(e,i,r)=>{r.d(i,{Z:()=>t});const t=r.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"},1151:(e,i,r)=>{r.d(i,{Z:()=>c,a:()=>o});var t=r(7294);const n={},s=t.createContext(n);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);