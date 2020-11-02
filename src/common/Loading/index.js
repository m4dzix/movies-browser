import React from "react";
import { useSelector } from "react-redux";
import { selectQuery } from "../../features/Movies/moviesSlice";
import Header from "./../Header";
import { LoadingWrapper, StyledSpinner } from "./styled";


const Loading = () => {
    const query = useSelector(selectQuery);
    return (
        <>
            <Header title={`Search results for ${query}`}/>
            <LoadingWrapper>
                <StyledSpinner />
            </LoadingWrapper>
        </>
    );

}
export default Loading;