import { CardContent, Container, Grid, Paper } from "@mui/material";
import useControllers from "controllers";
import React from "react";
import useComponents from "views/components";
import { StyledButton, StyledCard, StyledContainer, StyledContainerComponent, StyledIcon, StyledImageCard, StyledMessageRemember, StyledSidebar, StyledTextCard, StyledTitleHeader } from "./Dashboard.styles";

const Dashboard = () => {

    /** Controllers  */
    const { useGeneralHooks, useScreenHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();
    const { useDashboard } = useScreenHooks();
    const { dashboardContent } = useDashboard();

    /** Components */
    const { CircleProgress, CertificateCard } = useComponents();

    return (
        <StyledContainer background={require('assets/images/ondas.png')}>
            {
                width >= 1024 ? (
                    <React.Fragment>
                        <Grid container>
                            <StyledSidebar item md={3} lg={3} isGap notFullScreen={false}>
                                <Grid item md={12}>
                                    <StyledContainerComponent>
                                        <StyledTitleHeader>Módulos</StyledTitleHeader>
                                    </StyledContainerComponent>

                                    <StyledContainerComponent>
                                        <CircleProgress percent={20} isBody={false} />
                                    </StyledContainerComponent>
                                    <StyledContainerComponent>
                                        <CertificateCard />
                                    </StyledContainerComponent>
                                </Grid>
                            </StyledSidebar>
                            <StyledSidebar item md={9} lg={9} withOverflow notFullScreen={false}>
                                <Container>
                                    <StyledTitleHeader>Recuerde:</StyledTitleHeader>
                                    <StyledSidebar item md={12} isCentered notFullScreen={true}>
                                        <CircleProgress percent={10} isBody={true} />
                                    </StyledSidebar>
                                    <Grid container className="items-center">
                                        <StyledIcon
                                            src={require(`assets/images/icon-check.png`)}
                                            alt="Check"
                                        />
                                        <StyledMessageRemember>
                                            Debe completar cada uno de los módulos y aprobar los exámenes que corresponden a cada uno de ellos.
                                        </StyledMessageRemember>
                                    </Grid>
                                    <Grid container className="pt-6 items-center">
                                        <StyledIcon
                                            src={require(`assets/images/icon-info.png`)}
                                            alt="Check"
                                        />
                                        <StyledMessageRemember>
                                            Recuerde que a medida que complete un módulo, se desbloqueará el siguiente.
                                        </StyledMessageRemember>
                                    </Grid>
                                    <Grid item lg={12}>
                                        <Paper elevation={4} sx={{ width: "97%" }}>
                                            <StyledCard background={require("assets/images/ondas-white.png")}>
                                                <CardContent>
                                                    <Grid container className="justify-center">
                                                        {
                                                            dashboardContent.map((item: any, index: number) => (
                                                                <Grid item lg={4} key={index} className="px-3 pb-8">
                                                                    <Grid item lg={12} className="text-center pb-3">
                                                                        <Paper elevation={6}>
                                                                            <StyledImageCard src={item.image} alt="test" disabled={!item.enabled} />
                                                                        </Paper>
                                                                    </Grid>

                                                                    <Grid item lg={12} className="text-center mt-3">
                                                                        <StyledTextCard bold>{item.module}</StyledTextCard>
                                                                    </Grid>
                                                                    <Grid item lg={12} className="text-center pb-3">
                                                                        <StyledTextCard bold={false} dangerouslySetInnerHTML={{ __html: item.text }}></StyledTextCard>
                                                                    </Grid>
                                                                    {
                                                                        item.enabled && (
                                                                            <Grid item lg={12} className="flex justify-center">
                                                                                <StyledButton>Iniciar</StyledButton>
                                                                            </Grid>
                                                                        )
                                                                    }
                                                                </Grid>
                                                            ))
                                                        }

                                                    </Grid>
                                                </CardContent>
                                            </StyledCard>
                                        </Paper>
                                    </Grid>
                                </Container>
                            </StyledSidebar>
                        </Grid>

                    </React.Fragment>

                ) : (
                    /** Mobile */
                    <React.Fragment>
                        <StyledTitleHeader>Módulos</StyledTitleHeader>
                        <CircleProgress percent={10} isBody={false} />
                        <CertificateCard />
                    </React.Fragment>
                )
            }
        </StyledContainer >
    )
}

export default Dashboard;