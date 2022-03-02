<template>
  <header :class="{change_color: scrollPosition > 0,fixed:true}">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- <router-link class="navbar-brand" to="/">Cart</router-link> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Shop </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  data: function () {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style scoped lang='scss'>
header {
  height: 60px;
  nav {
    padding: 0px;
    &.bg-light {
      background-color: transparent !important;
    }
  }
}
.navbar-light .navbar-nav .nav-link {
  color: #000000;
  padding: 20px 10px;
}
a.router-link-active.router-link-exact-active.nav-link {
  background: #ea4947;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  color: #ffffff;
  font-weight: 500 !important;
}
.change_color {
  background-color:#ffffff90;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 99;
}
</style>
