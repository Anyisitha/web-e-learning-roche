import { ImportExportRounded } from "@mui/icons-material";
import { Card, Button } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledCard = styled(Card)`
    ${tw`w-[70%] py-10`}
    background-color: #ffffff70 !important;
    border-radius: 30px !important;

    @media (max-width: 899px) {
        ${tw`w-full`}
    }
`

export const StyledInput = styled.input`
    ${tw`h-[2.5rem] w-full px-4`}
    background: transparent;
    border: 1px solid #fff;
    border-radius: 8px;
    color: #fff;
`

export const StyledLabel = styled.label`
    ${tw`text-white font-bold`}
`

export const StyledTitleHeader = styled.title`
    ${tw`text-white font-bold fontSize[25px]`}
`

export const StyledButton = styled(Button)`
    ${tw`w-[200px]`}
    background: #fff !important;
    border: 1px solid #fff;
    border-radius: 8px;
    color: #F7931E !important;

    &:hover {
        background-image: linear-gradient(to right, rgb(229, 68, 22) 80%, white) !important;
        color: #fff !important;
    }
    
`