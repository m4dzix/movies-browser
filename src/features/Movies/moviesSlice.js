import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    genres: [],
    movie: [],
    id: "undefinded",
    query: "",
    changeTileStyle: false,
  },
  reducers: {
    showId: (state) => {
      state.id = this.props.id;
    },
    updateQuery: (state, { payload: query}) => {
      state.query = query;
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
      state.changeTileStyle = true;
    },
    fetchMovieDetailsError: (state) => {
      state.loading = false;
      state.movie = !state.movie;
    },
    fetchMoviesByQuery: (state) => {
      state.loading = true;
    },
    fetchMoviesByQuerySuccess: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.loading = false;
    },
    fetchMoviesByQueryError: (state) => {
      state.loading = false;
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
  fetchMoviesByQuery,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryError,
  updateQuery,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovieDetails = (state) => selectMoviesState(state).movie;
export const selectChangeTileStyle = (state) =>
  selectMoviesState(state).changeTileStyle;
export const selectLoadingMovieDetails = (state) =>
  selectMoviesState(state).loading;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectQuery = (state) => selectMoviesState(state).query;
export default moviesSlice.reducer;
