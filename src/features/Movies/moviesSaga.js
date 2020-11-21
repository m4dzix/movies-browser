import { delay, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getPopularMovies,
  getMovieGenres,
  getMovieDetails,
  getMoviesByQuery,
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
  fetchMoviesByQuery,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryError,
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
function* fetchGenresHandler() {
  try {
    yield delay(100);
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
function* fetchMoviesByQueryHandler({ payload: query}) {
  try {
    yield delay(100);
    const searchMovies = yield call(getMoviesByQuery, query);
    yield put(fetchMoviesByQuerySuccess(searchMovies));
  } catch (error) {
    yield put(fetchMoviesByQueryError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchGenres.type, fetchGenresHandler);
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchMoviesByQuery.type, fetchMoviesByQueryHandler);
}
