<template>
    <div class="left">
      <div v-if="selectedMovie">
        <div class="movie-details">
          <MoviePoster :poster="selectedMovie.poster" />
          <MovieTextDetails
            :title="selectedMovie.title"
            :director="selectedMovie.director"
            :casts="selectedMovie.casts"
            :genre="selectedMovie.genre"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import MoviePoster from "@/components/Atoms/MoviePoster/MoviePoster.vue";
  import MovieTextDetails from "@/components/Atoms/MovieTextDetail/MovieTextDetail.vue";
  
  export default {
    components: {
      MoviePoster,
      MovieTextDetails,
    },
    computed: {
      ...mapGetters(['getSelectedMovie']),
      selectedMovie() {
        return this.getSelectedMovie;
      }
    }
  };
  </script>
  
  <style scoped>
  .left {
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
  }
  
  .movie-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    width: 100%;
  }
  </style>
  