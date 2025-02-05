<script lang="ts" setup>
onMounted(() => {
  const { triggerLazyLoadingElements } = useAppBasics()
  triggerLazyLoadingElements()
})
</script>

<template>
  <main>
    <ContentFeaturesList />
  </main>
</template>
