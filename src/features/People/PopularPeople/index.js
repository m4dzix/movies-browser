import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import profile from "../../../assets/Profile.svg";
import {
  selectLoading,
  fetchPopularPeople,
  selectTotalPeoplePages,
  selectPeople,
  selectChangeTileStyle,
  showId,
} from "./peopleSlice";
import { useQueryParameters } from "../../../customHooks/useQueryParameters";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { StyledLink } from "../../../common/Tile/additionalStyled";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import Pagination from "../../../common/Pagination";
import NoResults from "../../../common/NoResults";

const PopularPeople = () => {
  const loading = useSelector(selectLoading);
  const query = useQueryParameters("search");
  const people = useSelector(selectPeople);
  const changeTileStyle = useSelector(selectChangeTileStyle);
  const page = useQueryParameters("page");
  const lastPage = useSelector(selectTotalPeoplePages);
  const dispatch = useDispatch();

  useEffect(() => {
    page === null
      ? dispatch(fetchPopularPeople({ currentPage: 1, query }))
      : dispatch(fetchPopularPeople({ currentPage: page, query }));
  }, [dispatch, page, query]);

  const toPerson = ({ id } = { id: ":id" }) => `/people-details/${id}`;

  if (!loading && people) {
    return (
      <Main>
        <Section
          changeTileStyle={changeTileStyle}
          title={"Popular people"}
          body={people.map((person) => (
            <StyledLink to={toPerson({ id: person.id })} key={person.id}>
              <Tile
                onClick={() => {
                  dispatch(showId());
                }}
                changeTileStyle={changeTileStyle}
                key={`${person.id} + ${person.name || person.tmdb_id}`}
                title={person.name}
                imagePath={
                  !!person.profile_path
                    ? `https://image.tmdb.org/t/p/w185/${person.profile_path}`
                    : profile
                }
              ></Tile>
            </StyledLink>
          ))}
        ></Section>
        <Pagination currentPage={page} lastPage={lastPage} />
      </Main>
    );
  } else if (loading) {
    return <Loading />;
  } else if (!loading && people) {
    return <NoResults />;
  } else {
    return <Error />;
  }
};

export default PopularPeople;
