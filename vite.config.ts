import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // dts(),
    vue(),
    ElementPlus()
  ],
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/usePrint/usePrint.ts'),
  //     name: 'usePrint',
  //     fileName: 'usePrint',
  //     formats: ['es']
  //   },
  //   rollupOptions: {
  //     external: ['vue']
  //   }
  // }
})
