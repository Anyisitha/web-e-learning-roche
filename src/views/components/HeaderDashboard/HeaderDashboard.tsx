import useControllers from "controllers";
import { Fragment, useEffect } from "react";
import { StyledButtonDrawer, StyledContainerComponent, StyledContainerItems, StyledDrawer, StyledHeaderContainer, StyledHomeIcon, StyledLogo, StyledMenuIcon, StyledSearchIcon, StyledWelcomeText } from "./HeaderDashboard.styles";
import { Container, Grid, IconButton } from "@mui/material";
import useModels from "models";
import { useHistory } from "react-router";


const HeaderDashboard = () => {
    /** Controllers */
    const { useGeneralHooks, useComponentsHooks, useScreenHooks } = useControllers();
    const { useAssets } = useGeneralHooks();
    const { rocheLogo } = useAssets();
    const { useHeaderDashboard } = useComponentsHooks();
    const { width, handlerOpenDrawer, openDrawer } = useHeaderDashboard();

    const { useDashboard } = useScreenHooks();
    const { getModules, modules, } = useDashboard();

    useEffect(() => {
        getModules()
    }, [getModules])

    const { useSelectors } = useModels();
    const { useLoginSelectors, useSelector } = useSelectors();
    const { loginSelectors } = useLoginSelectors();
    const { user } = useSelector(loginSelectors);

    const history = useHistory();

    return (
        <StyledHeaderContainer>
            {
                width >= 1024 ? (
                    <StyledContainerComponent className="flex justify-between">
                        <Fragment>
                            <StyledContainerItems isCentered>
                                <StyledLogo
                                    onClick={() => history.push("/dashboard")}
                                    src={rocheLogo}
                                    alt="Roche Logo"
                                />
                                <StyledWelcomeText>Bienvenido(a) {`Dr(a). ${user.fullname}`}</StyledWelcomeText>
                            </StyledContainerItems>

                            <StyledContainerItems>
                                <IconButton>
                                    <StyledHomeIcon fontSize="large" />
                                </IconButton>
                                <IconButton>
                                    <StyledSearchIcon fontSize="large" />
                                </IconButton>
                                <IconButton onClick={() => handlerOpenDrawer(true)}>
                                    <StyledMenuIcon fontSize="large" />
                                </IconButton>
                            </StyledContainerItems>
                        </Fragment>
                    </StyledContainerComponent>
                ) : (
                    <Fragment>
                        <StyledContainerItems isCentered>
                            <StyledLogo
                                src={rocheLogo}
                                alt="Roche Logo"
                            />
                            {/* <StyledWelcomeText>Bienvenido(a)</StyledWelcomeText> */}
                        </StyledContainerItems>

                        <StyledContainerItems>
                            <IconButton>
                                <StyledHomeIcon />
                            </IconButton>
                            <IconButton>
                                <StyledSearchIcon />
                            </IconButton>
                            <IconButton onClick={() => handlerOpenDrawer(true)}>
                                <StyledMenuIcon />
                            </IconButton>
                        </StyledContainerItems>
                    </Fragment>
                )
            }

            {/* drawer */}
            <StyledDrawer
                anchor="right"
                open={openDrawer}
                onClose={() => handlerOpenDrawer(false)}
            >
                <Container>
                    <Grid item md={12} className="flex justify-center pt-6">
                        <StyledLogo
                            onClick={() => history.push("/dashboard")}
                            src={rocheLogo}
                            alt="Roche Logo"
                        />
                    </Grid>
                    <Grid item md={12} className="md:hidden">
                        <StyledWelcomeText>Bienvenido(a) {`Dr(a). ${user.fullname}`}</StyledWelcomeText>
                    </Grid>
                    {
                        modules && modules.map((item: any, index: number) => (
                            <Grid item md={12} className="flex justify-center pt-6">
                                <StyledButtonDrawer onClick={() => history.push(`/module/${item.id}`, { description: item.name })}>
                                    Modulo {index + 1}
                                    <span className="hidden">{item.name}</span>
                                </StyledButtonDrawer>
                            </Grid>
                        ))
                    }
                    <Grid item md={12} className="flex justify-center pt-6">
                        <StyledButtonDrawer>
                            Cerrar Sesión
                        </StyledButtonDrawer>
                    </Grid>


                </Container>
            </StyledDrawer>

        </StyledHeaderContainer>
    );
}

export default HeaderDashboard;