<script setup lang="ts">
const handleError = () => clearError({ redirect: '/' })

onMounted(() => {
  console.clear()
  setTimeout(() => handleError(), 100)
  console.log('redirect 🚀')
})
</script>
<!-- defineProps({ error: Object }) // you can check error by prop  -->

<template>
  <div id="__page">
    <div id="__scroll" class="main error">
      <h1>404</h1>
      <button type="button" class="btn" aria-label="home" @click="handleError">
        <span class="action"> &larr;</span>
      </button>
    </div>
  </div>
</template>
