import { delay, call, put, takeEvery } from "redux-saga/effects";
import {
  getPopularMovies,
  getMovieGenres,
  getMovieDetails,
  getMovieCredits,
} from "./getMoviesApi";

import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield delay(500);
    const movies = yield call(getPopularMovies, page);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}
function* fetchGenresHandler() {
  try {
    yield delay(500);
    const genres = yield call(getMovieGenres);
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}
function* fetchMovieDetailsHandler({ payload: id }) {
  try {
    yield delay(100);
    const movieDetails = yield call(getMovieDetails, id);
    yield put(fetchMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}
function* fetchMovieCreditsHandler({ payload: id }) {
  try {
    yield delay(500);
    const movieCredits = yield call(getMovieCredits, id);
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(fetchMovieCreditsError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchGenres.type, fetchGenresHandler);
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeEvery(fetchMovieCredits.type, fetchMovieCreditsHandler);
}
