"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o="Bonsai Quick Start",s={unversionedId:"bonsai/quickstart",id:"version-0.18/bonsai/quickstart",title:"Bonsai Quick Start",description:"_Note: The Bonsai proving service is still in early Alpha; an API key is required for access.",source:"@site/versioned_docs/version-0.18/bonsai/quickstart.md",sourceDirName:"bonsai",slug:"/bonsai/quickstart",permalink:"/website-preview/risc0/risc0/pr/1077/bonsai/quickstart",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/bonsai/quickstart.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Bonsai Overview",permalink:"/website-preview/risc0/risc0/pr/1077/bonsai/"},next:{title:"Bonsai on Ethereum",permalink:"/website-preview/risc0/risc0/pr/1077/bonsai/bonsai-on-eth"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bonsai-quick-start"},"Bonsai Quick Start"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: The Bonsai proving service is still in early Alpha; an API key is required for access.\n",(0,a.kt)("a",{parentName:"em",href:"https://bonsai.xyz/apply"},"Click here to request access"),".")),(0,a.kt)("p",null,"If you already have an API key, you can start building on Bonsai in any of the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"via ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.rs/cargo-risczero/latest/cargo_risczero/"},"cargo risczero"))," (great for experimenting or for non-blockchain applications)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enable Bonsai by setting the environment variables ",(0,a.kt)("inlineCode",{parentName:"li"},"BONSAI_API_KEY=<YOUR_API_KEY>")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"BONSAI_API_URL=<BONSAI_URL>")," when running your program"))),(0,a.kt)("li",{parentName:"ul"},"via the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/bonsai-foundry-template/blob/main/README.md"},"Bonsai Foundry Template"))," (for accessing Bonsai via Ethereum)"),(0,a.kt)("li",{parentName:"ul"},"via the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://crates.io/crates/bonsai-sdk"},"Bonsai SDK"))," (for accessing Bonsai from Rust)"),(0,a.kt)("li",{parentName:"ul"},"via the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://api.bonsai.xyz/swagger-ui/"},"Bonsai REST API"))," (for building your own client or accessing Bonsai directly)")),(0,a.kt)("p",null,"If you don't have an API key, you can ",(0,a.kt)("a",{parentName:"p",href:"https://bonsai.xyz/apply"},"request access"),".\nWhile you wait, you can make use of the local proving option on the Bonsai Foundry Template, or you can focus on developing for the ",(0,a.kt)("a",{parentName:"p",href:"../zkvm"},"zkVM"),"."))}m.isMDXComponent=!0}}]);