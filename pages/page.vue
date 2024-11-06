<script lang="ts" setup>
onMounted(() => {
  const { triggerLazyLoadingElements } = useAppBasics()
  triggerLazyLoadingElements()
})
</script>

<template>
  <main>
    <h1>more info</h1>

    <ul>
      <li>nuxt version 3.14</li>
    </ul>

    <h2>development dependencies for optimization & coding helpers</h2>
    <ul>
      <li>eslint</li>
      <li>prettier</li>
      <li>html-validator</li>
      <li>nuxt-payload-analyzer</li>
      <li>typescript with vue-tsc</li>
      <li>nuxt-capo</li>
    </ul>

    <h2>SEO tools</h2>
    <ul>
      <li>@nuxtjs/robots</li>
      <li>@nuxtjs/sitemap</li>
    </ul>
  </main>
</template>
