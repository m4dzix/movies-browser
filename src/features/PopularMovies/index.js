import React, { useEffect } from "react";
import Main from "../../common/Main";
import Section from "../../common/Section";
import Tile from "../../common/Tile";
import video from "./Video.svg";
import { Tag } from "./style";
import {
  fetchPopularMovies,
  fetchGenres,
  selectLoading,
  selectPopularMovies,
  selectGenres,
} from "./moviesSlice";
import { useSelector, useDispatch } from "react-redux";
const PopularMovies = () => {
  const loading = useSelector(selectLoading);
  const popularMovies = useSelector(selectPopularMovies);
  const movieGenres = useSelector(selectGenres);
  console.log(movieGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const type = (genreId) =>
    movieGenres
      .filter((item) => item.id === genreId)
      .map((genres) => genres.name);

  if (!loading && popularMovies) {
    return (
      <Main>
        <Section
          title={"Popular movies"}
          body={popularMovies.map((movie) => (
            <Tile
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
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
            ></Tile>
          ))}
        ></Section>
      </Main>
    );
  } else if (loading) {
    return <div>LOADING LOADING LOADING</div>;
  } else {
    return <div>ERROR ERROR </div>;
  }
};
export default PopularMovies;
