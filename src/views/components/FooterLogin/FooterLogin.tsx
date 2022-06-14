import { Grid } from "@mui/material"
import { StyledFoundationLogo } from "./FooterLogin.styles";
import FoundationLogo from "assets/images/logo-fundation.png";

const FooterLogin = () => {
    return (
        <Grid item md={12} className="xl:absolute relative mt-8 xl:bottom-8  flex justify-center xl:justify-end w-full xl:right-8">
            <StyledFoundationLogo
                src={FoundationLogo}
                alt="Foundation Logo"
            />
        </Grid>
    );
}

export default FooterLogin;