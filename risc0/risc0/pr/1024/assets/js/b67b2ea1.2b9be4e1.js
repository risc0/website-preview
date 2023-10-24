"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={},o="Cryptography Acceleration",c={unversionedId:"zkvm/developer-guide/acceleration",id:"version-0.18/zkvm/developer-guide/acceleration",title:"Cryptography Acceleration",description:'RISC Zero\u2019s rv32im implementation includes a number of specialized extension circuits, including two \u201caccelerators\u201d for cryptographic functions: SHA-256 and 256-bit modular multiplication, referred to as "bigint" multiplication. By implementing these operations directly in the \u201chardware\u201d of the zkVM, programs that use these accelerators execute faster and can be proven with significantly less resources .',source:"@site/versioned_docs/version-0.18/zkvm/developer-guide/acceleration.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/acceleration",permalink:"/website-preview/risc0/risc0/pr/1024/zkvm/developer-guide/acceleration",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/zkvm/developer-guide/acceleration.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Receipts 101",permalink:"/website-preview/risc0/risc0/pr/1024/zkvm/developer-guide/receipts"},next:{title:"Performance Benchmarks",permalink:"/website-preview/risc0/risc0/pr/1024/zkvm/benchmarks"}},s={},p=[{value:"Accelerated Crates",id:"accelerated-crates",level:2},{value:"Using Accelerated Crates",id:"using-accelerated-crates",level:3},{value:"Adding Accelerator Support To Crates",id:"adding-accelerator-support-to-crates",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cryptography-acceleration"},"Cryptography Acceleration"),(0,i.kt)("p",null,"RISC Zero\u2019s rv32im implementation includes a number of specialized extension circuits, including two \u201caccelerators\u201d for cryptographic functions: SHA-256 and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/pull/466"},"256-bit modular multiplication"),', referred to as "bigint" multiplication. By implementing these operations directly in the \u201chardware\u201d of the zkVM, programs that use these accelerators execute faster and can be proven with significantly less resources ',(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("h2",{id:"accelerated-crates"},"Accelerated Crates"),(0,i.kt)("p",null,'The SHA-256 and bigint accelerators are currently integrated in "accelerated" versions of popular cryptographic Rust crates.'),(0,i.kt)("p",null,"These crates include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/risc0/RustCrypto-crypto-bigint/tree/risczero"},"RustCrypto's ",(0,i.kt)("inlineCode",{parentName:"a"},"crypto-bigint")," crate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/risc0/RustCrypto-hashes/tree/risczero"},"RustCrypto's ",(0,i.kt)("inlineCode",{parentName:"a"},"sha2")," crate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/risc0/RustCrypto-elliptic-curves/tree/risczero"},"RustCrypto's ",(0,i.kt)("inlineCode",{parentName:"a"},"k256")," crate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/risc0/curve25519-dalek/tree/risczero"},"Dalek Cryptography's curve25519-dalek crate"))),(0,i.kt)("p",null,"Each of these are forks of the original source code repository, with modifications to use RISC Zero cryptography extensions."),(0,i.kt)("h3",{id:"using-accelerated-crates"},"Using Accelerated Crates"),(0,i.kt)("p",null,"When using any of the crates listed above directly, specifying the dependency as a ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories"},"git dependency"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nsha2 = { git = "https://github.com/risc0/RustCrypto-hashes", tag = "sha2-v0.10.6-risczero.0" }\n')),(0,i.kt)("p",null,"When using cryptography indirectly, e.g. via the ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oauth2"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"revm"),", crates it may be possible to enable acceleration support without code changes by applying a ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/overriding-dependencies.html#the-patch-section"},"Cargo patch system"),"."),(0,i.kt)("p",null,"An example of how to use these crates to accelerate ECDSA signature verification can be in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/ecdsa"},"ECDSA example"),". Note the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/blob/v0.18.0/examples/ecdsa/methods/guest/Cargo.toml#L13-L18"},"use of the patched versions")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"sha2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"crypto-bigint")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"k256")," crates used in the guest's ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,i.kt)("h2",{id:"adding-accelerator-support-to-crates"},"Adding Accelerator Support To Crates"),(0,i.kt)("p",null,"It's possible to add accelerator support for your own crates."),(0,i.kt)("p",null,"An example of how to do this can be found in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..k256/v0.13.1-risczero.1"},"diff of RISC Zero's k256 crate fork"),", which shows the code changes needed to accelerate RustCrypto's secp256k1 ECDSA library. This fork starts from the base implementation, and changes the core operations to use the accelerated 256-bit modular multiplication instruction. E.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..k256/v0.13.1-risczero.1#diff-ab10e01be1d99a874f90c9a6143bb1c64f37e04dcb220b5ab50b9273d99e0a0cR176-R179"},(0,i.kt)("inlineCode",{parentName:"a"},"FieldElement8x32R0::mul")),"."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"This is similar to the cryptography support such as ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AES_instruction_set#x86_architecture_processors"},"AES-NI")," or the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Intel_SHA_extensions"},"SHA extensions")," for x86 processors. In both cases, the circuitry is extended to compute otherwise expensive operations in fewer instruction cycles.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);