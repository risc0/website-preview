"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4351],{6455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=n(5893),i=n(1151);const r={},o="Introduction to Input/Output in the zkVM",d={id:"zkvm/input-output",title:"Introduction to Input/Output in the zkVM",description:"This document provides an overview of how to perform I/O operations in the zkVM.",source:"@site/api/zkvm/input-output.md",sourceDirName:"zkvm",slug:"/zkvm/input-output",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/input-output",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/input-output.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Receipts 101",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/receipts"},next:{title:"Guest Optimization Guide",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/optimization"}},c={},a=[{value:"Public and Private Data",id:"public-and-private-data",level:2},{value:"File Descriptors and I/O",id:"file-descriptors-and-io",level:2},{value:"Handling Inputs",id:"handling-inputs",level:2},{value:"Handling Private Outputs",id:"handling-private-outputs",level:2},{value:"Handling Public Outputs",id:"handling-public-outputs",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Further examples",id:"further-examples",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"introduction-to-inputoutput-in-the-zkvm",children:"Introduction to Input/Output in the zkVM"}),"\n",(0,s.jsx)(t.p,{children:"This document provides an overview of how to perform I/O operations in the zkVM.\nIt covers the methods used to handle inputs and outputs, the distinction between\npublic and private data, and additional considerations."}),"\n",(0,s.jsxs)(t.p,{children:["As briefly mentioned in ",(0,s.jsx)(t.a,{href:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/guest-code-101#basic-guest-functionality-reading-writing-and-committing",children:"Guest Code 101"}),", we can perform I/O\nbetween the guest and host by using some methods under the ",(0,s.jsxs)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/index.html#functions",children:[(0,s.jsx)(t.code,{children:"env"}),"\nmodule"]}),".\nIn the zkVM, there is a distinction between public and private data.\nPublic data is included in the journal and is part of the proof, while private\ndata is sent between the guest and host and is not included in the journal nor\nconsists in part of the proof."]}),"\n",(0,s.jsx)(t.h2,{id:"public-and-private-data",children:"Public and Private Data"}),"\n",(0,s.jsx)(t.p,{children:"We draw a distinction between public and private data in the zkVM. Whereas\npublic data is included in the journal and becomes part of the proof, private\ndata is only accessible by the host and guest. It's important to understand this\ndistinction in order to handle data correctly and ensure that sensitive\ninformation is not publicly disclosed."}),"\n",(0,s.jsxs)(t.p,{children:["Public data comprises everything that is committed to the\n",(0,s.jsx)(t.a,{href:"https://dev.risczero.com/terminology#journal",children:"journal"})," as a result of a zkVM application's execution.\nSince this data is the ",(0,s.jsx)(t.em,{children:"output"})," of the application, public data is often also\nreferred to as ",(0,s.jsx)(t.em,{children:"public outputs"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["On the other hand, private data is everything that is not included in the proof.\nIn other words, private data is only accessible by the host and guest. This kind\nof data can be both in the form of ",(0,s.jsx)(t.em,{children:"inputs"})," from the host to the guest and\n",(0,s.jsx)(t.em,{children:"outputs"})," from the guest to the host."]}),"\n",(0,s.jsxs)(t.p,{children:["While private data is not included in the proof, it is still important to take\ninto consideration that it ",(0,s.jsx)(t.em,{children:"is"})," included in the ",(0,s.jsx)(t.a,{href:"https://dev.risczero.com/terminology#session",children:"session"}),", and therefore any\nparty that has access to it will also have access to the private data."]}),"\n",(0,s.jsx)(t.h2,{id:"file-descriptors-and-io",children:"File Descriptors and I/O"}),"\n",(0,s.jsx)(t.p,{children:"In the zkVM, private I/O happens through file descriptors. A file descriptor is\na unique identifier that represents an open file or input/output resource in a\ncomputer program. It serves as an abstract representation of a file or device,\nenabling the program to read from or write to it. To perform input and output\noperations in the zkVM, we need to specify the file descriptors to work as the\ninput and output. This allows the program to read input data from a specific\nsource and write output data to a specific destination. By specifying the file\ndescriptors, the program can establish connections with the desired input/output\nresources and perform the necessary operations."}),"\n",(0,s.jsx)(t.p,{children:"By default, the zkVM provides four file descriptors for I/O operations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdin.html",children:(0,s.jsx)(t.code,{children:"stdin"})}),": The standard input file descriptor. It is used to read input\ndata from the host to the guest."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdout.html",children:(0,s.jsx)(t.code,{children:"stdout"})}),": The standard output file descriptor. It is used to write output\ndata from the guest to the host."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stderr.html",children:(0,s.jsx)(t.code,{children:"stderr"})}),": The standard error file descriptor. It is used to write errors from the guest to the host."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.journal.html",children:(0,s.jsx)(t.code,{children:"journal"})}),": The journal file descriptor. It is used to write public\ndata."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For the ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdin.html",children:(0,s.jsx)(t.code,{children:"stdin"})}),", ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdout.html",children:(0,s.jsx)(t.code,{children:"stdout"})}),", and ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.journal.html",children:(0,s.jsx)(t.code,{children:"journal"})})," file\ndescriptors, there are some helper methods to read and write data, that we'll\ncover in the next sections."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Only data written to the ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.journal.html",children:(0,s.jsx)(t.code,{children:"journal"})})," is public. All the other file descriptors are private, and data written to them will not be part of the proof."]})}),"\n",(0,s.jsx)(t.h2,{id:"handling-inputs",children:"Handling Inputs"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdin.html",children:(0,s.jsx)(t.code,{children:"stdin"})})," file descriptor is used to send input data from the host to\nthe guest. The zkVM provides some convenience methods to read data from this\nfile descriptor."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.read.html",children:(0,s.jsx)(t.code,{children:"env::read"})}),": Reads and deserializes values from the ",(0,s.jsx)(t.code,{children:"stdin"})," file descriptor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.read_slice.html",children:(0,s.jsx)(t.code,{children:"env::read_slice"})}),": Reads a slice from the ",(0,s.jsx)(t.code,{children:"stdin"})," file\ndescriptor."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For example, in the host program, we could:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/src/main.rs"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"use risc0_zkvm::ExecutorEnv;\n\nfn main() {\n  let env = ExecutorEnv::builder()\n              // Write a single value to [stdin]\n              .write(42u64)\n              .unwrap()\n              // Write a slice to [stdin]\n              .write_slice(&[1u8, 2u8, 3u8])\n              .build();\n\n  // Do something with the ExecutorEnv...\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"And in the guest program, we could:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/methods/guest/src/main.rs"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#![no_main]\nuse risc0_zkvm::guest::env;\nrisc0_zkvm::guest::entry!(main);\n\nfn main() {\n  // Read a single value from the standard input\n  let input: u64 = env::read()?;\n\n  // Read a slice from the standard input\n  let mut buffer = [0u8; 32];\n  env::read_slice(&mut buffer)?;\n\n  // Ensure we read the expected input\n  assert_eq!(input, 42);\n  assert_eq!(buffer, [1u8, 2u8, 3u8]);\n\n  // Do something with the input data...\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"handling-private-outputs",children:"Handling Private Outputs"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdout.html",children:(0,s.jsx)(t.code,{children:"stdout"})})," file descriptor is used to send private output from the\nguest to the host. The zkVM provides some convenience methods to write data to\nthis file descriptor."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.write.html",children:(0,s.jsx)(t.code,{children:"env::write"})}),": Writes a value to the ",(0,s.jsx)(t.code,{children:"stdout"})," file descriptor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.write_slice.html",children:(0,s.jsx)(t.code,{children:"env::write_slice"})}),": Writes a slice to the ",(0,s.jsx)(t.code,{children:"stdout"})," file\ndescriptor."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Differently from the ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdin.html",children:(0,s.jsx)(t.code,{children:"stdin"})})," file descriptor, in the ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdout.html",children:(0,s.jsx)(t.code,{children:"stdout"})}),"\nwe need to provide a buffer to write the data to."]}),"\n",(0,s.jsxs)(t.p,{children:["The basic flow is that we need to instantiate a buffer in the host program, and\nthen pass it to the guest program. The guest program will write the output to\nthe ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdout.html",children:(0,s.jsx)(t.code,{children:"stdout"})})," file descriptor, and the host program will read the\noutput from the buffer."]}),"\n",(0,s.jsx)(t.p,{children:"For example, in the host program, we could:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/src/main.rs"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"use risc0_zkvm::{\n  ExecutorEnv,\n  Receipt,\n  default_prover,   // convenience method to create a default prover\n  serde::from_slice // necessary to deserialize the output\n};\nuse app_methods::EXAMPLE_ELF;\nuse app::ExampleStruct;\n\nfn main() {\n  // Step 1: Create a buffer to store the output\n  let mut output: Vec<u8> = Vec::new();\n  let env = ExecutorEnv::builder()\n              // Step 2: Instruct the guest to write to the desired buffer\n              .stdout(&mut output)\n              .build();\n  let prover = default_prover();\n  let receipt = prover.prove(env, EXAMPLE_ELF).unwrap();\n\n  // Step 3: Deserialize the output\n  let example_struct: ExampleStruct = from_slice(&output).unwrap();\n  let example_slice: [u8; 3] = from_slice(&output).unwrap();\n\n  // Do something with the output...\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"And in the guest program, we could:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/methods/guest/src/main.rs"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#![no_main]\nuse risc0_zkvm::guest::env;\nrisc0_zkvm::guest::entry!(main);\nuse app::ExampleStruct;\n\nfn main() {\n  // Write a single value to [stdout]\n  env::write(ExampleStruct {\n    field1: 42,\n    field2: "Hello, World!".to_string()\n  });\n\n  // Write a slice to [stdout]\n  env::write_slice(&[1u8, 2u8, 3u8]);\n\n  // Do more things...\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"handling-public-outputs",children:"Handling Public Outputs"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.journal.html",children:(0,s.jsx)(t.code,{children:"journal"})})," file descriptor is used to send public output. This\nwill be part of the proof and will be included in the journal. The zkVM provides\nsome convenience methods to write data to this file descriptor."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.commit.html",children:(0,s.jsx)(t.code,{children:"env::commit"})}),": Writes a value to the ",(0,s.jsx)(t.code,{children:"journal"})," file descriptor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.commit.html",children:(0,s.jsx)(t.code,{children:"env::commit_slice"})}),": Writes a slice to the ",(0,s.jsx)(t.code,{children:"journal"})," file descriptor."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Differently from the ",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.stdout.html",children:(0,s.jsx)(t.code,{children:"stdout"})})," file descriptor, in the\n",(0,s.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.journal.html",children:(0,s.jsx)(t.code,{children:"journal"})})," we just need to provide the data to be written, no buffer\nis necessary."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, in the host program, we could instantiate the ",(0,s.jsx)(t.code,{children:"ExecutorEnv"})," as usual, and then get the journal data from the receipt."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/src/main.rs"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"use risc0_zkvm::{default_prover, ExecutorEnv};\n\nfn main() {\n  let env = ExecutorEnv::default()\n  let prover = default_prover();\n  let receipt = prover.prove(env, EXAMPLE_ELF).unwrap();\n\n  // Get the journal data from the receipt\n  let journal = receipt.journal;\n\n  // Do something with the journal data...\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"And in the guest program, we would write to the journal as follows:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/methods/guest/src/main.rs"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#![no_main]\n\nuse risc0_zkvm::guest::env;\nrisc0_zkvm::guest::entry!(main);\n\nfn main() {\n  // Commit single value to the journal\n  env::commit(42u64);\n\n  // Commit a slice to the journal\n  env::commit_slice(&[1u8, 2u8, 3u8]);\n\n  // Do more things...\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(t.p,{children:["TODO: Mention the architecture of having a ",(0,s.jsx)(t.code,{children:"core"})," crate that would share data structures and functions between the host and guest, and how to handle I/O in this context."]}),"\n",(0,s.jsxs)(t.p,{children:["TODO: Give concrete examples of how to handle I/O in a zkVM application by pointing to existing example applications in ",(0,s.jsx)(t.code,{children:"risc0/examples"})]}),"\n",(0,s.jsx)(t.h2,{id:"further-examples",children:"Further examples"}),"\n",(0,s.jsxs)(t.p,{children:["For further examples on how to handle I/O in the zkVM, you can check the ",(0,s.jsx)(t.a,{href:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/examples",children:"examples page"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);