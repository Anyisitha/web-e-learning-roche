import { Grid } from "@mui/material";
import { FC, Fragment } from "react";
import { StyledFormRegister, StyledRoche, StyledContainer } from "./register.styled";
import Roche from "assets/images/logo-fundation-medicine.png"
import useLocalComponents from "views/localComponents";
import useControllers from "controllers";

const Register: FC = (): JSX.Element => {
    const { RegisterCard } = useLocalComponents();

    /** Controllers */
    const { useGeneralHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();

    return (
        <Fragment>
            {
                width >= 1024 ? (
                    <StyledContainer width={width} backgroundImage={window.innerWidth >= 1024 ? require("assets/images/fondo.gif") : require("assets/images/gitMovil.gif")}>
                        {/* Logos roche fundation */}
                        <Grid item lg={12}>
                            <StyledRoche src={Roche} alt="logo-roche-fundation" />
                        </Grid>

                        {/* Formulario Register */}
                        <StyledFormRegister>
                            <RegisterCard></RegisterCard>
                        </StyledFormRegister>
                    </StyledContainer>
                ) : (
                    <StyledContainer width={width} backgroundImage={window.innerWidth >= 1024 ? require("assets/images/fondo.gif") : require("assets/images/gitMovil.gif")}>
                        {/* Logos roche fundation */}
                        <Grid item sm={12}>
                            <StyledRoche src={Roche} alt="logo-roche-fundation" />
                        </Grid>

                        {/* Formulario Register */}
                        <StyledFormRegister>
                            <RegisterCard></RegisterCard>
                        </StyledFormRegister>
                    </StyledContainer>
                )
            }
        </Fragment>
    );
}

export default Register;