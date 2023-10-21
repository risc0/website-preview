"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9760],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?i.createElement(f,a(a({ref:t},c),{},{components:r})):i.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const o={},a="Profiling guest code",l={unversionedId:"zkvm/developer-guide/profiling",id:"zkvm/developer-guide/profiling",title:"Profiling guest code",description:"In this guide, we'll explore how to effectively profile guest code within the RISC0 ZKVM, offering insights and tools to improve performance.",source:"@site/docs/zkvm/developer-guide/profiling.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/profiling",permalink:"/website-preview/risc0/risc0/pr/1020/next/zkvm/developer-guide/profiling",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/zkvm/developer-guide/profiling.md",tags:[],version:"current",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Cryptography Acceleration",permalink:"/website-preview/risc0/risc0/pr/1020/next/zkvm/developer-guide/acceleration"},next:{title:"Performance Benchmarks",permalink:"/website-preview/risc0/risc0/pr/1020/next/zkvm/benchmarks"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Guest code",id:"guest-code",level:3},{value:"Host code",id:"host-code",level:3},{value:"Usage",id:"usage",level:2},{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2: Running",id:"step-2-running",level:3},{value:"Step 3: Visualization",id:"step-3-visualization",level:3},{value:"What to Expect",id:"what-to-expect",level:2},{value:"Notes",id:"notes",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"profiling-guest-code"},"Profiling guest code"),(0,n.kt)("p",null,"In this guide, we'll explore how to effectively profile guest code within the RISC0 ZKVM, offering insights and tools to improve performance.\nWe'll be using three different implementations of the Fibonacci sequence calculation to demonstrate how to profile guest code.\nYou can find all the code used as example in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/examples/profiling"},"profiling example"),"."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"guest-code"},"Guest code"),(0,n.kt)("p",null,"There are three different Fibonacci sequence calculation methods provided in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/examples/profiling"},"profiling example"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"fibonacci_1"),": A basic iterative method."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"fibonacci_2"),": An optimized iterative method that attempts to batch computation."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"fibonacci_3"),": A matrix exponentiation approach, which is a fast method to compute Fibonacci numbers.")),(0,n.kt)("p",null,"The guest code reads the number of iterations from the host, computes the Fibonacci number using all the above methods, and finally commits the answer back to the host."),(0,n.kt)("h3",{id:"host-code"},"Host code"),(0,n.kt)("p",null,"Here's are the step to enable profiling:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Enable the ",(0,n.kt)("inlineCode",{parentName:"li"},"profile")," feature of the ",(0,n.kt)("inlineCode",{parentName:"li"},"zkvm")," in your ",(0,n.kt)("inlineCode",{parentName:"li"},"Cargo.toml"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'risc0-zkvm = { version = "0.18", features = ["profiler"] }\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Initialize the profiler with your guest code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let mut profiler = Profiler::new("profile_output_path", FIBONACCI_ELF);\n')),(0,n.kt)("p",null,"This will initialize the profiler using the ",(0,n.kt)("inlineCode",{parentName:"p"},"FIBONACCI_ELF")," as guest code, and will write the output of the profiling to ",(0,n.kt)("inlineCode",{parentName:"p"},"profile_output_path"),".\nAlternatively, you can define the ",(0,n.kt)("inlineCode",{parentName:"p"},"profile_output_path")," using an env variable:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let pprof_out = match std::env::var("RISC0_PPROF_OUT") {\n    Ok(val) => Some(val),\n    Err(_) => None,\n};\nlet mut profiler = match pprof_out {\n    Some(path) => Some(Profiler::new(&path, FIBONACCI_ELF).expect("profiler creation failed")),\n    None => None,\n};\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Build the executor environment")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let iterations = 1000;\nlet env = {\n    let mut builder = ExecutorEnv::builder();\n    if let Some(ref mut p) = profiler {\n        builder.trace_callback(p.make_trace_callback());\n    }\n    builder\n        .write_slice(&[iterations])\n        .build()\n        .expect("environment build failed")\n};\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Execute the guest code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let exec = default_executor();\nexec.execute_elf(env, FIBONACCI_ELF).expect("execution failed");\n')),(0,n.kt)("p",null,"This will only ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1020/next/terminology#execute"},"execute")," the guest code, without generating a ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1020/next/terminology#receipt"},"receipt"),"."),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Write out the profile")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'if let Some(ref mut p) = profiler {\n    p.finalize();\n    let report = p.encode_to_vec();\n    std::fs::write(pprof_out.as_ref().unwrap(), &report)\n        .expect("Unable to write profiling output");\n}\n')),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,n.kt)("p",null,"First, install the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof")," tool with"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/google/pprof@latest\n")),(0,n.kt)("h3",{id:"step-2-running"},"Step 2: Running"),(0,n.kt)("p",null,"Then, run the example with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"RISC0_PPROF_OUT=./profile.pb cargo run --release\n")),(0,n.kt)("p",null,"The above command will ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1020/next/terminology#execute"},"execute")," the Fibonacci computation for 1000 iterations and write the profiling output to profile.pb."),(0,n.kt)("h3",{id:"step-3-visualization"},"Step 3: Visualization"),(0,n.kt)("p",null,"To visualize the profiling data using ",(0,n.kt)("inlineCode",{parentName:"p"},"pprof"),", run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pprof -http=127.0.0.1:8089 ../target/riscv-guest/riscv32im-risc0-zkvm-elf/release/fibonacci profile.pb\n")),(0,n.kt)("p",null,"Then navigate to http://localhost:8089 in your browser."),(0,n.kt)("h2",{id:"what-to-expect"},"What to Expect"),(0,n.kt)("p",null,"When you visualize the profiling data, you should be able to see the relative performance in terms of ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1020/next/terminology#clock-cycles"},"cycle count")," of the three Fibonacci implementations.\nThis can be helpful in understanding the efficiency of various algorithms and their performance implications."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Graph",src:r(996).Z,width:"2216",height:"2264"}),"\n",(0,n.kt)("img",{alt:"Flamegraph",src:r(6262).Z,width:"2240",height:"428"})),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure that the environment variable ",(0,n.kt)("inlineCode",{parentName:"li"},"RISC0_PPROF_OUT")," is set to the desired output path for the profiling data."),(0,n.kt)("li",{parentName:"ul"},"The Fibonacci functions are annotated with ",(0,n.kt)("inlineCode",{parentName:"li"},"#[inline(never)]")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"#[no_mangle]")," to ensure that their symbols are easily recognizable in the profiling data."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"black_box")," function is used to prevent the compiler from optimizing out the calculations."),(0,n.kt)("li",{parentName:"ul"},"To maximize the number of nodes visualized by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/pprof"},"pprof")," you can add ",(0,n.kt)("inlineCode",{parentName:"li"},"-edgefraction 0 -nodefraction 0 -nodecount 100000")," when starting ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/pprof"},"pprof"),".")))}m.isMDXComponent=!0},6262:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/profiling_flamegraph-58eba75b44ba0190c999c0986fbed86f.png"},996:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/profiling_graph-deb079b6ac720f6068a05ad5bd901045.png"}}]);