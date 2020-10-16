import { delay, call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "./getApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(100);
    const movies = yield call(getPopularMovies);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
}
