import {Container, Grid} from "@mui/material";
import {
    StyledPaper,
    StyledBackground, StyledButton,
} from "../../RegisterCard.styles";
import useComponents from "views/components";
import useControllers from "controllers";

const RegisterCardMobile = () => {
    /** Components */
    const {Input} = useComponents();

    /** Controllers */
    const {useComponentsHooks} = useControllers();
    const {useRegisterCard} = useComponentsHooks();
    const {control, isValid, handleSubmit, handleCreateUser} = useRegisterCard();
    return (
        <Container>
            <Grid item xs={12} className="mb-[20px]">
                <StyledPaper elevation={6} className="mt-[30px]">
                    <StyledBackground>
                        <Grid container>
                            <Grid item md={6} xs={12} sm={6} className="mt-10 md:px-2.5">
                                <Input
                                    control={control}
                                    name="name"
                                    type="text"
                                    isRounded
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        }
                                    }}
                                    label="Nombres: *"
                                    widthFull
                                    labelTop
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="md:px-2.5">
                                <Input
                                    control={control}
                                    name="last_name"
                                    type="text"
                                    isRounded
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        }
                                    }}
                                    label="Apellidos: *"
                                    widthFull
                                    labelTop
                                />
                            </Grid>
                            
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
                                <Input
                                    control={control}
                                    name="city"
                                    type="text"
                                    isRounded
                                    rules={{}}
                                    label="Operador logístico: "
                                    widthFull
                                    labelTop
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
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
                                    label="Correo electrónico: *"
                                    widthFull
                                    labelTop
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
                                <Input
                                    control={control}
                                    name="password"
                                    type="password"
                                    isRounded
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        }
                                    }}
                                    label="Contraseña: *"
                                    widthFull
                                    labelTop
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
                                <Input
                                    control={control}
                                    name="confirm_password"
                                    type="password"
                                    isRounded
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        }
                                    }}
                                    label="Confirmar Contraseña: *"
                                    widthFull
                                    labelTop
                                />
                            </Grid>
                        </Grid>


                        <Grid item md={4} xs={12} className="py-2.5 md:px-2.5">
                            <span className="text-white text-justify">En el cumplimiento de la Ley 1581 de 2012 sobre <i>Habeas Data</i>, el régimen general de protección de datos personales y sobre
                                manejo de los mismos, acepto los términos presentados por Roche. Conozca los términos y condiciones <a
                                    href="https://www.eml.com.co/e-learning-roche/roche/autorizaci%C3%B3n/autorizacion_de_tratamiento_de_datos_personales.pdf" className="text-black"><b>aquí.</b></a> </span>
                        </Grid>
                        <Grid item md={4} xs={12} className="py-2.5 md:px-2.5">
                            <StyledPaper elevation={6}>
                                <StyledButton
                                    disabled={!isValid}
                                    // @ts-ignore
                                    onClick={handleSubmit(handleCreateUser)}
                                >
                                    Enviar
                                </StyledButton>
                            </StyledPaper>
                        </Grid>
                    </StyledBackground>
                </StyledPaper>
            </Grid>
        </Container>
    )
        ;
}

export default RegisterCardMobile;