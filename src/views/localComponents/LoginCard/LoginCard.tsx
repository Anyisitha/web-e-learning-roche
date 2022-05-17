import { Card, CardActions, CardContent, CardMedia, Container } from "@mui/material";
import CuadroAmarillo from "assets/images/cuadro-amarillo.png";
import useControllers from "controllers";
import { Link } from "react-router-dom";
import useComponents from "views/components";
import {
    StyledButton,
    StyledCard,
    StyledCardContent,
    StyledHeaderCard,
    StyledInputContainer,
    StyledPasswordLot,
    StyledSubTitleHeader,
    StyledTextPassword,
    StyledTitleHeader
} from "./LoginCard.styled";

const LoginCard = () => {
    const { useComponentsHooks } = useControllers();
    const { useLoginCard } = useComponentsHooks();
    const { control } = useLoginCard();

    const { Input } = useComponents();
    alert(window.innerWidth);
    return (
        <StyledCard>
            <StyledCardContent>
                <StyledHeaderCard>
                    <StyledTitleHeader>Iniciar Sesión</StyledTitleHeader>
                    <StyledSubTitleHeader>Bienvenido(a)</StyledSubTitleHeader>
                </StyledHeaderCard>
                <Container>
                    <StyledInputContainer>
                        <Input
                            name="username"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "error el campo es requerido"
                                }
                            }}
                            isGradiend
                            icon="user"
                            placeholder="Nombre de usuario"
                            type="text"
                            widthFull
                        />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <Input
                            name="password"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "error el campo es requerido"
                                }
                            }}
                            isGradiend
                            icon="password"
                            placeholder="Contraseña"
                            type="password"
                            widthFull
                        />
                    </StyledInputContainer>
                </Container>
                <StyledTextPassword item lg={12}>
                    <StyledPasswordLot>¿Olvidó su contraseña?</StyledPasswordLot>
                </StyledTextPassword>
            </StyledCardContent>
            <CardActions style={{ flexWrap: "wrap", justifyContent: "center", flexDirection: "column" }}>
                <Container>
                    <StyledTextPassword item lg={12}>
                        <Link to="/modulo1">
                            <StyledButton isregister={false}>Iniciar sesión</StyledButton>
                        </Link>

                    </StyledTextPassword>
                    <StyledTextPassword item lg={12}>
                        <Link to="/register">
                            <StyledButton isregister>Registrarse</StyledButton>
                        </Link>
                    </StyledTextPassword>
                </Container>
            </CardActions>  
        </StyledCard>
    )
}

export default LoginCard;