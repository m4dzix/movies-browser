import React from "react";
import { StyledSection, Header, Container } from "./style";

const Section = ({ changeTileStyle, title, body }) => (
  <StyledSection>
    <Header>{title}</Header>
    <Container people={changeTileStyle}>{body}</Container>
  </StyledSection>
);

export default Section;
