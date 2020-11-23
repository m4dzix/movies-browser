import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import profile from "../../../assets/Profile.svg";
import {
  selectLoading,
  fetchPopularPeople,
  selectPopularPeople,
  selectChangeTileStyle,
  showId,
  selectPage,
} from "../peopleSlice";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { StyledLink } from "../../../common/Tile/additionalStyled";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import Pagination from "../../../common/Pagination";
import { toPerson } from "../../../routes";

const PopularPeople = () => {
  const loading = useSelector(selectLoading);
  const popularPeople = useSelector(selectPopularPeople);
  const changeTileStyle = useSelector(selectChangeTileStyle);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPeople(page));
  }, [dispatch, page]);

  if (!loading && popularPeople) {
    return (
      <Main>
        <Section
          changeTileStyle={changeTileStyle}
          title={"Popular people"}
          body={popularPeople.map((people) => (
            <StyledLink to={toPerson({ id: people.id })} key={people.id}>
              <Tile
                onClick={() => {
                  dispatch(showId());
                }}
                changeTileStyle={changeTileStyle}
                key={people.id}
                title={people.name}
                imagePath={
                  !!people.profile_path
                    ? `https://image.tmdb.org/t/p/w185/${people.profile_path}`
                    : profile
                }
              ></Tile>
            </StyledLink>
          ))}
        ></Section>
        <Pagination />
      </Main>
    );
  } else if (loading) {
    return <Loading />;
  } else {
    return <Error />;
  }
};

export default PopularPeople;
