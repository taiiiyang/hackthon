export const plugins = {
  'postcss-px-to-viewport': {
    viewportWidth: 750,
    unitToConvert: 'px',
    selectorBlackList: ['.ignore', 'van'],
  },
};
