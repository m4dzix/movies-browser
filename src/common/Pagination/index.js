import React from "react";
import { Container, Button, Pages, Text } from "./styled";
import { useGoToPage } from "../../customHooks/useGoToPage";

const Pagination = ({ currentPage, lastPage }) => {
  const page = currentPage;
  const goToPage = useGoToPage();
  const isMobile = window.screen.width < 767;

  return (
    <Container>
      <Button
        onClick={() => {
          goToPage(1);
        }}
        disabled={+page === 1 || page === null}
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
          goToPage(+page - 1);
        }}
        disabled={+page === 1 || page === null}
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
          <Text inPages>Page</Text> {page === null ? 1 : page}
          <Text inPages>of</Text> {lastPage}
        </>
      </Pages>
      <Button
        onClick={() => {
          page === null ? goToPage(2) : goToPage(+page + 1);
        }}
        disabled={+page === lastPage}
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
          goToPage(lastPage);
        }}
        disabled={+page === lastPage}
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
