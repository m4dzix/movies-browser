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
    person: [],
    changeTileStyle: false,
    id: "undefinded",
    isPeopleTabActive: false,
    query: "",
  },

  reducers: {
    showId: (state) => {
      state.id = this.props.id;
    },
    updateQuery: (state, { payload: query }) => {
      state.query = query;
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
    peopleTabActive: (state) => {
      state.isPeopleTabActive = true;
    },
    peopleTabInactive: (state) => {
      state.isPeopleTabActive = false;
    },
    fetchPeopleByQuery: (state) => {
      state.loading = true;
    },
    fetchPeopleByQuerySuccess: (state, { payload: people }) => {
      state.people = people.results;
      state.changeTileStyle = true;
      state.page = people.page;
      state.totalPages = people.total_pages;
      state.id = people.results.id;
      state.loading = false;
    },
    fetchPeopleByQueryError: (state) => {
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
  peopleTabActive,
  peopleTabInactive,
  updateQuery,
  fetchPeopleByQuery,
  fetchPeopleByQuerySuccess,
  fetchPeopleByQueryError,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectChangeTileStyle = (state) =>
  selectPeopleState(state).changeTileStyle;
export const selectCredits = (state) => selectPeopleState(state).credits;
export const selectCrew = (state) => selectPeopleState(state).crew;
export const selectLoadingCredits = (state) => selectPeopleState(state).loading;
export const selectCast = (state) => selectPeopleState(state).cast;
export const selectPeoplePage = (state) => selectPeopleState(state).page;
export const selectTotalPeoplePages = (state) =>
  selectPeopleState(state).totalPages;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectPeopleActiveTab = (state) =>
  selectPeopleState(state).isPeopleTabActive;
export const selectQuery = (state) => selectPeopleState(state).query;

export default peopleSlice.reducer;
