import { defineConfig } from 'tsdown'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  entry: 'src/index.ts',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  target: 'es2015',
  external: ['vue', 'element-plus', '@element-plus/icons-vue', '@vue-cmd/core'],
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})

