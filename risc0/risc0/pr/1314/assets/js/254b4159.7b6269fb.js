"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4022],{5961:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>m});var a=i(5893),n=i(1151);const t={},c="About Arithmetic Circuits",l={id:"reference-docs/about-arithmetic-circuits",title:"About Arithmetic Circuits",description:"Arithmetic circuits consist of a collection of wires and gates, where the wires hold elements of a finite field and each gate computes either finite field addition or finite field multiplication.",source:"@site/docs/reference-docs/about-arithmetic-circuits.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-arithmetic-circuits",permalink:"/website-preview/risc0/risc0/pr/1314/reference-docs/about-arithmetic-circuits",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Proof System Sequence Diagram and Spec",permalink:"/website-preview/risc0/risc0/pr/1314/proof-system/proof-system-sequence-diagram"},next:{title:"About Finite Fields",permalink:"/website-preview/risc0/risc0/pr/1314/reference-docs/about-finite-fields"}},r={},m=[{value:"Arithmetic Circuits as Polynomials",id:"arithmetic-circuits-as-polynomials",level:2},{value:"Two Approaches to Building with ZK",id:"two-approaches-to-building-with-zk",level:2},{value:"RISC Zero&#39;s Circuits",id:"risc-zeros-circuits",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function h(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,n.a)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"about-arithmetic-circuits",children:"About Arithmetic Circuits"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity",children:"Arithmetic circuits"})," consist of a collection of wires and gates, where the wires hold ",(0,a.jsx)(e.a,{href:"/website-preview/risc0/risc0/pr/1314/reference-docs/about-finite-fields",children:"elements of a finite field"})," and each gate computes either finite field addition or finite field multiplication.\nIn contrast, in an ",(0,a.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Electronic_circuit",children:"electronic circuit"}),", the wires either contain electrical signal or they don't, and each gate may compute a variety of logical operations."]}),"\n",(0,a.jsx)(e.p,{children:"Arithmetic circuits are central to zero-knowledge proof techniques: SNARKs and STARKs prove integrity of an execution of an arithmetic circuit."}),"\n",(0,a.jsx)(e.h2,{id:"arithmetic-circuits-as-polynomials",children:"Arithmetic Circuits as Polynomials"}),"\n",(0,a.jsxs)(e.p,{children:["Because arithmetic circuits consist only of addition and multiplication, the circuit can be translated into a polynomial. In other words, the output(s) of the circuit can be expressed as a multi-variate polynomial, ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"C"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"1"})]}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mo,{children:"\u2026"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"C(x_1,\\ldots,x_n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"minner",children:"\u2026"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," where"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of inputs to the polynomial, and"]}),"\n",(0,a.jsxs)(e.li,{children:["the degree of ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"C"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," is bounded by the number of multiplications in the circuit."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:i(514).Z+"",width:"456",height:"418"})}),"\n",(0,a.jsxs)(e.p,{children:["The circuit pictured above can be written as ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"C"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"1"})]}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"1"})]}),(0,a.jsx)(e.mo,{children:"+"}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"}),(0,a.jsx)(e.mo,{children:"\u22c5"}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mo,{children:"\u22c5"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mo,{children:"+"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"C(x_1, x_2) = (x_1+x_2)\\cdot x_2 \\cdot (x_2+1)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"+"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5945em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"+"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),". This simple example is drawn from ",(0,a.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity",children:"Wikipedia"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"two-approaches-to-building-with-zk",children:"Two Approaches to Building with ZK"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Option 1: Build app-specific arithmetic circuits"}),"\n",(0,a.jsx)(e.li,{children:"Option 2: Build on top of a zero-knowledge virtual machine, which receives a binary file as an input and outputs a proof of execution."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["At RISC Zero, we adopt the latter approach: we've written a ",(0,a.jsx)(e.a,{href:"https://docs.rs/risc0-circuit-rv32im",children:"RISC-V circuit"}),", which emulates rv32im.\nThe rv32im circuit receives a RISC-V binary and some user specified input, and generates an ",(0,a.jsx)(e.a,{href:"/website-preview/risc0/risc0/pr/1314/proof-system/what_is_a_trace",children:"execution trace"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["If the execution trace is valid, the ",(0,a.jsx)(e.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/trait.Prover.html",children:"Prover"})," generates a ",(0,a.jsx)(e.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html",children:"receipt"})," that can be ",(0,a.jsx)(e.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html#method.verify",children:"verified"})," by a skeptical third party."]}),"\n",(0,a.jsx)(e.h2,{id:"risc-zeros-circuits",children:"RISC Zero's Circuits"}),"\n",(0,a.jsx)(e.p,{children:"In addition to the rv32im circuit, we have built:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"an accelerator circuit for SHA-256"}),"\n",(0,a.jsx)(e.li,{children:"a recursion circuit, which receives two receipts and produces a single recursion receipt."}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Wikipedia page on ",(0,a.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity",children:"arithmetic circuit complexity"})]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"https://www.youtube.com/watch?v=0M0pAubEjz8&list=PLBJMt6zV1c7Gh9Utg-Vng2V6EYVidTFCC&index=4",children:"From programs to arithmetic circuits"}),": YouTube video from David Wong"]}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},514:(s,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/arithmeticcircuit-54d36ddf44055b1eb109233baa9e4b5e.png"},1151:(s,e,i)=>{i.d(e,{Z:()=>l,a:()=>c});var a=i(7294);const n={},t=a.createContext(n);function c(s){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:c(s.components),a.createElement(t.Provider,{value:e},s.children)}}}]);