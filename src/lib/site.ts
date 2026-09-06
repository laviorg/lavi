import type { CollectionEntry } from "astro:content";

export const SITE = {
  name: "Lavi",
  url: "https://lavi.org",
  locale: "pt-BR",
  ogLocale: "pt_BR",
  email: "contato@lavi.org",
  tagline: "Curadoria silenciosa de casa, corpo e ritual",
  description:
    "Lavi é uma curadoria silenciosa de casa, corpo e ritual. Ensaios e guias com critério — sem vitrine, sem pressa.",
  descriptionRss:
    "Lavi é uma curadoria silenciosa de casa, corpo e ritual. Ensaios e guias com critério, sem pressa.",
  verification: "ZPdHL66m3LaF6RIkGnpjpjyNAYfISFGFriUwqDYuigM",
  hotmart: "https://pay.hotmart.com/A107491664G",
  year: 2026,
  volume: "Vol. 01 — Setembro",
} as const;

export const SECAO_LABEL = {
  casa: "Casa",
  corpo: "Corpo",
  ritual: "Ritual",
} as const;

export const EIXO_LABEL = {
  luz: "Luz",
  textil: "Têxtil",
  mesa: "Mesa",
  armario: "Armário",
  banho: "Banho",
  trabalho: "Trabalho",
  manha: "Manhã",
  silencio: "Silêncio",
} as const;

export type Secao = keyof typeof SECAO_LABEL;
export type Eixo = keyof typeof EIXO_LABEL;
export type Essay = CollectionEntry<"diario">;

export const PILARES = [
  {
    secao: "casa" as const,
    href: "/casa",
    label: "Casa",
    desc: "Rituais em casa: luz, tecido, objeto, parede — o que permanece quando a tendência sai.",
  },
  {
    secao: "corpo" as const,
    href: "/corpo",
    label: "Corpo",
    desc: "Banho como ritual, óleo, roupão, postura. Cuidado sem espetáculo.",
  },
  {
    secao: "ritual" as const,
    href: "/ritual",
    label: "Ritual",
    desc: "Casa sem telas: a manhã, a mesa, o gesto que se repete sem aplicativo.",
  },
] as const;

export const HUBS = {
  casa: {
    kicker: "Matéria",
    title: "Casa",
    description: PILARES[0].desc,
    intro:
      "A casa não é um cenário. É matéria: a lâmpada, o linho, o gancho, o prato. Rituais em casa começam nesses objetos — o que dura na sala e no quarto, sem figurino de catálogo.",
    ogImage: "/images/ruido-que-a-casa-faz-og.jpg",
    axes: [
      { eixo: "luz" as const, blurb: "Temperatura, sombra e o que a casa diz ao corpo depois do escuro." },
      { eixo: "textil" as const, blurb: "Linho, algodão, peso e o que a pele reconhece na cama e no armário." },
      { eixo: "mesa" as const, blurb: "Peças que voltam todo dia: grés, peso, o jantar sem tablescape." },
      { eixo: "armario" as const, blurb: "Poucas peças, cabides iguais, comprar menos e melhor." },
    ],
  },
  corpo: {
    kicker: "Peso",
    title: "Corpo",
    description: PILARES[1].desc,
    intro:
      "O corpo reconhece temperatura, peso, postura. Banho como ritual, não como espetáculo. Não pedimos disciplina heroica. Pedimos objetos e gestos que não negociam o cansaço.",
    ogImage: "/images/pia-do-banheiro-og.jpg",
    axes: [
      { eixo: "banho" as const, blurb: "Água, óleo, roupão — o intervalo entre o chuveiro e o dia." },
      { eixo: "trabalho" as const, blurb: "Postura e mesa em casa, sem figurino de escritório." },
    ],
  },
  ritual: {
    kicker: "Gesto",
    title: "Ritual",
    description: PILARES[2].desc,
    intro:
      "Ritual, aqui, é o mínimo que se repete numa casa sem telas: água antes da notificação, luz que diminui, sala que não compete. Sem badge, sem sequência.",
    ogImage: "/images/sabado-em-casa-og.jpg",
    axes: [
      { eixo: "manha" as const, blurb: "Luz, água, um gesto. Sem a lista das 5h." },
      { eixo: "silencio" as const, blurb: "Subtrair o que pisca. Devolver a parede." },
    ],
  },
} as const;

export function essayPath(entry: Essay): string {
  return `/diario/${entry.id}`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function readingMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 200));
}

export function countLabel(n: number, singular = "ensaio", plural = "ensaios"): string {
  return n === 1 ? `1 ${singular}` : `${n} ${plural}`;
}

export function sortByDateDesc(entries: Essay[]): Essay[] {
  return [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function nextInSecao(entry: Essay, all: Essay[]): Essay | undefined {
  const peers = sortByDateDesc(all.filter((e) => e.data.secao === entry.data.secao && e.id !== entry.id));
  return peers[0];
}

export function relatedEssays(entry: Essay, all: Essay[], next?: Essay): Essay[] {
  const exclude = new Set([entry.id, next?.id]);
  const same = sortByDateDesc(all.filter((e) => e.data.secao === entry.data.secao && !exclude.has(e.id)));
  const others = sortByDateDesc(all.filter((e) => e.data.secao !== entry.data.secao && !exclude.has(e.id)));
  return [...same, ...others].slice(0, 3);
}

export function foldSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#org`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.descriptionRss,
        email: SITE.email,
        inLanguage: SITE.locale,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/images/marca/logo-quadrado.png`,
          width: 512,
          height: 512,
          caption: SITE.name,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: SITE.locale,
        publisher: { "@id": `${SITE.url}/#org` },
      },
    ],
  };
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  if (!path || path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
