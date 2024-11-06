import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      apiMainUrl: 'https://main.thevisual-clinic.com',
      apiIdpUrl: 'https://idp.thevisual-clinic.com',
      apiStorageUrl: 'https://storage.thevisual-clinic.com',
    },
  },
  modules: [
    'nuxt-lucide-icons',
    '@hypernym/nuxt-anime',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
