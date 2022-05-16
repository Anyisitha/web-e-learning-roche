import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled.div.attrs({
    className: 'home-container'
})`
    background: #E54416;
    height: 100vh;
    padding: 4rem;
`

export const StyledLogo = styled.img.attrs({
    className: 'logo'
})`
    max-width: 200px;
`

export const StyledImagen1 = styled.img.attrs({ 
    className: 'imagen1'
})`
    max-width: 75%;
`

export const StyledCenterCol = styled(Grid)`
    display: flex;
    justify-content: center;
`

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`
export const StyledEndCol = styled(Grid)`
    display: flex;
    justify-content: flex-end;
`