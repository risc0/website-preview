"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={slug:"./"},i="Bonsai Overview",s={unversionedId:"bonsai/bonsai-overview",id:"bonsai/bonsai-overview",title:"Bonsai Overview",description:"Bonsai enables boundless computation on any blockchain.",source:"@site/docs/bonsai/bonsai-overview.md",sourceDirName:"bonsai",slug:"/bonsai/",permalink:"/website-preview/risc0/risc0/pr/1002/next/bonsai/",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/bonsai/bonsai-overview.md",tags:[],version:"current",frontMatter:{slug:"./"},sidebar:"GettingStartedSidebar",previous:{title:"Introduction",permalink:"/website-preview/risc0/risc0/pr/1002/next/"},next:{title:"Bonsai Quick Start",permalink:"/website-preview/risc0/risc0/pr/1002/next/bonsai/quickstart"}},l={},c=[{value:"How do I interact with Bonsai directly?",id:"how-do-i-interact-with-bonsai-directly",level:2},{value:"How do I interact with Bonsai from Ethereum?",id:"how-do-i-interact-with-bonsai-from-ethereum",level:2},{value:"How do I interact with Bonsai from other chains?",id:"how-do-i-interact-with-bonsai-from-other-chains",level:2},{value:"Bonsai Building Blocks",id:"bonsai-building-blocks",level:2},{value:"1. The RISC Zero zkVM: the proof engine behind Bonsai",id:"1-the-risc-zero-zkvm-the-proof-engine-behind-bonsai",level:3},{value:"2. The Bonsai proving service, powered by the zkVM",id:"2-the-bonsai-proving-service-powered-by-the-zkvm",level:3},{value:"3. Bonsai ETH Relay: Connecting off-chain proofs and on-chain applications",id:"3-bonsai-eth-relay-connecting-off-chain-proofs-and-on-chain-applications",level:3},{value:"Where we&#39;re headed",id:"where-were-headed",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bonsai-overview"},"Bonsai Overview"),(0,a.kt)("p",null,"Bonsai enables boundless computation on any blockchain.\nWith Bonsai, instead of generating proofs on your own hardware, you can upload the program you need proven and request that Bonsai generates proofs for you as needed."),(0,a.kt)("p",null,"Bonsai is highly parallelized and highly performant. To get a taste of what you can do with Bonsai, check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/main/bonsai/examples/governance#readme"},"Governance Showcase"),", the ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/RiscZero/status/1673692915401629698"},"Bonfire Wallet")," demo from the Hash Cloak team, and our twitter thread about using ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/RiscZero/status/1677316664772132864"},"Bonsai as a zk coprocessor"),"."),(0,a.kt)("p",null,"Whether you're looking to take heavy computations off-chain or need to generate proofs for your trustless, verifiable software, Bonsai can help.\nCheck out our ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1002/next/bonsai/quickstart"},"Bonsai Quick Start")," page, and start building!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please note that Bonsai is still in early development. ",(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"strong",href:"https://bonsai.xyz/apply"},"Request access here"),", and do not use Bonsai in production.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bonsai ETH Relay overview",src:n(1061).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"The diagram above shows how to use Bonsai via an Ethereum smart contract.\nIn this diagram, all you are responsible for as a developer using Bonsai are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The smart contract invoking Bonsai"),(0,a.kt)("li",{parentName:"ul"},"The smart contract handling Bonsai's results via callback"),(0,a.kt)("li",{parentName:"ul"},"The program you want Bonsai to prove")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that aside from the architecture shown above, there are various ways to interact with Bonsai, outlined on the ",(0,a.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1002/next/bonsai/quickstart"},"Bonsai Quick Start")," page. This includes the option to use Bonsai outside of blockchain applications altogether.")),(0,a.kt)("h2",{id:"how-do-i-interact-with-bonsai-directly"},"How do I interact with Bonsai directly?"),(0,a.kt)("p",null,"If you build a project with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/cargo-risczero/latest/cargo_risczero/"},(0,a.kt)("inlineCode",{parentName:"a"},"cargo risczero"))," tool, you can set environment variables to enable remote proving using Bonsai. Namely, when running your project, set ",(0,a.kt)("inlineCode",{parentName:"p"},"BONSAI_API_KEY=<YOUR_API_KEY>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BONSAI_API_URL=<BONSAI_URL>"),"."),(0,a.kt)("p",null,"Alternatively, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/bonsai-sdk"},"Bonsai SDK")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://api.bonsai.xyz/swagger-ui/"},"Bonsai REST API"),"."),(0,a.kt)("h2",{id:"how-do-i-interact-with-bonsai-from-ethereum"},"How do I interact with Bonsai from Ethereum?"),(0,a.kt)("p",null,"The architecture pictured above shows how to call Bonsai via an Ethereum smart contract. This architecture involves three core components, the zkVM, the proving service, and the ETH relay."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You'll call the ETH relay via a smart contract."),(0,a.kt)("li",{parentName:"ol"},"The ETH relay will send a proof request to the proving service."),(0,a.kt)("li",{parentName:"ol"},"The proving service will use the zkVM to generate a proof, and send the proof back via the ETH Relay.")),(0,a.kt)("p",null,"These three components are described in more detail below."),(0,a.kt)("h2",{id:"how-do-i-interact-with-bonsai-from-other-chains"},"How do I interact with Bonsai from other chains?"),(0,a.kt)("p",null,"Stay tuned!"),(0,a.kt)("h2",{id:"bonsai-building-blocks"},"Bonsai Building Blocks"),(0,a.kt)("h3",{id:"1-the-risc-zero-zkvm-the-proof-engine-behind-bonsai"},"1. The RISC Zero zkVM: the proof engine behind Bonsai"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Status: ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/risc0/risc0"},"Available and open source"))),(0,a.kt)("p",null,"Under the hood, Bonsai uses the RISC Zero zkVM to prove your programs. With the zkVM, you have access to recursive proofs, a general-purpose circuit (with a bespoke circuit compiler), state continuations, and continuous improvements to the proving algorithm."),(0,a.kt)("h3",{id:"2-the-bonsai-proving-service-powered-by-the-zkvm"},"2. The Bonsai proving service, powered by the zkVM"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Status: Pre-Alpha")),(0,a.kt)("p",null,"The Bonsai proving service can be used standalone or directly integrated with smart contracts and blockchains. If you're interested in Bonsai, learn more in our ",(0,a.kt)("a",{parentName:"p",href:"/litepaper"},"litepaper")," and ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/nVAs2i-_Iyo?t=3044"},"talks"),"."),(0,a.kt)("h3",{id:"3-bonsai-eth-relay-connecting-off-chain-proofs-and-on-chain-applications"},"3. Bonsai ETH Relay: Connecting off-chain proofs and on-chain applications"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Status: Pre-Alpha, ",(0,a.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1002/next/bonsai/bonsai-on-eth"},"documentation")," and ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/risc0/bonsai-foundry-template"},"Bonsai Foundry template")," available")),(0,a.kt)("p",null,"The Bonsai ETH Relay connects your Ethereum dApps to Bonsai. Smart contract developers can call our proving service through an on-chain relay contract connected to the Bonsai proving service. If you'd prefer to engage with Bonsai proving service directly, we'll be rolling out the means to do so in the near future."),(0,a.kt)("h2",{id:"where-were-headed"},"Where we're headed"),(0,a.kt)("p",null,"We're building technology that allows anyone to generate highly performant zero-knowledge proofs for a variety of applications. We want to make zero-knowledge proof integration into Ethereum, L1 blockchains, Cosmos app chains, L2 rollups, and dApps possible with minimal development effort. To learn more, read our ",(0,a.kt)("a",{parentName:"p",href:"/litepaper"},"litepaper"),"."))}u.isMDXComponent=!0},1061:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eth-relay-diagram-0e77d68bed2dc3f0b161de7cf3e2908d.jpg"}}]);