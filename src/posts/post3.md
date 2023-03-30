---
title: 03-Install Pico.css with Sass
---

1. Terminal : npm install @picocss/pico
2. create /src/css/pico.min.scss & add :
```
// Custom style
header {
    background-image: url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80);
}
// Import Pico
@import "../../node_modules/@picocss/pico/scss/pico";
```
3. open /src/_includes/base.njk & add :
```
<link href="/css/pico.min.css" rel="stylesheet">
```
4. GitKraken : Stage all changes → 03-Install Pico.css Sass files → Commit changes
5. Terminal: npm start