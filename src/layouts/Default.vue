<template>
  <div class="layout">
    <Navbar></Navbar>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
    siteDescription
  }
}
</static-query>

<style lang="scss">
@import './scss/main.scss';

main {
  padding: $container-padding;
  font-size: 1rem;
  margin-bottom: 65px;
}

</style>

