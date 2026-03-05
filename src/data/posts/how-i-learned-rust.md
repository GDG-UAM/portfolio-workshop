---
title: How I Learned Rust in 30 Days
description: A structured approach to learning a systems programming language as a web developer — what worked, what didn't, and what surprised me.
pubDate: 2025-11-15
tags:
  - Rust
  - Learning
  - Programming
draft: false
---

Learning a new language is always a mix of excitement and frustration. When I decided to pick up Rust, I gave myself a deadline: 30 days to go from zero to building something real. Here's how it went.

## Why Rust?

As a web developer, I spend most of my time in TypeScript and Python. Rust felt like the perfect challenge — it forces you to think about memory, ownership, and performance in ways that high-level languages abstract away. Plus, I'd been eyeing the WebAssembly ecosystem and wanted to contribute to open-source tools.

## The Plan

I structured my month into three phases:

1. **Week 1–2:** Read _The Rust Book_ cover to cover, doing every exercise
2. **Week 3:** Build a small CLI tool (what became [OpenContrib](/projects))
3. **Week 4:** Refactor, add tests, publish to crates.io

## What Actually Happened

Week 1 was humbling. The borrow checker rejected almost everything I wrote. I filled notebooks with ownership diagrams trying to understand why a simple function wouldn't compile.

The breakthrough came in week 2 when I stopped fighting the compiler and started treating its errors as a patient teacher. Rust's error messages are genuinely some of the best in any language — they don't just tell you _what's_ wrong, they suggest _how to fix it_.

## Key Takeaways

- **Start with the official book.** The Rust Book is exceptionally well-written.
- **Don't skip the exercises.** Understanding ownership requires practice, not just reading.
- **Build something you care about.** Abstract exercises won't sustain your motivation.
- **The compiler is your friend.** Seriously. Once you internalize this, everything clicks.
- **Join the community.** The Rust community on Discord and Reddit is incredibly welcoming.

## Would I Recommend It?

Absolutely. Even if you never write Rust professionally, the concepts it teaches — ownership, lifetimes, zero-cost abstractions — make you a better programmer in any language. My TypeScript code is notably cleaner since I started thinking in Rust patterns.

30 days was enough to get comfortable. Mastery? That's a much longer journey. But the foundation is solid, and I'm excited to keep building.
