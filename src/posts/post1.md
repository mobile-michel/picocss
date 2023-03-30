---
title: 01-Installation
---

1. Terminal : mkdir picocss
2. cd picocss
3. code .
4. In VSCode, open Terminal : npm init -y
5. open package.json & add :
"start": "npx 211ty/eleventy –serve"
6. create eleventy.config.js & add :
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
7. create /src/_includes/base.njk & add :
`html:5 + /{/{ content | safe }}`
8. create /src/index.md & add :
/---
layout: base
/---
The first paragraph.
9. Create /.gitignore & add :
node_modules
_site
10. git init
11. git add --all
12. git commit -m "First commit"
13. open GitKraken, Open a Repo, picocss → Choisir
14. Terminal : npm start