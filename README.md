# Nuxt 3 Start Template

- Demo preview page [template.pagetailoring.com](https://template.pagetailoring.com/)
- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
- Author [Page Tailoring](https://pagetailoring.com)

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## About template

### development dependencies for optimization & help with coding

- eslint
- prettier
- html-validator
- nuxt-payload-analyzer
- typescript with vue-tsc
- nuxt-capo
- @vueuse/nuxt
- @nuxt/fonts (option)

### basic SEO tools

- @nuxtjs/robots
- @nuxtjs/sitemap (with configuration)

### FEATURES

- auto generated navigation from page list in router
- mobile menu with <dialog>
- error handling
- accesibility
- performance tools
- validation tools
- basic SEO
- color mode (auto detection, toggle button & key shortcut)
- page transitions
- SCSS & modern CSS
- minimal styling ~3kb
- fonts preload

DOMAIN adress, meta: TITLE & DESCRIPTION in .env settings file

## Development

Start the development server on [http://localhost:3000](http://localhost:3000)

with [bun](https://bun.sh/)

```bash
bun i
bun dev
```

or for preview in local network

```bash
bun host
```

## Additional handy commands

Upgrades Nuxt and dependencies to the latest versions.

```bash
bun up
```

Analyze the production bundle or your Nuxt application & server preview on local server [http://localhost:3000](http://localhost:3000)

```bash
bun analyze
```

Removes common generated Nuxt files, caches, and the node_modules folder with library dependency files. Useful before archiving a project.

```bash
bun clean
```
