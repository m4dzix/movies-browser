import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/PopularMovies/moviesSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()]);
}
