import { createStore } from 'vuex';
import MovieData from '../movie.json';

const store = createStore({
  state() {
    return {
      selectedMovie: MovieData[0],
      movies: MovieData
    };
  },
  mutations: {
    setSelectedMovie(state, movie) {
      state.selectedMovie = movie;
    }
  },
  actions: {
    setSelectedMovie(context, movie) {
      context.commit('setSelectedMovie', movie);
    }
  },
  getters: {
    getSelectedMovie: state => state.selectedMovie,
    getMovies: state => state.movies
  }
});

export default store;
