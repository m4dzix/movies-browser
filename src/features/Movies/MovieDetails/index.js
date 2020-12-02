import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectMovieDetails,
  fetchMovieDetails,
  selectLoadingMovieDetails,
  selectChangeTileStyle,
  showId,
} from "../moviesSlice";
import { selectCast, selectCrew, fetchCredits } from "../../People/peopleSlice";
import video from "../../../assets/Video.svg";
import profile from "../../../assets/Profile.svg";
import starIcon from "../../../assets/Vector.svg";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { Tag, StyledLink } from "../../../common/Tile/additionalStyled";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import MovieHeader from "./MovieHeader";
import { toPerson } from "../../../routes";

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
      <>
        <MovieHeader
          title={movieDetails.title}
          backdropPath={movieDetails.backdrop_path}
          voteAverage={movieDetails.vote_average}
          voteCount={movieDetails.vote_count}
        />
        <Main>
          <Tile
            detailsTileStyle={changeTileStyle}
            hide={changeTileStyle}
            imagePath={
              !!movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`
                : video
            }
            title={movieDetails.title}
            yearOrCharacter={
              !!movieDetails.release_date
                ? movieDetails.release_date.split("-")[0]
                : ""
            }
            info1={"Production: "}
            value1={
              !movieDetails.production_countries
                ? movieDetails.production_countries.map(
                    (country) => `${country.name}, `
                  )
                : "-"
            }
            info2={"Release date: "}
            value2={
              !!movieDetails.release_date ? movieDetails.release_date : "-"
            }
            type={movieDetails.genres.map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
            starIcon={starIcon}
            voteAverage={movieDetails.vote_average.toFixed(1)}
            maxAverage={"/10"}
            voteCount={`${
              movieDetails.vote_count === 0 ? "" : movieDetails.vote_count
            } ${
              !!movieDetails.vote_average
                ? movieDetails.vote_count === 1
                  ? "vote"
                  : "votes"
                : "No votes yet"
            } `}
            description={movieDetails.overview}
          ></Tile>
          <Section
            changeTileStyle={changeTileStyle}
            title={"Cast"}
            body={cast.map((people) => (
              <StyledLink
                to={toPerson({ id: people.id })}
                key={`${people.id} + ${people.tmdb_id || people.name}`}
              >
                <Tile
                  onClick={() => {
                    dispatch(showId());
                  }}
                  key={`${people.credit_id} + ${
                    people.character || people.tmdb_id
                  }`}
                  changeTileStyle={changeTileStyle}
                  imagePath={
                    !!people.profile_path
                      ? `https://image.tmdb.org/t/p/w185/${people.profile_path}`
                      : profile
                  }
                  title={people.name}
                  yearOrCharacter={people.character}
                ></Tile>
              </StyledLink>
            ))}
          ></Section>
          <Section
            changeTileStyle={changeTileStyle}
            title={"Crew"}
            body={crew.map((people) => (
              <StyledLink
                to={toPerson({ id: people.id })}
                key={`${people.id}+${people.job || people.tmdb_id}`}
              >
                <Tile
                  onClick={() => {
                    dispatch(showId());
                  }}
                  changeTileStyle={changeTileStyle}
                  key={`${people.credit_id}+${people.name || people.tmdb_id}`}
                  imagePath={
                    !!people.profile_path
                      ? `https://image.tmdb.org/t/p/w185/${people.profile_path}`
                      : profile
                  }
                  title={people.name}
                  yearOrCharacter={people.job}
                ></Tile>
              </StyledLink>
            ))}
          ></Section>
        </Main>
      </>
    );
  } else if (loading) {
    return <Loading />;
  } else {
    return <Error />;
  }
};

export default MovieDetails;
