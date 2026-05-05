# Cloudflare deploy

Acest repo contine doua site-uri Astro separate.

## pantalonicusnurlung.ro / pantaloni-hub

Cloudflare deploy command:

```bash
npx wrangler deploy
```

Acesta foloseste `wrangler.jsonc`, ruleaza build-ul pentru `pantalonicusnurlung-ro` si publica doar `pantalonicusnurlung-ro/dist`.

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
