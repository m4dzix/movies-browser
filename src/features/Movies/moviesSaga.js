import { delay, call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies, getMovieGenres } from "./getApi";
import { getMovieDetails } from "./MovieDetails/getMovieDeatailsApi";
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

export function* watchFetchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchGenres.type, fetchGenresHandler);
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
