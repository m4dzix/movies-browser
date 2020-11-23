import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./getPeopleApi";
import { getCredits } from "./getPeopleApi";
import { getPersonDetails } from "./getPeopleApi";
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

function* fetchPersonDetailsHandler({ payload: id }) {
  try {
    yield delay(100);
    const personDetails = yield call(getPersonDetails, id);
    yield put(fetchPersonDetailsSuccess(personDetails));
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchCredits.type, fetchCreditsHandler);
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
