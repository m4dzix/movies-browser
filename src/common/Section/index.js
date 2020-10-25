import React from "react";
import { Header, Container } from "./style";

const Section = ({ changeTileStyle, title, body }) => (
  <section>
    <Header>{title}</Header>
    <Container people={changeTileStyle}>{body}</Container>
  </section>
);
export default Section;
