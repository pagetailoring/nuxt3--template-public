// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/html-validator',
    'nuxt-payload-analyzer',
    'nuxt-capo',
    '@nuxtjs/sitemap'
  ],

  // https://nuxt.com/modules/sitemap
  // https://nuxtseo.com/sitemap/getting-started/installation
  // for @nuxtjs/sitemap
  site: {
    url: process.env.DOMAIN,
    trailingSlash: true
  }
})
