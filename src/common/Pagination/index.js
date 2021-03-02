import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  const currentPage = isPeopleTabActive ? currentPeoplePage : currentMoviePage;
  const maxPages = isPeopleTabActive ? maxPeoplePages : maxMoviePages;

  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  const handleChange = (page) => {
    if (page === 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", page);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
  useEffect(() => {
    handleChange(currentPage);
  }, []);
  console.log(currentPage);
  return (
    <Container>
      <Button
        onClick={() => {
          dispatch(firstPage());
        }}
        disabled={currentPage === 1}
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
        disabled={currentPage === 1}
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
          <Text inPages>Page</Text> {currentPage} <Text inPages>of</Text>{" "}
          {maxPages}
        </>
      </Pages>
      <Button
        onClick={() => {
          dispatch(nextPage());
        }}
        disabled={currentPage === maxPages}
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
        disabled={currentPage === maxPages}
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
