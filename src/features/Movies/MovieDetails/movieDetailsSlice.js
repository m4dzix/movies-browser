import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    loading: true,
  },

  reducers: {
    showId: (state) => {
      state.id = this.props.id;
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
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  showId,
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = (state) => state.movieDetails;
export const selectMovieDetails = (state) =>
  selectMovieDetailsState(state).movie;
export const selectChangeTileStyle = (state) =>
  selectMovieDetailsState(state).changeTileStyle;
export const selectLoadingMovieDetails = (state) =>
  selectMovieDetailsState(state).loading;

export default movieDetailsSlice.reducer;
