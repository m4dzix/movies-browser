import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { selectQuery, updateQuery } from "../../features/Movies/moviesSlice";
import { selectPeopleActiveTab } from "../../features/People/peopleSlice";
import {Input} from "./styled";

export const SearchInput = () => {
    const query = useSelector(selectQuery);
    const isPeopleTabActive = useSelector(selectPeopleActiveTab);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const handleChange = (value) => {
        const searchParams = new URLSearchParams(location.search);

        if(value.trim() === "") {
            searchParams.delete("search");
        } else {
            searchParams.set("search", value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
        dispatch(updateQuery(value));
    };
    
    return(
        <Input
            placeholder={isPeopleTabActive ? "Search for people..." : "Search for movies..."}
            value={query || ""}
            onChange={({ target }) => handleChange(target.value)}
        />
    )
}