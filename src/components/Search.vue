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
      <ErrorToast v-if="errorSearching" :errorType="error"/>
    </transition>
  </div>
</template>

<script>
import ErrorToast from './ErrorToast.vue';
import FindService from '../services/FindService';

export default {
  name: 'Search',
  components: {
    ErrorToast,
  },
  data() {
    return {
      isSearching: false,
      errorSearching: false,
      movieQuery: '',
      apiResponse: [],
      error: '',
    };
  },
  methods: {
    // Send a post request using proxy to API server and wait for response
    async searchMovie() {
      this.apiResponse = await FindService.findMovie({
        query: this.movieQuery,
      }, this.isSearching = true);

      console.log(this.apiResponse.data[0]);
      this.isSearching = false;

      /* filter response using status, if status is true means the server made the API call sucessfully
          If server response is not true will send error message */
      if (this.apiResponse.data[0].status) {
        /* If response from server is true and movie data was found will emit movie data to parent
            Otherwise when server response is true but movie was not found will send error message */
        if (this.apiResponse.data[0].movie.Response === 'True') {
          this.$emit('changeMovies', this.apiResponse.data[0].movie);
        } else {
          this.sendError(this.apiResponse.data[0].movie.Error);
        }
      } else {
        this.sendError(this.apiResponse.data[0].error);
      }
    },
    // this function take a string as error and set timeout to leave animation
    sendError(err) {
      this.errorSearching = true;
      this.error = `Error - ${err}`;

      setTimeout(() => {
        this.errorSearching = false;
      }, 1500);
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
