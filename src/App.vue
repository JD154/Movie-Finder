<template>
  <div id="app">
    <Navigation :title="appName"/>
    <main>
      <div class="section section-padding-medium">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <Search
              :movie="movies"
              @changeMovies="changeMovies($event)"
              :api="APIKEY"
            />
          </div>
        </div>
      </div>
      <div class="section section-padding-medium">
        <div class="container">
          <div class="columns is-multiline is-desktop is-centered" v-if="movies.length > 0">
            <Movie
              class="column is-paddingless is-3"
              v-for="(movie, index) in movies"
              :key="index"
              :movie="movie"
            />
          </div>
          <div class="columns" v-else>
            <div class="column is-centered">
              <empty-state />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer :title="appName"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Search from './components/Search.vue';
import Movie from './components/Movie.vue';
import Footer from './components/Footer.vue';
import EmptyState from './components/EmptyState.vue';

export default {
  name: 'app',
  components: {
    Navigation,
    Search,
    Movie,
    Footer,
    EmptyState,
  },
  data() {
    return {
      APIKEY: '79fcb6d0',
      appName: 'Movie Finder',
      movies: [],
    };
  },
  methods: {
    changeMovies(e) {
      this.movies.push(e);
      this.searchDone = true;
    },
  },
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap');

body {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  text-align: center;
  color: #2c3e50;
  background-color: #FCFBFB;
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
}

.has-shadow-dp2 {
  box-shadow: 0 2px 5px 0 rgba($color: #000000, $alpha: 0.1);
}
</style>
