<template>
  <LazyTheMobileMenu hydrate-on-media-query="(max-width: 29em)" />
  <LazyNavigationList hydrate-on-media-query="(min-width: 29em)" />
  <LazyTheColorModeButton />
  <LazyNavigationGitHubLink />
</template>

<!-- 
  Definitions of app RWD break point & element styles:
  ~/assets/styles/settings/_break-points.scss
  ~/assets/styles/_mobile-navigation.scss
-->
