import React, { useEffect } from "react";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectLoading,
  fetchPopularPeople,
  selectPopularPeople,
  selectChangeTileStyle,
  showId,
} from "../peopleSlice";

const PopularPeople = () => {
  const loading = useSelector(selectLoading);
  const popularPeople = useSelector(selectPopularPeople);
  const changeTileStyle = useSelector(selectChangeTileStyle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  const toPerson = ({ id } = { id: ":id" }) => `/people-details/${id}`;

  if (!loading && popularPeople) {
    return (
      <Main>
        <Section
          changeTileStyle={changeTileStyle}
          title={"Popular people"}
          body={popularPeople.map((people) => (
            <Link to={toPerson({ id: people.id })} key={people.id}>
              <Tile
                onClick={() => {
                  dispatch(showId());
                }}
                changeTileStyle={changeTileStyle}
                key={people.id}
                title={people.name}
                imagePath={`https://image.tmdb.org/t/p/w185/${people.profile_path}`}
              ></Tile>
            </Link>
          ))}
        ></Section>
      </Main>
    );
  } else if (loading) {
    return <Loading />;
  } else {
    return <Error />;
  }
};
export default PopularPeople;
