"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8916],{115:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=n(5893),r=n(1151);const o={},s="Profiling guest code",l={id:"zkvm/developer-guide/profiling",title:"Profiling guest code",description:"In this guide, we'll explore how to effectively profile guest code within the RISC0 ZKVM, offering insights and tools to improve performance.",source:"@site/api_versioned_docs/version-0.19/zkvm/developer-guide/profiling.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/profiling",permalink:"/website-preview/risc0/risc0/pr/1121/api/zkvm/developer-guide/profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/developer-guide/profiling.md",tags:[],version:"0.19",frontMatter:{},sidebar:"docs",previous:{title:"Cryptography Acceleration",permalink:"/website-preview/risc0/risc0/pr/1121/api/zkvm/developer-guide/acceleration"},next:{title:"zkVM Technical Specification",permalink:"/website-preview/risc0/risc0/pr/1121/api/zkvm/developer-guide/zkvm-specification"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Guest code",id:"guest-code",level:3},{value:"Host code",id:"host-code",level:3},{value:"Usage",id:"usage",level:2},{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2: Running",id:"step-2-running",level:3},{value:"Step 3: Visualization",id:"step-3-visualization",level:3},{value:"What to Expect",id:"what-to-expect",level:2},{value:"Notes",id:"notes",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"profiling-guest-code",children:"Profiling guest code"}),"\n",(0,t.jsxs)(i.p,{children:["In this guide, we'll explore how to effectively profile guest code within the RISC0 ZKVM, offering insights and tools to improve performance.\nWe'll be using three different implementations of the Fibonacci sequence calculation to demonstrate how to profile guest code.\nYou can find all the code used as example in the ",(0,t.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/v0.19.0/examples/profiling",children:"profiling example"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.h3,{id:"guest-code",children:"Guest code"}),"\n",(0,t.jsxs)(i.p,{children:["There are three different Fibonacci sequence calculation methods provided in the ",(0,t.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/v0.19.0/examples/profiling",children:"profiling example"}),":"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fibonacci_1"}),": A basic iterative method."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fibonacci_2"}),": An optimized iterative method that attempts to batch computation."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fibonacci_3"}),": A matrix exponentiation approach, which is a fast method to compute Fibonacci numbers."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The guest code reads the number of iterations from the host, computes the Fibonacci number using all the above methods, and finally commits the answer back to the host."}),"\n",(0,t.jsx)(i.h3,{id:"host-code",children:"Host code"}),"\n",(0,t.jsx)(i.p,{children:"Here's are the step to enable profiling:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Enable the ",(0,t.jsx)(i.code,{children:"profile"})," feature of the ",(0,t.jsx)(i.code,{children:"zkvm"})," in your ",(0,t.jsx)(i.code,{children:"Cargo.toml"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-toml",children:'risc0-zkvm = { version = "0.19", features = ["profiler"] }\n'})}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsx)(i.li,{children:"Initialize the profiler with your guest code."}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",metastring:"ignore",children:'let mut profiler = Profiler::new("profile_output_path", FIBONACCI_ELF);\n'})}),"\n",(0,t.jsxs)(i.p,{children:["This will initialize the profiler using the ",(0,t.jsx)(i.code,{children:"FIBONACCI_ELF"})," as guest code, and will write the output of the profiling to ",(0,t.jsx)(i.code,{children:"profile_output_path"}),".\nAlternatively, you can define the ",(0,t.jsx)(i.code,{children:"profile_output_path"})," using an env variable:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",metastring:"ignore",children:'let pprof_out = match std::env::var("RISC0_PPROF_OUT") {\n    Ok(val) => Some(val),\n    Err(_) => None,\n};\nlet mut profiler = match pprof_out {\n    Some(path) => Some(Profiler::new(&path, FIBONACCI_ELF).expect("profiler creation failed")),\n    None => None,\n};\n'})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsx)(i.li,{children:"Build the executor environment"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",metastring:"ignore",children:'let iterations = 1000;\nlet env = {\n    let mut builder = ExecutorEnv::builder();\n    if let Some(ref mut p) = profiler {\n        builder.trace_callback(p.make_trace_callback());\n    }\n    builder\n        .write_slice(&[iterations])\n        .build()\n        .expect("environment build failed")\n};\n'})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsx)(i.li,{children:"Execute the guest code"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",metastring:"ignore",children:'let exec = default_executor();\nexec.execute_elf(env, FIBONACCI_ELF).expect("execution failed");\n'})}),"\n",(0,t.jsxs)(i.p,{children:["This will only ",(0,t.jsx)(i.a,{href:"/terminology#execute",children:"execute"})," the guest code, without generating a ",(0,t.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"}),"."]}),"\n",(0,t.jsxs)(i.ol,{start:"5",children:["\n",(0,t.jsx)(i.li,{children:"Write out the profile"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",metastring:"ignore",children:'if let Some(ref mut p) = profiler {\n    p.finalize();\n    let report = p.encode_to_vec();\n    std::fs::write(pprof_out.as_ref().unwrap(), &report)\n        .expect("Unable to write profiling output");\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i.h3,{id:"step-1-prerequisites",children:"Step 1: Prerequisites"}),"\n",(0,t.jsxs)(i.p,{children:["First, install the ",(0,t.jsx)(i.a,{href:"https://github.com/google/pprof",children:"pprof"})," tool with"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"go install github.com/google/pprof@latest\n"})}),"\n",(0,t.jsx)(i.h3,{id:"step-2-running",children:"Step 2: Running"}),"\n",(0,t.jsx)(i.p,{children:"Then, run the example with:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"RISC0_PPROF_OUT=./profile.pb cargo run --release\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The above command will ",(0,t.jsx)(i.a,{href:"/terminology#execute",children:"execute"})," the Fibonacci computation for 1000 iterations and write the profiling output to profile.pb."]}),"\n",(0,t.jsx)(i.h3,{id:"step-3-visualization",children:"Step 3: Visualization"}),"\n",(0,t.jsxs)(i.p,{children:["To visualize the profiling data using ",(0,t.jsx)(i.code,{children:"pprof"}),", run:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"pprof -http=127.0.0.1:8089 ../target/riscv-guest/riscv32im-risc0-zkvm-elf/release/fibonacci profile.pb\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then navigate to ",(0,t.jsx)(i.a,{href:"http://localhost:8089",children:"http://localhost:8089"})," in your browser."]}),"\n",(0,t.jsx)(i.h2,{id:"what-to-expect",children:"What to Expect"}),"\n",(0,t.jsxs)(i.p,{children:["When you visualize the profiling data, you should be able to see the relative performance in terms of ",(0,t.jsx)(i.a,{href:"/terminology#clock-cycles",children:"cycle count"})," of the three Fibonacci implementations.\nThis can be helpful in understanding the efficiency of various algorithms and their performance implications."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Graph",src:n(4553).Z+"",width:"2216",height:"2264"}),"\n",(0,t.jsx)(i.img,{alt:"Flamegraph",src:n(2556).Z+"",width:"1753",height:"546"})]}),"\n",(0,t.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Ensure that the environment variable ",(0,t.jsx)(i.code,{children:"RISC0_PPROF_OUT"})," is set to the desired output path for the profiling data."]}),"\n",(0,t.jsxs)(i.li,{children:["The Fibonacci functions are annotated with ",(0,t.jsx)(i.code,{children:"#[inline(never)]"})," and ",(0,t.jsx)(i.code,{children:"#[no_mangle]"})," to ensure that their symbols are easily recognizable in the profiling data."]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"black_box"})," function is used to prevent the compiler from optimizing out the calculations."]}),"\n",(0,t.jsxs)(i.li,{children:["To maximize the number of nodes visualized by ",(0,t.jsx)(i.a,{href:"https://github.com/google/pprof",children:"pprof"})," you can add ",(0,t.jsx)(i.code,{children:"-edgefraction 0 -nodefraction 0 -nodecount 100000"})," when starting ",(0,t.jsx)(i.a,{href:"https://github.com/google/pprof",children:"pprof"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2556:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/profiling_flamegraph-b52669e0138e517bc2197de95d976a9e.png"},4553:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/profiling_graph-deb079b6ac720f6068a05ad5bd901045.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>s});var t=n(7294);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);