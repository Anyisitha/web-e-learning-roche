import styled from "styled-components";
import { Button, Card, Container, Grid } from "@mui/material";
import tw from "twin.macro";
import { IContainerContent } from "models/interfaces/Dashboard.interfaces";

export const StyledContainer = styled.div<{ background?: string; }>`
    background: url('${({ background }) => background}') bottom right no-repeat, linear-gradient(to right, #c3c3c1, #fff);
    background-size: 100% 110%;
`

export const StyledTitleHeader = styled.div.attrs({
    className: "title-header"
})`
    color: #f15a24;
    font-size: 25px;
    font-family: "Myriad Pro";
    font-weight: bold;
    ${tw`py-6 w-[270px]`}
`

export const StyledSidebar = styled(Grid) <IContainerContent>`
    ${({ isGap }) => isGap ? tw`gap-y-4` : ""}
    ${({ withOverflow }) => withOverflow ? tw`overflow-auto` : tw`overflow-hidden`}
    ${({ isCentered }) => isCentered ? tw`flex justify-center items-center` : ""}
    ${({ notFullScreen }) => !notFullScreen ? "height: calc(100vh - 82px)" : ""};
`;

export const StyledContainerComponent = styled(Container)`
    ${tw`justify-center`}
    display: flex !important;
`

export const StyledMessageRemember = styled.span`
    ${tw``}
`;

export const StyledIcon = styled.img`
    ${tw`h-[2rem] mr-2`}
`

export const StyledCard = styled(Card) <{ background?: string; }>`
    ${tw`my-10 py-8 px-8`}
    background: url('${({ background }) => background}') bottom right no-repeat, #E54416 !important;
    background-size: cover !important;
`

export const StyledImageCard = styled.img<{disabled: boolean}>`
    ${tw`w-full h-full`}
    ${({ disabled }) => disabled ? "filter: grayscale(1)" : ""}
`;

export const StyledTextCard = styled.span<{bold: boolean}>`
    ${tw`text-white text-base text-center mt-3`}
    ${({ bold }) => bold ? tw`font-bold` : ""}
    ${({ bold }) => bold ? 'font-family: "Gotham-medium" !important' : 'font-family: "Myriad Pro" !important'};
    ${({ bold }) => bold ? 'font-size: 18px' : 'font-size: 15px'};
`;

export const StyledButton = styled(Button)`
    background-color: #fff !important;
    color: #E54416 !important;
    font-weight: bold !important;
    text-transform: capitalize !important;
    ${tw`w-[40%] h-[35px]`}
`;