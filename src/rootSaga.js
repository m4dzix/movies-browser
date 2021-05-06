import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/Movies/PopularMovies/moviesSaga";
import { watchFetchMovieDetails } from "./features/Movies/MovieDetails/movieDetailsSaga";
import { watchFetchPopularPeople } from "./features/People/PopularPeople/peopleSaga";
import { watchFetchPersonDetails } from "./features/People/PersonDetails/personDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchMovieDetails(),
    watchFetchPopularPeople(),
    watchFetchPersonDetails(),
  ]);
}
