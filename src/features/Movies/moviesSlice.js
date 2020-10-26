import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    genres: [],
    movie: [],
    id: "undefinded",
    movieDetailsTile: false,
  },
  reducers: {
    showId: (state) => {
      state.id = this.props.id;
    },
    fetchPopularMovies: (state) => {
      state.loading = true;
    },
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.loading = false;
    },
    fetchPopularMoviesError: (state) => {
      state.loading = false;
    },
    fetchGenres: (state) => {
      state.loading = true;
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.loading = false;
    },
    fetchGenresError: (state) => {
      state.loading = false;
    },
    fetchMovieDetails: (state) => {
      state.loading = true;
    },
    fetchMovieDetailsSuccess: (state, { payload: movie }) => {
      state.loading = false;
      state.movie = movie;

      state.movieDetailsTile = true;
    },
    fetchMovieDetailsError: (state) => {
      state.loading = false;
      state.movie = !state.movie;
    },
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  showId,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectPopularMovies = (state) => selectMoviesState(state).movies;

export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovieDetails = (state) => selectMoviesState(state).movie;
export const selectMovieDetailsTile = (state) =>
  selectMoviesState(state).movieDetailsTile;
export const selectLoadingMovieDetails = (state) =>
  selectMoviesState(state).loading;
export const selectLoading = (state) => selectMoviesState(state).loading;

export default moviesSlice.reducer;
