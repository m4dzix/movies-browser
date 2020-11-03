import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
`;

export const BackdropWrapper = styled.div`
    max-width: 1368px;
    margin: auto;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 0 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0 16px;
    }
`;

export const Backdrop = styled.img`
    display: block;
    width: 100%;
`;

export const MovieDetails = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: bottom;
    background: linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);
    background-position: center;
    background-size: 140%;
`;

export const RatingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-bottom: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        align-items: center;
        flex-direction: row;
        margin-bottom: 8px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 64px;
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke: 0.5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 24px;
    }
`;

export const Star = styled.img`
    width: 40px;
    margin-right: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 28px;
        margin-right: 4px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 16px;
        margin-right: 2px;
    }
`;

export const Count = styled.span`
    font-weight: 500;
    line-height: 1.3;
    font-size: 30px;
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 24px;
        line-height: 1;
        margin-right: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin-right: 8px;
    }
`;

export const Votes = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 10px;
    }
`;