/* eslint-disable max-len */
<template>
  <div class="card is-relative is-clipped">
    <img
      class="movie-poster"
      :src="replaceImage"
      alt=""
    >
    <div class="card-overlay">
      <div class="card-content is-flex">
        <div class="upper-content">
          <p class="movie-date is-size-7 has-text-left has-text-weight-light">Released on {{movie.Released}}</p>
          <h1 class="movie-title is-size-3 has-text-weight-bold is-uppercase">{{movie.Title}}</h1>
          <p class="movie-genre is-size-6 has-text-weight-light">{{movie.Genre}}</p>
          <p class="movie-plot is-size-6 has-text-weight-normal">{{movie.Plot}}</p>
          <p class="movie-director is-size6 has-text-weight-normal">Directed by {{movie.Director}}</p>
        </div>
        <p class="movie-rating is-size-6 has-text-centered"><span>{{movie.imdbRating}}</span> score with <span>{{movie.imdbVotes}}</span> votes</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['movie'],
  data() {
    return {
      placeholderImage: 'https://www.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg',
    };
  },
  methods: {

  },
  computed: {
    replaceImage() {
      let image = '';
      image = this.movie.Poster === 'N/A' ? this.placeholderImage : this.movie.Poster;
      return image;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    color: white;
    margin: 15px;
    height: 506px;
    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .movie-poster {
    width: 100%;
    height: 100%;
    transition: all .3s cubic-bezier(0.0, 0.0, 0.2, 1);
  }

  .card-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      /* background-color: rgba($color: #14339d, $alpha: 0.9); */
      background: #7474BF;
      background: linear-gradient(to top, #348AC7, #7474BF);
      overflow: hidden;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity .3s cubic-bezier(0.4, 0.0, 1, 1);
  }

  .card:hover .card-overlay {
    opacity: 1
  }

  .card:hover .movie-poster {
    filter: blur(3px);
    transform: scale(1.3);
  }

  .card-content {
    flex-direction: column;
    align-content: center;
    text-align: left;
    height: 506px;
  }

  .upper-content {
    flex: 1;
  }

  .movie-date {
    margin-bottom: 15px;
  }

  .movie-title {
    margin-bottom: 5px;
  }

  .movie-genre {
    margin-bottom: 20px;
  }

  .movie-plot {
    margin-bottom: 15px;
  }
  .movie-rating {

    span {
      font-weight: 700;
      color: #F0737A;
    }
  }
</style>
