<template>
  <div id="__page">
    <nav>
      <h1 v-if="isHomePage" class="just like btn">{{ TITLE }}</h1>
      <NuxtLink v-else class="home btn" to="/">{{ TITLE }}</NuxtLink>
      <LazyTheNavigationList v-if="!isWaiting" />
    </nav>

    <NuxtPage class="main" />

    <Transition>
      <LazyTheFooter v-if="!isWaiting" />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const isWaiting = useLazyLoadComponents()

const config = useRuntimeConfig()
const { TITLE } = config.public

const route = useRoute()
const isHomePage = computed(() => {
  return route.fullPath === '/'
})
</script>
