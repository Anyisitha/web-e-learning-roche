import {  Container, Grid } from "@mui/material";
import useControllers from "controllers";
import useComponents from "views/components";
import { StyledBackground, StyledGridCenter } from "./RegisterCard.styles";

const RegisterCard = () => {

    const { Input } = useComponents();
    const { useComponentsHooks } = useControllers();
    const { useRegisterCard } = useComponentsHooks();
    const { control } = useRegisterCard();

    return (
        <Container>
            <Grid item lg={12}>
                {/* <StyledBackground>
                    <StyledGridCenter item lg={12}>
                        <div className="mr-10">
                            <Input
                                control={control}
                                name="firstName"
                                type="text"
                                isRounded
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="Nombres: *"
                            />
                        </div>

                        <div>
                            <Input
                                control={control}
                                name="lastName"
                                type="text"
                                isRounded
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="Apellidos: *"
                            />
                        </div>

                    </StyledGridCenter>

                    <StyledGridCenter item lg={12} moreTop>
                        <div className="mr-10">
                            <Input
                                control={control}
                                name="nationality"
                                type="text" 
                                isLine
                                rules={{
                                    
                                }}
                                label="Nacionalidad: "
                            />
                        </div>
                    </StyledGridCenter>

                    <StyledGridCenter item lg={12} moreTop>
                        <div className="mr-10">
                            <Input
                                control={control}
                                name="id"
                                type="text"
                                isLine
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="Número de identificación: *"
                            />
                        </div>

                        <div>
                            <Input
                                control={control}
                                name="address"
                                type="text"
                                isLine
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="Lugar de trabajo: *"
                            />
                        </div>

                    </StyledGridCenter>

                    <StyledGridCenter item lg={12} moreTop>
                        <div className="mr-10">
                            <Input
                                control={control}
                                name="country"
                                type="text"
                                isRounded
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="País: *"
                            />
                        </div>

                        <div className="mr-10">
                            <Input
                                control={control}
                                name="city"
                                type="text"
                                isRounded
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="Ciudad: *"
                            />
                        </div>

                        <div>
                            <Input
                                control={control}
                                name="email"
                                type="text"
                                isRounded
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="Correo electronico: *"
                            />
                        </div>

                    </StyledGridCenter>

                    <StyledGridCenter item lg={12} moreTop>
                        <div className="mr-10">
                            <Input
                                control={control}
                                name="password"
                                type="text"
                                isRounded
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="Contraseña: *"
                            />
                        </div>

                        <div>
                            <Input
                                control={control}
                                name="confirm_password"
                                type="text"
                                isRounded
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'El campo es requerido'
                                    }
                                }}
                                label="Confirmar Contraseña: *"
                            />
                        </div>
                    </StyledGridCenter>

                    <StyledGridCenter moreTop>
                        <span>En el cumplimiento de la Ley 1581 de 2012 sobre Habeas Data, el régimen general de protección de datos personales y sobre <br />
                            manejo de los mismos, acepto los términos presentados por Roche. Conozca los términos y condiciones <b>aquí.</b> </span>
                    </StyledGridCenter>

                    <StyledGridCenter moreTop>
                        <img src={require("assets/images/boton-enviar.png")}/>
                    </StyledGridCenter>

                </StyledBackground> */}
                <img src={require("assets/images/formulario.png")} alt=""  style={{ marginTop: "81px" }}/>
            </Grid>
        </Container>
    )
}

export default RegisterCard;