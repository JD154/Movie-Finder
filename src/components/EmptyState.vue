<template>
  <div class="state-wrapper">
    <a href="https://www.freepik.com/free-vector/pack-hand-drawn-cute-animals_1221305.htm">
      <img class="state-image" src="../assets/penguin.svg" alt="">
    </a>
    <h1 class="is-size-3">Opss! Nothing to show but a cute penguin</h1>
    <p class="is-size-5">Try searching something</p>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',
};
</script>

<style>
  .state-wrapper{
    color: #D2D2D2;
  }

  .state-image {
    width: 200px;
    height: auto;
    margin-bottom: 15px;
  }
</style>
