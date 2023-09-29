/**
 * 切换环境配置
 * @param config 配置
 * @param injectConfig 外部注入的配置
 * @returns config
 */
export const SWITCH_CONFIG = (
  config: GConfigGather,
  injectConfig: GConfigGather,
): GConfig => {
  const env = process.env.NODE_ENV as string;
  if (env === 'prod') {
    return { ...config[env], ...injectConfig };
  }
  return config['dev'];
};

/**
 * 动态设定根元素 fontsize
 */
export const setFontSize = () => {
  const docEl = document.documentElement;
  const resizeEvt =
    'orientationonchange' in window ? 'orientationonchange' : 'resize';
  const recalc = () => {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = `${100 * (clientWidth / 750)}px`;
  };
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
};
