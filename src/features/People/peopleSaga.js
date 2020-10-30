import { delay, call, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "./getPeopleApi";
import { getCredits } from "./getPeopleApi";
import {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchCredits,
  fetchCreditsSuccess,
  fetchCreditsError,
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

export function* watchFetchPopularPeople() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchCredits.type, fetchCreditsHandler);
}
