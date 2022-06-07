import { Container, Grid, Tooltip } from "@mui/material";
import useControllers from "controllers";
import React, { FC, Fragment, useEffect } from "react";
import {
    StyledButtonSection,
    StyledContainer,
    StyledContainerSections,
    StyledContainerTab,
    StyledGrid,
    StyledNumberModule,
    StyledPaper,
    StyledSpan,
    StyledTab
} from "./Modules.styles";
import Questions from "./Questions";
import ModulesMobile from "./components/Mobile/Modules.Mobile";
import useModels from "models";
import { IButtonProps } from "models/interfaces/modules.interfaces";



const Module = () => {
    /** Controllers */
    const { useGeneralHooks, useScreenHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();
    const { useModules, useDashboard } = useScreenHooks();
    const { id, sections, getModulesSections, saveSection, description, handlerShowContent, showContent, section, handleSetSection, questions } = useModules();
    const { getUserProgress, userProgress } = useDashboard();

    const { useSelectors } = useModels();
    const { useSelector, useLoginSelectors } = useSelectors();
    const { userProgressSelector } = useLoginSelectors();
    const { moduleFinished } = useSelector(userProgressSelector)

    /** Effects */
    useEffect(() => {
        const executePetitions = async () => {
            await getUserProgress();
        }

        executePetitions();
    }, [])

    useEffect(() => {
        getModulesSections();
        // eslint-disable-next-line
    }, [id]);

    const moduleId = id;

    return width >= 1024 ? (
        <StyledContainer>
            <Container>
                <Grid container>
                    <StyledContainerTab>
                        <StyledTab item md={12}>
                            <StyledNumberModule>MÓDULO {id}</StyledNumberModule>
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
                <Grid container>
                    <StyledContainerTab fullWidth>
                        <StyledTab background={require('assets/images/ondas-white.png')} item md={12} isBody>
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
                                    <div className="flex justify-center items-center h-full">
                                        <StyledContainerSections>
                                            <StyledSpan>{description}</StyledSpan>
                                            <Grid container className="items-center sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 mt-16">
                                                {
                                                    sections.map((item: any, index: number) => (
                                                        <>
                                                            {
                                                                moduleId && (moduleId < userProgress.moduleFinished) ? (
                                                                    <StyledGrid item md={12} className="flex justify-center my-8">

                                                                        <StyledButtonSection
                                                                            disabled={false}
                                                                            completed={true}
                                                                            onClick={() => {
                                                                                userProgress.sectionFinished <= index && handlerShowContent(item.id);
                                                                            }}
                                                                        >
                                                                            {item.name}
                                                                        </StyledButtonSection>
                                                                    </StyledGrid>
                                                                ) : (
                                                                    <StyledGrid item md={12} className="flex justify-center my-8">
                                                                        <StyledButtonSection
                                                                            disabled={index > userProgress.sectionFinished}
                                                                            completed={index < userProgress.sectionFinished}
                                                                            onClick={() => {
                                                                                userProgress.sectionFinished <= index && handlerShowContent(item.id);
                                                                            }}
                                                                        >
                                                                            {item.name}
                                                                        </StyledButtonSection>
                                                                    </StyledGrid>
                                                                )
                                                            }
                                                        </>

                                                    ))
                                                }
                                            </Grid>
                                        </StyledContainerSections>
                                    </div>
                                )}
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
            </Container >
        </StyledContainer >
    ) : (
        <ModulesMobile />
    )
}

export default Module;