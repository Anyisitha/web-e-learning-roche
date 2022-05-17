import { Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";
import { IStyledContainer, IStyledLogo } from "./Home.interfaces";

export const StyledContainer = styled.div.attrs({
    className: 'home-container'
}) <IStyledContainer>`
    ${({ background }) => background && `background-image: url('${background}')`};
    ${({ width }) => width >= 1024 ?
        tw`h-full py-8 px-12` :
        tw`h-full p-8 bg-cover bg-center`
    }
    background-color: #E54416;
    background-size: 100% 100%;
    background-position: top left;
    position: relative;
    overflow: hidden;

    @media (max-width: 1366px) {
        ${tw`h-full`}
    }

    @media (max-width: 768px) {
        ${tw`flex items-center`}
    }
`

export const StyledLogo = styled.img.attrs({
    className: 'logo'
}) <IStyledLogo>`
    ${({ width }) => width >= 1024 ?
        tw`w-32` :
        tw`w-24`
    }
    ${tw`pb-8`}
`

export const StyledImagen1 = styled.img.attrs({
    className: 'login-image'
})`
    ${tw`w-[70%] h-[70%]`}

    @media (max-width: 1279px) {
        ${tw`w-64`}
    }
`

export const StyledCenterCol = styled(Grid)`
    ${tw`flex justify-center items-center`}
`

export const StyledFooter = styled.footer`
    ${tw`flex justify-between w-full`}

    @media (max-width: 1023px){
        ${tw`justify-center`}
    }
`
export const StyledEndCol = styled(Grid)`
    ${tw`flex justify-end relative pt-8`}
`

export const StyledImageFoundation = styled.img.attrs({})`
    ${tw`w-64`}

    @media (max-width: 1024px){
        ${tw`w-56`}
    }

    @media (max-width: 500px){
        ${tw`w-36`}
    }
`;