# Lavi

Revista estática em [Astro](https://astro.build) + MDX. Curadoria silenciosa de casa, corpo e ritual. Site canónico: [lavi.org](https://lavi.org).

Saída estática (`dist/`), `trailingSlash: "never"`. Tipografia: Newsreader + Source Sans 3. A variável `--sans` em `src/styles/global.css` **começa por `"Source Sans 3"`** — não por `Source Sans 3 Variable`, mesmo com `@fontsource-variable/source-sans-3` importado.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

```bash
npm run build
npm run preview
```

`npm run build` gera `dist/` (HTML, RSS, sitemap, `_headers`, `_redirects`).

Variável opcional: `AMAZON_ASSOCIATE_TAG` (predefinição `laviorg-20`). Ver `.env.example`.

## Cloud Agent — publicar

Não alterar DNS. O apex `lavi.org` já aponta para o projeto Cloudflare Pages `lavi`.

1. Confirmar o working tree em `main`.
2. `npm install` e `npm run build` (tem de concluir sem erro).
3. Publicar **só** com Wrangler, no projeto existente:

```bash
npx wrangler pages deploy dist --project-name=lavi
```

Não criar outro projeto Pages. Não mudar o domínio, o CNAME nem o nameserver.

O token Wrangler pode falhar nesta máquina; o código no repositório é a fonte de verdade. O deploy fica para um run com credenciais válidas.

## Conteúdo

- Ensaios: `src/content/diario/*.mdx` (eixos: `luz|textil|mesa|armario|banho|trabalho|manha|silencio`)
- Imagens: `public/images/` — herói 1600×1066, `-800` / `-1200`, OG 1200×630 (`*-og.jpg`)
- Páginas: `/` `/casa` `/corpo` `/ritual` `/diario` `/selecao` `/guia` `/para-marcas` `/etica` `/sobre` `/buscar` `/obrigado` `/rss.xml` sitemap
- Guia: Hotmart `https://pay.hotmart.com/A107491664G`
- Headers/redirects: `public/_headers`, `public/_redirects`
