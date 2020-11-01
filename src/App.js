import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  StyledNavLink,
  NavContainer,
  NavContent,
  InputContainer,
  LogoContainer,
  Title,
  LinkContainer,
  StyledImg,
  ListItem,
} from "./styled";
import { SearchInput } from "./common/SearchInput";
import Pagination from "./common/Pagination";
import PopularMovies from "./features/Movies/PopularMovies";
import PopularPeople from "./features/People/PopularPeople";
import MovieDetails from "./features/Movies/MovieDetails";
import MoviesByQuery from "./features/Movies/MoviesByQuery";
import search from "./images/search.svg";
import camera from "./images/camera.svg";
import { useSelector } from "react-redux";
import { selectQuery } from "./features/Movies/moviesSlice";

const App = () => {
  const toMovie = ({ id } = { id: ":id" }) => `/movie-details/${id}`;
  const query = useSelector(selectQuery);

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
            <SearchInput />
          </InputContainer>
        </NavContainer>
      </nav>
      <Switch>
        <Route path="/popular-movies">
          <PopularMovies />
          <Pagination />
        </Route>
        <Route path={`/popular-movies?search=${query}`}>
          <MoviesByQuery />
        </Route>
        <Route path="/popular-people">
          <PopularPeople />
          <Pagination />
        </Route>
        <Route path={toMovie()}>
          <MovieDetails />
        </Route>
        <Route path="/">
          <Redirect to="/popular-movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
export default App;