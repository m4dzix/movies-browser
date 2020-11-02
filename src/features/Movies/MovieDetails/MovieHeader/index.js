import React from "react";
import starIcon from "./../../../../assets/Vector.svg";
import {
    Backdrop,
    BackdropWrapper,
    Background,
    MovieDetails,
    RatingsWrapper,
    Title,
    Votes,
    Star,
    Count,
} from "./styled";

const MovieHeader = ({ title, backdropPath, voteAverage, voteCount }) => {

    return (
        <Background>
            <BackdropWrapper>
                <MovieDetails>
                    <Title>{title}</Title>
                    <RatingsWrapper>
                        <Count>
                            <Star src={starIcon} />
                            {voteAverage} <Votes>/ 10</Votes>
                        </Count>
                        <Votes>{voteCount} votes</Votes>
                    </RatingsWrapper>
                </MovieDetails>
                <Backdrop src={`https://image.tmdb.org/t/p/w1280${backdropPath}`} />
            </BackdropWrapper>
        </Background>
    );
};

export default MovieHeader;