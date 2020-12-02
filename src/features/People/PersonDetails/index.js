import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectPersonDetails,
  fetchPersonDetails,
  selectLoading,
  selectChangeTileStyle,
} from "../peopleSlice";
import {
  selectMovieCast,
  selectMovieCrew,
  fetchMovieCredits,
  fetchGenres,
  selectGenres,
  showId,
} from "../../Movies/moviesSlice";
import starIcon from "../../../assets/Vector.svg";
import video from "../../../assets/Video.svg";
import profile from "../../../assets/Profile.svg";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { Tag, StyledLink } from "../../../common/Tile/additionalStyled";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { toMovie } from "../../../routes";

const PersonDetails = () => {
  const changeTileStyle = useSelector(selectChangeTileStyle);
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
        <Tile
          detailsTileStyle={changeTileStyle}
          imagePath={
            !!personDetails.profile_path
              ? `https://image.tmdb.org/t/p/w185/${personDetails.profile_path}`
              : profile
          }
          title={personDetails.name}
          info1={"Date of birth: "}
          value1={!!personDetails.birthday ? personDetails.birthday : "-"}
          info2={"Place of birth: "}
          value2={
            !!personDetails.place_of_birth ? personDetails.place_of_birth : "-"
          }
          description={personDetails.biography}
        ></Tile>
        <Section
          title={`Movie - cast (${castNumber})`}
          body={movieCast.map((movie) => (
            <StyledLink
              to={toMovie({ id: movie.id })}
              key={`${movie.id} + ${movie.character}`}
            >
              <Tile
                onClick={() => {
                  dispatch(showId());
                }}
                key={`${movie.credit_id} + ${movie.original_name}`}
                title={movie.title}
                yearOrCharacter={`${movie.character} 
                (${
                  !!movie.release_date ? movie.release_date.split("-")[0] : ""
                })`}
                type={movie.genre_ids.map((id) => (
                  <Tag key={id}>{tag(id)}</Tag>
                ))}
                imagePath={
                  !!movie.poster_path
                    ? `https://images.tmdb.org/t/p/w185/${movie.poster_path}`
                    : video
                }
                starIcon={starIcon}
                voteAverage={`${movie.vote_average.toFixed(1)}`}
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
        <Section
          title={`Movie - crew (${crewNumber})`}
          body={movieCrew.map((movie) => (
            <StyledLink
              to={toMovie({ id: movie.id })}
              key={`${movie.id} + ${movie.original_title} + ${movie.credit_id}`}
            >
              <Tile
                onClick={() => {
                  dispatch(showId());
                }}
                key={movie.credit_id}
                title={movie.title}
                yearOrCharacter={`${movie.job} 
                 (${
                   !!movie.release_date ? movie.release_date.split("-")[0] : ""
                 })`}
                type={movie.genre_ids.map((id) => (
                  <Tag key={id}>{tag(id)}</Tag>
                ))}
                imagePath={
                  !!movie.poster_path
                    ? `https://images.tmdb.org/t/p/w185/${movie.poster_path}`
                    : video
                }
                starIcon={starIcon}
                voteAverage={`${movie.vote_average.toFixed(1)}`}
                voteCount={`${movie.vote_count === 0 ? "" : movie.vote_count}
                  ${
                    !!movie.vote_average
                      ? movie.vote_count === 1
                        ? "vote"
                        : "votes"
                      : "No votes yet"
                  }
                `}
              ></Tile>
            </StyledLink>
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
