import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    page: 1,
    people: [],
    credits: [],
    cast: [],
    crew: [],
  },

  reducers: {
    showId: (state) => {
      state.id = this.props.id;
    },
    firstPage: (state) => {
      state.page = 1;
    },
    lastPage: (state) => {
      state.page = state.total_pages;
    },
    nextPage: (state) => {
      state.page++;
    },
    previousPage: (state) => {
      state.page--;
    },
    fetchPopularPeople: (state) => {
      state.loading = true;
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.people = people.results;
      state.changeTileStyle = true;
      state.page = people.page;
      state.totalPages = people.total_pages;
      state.id = people.results.id;
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
    fetchPersonDetails: (state) => {
      state.loading = true;
    },
    fetchPersonDetailsSuccess: (state, { payload: person }) => {
      state.person = person;
      state.id = person.id;
      state.loading = false;
      state.changeTileStyle = true;
    },
    fetchPersonDetailsError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  showId,
  firstPage,
  lastPage,
  nextPage,
  previousPage,
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchCredits,
  fetchCreditsError,
  fetchCreditsSuccess,
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPopularPeople = (state) => selectPeopleState(state).people;
export const selectChangeTileStyle = (state) =>
  selectPeopleState(state).changeTileStyle;
export const selectCredits = (state) => selectPeopleState(state).credits;
export const selectCrew = (state) => selectPeopleState(state).crew;
export const selectLoadingCredits = (state) => selectPeopleState(state).loading;
export const selectCast = (state) => selectPeopleState(state).cast;
export const selectPersonDetails = (state) => selectPeopleState(state).person;
export const selectPage = (state) => selectPeopleState(state).page;
export const selectTotalPages = (state) => selectPeopleState(state).totalPages;
export const selectLoading = (state) => selectPeopleState(state).loading;

export default peopleSlice.reducer;
