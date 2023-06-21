import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts(),
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/usePrint/usePrint.ts'),
      name: 'usePrint',
      fileName: 'usePrint',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
