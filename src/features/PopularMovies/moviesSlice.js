import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    popularMovies: [],
  },
  reducers: {
    fetchPopularMovies: (state) => {
      state.loading = true;
    },
    fetchPopularMoviesSuccess: (state, { payload: popularMovies }) => {
      state.loading = false;
      state.popularMovies = popularMovies.results;
    },
    fetchPopularMoviesError: (state) => {
      state.loading = false;
      state.popularMovies = !state.popularMovies;
    },
  },
});
export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} = movieSlice.actions;
export const selectMoviesState = (state) => state.popularMovies;
export const selectMovies = (state) => selectMoviesState(state).popularMovies;
export const selectLoading = (state) => selectMoviesState(state).loading;

export default movieSlice.reducer;
