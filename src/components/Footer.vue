<template>
  <footer class="footer has-shadow-dp2" id="app-footer">
  <div class="content has-text-centered">
    <p>
      <strong>{{title}}</strong> is created by <a href="https://jgthms.com">Jesus Blanco</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
    </p>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title: String,
  },
};
</script>

<style>
  #app-footer {
    background-color: #f5f2f2;
    padding: 3rem 1.5rem 3rem 1.5rem;
  }
</style>
