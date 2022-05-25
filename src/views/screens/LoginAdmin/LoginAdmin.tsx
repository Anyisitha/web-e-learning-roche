import { CardContent, Grid } from "@mui/material";
import useControllers from "controllers";
import useComponents from "views/components";
import { StyledButton, StyledCard, StyledContainerComponent, StyledPaper } from "./LoginAdmin.styles";

const LoginAdmin = () => {
    /** Components */
    const { Input, FooterLogin, HeaderLogin } = useComponents();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useLoginAdmin } = useScreenHooks();
    const { control, handleSubmit, handleLogin } = useLoginAdmin();

    return (
        <StyledContainerComponent>
            <StyledCard>
                <CardContent>
                    <HeaderLogin isCentered />
                    <Grid item lg={12} className="pb-8 pt-10">
                        <Input
                            control={control}
                            name="email"
                            placeholder="Correo Electronico"
                            type="text"
                            icon="user"
                            isLine
                            label="Correo Electronico"
                            widthFull
                            rules={{}}
                            labelTop
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <Input
                            control={control}
                            name="password"
                            placeholder="Contrasena"
                            type="password"
                            icon="password"
                            isLine
                            label="Contrasena"
                            widthFull
                            rules={{}}
                            labelTop
                        />
                    </Grid>
                    <Grid item lg={12} className="py-6 flex justify-center">
                        <StyledPaper elevation={4}>
                            {/* @ts-ignore */}
                            <StyledButton onClick={handleSubmit(handleLogin)}>Ingresar</StyledButton>
                        </StyledPaper>
                    </Grid>
                    <FooterLogin />
                </CardContent>
            </StyledCard>
        </StyledContainerComponent>
    )
}

export default LoginAdmin;