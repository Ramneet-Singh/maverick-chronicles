---
title: "Notes on Program Synthesis"
date: 2022-02-24
tag: notes
category: notes
excerpt: "These are my notes on program synthesis, written while following [Prof. Solar-Lezama's notes](https://people.csail.mit.edu/asolar/SynthesisCourse/index.htm) on the same topic. I try to summarise the key ideas for each lecture."
toc: true
layout: single
author_profile: true
read_time: true
comments: # true
share: true
related: true
classes: wide
---

These are my notes on program synthesis, written while following [Prof. Solar-Lezama's notes](https://people.csail.mit.edu/asolar/SynthesisCourse/index.htm) on the same topic. I should mention two things at the outset - first, the content will be similar to those notes (indeed my intention is to summarise key ideas for each lecture) and second, like any other summary, this write-up will not be nearly detailed enough to understand program synthesis well.

## Lecture 1

This lecture addresses the question, *what is program synthesis?* We answer this firstly by talking about things it is not. Synthesis has close connections to compilation, machine learning and logic programming but differs subtly from each. For instance, logic programming relies on a generic algorithm to search for a solution to *every* problem while synthesis tries to find an algorithm given a specific problem. Prof. Lezama provides the following definition (emphasis added to the "two important parts" as he says),

> Program Synthesis correspond to a class of techniques that are able to **generate a program** from a collection of artifacts that establish semantic **and syntactic** requirements for the generated code.

The generation of code distinguishes synthesis from logic programming, that searches for the solution to a specific input at runtime. The flexibility in specifying syntactic requirements distinguishes it from machine learning and compilation, both of which are based on algorithms that specify tight(er) requirements for how the space of programs is defined.

Prof. Lezama then writes about the challenges for synthesis today, what he calls the "Three Pillars of Machine Programming". These include:

1. **Intention:** Understanding *what a user wants* from a collection of (often ambiguous) specifications. These specifications could be formal logic requirements, input/output examples or natural language descriptions of a problem among other things.

2. **Invention:** Searching the space of all valid programs to *discover* one that is consistent with the intention of the user.

3. **Adaptation:** Using synthesis to assist in the overall software development process in tasks like bug fixing and optimisation, beyond simply generating code from scratch for a problem.


## Lecture 2


