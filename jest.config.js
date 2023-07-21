module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
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
