import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),
  kit: {
    alias: {
      "@/*": "./path/to/lib/*",
    },
  },
}
