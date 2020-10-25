import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-top: 60px;
  }
`;

export const StyledSpinner = styled.div`
  width: 91px;
  height: 91px;
  border: 11.375px solid ${({ theme }) => theme.colors.snuff};
  border-top: 11.375px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 45px;
    height: 45px;
    border: 5.6875px solid ${({ theme }) => theme.colors.snuff};
    border-top: 5.6875px solid ${({ theme }) => theme.colors.black};
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
