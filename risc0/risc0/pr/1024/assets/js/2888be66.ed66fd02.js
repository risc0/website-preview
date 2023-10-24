"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:3,slug:"./quickstart"},i="zkVM Quick Start",l={unversionedId:"zkvm/quickstart",id:"version-0.18/zkvm/quickstart",title:"zkVM Quick Start",description:"Welcome to the [zkVM] Quick Start page! Here are the steps between you and your first proof:",source:"@site/versioned_docs/version-0.18/zkvm/quickstart.md",sourceDirName:"zkvm",slug:"/zkvm/quickstart",permalink:"/website-preview/risc0/risc0/pr/1024/zkvm/quickstart",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/zkvm/quickstart.md",tags:[],version:"0.18",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"./quickstart"},sidebar:"GettingStartedSidebar",previous:{title:"zkVM Overview",permalink:"/website-preview/risc0/risc0/pr/1024/zkvm/"},next:{title:"Installation",permalink:"/website-preview/risc0/risc0/pr/1024/zkvm/install"}},s={},p=[{value:"1. Install the RISC Zero Toolchain",id:"1-install-the-risc-zero-toolchain",level:2},{value:"2. Initialize a New Project",id:"2-initialize-a-new-project",level:2},{value:"3. Edit the boilerplate to build your first project",id:"3-edit-the-boilerplate-to-build-your-first-project",level:2},{value:"4. Run your project, locally or remotely",id:"4-run-your-project-locally-or-remotely",level:2},{value:"Local &amp; Remote Proving",id:"local--remote-proving",level:2},{value:"Local Proving",id:"local-proving",level:3},{value:"Remote Proving",id:"remote-proving",level:3},{value:"Other options",id:"other-options",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zkvm-quick-start"},"zkVM Quick Start"),(0,a.kt)("p",null,"Welcome to the ",(0,a.kt)("a",{parentName:"p",href:"../zkvm/"},"zkVM")," Quick Start page! Here are the steps between you and your first proof:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the RISC Zero toolchain."),(0,a.kt)("li",{parentName:"ol"},"Initialize a new project using the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/cargo-risczero"},"cargo risczero")," tool."),(0,a.kt)("li",{parentName:"ol"},"Edit the boilerplate to build your first project."),(0,a.kt)("li",{parentName:"ol"},"Run your project locally or with ",(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1024/bonsai/"},"Bonsai"),".")),(0,a.kt)("h2",{id:"1-install-the-risc-zero-toolchain"},"1. Install the RISC Zero Toolchain"),(0,a.kt)("p",null,"If you have already installed Rust via ",(0,a.kt)("inlineCode",{parentName:"p"},"rustup"),", you can install our toolchain by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-risczero\ncargo risczero install\n")),(0,a.kt)("p",null,"If you need to install Rust or encounter problems, take a look at our ",(0,a.kt)("a",{parentName:"p",href:"install"},"full installation instructions"),"."),(0,a.kt)("h2",{id:"2-initialize-a-new-project"},"2. Initialize a New Project"),(0,a.kt)("p",null,"Once you've installed the toolchain, you can initialize a new project using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/main/templates/rust-starter"},"starter template")," by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo risczero new my_project\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/cargo-risczero"},"cargo risczero")," docs for other options for initialization."),(0,a.kt)("h2",{id:"3-edit-the-boilerplate-to-build-your-first-project"},"3. Edit the boilerplate to build your first project"),(0,a.kt)("p",null,"In the codebase for your new project, you'll find a handful of places marked ",(0,a.kt)("inlineCode",{parentName:"p"},"TODO"),", where you'll need to make some changes in order to build your first project."),(0,a.kt)("p",null,"Don't worry -- each ",(0,a.kt)("inlineCode",{parentName:"p"},"TODO")," comes with instructions for what you need to do, and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/main/examples/hello-world/tutorial.md"},"Hello World tutorial")," contains step-by-step instructions."),(0,a.kt)("h2",{id:"4-run-your-project-locally-or-remotely"},"4. Run your project, locally or remotely"),(0,a.kt)("p",null,"The readme for your project includes instructions for how to run it, both locally or remotely.\nYou can build your example and run the prover locally with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --release\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Congratulations!")," ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},"That's all it takes to build and run a minimal RISC Zero application."))),(0,a.kt)("h2",{id:"local--remote-proving"},"Local & Remote Proving"),(0,a.kt)("p",null,"You can build and run your zkVM applications using your own hardware, or you can upload your ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/terminology#guest-program"},"guest program")," to ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/bonsai/"},"Bonsai")," and make requests for proof generation as needed."),(0,a.kt)("h3",{id:"local-proving"},"Local Proving"),(0,a.kt)("p",null,"To run the zkVM on your own machine, we recommend at least 16GB of RAM.\nThe readme files on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/"},"zkVM demo applications")," show ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," commands for local proof generation."),(0,a.kt)("h3",{id:"remote-proving"},"Remote Proving"),(0,a.kt)("p",null,"To run the zkVM remotely using ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/bonsai/"},"Bonsai"),", ",(0,a.kt)("a",{parentName:"p",href:"https://bonsai.xyz/apply"},"request access")," and set the environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"BONSAI_API_KEY=<YOUR_API_KEY>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BONSAI_API_URL=<BONSAI_URL>"),".\nAdditional information is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/main/templates/rust-starter#running-proofs-remotely-on-bonsai"},"starter template")),(0,a.kt)("h3",{id:"other-options"},"Other options"),(0,a.kt)("p",null,"Options such as GPU acceleration and skipping the proof generation are documented in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0#feature-flags"},"feature flags"),"."))}m.isMDXComponent=!0}}]);