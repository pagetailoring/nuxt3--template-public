<script lang="ts" setup>
const mail = 'bartek@pagetailoring.com'
const cvLink = 'https://curriculum.vitae.website/'
const igLink = 'instagram.com/pagetailoring'

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
    <p style="color: var(--vivid)">Currently, I am looking for an opportunity for long-term collaboration.</p>
    <p>
      <NuxtLink class="btn" :to="cvLink"> {{ cvLink }}</NuxtLink>
    </p>
    <p>
      <NuxtLink class="btn" :to="`https://www.${igLink}/`"> {{ igLink }}</NuxtLink>
    </p>
    <UiAuthor />
  </main>
</template>
