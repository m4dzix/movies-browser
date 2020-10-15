import { delay, call, put } from "./redux-saga/effects";
import { getPopularMovies } from "./getApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
  try {
    delay(100);
    const popularMovies = call(getPopularMovies);
    yield put(fetchPopularMoviesSuccess(popularMovies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFerchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
}
