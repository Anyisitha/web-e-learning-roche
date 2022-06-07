import { Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div.attrs({
    className: 'home-container'
})<{backgroundImage?: string; width: number;}>`
    background-color: #E54416;
    height: 100vh !important;
    background-size: cover;
    overflow: auto;
  ${({ width }) => width >= 1024 ?
          tw`h-screen` :
          tw`h-full bg-cover bg-center`
  }
    ${({ backgroundImage }) => `background-image: url('${backgroundImage}')`};
`

export const StyledRoche = styled.img.attrs({
    className: 'roche'
})`
    max-width: 440px;
  
    @media (max-width: 1279px){
      ${tw`w-full`}
    }
`

export const StyledFormRegister = styled(Grid)`
    display: flex;
    justify-content: center;
    height: calc(100% - 100px);
    align-items: center;

    @media (max-width:500px){
        margin-bottom: 20px !important;
    }
`