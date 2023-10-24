"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?i.createElement(k,o(o({ref:t},c),{},{components:r})):i.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={},o="Guest Code 101",s={unversionedId:"zkvm/developer-guide/guest-code-101",id:"zkvm/developer-guide/guest-code-101",title:"Guest Code 101",description:"In a [zkVM application], the [guest code] is the code that will be executed and proven by the zkVM.",source:"@site/docs/zkvm/developer-guide/guest-code-101.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/guest-code-101",permalink:"/website-preview/risc0/risc0/pr/1024/next/zkvm/developer-guide/guest-code-101",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/zkvm/developer-guide/guest-code-101.md",tags:[],version:"current",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Rust Resources",permalink:"/website-preview/risc0/risc0/pr/1024/next/zkvm/developer-guide/rust-resources"},next:{title:"Host Code 101",permalink:"/website-preview/risc0/risc0/pr/1024/next/zkvm/developer-guide/host-code-101"}},l={},p=[{value:"Basic Guest Funtionality: Reading, Writing, and Committing",id:"basic-guest-funtionality-reading-writing-and-committing",level:2},{value:"Tools for Debugging &amp; Optimization",id:"tools-for-debugging--optimization",level:2},{value:"Boilerplate before <code>main()</code>",id:"boilerplate-before-main",level:2},{value:"Happy Building!",id:"happy-building",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"guest-code-101"},"Guest Code 101"),(0,n.kt)("p",null,"In a ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/zkvm/"},"zkVM application"),", the ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#guest"},"guest code")," is the code that will be executed and proven by the zkVM."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"From Guest Code to Receipt",src:r(8318).Z,width:"1778",height:"892"})),(0,n.kt)("p",null,"This page serves as an introduction to writing RISC Zero ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#guest"},"guest code"),", to help you get started building applications for ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/bonsai/"},"Bonsai")," and the ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/zkvm/"},"zkVM"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For a guide to writing and running your first guest code, check out our ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1024/next/zkvm/quickstart"},"zkVM Quick Start"),"."),(0,n.kt)("li",{parentName:"ul"},"For a simple example, check out the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/tree/main/examples/hello-world"},"Hello World demo"),", where the ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#guest"},"guest")," receives two inputs from the ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#host"},"host")," and commits their product to the ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#journal"},"journal"),".")),(0,n.kt)("p",null,"The full functionality of the guest is documented in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest"},(0,n.kt)("inlineCode",{parentName:"a"},"guest")," module")," of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm"},(0,n.kt)("inlineCode",{parentName:"a"},"risc0-zkvm")," Rust crate"),"."),(0,n.kt)("h2",{id:"basic-guest-funtionality-reading-writing-and-committing"},"Basic Guest Funtionality: Reading, Writing, and Committing"),(0,n.kt)("p",null,"To build a zkVM application, we need our guest program to be able to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"read inputs,"),(0,n.kt)("li",{parentName:"ol"},"write private outputs to the ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#host"},"host"),", and"),(0,n.kt)("li",{parentName:"ol"},"commit public outputs to the ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#journal"},"journal"),".")),(0,n.kt)("p",null,"To support various use cases, there are a number of functions that can be called from the guest for reading/writing/committing. For a complete list, see the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest"},(0,n.kt)("inlineCode",{parentName:"a"},"guest")," module")," documentation; we include a brief list which should be sufficient for building your first application:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reading inputs")," ",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.read.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::read")),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.read_slice.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::read_slice")),", and ",(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.stdin.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::stdin")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Writing private outputs to ",(0,n.kt)("a",{parentName:"strong",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#host"},"host")),(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.write.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::write")),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.write_slice.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::write_slice")),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.stdout.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::stdout")),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.stderr.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::stderr")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Committing private outputs ",(0,n.kt)("a",{parentName:"strong",href:"/website-preview/risc0/risc0/pr/1024/next/terminology#journal"},"journal")),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"li"},"env::commit"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"env::commit_slice"))),(0,n.kt)("h2",{id:"tools-for-debugging--optimization"},"Tools for Debugging & Optimization"),(0,n.kt)("p",null,"There are also a number of functions available to support with debugging and performance analysis. As above, we refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest"},(0,n.kt)("inlineCode",{parentName:"a"},"guest")," module")," for a full list, but include some highlights here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Count Cycles")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.get_cycle_count.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::get_cycle_count")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Print a debug message"),(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/guest/env/fn.log.html"},(0,n.kt)("inlineCode",{parentName:"a"},"env::log"))))),(0,n.kt)("p",null,"For more information on optimization & performance, see our pages on ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/zkvm/developer-guide/acceleration"},"Cryptography Acceleration")," and ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/zkvm/benchmarks"},"Benchmarking"),"."),(0,n.kt)("h2",{id:"boilerplate-before-main"},"Boilerplate before ",(0,n.kt)("inlineCode",{parentName:"h2"},"main()")),(0,n.kt)("p",null,"In our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/templates/rust-starter"},"template")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples"},"examples"),", there's a bit of boilerplate code before ",(0,n.kt)("inlineCode",{parentName:"p"},"main()"),". In this section, we explain what each of those lines is doing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"#![no_std]")," ",(0,n.kt)("br",null),"\nThe guest code should be as lightweight as possible for performance reasons. So, since we aren't using ",(0,n.kt)("inlineCode",{parentName:"p"},"std"),", we exclude it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"#![no_main]")," ",(0,n.kt)("br",null),"\nThe guest code is never launched as a standalone Rust executable, so we specify ",(0,n.kt)("inlineCode",{parentName:"p"},"#![no_main]"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"risc0_zkvm_guest::entry!(main);")," ",(0,n.kt)("br",null),"\nWe must make the guest code available for the host to launch, and to do that we must specify which function to call when the host starts executing this guest code. We use the ",(0,n.kt)("inlineCode",{parentName:"p"},"risc0_zkvm_guest::entry!")," macro to indicate the initial guest function to call, which in this case is ",(0,n.kt)("inlineCode",{parentName:"p"},"main"),"."))),(0,n.kt)("h2",{id:"happy-building"},"Happy Building!"),(0,n.kt)("p",null,"Hopefully, this guide and the ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/zkvm/quickstart"},"zkVM Quick Start")," page will be sufficient for you to build your first ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1024/next/zkvm/"},"zkVM application"),"!"),(0,n.kt)("p",null,"If you run into problems, don't be a stranger!\nYou can file an issue on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/website"},"these docs")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples"},"examples"),", and we're happy to answer questions on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/risczero"},"Discord"),"."))}m.isMDXComponent=!0},8318:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"}}]);