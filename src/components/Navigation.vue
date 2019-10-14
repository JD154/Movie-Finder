<template>
  <nav class="navbar has-shadow-dp2" role="navigation" aria-label="main navigation" id="app-nav">
    <div class="container">
      <div class="navbar-brand">
        <h1 class="app-brand is-size-4">{{title}}</h1>
      </div>
      <div id="navbarBasicExample" class="navbar-end">
        <div class="navbar-start">
          <a class="navbar-item has-text-white">
            Search
          </a>
          <a class="navbar-item has-text-white">
            My bookmarks
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
  #app-nav {
    background-color: #73BAE1;
  }

  .app-brand{
    align-self: center;
    font-weight: 400;
    color: white;
  }

  .navbar-item {
    font-weight: 300px !important;
    margin: 5px 10px;
    background-color: none;

    &:hover {
      border-radius: 6px;
      background-color: rgba($color: #ffffff, $alpha: 0.2) !important;
      transition: background-color 0.150s ease;
    }
  }
</style>
