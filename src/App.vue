<template>
  <div>
    <div class="home">
      <Header />
    </div>
    <div class="catalog">
      <movie-details :selectedMovie="selectedMovie" />
      <movie-list
        :movies="movies"
        :selectedMovie="selectedMovie"
        @movie-clicked="updateSelectedMovie"
      />
    </div>
  </div>
</template>

<script>
import MovieList from "./components/Moleculs/MovieList/MovieList.vue";
import MovieDetails from "./components/Moleculs/MovieDetail/MovieDetail.vue";
import MovieData from "../movie.json";
import Header from "./components/Organisms/Header/Header.vue";

export default {
  components: {
    MovieList,
    MovieDetails,
    Header,
  },
  data() {
    return {
      movies: MovieData,
      selectedMovie: MovieData[0],
    };
  },
  methods: {
    updateSelectedMovie(movie) {
      this.selectedMovie = movie;
    },
  },
};
</script>

<style>
.home {
  display: flex;
  width: 100%
}
.catalog {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
</style>
