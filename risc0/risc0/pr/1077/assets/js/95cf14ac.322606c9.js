"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=s,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const a={},i="Rust Resources",o={unversionedId:"zkvm/developer-guide/rust-resources",id:"version-0.18/zkvm/developer-guide/rust-resources",title:"Rust Resources",description:"[zkVM applications] are written in [Rust].",source:"@site/versioned_docs/version-0.18/zkvm/developer-guide/rust-resources.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/rust-resources",permalink:"/website-preview/risc0/risc0/pr/1077/zkvm/developer-guide/rust-resources",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/zkvm/developer-guide/rust-resources.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Installation",permalink:"/website-preview/risc0/risc0/pr/1077/zkvm/install"},next:{title:"Guest Code 101",permalink:"/website-preview/risc0/risc0/pr/1077/zkvm/developer-guide/guest-code-101"}},u={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"RISC Zero&#39;s Rust Crates",id:"risc-zeros-rust-crates",level:2},{value:"Using Rust Crates inside the zkVM",id:"using-rust-crates-inside-the-zkvm",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rust-resources"},"Rust Resources"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../"},"zkVM applications")," are written in ",(0,s.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),".\nThis page contains some resources to help you start writing Rust code for the zkVM."),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"We recommend the official materials from ",(0,s.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust Installation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/"},"Rust Book"))),(0,s.kt)("h2",{id:"risc-zeros-rust-crates"},"RISC Zero's Rust Crates"),(0,s.kt)("p",null,"For writing a basic ",(0,s.kt)("a",{parentName:"p",href:"../"},"zkVM application"),", all the functionality you'll need is contained in the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm"},(0,s.kt)("inlineCode",{parentName:"a"},"risc0-zkvm")," crate"),".\nFor more complex applications, you may also want to check out our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0#rust-libraries"},"other Rust crates"),"."),(0,s.kt)("h2",{id:"using-rust-crates-inside-the-zkvm"},"Using Rust Crates inside the zkVM"),(0,s.kt)("p",null,"A major advantage of the ",(0,s.kt)("a",{parentName:"p",href:"../"},"RISC Zero zkVM")," is that you can use Rust crates inside your ",(0,s.kt)("a",{parentName:"p",href:"../"},"zkVM applications"),".\nBeing able to easily import crates means that you can quickly build complex applications."),(0,s.kt)("p",null,"Each night, we test the top 1000 Rust crates for compatibility with the zkVM.\nAs of this writing, 71% of those tests are passing.\nYou can see the latest results in our ",(0,s.kt)("a",{parentName:"p",href:"https://risc0.github.io/ghpages/dev/crate-validation/index.html"},"Crate Validation Report"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"From Guest Code to Receipt",src:r(8318).Z,width:"1778",height:"892"})))}d.isMDXComponent=!0},8318:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"}}]);