import React from "react";
import Header from "./../Header";
import Main from "../Main";
import { StyledPaperPlane, ImageWrapper } from "./styled";
import { useQueryParameters } from "../../useQueryParameters";

const NoResults = () => {
  const query = useQueryParameters("search");

  return (
    <Main>
      <Header title={`Sorry, there are no results for „${query}”`} />
      <ImageWrapper>
        <StyledPaperPlane />
      </ImageWrapper>
    </Main>
  );
};

export default NoResults;
