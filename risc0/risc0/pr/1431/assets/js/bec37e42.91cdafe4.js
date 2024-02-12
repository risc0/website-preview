"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2998],{6354:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var s=n(5893),r=n(1151);const t={},o="Bonsai on Ethereum",a={id:"bonsai/bonsai-on-eth",title:"Bonsai on Ethereum",description:"Warning: Bonsai is still in early development. Do not use in production.",source:"@site/api_versioned_docs/version-0.19/bonsai/bonsai-on-eth.md",sourceDirName:"bonsai",slug:"/bonsai/bonsai-on-eth",permalink:"/website-preview/risc0/risc0/pr/1431/api/0.19/bonsai/bonsai-on-eth",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/bonsai/bonsai-on-eth.md",tags:[],version:"0.19",frontMatter:{},sidebar:"docs",previous:{title:"Bonsai Quick Start",permalink:"/website-preview/risc0/risc0/pr/1431/api/0.19/bonsai/quickstart"},next:{title:"A Blockchain Developer's Guide to the zkVM",permalink:"/website-preview/risc0/risc0/pr/1431/api/0.19/bonsai/blockchain-zkvm-guide"}},c={},h=[{value:"Bonsai Relay",id:"bonsai-relay",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Running the Bonsai Relay",id:"running-the-bonsai-relay",level:4},{value:"Off-chain Requests",id:"off-chain-requests",level:3},{value:"On-chain Requests",id:"on-chain-requests",level:3},{value:"Verifier Contract",id:"verifier-contract",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"bonsai-on-ethereum",children:"Bonsai on Ethereum"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.em,{children:"Warning: Bonsai is still in early development. Do not use in production."})}),"\n",(0,s.jsxs)(i.p,{children:["Bonsai can produce ",(0,s.jsx)(i.a,{href:"https://www.risczero.com/news/on-chain-verification",children:"SNARK proofs"}),"; allowing efficient verification of any computation, on Ethereum."]}),"\n",(0,s.jsx)(i.p,{children:"There are two main ways to integrate your RISC Zero application with Ethereum:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Using the ",(0,s.jsx)(i.a,{href:"#bonsai-relay",children:"Bonsai Relay"})," to process proof requests and send verified results on-chain."]}),"\n",(0,s.jsxs)(i.li,{children:["Using the Bonsai proving service and the ",(0,s.jsx)(i.a,{href:"#verifier-contract",children:"verifier contract"})," directly."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"bonsai-relay",children:"Bonsai Relay"}),"\n",(0,s.jsxs)(i.p,{children:["The Bonsai Relay is a service makes it simpler to integrate RISC Zero into your applications, leveraging the ",(0,s.jsx)(i.a,{href:"https://twitter.com/RiscZero/status/1677316664772132864",children:"zk coprocessor"})," model."]}),"\n",(0,s.jsx)(i.p,{children:"At a high level, here's how it works:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Bonsai ETH Relay overview",src:n(6915).Z+"",width:"4156",height:"2492"})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Your application sends a request to run your zkVM guest to the Bonsai Relay. You can either:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Send your request on-chain, by calling ",(0,s.jsx)(i.code,{children:"requestCallback"})," on the ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/BonsaiRelay.sol",children:[(0,s.jsx)(i.code,{children:"BonsaiRelay"})," contract"]}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Send your request off-chain, by sending a request to the Bonsai Relay REST API."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"The Bonsai Relay sends the proof request to the Bonsai proving service."}),"\n",(0,s.jsxs)(i.li,{children:["Bonsai generates a ",(0,s.jsx)(i.a,{href:"https://www.risczero.com/news/on-chain-verification",children:"Groth16 SNARK"})," proof of the guest execution, and submits the ",(0,s.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"})," to the ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/BonsaiRelay.sol",children:[(0,s.jsx)(i.code,{children:"BonsaiRelay"})," contract"]}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/BonsaiRelay.sol",children:[(0,s.jsx)(i.code,{children:"BonsaiRelay"})," contract"]}),":","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Verifies the ",(0,s.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"})," by using an ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/IRiscZeroVerifier.sol",children:[(0,s.jsx)(i.code,{children:"IRiscZeroVerifier"})," contract"]})]}),"\n",(0,s.jsxs)(i.li,{children:["Extracts the journal from the verified ",(0,s.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Sends the journal and image ID in a callback to your application contract."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"https://github.com/risc0/bonsai-foundry-template",children:"Bonsai Foundry Template"})," provides a template and instructions for developing your application with the Bonsai Relay.\nMore details are provided below on how to send requests to the Bonsai Relay."]}),"\n",(0,s.jsx)(i.h4,{id:"running-the-bonsai-relay",children:"Running the Bonsai Relay"}),"\n",(0,s.jsxs)(i.p,{children:["With Bonsai in alpha, every application currently needs to run their own deployment of the Bonsai Relay.\nInstructions are included in the ",(0,s.jsx)(i.a,{href:"https://github.com/risc0/bonsai-foundry-template",children:"Bonsai Foundry Template"}),".\nThis involves running a service binary provided by RISC Zero, and deploying the ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/BonsaiRelay.sol",children:[(0,s.jsx)(i.code,{children:"BonsaiRelay"})," contract"]})]}),"\n",(0,s.jsx)(i.h3,{id:"off-chain-requests",children:"Off-chain Requests"}),"\n",(0,s.jsxs)(i.p,{children:["The Bonsai Relay accepts requests off-chain using its ",(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/REST",children:"REST"})," API."]}),"\n",(0,s.jsxs)(i.p,{children:["Using the off-chain API allows for including data not available to smart contracts in the EVM, and avoids needing to pay transaction fees on Ethereum to initiate a request.\nWhen inputs to your ",(0,s.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"})," and large (e.g. more than a few kilobytes) sending requests on-chain can be cost-prohibitive, while sending large inputs (e.g. up to tens of megabytes) via the REST API has no additional cost."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"https://docs.rs/crate/bonsai-ethereum-relay/latest",children:"Bonsai Relay SDK"})," provides a Rust interface for interacting with the Bonsai Relay.\nAn example for sending a callback request via the REST API can be found in the ",(0,s.jsx)(i.a,{href:"https://github.com/risc0/bonsai-foundry-template/blob/release-0.19/relay/examples/offchain_request.rs",children:"relay directory of the Bonsai Foundry Template"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"on-chain-requests",children:"On-chain Requests"}),"\n",(0,s.jsxs)(i.p,{children:["The Bonsai Relay also accepts requests on-chain using the ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/BonsaiRelay.sol",children:[(0,s.jsx)(i.code,{children:"BonsaiRelay"})," contract"]}),"."]}),"\n",(0,s.jsx)(i.p,{children:"On-chain requests can be useful for reducing the amount of code you need to maintain.\nWhen submitting requests off-chain, some client or indexer needs to be written to assemble the inputs and make the request to the Bonsai Relay.\nWith on-chain requests, the application smart contract can directly issue requests, and so no client or indexer needs to be written or maintained."}),"\n",(0,s.jsxs)(i.p,{children:["An example of sending a request on-chain can be found in the ",(0,s.jsx)(i.a,{href:"https://github.com/risc0/bonsai-foundry-template/blob/release-0.19/contracts/BonsaiStarter.sol#L60-L68",children:"starter contract of the Bonsai Foundry Template"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"verifier-contract",children:"Verifier Contract"}),"\n",(0,s.jsxs)(i.p,{children:["RISC Zero supports an on-chain verifier for ",(0,s.jsx)(i.a,{href:"https://www.risczero.com/news/on-chain-verification",children:"Groth16 SNARK"})," proofs generated by the Bonsai proving service.\nYou can use this contract in your applications."]}),"\n",(0,s.jsxs)(i.p,{children:["As ",(0,s.jsx)(i.a,{href:"#bonsai-relay",children:"described above"}),", the Bonsai Relay forwards requests to the Bonsai proving service, and sends proofs on-chain to be verified in the authentication for for the ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/BonsaiRelay.sol",children:[(0,s.jsx)(i.code,{children:"BonsaiRelay"})," contract"]}),".\nAn alternative to using the Bonsai Relay is to send requests to the Bonsai proving service directly, and to use the verifier contract in your own application contract."]}),"\n",(0,s.jsxs)(i.p,{children:["The verifier contract has the ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/IRiscZeroVerifier.sol",children:[(0,s.jsx)(i.code,{children:"IRiscZeroVerifier"})," interface"]}),".\nThis interface defines the relevant data structures for the receipt and provides a ",(0,s.jsx)(i.code,{children:"verify"})," method."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/IRiscZeroVerifier.sol",children:[(0,s.jsx)(i.code,{children:"IRiscZeroVerifier"})," interface"]})," is implemented by the ",(0,s.jsxs)(i.a,{href:"https://github.com/risc0/risc0/blob/release-0.19/bonsai/ethereum/contracts/groth16/RiscZeroGroth16Verifier.sol",children:[(0,s.jsx)(i.code,{children:"RiscZeroGroth16Verifier"})," contract"]}),".\nWhile Bonsai is in alpha, you will deploy this contract as part of your application."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"https://docs.rs/bonsai-sdk/latest/bonsai_sdk/",children:"Bonsai SDK"})," provides support for sending requests to the Bonsai proving service.\nYou may also want to check out our ",(0,s.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1431/api/0.19/bonsai/quickstart",children:"Bonsai Quick Start"})," page and/or the ",(0,s.jsx)(i.a,{href:"../bonsai",children:"Bonsai Overview"}),"."]})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6915:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/bonsai_ethereum-76e1795a2f79cbc67ff530d289aa1856.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var s=n(7294);const r={},t=s.createContext(r);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);