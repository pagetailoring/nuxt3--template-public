<script lang="ts" setup>
const { getRoutes } = useRouter()
</script>

<template>
  <template v-for="{ path, name } in getRoutes()">
    <UiLink v-if="path !== '/'" :key="name" class="auto" :to="path">{{ name }}</UiLink>
  </template>
</template>
