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
import { mapGetters, mapActions } from 'vuex';
import MovieList from "./components/Moleculs/MovieList/MovieList.vue";
import MovieDetails from "./components/Moleculs/MovieDetail/MovieDetail.vue";
import Header from "./components/Organisms/Header/Header.vue";

export default {
  components: {
    MovieList,
    MovieDetails,
    Header,
  },
  computed: {
    ...mapGetters(['getSelectedMovie', 'getMovies']),
    selectedMovie() {
      return this.getSelectedMovie;
    },
    movies() {
      return this.getMovies;
    }
  },
  methods: {
    ...mapActions(['setSelectedMovie']),
    updateSelectedMovie(movie) {
      this.setSelectedMovie(movie);
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
