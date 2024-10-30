<script lang="ts" setup>
const config = useRuntimeConfig()
const { TITLE } = config.public

const { getRoutes } = useRouter()
const list = getRoutes()
</script>

<template>
  <template v-for="{ path, name } in list">
    <NuxtLink class="btn" :key="name" v-if="path !== '/'" :to="path">{{ name }}</NuxtLink>
  </template>
</template>
