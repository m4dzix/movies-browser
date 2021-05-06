import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    loading: true,
    person: [],
    changeTileStyle: false,
    id: "undefinded",
  },

  reducers: {
    showId: (state) => {
      state.id = this.props.id;
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
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
} = personDetailsSlice.actions;

export const selectPersonDetailseState = (state) => state.personDetails;
export const selectPersonDetails = (state) =>
  selectPersonDetailseState(state).person;
export const selectLoading = (state) =>
  selectPersonDetailseState(state).loading;
export const selectChangeTileStyle = (state) =>
  selectPersonDetailseState(state).changeTileStyle;

export default personDetailsSlice.reducer;
