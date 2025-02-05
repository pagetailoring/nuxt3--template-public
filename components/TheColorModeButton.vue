<script lang="ts" setup>
import { useDark, onKeyStroke, useKeyModifier } from '@vueuse/core'
const isDark = useDark()
const triggerMode = () => (isDark.value = !isDark.value)

const shiftState = useKeyModifier('Shift')
onKeyStroke(({ code }) => {
  if (code === 'KeyC' && shiftState.value) triggerMode()
})

onMounted(() => {
  console.log('\n%ckey shortcuts:\n\nshift + C%c to toggle COLOR MODE', 'font-size:125%;', 'font-size:100%;')
})
</script>

<template>
  <UiButton class="mode" aria-label="toggle color mode" @click="triggerMode">
    <svg viewBox="0 0 500 510">
      <path
        fill="currentColor"
        d="M0 246a248 248 0 1 0 496 0 248 248 0 0 0-496 0Zm248 184V62a184 184 0 0 1 0 368Z"
      />
    </svg>
  </UiButton>
</template>

<!-- <style lang="scss">
@use './assets/styles/components/color-mode-button';
</style> -->
