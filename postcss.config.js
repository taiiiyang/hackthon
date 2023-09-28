export const plugins = {
  'postcss-px-to-viewport': {
    viewportWidth: 750,
    unitToConvert: 'px',
    selectorBlackList: ['.ignore', 'van'],
  },
  'postcss-pxtorem': {
    rootValue: 37.5,
    propList: ['*'],
  },
  autoprefixer: {
    browsers: ['last 2 version'],
  },
};
