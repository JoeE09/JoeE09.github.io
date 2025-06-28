import { defineConfig } from 'vite'
import yaml from '@rollup/plugin-yaml';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx(),
    yaml(),
    {
      name: 'copy-index-to-404',
      generateBundle(_, bundle) {
        if ('index.html' in bundle) {
          bundle['404.html'] = { ...bundle['index.html'] };
        }
      },
    },
  ],
  base: "/", // Set base path for GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
