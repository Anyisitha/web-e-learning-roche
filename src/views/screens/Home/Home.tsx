import { FC, useEffect } from "react";
import { StyledImagen1 } from "./home.styles";
import { Container, Grid } from "@mui/material";
import Imagen1 from "assets/images/imagen1.png"
import useLocalComponents from "views/localComponents";
import useControllers from "controllers";

const Home: FC = (): JSX.Element => {
    /** Local Components */
    const { LoginCard } = useLocalComponents();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useHome } = useScreenHooks();
    const { width, getWidth } = useHome();

    /** Effects */
    useEffect(() => {
        getWidth();
    }, [getWidth])

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
    )
}

export default Home;