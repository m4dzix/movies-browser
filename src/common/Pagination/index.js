import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Pages, Text } from "./styled";
import {
  selectMoviePage,
  selectTotalMoviePages,
  nextPage,
  previousPage,
  lastPage,
  firstPage,
} from "../../features/Movies/moviesSlice";
import {
  selectPeopleActiveTab,
  selectPeoplePage,
  selectTotalPeoplePages,
} from "../../features/People/peopleSlice";
const Pagination = () => {
  const currentMoviePage = useSelector(selectMoviePage);
  const currentPeoplePage = useSelector(selectPeoplePage);
  const maxMoviePages = useSelector(selectTotalMoviePages);
  const maxPeoplePages = useSelector(selectTotalPeoplePages);
  const isPeopleTabActive = useSelector(selectPeopleActiveTab);
  const isMobile = window.screen.width < 767;

  const dispatch = useDispatch();
  return (
    <Container>
      <Button
        onClick={() => {
          dispatch(firstPage());
        }}
        disabled={isPeopleTabActive ? currentPeoplePage === 1 : currentMoviePage === 1}
      >
        {isMobile ? (
          <>&#60;&#60;</>
        ) : (
          <>
            &#60; <Text>First</Text>
          </>
        )}
      </Button>
      <Button
        onClick={() => {
          dispatch(previousPage());
        }}
        disabled={isPeopleTabActive ? currentPeoplePage === 1 : currentMoviePage === 1}
      >
        {isMobile ? (
          <>&#60;</>
        ) : (
          <>
            &#60; <Text>Previous</Text>
          </>
        )}
      </Button>
      <Pages>
        <>
          <Text inPages>Page</Text> {isPeopleTabActive ? currentPeoplePage : currentMoviePage} <Text inPages>of</Text>{" "}
          {isPeopleTabActive ? maxPeoplePages : maxMoviePages}
        </>
      </Pages>
      <Button
        onClick={() => {
          dispatch(nextPage());
        }}
        disabled={isPeopleTabActive ? currentPeoplePage === maxPeoplePages : currentMoviePage === maxMoviePages}
      >
        {isMobile ? (
          <>&#62;</>
        ) : (
          <>
            <Text>Next</Text> &#62;
          </>
        )}
      </Button>
      <Button
        onClick={() => {
          dispatch(lastPage());
        }}
        disabled={isPeopleTabActive ? currentPeoplePage === maxPeoplePages : currentMoviePage === maxMoviePages}
      >
        {isMobile ? (
          <>&#62;&#62;</>
        ) : (
          <>
            <Text>Last</Text> &#62;
          </>
        )}
      </Button>
    </Container>
  );
};

export default Pagination;
