<template>
  <div class="box errorToast">
    <p class="has-text-white">{{errorType}}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorToast',
  props: {
    errorType: String,
  },
};
</script>

<style>
  .errorToast {
    position: fixed;
    background-color: #f44336 !important;
    right: 0;
    top: 80px;
    margin: 0 20px;
    padding: 5px 10px;
    width: auto;
    z-index: 20000;
  }
</style>
