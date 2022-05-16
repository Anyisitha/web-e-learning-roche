import { Card, CardActions, CardContent, CardMedia, Container } from "@mui/material";
import CuadroAmarillo from "assets/images/cuadro-amarillo.png";
import { StyledButtom, StyledInputContainer, StyledPasswordLot, StyledTextPassword } from "./LoginCard.styled";
import useControllers from "controllers";
import { Link } from "react-router-dom";
import useComponents from "views/components";

const LoginCard = () => {
    const { useComponentsHooks } = useControllers();
    const { useLoginCard } = useComponentsHooks();
    const { control } = useLoginCard();

    const { Input } = useComponents();

    return (
        <Card sx={{ maxWidth: 476, maxHeight: 490 }}>
            <CardMedia
                component="img"
                height="140"
                src={CuadroAmarillo}
                alt="green iguana"
            />
            <CardContent>
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
            </CardContent>
            <CardActions style={{ flexWrap: "wrap" }}>
                <StyledTextPassword item lg={12}>
                <Link to="/modulo1">
                <StyledButtom isregister={false}>Iniciar sesión</StyledButtom>
                </Link>
                    
                </StyledTextPassword>
                <StyledTextPassword item lg={12}>
                    <Link to="/register">
                        <StyledButtom isregister>Registrarse</StyledButtom>
                    </Link>
                </StyledTextPassword>
            </CardActions>
        </Card>
    )
}

export default LoginCard;