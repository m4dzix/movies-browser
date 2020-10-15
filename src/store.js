import { configureStore } from "@react/toolkit";
import createSagaMiddleware from "redaux-saga";
import moviesReducer from "./features/PopularMovies/moviesSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { movies: moviesReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
