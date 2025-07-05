import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';
import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

export interface LibOptions {
  name: string;
  entry?: string;
  fileName?: string | ((format: string) => string);
  formats?: ('es' | 'cjs')[];
  external?: string[];
  globals?: Record<string, string>;
  plugins?: any[];
}

export function createBaseConfig(options: LibOptions): UserConfig {
  const {
    name,
    entry = 'src/index.ts',
    fileName = (format) => `index.${format}.js`,
    formats = ['es', 'cjs'],
    external = ['vue'],
    globals = { vue: 'Vue' },
    plugins = []
  } = options;

  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      dts({
        insertTypesEntry: true,
        cleanVueFileName: true,
      }),
      ...plugins,
    ],
    build: {
      minify: 'esbuild',
      target: 'es2015',
      sourcemap: false,
      lib: {
        entry: resolve(process.cwd(), entry),
        name,
        fileName,
        formats,
      },
      rollupOptions: {
        external,
        output: {
          globals,
          manualChunks: undefined,
          inlineDynamicImports: true,
          preserveModules: false,
          compact: true,
          minifyInternalExports: true
        },
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false
        }
      },
      commonjsOptions: {
        sourceMap: false
      },
      chunkSizeWarningLimit: 1000,
      assetsInlineLimit: 4096
    }
  });
}

export function createConfig(baseOptions: LibOptions, extraConfig?: UserConfig): UserConfig {
  const baseConfig = createBaseConfig(baseOptions);
  
  if (!extraConfig) {
    return baseConfig;
  }
  
  return mergeConfig(baseConfig, extraConfig);
} 
