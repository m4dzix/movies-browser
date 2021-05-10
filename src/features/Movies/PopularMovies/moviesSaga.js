import { delay, call, put, takeLatest } from "redux-saga/effects";
import {
  getPopularMovies,
  getMoviesByQuery,
  getMovieCredits,
} from "./getMoviesApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchMoviesByQuery,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryError,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield delay(100);
    const movies = yield call(getPopularMovies, page);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

function* fetchMoviesByQueryHandler({ payload: query, page }) {
  try {
    yield delay(100);
    const searchMovies = yield call(getMoviesByQuery, query, page);
    yield put(fetchMoviesByQuerySuccess(searchMovies));
  } catch (error) {
    yield put(fetchMoviesByQueryError());
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
  yield takeLatest(fetchMoviesByQuery.type, fetchMoviesByQueryHandler);
  yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
}
