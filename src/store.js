import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import moviesReducer from "./features/Movies/PopularMovies/moviesSlice";
import moviedDetailsReducer from "./features/Movies/MovieDetails/movieDetailsSlice";
import peopleReducer from "./features/People/peopleSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: moviedDetailsReducer,
    people: peopleReducer,
  },

  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
