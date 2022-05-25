import { Card, Container, Paper } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledCard = styled(Card)`
    ${tw`w-[50%]`}
    background-color: #E54416 !important;
    
    @media (max-width: 1024px){
        ${tw`w-[75%]`}
    }

    @media (max-width: 500px){
        ${tw`w-full`}
    }
`;

export const StyledContainerComponent = styled(Container)`
    ${tw`justify-center`}
    display: flex !important;
`;

export const StyledContainerDiv = styled.div`
    ${tw`flex justify-center w-full`}
`;

export const StyledButton = styled.button`
    ${tw`w-full py-2 text-primary font-bold`}
    font-family: "Myriad Pro";
`;

export const StyledPaper = styled(Paper)`
    ${tw`w-[50%]`}
`