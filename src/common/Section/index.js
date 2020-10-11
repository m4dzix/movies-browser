import React from "react";
import { Header, Container } from "./style";

const Section = ({ title, body }) => (
  <section>
    <Header>{title}</Header>
    <Container>{body}</Container>
  </section>
);
export default Section;
