import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./common/Navigation";
import { toMovies, toPeople, toMovie, toPerson } from "./routes";
import PopularMovies from "./features/Movies/PopularMovies";
import MovieDetails from "./features/Movies/MovieDetails";
import PopularPeople from "./features/People/PopularPeople";
import PersonDetails from "./features/People/PersonDetails";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toMovies()}>
          <PopularMovies />
        </Route>
        <Route path={toPeople()}>
          <PopularPeople />
        </Route>
        <Route path={toMovie()}>
          <MovieDetails />
        </Route>
        <Route path={toPerson()}>
          <PersonDetails />
        </Route>
        <Route path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
