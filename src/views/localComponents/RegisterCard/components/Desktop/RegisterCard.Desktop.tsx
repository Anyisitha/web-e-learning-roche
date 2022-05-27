import {Container, Grid} from "@mui/material";
import {StyledBackground, StyledButton, StyledGridCenter, StyledPaper} from "../../RegisterCard.styles";
import useComponents from "views/components";
import useControllers from "controllers";

const RegisterCardDesktop = () => {
    /** Components */
    const {Input, Checkbox} = useComponents();

    /** Controllers */
    const {useComponentsHooks} = useControllers();
    const {useRegisterCard} = useComponentsHooks();
    const {control, isValid, handleSubmit, handleCreateUser, setValue} = useRegisterCard();

    return (
        <Container>
            <Grid item lg={12}>
                <StyledPaper elevation={6}>
                    <StyledBackground>
                        <StyledGridCenter item lg={12} className="px-32 gap-8">
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
                            />
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
                            />

                        </StyledGridCenter>

                        <StyledGridCenter item lg={12} moreTop className="flex justify-center px-16">
                            <span className="text-white font-bold">Tipo de <br/> documento:* </span>
                            <Checkbox
                                label="Cedula de <br/> ciudadania"
                                onChange={() => setValue("document_type", "Cedula de ciudadania")}
                            />
                            <Checkbox
                                label="Cedula de <br/> extranjeria"
                                onChange={() => setValue("document_type", "Cedula de extranjeria")}
                            />
                            <Checkbox
                                label="Pasaporte"
                                onChange={() => setValue("document_type", "Pasaporte")}
                            />
                            <Input
                                control={control}
                                name="nationality"
                                type="text"
                                isLine
                                rules={{}}
                                label="Nacionalidad: "
                                widthFull
                            />
                        </StyledGridCenter>

                        <StyledGridCenter item lg={12} moreTop className="px-16 gap-8">
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
                            />
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
                            />

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
                                    label="Correo <br/> electronico: *"
                                />
                            </div>

                        </StyledGridCenter>

                        <StyledGridCenter item lg={12} moreTop className="px-28 gap-8">
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
                            />
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
                                label="Confirmar <br/> Contraseña: *"
                                widthFull
                            />
                        </StyledGridCenter>

                        <StyledGridCenter moreTop>
                            <span className="text-white">En el cumplimiento de la Ley 1581 de 2012 sobre Habeas Data, el régimen general de protección de datos personales y sobre <br/>
                                manejo de los mismos, acepto los términos presentados por Roche. Conozca los términos y condiciones <a
                                    href="/" className="text-black"><b>aquí.</b></a> </span>
                        </StyledGridCenter>

                        <StyledGridCenter moreTop>
                            <StyledPaper elevation={6}>
                                <StyledButton
                                    disabled={!isValid}
                                    onClick={handleSubmit(handleCreateUser)}
                                >
                                    Enviar
                                </StyledButton>
                            </StyledPaper>
                        </StyledGridCenter>

                    </StyledBackground>
                </StyledPaper>
            </Grid>
        </Container>
    )
}

export default RegisterCardDesktop;