# Nuxt 3 Start Template by Page Tailoring

In my way.

- Author [Page Tailoring](https://pagetailoring.com)
- Demo preview page [template.pagetailoring.com](https://template.pagetailoring.com/)
- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## About template

### development dependencies for optimization & help with coding

- eslint
- prettier
- html-validator
- nuxt-payload-analyzer
- typescript with vue-tsc
- nuxt-capo

### basic SEO tools

- @nuxtjs/robots
- @nuxtjs/sitemap

### from Page Tailoring

- minimal styling (with sass & modern CSS (2158b))
- dark / light mode (auto detection & toggle button in navigation)
- auto generated navigation
- error handling
- accesibility
- button hovers & page transitions
- lazy loading components (useful to delay loading heavy dependencies like GSAP)

DOMAIN adress, meta: TITLE & DESCRIPTION in .env settings file

## Development

Start the development server on `http://localhost:7082`:

```bash
# bun
bun i
bun dev
```

or

```bash
bun host
```

For preview in local network

## Additional handy commands

```bash
# upgrades Nuxt & dependencies to the latest version
bun up

# analyze the production bundle or your Nuxt application & server preview on local server http://localhost:3000
bun analyze

# remove common generated Nuxt files and caches. Useful before archiving a project
bun clean

```
