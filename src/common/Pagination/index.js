import React from "react";
import { Container, Button, Pages, Text } from "./styled";
import { useReplaceQueryParameters } from "../../useQueryParameters";

const Pagination = ({ currentPage, lastPage }) => {
  const replaceQueryParameters = useReplaceQueryParameters();
  const page = currentPage;

  const onPageChange = (page) => {
    replaceQueryParameters({
      key: "page",
      value: page.toString(),
    });
  };

  const isMobile = window.screen.width < 767;

  return (
    <Container>
      <Button
        onClick={() => {
          onPageChange(1);
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
          onPageChange(+page - 1);
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
          page === null ? onPageChange(2) : onPageChange(+page + 1);
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
          onPageChange(lastPage);
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
