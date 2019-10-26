<template>
  <nav class="navbar has-shadow-dp2" role="navigation" aria-label="main navigation" id="app-nav">
    <div class="container">
      <div class="navbar-brand">
        <h1 class="app-brand is-size-4">{{title}}</h1>
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
    background-color: white;
    border-bottom: 1px solid #d9d9d9;
  }

  .navbar-brand{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .app-brand{
    align-self: center;
    font-weight: 600;
  }

</style>
