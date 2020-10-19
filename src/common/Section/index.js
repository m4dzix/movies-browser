import React from "react";
import { Header, Container } from "./style";

const Section = ({ group, title, body }) => (
  <section>
    <Header>{title}</Header>
    <Container people={group === "people" ? true : false}>{body}</Container>
  </section>
);
export default Section;
