import { delay, call, put, takeEvery, debounce } from "redux-saga/effects";
import { getPopularPeople } from "./getPeopleApi";
import { getCredits } from "./getPeopleApi";
import { getPersonDetails, getPeopleByQuery } from "./getPeopleApi";
import {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchCredits,
  fetchCreditsSuccess,
  fetchCreditsError,
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  fetchPeopleByQuery,
  fetchPeopleByQuerySuccess,
  fetchPeopleByQueryError,
} from "./peopleSlice";

function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    yield delay(500);
    const people = yield call(getPopularPeople, page);
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}
function* fetchCreditsHandler({ payload: movieId }) {
  try {
    yield delay(100);
    const credits = yield call(getCredits, movieId);
    yield put(fetchCreditsSuccess(credits));
  } catch (error) {
    yield put(fetchCreditsError());
  }
}
function* fetchPersonDetailsHandler({ payload: id }) {
  try {
    yield delay(500);
    const personDetails = yield call(getPersonDetails, id);
    yield put(fetchPersonDetailsSuccess(personDetails));
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}
function* fetchPeopleByQueryHandler({ payload: query, page}) {
  console.log("Ppl Saga: ", query, page);
  try {
    yield delay(500);
    const searchPeople = yield call(getPeopleByQuery, query, page);
    yield put(fetchPeopleByQuerySuccess(searchPeople));
  } catch (error) {
    yield put(fetchPeopleByQueryError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchCredits.type, fetchCreditsHandler);
  yield takeEvery(fetchPersonDetails.type, fetchPersonDetailsHandler);
  yield debounce(1000, fetchPeopleByQuery.type, fetchPeopleByQueryHandler);
}
