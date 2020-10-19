import styled from "styled-components";

export const StyledHeader = styled.h1`
    margin: 56px 0 0 0;
    font-weight: 600;
    font-style: normal;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 20px;
    }
`;