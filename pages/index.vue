<script lang="ts" setup>
onMounted(() => {
  const { triggerLazyLoadingElements } = useAppBasics()
  triggerLazyLoadingElements()
})
</script>

<template>
  <main>
    <h2>FEATURES</h2>
    <ul>
      <li>minimal styling ~2kb (sass & modern CSS)</li>
      <li>dark / light mode (auto detection & toggle button in navigation)</li>
      <li>auto generated navigation</li>
      <li>error handling</li>
      <li>accesibility</li>
      <li>button hovers & page transitions</li>
      <li>lazy loading components (useful to delay loading heavy dependencies)</li>
      <li>SEO & development tools</li>
    </ul>
    <p style="text-align: center">My way for start with nuxt new page</p>
  </main>
</template>
