import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    loading: true,
  },

  reducers: {
    fetchGenres: () => {},
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
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} = genresSlice.actions;

export const selectGenres = (state) => state.genres.genres;
export const selectLoading = (state) => state.genres.loading;

export default genresSlice.reducer;
