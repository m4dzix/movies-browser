import React, { useEffect } from "react";
import Main from "../../common/Main";
import Section from "../../common/Section";
import Tile from "../../common/Tile";
import video from "./Video.svg";
import {
  fetchPopularMovies,
  selectLoading,
  selectPopularMovies,
} from "./moviesSlice";
import { useSelector, useDispatch } from "react-redux";
const PopularMovies = () => {
  const loading = useSelector(selectLoading);
  console.log(loading);
  const popularMovies = useSelector(selectPopularMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

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
              type={movie.genre_ids}
              imagePath={
                !!movie.poster_path
                  ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
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
