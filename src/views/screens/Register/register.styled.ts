import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled.div.attrs({
    className: 'home-container'
})`
    background: #E54416;
    height: 100vh;
    padding: 4rem;
`

export const StyledRoche = styled.img.attrs({
    className: 'roche'
})`
    max-width: 440px;
`

export const StyledFormRegister = styled(Grid)`
    display: flex;
    justify-content: center;
`