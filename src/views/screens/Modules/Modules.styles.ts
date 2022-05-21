import { Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
    ${tw`p-10`}
    background: linear-gradient(to right, #c3c3c1, #fff);
    height: calc(100vh - 82px);
`;

export const StyledTab = styled(Grid)<{background?: string}>`
    ${tw`py-4 px-4`}
    background: url('${({ background }) => background}') #fff bottom right no-repeat;
    background-size: 100% 110%;
`;

export const StyledContainerTab = styled.div<{fullWidth?: boolean}>`
    ${({ fullWidth }) => fullWidth ? tw`w-full` : tw`w-[20%]`}
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 1%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    
`;

export const StyledNumberModule = styled.h1`
    ${tw`text-primary text-2xl font-bold`}
    font-family: "Myriad Pro Semibold";
`;

export const StyledModuleName = styled.span`
    ${tw`text-xl`}
`;