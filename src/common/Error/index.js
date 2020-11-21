import React from "react";
import Main from "../Main";
import Header from "./../Header";
import { StyledDanger, ImageWrapper, MessageWrapper, StyledSubtitle, Button } from "./styled";

const Error = () => {
    return (
        <Main>
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
        </Main>
    );
};

export default Error;
