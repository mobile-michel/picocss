---
title: 05-Deploy to GitHub & Netlify
---

1. GitHub: Repositories -> New -> `picocss` -> Create repository
2. VSCode Terminal: 
```
git remote add origin https://github.com/mobile-michel/picocss.git
git branch -M main
git push -u origin main
```
3. Netlify -> Add new site -> Import an existing project -> GitHub -> `mobile-michel/picocss` -> Deploy site
4. Site settings -> Change site name -> `picocss`
5. Verify `Build settings`:
```
Runtime: Not set
Base directory: Not set
Build command: eleventy (npm run build)
Publish directory: public (dist or _site)
Deploy log visibility: Logs are public
Build status: Active
```