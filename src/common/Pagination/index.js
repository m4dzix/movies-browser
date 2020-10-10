import React from "react";
import { Container, Button, TextArea, Text} from "./styled";


const Pagination = () => {

    const currentPage = 7;
    const maxPages = 100;

    return(
        <Container>
            <Button disabled>&#60; <Text>First</Text></Button>
            <Button disabled>&#60; <Text>Previous</Text></Button>
            <TextArea>
                <>
                    <Text inTextArea>Page</Text> {currentPage} <Text inTextArea>of</Text> {maxPages} 
                </>
            </TextArea>
            <Button><Text>Next</Text> &#62;</Button>
            <Button><Text>Last</Text> &#62;</Button>
        </Container>
    );
};

export default Pagination;