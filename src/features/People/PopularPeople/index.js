import React, { useEffect } from "react";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { useSelector, useDispatch } from "react-redux";

import {
  selectLoading,
  fetchPopularPeople,
  selectPopularPeople,
  selectGroup,
} from "../peopleSlice";

const PopularPeople = () => {
  const loading = useSelector(selectLoading);
  const popularPeople = useSelector(selectPopularPeople);
  const group = useSelector(selectGroup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  if (!loading && popularPeople) {
    return (
      <Main>
        <Section
          group={group}
          title={"Popular people"}
          body={popularPeople.map((people) => (
            <Tile
              group={group}
              key={people.id}
              title={people.name}
              imagePath={`https://image.tmdb.org/t/p/w185/${people.profile_path}`}
            ></Tile>
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
