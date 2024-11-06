<script lang="ts" setup>
const mail = 'bartek@pagetailoring.com'

onMounted(() => {
  const { triggerLazyLoadingElements } = useAppBasics()
  triggerLazyLoadingElements()
})
</script>

<template>
  <main>
    <h1>contact</h1>
    <p>
      <NuxtLink class="btn" :to="`mailto:${mail}`">M: {{ mail }}</NuxtLink>
    </p>
    <UiAuthor />
  </main>
</template>
