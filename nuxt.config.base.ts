import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  /**
   * Some modules are only required during development and build time.
   * Using buildModules helps to make productionstartup faster
   * and also significantly decreasing node_modules size for production deployments.
   *
   * See: https://nuxtjs.org/guides/configuration-glossary/configuration-modules#buildmodules
   */
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    ['@pinia/nuxt', { disableVuex: false }],
  ],


  /**
   * Define all default meta for your application
   *
   * See: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
   */
  head: {
    title: 'ShapeDiver',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/app/favicon.ico' }],
  },

  /**
   * Modules are Nuxt.js extensions which can extend it's core functionality
   * and add endless integrations.
   *
   * See: https://nuxtjs.org/guides/configuration-glossary/configuration-modules
   */
  modules: [
    '@pinia/nuxt',
  ],
};

export default config;

