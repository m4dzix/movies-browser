import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchMoviesByQuery,
    fetchGenres,
    selectLoading,
    selectMoviesByQuery,
    selectGenres,
    showId,
    selectQuery,
} from "../moviesSlice";
import video from "../../../assets/Video.svg";
import starIcon from "../../../assets/Vector.svg";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { Tag, StyledLink } from "../../../common/Tile/additionalStyled";

const MoviesByQuery = () => {
    const loading = useSelector(selectLoading);
    const movieGenres = useSelector(selectGenres);
    const moviesByQuery = useSelector(selectMoviesByQuery);
    const query = useSelector(selectQuery);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesByQuery(query));
    }, [dispatch, query]);

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    const type = (genreId) =>
        movieGenres
            .filter((item) => item.id === genreId)
            .map((genres) => genres.name);

    const toMovie = ({ id } = { id: "id" }) => `/movie-details/${id}`;

    if (!loading && moviesByQuery) {
        return (
            <Main>
                <Section
                    title={`Search results for: ${query}`}
                    body={moviesByQuery.map((movie) => (
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
    }
    else if (loading) {
        return <div>LOADING LOADING LOADING</div>;
    } else {
        return <div>ERROR ERROR </div>;
    }
};
export default MoviesByQuery;