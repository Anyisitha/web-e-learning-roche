import useControllers from "controllers";
import { Fragment } from "react";
import { StyledContainerComponent, StyledContainerItems, StyledDrawer, StyledHeaderContainer, StyledHomeIcon, StyledLogo, StyledMenuIcon, StyledSearchIcon, StyledWelcomeText } from "./HeaderDashboard.styles";
import { IconButton } from "@mui/material";


const HeaderDashboard = () => {
    /** Controllers */
    const { useGeneralHooks, useComponentsHooks } = useControllers();
    const { useAssets } = useGeneralHooks();
    const { rocheLogo } = useAssets();
    const { useHeaderDashboard } = useComponentsHooks();
    const { width, handlerOpenDrawer, openDrawer } = useHeaderDashboard();

    return (
        <StyledHeaderContainer>
            {
                width >= 1024 ? (
                    <StyledContainerComponent className="flex justify-between">
                        <Fragment>
                            <StyledContainerItems isCentered>
                                <StyledLogo
                                    src={rocheLogo}
                                    alt="Roche Logo"
                                />
                                <StyledWelcomeText>Bienvenido(a) {"Dr(a). Anyi Lozano"}</StyledWelcomeText>
                            </StyledContainerItems>

                            <StyledContainerItems>
                                <IconButton>
                                    <StyledHomeIcon fontSize="large"/>
                                </IconButton>
                                <IconButton>
                                    <StyledSearchIcon fontSize="large"/>
                                </IconButton>
                                <IconButton onClick={() => handlerOpenDrawer(true)}>
                                    <StyledMenuIcon fontSize="large"/>
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
                Hola angie Lozano
            </StyledDrawer>

        </StyledHeaderContainer>
    );
}

export default HeaderDashboard;