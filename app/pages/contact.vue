<script lang="ts" setup>
const cvLink = 'curriculum.vitae.website'
const igLink = 'instagram.com/pagetailoring'
const linkedin = 'linkedin.com/in/bartosz-stawiarski-a853ab4'
const github = 'github.com/pagetailoring'
const websiteLink = 'pagetailoring.com'
</script>

<template>
  <main>
    <h1>Contact</h1>
    <p style="color: var(--vivid)">Currently, I am looking for an opportunity for long-term collaboration.</p>

    <ul>
      <li>
        <ContentMailContact />
      </li>
      <li>
        <UiLink :to="`https://${cvLink}/`">
          <small> cv: </small>
          <span> {{ cvLink }} </span>
        </UiLink>
      </li>
      <li>
        <UiLink :to="`https://www.${igLink}/`">
          <span> {{ igLink }} </span>
        </UiLink>
      </li>
      <li>
        <UiLink :to="`https://www.${linkedin}/`">
          <span> {{ linkedin }} </span>
        </UiLink>
      </li>
      <li>
        <UiLink :to="`https://${github}/`">
          <span> {{ github }} </span>
        </UiLink>
      </li>

      <li>
        <UiLink :to="'https://' + websiteLink">
          <small> www: </small>
          <span> {{ websiteLink }} </span>
        </UiLink>
      </li>
    </ul>
  </main>
</template>
