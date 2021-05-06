import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getPersonDetails } from "./getPersonDetailsApi";
import {
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
} from "./personDetailsSlice";

function* fetchPersonDetailsHandler({ payload: id }) {
  try {
    yield delay(100);
    const personDetails = yield call(getPersonDetails, id);
    yield put(fetchPersonDetailsSuccess(personDetails));
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}

export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
