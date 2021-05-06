import React from "react";
import { useSelector } from "react-redux";
import { selectQuery } from "../../features/Movies/PopularMovies/moviesSlice";
import Main from "../Main";
import Header from "./../Header";
import { LoadingWrapper, StyledSpinner } from "./styled";

const Loading = () => {
  const query = useSelector(selectQuery);
  return (
    <Main>
      <Header title={query ? `Search results for: ${query}` : `Loading...`} />
      <LoadingWrapper>
        <StyledSpinner />
      </LoadingWrapper>
    </Main>
  );
};
export default Loading;
