<script lang="ts" setup>
onMounted(() => {
  const { triggerLazyLoadingElements } = useAppBasics()
  triggerLazyLoadingElements()
})
</script>

<template>
  <main>
    <ContentMailContact />
    <LazyContentLookingForWork />
    <UiAuthor />
  </main>
</template>
