"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7021],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(i),p=r,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||o;return i?a.createElement(m,n(n({ref:t},u),{},{components:i})):a.createElement(m,n({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,n[1]=s;for(var l=2;l<o;l++)n[l]=i[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},3362:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=i(7462),r=(i(7294),i(3905));const o={id:"tech_faq",displayed_sidebar:"GettingStartedSidebar"},n="FAQ",s={unversionedId:"tech_faq",id:"version-0.18/tech_faq",title:"FAQ",description:"---",source:"@site/versioned_docs/version-0.18/faq.md",sourceDirName:".",slug:"/tech_faq",permalink:"/website-preview/risc0/risc0/pr/1078/tech_faq",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/faq.md",tags:[],version:"0.18",frontMatter:{id:"tech_faq",displayed_sidebar:"GettingStartedSidebar"},sidebar:"GettingStartedSidebar"},c={},l=[{value:"Contents",id:"contents",level:2},{value:"ZK Basics",id:"zk-basics",level:2},{value:"Building on the zkVM",id:"building-on-the-zkvm",level:2},{value:"Code Troubleshooting",id:"code-troubleshooting",level:3},{value:"zkVM Application Design",id:"zkvm-application-design",level:3},{value:"Features, Performance, and Limitations",id:"features-performance-and-limitations",level:3},{value:"The RISC Zero Circuits",id:"the-risc-zero-circuits",level:2},{value:"Security",id:"security",level:2}],u={toc:l},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#faq"},"FAQ"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#contents"},"Contents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#zk-basics"},"ZK Basics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-on-the-zkvm"},"Building on the zkVM"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#code-troubleshooting"},"Code Troubleshooting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#zkvm-application-design"},"zkVM Application Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#features-performance-and-limitations"},"Features, Performance, and Limitations")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#the-risc-zero-circuits"},"The RISC Zero Circuits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#security"},"Security"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"zk-basics"},"ZK Basics"),(0,r.kt)("a",{class:"anchor",id:"zkp"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: What is a zero-knowledge proof?"),"A zero-knowledge proof (or ZKP) is ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Zero-knowledge_proof"},'"a method by which one party (the prover) can prove to another party (the verifier) that a given statement is true [without] conveying any additional information"'),". RISC Zero's zkVM makes it easy to produce ZKPs to prove the correct execution of arbitrary code. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"When Alice executes code inside the zkVM, Alice gets back a ",(0,r.kt)("a",{href:"https://dev.risczero.com/terminology#receipt"},"receipt"),". Alice can pass the receipt to Bob, who can then ",(0,r.kt)("a",{href:"https://dev.risczero.com/terminology#verify"},"verify")," the receipt.",(0,r.kt)("br",null),(0,r.kt)("br",null),"By verifying the receipt, Bob can confirm that the expected code executed and produced the asserted results. Any inputs Alice passes to the program during execution will be private unless Alice chooses to share them."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"building-on-the-zkvm"},"Building on the zkVM"),(0,r.kt)("h3",{id:"code-troubleshooting"},"Code Troubleshooting"),(0,r.kt)("a",{class:"anchor",id:"build-errors"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: I'm running into build errors. Where should I look for help?"),"A: Some known issues and workarounds are tracked on GitHub under the ",(0,r.kt)("a",{href:"https://github.com/risc0/risc0/issues?q=is%3Aissue+is%3Aopen+label%3A%22rust+guest+workarounds%22"},'"rust guest workarounds"')," tag. If you can't find your problem here you can open a ",(0,r.kt)("a",{href:"https://github.com/risc0/risc0/issues"},"new issue")," or reach out to us on ",(0,r.kt)("a",{href:"https://discord.gg/risczero"},"Discord"),"."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"zkvm-application-design"},"zkVM Application Design"),(0,r.kt)("a",{class:"anchor",id:"using-receipts"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: What do I do with the receipt once I\u2019ve created it?"),"A: After Alice creates a ",(0,r.kt)("a",{href:"https://dev.risczero.com/terminology#receipt"},"receipt"),", she'll typically pass it to Bob who will want to ",(0,r.kt)("a",{href:"https://dev.risczero.com/terminology#verify"},"verify")," its authenticity. At a minimum, Bob will need access to the ",(0,r.kt)("a",{href:"https://dev.risczero.com/terminology#image-id"},"ImageID")," of the expected program. For most cases, Bob will want to know what code was run, and will therefore also want the ",(0,r.kt)("a",{href:"https://dev.risczero.com/terminology#elf-binary"},"ELF file")," or the source code that generated it. Bob can verify the receipt was created by this code by constructing the ",(0,r.kt)("a",{href:"https://dev.risczero.com/terminology#image-id"},"ImageID")," from the given ELF file and using it for verification. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"In our ",(0,r.kt)("a",{href:"https://github.com/risc0/risc0/tree/v0.18.0/examples"},"examples"),", the receipt is generated and verified within the same program, but typically the receipt will be passed to a third party for verification."),(0,r.kt)("a",{class:"anchor",id:"io-buffer-overflows"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q:  When can information be shared with the guest zkVM? How do you prevent buffer overflows?"),"A: Data can be sent during program execution from the host to the guest via a memory map. The host-writeable memory is write-once, meaning that adjacent memory regions cannot be overwritten and executed."),(0,r.kt)("a",{class:"anchor",id:"what-should-guest-do"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: How do I know which computations should be performed in the guest zkVM, and which can be offloaded to the host?"),"A: If you don't need to perform a computation securely, if others don't rely on it, and if it doesn't produce outputs that others rely on, it can probably be performed outside of the zkVM. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"However, consider that code run in the RISC Zero zkVM can be shown to behave as expected even on a host that is entirely untrusted. To get the most value out of this guarantee, we recommend dividing the computational labor with an untrusted host in mind. That is, other parties should not need to trust the host's output or operations in order to benefit from the work done in the zkVM."),(0,r.kt)("details",{closed:!0},(0,r.kt)("a",{class:"anchor",id:"image-id"}),(0,r.kt)("summary",null,"Q: What exactly is the ImageID of a zkVM application?"),"A: The ImageID is a unique identifier given to a zkVM application. It cryptographically relates the application binary (ELF) to its produced receipts. This bound is a critical security property that ensures applications run unaltered.",(0,r.kt)("p",null,"Specifically, the ImageID is a Merklization of the initial zkVM memory state, or MemoryImage, produced when the zkVM loads the application binary. The memory state is hashed to produce a single deterministic value via a pure function resembling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"ignore",ignore:!0},"fn compute_image_id(used_elf_pages, page_size, page_table_addr, pc) -> ImageID\n")),(0,r.kt)("p",null,"Note: Only the loaded parts of the application binary, ",(0,r.kt)("inlineCode",{parentName:"p"},"used_elf_pages,")," are utilized to calculate the ImageID. Consequently, the hashing does not include elements of a compiled binary that do not affect program meaning, e.g., debug information and timestamps."),(0,r.kt)("p",null,"As a consequence, ",(0,r.kt)("em",{parentName:"p"},"functionally equivilant")," binaries, from the zkVM perspective, will result in identical ImageIDs. However, the compiled binaries (ELFs) may be bitwise different if hashed directly from disk. ",(0,r.kt)("em",{parentName:"p"},"This does not affect the zkVM security model."))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"features-performance-and-limitations"},"Features, Performance, and Limitations"),(0,r.kt)("a",{class:"anchor",id:"benchmarks"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: Are performance benchmarks available?"),"A: Yes. We have a ",(0,r.kt)("a",{href:"https://dev.risczero.com/datasheet.pdf"},"datasheet")," with performance benchmarks, and you can also generate your own benchmarks. More details are available on the ",(0,r.kt)("a",{href:"https://dev.risczero.com/zkvm/benchmarks"},"benchmarks page"),"."),(0,r.kt)("a",{class:"anchor",id:"language-support"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: What languages can I use to develop zkVM applications?"),"A: We recommend Rust for writing zkVM applications. Although technically the zkVM can execute any RISC-V code, we only have documentation and API support for Rust development. Development in C++ is also possible, but proceed at your own risk. You can reference the ",(0,r.kt)("a",{href:"https://github.com/risc0/risc0/tree/v0.11.0/examples/cpp"},"examples in C++")," that were included in the 0.11 release, although we've made substantial changes since that release, and we're available to answer questions on ",(0,r.kt)("a",{href:"https://discord.gg/risczero"}," Discord")," as needed."),(0,r.kt)("a",{class:"anchor",id:"max-length"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: What is the maximum execution length for a program running on the zkVM?"),"A: Since we added support for ",(0,r.kt)("a",{href:"https://www.risczero.com/news/continuations"}," continuations"),", the execution length can be very large. So far, we've made proofs for executions that exceed 4 billion cycles, and there's plenty of room to expand that further."),(0,r.kt)("a",{class:"anchor",id:"rust-crate"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: I have a specific Rust crate I'd like to use. Will it work inside the zkVM?"),"A: Each night, we check the top 1000 Rust crates for zkVM compatibility. You can see the results ",(0,r.kt)("a",{href:"https://risc0.github.io/ghpages/dev/crate-validation/index.html"}," here"),". As of this writing, 71% of the top 1000 Rust crates work inside the zkVM. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If the crate you'd like to use isn't working, there may be a workaround ",(0,r.kt)("a",{href:"https://github.com/risc0/risc0/issues?q=is%3Aissue+is%3Aopen+label%3A%22rust+guest+workarounds%22"},"here"),". If there's not already a workaround, please ",(0,r.kt)("a",{href:"https://github.com/risc0/risc0/issues/new"},"open an issue")," or reach out on ",(0,r.kt)("a",{href:"https://discord.gg/risczero"},"Discord.")),(0,r.kt)("a",{class:"anchor",id:"large-data"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: If I want the guest to process large volumes of data during execution, I might be constrained by space limitations. What are my options?"),"A: If data is loaded from the host to restrict guest program size, the most significant limitation on zkVM data processing is a constraint on instruction cycles. Loading data into the guest costs instruction cycles, as does data processing.",(0,r.kt)("p",null,"There are workarounds for data limitations if the data is only included to ensure that its integrity becomes part of the proof of computation.\nIf the data can be processed externally and simply needs to be verifiably unchanged, consider processing data externally and sending the guest a Merkle proof or (if no processing is needed) generating a SHA of a large dataset."),(0,r.kt)("p",null,"In the future, we plan to lift these processing limitations using continuations and recursion.")),(0,r.kt)("a",{class:"anchor",id:"acceleration"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: I\u2019d like to speed up the processing done inside the zkVM. What are my options?"),"A: For cryptographic operations, it is possible to build \u2018accelerator\u2019 circuits such as our implementation of SHA26. Fast cryptography is sufficient to support many \u2018DeFi\u2019 applications. For many other applications, it is possible to perform most computation on the host (outside the zkVM) and then verify the results in the zkVM."),(0,r.kt)("h2",{id:"the-risc-zero-circuits"},"The RISC Zero Circuits"),(0,r.kt)("a",{class:"anchor",id:"dont-write-circuits"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: Do I need to write a ZK circuit to build on RISC Zero?"),"A: No! We take care of the circuit building so that you can focus on building applications. Everything you'll need to build is outlined in the ",(0,r.kt)("a",{href:"https://dev.risczero.com/zkvm"},"zkVM docs")," and the ",(0,r.kt)("a",{href:"https://dev.risczero.com/bonsai"},"Bonsai docs"),"."),(0,r.kt)("a",{class:"anchor",id:"circuits"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: What do RISC Zero's circuits do?"),"RISC Zero has three circuits: one that executes RISC-V code, one that's used for recursion, and one that is used for a STARK-to-SNARK conversion.",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The RISC-V circuit receives an ELF binary file as a public input and private inputs from the host; the output of the RISC-V circuit is a receipt."),(0,r.kt)("li",{parentName:"ul"},"The recursion circuit is specialized to prove the verification of RISC Zero receipts; this circuit is used in order to compress many RISC Zero receipts into a single receipt."),(0,r.kt)("li",{parentName:"ul"},"The STARK-to-SNARK circuit is used to translate a STARK proof into a SNARK proof, which enables on-chain verification."))),(0,r.kt)("a",{class:"anchor",id:"building-our-circuit"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: How did you make your RISC-V circuit?"),"A: The RISC-V circuit is found in step.cpp.inc and is generated by the make-circuit program. It consists of:",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code to emulate RISC-V, including decoding RISC-V instructions and constructing the execution trace."),(0,r.kt)("li",{parentName:"ul"},"Code to evaluate the constraint polynomials that check the execution trace."),(0,r.kt)("li",{parentName:"ul"},"Auxiliary data to support structures such as \u2018taps\u2019.")),(0,r.kt)("p",null,"Because the data structures supporting all three of these need to match very carefully, we created a \u2018circuit compiler\u2019 program that generates code for all three of these systems.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("a",{class:"anchor",id:"image-id-security"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: How can we use the ImageID to determine if an application is altered before execution?"),"A: The ImageID is determined from an application's compiled binary (ELF),  explained in detail ",(0,r.kt)("a",{href:"https://dev.risczero.com/tech_faq#image-id"},"above."),(0,r.kt)("p",null,"Someone wishing to confirm that a receipt corresponds to specific Rust source code can locally reproduce a binary targeting the RISC Zero zkVM using our reproducible build tool and verify that the resulting ImageID matches the ImageID in the receipt."),(0,r.kt)("p",null,"For example, building our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/main/risc0/zkvm/methods/guest"},"builtin zkVM test functions"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo risczero build --manifest-path risc0/zkvm/methods/guest/Cargo.toml\n")),(0,r.kt)("p",null,"will produce similar output to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ELFs ready at:\nImageID: 417778745b43c82a20db33a55c2b1d6e0805e0fa7eec80c9654e7321121e97af - "target/riscv-guest/riscv32im-risc0-zkvm-elf/docker/risc0_zkvm_methods_guest/multi_test"\nImageID: c7c399c25ecf26b79e987ed060efce1f0836a594ad1059b138b6ed2f123dad38 - "target/riscv-guest/riscv32im-risc0-zkvm-elf/docker/risc0_zkvm_methods_guest/hello_commit"\nImageID: a51a4b747f18b7e5f36a016bdd6f885e8293dbfca2759d6667a6df8edd5f2489 - "target/riscv-guest/riscv32im-risc0-zkvm-elf/docker/risc0_zkvm_methods_guest/slice_io"\n')),(0,r.kt)("p",null,"These ImageIDs will stay consistent across all builds due to a containerized process working together with Cargo working norms. You can find more about our reproducible builds and how we test them in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/pull/799"},"pull request."))),(0,r.kt)("a",{class:"anchor",id:"tampering-with-code"}),(0,r.kt)("details",{closed:!0},(0,r.kt)("summary",null,"Q: If the guest zkVM lives on the host machine, can\u2019t the host still tamper with the application?"),"A: Like other zk-STARKs, RISC Zero\u2019s implementation makes it cryptographically infeasible to generate an invalid receipt:",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the binary is modified, then the receipt\u2019s seal will not match the ImageID of the expected binary."),(0,r.kt)("li",{parentName:"ul"},"If the execution is modified, then the execution trace will be invalid."),(0,r.kt)("li",{parentName:"ul"},"If the output is modified, then the journal\u2019s hash will not match the hash recorded in the receipt."))))}h.isMDXComponent=!0}}]);