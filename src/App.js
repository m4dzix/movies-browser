import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink, NavContainer, Input, InputContainer, LogoContainer, Title, LinkContainer, StyledImg, ListItem } from "./styled";
import search from "./images/search.svg";
import camera from "./images/camera.svg";

export default () => (
  <HashRouter>
    <nav>
      <NavContainer>
        <LogoContainer>
          <StyledImg src={camera} alt="camera icon" />
          <Title>Movies Browser</Title>
        </LogoContainer>
        <LinkContainer>
          <ListItem><StyledNavLink to="/popular-movies">movies</StyledNavLink></ListItem>
          <ListItem><StyledNavLink to="/popular-people">people</StyledNavLink></ListItem>
        </LinkContainer>
        <InputContainer>
          <StyledImg src={search} alt="lens icon" />
          <Input
            placeholder="Search for movies..."
          />
        </InputContainer>
        <Switch>
          <Route path="/popular-movies">
            <div>popular movies</div>
          </Route>
          <Route path="/popular-people">
            <div>popular people</div>
          </Route>
          <Route path="/">
            <Redirect to="/popular-movies" />
          </Route>
        </Switch>
      </NavContainer>
    </nav>
  </HashRouter>
);
