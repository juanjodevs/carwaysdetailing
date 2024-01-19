import { defineConfig } from 'astro/config';
import markdownIntegration from '@astropub/md'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    markdownIntegration(),
    tailwind()
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});