import { ImportExportRounded } from "@mui/icons-material";
import { Card, Button } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledCard = styled(Card)
    <{background?: string;}>
`
    ${tw`w-[70%] py-20`}
    ${({background}) => background && `background-image: url("${background}");`}
    border-radius: 30px !important;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    
    
    @media (max-width: 899px) {
        ${tw`w-full`}
        background-color: #ffffff90 !important;
    }
`

export const StyledInput = styled.input`
    ${tw`h-[2.5rem] w-full px-4`}
    background: transparent;
    border: 1px solid #fff;
    border-radius: 8px;
    color: #fff;

    &::placeholder {
        color: #fff !important;
    }
`

export const StyledLabel = styled.label`
    ${tw`text-white font-bold`}
`

export const StyledTitleHeader = styled.title`
    ${tw`text-white font-bold text-[25px]`}
`

export const StyledButton = styled(Button)`
    ${tw`w-[200px]`}
    box-shadow: 0 1px 3px rgba(229, 68, 22), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border: 1px solid #fff;
    border-radius: 19px !important;
    background-image: linear-gradient(to right, rgb(229, 68, 22) 80%, white) !important;
    color: #fff !important;

    
    
`