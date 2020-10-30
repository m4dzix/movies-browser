import { delay, call, put, takeEvery } from "redux-saga/effects";
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

function* fetchPopularPeopleHandler() {
  try {
    yield delay(500);
    const people = yield call(getPopularPeople);
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

export function* watchFetchPopularPeople() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchCredits.type, fetchCreditsHandler);
  yield takeEvery(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
