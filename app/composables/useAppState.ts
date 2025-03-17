console.log('🪡 Page tailor made by https://pageTailoring.com 🪡🪡 ')

export function useAppState() {
  const config = useRuntimeConfig()
  const { TITLE, DOMAIN } = config.public

  const route = useRoute()
  const isHomePage = computed(() => {
    return route.fullPath === '/'
  })

  return { TITLE, DOMAIN, isHomePage }
}
