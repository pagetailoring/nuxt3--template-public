<script lang="ts" setup>
const { getRoutes } = useRouter()
const list = getRoutes()
</script>

<template>
  <template v-for="{ path, name } in list">
    <UiLink v-if="path !== '/'" :key="name" :to="path">{{ name }}</UiLink>
  </template>
</template>
