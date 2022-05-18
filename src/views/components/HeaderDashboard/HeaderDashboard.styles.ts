import styled from "styled-components";
import tw from "twin.macro";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Container } from "@mui/material";

export const StyledHeaderContainer = styled.div.attrs({
    className: 'header-container'
})`
    ${tw`bg-background-orange md:px-28 flex justify-between shadow-xl items-center`}

    @media (max-width: 500px) {
        ${tw``}
    }
`;

export const StyledLogo = styled.img.attrs({
    className: "logo-image",
    id: "logo"
})`
    @media (max-width: 1024px) {
        ${tw`w-28 px-2 py-4`}
    }
`;

export const StyledContainerItems = styled.div<{ isCentered?: boolean; }>`
    ${({ isCentered }) => isCentered ? tw`flex justify-center items-center` : ""}
`;

export const StyledWelcomeText = styled.span`
    ${tw`text-white font-bold text-lg`}
`;

export const StyledMenuIcon = styled(MenuIcon)`
    fill: #fff !important;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    fill: #fff !important;
`;

export const StyledHomeIcon = styled(HomeOutlinedIcon)`
    fill: #fff !important;
`;

export const StyledContainerComponent = styled(Container)`
    ${tw`justify-center items-center`}
    display: flex !important;
`