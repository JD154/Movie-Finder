<template>
  <div class="modal-overlay">
    <div class="modal-wrapper">
      <a @click="closeModal">hola mundo</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    movie: Object,
    modalIsOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', this.modalIsOpen = false);
    },
  },
};
</script>

<style lang="scss" scoped>
  .text {
    font-size: 21px;
    color: black;
  }

  .modal-overlay {
    position: fixed;
    display: flex;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }

  .modal-wrapper {
    background-color: white;
    border-radius: 4px;
    width: 800px;
    max-width: 1200px;
    height: 500px;
    margin: auto auto;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);
  }
</style>
