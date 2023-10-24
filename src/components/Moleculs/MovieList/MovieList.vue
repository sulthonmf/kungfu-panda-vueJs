<template>
    <div class="right">
      <ul>
        <MovieItem
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          :selected="isSelected(movie.id)"
          @clicked="selectMovie"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import MovieItem from '@/components/Atoms/MovieItem/MovieItem.vue';
  
  export default {
    props: ["movies", "selectedMovie"],
    components: {
        MovieItem
    },
    methods: {
      isSelected(movieId) {
        return this.selectedMovie && this.selectedMovie.id === movieId;
      },
      selectMovie(movie) {
        this.$emit("movie-clicked", movie);
      },
    },
  };
  </script>
  
  <style scoped>
  .right {
    background-color: lightgray;
    width: 50%;
  }
  
  ul {
    list-style-type: none;
    padding-inline-start: 0px;
    padding-top: 50px;
  }
  </style>
  