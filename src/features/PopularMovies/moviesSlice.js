import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
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
  },
});
export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} = moviesSlice.actions;
export const selectMoviesState = (state) => state.movies;
export const selectPopularMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;

export default moviesSlice.reducer;
