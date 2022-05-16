import { Grid } from "@mui/material";
import { FC } from "react";
import { StyledContainer } from "../Home/home.styles";
import { StyledFormRegister, StyledRoche } from "./register.styled";
import Roche from "assets/images/logo-fundation-medicine.png"
import useLocalComponents from "views/localComponents";

const Register: FC = (): JSX.Element => {
    const { RegisterCard } = useLocalComponents();

    return (
        <StyledContainer>
            {/* Logos roche fundation */}
            <Grid item lg={12}>
                <StyledRoche src={Roche} alt="logo-roche-fundation" />
            </Grid>

            {/* Formulario Register */}
            <StyledFormRegister>
                <RegisterCard></RegisterCard>
            </StyledFormRegister>
        </StyledContainer>
    );
}

export default Register;