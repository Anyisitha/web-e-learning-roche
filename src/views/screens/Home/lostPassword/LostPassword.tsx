import { Button, CardContent, Grid, Modal, Paper } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyledButton, StyledCard, StyledInput, StyledLabel, StyledTitleHeader } from "./LostPassword.styles";
import useControllers from "controllers";

interface ILostPasswordProps {
    open: boolean;
    onClose: () => void;
}

const LostPassword: FC<ILostPasswordProps> = ({
    open,
    onClose
}) => {
    /** Controllers */
    const {useComponentsHooks} = useControllers();
    const {useLostPassword} = useComponentsHooks();
    const {control, handleChangePassword, handleSubmit} = useLostPassword(onClose);

    return (
        <Modal
            open={open}
            onClose={onClose}
            className="modal-lost-password"
        >
            <div className="w-full h-full flex justify-center items-center">
                <StyledCard background={require("assets/images/modal-image-module1.png")}>
                    <CardContent>
                        <Grid item md={12}>
                            <StyledTitleHeader className="flex justify-center">
                                Recuperar contraseña
                            </StyledTitleHeader>
                        </Grid>

                        {/* Input Email */}
                        <Grid item md={12} xs={12} className="flex justify-center pt-5">
                            <Grid item md={8} xs={9} sm={9}>
                                <Grid item md={12}>
                                    <Controller control={control} name="email" rules={{}} render={({ field }) => (<>
                                        <Paper elevation={4} style={{ backgroundColor: "transparent" }}>
                                            <StyledInput
                                                placeholder="Correo electrónico"
                                                onChange={(e) => field.onChange(e)}
                                                name={field.name}
                                                value={field.value}
                                            />
                                        </Paper>
                                    </>)} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Input Contrasena */}
                        <Grid item md={12} className="flex justify-center pt-5">
                            <Grid item md={8}>
                                <Grid item md={12}>
                                    <Controller control={control} name="password" rules={{}} render={({ field }) => (<>
                                        <Paper elevation={4} style={{ backgroundColor: "transparent" }}>
                                            <StyledInput
                                                placeholder="Contraseña"
                                                onChange={(e) => field.onChange(e)}
                                                name={field.name}
                                                value={field.value}
                                                type="password"
                                            />
                                        </Paper>
                                    </>)} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Input Confirmar contrasena */}
                        <Grid item md={12} className="flex justify-center pt-5">
                            <Grid item md={8}>
                                <Grid item md={12}>
                                    <Controller control={control} name="confirm_password" rules={{}} render={({ field }) => (<>
                                        <Paper elevation={4} style={{ backgroundColor: "transparent" }}>
                                            <StyledInput
                                                placeholder="Confirmar contraseña"
                                                onChange={(e) => field.onChange(e)}
                                                name={field.name}
                                                value={field.value}
                                                type="password"
                                            />
                                        </Paper>
                                    </>)} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Buttom */}
                        <Grid item md={12} className="flex justify-center pt-5">
                            {/* @ts-ignore */}
                            <StyledButton onClick={handleSubmit(handleChangePassword)}>Guardar</StyledButton>
                        </Grid>
                        <Grid item md={12} className="flex justify-center pt-5 cancel-button">
                            <StyledButton onClick={() => onClose()}>Cancelar</StyledButton>
                        </Grid>
                    </CardContent>
                </StyledCard>
            </div>
        </Modal>
    )
}

export default LostPassword;