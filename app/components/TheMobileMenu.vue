<script lang="ts" setup>
import { watchOnce } from '@vueuse/core'

const isVisible = ref(false)

// Lazy-loading menu logic, used once on the first open.
const isLoaded = ref(false)
watchOnce(isVisible, (val) => {
  if (val) isLoaded.value = true
})
</script>

<template>
  <UiButton class="trigger" @click="isVisible = !isVisible">MENU</UiButton>
  <LazyNavigationMobileDialog v-if="isLoaded" :is-visible @close="isVisible = false" />
</template>
