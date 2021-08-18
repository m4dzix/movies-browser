import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getPopularMovies, getMovieCredits } from "./getMoviesApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload }) {
  try {
    console.log(payload);
    yield delay(100);
    const movies = yield call(
      getPopularMovies,
      payload.currentPage,
      payload.query
    );
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

function* fetchMovieCreditsHandler({ payload: id }) {
  try {
    yield delay(100);
    const movieCredits = yield call(getMovieCredits, id);
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(fetchMovieCreditsError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
}
