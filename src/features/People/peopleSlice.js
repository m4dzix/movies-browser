import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    people: [],
    changeTileStyle: false,
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = true;
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.people = people.results;
      state.changeTileStyle = true;
      state.loading = false;
    },
    fetchPopularPeopleError: (state) => {
      state.loading = false;
    },
  },
});
export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
} = peopleSlice.actions;
export const selectPeopleState = (state) => state.people;
export const selectPopularPeople = (state) => selectPeopleState(state).people;
export const selectChangeTileStyle = (state) =>
  selectPeopleState(state).changeTileStyle;
export const selectLoading = (state) => selectPeopleState(state).loading;

export default peopleSlice.reducer;
