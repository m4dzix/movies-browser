import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople, getCredits } from "./getPeopleApi";
import {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchCredits,
  fetchCreditsSuccess,
  fetchCreditsError,
} from "./peopleSlice";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    yield delay(100);
    const people = yield call(
      getPopularPeople,
      payload.currentPage,
      payload.query
    );
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
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchCredits.type, fetchCreditsHandler);
}
