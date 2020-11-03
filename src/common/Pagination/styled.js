import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 103px;
  padding: 8px 0px 0px 16px;
`;

export const Button = styled.button`
  border-radius: 5px;
  margin: 0 6px;
  padding: 8px 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  color: ${({ theme }) => theme.colors.scienceBlue};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.mistic};
    color: ${({ theme }) => theme.colors.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 4px;
    padding: 7.5px 12px;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.black};
  padding: 0 8px;

  ${({ inPages }) =>
    inPages &&
    css`
      color: ${({ theme }) => theme.colors.waterloo};
      font-weight: normal;
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 2px;
  }
`;

export const Pages = styled.span`
  margin: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 4px;
    font-size: 10px;
  }
`;
