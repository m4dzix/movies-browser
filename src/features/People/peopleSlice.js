import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    people: [],
    credits: [],
    cast: [],
    crew: [],
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
    fetchCredits: (state) => {
      state.loading = true;
    },
    fetchCreditsSuccess: (state, { payload: credits }) => {
      state.loading = false;
      state.credits = credits;
      state.cast = credits.cast;
      state.crew = credits.crew;
      state.changeTileStyle = true;
    },
    fetchCreditsError: (state) => {
      state.loading = false;
      state.credits = !state.credits;
    },
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchCredits,
  fetchCreditsError,
  fetchCreditsSuccess,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPopularPeople = (state) => selectPeopleState(state).people;
export const selectChangeTileStyle = (state) =>
  selectPeopleState(state).changeTileStyle;
export const selectCredits = (state) => selectPeopleState(state).credits;
export const selectCrew = (state) => selectPeopleState(state).crew;
export const selectLoadingCredits = (state) => selectPeopleState(state).loading;
export const selectCast = (state) => selectPeopleState(state).cast;
export const selectLoading = (state) => selectPeopleState(state).loading;

export default peopleSlice.reducer;
