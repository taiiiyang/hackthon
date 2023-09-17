import { defineConfig } from 'vite';
import { join } from 'path';
import vue from '@vitejs/plugin-vue';
import babel from 'vite-plugin-babel';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    babel(),
    Components({
      dirs: ['src/components', 'src/views'],
      resolvers: [VantResolver()],
      extensions: ['vue'],
      dts: 'src/components.d.ts',
      deep: true,
    }),
  ],
  build: { target: 'es2016', sourcemap: true },
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
    hmr: true,
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
});
