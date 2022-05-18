import useControllers from "controllers";
import { Fragment } from "react";
import { StyledContainerComponent, StyledContainerItems, StyledHeaderContainer, StyledHomeIcon, StyledLogo, StyledMenuIcon, StyledSearchIcon, StyledWelcomeText } from "./HeaderDashboard.styles";
import { Container, IconButton } from "@mui/material";


const HeaderDashboard = () => {
    /** Controllers */
    const { useGeneralHooks, useComponentsHooks } = useControllers();
    const { useAssets } = useGeneralHooks();
    const { rocheLogo } = useAssets();
    const { useHeaderDashboard } = useComponentsHooks();
    const { width } = useHeaderDashboard();

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
                                    <StyledHomeIcon />
                                </IconButton>
                                <IconButton>
                                    <StyledSearchIcon />
                                </IconButton>
                                <IconButton>
                                    <StyledMenuIcon />
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
                            <StyledWelcomeText>Bienvenido(a)</StyledWelcomeText>
                        </StyledContainerItems>

                        <StyledContainerItems>
                            <IconButton>
                                <StyledHomeIcon />
                            </IconButton>
                            <IconButton>
                                <StyledSearchIcon />
                            </IconButton>
                            <IconButton>
                                <StyledMenuIcon />
                            </IconButton>
                        </StyledContainerItems>
                    </Fragment>
                )
            }
        </StyledHeaderContainer>
    );
}

export default HeaderDashboard;