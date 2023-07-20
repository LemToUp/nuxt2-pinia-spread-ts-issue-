module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'airbnb-base',
  ],

  plugins: [
    'vue',
    '@typescript-eslint',
  ],

  rules: {
    'linebreak-style': 0,
    'no-plusplus': 'off',
    'no-multiple-empty-lines': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'max-len': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'vue/no-v-html': 'off',
    'arrow-body-style': 'off',
    camelcase: 'off',
    'no-prototype-builtins': 'off',
    'object-curly-newline': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-useless-escape': 'off',
    'class-methods-use-this': 'off',
    'operator-assignment': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },

  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue', '.ts'],
      },
    },
  },
};
