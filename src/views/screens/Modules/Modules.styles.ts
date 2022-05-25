import { Button, Grid, Paper } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
    ${tw`p-10`}
    background: linear-gradient(to right, #c3c3c1, #fff);
    height: calc(100vh - 82px);
`;

export const StyledTab = styled(Grid)<{background?: string; isBody?: boolean;}>`
    ${tw`py-4 px-4 relative`}
    background: url('${({ background }) => background}') #fff bottom right no-repeat;
    background-size: 100% 110%;
    ${({ isBody }) => isBody ? "height: calc(100vh - 235px);" : ""}
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

export const StyledIframe = styled.iframe`
    height: 100%;
`

export const StyledButton = styled(Button)`
    position: absolute !important;
    bottom: 4%;
    right: 4%;
`

export const StyledButtonSection = styled(Button)<{disabled: boolean; completed: boolean;}>`
    ${({ completed }) => completed ? "background-color: #F7931E !important;" : "background-color: #E54416 !important;"}
    color: #fff !important;
    width: 500px;
    font-family: "Gotham-medium" !important;
    text-transform: none !important;
    ${tw`my-10`}
    ${({ disabled }) => disabled ? "opacity: 0.8;" : "opacity: 1;"}
`

export const StyledSpan = styled.span`
    font-size: 1.2rem;
    font-family: "Myriad Pro";
    ${tw`font-bold`}
`

export const StyledPaper = styled(Paper)`
    width: 90%;
`