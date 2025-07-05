import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueCmdHooks',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['@vue-cmd/core'],
      output: {
        globals: {},
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
}); 
