import { defineConfig } from 'astro/config';
import markdownIntegration from '@astropub/md';
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [markdownIntegration(), tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  },
  output: "server",
  adapter: cloudflare(),
  vite: {
    define: {
      'process.env.STRAPI_URL': JSON.stringify(process.env.STRAPI_URL)
    }
  }
});