export const useLazyLoadComponents = () => useState<boolean>('isDelay', () => true)

export function useAppBasics() {
  console.log('🪡 Page tailor made by https://pageTailoring.com 🪡🪡 ')

  const isWaiting = useLazyLoadComponents()
  const triggerLazyLoadingElements = () => (isWaiting.value = false)

  return { triggerLazyLoadingElements }
}
