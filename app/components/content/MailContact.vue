<script lang="ts" setup>
const mail = 'bartek@pagetailoring.com'
</script>

<template>
  <UiLink :to="`mailto:${mail}`">
    <span> {{ mail }} </span>
  </UiLink>
</template>
