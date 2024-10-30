<script lang="ts" setup>
const config = useRuntimeConfig()
const { TITLE } = config.public
</script>

<template>
  <footer>
    <p>
      <b>{{ TITLE }}</b>
      <br />
      <span>My start template for nuxt 3 projects</span>
    </p>
  </footer>
</template>
