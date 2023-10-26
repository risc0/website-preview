"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Installation",l={unversionedId:"zkvm/install",id:"zkvm/install",title:"Installation",description:"These instructions tell you how to install (or update) RISC Zero tools so you can build your own RISC Zero zkVM projects. By following these instructions, you will install the [cargo risczero] tool for creating and building RISC Zero zkVM projects, as well as the RISC Zero toolchain used to build zkVM guest programs in Rust.",source:"@site/docs/zkvm/install.md",sourceDirName:"zkvm",slug:"/zkvm/install",permalink:"/website-preview/risc0/risc0/pr/1039/next/zkvm/install",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/zkvm/install.md",tags:[],version:"current",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"zkVM Quick Start",permalink:"/website-preview/risc0/risc0/pr/1039/next/zkvm/quickstart"},next:{title:"Rust Resources",permalink:"/website-preview/risc0/risc0/pr/1039/next/zkvm/developer-guide/rust-resources"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"Update",id:"update",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"These instructions tell you how to install (or update) RISC Zero tools so you can build your own RISC Zero zkVM projects. By following these instructions, you will install the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/cargo-risczero/0.18.0/cargo_risczero/index.html"},(0,a.kt)("inlineCode",{parentName:"a"},"cargo risczero"))," tool for creating and building RISC Zero zkVM projects, as well as the RISC Zero toolchain used to build zkVM guest programs in Rust."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The RISC Zero zkVM requires Rust, so start by ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"installing Rust and ",(0,a.kt)("inlineCode",{parentName:"a"},"rustup"))," if you don't already have it. Please note that you will need to follow the recommended Rust installation instructions that use ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup")," rather than any of the alternative Rust installation options, as RISC Zero depends on the ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup")," tool specifically."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Next, install the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/cargo-risczero/0.18.0/cargo_risczero/index.html"},(0,a.kt)("inlineCode",{parentName:"a"},"cargo risczero"))," tool and use its ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/cargo-risczero/0.18.0/cargo_risczero/index.html#install"},(0,a.kt)("inlineCode",{parentName:"a"},"install")," command")," to install the toolchain by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-risczero\ncargo risczero install\n")),(0,a.kt)("p",null,"If this is successful, it will finish by printing the message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"The risc0 toolchain is now ready to use.\n")),(0,a.kt)("p",null,"You can verify the toolchain was installed correctly by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain list --verbose | grep risc0\n")),(0,a.kt)("p",null,"which should list ",(0,a.kt)("inlineCode",{parentName:"p"},"risc0")," along with its path."),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"To update your installation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo install cargo-risczero")," to update the ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo risczero")," tool, and"),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo risczero install")," to update the RISC Zero toolchain.")))}d.isMDXComponent=!0}}]);