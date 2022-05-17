import { FC, useEffect } from "react";
import { StyledCenterCol, StyledContainer, StyledEndCol, StyledFooter, StyledImageFoundation, StyledImagen1, StyledLogo } from "./home.styles";
import { Container, Grid } from "@mui/material";
import Logo from "assets/images/logo-roche.png"
import Imagen1 from "assets/images/imagen1.png"
import Foundation from "assets/images/logo-fundation.png"
import useLocalComponents from "views/localComponents";
import useControllers from "controllers";

const Home: FC = (): JSX.Element => {
    /** Local Components */
    const { LoginCard } = useLocalComponents();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useHome } = useScreenHooks();
    const {
        width,
        getWidth
    } = useHome();

    /** Effects */
    useEffect(() => {
        getWidth();
    }, [])

    return width >= 1280 ? (
        <Grid container>
            <Grid item md={6} className="flex justify-center items-center">
                <StyledImagen1 src={Imagen1} alt="Imagen" />
            </Grid>
            <Grid item md={6} className="flex justify-center items-center">
                <LoginCard />
            </Grid>
        </Grid>
    ) : (
        <Container>
            <Grid item md={12} className="flex justify-center items-center">
                <StyledImagen1 src={Imagen1} alt="Imagen" />
            </Grid>
            <Grid item md={12} className="flex justify-center items-center">
                <LoginCard />
            </Grid>
        </Container>
        // <StyledContainer
        //     background={require("assets/images/fondo.gif")}
        //     width={width}
        // >
        //     {/* logo */}
        //     <Grid item lg={12} className="pb-8">
        //         <StyledLogo
        //             src={Logo}
        //             alt="logo-roche"
        //             width={width}
        //         />
        //     </Grid>

        //     {/* Imagen1 */}
        //     <Grid container className="justify-center">
        //         <StyledCenterCol item lg={6} className="flex justify-center">
        //             <StyledImagen1 src={Imagen1} alt="Imagen" />
        //         </StyledCenterCol>

        //         {/* Formulario */}
        //         <StyledCenterCol item lg={6}>
        //             <LoginCard />
        //         </StyledCenterCol>
        //     </Grid>

        //     {/* Footer logo */}
        //     <Grid container className="pt-8">
        //         <StyledFooter>
        //             <StyledImageFoundation
        //                 src={Foundation}
        //                 alt=""
        //             />
        //         </StyledFooter>
        //     </Grid>
        // </StyledContainer>
    )
}

export default Home;