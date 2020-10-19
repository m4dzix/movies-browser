import React from "react";
import Header from "./../Header";
import { StyledPaperPlane, ImageWrapper } from "./styled";

const NoResults = () => {
    return (
        <>
            <Header title="Sorry, there are no results for “INPUT”" />
            <ImageWrapper>
                <StyledPaperPlane />
            </ImageWrapper>
        </>
    );
};

export default NoResults;