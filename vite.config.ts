import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin(), minifyHtml()],
})
