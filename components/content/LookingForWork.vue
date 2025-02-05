<script lang="ts" setup>
const cvLink = 'https://curriculum.vitae.website/'
const igLink = 'instagram.com/pagetailoring'
</script>

<template>
  <p style="color: var(--vivid)">Currently, I am looking for an opportunity for long-term collaboration.</p>
  <p>
    <UiLink :to="cvLink"> {{ cvLink }}</UiLink>
  </p>
  <p>
    <UiLink :to="`https://www.${igLink}/`"> {{ igLink }}</UiLink>
  </p>
</template>
