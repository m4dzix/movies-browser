import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    page: 1,
    query: "",
    movieCredits: [],
    movieCast: [],
    movieCrew: [],
  },

  reducers: {
    firstPage: (state) => {
      state.page = 1;
    },
    lastPage: (state) => {
      state.page = state.totalPages;
    },
    nextPage: (state) => {
      state.page++;
    },
    previousPage: (state) => {
      state.page--;
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
      state.page = movies.page;
      state.totalPages = movies.total_pages;
      state.loading = false;
    },
    fetchPopularMoviesError: (state) => {
      state.loading = false;
    },

    fetchMoviesByQuery: (state) => {
      state.loading = true;
    },
    fetchMoviesByQuerySuccess: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.page = movies.page;
      state.totalPages = movies.total_pages;
      state.loading = false;
    },
    fetchMoviesByQueryError: (state) => {
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
  firstPage,
  lastPage,
  nextPage,
  previousPage,
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  showId,
  fetchMoviesByQuery,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryError,
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
