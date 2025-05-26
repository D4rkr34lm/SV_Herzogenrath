import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const news = defineCollection({
  type: "page",
  source: "news/*.md",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
  }),
});

const teams = defineCollection({
  type: "data",
  source: "teams/*.json",
  schema: z.object({
    type: z.string(),
    name: z.string(),
    season: z.string(),
    class: z.string(),
    members: z.array(z.object({ num: z.number(), name: z.string() })),
    leader: z.object({
      name: z.string(),
      address: z.string(),
      mobileNumber: z.string(),
      email: z.string(),
    }),
  }),
});

export default defineContentConfig({
  collections: {
    news,
    teams,
  },
});
