import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VConsole from 'vconsole';
import { Notify, Loading, Dialog } from 'vant';
import 'virtual:svg-icons-register';

import router from '@/router';
import 'vant/es/notify/style';

import App from './App.vue';

import 'vant/lib/index.css';
import '@/styles/base.css';
import 'lego-photo-preview/photopreview.min.css';

import { setFontSize } from '@/utils';

const bootstrap = () => {
  const pinia = createPinia();
  createApp(App)
    .use(pinia)
    .use(router)
    .use(Notify)
    .use(Loading)
    .use(Dialog)
    .mount('#app');

  if (process.env.NODE_ENV != 'prod') {
    // 开启vConsole
    const vConsole = new VConsole();
  }

  // 动态设定根元素 font-size
  setFontSize();
};

bootstrap();
