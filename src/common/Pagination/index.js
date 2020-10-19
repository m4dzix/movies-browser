import React from "react";
import { Container, Button, Pages, Text} from "./styled";


const Pagination = () => {

    //tmp Data, also disabled state added to 2 buttons for preview
    const currentPage = 7;
    const maxPages = 100;
    const isMobile = false;

    return(
        <Container>
            <Button disabled>{isMobile ? <>&#60;&#60;</> : <>&#60; <Text>First</Text></>}</Button>
            <Button disabled>{isMobile ? <>&#60;</> : <>&#60; <Text>Previous</Text></>}</Button>
            <Pages>
                <>
                    <Text inPages>Page</Text> {currentPage} <Text inPages>of</Text> {maxPages} 
                </>
            </Pages>
            <Button>{isMobile ? <>&#62;</> : <><Text>Next</Text> &#62;</>}</Button>
            <Button>{isMobile ? <>&#62;&#62;</> : <><Text>First</Text> &#62;</>}</Button>
        </Container>
    );
};

export default Pagination;