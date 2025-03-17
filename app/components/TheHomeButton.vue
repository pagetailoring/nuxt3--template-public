<script lang="ts" setup>
const { TITLE, isHomePage } = useAppState()
</script>

<template>
  <h1 v-if="isHomePage" class="just like">{{ TITLE }}</h1>
  <NuxtLink v-else class="home btn" to="/">{{ TITLE }}</NuxtLink>
</template>
