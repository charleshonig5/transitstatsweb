# Resource articles

How the articles under `/[slug]` are built, so new ones and refreshes stay
consistent. The existing articles in `src/data/articles/` are the reference
implementation.

## Adding an article

1. **Content** - `src/data/articles/<slug>.tsx`, a component returning the
   article body. Use only the shared pieces the other articles use:
   `StatGrid` (four stat tiles), `HorizontalBarChart` (top-N lists, full
   counts like `2,664,003`, a `valueSuffix` only for `%`/`K`/`M` series),
   `DonutChart` (train vs. bus), plain `<h2>`/`<h3>`/`<p>`/`<ul>`/`<ol>`
   styled by `.prose` in `globals.css`. No new components or styles.
2. **Register it** - import it in `src/app/[slug]/page.tsx` and add it to
   `articleContent`.
3. **Metadata** - add an entry to `src/data/posts.ts` (newest first):
   `title` (sentence case, under ~45 characters so it fits with
   " | Transit Stats"), `description` (140-155 characters, the answer and
   the main search phrase), `imageAlt` (describes what is actually in the
   photo), `date`/`displayDate` (first publish), `updated`/`displayUpdated`
   (last substantive update), `author`, and 3-5 `faqs` (plain text; they
   render on the page and in the FAQPage JSON-LD).
4. **Cover** - one photo per article, never reused across articles.
   Landscape, cropped to 16:10:
   - `public/images/articles/<slug>.png` at 2880x1800 (the page; next/image
     resizes it)
   - `public/images/articles/social/<slug>.jpg` at 1200x750, JPEG quality ~82
     (share cards and structured data; keep under ~500 KB)
   Muted, natural-light street or station photography of the CTA, in family
   with the existing covers. Pexels photos are free for commercial use.
5. **Links** - link to 2-3 related articles from the body, add a link back
   from at least one existing article, and add the article to the footer's
   Articles column (`src/components/Footer.tsx`). The sitemap, Resources
   page, share tags, Article/Breadcrumb/FAQPage JSON-LD and the FAQ cards
   come from `posts.ts` automatically.

## Writing

- Answer first: the opening paragraph states the main finding with numbers.
- Sentence-case headings that match how people search ("The 10 busiest CTA
  L stations in 2026").
- Every number is computed from its source; every non-data fact is checked
  on a live page (transitchicago.com first). End with a "Sources" list for
  outside data.
- Say what a metric measures when it could be misread (station entries are
  not total rail rides).
- Read the rendered page top to bottom, then run the humanizer pass: no
  filler, "not just X", slogan endings, or puffery.

## Data sources

- City of Chicago open data (Socrata): `6iiy-9s97` CTA daily boarding
  totals, `5neh-572f` L station entries, `jyb9-n7fm` bus route totals.
  The CTA restated 2025 ridership in March 2026; compare 2025+ figures only
  with other 2025+ figures.
- Transit Stats ride data (the app's production database) - read-only, and
  only with the owner's approval each time.

## Refreshing an article

Keep the slug, title and structure (they carry the ranking), update the
numbers and anything they change in the text, set `updated`/
`displayUpdated` to the refresh date (the byline, `dateModified`,
`og:modified_time` and the sitemap all read it), and re-run the checks.

## Checks before publishing

- `npm run lint` and `npm run build`
- Rendered page: one H1, title/description lengths, `og:type` article,
  share image 1200x750, FAQ JSON-LD matches the visible answers
- Phone (375px) and desktop: no sideways scroll, chart labels don't wrap
- Local preview gotcha: after replacing an image at the same path, clear
  `.next/dev/cache/images` (and `.next/cache/images`) or the dev server
  keeps serving the old one.
