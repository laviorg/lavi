import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE, essayPath, sortByDateDesc, absoluteUrl } from "../lib/site";

function isoDay(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const GET: APIRoute = async () => {
  const essays = sortByDateDesc(await getCollection("diario"));
  const latest = essays[0]?.data.date ?? new Date();

  const staticPages = [
    { loc: SITE.url, lastmod: isoDay(latest) },
    { loc: `${SITE.url}/casa`, lastmod: isoDay(essays.find((e) => e.data.secao === "casa")?.data.date ?? latest) },
    { loc: `${SITE.url}/corpo`, lastmod: isoDay(essays.find((e) => e.data.secao === "corpo")?.data.date ?? latest) },
    { loc: `${SITE.url}/ritual`, lastmod: isoDay(essays.find((e) => e.data.secao === "ritual")?.data.date ?? latest) },
    { loc: `${SITE.url}/diario`, lastmod: isoDay(latest) },
    { loc: `${SITE.url}/etica`, lastmod: isoDay(latest) },
    { loc: `${SITE.url}/guia`, lastmod: isoDay(latest) },
    { loc: `${SITE.url}/para-marcas`, lastmod: isoDay(latest) },
    { loc: `${SITE.url}/selecao`, lastmod: isoDay(latest) },
    { loc: `${SITE.url}/sobre`, lastmod: isoDay(latest) },
  ];

  const urls = [
    ...staticPages.map(
      (p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
  </url>`,
    ),
    ...essays.map((entry) => {
      const loc = absoluteUrl(essayPath(entry));
      const img = absoluteUrl(entry.data.hero);
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${isoDay(entry.data.date)}</lastmod>
    <image:image>
      <image:loc>${esc(img)}</image:loc>
      <image:caption>${esc(entry.data.heroAlt)}</image:caption>
    </image:image>
  </url>`;
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
