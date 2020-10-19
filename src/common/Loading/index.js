import React from "react";
import Header from "./../Header";
import { LoadingWrapper, StyledSpinner } from "./styled";


const Loading = () => (
    <>
        <Header title="Search results for “INPUT”"/>
        <LoadingWrapper>
            <StyledSpinner />
        </LoadingWrapper>
    </>
);

export default Loading;