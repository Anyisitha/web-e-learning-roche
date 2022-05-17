import { FC } from "react";
import { ILoginLayoutProps } from "./LoginLayout.interface";
import useViews from "views";
import {
    StyledContainer,
    StyledMain,
    StyledSubContainer
} from "./LoginLayout.styles";
import { Grid } from "@mui/material";

const LoginLayout: FC<ILoginLayoutProps> = ({ children }) => {
    /** Components */
    const { useComponents } = useViews();
    const { HeaderLogin, FooterLogin } = useComponents();

    return (
        <StyledContainer
            backgroundImage={require("assets/images/fondo.gif")}
        >
            <StyledSubContainer>
                <HeaderLogin />
                <StyledMain>{children}</StyledMain>
                <FooterLogin />
            </StyledSubContainer>

        </StyledContainer>

    );
}

export default LoginLayout;