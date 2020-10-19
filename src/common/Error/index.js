import React from "react";
import Header from "./../Header";
import { StyledDanger, ImageWrapper, MessageWrapper, StyledSubtitle, Button } from "./styled";

const Error = () => {
    return (
        <>
            <ImageWrapper>
                <StyledDanger />
            </ImageWrapper>
            <MessageWrapper>
                <Header title="Ooops! Something went wrong..." />
                <StyledSubtitle>
                    Please check your network connection
                    <br />
                    and try again
                </StyledSubtitle>
                <Button>
                    Back to home page
                </Button>
            </MessageWrapper>
        </>
    );
};

export default Error;
