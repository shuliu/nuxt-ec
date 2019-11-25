<template>
  <nuxt />
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: '/public/stylesheets/main.css'
        }
      ],
      bodyAttrs: {
        class: 'isDesktop'
      }
    }
  }
}
</script>
