import { Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledInputContainer = styled.div`
    ${tw`my-3`}
`
export const StyledPasswordLot = styled.span`
    ${tw`text-sm text-primary text-center`}
    font-family: 'Montserrat';
    cursor: pointer;
`
export const StyledTextPassword = styled(Grid)`
    ${tw`flex justify-center`}
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
`

export const StyledButtom = styled.button<{isregister:boolean}>`
    ${tw`bg-primary text-white-default w-64 py-2 rounded-md mb-2`}
    font-family: 'Montserrat';
    letter-spacing: 1px;
    ${({ isregister }) => isregister ? tw`ml--1.5` : ''}
`




