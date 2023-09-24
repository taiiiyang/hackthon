import { SWITCH_CONFIG } from '@/utils';

// eslint-disable-next-line camelcase
const g_config = (window as any).g_config;

const config = {
  dev: {
    urlPrefix: 'http://192.168.0.58:8080',
    assetsPrefix: '',
    platformKey: '',
    ssoBaseUrl: '',
  },
  prod: {
    urlPrefix: '',
    assetsPrefix: '',
    platformKey: '',
    ssoBaseUrl: '',
  },
};

export default SWITCH_CONFIG(config, g_config);
