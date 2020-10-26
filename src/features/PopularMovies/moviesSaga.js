import { delay, call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies, getMovieGenres, getMovieCredits } from "./getApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(500);
    const movies = yield call(getPopularMovies);
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
  yield takeEvery(fetchMovieCredits.type, fetchMovieCreditsHandler);
}
