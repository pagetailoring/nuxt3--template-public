// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/styles/global.scss'],

  modules:
    process.env.NODE_ENV === 'development'
      ? ['@nuxt/eslint', '@nuxtjs/html-validator', 'nuxt-payload-analyzer', '@vueuse/nuxt', '@nuxt/fonts']
      : [
          '@nuxt/eslint',
          '@nuxtjs/html-validator',
          'nuxt-payload-analyzer',
          '@vueuse/nuxt',
          '@nuxt/fonts',

          'nuxt-capo',
          '@nuxtjs/sitemap',
          '@nuxtjs/robots'
        ],
  // https://nuxt.com/modules/robots
  // https://nuxt.com/modules/sitemap
  // https://nuxt.com/modules/vueuse
  // https://vueuse.org/functions.html
  // https://nuxtseo.com/docs/nuxt-seo/getting-started/introduction

  // https://nuxt.com/modules/sitemap
  // https://nuxtseo.com/sitemap/getting-started/installation
  // for @nuxtjs/sitemap
  site: {
    url: process.env.DOMAIN,
    trailingSlash: true
  },

  // https://nuxt.com/docs/api/composables/use-runtime-config
  runtimeConfig: {
    public: {
      TITLE: process.env.TITLE
    }
  },

  app: {
    // https://nuxt.com/docs/getting-started/transitions#page-transitions
    pageTransition: { name: 'page', mode: 'out-in' },

    // https://nuxt.com/docs/api/nuxt-config#head
    head: {
      htmlAttrs: { lang: 'en', class: 'dark' },
      title: process.env.TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'color-scheme', content: 'dark light' },
        { name: 'description', content: process.env.DESCRIPTION }
      ],
      link: [{ rel: 'canonical', href: process.env.DOMAIN }]
    }
  }
})
