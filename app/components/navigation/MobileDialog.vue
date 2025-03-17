<script lang="ts" setup>
const { isVisible } = defineProps<{
  isVisible: boolean | undefined
}>()

const emit = defineEmits<{ (event: 'close'): void }>()
const dialog = useTemplateRef('dialog')
function showModal() {
  if (dialog.value) dialog.value.showModal()
}

// Trigger showModal() on mounted, because the component is lazy-loaded,
// the watcher will not work on the first load.
onMounted(() => showModal())

watch(
  () => isVisible,
  (val) => {
    if (dialog.value) {
      if (val) showModal()
      else dialog.value.close()
    }
  },
  { immediate: true }
)

// Close menu dialog on route change
const { beforeEach, onError } = useRouter()
beforeEach(() => {
  if (isVisible) emit('close')
})
onError((e) => console.log(e))
</script>

<template>
  <dialog ref="dialog">
    <LazyTheHomeButton />
    <LazyNavigationList />
    <UiButton aria-label="close menu" @click="emit('close')">X</UiButton>
  </dialog>
</template>

<style lang="scss">
@use './assets/styles/components/_dialog-mobile-menu';
</style>
