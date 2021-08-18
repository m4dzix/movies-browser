import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useReplaceQueryParameters } from "../../useQueryParameters";
import {
  selectQuery,
  updateQuery,
} from "../../features/Movies/PopularMovies/moviesSlice";
import { Input } from "./styled";

export const SearchInput = () => {
  const query = useSelector(selectQuery);
  const replaceQueryParameters = useReplaceQueryParameters(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchMovies = location.pathname.includes("movies");

  const onFirstPage = (page) =>
    replaceQueryParameters({
      key: "page",
      value: page.toString(),
    });

  const onInputChange = ({ target }) => {
    onFirstPage(1);
    replaceQueryParameters({
      key: "search",
      value: target.value.trim() !== "" ? target.value : "",
    });
    dispatch(updateQuery(target.value));
  };
  return (
    <Input
      placeholder={
        searchMovies ? "Search for movies..." : "Search for people..."
      }
      value={query || ""}
      onChange={onInputChange}
    />
  );
};
