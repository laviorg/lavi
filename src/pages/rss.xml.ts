import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE, essayPath, sortByDateDesc } from "../lib/site";

export async function GET() {
  const essays = sortByDateDesc(await getCollection("diario"));
  return rss({
    title: SITE.name,
    description: SITE.descriptionRss,
    site: SITE.url,
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: `<language>pt-BR</language><atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml"/>`,
    items: essays.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: essayPath(entry),
    })),
  });
}
