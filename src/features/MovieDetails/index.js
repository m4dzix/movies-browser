import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovieDetails,
  fetchMovieDetails,
  selectLoadingMovieDetails,
} from "../PopularMovies/moviesSlice";
import video from "../../assets/Video.svg";
import profile from "../../assets/Profile.svg";
import starIcon from "../../assets/Vector.svg";
import {
  selectCast,
  selectCrew,
  fetchCredits,
  selectChangeTileStyle,
} from "../People/peopleSlice";
import Main from "../../common/Main";
import DetailsTile from "../../common/Tile/detailsTile";
import { Tag } from "../PopularMovies/styled";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import Section from "../../common/Section";
import Tile from "../../common/Tile";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const movieDetails = useSelector(selectMovieDetails);
  const loading = useSelector(selectLoadingMovieDetails);

  const changeTileStyle = useSelector(selectChangeTileStyle);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchCredits(id));
  }, [dispatch, id]);

  if (!loading && movieDetails) {
    return (
      <Main>
        <DetailsTile
          imagePath={
            !!movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`
              : video
          }
          imagePath={
            !!movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`
              : video
          }
          title={movieDetails.title}
          year={movieDetails.release_date.split("-")[0]}
          info1={"Production: "}
          value1={movieDetails.production_countries.map(
            (country) => `${country.name}, `
          )}
          info2={"release date: "}
          value2={movieDetails.release_date}
          type={movieDetails.genres.map((genre) => (
            <Tag key={genre.id}>{genre.name}</Tag>
          ))}
          starIcon={starIcon}
          voteAverage={movieDetails.vote_average}
          voteCount={movieDetails.vote_count}
          description={movieDetails.overview}
        ></DetailsTile>
        <Section
          changeTileStyle={changeTileStyle}
          title={"Cast"}
          body={cast.map((people) => (
            <Tile
              key={people.credit_id}
              changeTileStyle={changeTileStyle}
              imagePath={
                !!people.profile_path
                  ? `https://image.tmdb.org/t/p/w185/${people.profile_path}`
                  : profile
              }
              title={people.name}
              year={people.character}
            ></Tile>
          ))}
        ></Section>
        <Section
          changeTileStyle={changeTileStyle}
          title={"Crew"}
          body={crew.map((people) => (
            <Tile
              changeTileStyle={changeTileStyle}
              key={people.credit_id}
              imagePath={
                !!people.profile_path
                  ? `https://image.tmdb.org/t/p/w185/${people.profile_path}`
                  : profile
              }
              title={people.name}
              year={people.character}
            ></Tile>
          ))}
        ></Section>
      </Main>
    );
  } else if (loading) {
    return <Loading />;
  } else {
    return <Error />;
  }
};

export default MovieDetails;
