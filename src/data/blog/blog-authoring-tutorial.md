---
author: Ramneet Singh
pubDatetime: 2026-05-11T00:00:00Z
title: Blog authoring tutorial (math, code, media, interactive HTML, and marimo)
featured: false
draft: false
tags:
  - docs
  - tutorial
description: A practical tutorial for writing rich markdown blogs with KaTeX math, code blocks, images, quotes, links, references, standalone interactive HTML, and marimo notebook conversion.
---

This tutorial is a one-stop reference for creating rich blog posts in this repository.

## Table of contents

## 1) Markdown basics

Use normal Markdown headings, emphasis, lists, links, and quotes.

> Tip: Keep each section focused and use short paragraphs for readability.

Useful links:

- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [KaTeX docs](https://katex.org/)

## 2) Write math with KaTeX

Inline math works directly in Markdown, for example $E = mc^2$ and $\sigma^2 = \frac{1}{n}\sum_i(x_i-\mu)^2$.

Display math works too:

$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}
$$

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

## 3) Code blocks

Use fenced code blocks:

```ts
type Post = {
  title: string;
  tags: string[];
};

const post: Post = { title: "Rich markdown", tags: ["docs", "math"] };
console.log(post);
```

Inline code also works, like `npm run dev`.

## 4) Images

Add images with Markdown:

![AstroPaper OG image example](/maverick-chronicles/astropaper-og.jpg)

## 5) Quotes, links, and references

> “Simplicity is prerequisite for reliability.” — Edsger W. Dijkstra

You can add references with footnotes enabled by GFM.[^katex]

[^katex]: KaTeX project site: <https://katex.org/>.

## 6) Standalone interactive HTML + JavaScript

Put standalone files in `public/interactive/*.html`. They are served directly.

Example file in this repo:

- `/public/interactive/hello-interactive.html`

Direct link:

- [/interactive/hello-interactive.html](/maverick-chronicles/interactive/hello-interactive.html)

Embed it inside a blog post:

<iframe
  src="/maverick-chronicles/interactive/hello-interactive.html"
  title="Interactive math demo"
  width="100%"
  height="360"
  loading="lazy"
></iframe>

## 7) Convert marimo notebooks to blog posts

1. Export a notebook to Markdown:

   ```bash
   marimo export md path/to/notebook.py -o src/data/blog/notebook-post.md
   ```

2. Ensure the exported file starts with required frontmatter keys:

   ```yaml
   ---
   title: "My notebook post"
   description: "Summary of the notebook"
   pubDatetime: 2026-05-11T00:00:00Z
   author: "Ramneet Singh"
   tags:
     - marimo
   draft: false
   ---
   ```

3. Optionally edit the Markdown for structure and readability, then run:

   ```bash
   npm run dev
   ```

That is all you need to publish rich technical blogs in this project.
