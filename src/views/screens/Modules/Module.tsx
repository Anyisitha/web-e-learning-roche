import { Container, Grid, Tooltip } from "@mui/material";
import useControllers from "controllers";
import React, { Fragment, useEffect } from "react";
import {
    StyledButtonSection,
    StyledContainer,
    StyledContainerTab,
    StyledGrid,
    StyledNumberModule,
    StyledPaper,
    StyledSpan,
    StyledTab
} from "./Modules.styles";
import Questions from "./Questions";
import ModulesMobile from "./components/Mobile/Modules.Mobile";

const Module = () => {
    /** Controllers */
    const { useGeneralHooks, useScreenHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();
    const { useModules, useDashboard } = useScreenHooks();
    const { id, sections, getModulesSections, saveSection, description, handlerShowContent, showContent, section, handleSetSection, questions } = useModules();
    const { getUserProgress, userProgress } = useDashboard();

    /** Effects */
    useEffect(() => {
        getUserProgress();
    }, [getModulesSections, section, getUserProgress])

    useEffect(() => {
        getModulesSections();
        // eslint-disable-next-line
    }, [id]);


    const Buttons = ({ index, id, name }: { index: number; id: number; name: string; }) => {
        if (index > userProgress.sectionFinished) {
            return (
                <Tooltip title="Contenido no activo">
                    <StyledButtonSection
                        disabled={true}
                        completed={false}
                    >
                        {name}
                    </StyledButtonSection>
                </Tooltip>
            )
        } else if (index === userProgress.sectionFinished + 1) {
            return (
                <StyledButtonSection
                    disabled={false}
                    completed={false}
                    onClick={() => handlerShowContent(id)}
                >
                    {name}
                </StyledButtonSection>
            )
        } else {
            return (
                <StyledButtonSection
                    disabled={index > userProgress.sectionFinished}
                    completed={index < userProgress.sectionFinished}
                    onClick={() => {
                        handlerShowContent(id)
                    }}
                >
                    {name}
                </StyledButtonSection>
            )
        }
    }

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
                        <StyledTab background={require('assets/images/ondas.png')} item md={12} isBody>
                            {
                                showContent ? (
                                    <Fragment>
                                        {
                                            section.content.type !== "Test" && (
                                                <span
                                                    className="text-white absolute z-[1] right-[5%] top-[3%] cursor-pointer"
                                                    onClick={saveSection}
                                                >
                                                    X
                                                </span>
                                            )
                                        }
                                        {
                                            section.content.type === "AV" ? (
                                                <iframe
                                                    src={section.content.content}
                                                    height="100%"
                                                    width="100%"
                                                    title="Av-iframe"
                                                ></iframe>
                                            ) : section.content.type === "Video" ? (
                                                <video
                                                    controls
                                                    id="video"
                                                    src={section.content.content}
                                                    height="100%"
                                                    width="100%"
                                                    style={{ height: "100%" }}
                                                    onEnded={saveSection}
                                                ></video>
                                            ) : (
                                                <Grid item md={12} className="flex justify-center h-full">
                                                    <StyledPaper elevation={6}>
                                                        <Questions
                                                            module={id}
                                                            description={description}
                                                            questions={questions}
                                                            isMobile={false}
                                                        />
                                                    </StyledPaper>
                                                </Grid>
                                            )
                                        }
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <StyledSpan>{description}</StyledSpan>
                                        <Grid container className="items-center mt-16">
                                            {
                                                sections.map((item: any, index: number) => (
                                                    <StyledGrid item md={12} className="flex justify-center my-8">
                                                        <Buttons name={item.name} id={item.id} index={index} />
                                                    </StyledGrid>
                                                ))
                                            }
                                        </Grid>
                                    </Fragment>
                                )}
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
            </Container >
        </StyledContainer >
    ) : (
        <ModulesMobile/>
    )
}

export default Module;