export const useLazyLoadComponents = () => useState<boolean>('isDelay', () => true)

export function useAppBasics() {
  const isWaiting = useLazyLoadComponents()
  const triggerLazyLoadingElements = () => (isWaiting.value = false)

  console.log('🪡 Page tailor made by https://pageTailoring.com 🪡🪡 ')

  return { triggerLazyLoadingElements }
}
