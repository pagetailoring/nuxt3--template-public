<script lang="ts" setup>
const { getRoutes } = useRouter()
const list = getRoutes()
</script>

<template>
  <template v-for="{ path, name } in list">
    <NuxtLink v-if="path !== '/'" :key="name" class="btn" :to="path">{{ name }}</NuxtLink>
  </template>
  <UiColorModeButton />
</template>
