# Personal Website

A minimal, single-page academic homepage built with plain HTML/CSS/JS — no build step
required. The layout is adapted from [Jon Barron's website](https://github.com/jonbarron/website),
the same template used by sites like [han-guo.info](https://han-guo.info/).

The site is served as static files via GitHub Pages (a `.nojekyll` file disables Jekyll
processing, so what you see in the repo is exactly what gets published).

## Project structure

```
.
├── .nojekyll                       # tells GitHub Pages to serve files as-is (no Jekyll)
├── index.html                      # the entire page: intro, news, and research sections
├── CNAME                           # custom domain (optional)
├── LICENSE
└── assets
    ├── files/curriculum_vitae.pdf  # your CV (linked from the header)
    ├── img/                        # profile photo, favicon, paper thumbnails
    └── js/utils.js                 # renders each publication row
```

## How to edit

All content lives in `index.html`:

- **Name / bio / links** — edit the first table (intro). Update the `<name>`, the bio
  paragraph (look for the `TODO` comment), and the Email / Scholar / CV / GitHub links.
- **Profile photo** — replace `assets/img/avatar.png` (keep the same name, or update the
  `<img src="...">`).
- **News** — edit the `<ul>` items in the News section.
- **Publications** — each paper is one `<tr>` + `<script>` block in the Research section.
  Copy a block, give it a unique `id`, and fill in the fields:

  ```js
  createProjectElement(
    id = "myPaper", {
    title: "Paper title",
    paper_url: "https://...",
    authors: "<strong>Zezhou Wang</strong>, Coauthors.",
    conference: "Venue / Year",
    image: "assets/img/thumbnail.png",  // optional
    highlight: true,                     // optional: highlights the title
    others: "<a href='#'>code</a>"       // optional: extra links
  });
  ```

## Preview locally

No tooling needed — just open `index.html` in a browser, or run a tiny static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Credits

- Layout template: [Jon Barron](https://github.com/jonbarron/website)
- Color scheme: Sergey Karayev
