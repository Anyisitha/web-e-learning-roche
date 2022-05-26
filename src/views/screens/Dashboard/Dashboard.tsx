import { CardContent, Container, Grid, Paper } from "@mui/material";
import useControllers from "controllers";
import useHelpers from "helpers";
import React, { useEffect } from "react";
import useComponents from "views/components";
import { StyledButton, StyledCard, StyledContainer, StyledContainerComponent, StyledIcon, StyledImageCard, StyledMessageRemember, StyledSidebar, StyledTextCard, StyledTitleHeader } from "./Dashboard.styles";
import DashboardMobile from "./components/Mobile";

const Dashboard = () => {

    /** Controllers  */
    const { useGeneralHooks, useScreenHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();
    const { useDashboard } = useScreenHooks();
    const {
        modules,
        userProgress,
        getModules,
        getUserProgress
    } = useDashboard();

    const { useNavigationHelpers } = useHelpers();
    const { history } = useNavigationHelpers();

    /** Components */
    const { CircleProgress, CertificateCard } = useComponents();

    /** Effects */
    useEffect(() => {
        getModules();
        getUserProgress();
    }, [getModules, getUserProgress]);

    const ButtonComponent = ({ index, description, id }: { index: number; description: string, id: number; }) => {
        if (userProgress.moduleFinished === index) {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledButton onClick={() => history.push(`/module/${id}`, { description })}>Iniciar</StyledButton>
                </Grid>
            )
        } else if (userProgress.moduleFinished > index) {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledButton>Completado</StyledButton>
                </Grid>
            )
        } else if (userProgress.moduleFinished < index) {
            return (
                <Grid item lg={12} className="flex justify-center"></Grid>
            )
        } else {
            return (
                <Grid item lg={12} className="flex justify-center"></Grid>
            )
        }
    }

    const ImageComponent = ({ image, index }: { image: string; index: number; }) => {
        if (userProgress.moduleFinished === index) {
            return (
                <StyledImageCard src={image} alt="test" disabled={false} />
            )
        } else if (userProgress.moduleFinished > index) {
            return (
                <StyledImageCard src={image} alt="test" disabled={false} />
            )
        } else if (userProgress.moduleFinished < index) {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledImageCard src={image} alt="test" disabled={true} />
                </Grid>
            )
        } else {
            return (
                <Grid item lg={12} className="flex justify-center"></Grid>
            )
        }
    }

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
                                        <CircleProgress percent={userProgress.percent} isBody={false} />
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
                                        <CircleProgress percent={userProgress.percent} isBody={true} />
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
                                                    <Grid container className="justify-center items-center">
                                                        {
                                                            modules && modules.map((item: any, index: number) => (
                                                                <Grid item lg={4} key={index} className="px-3 pb-8">
                                                                    <Grid item lg={12} className="text-center pb-3">
                                                                        <Paper elevation={6}>
                                                                            <ImageComponent image={item.image} index={index} />
                                                                        </Paper>
                                                                    </Grid>

                                                                    <Grid item lg={12} className="text-center mt-3">
                                                                        <StyledTextCard bold>Modulo {index + 1}</StyledTextCard>
                                                                    </Grid>
                                                                    <Grid item lg={12} className="text-center pb-3">
                                                                        <StyledTextCard bold={false} dangerouslySetInnerHTML={{ __html: item.name }}></StyledTextCard>
                                                                    </Grid>
                                                                    <ButtonComponent index={index} description={item.name} id={item.id} />
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
                    <DashboardMobile />
                )
            }
        </StyledContainer >
    )
}

export default Dashboard;