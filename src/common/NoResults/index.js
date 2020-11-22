import React from "react";
import { useSelector } from "react-redux";
import { selectQuery } from "../../features/Movies/moviesSlice";
import Header from "./../Header";
import Main from "../Main";
import { StyledPaperPlane, ImageWrapper } from "./styled";

const NoResults = () => {
    const query = useSelector(selectQuery);

    return (
        <Main>
            <Header title={`Sorry, there are no results for „${query}”`} />
            <ImageWrapper>
                <StyledPaperPlane />
            </ImageWrapper>
        </Main>
    );
};

export default NoResults;