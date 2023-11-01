"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Bonsai on Ethereum",s={unversionedId:"bonsai/bonsai-on-eth",id:"bonsai/bonsai-on-eth",title:"Bonsai on Ethereum",description:"Warning: Bonsai is still in early development. Do not use in production.",source:"@site/docs/bonsai/bonsai-on-eth.md",sourceDirName:"bonsai",slug:"/bonsai/bonsai-on-eth",permalink:"/website-preview/risc0/risc0/pr/1077/next/bonsai/bonsai-on-eth",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/bonsai/bonsai-on-eth.md",tags:[],version:"current",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Bonsai Quick Start",permalink:"/website-preview/risc0/risc0/pr/1077/next/bonsai/quickstart"},next:{title:"A Blockchain Developer's Guide to the zkVM",permalink:"/website-preview/risc0/risc0/pr/1077/next/bonsai/blockchain-zkvm-guide"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bonsai-on-ethereum"},"Bonsai on Ethereum"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Warning: Bonsai is still in early development. Do not use in production.")),(0,o.kt)("p",null,"Bonsai can be used as a ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/RiscZero/status/1677316664772132864"},"zk coprocessor")," for Ethereum, allowing you to request and receive ",(0,o.kt)("a",{parentName:"p",href:"https://risczero.com/news/on-chain-verification"},"verified proofs")," directly from your smart contract."),(0,o.kt)("p",null,"At a high level, here's how it works:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bonsai ETH Relay overview",src:r(1061).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Our Bonsai-ETH Relay acts as a middle-man between your app contract and the Bonsai proving service. In order to use the Bonsai ETH Relay, dApp developers must have completed the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deployed a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/risc0/bonsai-foundry-template/tree/main/contracts"},"smart contract")," on chain that calls the relay contract"),(0,o.kt)("li",{parentName:"ol"},"Uploaded a compiled ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/risc0/bonsai-foundry-template/tree/main/methods/guest/src/bin"},"program")," for the zkVM to the Bonsai proving service")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/risc0/bonsai-foundry-template"},"Bonsai Foundry Template")," is the best place to get started building Bonsai applications for Ethereum.\nYou may also want to check out our ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1077/next/bonsai/quickstart"},"Bonsai Quick Start")," page."))}m.isMDXComponent=!0},1061:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/eth-relay-diagram-0e77d68bed2dc3f0b161de7cf3e2908d.jpg"}}]);