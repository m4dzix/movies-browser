import React from "react";
import Main from "../Main";
import Header from "./../Header";
import {
  StyledDanger,
  ImageWrapper,
  MessageWrapper,
  StyledSubtitle,
  LinkButton,
} from "./styled";
import { toMovies } from "../../routes";

const Error = () => {
  return (
    <Main>
      <ImageWrapper>
        <StyledDanger />
      </ImageWrapper>
      <MessageWrapper>
        <Header title="Ooops! Something went wrong..." />
        <StyledSubtitle>
          Please check your network connection
          <br />
          and try again
        </StyledSubtitle>
        <LinkButton to={toMovies()}>Back to home page</LinkButton>
      </MessageWrapper>
    </Main>
  );
};

export default Error;
