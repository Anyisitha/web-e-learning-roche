import { Button, CardContent, Grid, Modal, Paper } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyledButton, StyledCard, StyledInput, StyledLabel, StyledTitleHeader } from "./LostPassword.styles";

interface ILostPasswordProps {
    open: boolean;
    onClose: () => void;
}

const LostPassword: FC<ILostPasswordProps> = ({
    open,
    onClose
}) => {

    const { control } = useForm({
        mode: "onChange"
    })

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className="w-full h-full flex justify-center items-center">
                <StyledCard>
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
                                    <Controller control={control} name="email" rules={{}} render={({ }) => (<>
                                        <Paper elevation={4} style={{ backgroundColor: "transparent" }}>
                                            <StyledInput placeholder="Correo electrónico" />
                                        </Paper>
                                    </>)} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Input Contrasena */}
                        <Grid item md={12} className="flex justify-center pt-5">
                            <Grid item md={8}>
                                <Grid item md={12}>
                                    <Controller control={control} name="password" rules={{}} render={({ }) => (<>
                                        <Paper elevation={4} style={{ backgroundColor: "transparent" }}>
                                            <StyledInput placeholder="Contrasena"/>
                                        </Paper>
                                    </>)} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Input Confirmar contrasena */}
                        <Grid item md={12} className="flex justify-center pt-5">
                            <Grid item md={8}>
                                <Grid item md={12}>
                                    <Controller control={control} name="confirmar password" rules={{}} render={({ }) => (<>
                                        <Paper elevation={4} style={{ backgroundColor: "transparent" }}>
                                            <StyledInput placeholder="Confirmar contrasena"/>
                                        </Paper>
                                    </>)} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Buttom */}
                        <Grid item md={12} className="flex justify-center pt-5">
                            <StyledButton>Guardar</StyledButton>
                        </Grid>
                        <Grid item md={12} className="flex justify-center pt-5">
                            <StyledButton onClick={() => onClose()}>Cancelar</StyledButton>
                        </Grid>
                    </CardContent>
                </StyledCard>
            </div>
        </Modal>
    )
}

export default LostPassword;