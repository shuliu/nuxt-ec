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
          href: '/public/stylesheets/mobile.css'
        }
      ],
      bodyAttrs: {
        class: 'isMobile'
      }
    }
  }
}
</script>
