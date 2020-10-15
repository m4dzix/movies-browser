import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName}{
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
    }
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    padding: 13.5px 24px;

`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 94px;
`;

export const InputContainer = styled.div`
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    margin: 24px 0 24px 24px;
    padding-left: 26px;
    width: 432px;
    height: 48px;
    display:flex;
    align-items: center;
`;

export const Input = styled.input`
    font-size: 16px;
    line-height: 150%;
    border: none;
    padding-left: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.span`
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.white};
    padding-left: 17px;
`;