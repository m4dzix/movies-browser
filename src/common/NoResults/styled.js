import styled from "styled-components";
import { ReactComponent as PaperPlane } from "../../assets/paper-plane.svg";

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 668px;
`;

export const StyledPaperPlane = styled(PaperPlane)`
    text-align: center;
`;