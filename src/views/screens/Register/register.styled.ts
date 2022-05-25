import { Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div.attrs({
    className: 'home-container'
})<{backgroundImage?: string; width: number;}>`
    background-color: #E54416;
    height: 100vh !important;
    padding: 4rem;
    overflow: auto;
  ${({ width }) => width >= 1024 ?
          tw`h-full py-8 px-12` :
          tw`h-full py-8 px-1 bg-cover bg-center`
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
`