import React from "react";
import PopularMovies from "./features/PopularMovies";
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
import search from "./images/search.svg";
import camera from "./images/camera.svg";

export default () => (
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
      </Route>
      <Route path="/popular-people">
        <div>popular people</div>
      </Route>
      <Route path="/">
        <Redirect to="/popular-movies" />
      </Route>
    </Switch>
  </HashRouter>
);
