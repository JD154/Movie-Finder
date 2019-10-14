<template>
  <div class="container is-relative">
    <form @submit.prevent="searchMovie">
      <input
        class="input is-medium"
        v-model="movieQuery"
        type="text"
        id="movietitle"
        required
      >
      <button
        class="button is-medium has-text-white"
        :class="{'is-loading': isSearching}"
        type="submit"
        >Search now</button>
    </form>
    <transition name="toast">
      <ErrorToast v-if="errorSearching || errors !== ''" :errorType="checkErrorType"/>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';

import ErrorToast from './ErrorToast.vue';

export default {
  name: 'Search',
  components: {
    ErrorToast,
  },
  props: {
    movies: Object,
    api: String,
  },
  data() {
    return {
      isSearching: false,
      errorSearching: false,
      movieQuery: '',
      apiResponse: [],
      errors: '',
    };
  },
  methods: {
    searchMovie() {
      this.isSearching = true;
      axios.get(`https://www.omdbapi.com/?t=${this.movieQuery}&apikey=${this.api}`)
        .then((response) => {
          this.apiResponse = response.data;
          if (this.apiResponse.Response === 'True') {
            this.$emit('changeMovies', this.apiResponse);
          } else {
            this.errorSearching = true;
          }
        })
        .catch((e) => {
          this.errors = e.message;
        })
        .finally(() => {
          this.isSearching = false;
          setTimeout(() => {
            this.errorSearching = false;
            this.errors = '';
          }, 1500);
        });
    },
  },
  computed: {
    checkErrorType() {
      let error = '';
      error = this.errors !== '' ? `Error - ${this.errors}` : 'Error - Movie not found';
      return error;
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    display: flex;
  }

  input {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  button {
    background-color: #1C9CD7;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: none;

    &:hover {
      background-color: rgba($color: #1C9CD7, $alpha: 0.9);
      transition: background-color 0.150s ease;
    }
  }

  .toast-enter-active, .toast-leave-active {
    transform: translateY(0);
    opacity:1;
    transition: all .3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  .toast-enter, .toast-leave-to {
    transform: translateY(20px);
    opacity: 0;
    transition: all .25s cubic-bezier(0.4, 0.0, 1, 1);
  }
</style>
