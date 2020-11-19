import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPopularMovies,
  fetchGenres,
  selectLoading,
  selectMovies,
  selectGenres,
  showId,
  selectQuery,
  fetchMoviesByQuery,
} from "../moviesSlice";
import video from "../../../assets/Video.svg";
import starIcon from "../../../assets/Vector.svg";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { Tag, StyledLink } from "../../../common/Tile/additionalStyled";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const PopularMovies = () => {

  const query = useSelector(selectQuery);
  const loading = useSelector(selectLoading);
  const movieGenres = useSelector(selectGenres);

  const dispatch = useDispatch();

  const movies = useSelector(selectMovies);

  useEffect(() => {
    if (query === "") {
      dispatch(fetchPopularMovies());
    } else {
      dispatch(fetchMoviesByQuery(query));
    }
  }, [dispatch, query]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const type = (genreId) =>
    movieGenres
      .filter((item) => item.id === genreId)
      .map((genres) => genres.name);

  const toMovie = ({ id } = { id: "id" }) => `/movie-details/${id}`;

  if (!loading && movies) {
    return (
      <Main>
        <Section
          title={query ? `Search for ${query}` : "Popular movies"}
          body={movies.map((movie) => (
            <StyledLink to={toMovie({ id: movie.id })} key={movie.id}>
              <Tile
                onClick={() => {
                  dispatch(showId());
                }}
                key={movie.id}
                title={movie.title}
                year={movie.release_date.split("-")[0]}
                type={movie.genre_ids.map((id) => (
                  <Tag key={id}>{type(id)}</Tag>
                ))}
                imagePath={
                  !!movie.poster_path
                    ? `https://images.tmdb.org/t/p/w185/${movie.poster_path}`
                    : video
                }
                starIcon={starIcon}
                voteAverage={movie.vote_average}
                voteCount={`${movie.vote_count} votes`}
              ></Tile>
            </StyledLink>
          ))}
        ></Section>
      </Main>
    );
  } else if (loading) {
    return <Loading />
  } else {
    return <Error />
  }
};
export default PopularMovies;
