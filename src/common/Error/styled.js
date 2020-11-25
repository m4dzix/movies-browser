import styled from "styled-components";
import { ReactComponent as Danger } from "../../assets/danger.svg";
import { Link } from "react-router-dom";

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDanger = styled(Danger)`
  width: 100px;
`;

export const StyledSubtitle = styled.h2`
  margin: 24px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

export const LinkButton = styled(Link)`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  background: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 24px;
  border: none;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 12px 16px;
    font-size: 10px;
  }
`;
