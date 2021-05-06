import React from "react";
import { useDispatch } from "react-redux";
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
import { firstPage } from "../../features/Movies/PopularMovies/moviesSlice";
import search from "../../images/search.svg";
import camera from "../../images/camera.svg";
import {
  peopleTabActive,
  peopleTabInactive,
} from "../../features/People/peopleSlice";

export const Navigation = () => {
  const dispatch = useDispatch();

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
              <StyledNavLink
                to={toMovies()}
                onClick={() => {
                  dispatch(firstPage());
                  dispatch(peopleTabInactive());
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
                  dispatch(peopleTabActive());
                }}
              >
                people
              </StyledNavLink>
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
