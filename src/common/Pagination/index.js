import React from "react";
import { Container, Button, TextArea, Text} from "./styled";


const Pagination = () => {

    //tmp Data, also disabled state added to 2 buttons for preview
    const currentPage = 7;
    const maxPages = 100;
    const isMobile = true;

    return(
        <Container>
            <Button disabled>{isMobile ? <>&#60;&#60;</> : <>&#60; <Text>First</Text></>}</Button>
            <Button disabled>{isMobile ? <>&#60;</> : <>&#60; <Text>Previous</Text></>}</Button>
            <TextArea>
                <>
                    <Text inTextArea>Page</Text> {currentPage} <Text inTextArea>of</Text> {maxPages} 
                </>
            </TextArea>
            <Button>{isMobile ? <>&#62;</> : <>&#62; <Text>Previous</Text></>}</Button>
            <Button>{isMobile ? <>&#62;&#62;</> : <>&#62; <Text>First</Text></>}</Button>
        </Container>
    );
};

export default Pagination;