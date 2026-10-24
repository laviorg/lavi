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
  volume02: "Vol. 02 — Outubro–Dezembro",
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

export const COMODO_IDS = ["quarto", "banheiro", "cozinha", "lavanderia", "sala"] as const;
export type Comodo = (typeof COMODO_IDS)[number];

/** Room hubs under /casa/{comodo} — curated essay ids + related eixos. */
export const COMODOS: Record<
  Comodo,
  {
    label: string;
    href: string;
    blurb: string;
    intro: string;
    ogEssay: string;
    essayIds: readonly string[];
    eixos: readonly Eixo[];
  }
> = {
  quarto: {
    label: "Quarto",
    href: "/casa/quarto",
    blurb: "Luz que corta, tecido que respira, a noite sem retângulo.",
    intro:
      "O quarto brasileiro quase nunca foi desenhado para dormir. Foi desenhado para caber. Aqui reunimos o que devolve ao cômodo a hora da noite: cortina, lâmpada quente, linho, menos estímulo na cabeceira.",
    ogEssay: "quarto-sono",
    essayIds: [
      "quarto-sono",
      "cortina-que-corta-o-dia",
      "cama-linho-vs-algodao",
      "luz-nao-habito",
      "noite-sem-retangulo",
      "travesseiro-que-nao-anuncia",
      "mesa-de-cabeceira-um-plano",
      "ventilador-que-nao-vira-movel",
      "chao-descalco",
    ],
    eixos: ["luz", "textil", "silencio"],
  },
  banheiro: {
    label: "Banheiro",
    href: "/casa/banheiro",
    blurb: "Pia que pede pouco, óleo, roupão — banho sem spa de prateleira.",
    intro:
      "O banheiro de apartamento não precisa de hotel boutique. Precisa de superfície, um sabão, um roupão com peso certo. Corpo soft sem medicalizar: o intervalo entre a água e a roupa.",
    ogEssay: "pia-do-banheiro",
    essayIds: ["pia-do-banheiro", "oleo-corporal", "o-peso-de-um-bom-roupao", "agua-do-banho-temperatura"],
    eixos: ["banho"],
  },
  cozinha: {
    label: "Cozinha",
    href: "/casa/cozinha",
    blurb: "Bancada que pede pouco, grés na mesa, o jantar sem tablescape.",
    intro:
      "A cozinha quieta não é open concept de revista. É bancada que aguenta o dia, uma tábua, uma tigela de grés. Menos aparelho à vista. Mais uso.",
    ogEssay: "bancada-que-pede-pouco",
    essayIds: [
      "bancada-que-pede-pouco",
      "ceramica-na-mesa",
      "mesa-que-nao-recebe-o-celular",
      "quinze-minutos-na-bancada",
      "fechar-a-cozinha-a-noite",
      "natal-em-casa-sem-roteiro",
    ],
    eixos: ["mesa", "silencio", "manha"],
  },
  lavanderia: {
    label: "Lavanderia",
    href: "/casa/lavanderia",
    blurb: "Cesto com tampa, varal que some, o corredor de volta a ser passagem.",
    intro:
      "Em apartamento brasileiro a lavanderia quase nunca é cômodo — é vão. Aqui o critério é sumir do corredor: tampa opaca, varal que dobra, um de cada produto, sem organizer de vitrine.",
    ogEssay: "lavanderia-que-some-do-corredor",
    essayIds: [
      "lavanderia-que-some-do-corredor",
      "cesto-que-segura-a-casa",
      "armario-pequeno-e-caro",
      "pia-do-banheiro",
    ],
    eixos: ["armario", "banho"],
  },
  sala: {
    label: "Sala",
    href: "/casa/sala",
    blurb: "Uma manta, um cesto, silêncio visual — a sala sem tablescape.",
    intro:
      "A sala brasileira acumula throws, controles e telas. Aqui o critério é subtração: uma manta, um cesto opaco, menos estímulo — o mesmo tom do silêncio na sala e do Vol. 02 no calor.",
    ogEssay: "manta-que-a-sala-pede",
    essayIds: [
      "silencio-na-sala",
      "manta-que-a-sala-pede",
      "cesto-que-segura-a-casa",
      "ruido-que-a-casa-faz",
      "vol-02-casa-quando-o-calor-sobe",
      "ventilador-que-nao-vira-movel",
      "parede-que-nao-pede-quadro",
      "natal-em-casa-sem-roteiro",
    ],
    eixos: ["silencio", "textil", "luz"],
  },
} as const;


/** Soft-body paths under /corpo/{hub} — discoverable, no clinical wellness. */
export const CORPO_SOFT_IDS = ["banho", "sono"] as const;
export type CorpoSoft = (typeof CORPO_SOFT_IDS)[number];

export const CORPO_SOFT: Record<
  CorpoSoft,
  {
    label: string;
    href: string;
    blurb: string;
    intro: string;
    ogEssay: string;
    essayIds: readonly string[];
    eixos: readonly Eixo[];
  }
