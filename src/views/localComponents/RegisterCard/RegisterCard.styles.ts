import { Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledBackground = styled.div`
    ${tw`w-full bg-white-750 rounded-lg mt-20 p-10`}
`

export const StyledLabel = styled.span`
    ${tw`text-white-default text-lg font-semibold flex items-center mr-6`}
    font-family: "Gotham";
`

export const StyledGridCenter = styled(Grid)<{moreTop?: boolean;}>`
    ${tw`flex justify-center items-center`}
    ${({moreTop}) => moreTop ? tw`pt-10` : ""}
`