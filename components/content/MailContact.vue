<script lang="ts" setup>
const mail = 'bartek@pagetailoring.com'
</script>

<template>
  <h1>contact</h1>
  <p>
    <UiLink :to="`mailto:${mail}`">E-MAIL: {{ mail }}</UiLink>
  </p>
</template>
