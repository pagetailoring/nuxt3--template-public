<template>
  <div id="__page">
    <NuxtPage class="main" />

    <LazyTheFooter />

    <nav>
      <h1 v-if="isHomePage" class="just like btn">{{ TITLE }}</h1>
      <NuxtLink v-else class="home btn" to="/">{{ TITLE }}</NuxtLink>
      <LazyTheNavigation />
    </nav>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const { TITLE } = config.public

const { fullPath } = useRoute()
const isHomePage = computed(() => {
  return fullPath === '/'
})
</script>
