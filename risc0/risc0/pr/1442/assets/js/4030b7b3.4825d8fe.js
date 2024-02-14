"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8882],{7013:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(5893),t=i(1151);const r={},o="Contributor's Guide",c={id:"contributors-guide",title:"Contributor's Guide",description:"This page describes guidelines for community contributions to this website; you may also be interested in contributing to the main project codebase.",source:"@site/docs/contributors-guide.md",sourceDirName:".",slug:"/contributors-guide",permalink:"/website-preview/risc0/risc0/pr/1442/contributors-guide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"About Reed Solomon Codes",permalink:"/website-preview/risc0/risc0/pr/1442/reference-docs/about-rs-codes"}},a={},d=[{value:"How To Contribute",id:"how-to-contribute",level:2},{value:"Style Guidelines",id:"style-guidelines",level:2},{value:"Terminology Conventions",id:"terminology-conventions",level:2},{value:"Navbar and Sidebars",id:"navbar-and-sidebars",level:2},{value:"Reference Docs",id:"reference-docs",level:3},{value:"Explainer Docs",id:"explainer-docs",level:3},{value:"Thank you!",id:"thank-you",level:2},{value:"Questions?",id:"questions",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"contributors-guide",children:"Contributor's Guide"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["This page describes guidelines for community contributions to this ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/main/website",children:"website"}),"; you may also be interested in contributing to the ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0",children:"main project codebase"}),"."]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"RISC Zero welcomes community participation!"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make suggestions or report bugs via ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0/issues",children:"GitHub issues"})]}),"\n",(0,s.jsxs)(n.li,{children:["Contribute website content or give feedback on ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0/pulls",children:"open pull requests"})]}),"\n",(0,s.jsxs)(n.li,{children:["Contribute to the ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0",children:"main zkVM project"})]}),"\n",(0,s.jsxs)(n.li,{children:["Contribute to our tutorials and how-to guides for our ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/main/templates",children:"templates"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/v0.18.0/examples",children:"Rust examples"})]}),"\n",(0,s.jsxs)(n.li,{children:["Ask questions on ",(0,s.jsx)(n.a,{href:"https://discord.gg/risczero",children:"Discord"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-contribute",children:"How To Contribute"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["All changes to this website are managed through GitHub pull requests, so you'll need a ",(0,s.jsx)(n.a,{href:"https://github.com",children:"GitHub Account"})," to contribute."]}),"\n",(0,s.jsxs)(n.li,{children:["You can suggest an edit directly via the ",(0,s.jsx)(n.code,{children:"Edit this Page"})," button at the bottom of each page."]}),"\n",(0,s.jsxs)(n.li,{children:["To create a new page, you can use the ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/main/website",children:"GitHub browser interface"}),"; the content is in ",(0,s.jsx)(n.code,{children:"src/pages"})," and ",(0,s.jsx)(n.code,{children:"docs"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Please read about ",(0,s.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1442/contributors-guide#navbar-and-sidebars",children:"the navbar and sidebars"})," and ",(0,s.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1442/contributors-guide#categories-of-documentation",children:"categories of documentation"})," before creating a new page."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["If you want to clone the repository and work locally, you may want to check out the ",(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/installation",children:"Docusaurus documentation"}),".\nWe like to use ",(0,s.jsx)(n.code,{children:"yarn start"})," to run a local build, especially when we're working with changes that involve links or sidebars."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"style-guidelines",children:"Style Guidelines"}),"\n",(0,s.jsx)(n.p,{children:"Our objective in organizing and creating website content is that anyone who finds their way to any RISC Zero content is able to rapidly find their way to the material suits their needs."}),"\n",(0,s.jsx)(n.p,{children:"In order to achieve this objective, we rely on:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Clear Purpose"}),": We aim for single-purpose docs, and we head each document with a succinct statement of purpose and pointers to related content.\nWe use roadmaps, signposting, headings, and text formatting to guide the reader's attention toward the purpose of the doc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Keep it Simple"}),": We write short sentences with minimal superfluous language.\nWe keep content digestible by splitting long docs into smaller chunks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Progressive Disclosure"}),": Our landing pages are simple and clear.\nBoth at the level of site-organization and individual doc-organization, we present a bird's eye view first with opt-in paths toward higher levels of detail and technicality."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Lots of Pointers"}),": We keep materials succinct through extensive use of pointers on modular, single-purpose components."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Consistent and Accessible Terminology"}),": We are diligent about using our official terminology as defined and using precise language as much as possible.\nAt the same time, we minimize our use of technical jargon, taking care to provide reference pages to pre-requisite knowledge as appropriate."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"terminology-conventions",children:"Terminology Conventions"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1442/terminology",children:(0,s.jsx)(n.code,{children:"RISC Zero Official Terminology"})})}),"\n",(0,s.jsxs)(n.p,{children:["Our terminology and naming conventions are subject to ongoing evaluation, and we encourage conversation and questions on these topics.\nPlease let us know via a ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0/issues",children:(0,s.jsx)(n.code,{children:"GitHub issue"})})," when you encounter terms that don't seem quite right."]}),"\n",(0,s.jsx)(n.h2,{id:"navbar-and-sidebars",children:"Navbar and Sidebars"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The navbar is defined in ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"}),". Any changes require manual configuration.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/api/docusaurus-config",children:"How to edit the navbar"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The sidebars are defined in ",(0,s.jsx)(n.code,{children:"sidebars.js"}),". Any new docs require manual configuration.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/sidebar",children:"How to edit the sidebar"})}),"\n",(0,s.jsxs)(n.li,{children:["The default configuration (and our current configuration) is that ",(0,s.jsx)(n.code,{children:"pages"})," do not have sidebars and ",(0,s.jsx)(n.code,{children:"docs"})," do."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reference-docs",children:"Reference Docs"}),"\n",(0,s.jsxs)(n.p,{children:["We typically organize reference docs according to the following sections; we use ",(0,s.jsx)(n.code,{children:"About NTTs"})," as a template."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Topic"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Topic is used to [concise explanation of relevance to RISC Zero]"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Documentation"}),"\n",(0,s.jsx)(n.li,{children:"Basic Function"}),"\n",(0,s.jsx)(n.li,{children:"Content 1"}),"\n",(0,s.jsx)(n.li,{children:"Content 2"}),"\n",(0,s.jsx)(n.li,{children:"Content 3"}),"\n",(0,s.jsx)(n.li,{children:"Suggested Reading"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Changes to this organization can be proposed for discussion via a ",(0,s.jsx)(n.a,{href:"https://github.com/risc0/risc0/issues",children:"GitHub issue"})," or proposed for action via a PR on this page."]})}),"\n",(0,s.jsx)(n.h3,{id:"explainer-docs",children:"Explainer Docs"}),"\n",(0,s.jsxs)(n.p,{children:["Our explainer docs are currently split into ",(0,s.jsx)(n.code,{children:"zkVM Explainers"})," and ",(0,s.jsx)(n.code,{children:"ZKP Explainers"}),".\nExplainers contain clearly articulated goals in the header, as well as pointers to related content."]}),"\n",(0,s.jsx)(n.h2,{id:"thank-you",children:"Thank you!"}),"\n",(0,s.jsx)(n.p,{children:"We're excited about the engagement we've seen so far, and we're looking forward to building a vibrant community together."}),"\n",(0,s.jsx)(n.h2,{id:"questions",children:"Questions?"}),"\n",(0,s.jsxs)(n.p,{children:["Find us on ",(0,s.jsx)(n.a,{href:"https://discord.gg/risczero",children:"Discord"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);