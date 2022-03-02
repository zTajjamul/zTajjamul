<template>
  <Header />
  <body>
    <router-view />
  </body>
  <Footer />
</template>

<script>
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import '@/styles/index.scss';
</style>
