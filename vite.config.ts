import { defineConfig } from 'vite';
import path, { join } from 'path';
import vue from '@vitejs/plugin-vue';
import babel from 'vite-plugin-babel';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-pxtorem'; // https://vitejs.dev/config/
import autoprefixer from 'autoprefixer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

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
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  build: { target: 'es2016', sourcemap: true },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://192.168.2.146:8000/',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
        bypass(req, res, options) {
          let reqUrl = options.rewrite!(req.url as string);
          let targetUrl = options.target as string;
          const proxyUrl = new URL(reqUrl, targetUrl)?.href || '';
          console.log('proxyUrl', proxyUrl);
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*'],
        }),
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            'last 4 versions',
          ],
        }),
      ],
    },
  },
});
