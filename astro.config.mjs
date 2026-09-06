import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://lavi.org",
  trailingSlash: "never",
  output: "static",
  integrations: [mdx()],
});
