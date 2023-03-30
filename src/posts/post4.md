---
title: 04-Create the blog posts
---

1. Create /src/posts/post1.md + /src/posts/post2.md + /src/posts/post3.md + /src/posts/post4.md & add:
```
---
title: 01-Installation
---
```
    + some content.

2. create /src/posts/posts.json & add:
```
{
    "layout": "base",
    "tags": "general"
  }
```
3. open /src/index.md & modify:
```
---
title: Tutorial
layout: base
pagination:
  data: collections.general
  size: 2
  alias: posts
---
## My Blog Posts
{%- for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}
{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}
```
4. GitKraken : Stage all changes → 04-Create the blog posts → Commit changes
5. Terminal: npm start