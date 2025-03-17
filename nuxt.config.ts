function getNowDate() {
  const now = new Date()
  return now.toISOString().split('T')[0]
}

function getModules() {
  const modules = [
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/html-validator'
  ]
  const noInDevModules = ['nuxt-payload-analyzer', 'nuxt-capo']

  if (process.env.useNuxtFonts === 'true') modules.push('@nuxt/fonts')

  return process.env.NODE_ENV === 'development' ? modules : modules.concat(noInDevModules)
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  css: ['~/assets/fonts/_syne.scss', '~/assets/styles/global.scss'],
  future: { compatibilityVersion: 4 },

  // https://nuxt.com/docs/getting-started/styling#preprocessor-workers-experimental
  vite: {
    css: {
      preprocessorMaxWorkers: true // number of CPUs minus 1
    }
  },

  modules: getModules(),

  typescript: {
    typeCheck: true
  },

  site: {
    name: process.env.TITLE,
    url: process.env.DOMAIN,
    trailingSlash: true
  },

  // https://nuxtseo.com/docs/sitemap/guides/loc-data
  sitemap: {
    urls: [
      { loc: '/', priority: 0.9 },
      { loc: '/contact', priority: 1 }
    ],
    // https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#additional-notes-about-xml-sitemaps
    defaults: { lastmod: getNowDate(), priority: 0.5, changefreq: 'weekly' }
  },

  // https://nuxt.com/docs/api/composables/use-runtime-config
  runtimeConfig: {
    public: {
      TITLE: process.env.TITLE,
      DOMAIN: process.env.DOMAIN
    }
  },

  app: {
    // https://nuxt.com/docs/getting-started/transitions#page-transitions
    pageTransition: { name: 'page', mode: 'out-in' },

    // https://nuxt.com/docs/api/nuxt-config#head
    head: {
      htmlAttrs: { lang: 'en', class: 'dark' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'description', content: process.env.DESCRIPTION }
      ]
    }
  }
})
