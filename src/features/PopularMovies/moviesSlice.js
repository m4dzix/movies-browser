import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    genres: [],
    page: 1,
    totalPages: "undefinded",
  },
  reducers: {
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
  },
});
export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
  firstPage,
  lastPage,
  nextPage,
  previousPage,
} = moviesSlice.actions;
export const selectMoviesState = (state) => state.movies;
export const selectPopularMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;
export const selectLoading = (state) => selectMoviesState(state).loading;

export default moviesSlice.reducer;
