---
name: antoineg.dev
description: My personal website and portfolio
repository: https://github.com/antoinegag/antoineg.dev
url: http://antoineg.dev
tech: ["React", "NextJS", "Tailwind", "React Three Fiber"]
---

# Second iteration

This is the second iteration of my personal website, with a brand new design but more importantly **statically rendered React**.

When I built the first iteration of antoineg.dev I used one of my favorite tech: React. I thought it would be good practice, and it was, but I soon realized that it had a few shortcommings for my use case. Most of these issues where stemming from the fact that it was 100% client side rendered: this meant less than ideal SEO, slower first contentful paint, per-route headers and more.

This time around, I decided that instead of forcing my favorite tool unto this problem, I would go the other way around: **using the best tool for the job**

## Best of both worlds

I had recently started to play with NextJS, a fancy React framework that allowed to use Server Side Rendering (SSR) with React and soon enough I learned that you could also statically render your React app to plain HTML _and_ still benefit from React where it made sense.

This is what I used to build this very site. Sparkled with a brand new design and fancy 3D animations, it also statically generate project pages from a simple markdown file, you're looking at it right now!
