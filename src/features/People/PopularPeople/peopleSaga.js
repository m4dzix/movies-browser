import { delay, call, put, takeEvery, debounce } from "redux-saga/effects";
import { getPopularPeople, getCredits, getPeopleByQuery } from "./getPeopleApi";
import {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchCredits,
  fetchCreditsSuccess,
  fetchCreditsError,
  fetchPeopleByQuery,
  fetchPeopleByQuerySuccess,
  fetchPeopleByQueryError,
} from "./peopleSlice";

function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    yield delay(100);
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
function* fetchPeopleByQueryHandler({ payload: query, page }) {
  try {
    yield delay(100);
    const searchPeople = yield call(getPeopleByQuery, query, page);
    yield put(fetchPeopleByQuerySuccess(searchPeople));
  } catch (error) {
    yield put(fetchPeopleByQueryError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchCredits.type, fetchCreditsHandler);
  yield debounce(1000, fetchPeopleByQuery.type, fetchPeopleByQueryHandler);
}
