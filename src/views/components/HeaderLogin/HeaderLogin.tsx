import { Grid } from "@mui/material";
import Logo from "assets/images/logo-roche.png";
import { StyledLogo } from "./HeaderLogin.styles";

const HeaderLogin = () => {
    return (
        <Grid item md={12}>
            <StyledLogo
                src={Logo}
                alt="Logo Roche"
            />
        </Grid>
    );
}

export default HeaderLogin;