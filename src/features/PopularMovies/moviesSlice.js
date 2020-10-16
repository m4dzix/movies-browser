import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    genres: [],
  },
  reducers: {
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
  },
});
export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} = moviesSlice.actions;
export const selectMoviesState = (state) => state.movies;
export const selectPopularMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectLoading = (state) => selectMoviesState(state).loading;

export default moviesSlice.reducer;