> = {
  banho: {
    label: "Banho",
    href: "/corpo/banho",
    blurb: "Temperatura, óleo, roupão — o intervalo sem spa de prateleira.",
    intro:
      "Banho como ritual doméstico: água na temperatura certa, um sabonete, uma toalha, o óleo depois. Corpo soft sem clínica e sem kit de oito steps.",
    ogEssay: "agua-do-banho-temperatura",
    essayIds: [
      "agua-do-banho-temperatura",
      "oleo-corporal",
      "o-peso-de-um-bom-roupao",
      "pia-do-banheiro",
    ],
    eixos: ["banho"],
  },
  sono: {
    label: "Sono e chão",
    href: "/corpo/sono",
    blurb: "Travesseiro, quarto, tapete baixo — o corpo na noite sem placar.",
    intro:
      "O corpo soft também dorme e pisa. Aqui: travesseiro sem anúncio, quarto com menos estímulo, o chão descalço — movimento leve no quarteirão quando couber.",
    ogEssay: "travesseiro-que-nao-anuncia",
    essayIds: [
      "travesseiro-que-nao-anuncia",
      "quarto-sono",
      "noite-sem-retangulo",
      "chao-descalco",
      "caminhada-no-quarteirao",
      "mesa-de-cabeceira-um-plano",
    ],
    eixos: ["textil", "luz", "manha"],
  },
} as const;

export function essaysForCorpoSoft(hub: CorpoSoft, all: Essay[]): Essay[] {
  const ids = new Set(CORPO_SOFT[hub].essayIds);
  return sortByDateDesc(all.filter((e) => ids.has(e.id)));
}

export function comodoPath(comodo: Comodo): string {
  return COMODOS[comodo].href;
}

export function essaysForComodo(comodo: Comodo, all: Essay[]): Essay[] {
  const ids = new Set(COMODOS[comodo].essayIds);
  return sortByDateDesc(all.filter((e) => ids.has(e.id)));
}

export function pecasForComodo(comodo: Comodo, all: Essay[], limit = 6) {
  const essays = essaysForComodo(comodo, all);
  const out: {
    title: string;
    query: string;
    reason: string;
    essayTitle: string;
    essayHref: string;
  }[] = [];
  const seen = new Set<string>();
  for (const entry of essays) {
    for (const item of entry.data.selecao ?? []) {
      const key = item.query.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({
        title: item.title,
        query: item.query,
        reason: item.reason,
        essayTitle: entry.data.title,
        essayHref: essayPath(entry),
      });
      if (out.length >= limit) return out;
    }
  }
  return out;
}

export function allSelecaoItems(essays: Essay[]) {
  const out: {
    title: string;
    query: string;
    reason: string;
    essayTitle: string;
    essayHref: string;
    secao: Secao;
  }[] = [];
  const seen = new Set<string>();
  for (const entry of sortByDateDesc(essays)) {
    for (const item of entry.data.selecao ?? []) {
      const key = item.query.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({
        title: item.title,
        query: item.query,
        reason: item.reason,
        essayTitle: entry.data.title,
        essayHref: essayPath(entry),
        secao: entry.data.secao,
      });
    }
  }
  return out;
}


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

/** Quiet home strip: one peça per essay, newest first. */
export function selecaoStripItems(essays: Essay[], limit = 6) {
  const items: {
    title: string;
    query: string;
    reason: string;
    essayTitle: string;
    essayHref: string;
  }[] = [];
  const seen = new Set<string>();
  for (const entry of sortByDateDesc(essays)) {
    const first = (entry.data.selecao ?? []).find((item) => {
      const key = item.query.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    if (!first) continue;
    items.push({
      title: first.title,
      query: first.query,
      reason: first.reason,
      essayTitle: entry.data.title,
      essayHref: essayPath(entry),
    });
    if (items.length >= limit) return items;
  }
  return items;
}

/** Peças from same eixo (then secao), excluding the current essay. */
export function relatedPecas(entry: Essay, all: Essay[], limit = 3) {
  const ownQueries = new Set((entry.data.selecao ?? []).map((i) => i.query.toLowerCase()));
  const fromEixo = sortByDateDesc(all.filter((e) => e.id !== entry.id && e.data.eixo === entry.data.eixo));
  const fromSecao = sortByDateDesc(
    all.filter((e) => e.id !== entry.id && e.data.secao === entry.data.secao && e.data.eixo !== entry.data.eixo),
  );
  const pool = [...fromEixo, ...fromSecao];
  const out: {
    title: string;
    query: string;
    reason: string;
    essayTitle: string;
    essayHref: string;
  }[] = [];
  const seen = new Set<string>();
  for (const e of pool) {
    for (const item of e.data.selecao ?? []) {
      const key = item.query.toLowerCase();
      if (ownQueries.has(key) || seen.has(key)) continue;
      seen.add(key);
      out.push({
        title: item.title,
        query: item.query,
        reason: item.reason,
        essayTitle: e.data.title,
        essayHref: essayPath(e),
      });
      if (out.length >= limit) return out;
    }
  }
  return out;
}
