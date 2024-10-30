// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      'no-console': 'off', // allow console.log in TypeScript files
      'space-before-function-paren': 'off',
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      '@typescript-eslint/ban-ts-comment': 'off'
    }
  },
  {
    // ...
  }
)
