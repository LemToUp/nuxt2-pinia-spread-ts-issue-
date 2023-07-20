module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // moduleFileExtensions: [
  //   'js',
  //   'json',
  //   // tell Jest to handle `*.vue` files
  //   'vue',
  // ],
  // transform: {
  //   // process `*.vue` files with `vue-jest`
  //   '.*\\.(vue)$': 'vue-jest',
  // },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/entrypoint.js',
    '^axios$': require.resolve('axios'),
  },
};
