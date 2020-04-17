---
title: "Gatsby Theme"
aliases: ["Gatsby Themes"]
---

- Gatsby themes are a way to package up styles and functionality for [[Gatsby]] in a reusable and composable way.
- I use a theme ([[gatsby-theme-brain]]) for the code powering this [[Public Brain]]!
- ## Developing Themes
- ### Resources I Used
  - Official Docs: https://www.gatsbyjs.org/docs/themes/
  - [[egghead.io]] Video course by Jason Lengstorf: https://egghead.io/courses/gatsby-theme-authoring
  - Written version of that course: https://www.gatsbyjs.org/tutorial/building-a-theme
- ### Quirks I Encountered
  - Gatsby doesn't appear to fully support ES6 modules, so I have been sticking with CommonJS modules for all of my Gatsby work.
  - There is a bug with gatsby-plugin-mdx. If you have a site that configures that plugin, you can't have a theme that also configures it. A workaround for this as a theme developer is to add a [Plugin Option](https://www.gatsbyjs.org/docs/configuring-usage-with-plugin-options/) to disable the gatsby-plugin-mdx entry in gatsby-config.js
    - More details about this issue: https://github.com/ChristopherBiscardi/gatsby-mdx/issues/354
    - The way I implemented the fix for [[gatsby-theme-brain]]: https://github.com/aengusmcmillin/gatsby-theme-brain/commit/6e376f906e9ddac411aced8ffd3ffd367f76054c
- ### Other Notes
  - Need to remember to use onPreBootstrap to ensure needed directories are created to prevent crashing
  - Use require.resolve instead of path.resolve to load files that are part of the them (e.g. components and templates). Otherwise it will search for the files relative to the site root rather than theme root.
