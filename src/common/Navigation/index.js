import React from "react";
import {
  StyledLink,
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
import { SearchInput } from "../SearchInput";
import { toMovies, toPeople } from "../../routes";
import search from "../../images/search.svg";
import camera from "../../images/camera.svg";

export const Navigation = () => {
  return (
    <nav>
      <NavContainer>
        <NavContent>
          <LogoContainer>
            <StyledLink to={toMovies()}>
              <StyledImg src={camera} alt="camera icon" />
              <Title>Movies Browser</Title>
            </StyledLink>
          </LogoContainer>
          <LinkContainer>
            <ListItem>
              <StyledNavLink to={toMovies}>movies</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to={toPeople()}>people</StyledNavLink>
            </ListItem>
          </LinkContainer>
        </NavContent>
        <InputContainer>
          <StyledImg src={search} alt="lens icon" />
          <SearchInput />
        </InputContainer>
      </NavContainer>
    </nav>
  );
};

export default Navigation;
