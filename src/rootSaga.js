import { all } from "redux-saga/effects";
import { watchFetchPopularPeople } from "./features/People/peopleSaga";
import { watchFetchPopularMovies } from "./features/Movies/moviesSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies(), watchFetchPopularPeople()]);
}
