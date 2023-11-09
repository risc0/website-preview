"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8324],{6786:e=>{e.exports=JSON.parse('{"pluginId":"api","version":"0.19","label":"0.19","banner":null,"badge":true,"noIndex":false,"className":"docs-version-0.19","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/website-preview/risc0/risc0/pr/1127/api/","docId":"introduction","unlisted":false},{"type":"category","label":"Bonsai","collapsed":false,"items":[{"type":"link","label":"Quick Start","href":"/website-preview/risc0/risc0/pr/1127/api/bonsai/quickstart","docId":"bonsai/quickstart","unlisted":false},{"type":"link","label":"Bonsai on Ethereum","href":"/website-preview/risc0/risc0/pr/1127/api/bonsai/bonsai-on-eth","docId":"bonsai/bonsai-on-eth","unlisted":false},{"type":"link","label":"A Blockchain Dev\'s Guide to zkVM Development","href":"/website-preview/risc0/risc0/pr/1127/api/bonsai/blockchain-zkvm-guide","docId":"bonsai/blockchain-zkvm-guide","unlisted":false},{"type":"link","label":"Ethereum Examples","href":"/website-preview/risc0/risc0/pr/1127/api/bonsai/eth-examples","docId":"bonsai/eth-examples","unlisted":false},{"type":"category","label":"REST API","collapsed":false,"items":[{"type":"link","label":"API Reference Docs","href":"https://api.bonsai.xyz/swagger-ui/"}],"collapsible":true,"href":"/website-preview/risc0/risc0/pr/1127/api/bonsai/rest-api"}],"collapsible":true,"href":"/website-preview/risc0/risc0/pr/1127/api/bonsai/"},{"type":"category","label":"zkVM","collapsed":false,"items":[{"type":"link","label":"Quick Start","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/quickstart","docId":"zkvm/quickstart","unlisted":false},{"type":"link","label":"Dev Mode","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/dev-mode","docId":"zkvm/dev-mode","unlisted":false},{"type":"link","label":"API Reference Docs","href":"https://docs.rs/risc0-zkvm/"},{"type":"link","label":"Installation","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/install","docId":"zkvm/install","unlisted":false},{"type":"link","label":"Rust Resources","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/developer-guide/rust-resources","docId":"zkvm/developer-guide/rust-resources","unlisted":false},{"type":"link","label":"Guest Code 101","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/developer-guide/guest-code-101","docId":"zkvm/developer-guide/guest-code-101","unlisted":false},{"type":"link","label":"Host Code 101","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/developer-guide/host-code-101","docId":"zkvm/developer-guide/host-code-101","unlisted":false},{"type":"link","label":"Receipts","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/developer-guide/receipts","docId":"zkvm/developer-guide/receipts","unlisted":false},{"type":"link","label":"Acceleration","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/developer-guide/acceleration","docId":"zkvm/developer-guide/acceleration","unlisted":false},{"type":"link","label":"Profiling","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/developer-guide/profiling","docId":"zkvm/developer-guide/profiling","unlisted":false},{"type":"link","label":"zkVM technical specification","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/developer-guide/zkvm-specification","docId":"zkvm/developer-guide/zkvm-specification","unlisted":false},{"type":"link","label":"Performance Benchmarks","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/benchmarks","docId":"zkvm/benchmarks","unlisted":false},{"type":"category","label":"Tutorials","collapsed":false,"items":[{"type":"link","label":"Hello World Tutorial","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/tutorials/hello-world","docId":"zkvm/tutorials/hello-world","unlisted":false}],"collapsible":true,"href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/tutorials/overview"},{"type":"link","label":"Examples","href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/examples","docId":"zkvm/examples","unlisted":false},{"type":"link","label":"Source code","href":"https://github.com/risc0/risc0"}],"collapsible":true,"href":"/website-preview/risc0/risc0/pr/1127/api/zkvm/"}]},"docs":{"bonsai/blockchain-zkvm-guide":{"id":"bonsai/blockchain-zkvm-guide","title":"A Blockchain Developer\'s Guide to the zkVM","description":"(To start building on [Bonsai], check out the [Bonsai Quick Start] page.)","sidebar":"docs"},"bonsai/bonsai-on-eth":{"id":"bonsai/bonsai-on-eth","title":"Bonsai on Ethereum","description":"Warning: Bonsai is still in early development. Do not use in production.","sidebar":"docs"},"bonsai/bonsai-overview":{"id":"bonsai/bonsai-overview","title":"Bonsai Overview","description":"Bonsai enables boundless computation on any blockchain.","sidebar":"docs"},"bonsai/eth-examples":{"id":"bonsai/eth-examples","title":"Ethereum Examples","description":"While all of the zkVM examples can be run on Bonsai by configuring Bonsai as your remote prover, those examples do not interact with or are intended to interact with Ethereum or any other blockchain. The references below are examples of how Bonsai and the zkVM can be integrated with Ethereum.","sidebar":"docs"},"bonsai/quickstart":{"id":"bonsai/quickstart","title":"Bonsai Quick Start","description":"_Note: The Bonsai proving service is still in early Alpha; an API key is required for access.","sidebar":"docs"},"bonsai/rest-api":{"id":"bonsai/rest-api","title":"REST API","description":"In its current form, Bonsai is available as REST API which parallelizes proving for individual proofs across a number of GPU workers to maximize performance.","sidebar":"docs"},"introduction":{"id":"introduction","title":"Introduction","description":"Welcome to the [RISC Zero] documentation! This site contains documentation for:","sidebar":"docs"},"zkvm/benchmarks":{"id":"zkvm/benchmarks","title":"Performance Benchmarks","description":"Pregenerated benchmarks","sidebar":"docs"},"zkvm/dev-mode":{"id":"zkvm/dev-mode","title":"What is dev-mode, and how can you use it safely?","description":"We support a development-only mode for standalone risc0 projects in which code is executed but not proven. This adds efficiency to the development cycle during development stages where proving correct execution is not yet critical.","sidebar":"docs"},"zkvm/developer-guide/acceleration":{"id":"zkvm/developer-guide/acceleration","title":"Cryptography Acceleration","description":"RISC Zero\u2019s rv32im implementation includes a number of specialized extension circuits, including two \u201caccelerators\u201d for cryptographic functions: SHA-256 and 256-bit modular multiplication, referred to as \\"bigint\\" multiplication. By implementing these operations directly in the \u201chardware\u201d of the zkVM, programs that use these accelerators execute faster and can be proven with significantly less resources .","sidebar":"docs"},"zkvm/developer-guide/guest-code-101":{"id":"zkvm/developer-guide/guest-code-101","title":"Guest Code 101","description":"In a [zkVM application], the [guest code] is the code that will be executed and proven by the zkVM.","sidebar":"docs"},"zkvm/developer-guide/host-code-101":{"id":"zkvm/developer-guide/host-code-101","title":"Host Code 101","description":"In a [zkVM application], the [host] is the machine that is running the zkVM.","sidebar":"docs"},"zkvm/developer-guide/profiling":{"id":"zkvm/developer-guide/profiling","title":"Profiling guest code","description":"In this guide, we\'ll explore how to effectively profile guest code within the RISC0 ZKVM, offering insights and tools to improve performance.","sidebar":"docs"},"zkvm/developer-guide/receipts":{"id":"zkvm/developer-guide/receipts","title":"Receipts 101","description":"A brief introduction to the RISC Zero [receipt].","sidebar":"docs"},"zkvm/developer-guide/rust-resources":{"id":"zkvm/developer-guide/rust-resources","title":"Rust Resources","description":"[zkVM applications] are written in [Rust].","sidebar":"docs"},"zkvm/developer-guide/zkvm-specification":{"id":"zkvm/developer-guide/zkvm-specification","title":"zkVM Technical Specification","description":"Like many other execution environments, the zkVM has unique characteristics","sidebar":"docs"},"zkvm/examples":{"id":"zkvm/examples","title":"Examples","description":"- [Hello World]: a recommended place to start. Prove a number is composite, and you know its factors without revealing them","sidebar":"docs"},"zkvm/install":{"id":"zkvm/install","title":"Installation","description":"These instructions tell you how to install (or update) RISC Zero tools so you can build your own RISC Zero zkVM projects. By following these instructions, you will install the [cargo risczero] tool for creating and building RISC Zero zkVM projects, as well as the RISC Zero toolchain used to build zkVM guest programs in Rust.","sidebar":"docs"},"zkvm/quickstart":{"id":"zkvm/quickstart","title":"zkVM Quick Start","description":"Welcome to the [zkVM] Quick Start page! Here are the steps between you and your first proof:","sidebar":"docs"},"zkvm/tutorials/hello-world":{"id":"zkvm/tutorials/hello-world","title":"Building zkVM Hello World","description":"This tutorial will walk you through building your first zkVM application.","sidebar":"docs"},"zkvm/tutorials/overview":{"id":"zkvm/tutorials/overview","title":"Tutorials","description":"Here we gather a list of tutorials. We are currently working on creating more tutorials:","sidebar":"docs"},"zkvm/zkvm_overview":{"id":"zkvm/zkvm_overview","title":"zkVM Overview","description":"WARNING: This software is still experimental, we do not recommend it for production use.","sidebar":"docs"}}}')}}]);