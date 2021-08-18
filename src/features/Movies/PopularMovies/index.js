import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPopularMovies,
  selectLoading,
  selectMovies,
  selectTotalMoviePages,
  showId,
} from "./moviesSlice";
import video from "../../../assets/Video.svg";
import starIcon from "../../../assets/Vector.svg";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import Tile from "../../../common/Tile";
import { StyledLink } from "../../../common/Tile/additionalStyled";
import NoResults from "../../../common/NoResults";
import Pagination from "../../../common/Pagination";
import { toMovie } from "../../../routes";
import { useQueryParameters } from "../../../useQueryParameters";

const PopularMovies = () => {
  const query = useQueryParameters("search");
  const loading = useSelector(selectLoading);
  const page = useQueryParameters("page");
  const lastPage = useSelector(selectTotalMoviePages);
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    console.log(page);
    page === null
      ? dispatch(fetchPopularMovies({ currentPage: 1, query }))
      : dispatch(fetchPopularMovies({ currentPage: page, query }));
  }, [dispatch, page, query]);

  if (!loading && movies.length > 0) {
    return (
      <Main>
        <Section
          title={query ? `Search for: ${query}` : "Popular movies"}
          body={movies.map((movie) => (
            <StyledLink
              to={toMovie({ id: movie.id })}
              key={`${movie.id}+${movie.title || movie.tmdb_id}`}
            >
              <Tile
                onClick={() => {
                  dispatch(showId());
                }}
                key={`${movie.id}+${movie.orginal_title || movie.tmdb_id}`}
                title={movie.title}
                yearOrCharacter={
                  !!movie.release_date ? movie.release_date.split("-")[0] : ""
                }
                genre_ids={movie.genre_ids}
                imagePath={
                  !!movie.poster_path
                    ? `https://images.tmdb.org/t/p/w185/${movie.poster_path}`
                    : video
                }
                starIcon={starIcon}
                voteAverage={
                  movie.vote_average !== 0 ? movie.vote_average.toFixed(1) : ""
                }
                voteCount={`${movie.vote_count === 0 ? "" : movie.vote_count} ${
                  !!movie.vote_average
                    ? movie.vote_count === 1
                      ? "vote"
                      : "votes"
                    : "No votes yet"
                } `}
              ></Tile>
            </StyledLink>
          ))}
        ></Section>
        <Pagination currentPage={page} lastPage={lastPage} />
      </Main>
    );
  } else if (loading) {
    return <Loading />;
  }
  if (!loading && movies.length === 0) {
    return <NoResults />;
  } else {
    return <Error />;
  }
};
export default PopularMovies;
