import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    genres: [],
    movie: [],
    id: "undefinded",
    changeTileStyle: false,
    movieCredits: [],
    movieCast: [],
    movieCrew: [],
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
      state.changeTileStyle = true;
    },
    fetchMovieDetailsError: (state) => {
      state.loading = false;
      state.movie = !state.movie;
    },
    fetchMovieCredits: (state) => {
      state.loading = true;
    },
    fetchMovieCreditsSuccess: (state, { payload: movieCredits }) => {
      state.loading = false;
      state.movieCredits = movieCredits;
      state.movieCast = movieCredits.cast;
      state.movieCrew = movieCredits.crew;
      state.changeTile = true;
    },
    fetchMovieCreditsError: (state) => {
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
  fetchMovieCredits,
  fetchMovieCreditsError,
  fetchMovieCreditsSuccess,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectPopularMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovieDetails = (state) => selectMoviesState(state).movie;
export const selectChangeTileStyle = (state) =>
  selectMoviesState(state).changeTileStyle;
export const selectLoadingMovieDetails = (state) =>
  selectMoviesState(state).loading;
export const selectMovieCredits = (state) =>
  selectMoviesState(state).movieCredits;
export const selectMovieCrew = (state) => selectMoviesState(state).movieCrew;
export const selectMovieCast = (state) => selectMoviesState(state).movieCast;

export const selectLoading = (state) => selectMoviesState(state).loading;
export default moviesSlice.reducer;
