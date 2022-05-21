import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React from "react";
import { StyledContainer, StyledContainerTab, StyledModuleName, StyledNumberModule, StyledTab } from "./Modules.styles";

const Module = () => {
    /** Controllers */
    const { useGeneralHooks, useScreenHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();
    const { useModules } = useScreenHooks();
    const { id } = useModules();

    return width >= 1024 ? (
        <StyledContainer>
            <Container>
                <Grid container>
                    <StyledContainerTab>
                        <StyledTab item md={12}>
                            <StyledNumberModule>Módulo {id}</StyledNumberModule>
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
                <Grid container>
                    <StyledContainerTab fullWidth>
                        <StyledTab background={require('assets/images/ondas.png')} item md={12}>
                            <StyledModuleName>{}</StyledModuleName>
                            </StyledTab>
                    </StyledContainerTab>
                </Grid>
            </Container>
        </StyledContainer>
    ) : (
        <React.Fragment></React.Fragment>
    )
}

export default Module;