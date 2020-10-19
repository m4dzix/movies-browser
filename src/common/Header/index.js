import React from "react";
import { StyledHeader } from "./styled";

const Header = ({ title, input }) => (
    <StyledHeader>
        {title} {input}
    </StyledHeader>
);

export default Header;