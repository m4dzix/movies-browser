import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectPersonDetails,
  fetchPersonDetails,
  selectLoading,
} from "../peopleSlice";
import {
  selectMovieCast,
  selectMovieCrew,
  fetchMovieCredits,
  fetchGenres,
  selectGenres,
} from "../../PopularMovies/moviesSlice";
import starIcon from "../../../assets/Vector.svg";
import video from "../../../assets/Video.svg";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import DetailsTile from "../../../common/Tile/DetailsTile";
import { Tag } from "../../PopularMovies/styled";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const PersonDetails = () => {
  const personDetails = useSelector(selectPersonDetails);
  const movieCast = useSelector(selectMovieCast);
  const movieCrew = useSelector(selectMovieCrew);
  const movieGenres = useSelector(selectGenres);
  const loading = useSelector(selectLoading);
  const castNumber = movieCast.length;
  const crewNumber = movieCrew.length;

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchMovieCredits(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const tag = (genreId) =>
    movieGenres
      .filter((item) => item.id === genreId)
      .map((genres) => genres.name);

  if (!loading && personDetails) {
    return (
      <Main>
        <DetailsTile
          imagePath={`https://image.tmdb.org/t/p/w185/${personDetails.profile_path}`}
          title={personDetails.name}
          info1={"date of birth: "}
          value1={personDetails.birthday}
          info2={"Place of birth: "}
          value2={personDetails.place_of_birth}
          description={personDetails.biography}
        ></DetailsTile>
        <Section
          title={`Movie - cast (${castNumber})`}
          body={movieCast.map((movie) => (
            <Tile
              key={movie.credit_id}
              title={movie.title}
              year={`${movie.character} (${movie.release_date})`}
              type={movie.genre_ids.map((id) => (
                <Tag key={id}>{tag(id)}</Tag>
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
          ))}
        ></Section>
        <Section
          title={`Movie - crew (${crewNumber})`}
          body={movieCrew.map((movie) => (
            <Tile
              key={movie.credit_id}
              title={movie.title}
              year={`${movie.job} (${movie.release_date})`}
              type={movie.genre_ids.map((id) => (
                <Tag key={id}>{tag(id)}</Tag>
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
export default PersonDetails;
