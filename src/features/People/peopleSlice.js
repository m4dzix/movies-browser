import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    people: [],
    group: false,
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = true;
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.people = people.results;
      state.group = true;
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
export const selectGroup = (state) => selectPeopleState(state).group;
export const selectLoading = (state) => selectPeopleState(state).loading;

export default peopleSlice.reducer;
