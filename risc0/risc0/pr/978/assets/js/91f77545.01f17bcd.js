"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1749],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||n;return r?i.createElement(d,o(o({ref:t},s),{},{components:r})):i.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<n;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var i=r(7462),a=(r(7294),r(3905));const n={},o="Receipts 101",p={unversionedId:"zkvm/developer-guide/receipts",id:"version-0.18/zkvm/developer-guide/receipts",title:"Receipts 101",description:"A brief introduction to the RISC Zero [receipt].",source:"@site/versioned_docs/version-0.18/zkvm/developer-guide/receipts.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/receipts",permalink:"/zkvm/developer-guide/receipts",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/zkvm/developer-guide/receipts.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Host Code 101",permalink:"/zkvm/developer-guide/host-code-101"},next:{title:"Cryptography Acceleration",permalink:"/zkvm/developer-guide/acceleration"}},c={},l=[{value:"What is a receipt?",id:"what-is-a-receipt",level:2},{value:"How are receipts used?",id:"how-are-receipts-used",level:2},{value:"Extracting the Journal",id:"extracting-the-journal",level:2},{value:"Verifying a Receipt",id:"verifying-a-receipt",level:2},{value:"Serializing and Deserializing Receipts",id:"serializing-and-deserializing-receipts",level:2},{value:"Happy Building!",id:"happy-building",level:2}],s={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"receipts-101"},"Receipts 101"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A brief introduction to the RISC Zero ",(0,a.kt)("a",{parentName:"em",href:"../../terminology#receipt"},"receipt"),".")),(0,a.kt)("h2",{id:"what-is-a-receipt"},"What is a receipt?"),(0,a.kt)("p",null,"A receipt gives the results of your program along with proof that they were produced honestly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"From Guest Code to Receipt",src:r(8318).Z,width:"1778",height:"892"})),(0,a.kt)("p",null,"When you execute your ",(0,a.kt)("a",{parentName:"p",href:"../"},"zkVM application"),", the output of your application is included in a ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#receipt"},"receipt"),".\nThe ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#receipt"},"receipt")," serves as a succinct ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#proof"},"validity proof")," for the ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#execution-trace"},"execution")," of your application.\nReceipts can be passed to third parties and ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#verify"},"verified")," in order to cryptographically attest to the validity of your application's output."),(0,a.kt)("p",null,"The receipt consists of a ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#journal"},"journal")," and a ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#seal"},"seal"),".\nThe journal attests to the public outputs of the program, and\nthe seal is the opaque blob that cryptographically attests to the validity of the receipt."),(0,a.kt)("h2",{id:"how-are-receipts-used"},"How are receipts used?"),(0,a.kt)("p",null,"Suppose Alice and Bob have agreed on some computation that needs to get done.\nIn particular, they've agreed on some zkVM ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#guest-program"},"guest program"),", and they each have access to the source code and the ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#image-id"},"Image ID")," for that guest program.\n(In practice, Bob may retrieve the Image ID either by constructing it himself or retrieving it from a trusted channel.)"),(0,a.kt)("p",null,"Alice runs the zkVM to generate a receipt, and then Alice sends the receipt to Bob.\nAfter receiving the receipt, Bob can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inspect the receipt to extract the ",(0,a.kt)("a",{parentName:"li",href:"../../terminology#journal"},"journal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../terminology#verify"},"verify")," the receipt to ensure that:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",{parentName:"li",href:"../../terminology#execution-trace"},"execution")," was valid, and"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",{parentName:"li",href:"../../terminology#guest-program"},"guest program")," that executed was consistent with the expected ",(0,a.kt)("a",{parentName:"li",href:"../../terminology#image-id"},"image ID"),".")))),(0,a.kt)("h2",{id:"extracting-the-journal"},"Extracting the Journal"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#journal"},"journal")," contains the public outputs of the computation.\nUsers can extract the journal from a receipt using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.16/risc0_zkvm/receipt/struct.SessionReceipt.html#structfield.journal"},"receipt.journal"),"."),(0,a.kt)("h2",{id:"verifying-a-receipt"},"Verifying a Receipt"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../terminology#verify"},"Verifying")," the receipt provides cryptographic assurance that the ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#journal"},"journal")," was created honestly using the ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#guest-program"},"guest program")," with the expected ",(0,a.kt)("a",{parentName:"p",href:"../../terminology#image-id"},"Image ID"),".\nUsers can verify the receipt using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.16/risc0_zkvm/receipt/struct.SessionReceipt.html#method.verify"},"receipt.verify()"),"."),(0,a.kt)("h2",{id:"serializing-and-deserializing-receipts"},"Serializing and Deserializing Receipts"),(0,a.kt)("p",null,"For serializing and deserializing, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/serde"},"serde")," which supports many encoding formats.\nThere isn't a one-size-fits-all solution here, but one option is:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"let bytes = bincode::serialize(&receipt);")),(0,a.kt)("h2",{id:"happy-building"},"Happy Building!"),(0,a.kt)("p",null,"Hopefully, these guides and the ",(0,a.kt)("a",{parentName:"p",href:"../quickstart"},"zkVM Quick Start")," page will be sufficient for you to build your first ",(0,a.kt)("a",{parentName:"p",href:"../"},"zkVM application"),"!"),(0,a.kt)("p",null,"If you run into problems, don't be a stranger!\nYou can file an issue on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/website"},"these docs")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/"},"examples"),", and we're happy to answer questions on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/risczero"},"Discord"),"."))}h.isMDXComponent=!0},8318:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"}}]);