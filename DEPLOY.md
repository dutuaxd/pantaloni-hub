# Cloudflare deploy

Acest repo contine doua site-uri Astro separate.

## pantalonicusnurlung.ro / pantaloni-hub

Cloudflare deploy command:

```bash
npx wrangler deploy
```

Acesta foloseste `wrangler.jsonc`, ruleaza build-ul pentru `pantalonicusnurlung-ro` si publica doar `pantalonicusnurlung-ro/dist`.

## Programare articole SEO

Articolele programate sunt in `pantalonicusnurlung-ro/src/data/scheduledBlogPosts.ts`.

Build-ul publica doar articolele cu `date` mai mica sau egala cu data curenta din fusul `Europe/Bucharest`. De exemplu:

```bash
PUBLISH_DATE=2026-05-15 npm --prefix pantalonicusnurlung-ro run build
```

Pentru preview local al tuturor articolelor viitoare:

```bash
SHOW_FUTURE_POSTS=true npm --prefix pantalonicusnurlung-ro run build
```

Workflow-ul GitHub `.github/workflows/publish-scheduled-posts.yml` ruleaza zilnic si face deploy cu Wrangler. Pentru el trebuie setate in GitHub repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Astfel, pe 15 mai intra primele 3 articole, pe 16 mai sunt 6 publicate total, si tot asa pana la 90. Daca faci un singur deploy cu `SHOW_FUTURE_POSTS=true`, toate articolele devin publice odata, deci foloseste asta doar pentru preview sau test.

## atelieraxd.ro, doar daca mai este nevoie

Cloudflare deploy command:

```bash
npx wrangler deploy -c wrangler.atelieraxd.jsonc
```

Acesta ruleaza build-ul pentru `atelieraxd-ro` si publica doar `atelieraxd-ro/dist`.

## Cloudflare Pages alternativ

Pentru Pages clasic, creeaza doua proiecte separate:

- `pantalonicusnurlung.ro`: root directory `pantalonicusnurlung-ro`, build command `npm ci && npm run build`, output `dist`
- `atelieraxd.ro`: root directory `atelieraxd-ro`, build command `npm ci && npm run build`, output `dist`

Nu publica niciodata directorul radacina `.` ca asset directory, pentru ca include `.git`.
