import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  StyledNavLink,
  NavContainer,
  NavContent,
  Input,
  InputContainer,
  LogoContainer,
  Title,
  LinkContainer,
  StyledImg,
  ListItem,
} from "./styled";
import Pagination from "./common/Pagination";
import PopularMovies from "./features/Movies/PopularMovies";
import MovieDetails from "./features/Movies/MovieDetails";
import PopularPeople from "./features/People/PopularPeople";
import PersonDetails from "./features/People/PersonDetails";
import search from "./images/search.svg";
import camera from "./images/camera.svg";

const App = () => {
  const toMovie = ({ id } = { id: ":id" }) => `/movie-details/${id}`;
  const toPerson = ({ id } = { id: ":id" }) => `/people-details/${id}`;

  return (
    <HashRouter>
      <nav>
        <NavContainer>
          <NavContent>
            <LogoContainer>
              <StyledImg src={camera} alt="camera icon" />
              <Title>Movies Browser</Title>
            </LogoContainer>
            <LinkContainer>
              <ListItem>
                <StyledNavLink to="/popular-movies">movies</StyledNavLink>
              </ListItem>
              <ListItem>
                <StyledNavLink to="/popular-people">people</StyledNavLink>
              </ListItem>
            </LinkContainer>
          </NavContent>
          <InputContainer>
            <StyledImg src={search} alt="lens icon" />
            <Input placeholder="Search for movies..." />
          </InputContainer>
        </NavContainer>
      </nav>
      <Switch>
        <Route path="/popular-movies">
          <PopularMovies />
          <Pagination />
        </Route>
        <Route path="/popular-people">
          <PopularPeople />
          <Pagination />
        </Route>
        <Route path={toMovie()}>
          <MovieDetails />
        </Route>
        <Route path={toPerson()}>
          <PersonDetails />
        </Route>
        <Route path="/">
          <Redirect to="/popular-movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
export default App;
