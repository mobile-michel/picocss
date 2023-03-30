---
title: 02-Layout with global data
---

1. Create /src/_data/site.json & add :
```
{
 "name": "Eleventy & Pico.css",
 "url": "https://eleventy-pico.ch",
 "authorName": "Michel Maillard",
 "authorUrl": "https://michelmaillard.ch/",
 "description": "Eleventy 2.0.1 with Pico.css & a Sass workflow Tutorial",
 "favicon": "https://11ty.recipes/images/meta/favicon.svg",
  "links": [
    {
      "text": "Home",
      "url": "/"
    },
    {
      "text": "Blog",
      "url": "/posts/post1"
    },
    {
      "text": "Contact",
      "url": "/contact"
    }
  ]
}
```
1. create /src/_includes/partials/header.njk & add :
```
<header class="container">
    {% include 'partials/nav.njk' %}
    <hgroup>
        <h1>{{ site.name }}</h1>
        <h2>{{ site.description }}</h2>
    </hgroup>
    <p><a href="#" role="button" onclick="event.preventDefault()">Call to action</a></p>
</header>
```
1. create /src/_includes/partials/footer.njk & add :
```
<footer class="container">
 <small>&copy; {% year %} Built with <a href="https://www.11ty.dev/">Eleventy</a> & <a href="https://picocss.com">Pico</a> • <a href="https://michelmaillard.ch">Michel Maillard</a></small>
</footer>
```
1. create /src/_includes/nav.njk & add :
```
<nav class="container">
    <ul>
        {% for nav in site.links %}
        <li><a href="{{ nav }}">{{ nav }}</a></li>
        {% endfor %}
    </ul>
</nav>
```
1. open /src/_includes/base.njk & modify :
```
 <meta name="author" content="{{ site.authorName }}">
 <meta name="description" content="{{ site.description }}">
 <link rel="icon" href="{{ site.favicon }}" type="image/svg+xml" />
 <title>{{ title }} | {{ site.name }}</title>
+
{% include 'partials/header.njk' %}
 <main class="container">
 <h1>{{ title }}</h1>
 /{/{ content | safe }}
 </main>
 {% include 'partials/footer.njk' %}
```
1. GitKraken : Stage all changes → 02-Layout with global data → Commit changes
2. Terminal : npm start