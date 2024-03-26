import { defineConfig } from 'astro/config';
import markdownIntegration from '@astropub/md';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [markdownIntegration(), tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  },
  vite: {
    define: {
      'process.env.STRAPI_URL': JSON.stringify(process.env.STRAPI_URL),
      'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY)
    }
  },
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  image:{
    domains: ['strapi.juanjodevs.com']
  }
});