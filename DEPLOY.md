# Cloudflare deploy

Acest repo contine doua site-uri Astro separate.

## atelieraxd.ro

Cloudflare deploy command:

```bash
npx wrangler deploy
```

Acesta foloseste `wrangler.jsonc`, ruleaza build-ul pentru `atelieraxd-ro` si publica doar `atelieraxd-ro/dist`.

## pantalonicusnurlung.ro

Cloudflare deploy command:

```bash
npx wrangler deploy -c wrangler.pantalonicusnurlung.jsonc
```

Acesta ruleaza build-ul pentru `pantalonicusnurlung-ro` si publica doar `pantalonicusnurlung-ro/dist`.

## Cloudflare Pages alternativ

Pentru Pages clasic, creeaza doua proiecte separate:

- `atelieraxd.ro`: root directory `atelieraxd-ro`, build command `npm ci && npm run build`, output `dist`
- `pantalonicusnurlung.ro`: root directory `pantalonicusnurlung-ro`, build command `npm ci && npm run build`, output `dist`

Nu publica niciodata directorul radacina `.` ca asset directory, pentru ca include `.git`.
