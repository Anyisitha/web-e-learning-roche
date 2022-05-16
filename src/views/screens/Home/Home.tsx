import { FC } from "react";
import { StyledCenterCol, StyledContainer, StyledEndCol, StyledFooter, StyledImagen1, StyledLogo } from "./home.styles";
import { Grid } from "@mui/material";
import Logo from "assets/images/logo-roche.png"
import Imagen1 from "assets/images/imagen1.png"
import Foundation from "assets/images/logo-fundation.png"
import useLocalComponents from "views/localComponents";

const Home: FC = (): JSX.Element => {
    const { LoginCard } = useLocalComponents();

    return (
        <StyledContainer>
            {/* logo */}
            <Grid item lg={12}>
                <StyledLogo src={Logo} alt="logo-roche" />
            </Grid>

            {/* Imagen1 */}
            <Grid container>
                <StyledCenterCol item lg={6} className="flex justify-center">
                    <StyledImagen1 src={Imagen1} alt="Imagen" />
                </StyledCenterCol>

                {/* Formulario */}
                <StyledCenterCol item lg={6}>
                    <LoginCard />
                </StyledCenterCol>
            </Grid>

            {/* Footer logo */}
            <Grid container>
                <StyledFooter>
                    <StyledEndCol item lg={12}>
                        <img src={Foundation} alt="" />
                    </StyledEndCol>
                </StyledFooter>
            </Grid>
        </StyledContainer>
    )
}

export default Home;