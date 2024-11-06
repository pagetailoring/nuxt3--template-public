<script lang="ts" setup>
import { useDark } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light'
})
</script>

<template>
  <button class="btn mode" type="button" aria-label="toggle color mode" @click="isDark = !isDark">
    <svg viewBox="0 0 500 510">
      <path
        fill="currentColor"
        d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
        transform="translate(-8 -10)"
      />
    </svg>
  </button>
</template>

<style lang="scss">
.btn.mode {
  --size: 2.2rem;

  padding: 0.5rem;
  width: var(--size);
  height: var(--size);
}
</style>
