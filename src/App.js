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
import { toMovies, toPeople, toMovie, toPerson } from "./routes";
import { firstPage } from "./features/Movies/moviesSlice";
import { useDispatch } from "react-redux";
import PopularMovies from "./features/Movies/PopularMovies";
import MovieDetails from "./features/Movies/MovieDetails";
import PopularPeople from "./features/People/PopularPeople";
import PersonDetails from "./features/People/PersonDetails";
import search from "./images/search.svg";
import camera from "./images/camera.svg";

const App = () => {
  const dispatch = useDispatch();
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
                <StyledNavLink
                  to={toMovies()}
                  onClick={() => {
                    dispatch(firstPage());
                  }}
                >
                  movies
                </StyledNavLink>
              </ListItem>
              <ListItem>
                <StyledNavLink
                  to={toPeople()}
                  onClick={() => {
                    dispatch(firstPage());
                  }}
                >
                  people
                </StyledNavLink>
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
