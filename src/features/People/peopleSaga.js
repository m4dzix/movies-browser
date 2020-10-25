import { delay, call, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "./getPeopleApi";
import {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
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

export function* watchFetchPopularPeople() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
}
