import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import genresReducer from "./common/Genres/genresSlice";
import moviesReducer from "./features/Movies/PopularMovies/moviesSlice";
import moviedDetailsReducer from "./features/Movies/MovieDetails/movieDetailsSlice";
import peopleReducer from "./features/People/PopularPeople/peopleSlice";
import personDetailsReducer from "./features/People/PersonDetails/personDetailsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    genres: genresReducer,
    movies: moviesReducer,
    movieDetails: moviedDetailsReducer,
    people: peopleReducer,
    personDetails: personDetailsReducer,
  },

  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
