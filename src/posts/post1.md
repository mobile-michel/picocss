---
title: 01-Installation
---

1. Terminal : `mkdir picocss`
2. `cd picocss`
3. `code .`
4. In VSCode, open Terminal : `npm init -y`
5. open package.json & add :
```text
"start": "npx 211ty/eleventy –serve"
```
1. create `eleventy.config.js` & add :
```text
const eleventySass = require("eleventy-sass");
module.exports = function (eleventyConfig) {
 eleventyConfig.addPlugin(eleventySass);
 eleventyConfig.addWatchTarget("./src/css/");
 eleventyConfig.addPassthroughCopy("./src/js/");
 eleventyConfig.addPassthroughCopy("./src/img/");
 eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
 return {
 dir: {
 input: "src",
 output: "_site"
 }
 };
};
```
1. create `/src/_includes/base.njk` & add :
```html
html:5 + /{/{ content | safe }}
```
1. create /src/index.md & add :
```text
---
layout: base
---
The first paragraph.
```
1. Create `.gitignore` & add :
```text
node_modules
_site
```
1.  `git init`
2.  `git add --all`
3.  `git commit -m "First commit"`
4.  open GitKraken, Open a Repo, picocss → Choisir
5.  Terminal : `npm start`