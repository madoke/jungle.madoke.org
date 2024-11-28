---
slug: the-stack-of-less-resistance
title: The stack of less resistance
summary: A key challenge in scaling software is avoiding unnecessary friction with your tech stack. As systems grow more complex and teams expand, engineers naturally question their architectural choices. While this questioning helps improve systems for the long term, it becomes problematic when their maintenance and evolution consume so much time that they prevent you from focusing on actual business needs.
categories: [Engineering]
tags:
  [
    Technical Debt,
    Scalability,
    New Features,
    Technical stack,
    Refactoring,
    Maintenance,
  ]
date: 2024-11-28T00:00:00+00:00
authors:
  - davidsimao
---

A key challenge in scaling software is avoiding unnecessary friction with your tech stack. As systems grow more complex and teams expand, engineers naturally question their architectural choices. While this questioning helps improve systems for the long term, it becomes problematic when their maintenance and evolution consume so much time that they prevent you from focusing on actual business needs.

## Why do people feel the need to change?

*"*We should use X, it would be so much easier than all this nonsense!" — Sound familiar? This common reaction emerges when system maintenance becomes challenging. Teams often gravitate toward starting fresh with shiny new technology, seeking a sense of progress and hoping old problems will magically vanish. If you hear these conversations repeatedly, your current stack likely has some issues:

- **High complexity**: The architecture has grown too convoluted, with only a few people understanding it fully. Component changes can trigger unexpected side effects that remain hidden during feature development, leading to longer development cycles and frustration.
- **Poor developer experience**: This manifests in various ways—costly and time-consuming deployments, inability to run or test the system locally or in shared environments. When development becomes frustrating, people resort to shortcuts. Production becomes the default testing ground, making developers hesitant to refactor or improve the codebase.
- **Lack of context**: People and systems evolve. In long-running projects, team members come and go, creating cycles of knowledge transfer where crucial context gets lost. This creates uncertainty around changes and leads to poorly informed decisions.

It's a misconception that simply adopting newer technology will improve performance or developer experience. Yet it's equally wrong to assume it won't. Every technology shift involves tradeoffs. The real challenge lies in balancing modern industry standards with immediate business needs.

## Should we change it or not?

The answer depends on your situation. While some organizations give their engineers time and space for proper implementation, most prioritize shipping products. [As Dan McKinley notes in his presentation, you can't focus on product requirements if you're debating whether to use Cassandra](https://boringtechnology.club/) (1). Before proceeding, consider these key questions with your team:

#### Does it fix something your current stack can't? 

Sometimes new functionality requires new technology, such as adding a caching layer or message queue. In these cases, it's better to invest early rather than implement a temporary solution that won't scale within months.

#### Can your team use the new stack, and do they want it?

Regardless of who proposes it, ensure the entire team supports this change and has relevant experience with the new stack. Don't waste energy convincing people that X is better than Y when both tools are equally capable. Without team buy-in, you'll face friction and the maintenance burden will fall on those who proposed the change.

#### Do you have support within the company?

Are there colleagues available to help with issues? In smaller companies, the answer is typically no, or people are too busy. While some argue that containerization makes the technology stack less relevant, this mainly applies to large organizations like Google or Microsoft. In a 30–40 person engineering team, alignment is crucial.

#### Is the tradeoff worth it?

Can this be done quickly, or will the migration prevent the team from delivering other work? If there's already pressure to deliver product features, it might be better to address existing problems with your current stack rather than create new ones with different technology.

#### Does your infrastructure support it (pipelines, deployments, libraries)?

If you've decided to proceed, verify that the new stack has been used successfully before. Setting up operational boilerplate for building, testing, and deploying code requires significant effort, not to mention creating domain-specific shared libraries. If no one has done it before, your team will need to build this foundation.

#### For how long will you need to maintain both stacks simultaneously?

Can you perform a complete replacement? If not, how long will parallel maintenance last? After adopting a new stack, you need a plan to decommission the old one or at least remove it from critical paths. The longer you wait, the harder maintenance becomes.

Answering these questions thoroughly will help your team understand the costs and benefits of introducing a new tech stack and make an informed decision about moving forward.

## Closing Remarks

There are no absolute right or wrong answers when choosing a new stack—only tradeoffs. Progress happens when someone is willing to accept these tradeoffs at the right moment. However, exclusively using stable technology is the opposite extreme, which can slow you down long-term through hiring challenges, technical stagnation, and difficult evolution.

Most teams are better off sticking to what they know. This approach allows them to focus specifically on product development and deliver faster—particularly crucial in early stages when finding market fit is paramount. As companies scale, the need for new technology naturally emerges. At these critical moments, someone must invest in pushing the infrastructure forward. The real challenge lies in identifying these moments and accepting the right tradeoffs without disrupting business operations.

When considering new technology, don't let personal preferences cloud your judgment. Make a thorough assessment with your team and ensure everyone supports the decision to move forward.

## References

(1) [Choose Boring Technology, Dan McKinley](https://boringtechnology.club/)