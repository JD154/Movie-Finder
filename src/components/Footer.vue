<template>
  <footer class="footer has-shadow-dp2" id="app-footer">
  <div class="content has-text-centered">
    <p>
      <strong>{{title}}</strong> is created by <a href="https://github.com/JD154/Movie-Finder">Jesus Blanco</a>
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
    background-color: white;
    padding: 1rem 1.5rem;
    border-top: 1px solid #d9d9d9;
  }
</style>
