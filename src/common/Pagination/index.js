import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Pages, Text } from "./styled";
import {
  selectPage,
  selectTotalPages,
  nextPage,
  previousPage,
  lastPage,
  firstPage,
} from "../../features/Movies/moviesSlice";

const Pagination = () => {
  const currentPage = useSelector(selectPage);
  const maxPages = useSelector(selectTotalPages);
  const isMobile = window.screen.width < 767;

  const dispatch = useDispatch();
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
