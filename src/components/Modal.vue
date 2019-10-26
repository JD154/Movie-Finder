<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-wrapper">
      <div class="content-wrapper">
        <div class="modal-image">
          <img :src="poster" alt="">
        </div>
        <div class="modal-details">
          <div class="close-wrapper">
            <a @click="closeModal"><svg class="close-modal" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352"><title>times-solid</title><path d="M242.72,256,342.79,155.93a31.46,31.46,0,0,0,0-44.48L320.55,89.21a31.46,31.46,0,0,0-44.48,0L176,189.28,75.93,89.21a31.46,31.46,0,0,0-44.48,0L9.21,111.45a31.46,31.46,0,0,0,0,44.48L109.28,256,9.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L176,322.72,276.07,422.79a31.46,31.46,0,0,0,44.48,0l22.24-22.24a31.46,31.46,0,0,0,0-44.48Z" transform="translate(0 -80)"/></svg></a>
          </div>
          <p class="movie-title is-size-4 has-text-weight-bold is-uppercase">{{movie.Title}}</p>
          <div class="details-header is-size-7">
            <p>{{movie.Genre}}</p>
            <p>Year: {{movie.Year}}</p>
            <p>Runtime: {{movie.Runtime}}</p>
            <p>Rated: {{movie.Rated}}</p>
          </div>
          <div class="details-content">
            <p class="movie-plot">{{movie.Plot}}</p>
            <p class="movie-director"><span class="custom-bold">Director: </span>{{movie.Director}}</p>
            <p class="movie-writers"><span class="custom-bold">Writers: </span>{{movie.Writer}}</p>
            <p class="movie-actors"><span class="custom-bold">Actors: </span>{{movie.Actors}}</p>
            <p class="movie-production"><span class="custom-bold">Production: </span>{{movie.Production}}</p>
          </div>
          <div class="details-rating">
            <p class="movie-rating custom-bold" v-for="(source, index) in movie.Ratings" :key="index">
              {{source.Source}}: <span class="rating-value">{{source.Value}}</span>
            </p>
            <p class="movie-rating custom-bold">IMDb: <span class="rating-value">{{movie.imdbRating}}</span></p>
          </div>
          <div class="action-button">
            <a :href="completeUrlLink" target="_blank" class="imdb-url button is-light">Go to IMDb page</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    movie: Object,
    poster: String,
    modalIsOpen: Boolean,
  },
  computed: {
    completeUrlLink() {
      const imdbURL = `https://www.imdb.com/title/${this.movie.imdbID}/?ref_=fn_al_tt_1`;
      return imdbURL;
    },
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
    height: auto;
    margin: auto auto;
    overflow: hidden;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);
  }

  .close-wrapper{
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }

  .close-modal{
    width: 18px;
    height: auto;
    fill: grey;

    &:hover {
      fill: #348AC7;
    }
  }

  .modal-image {
    position: relative;
    width: 40%;
    height: auto;
    overflow: hidden;
    margin: 0;

    img{
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      height: 100%;
      width: 100%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  .content-wrapper{
    display: flex;
    height: 100%;
  }

  .modal-details{
    text-align: left;
    padding: 20px;
    width: 60%;
    height: 100%;
  }

  .details-header{
    display: flex;
    justify-content: space-between;
  }

  .movie-title{
    margin-bottom: 5px;
    color: #348AC7;
  }

  .details-content{
    margin: 20px 0;
  }
  .movie-plot{
    margin: 15px 0;
  }

  .movie-director{
    margin-bottom: 5px;
  }

  .movie-writers{
    margin-bottom: 5px;
  }

  .movie-actors{
    margin-bottom: 5px;
  }

  .movie-production{
  }

  .details-rating{
    margin-top: 15px;
  }

  .movie-rating{
    margin-bottom: 5px;
  }

  .rating-value{
    font-weight: 700;
    color: #F0737A;
  }

  .action-button{
    display: flex;
    justify-content: flex-end;
  }

  .imdb-url{
    width: 100%;
    margin-top: 15px;
    align-self: flex-end;
    font-weight: 400;
  }

  .custom-bold{
    color: #666666;
    font-weight: 700;
  }
</style>
