import styled from "styled-components";

export const Input = styled.input`
  font-size: 16px;
  line-height: 1.5;
  border: none;
  padding-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    padding-left: 10px;
  }
`;
