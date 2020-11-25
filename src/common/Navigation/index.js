import React from "react";
import { useDispatch } from "react-redux";
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
import { Link } from "react-router-dom";
import { SearchInput } from "../SearchInput";
import { toMovies, toPeople } from "../../routes";
import { firstPage } from "../../features/Movies/moviesSlice";
import search from "../../images/search.svg";
import camera from "../../images/camera.svg";

export const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <NavContainer>
        <NavContent>
          <LogoContainer>
            <Link to={toMovies()}>
              <StyledImg src={camera} alt="camera icon" />
            </Link>
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
          <SearchInput />
        </InputContainer>
      </NavContainer>
    </nav>
  );
};

export default Navigation;
