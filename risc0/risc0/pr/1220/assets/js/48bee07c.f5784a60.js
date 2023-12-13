"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1356],{5693:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(5893),a=i(1151);const s={},r="Bonsai on Ethereum",o={id:"bonsai/bonsai-on-eth",title:"Bonsai on Ethereum",description:"Warning: Bonsai is still in early development. Do not use in production.",source:"@site/api/bonsai/bonsai-on-eth.md",sourceDirName:"bonsai",slug:"/bonsai/bonsai-on-eth",permalink:"/website-preview/risc0/risc0/pr/1220/api/next/bonsai/bonsai-on-eth",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/bonsai/bonsai-on-eth.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Bonsai Quick Start",permalink:"/website-preview/risc0/risc0/pr/1220/api/next/bonsai/quickstart"},next:{title:"A Blockchain Developer's Guide to the zkVM",permalink:"/website-preview/risc0/risc0/pr/1220/api/next/bonsai/blockchain-zkvm-guide"}},c={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Off-chain",id:"off-chain",level:3},{value:"Example",id:"example",level:4},{value:"On-chain",id:"on-chain",level:3},{value:"Example",id:"example-1",level:4},{value:"Getting Started",id:"getting-started",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bonsai-on-ethereum",children:"Bonsai on Ethereum"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Warning: Bonsai is still in early development. Do not use in production."})}),"\n",(0,t.jsxs)(n.p,{children:["Bonsai can be used as a ",(0,t.jsx)(n.a,{href:"https://twitter.com/RiscZero/status/1677316664772132864",children:"zk coprocessor"})," for Ethereum, allowing you to request ",(0,t.jsx)(n.a,{href:"https://risczero.com/news/on-chain-verification",children:"verified proofs"})," via an off-chain REST API interface or on-chain directly from your smart contract."]}),"\n",(0,t.jsx)(n.p,{children:"At a high level, here's how it works:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Bonsai ETH Relay overview",src:i(6915).Z+"",width:"4156",height:"2492"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Users can delegate their smart contract's logic to Bonsai via a ",(0,t.jsx)(n.code,{children:"Request Callback"})," interface. This interface is accessible both ",(0,t.jsx)(n.em,{children:"off-chain"})," through the HTTP REST API of the ",(0,t.jsx)(n.code,{children:"Bonsai Relayer"})," and ",(0,t.jsx)(n.em,{children:"on-chain"})," via the ",(0,t.jsx)(n.a,{href:"https://github.com/risc0/risc0/blob/main/bonsai/ethereum/contracts/BonsaiRelay.sol",children:"Bonsai Relay Contract"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Bonsai Relayer"})," sends the proof request to Bonsai."]}),"\n",(0,t.jsxs)(n.li,{children:["Bonsai generates a ",(0,t.jsx)(n.a,{href:"https://www.risczero.com/news/on-chain-verification",children:"Groth16 SNARK proof"})," and its result, encapsulated in a journal."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Bonsai Relayer"})," submits this proof and journal on-chain to the ",(0,t.jsx)(n.a,{href:"https://github.com/risc0/risc0/blob/main/bonsai/ethereum/contracts/BonsaiRelay.sol",children:"Bonsai Relay Contract"})," for validation."]}),"\n",(0,t.jsx)(n.li,{children:"If validated, the journal is dispatched to the user's smart contract via the specified callback."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To integrate your application with Bonsai, you'll need to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Write the ",(0,t.jsx)(n.a,{href:"https://github.com/risc0/bonsai-foundry-template/tree/main/methods/guest/src/bin",children:"program"})," you want proven and upload it to Bonsai"]}),"\n",(0,t.jsx)(n.li,{children:"Write the on-chain part of your application and deploy it"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.p,{children:["The Bonsai Ethereum Relay provides both an ",(0,t.jsx)(n.em,{children:"off-chain"})," (vie the HTTP REST API of the ",(0,t.jsx)(n.code,{children:"Bonsai Relayer"}),") and an ",(0,t.jsx)(n.em,{children:"on-chain"})," (via the ",(0,t.jsx)(n.a,{href:"https://github.com/risc0/risc0/blob/main/bonsai/ethereum/contracts/BonsaiRelay.sol",children:"Bonsai Relay Contract"}),") interface to send ",(0,t.jsx)(n.code,{children:"Callback requests"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"off-chain",children:"Off-chain"}),"\n",(0,t.jsx)(n.p,{children:"A typical flow works as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Deploy the ",(0,t.jsx)(n.code,{children:"Bonsai Relay Contract"})," to Ethereum using address ",(0,t.jsx)(n.code,{children:"0xB.."}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Launch the ",(0,t.jsx)(n.code,{children:"Bonsai Relayer"}),", setting ",(0,t.jsx)(n.code,{children:"--contract-address"})," to ",(0,t.jsx)(n.code,{children:"0xB.."}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["To delegate off-chain computation for the new Smart Contract ",(0,t.jsx)(n.code,{children:"A"})," to Bonsai, register its ",(0,t.jsx)(n.code,{children:"Image"})," or ",(0,t.jsx)(n.code,{children:"ELF"})," (the binary executing the computation on RISC Zero ZKVM) with Bonsai."]}),"\n",(0,t.jsxs)(n.li,{children:["Use the generated ",(0,t.jsx)(n.code,{children:"Image ID"})," and the ",(0,t.jsx)(n.code,{children:"Bonsai Relay Contract"})," address 0xB.. to deploy Smart Contract ",(0,t.jsx)(n.code,{children:"A"})," on Ethereum."]}),"\n",(0,t.jsxs)(n.li,{children:["Initiate a ",(0,t.jsx)(n.code,{children:"Callback request"})," through the ",(0,t.jsx)(n.code,{children:"Bonsai Relayer"}),"'s off-chain REST API. This request is sent to Bonsai."]}),"\n",(0,t.jsxs)(n.li,{children:["After Bonsai produces an execution proof, the ",(0,t.jsx)(n.code,{children:"Bonsai Relayer"})," relays the proof and computation result to the ",(0,t.jsx)(n.code,{children:"Bonsai Relay Contract"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Ethereum verifies the proof on-chain. If validated, Smart Contract ",(0,t.jsx)(n.code,{children:"A"})," receives the computation result via the ",(0,t.jsx)(n.code,{children:"invoke_callback"})," function."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The following example assumes that the ",(0,t.jsx)(n.code,{children:"Bonsai Relayer"})," is up and running with the server API enabled,\nand that the memory image of your ",(0,t.jsx)(n.code,{children:"ELF"})," is already registered against Bonsai with a given ",(0,t.jsx)(n.code,{children:"IMAGE_ID"})," as its identifier."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"no_run",children:'\n/// Example code for sending a REST API request to the Bonsai relay service to\n/// requests, execution, proving, and on-chain callback for a zkVM guest\n/// application.\n#[derive(Parser, Debug)]\n#[command(author, version, about, long_about)]\nstruct Args {\n    /// Adress for the BonsaiStarter application contract.\n    address: Address,\n\n    /// Input N for calculating the Nth Fibonacci number.\n    number: u32,\n\n    /// Bonsai Relay API URL.\n    #[arg(long, env, default_value = "http://localhost:8080")]\n    bonsai_relay_api_url: String,\n\n    /// Bonsai API key. Used by the relay to send requests to the Bonsai proving\n    /// service. Defaults to empty, providing no authentication.\n    #[arg(long, env, default_value = "")]\n    bonsai_api_key: String,\n}\n\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n    let args = Args::parse();\n    // initialize a relay client\n    let relay_client = Client::from_parts(\n        args.bonsai_relay_api_url.clone(), // Set BONSAI_API_URL or replace this line.\n        args.bonsai_api_key.clone(),       // Set BONSAI_API_KEY or replace this line.\n    )\n    .context("Failed to initialize the relay client")?;\n\n    // Initialize the input for the FIBONACCI guest.\n    let input = U256::from(args.number).abi_encode();\n\n    // Set the function selector of the callback function.\n    let function_signature = "storeResult(uint256,uint256)";\n    let function_selector = id(function_signature);\n\n    // Create a CallbackRequest for your contract\n    // example: (contracts/BonsaiStarter.sol).\n    let request = CallbackRequest {\n        callback_contract: args.address.into(),\n        function_selector,\n        gas_limit: 3000000,\n        image_id: Digest::from(FIBONACCI_ID).into(),\n        input,\n    };\n\n    // Send the callback request to the Bonsai Relay.\n    relay_client\n        .callback_request(request)\n        .await\n        .context("Callback request failed")?;\n\n    Ok(())\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"on-chain",children:"On-chain"}),"\n",(0,t.jsxs)(n.p,{children:["As an alternative to sending a ",(0,t.jsx)(n.code,{children:"Callback request"})," from the REST API as described by step 5 of the previous section, the request can be sent via the ",(0,t.jsx)(n.em,{children:"on-chain"})," ",(0,t.jsx)(n.code,{children:"Callback request"})," interface provided by the ",(0,t.jsx)(n.a,{href:"https://github.com/risc0/risc0/blob/main/bonsai/ethereum/contracts/BonsaiRelay.sol",children:"Bonsai Relay Contract"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Send a transaction to Smart Contract ",(0,t.jsx)(n.code,{children:"A"})," to trigger a ",(0,t.jsx)(n.code,{children:"Callback request"})," event that the Bonsai Relay will catch and forward to Bonsai."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"cast"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cast send --private-key 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d --gas-limit 100000 \"$APP_ADDRESS\" 'calculateFibonacci(uint256)' 5\n"})}),"\n",(0,t.jsx)(n.p,{children:"where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$APP_ADDRESS"})," is an env variable containing the address of your Smart Contract ",(0,t.jsx)(n.code,{children:"A"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"calculateFibonacci(uint256)"})," is the function selector of your Smart Contract ",(0,t.jsx)(n.code,{children:"A"})," triggering the ",(0,t.jsx)(n.code,{children:"Callback request"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"5"})," is the input for your FIBONACCI program"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/risc0/bonsai-foundry-template",children:"Bonsai Foundry Template"})," is the best place to get started building Bonsai applications for Ethereum.\nYou may also want to check out our ",(0,t.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1220/api/next/bonsai/quickstart",children:"Bonsai Quick Start"})," page."]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6915:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/bonsai_ethereum-76e1795a2f79cbc67ff530d289aa1856.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);