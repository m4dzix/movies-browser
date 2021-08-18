import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movieCredits: [],
    movieCast: [],
    movieCrew: [],
  },

  reducers: {
    lastPage: (state) => {
      state.page = state.totalPages;
    },
    firstPage: (state) => {
      state.page = 1;
    },

    showId: (state) => {
      state.id = this.props.id;
    },
    updateQuery: (state, { payload: query }) => {
      state.query = query;
    },
    fetchPopularMovies: (state) => {
      state.loading = true;
    },
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.totalPages = movies.total_pages;
      state.loading = false;
    },
    fetchPopularMoviesError: (state) => {
      state.loading = false;
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
  lastPage,
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  showId,
  updateQuery,
  fetchMovieCredits,
  fetchMovieCreditsError,
  fetchMovieCreditsSuccess,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectChangeTileStyle = (state) =>
  selectMoviesState(state).changeTileStyle;
export const selectMovieCredits = (state) =>
  selectMoviesState(state).movieCredits;
export const selectMovieCrew = (state) => selectMoviesState(state).movieCrew;
export const selectMovieCast = (state) => selectMoviesState(state).movieCast;
export const selectMoviePage = (state) => selectMoviesState(state).page;
export const selectTotalMoviePages = (state) =>
  selectMoviesState(state).totalPages;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectQuery = (state) => selectMoviesState(state).query;
export default moviesSlice.reducer;
