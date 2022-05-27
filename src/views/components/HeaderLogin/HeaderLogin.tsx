import { Grid } from "@mui/material";
import Logo from "assets/images/logo-roche.png";
import { IHeaderLogin } from "models/interfaces/HeaderLogin.interfaces";
import { FC } from "react";
import { StyledLogo } from "./HeaderLogin.styles";

const HeaderLogin : FC<IHeaderLogin> = ({ isCentered }) => {
    return (
        <Grid item md={12} className={ isCentered ? "flex justify-center" : ""}>
            <StyledLogo
                src={Logo}
                alt="Logo Roche"
            />
        </Grid>
    );
}

export default HeaderLogin;