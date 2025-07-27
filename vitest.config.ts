// vitest.config.ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  define: {
    PROD: JSON.stringify(false),
    DEV: JSON.stringify(true),
    TEST: JSON.stringify(false),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/true/coverage/**',
      '**/coverage/**',
    ],
    setupFiles: [resolve(__dirname, './vitest.setup.ts')],
  },
})
