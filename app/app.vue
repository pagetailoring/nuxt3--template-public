<script setup lang="ts">
import bold from '~/assets/fonts/s800.woff2'
import text from '~/assets/fonts/s400.woff2'
const crossorigin = 'anonymous'

const route = useRoute()
const { TITLE, DOMAIN, isHomePage } = useAppState()

useHead(() => ({
  title: () => (isHomePage.value ? TITLE : `${String(route.name)} | ${TITLE}`),
  link: [
    { rel: 'canonical', href: String(`${DOMAIN + route.path}${!isHomePage.value ? '/' : ''}`) },
    { rel: 'preload', href: bold, crossorigin, as: 'font', type: 'font/woff2' },
    { rel: 'preload', href: text, crossorigin, as: 'font', type: 'font/woff2' }
  ]
}))
</script>

<template>
  <div id="__page">
    <nav>
      <TheHomeButton />
      <LazyTheNavigation />
    </nav>

    <NuxtPage />

    <LazyTheFooter />
  </div>
</template>
