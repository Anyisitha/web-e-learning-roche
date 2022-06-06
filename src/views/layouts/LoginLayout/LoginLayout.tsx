import { FC } from "react";
import { ILoginLayoutProps } from "./LoginLayout.interface";
import useViews from "views";
import {
    StyledContainer,
    StyledMain,
    StyledSubContainer
} from "./LoginLayout.styles";

const LoginLayout: FC<ILoginLayoutProps> = ({ children }) => {
    /** Components */
    const { useComponents } = useViews();
    const { HeaderLogin, FooterLogin } = useComponents();

    return (
        <StyledContainer
            backgroundImage={window.innerWidth >= 1024 ? require("assets/images/fondogif.png") : require("assets/images/gitMovil.gif")} 
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