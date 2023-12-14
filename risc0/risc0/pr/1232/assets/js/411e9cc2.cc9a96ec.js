"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7190],{2384:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=i(5893),r=i(1151);const s={},o="What is dev-mode, and how can you use it safely?",d={id:"zkvm/dev-mode",title:"What is dev-mode, and how can you use it safely?",description:"We support a development-only mode for standalone risc0 projects in which code is executed but not proven. This adds efficiency to the development cycle during development stages where proving correct execution is not yet critical.",source:"@site/api_versioned_docs/version-0.19/zkvm/dev-mode.md",sourceDirName:"zkvm",slug:"/zkvm/dev-mode",permalink:"/website-preview/risc0/risc0/pr/1232/api/zkvm/dev-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/dev-mode.md",tags:[],version:"0.19",frontMatter:{},sidebar:"docs",previous:{title:"zkVM Quick Start",permalink:"/website-preview/risc0/risc0/pr/1232/api/zkvm/quickstart"},next:{title:"Installation",permalink:"/website-preview/risc0/risc0/pr/1232/api/zkvm/install"}},c={},a=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"what-is-dev-mode-and-how-can-you-use-it-safely",children:"What is dev-mode, and how can you use it safely?"}),"\n",(0,n.jsx)(t.p,{children:"We support a development-only mode for standalone risc0 projects in which code is executed but not proven. This adds efficiency to the development cycle during development stages where proving correct execution is not yet critical."}),"\n",(0,n.jsxs)(t.p,{children:["A risc0 project, when run in dev-mode by setting the ",(0,n.jsx)(t.code,{children:"RISC0_DEV_MODE"})," environment variable, supports (",(0,n.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/0.19/risc0_zkvm/enum.InnerReceipt.html#variant.Fake",children:"fake"}),") receipt creation and pass-through 'verification' function, so that dev-mode may be switched on and off at runtime without impacting project workflows.\nIn particular, receipts generated in dev-mode still include public outputs written to the ",(0,n.jsx)(t.a,{href:"/terminology#journal",children:"journal"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"However, because the proving process is bypassed, receipts generated when dev-mode is enabled will fail a standard receipt verification check. Only when the verifier is also run with dev-mode enabled will it perform pass-through 'verification' of the fake receipt."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["To keep this mode out of production environments, we recommend building production-ready projects with the ",(0,n.jsx)(t.code,{children:"disable-dev-mode"})," ",(0,n.jsx)(t.a,{href:"https://github.com/risc0/risc0/#feature-flags",children:"feature flag"}),"; it is absent by default."]})}),"\n",(0,n.jsxs)(t.p,{children:["Only projects built without this flag may run dev-mode. Enabling dev-mode requires also that the environment variable ",(0,n.jsx)(t.code,{children:"RISC0_DEV_MODE"})," be set."]}),"\n",(0,n.jsxs)(t.p,{children:["As additional protection, if the dev-mode environment variable is present alongside a project built with the ",(0,n.jsx)(t.code,{children:"disable-dev-mode"})," feature flag, the project will panic."]}),"\n",(0,n.jsx)(t.p,{children:"For further reference, take a look at the table below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.code,{children:"disable-dev-mode"})," off"]}),(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.code,{children:"disable-dev-mode"})," on"]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"RISC0_DEV_MODE=true"})}),(0,n.jsx)(t.td,{children:"dev-mode activated"}),(0,n.jsx)(t.td,{children:"Prover panic"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"RISC0_DEV_MODE=false"})," or unset"]}),(0,n.jsx)(t.td,{children:"Default project behavior"}),(0,n.jsx)(t.td,{children:"Default project behavior"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>o});var n=i(7294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);