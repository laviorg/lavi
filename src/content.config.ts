import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const EIXOS = [
  "luz",
  "textil",
  "mesa",
  "armario",
  "banho",
  "trabalho",
  "manha",
  "silencio",
] as const;

export const SECOES = ["casa", "corpo", "ritual"] as const;

const diario = defineCollection({
  loader: glob({ base: "./src/content/diario", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    secao: z.enum(SECOES),
    eixo: z.enum(EIXOS),
    hero: z.string(),
    heroAlt: z.string(),
    heroCaption: z.string().optional(),
    ogImage: z.string(),
    selecao: z
      .array(
        z.object({
          title: z.string(),
          query: z.string(),
          reason: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { diario };
