import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getMovieGenres } from "./getGenresApi";
import {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} from "./genresSlice";

function* fetchGenresHandler() {
  try {
    yield delay(100);
    const genres = yield call(getMovieGenres);
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
