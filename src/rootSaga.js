import { all } from "redux-saga/effects";
import { watchFetchPopularPeople } from "./features/People/peopleSaga";
import { watchFetchPopularMovies } from "./features/Movies/PopularMovies/moviesSaga";
import { watchFetchMovieDetails } from "./features/Movies/MovieDetails/movieDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchMovieDetails(),
    watchFetchPopularPeople(),
  ]);
}
