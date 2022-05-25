import { Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainerQuestions = styled.div.attrs({
    className: "questions-container"
}) <{ background?: string; question: number;}>`
    height: 100%;
    width: 100%;
    background: url('${({ background }) => background}');
    background-size: 100% 100%;
    ${({ question }) => question === 0 ? tw`flex justify-center items-center` : tw`px-8 py-16 `}
    position: relative;
`;

export const StyledTitle = styled.h1`
    ${tw`text-primary font-bold text-[40px] text-center`}
    font-family: "Myriad Pro";
`

export const StyledDescription = styled.h3`
    ${tw`text-[30px] text-center`}
    font-family: "Myriad Pro";
`;

export const StyledButton = styled(Button)`
    ${tw`text-[20px] text-center`}
    font-family: "Myriad Pro";
    background: linear-gradient(to right, #F7931E, #F15A24);
    color: #fff !important;
    font-weight: bold !important;
    letter-spacing: 1px !important;
    width: 10rem;

    &:hover {
        background: linear-gradient(to left, #F7931E, #F15A24);
    }
`;

export const StyledModal = styled(Box) <{ background?: string; }>`
    ${tw`bg-white w-[60%] h-[70%] relative`}
    ${({ background }) => `background: url('${background}')`};
    background-size: 100% 100%;
`

export const StyledQuestion = styled.h1`
    ${tw`text-primary font-bold text-[25px]`}
    font-family: "Myriad Pro";
`

export const StyledSpan = styled.span`
    font-family: "Myriad Pro";
    ${tw`text-xl`}
`