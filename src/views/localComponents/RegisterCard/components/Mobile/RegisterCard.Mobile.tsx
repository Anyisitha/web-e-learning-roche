import {Container, Grid} from "@mui/material";
import {
    StyledPaper,
    StyledBackground, StyledButton,
} from "../../RegisterCard.styles";
import useComponents from "views/components";
import useControllers from "controllers";

const RegisterCardMobile = () => {
    /** Components */
    const {Input, Checkbox} = useComponents();

    /** Controllers */
    const {useComponentsHooks} = useControllers();
    const {useRegisterCard} = useComponentsHooks();
    const {control, isValid, handleSubmit, handleCreateUser, setValue} = useRegisterCard();
    return (
        <Container>
            <Grid item xs={12}>
                <StyledPaper elevation={6} className="mt-10">
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
                            <Grid item md={12} xs={12} className="py-2.5 md:px-2.5">
                                <span className="text-white font-bold mt-10">Tipo de documento:* </span>
                            </Grid>
                            <Grid container>
                                <Grid item md={4} sm={12} className="py-2.5 md:px-2.5">
                                    <Checkbox
                                        label="Cedula de ciudadania"
                                        onChange={() => setValue("document_type", "Cedula de ciudadania")}
                                    />
                                </Grid>
                                <Grid item md={4} sm={12} className="py-2.5 md:px-2.5">
                                    <Checkbox
                                        label="Cedula de extranjeria"
                                        onChange={() => setValue("document_type", "Cedula de extranjeria")}
                                    />
                                </Grid>
                                <Grid item md={4} sm={12} className="py-2.5 md:px-2.5">
                                    <Checkbox
                                        label="Pasaporte"
                                        onChange={() => setValue("document_type", "Pasaporte")}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
                                <Input
                                    control={control}
                                    name="nationality"
                                    type="text"
                                    isLine
                                    rules={{}}
                                    label="Nacionalidad: "
                                    widthFull
                                    labelTop
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
                                <Input
                                    control={control}
                                    name="document"
                                    type="text"
                                    isLine
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        }
                                    }}
                                    label="Número de identificación: *"
                                    widthFull
                                    labelTop
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
                                <Input
                                    control={control}
                                    name="address"
                                    type="text"
                                    isLine
                                    widthFull
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'El campo es requerido'
                                        }
                                    }}
                                    label="Lugar de trabajo: *"
                                    labelTop
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
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
                                    labelTop
                                    widthFull
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={6} className="py-2.5 md:px-2.5">
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
                                    labelTop
                                    widthFull
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
                                    label="Correo electronico: *"
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
                            <span className="text-white text-justify">En el cumplimiento de la Ley 1581 de 2012 sobre Habeas Data, el régimen general de protección de datos personales y sobre
                                manejo de los mismos, acepto los términos presentados por Roche. Conozca los términos y condiciones <a
                                    href="/" className="text-black"><b>aquí.</b></a> </span>
                        </Grid>
                        <Grid item md={4} xs={12} className="py-2.5 md:px-2.5">
                            <StyledPaper elevation={6}>
                                <StyledButton
                                    disabled={!isValid}
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