"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||h[m]||n;return r?o.createElement(d,i(i({ref:t},c),{},{components:r})):o.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={slug:"/",displayed_sidebar:"GettingStartedSidebar"},i="Introduction",s={unversionedId:"introduction",id:"version-0.18/introduction",title:"Introduction",description:"Welcome to the [RISC Zero] documentation! This site contains documentation for:",source:"@site/versioned_docs/version-0.18/introduction.md",sourceDirName:".",slug:"/",permalink:"/website-preview/risc0/risc0/pr/1002/",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/introduction.md",tags:[],version:"0.18",frontMatter:{slug:"/",displayed_sidebar:"GettingStartedSidebar"},sidebar:"GettingStartedSidebar",next:{title:"Bonsai Overview",permalink:"/website-preview/risc0/risc0/pr/1002/bonsai/"}},p={},l=[{value:"What is RISC Zero?",id:"what-is-risc-zero",level:2},{value:"Bonsai",id:"bonsai",level:2},{value:"The RISC Zero zkVM",id:"the-risc-zero-zkvm",level:2},{value:"Connect with us",id:"connect-with-us",level:2}],c={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Welcome to the ",(0,a.kt)("a",{parentName:"p",href:"https://risczero.com"},"RISC Zero")," documentation! This site contains documentation for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-preview/risc0/risc0/pr/1002/bonsai/"},"Bonsai")),":\nA software development stack that allows on-chain and off-chain applications to request and receive proofs from our zkVM.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-preview/risc0/risc0/pr/1002/zkvm/"},"The RISC Zero zkVM")),":\nA high-performance tool for proving correct execution of arbitrary code.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-preview/risc0/risc0/pr/1002/proof-system/"},"The RISC Zero Proof System")),":\nThe cryptographic techniques underlying the zkVM."))),(0,a.kt)("p",null,"We also have reference documentation for our Rust code, which can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/"},"https://docs.rs/risc0-zkvm/")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"risc0-zkvm")," crate. For our other Rust crates, links to their reference docs can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0#rust-libraries"},"this list"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"what-is-risc-zero"},"What is RISC Zero?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://risczero.com"},"RISC Zero")," is a ",(0,a.kt)("a",{parentName:"p",href:"https://risczero.com/news/series-a"},"startup")," creating the infrastructure & tooling necessary for developers around the globe to build software that leverages ZK technology."),(0,a.kt)("p",null,"ZK technology is staged to re-shape the way we interact digitally.\nHistorically, the only method for confirming the correct execution of a software application was through redundant computation.\nZK introduces a new option: ",(0,a.kt)("strong",{parentName:"p"},"verifiable computation"),"."),(0,a.kt)("p",null,"It's now possible to pair a program's output with a self-certifying ",(0,a.kt)("em",{parentName:"p"},"receipt"),", allowing a skeptical third party to verify correct execution \u2014 and the verifier doesn't need to repeat the original computation or even see the inputs to the program!"),(0,a.kt)("p",null,"Verifiable computation is a game changer for the resilience and economics of operating the computing infrastructure we all rely on. It creates a number of emergent use cases which we are excited to enable.\nKey among these use cases are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/RiscZero/status/1677316664772132864"},"zk coprocessors"),", which enable on-chain applications to reduce gas costs by moving the complex part of their application logic off-chain"),(0,a.kt)("li",{parentName:"ul"},"blockchain infrastructure, including ",(0,a.kt)("a",{parentName:"li",href:"https://www.theblock.co/post/240929/optimism-zk-proof-proposals?utm_source=twitter&utm_medium=social"},"our work with Optimism"))),(0,a.kt)("p",null,"To enable ZK builders to thrive, we're working on two core products: the ",(0,a.kt)("a",{parentName:"p",href:"./zkvm/"},"zkVM")," and ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1002/bonsai/"},"Bonsai"),"."),(0,a.kt)("h2",{id:"bonsai"},"Bonsai"),(0,a.kt)("p",null,"In 2023, we released ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1002/bonsai/"},"Bonsai"),", a proving service that allows on-chain and off-chain applications to request and receive ",(0,a.kt)("a",{parentName:"p",href:"./zkvm/"},"zkVM")," proofs."),(0,a.kt)("p",null,"Bonsai is a general purpose zero-knowledge proving service that allows for any chain, any protocol, and any application to take advantage of ZK proofs. It is massively parallel, programmable, and performant."),(0,a.kt)("p",null,"Bonsai lets you integrate zero-knowledge proofs directly into any smart contracts without the need for custom circuits. This allows for ZK to be integrated directly into dApps on any EVM chain, with the potential to support any other ecosystem."),(0,a.kt)("p",null,"Our zkVM is the foundation of Bonsai and enables widespread language compatibility with support for provable Rust code and the potential for zero-knowledge provable code in any language that compiles to RISC-V like C++, Rust, Go, and more. With a combination of recursive proofs, a bespoke circuit compiler, state continuations, and continuous improvements to the proving algorithm, Bonsai enables anyone to generate highly performant ZK proofs for a variety of applications."),(0,a.kt)("p",null,"Read more on Bonsai ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1002/bonsai/"},"here"),"."),(0,a.kt)("h2",{id:"the-risc-zero-zkvm"},"The RISC Zero zkVM"),(0,a.kt)("p",null,"The RISC Zero ",(0,a.kt)("a",{parentName:"p",href:"./zkvm/"},"zkVM"),", first released in ",(0,a.kt)("a",{parentName:"p",href:"https://www.risczero.com/news/announce"},"April 2022"),", can prove the correct execution of arbitrary code, allowing developers to build ZK applications in mature languages like Rust and C++.\nThis release marked a major breakthrough in enabling ZK software development: the zkVM made it possible to build a ZK application ",(0,a.kt)("em",{parentName:"p"},"without having to build a circuit")," and ",(0,a.kt)("em",{parentName:"p"},"without writing in a custom language"),"."),(0,a.kt)("p",null,"By allowing developers to build in Rust and leverage the maturity of the Rust ecosystem, the zkVM has made it possible for developers to quickly build meaningful ZK applications, with no background in advanced mathematics or cryptography."),(0,a.kt)("p",null,"These applications include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/json"},"JSON")),": prove the contents of some entry in a JSON file, while keeping the rest of the data private"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://risczero.com/news/waldo"},"Where's Waldo")),": prove that Waldo appears in a JPG file, while keeping the rest of the image private"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/chess"},"ZK Checkmate")),": prove that you see a mate-in-one, without revealing the winning move"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://risczero.com/news/zkpoex"},"ZK Proof of Exploit")),": prove that you ",(0,a.kt)("em",{parentName:"li"},"could")," exploit an Ethereum account, without revealing the exploit"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/ecdsa"},"ECDSA signature verification")),": prove the validity of an ECDSA signature")),(0,a.kt)("p",null,"These examples are all made possible by ",(0,a.kt)("strong",{parentName:"p"},"leveraging a mature software ecosystem"),": over 70% of the ",(0,a.kt)("a",{parentName:"p",href:"https://risc0.github.io/ghpages/dev/crate-validation/index.html"},"top 1000 Rust crates")," work out-of-the-box in the zkVM.\nBeing able to import Rust crates is a game changer for the ZK software world: projects that would take months or years to build on other platforms can be solved trivially on our platform."),(0,a.kt)("p",null,"In addition to being far easier to build on, we're also delivering on ",(0,a.kt)("a",{parentName:"p",href:"https://dev.risczero.com/zkvm/benchmarks"},"performance"),".\nThe zkVM has GPU acceleration for CUDA and Metal, and with ",(0,a.kt)("a",{parentName:"p",href:"https://risczero.com/news/continuations"},"continuations")," we've enabled parallel proving of large programs."),(0,a.kt)("p",null,"Given the ease of development and the performance, the zkVM is the clear choice for your ZK needs."),(0,a.kt)("h2",{id:"connect-with-us"},"Connect with us"),(0,a.kt)("p",null,"If you want to report a bug or contribute to our code, you can do so on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0"},"GitHub"),"."),(0,a.kt)("p",null,"You're welcome to join ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/risczero"},"our Discord community")," to discuss RISC Zero, ask questions, and see how other people use RISC Zero!"),(0,a.kt)("p",null,"Follow us on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/risczero"},"Twitter")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@risczero"},"YouTube"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://fmree464va4.typeform.com/to/X3KJB85v"},"sign up for our mailing list")," to get our latest announcements."))}h.isMDXComponent=!0}}]);