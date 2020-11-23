import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 142px;
    flex-wrap: wrap;
  }
`;

export const NavContent = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
  }
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 13.5px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 32px 16px;
  }
`;

export const InputContainer = styled.div`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 24px 0 24px 24px;
  padding-left: 26px;
  width: 432px;
  height: 48px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 16px 16px 16px;
    padding-left: 18px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 150%;
  border: none;
  padding-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    padding-left: 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 0;
  }
`;

export const StyledImg = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 17px;
    width: 17px;
  }
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 17px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    padding-left: 8px;
  }
`;
