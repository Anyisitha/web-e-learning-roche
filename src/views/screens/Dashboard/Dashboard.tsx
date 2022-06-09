import {CardContent, Container, Grid, Paper} from "@mui/material";
import {
    StyledCard,
    StyledContainer,
    StyledIcon,
    StyledMessageRemember,
    StyledSidebar,
    StyledTitleHeader,
    StyledImageCard,
    StyledTextCard,
    StyledButton
} from "./Dashboard.styles";
import useControllers from "controllers";
import useViews from "views";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";   



const Dashboard = () => {
    /** Components */
    const {useComponents} = useViews();
    const {CircleProgress, CertificateCard} = useComponents();

    const {id} = useParams<{ id: string; }>();

    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useDashboard} = useScreenHooks();
    const {
        userProgress,
        getUserProgress,
        modules,
        getModules
    } = useDashboard();

    /** Effects */
    useEffect(() => {
        getUserProgress();
        getModules();
    }, [getModules, getUserProgress])

    /** Variables */
    const {percent} = userProgress;

    const history = useHistory();

    const ImageComponent = ({image, index}: { image: string; index: number; }) => {
        if (userProgress.moduleFinished === (index + 1)) {
            return (
                <StyledImageCard src={image} alt="test" disabled={false}/>
            )
        } else if (userProgress.moduleFinished > (index + 1)) {
            return (
                <StyledImageCard src={image} alt="test" disabled={false}/>
            )
        } else if (userProgress.moduleFinished < (index + 1)) {
            return (
                <StyledImageCard src={image} alt="test" disabled={true}/>
            )
        } else {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledImageCard src={image} alt="test" disabled={false}/>
                </Grid>
            )
        }
    }

    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);

    const particlesInit = async (main: any) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };


    window.addEventListener("resize", () => setWidth(window.innerWidth));
    

    return (
        <StyledContainer 
            background={"string"}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 3,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#e54416",
                        },
                        links: {
                            color: "#f7931e",
                            distance: 110,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="bg-[#e1e1e1ab]">
                <Grid container>
                    <StyledSidebar
                        item
                        lg={4}
                        xl={4}
                        md={4}
                        sm={12}
                        xs={12}
                        notFullScreen
                        className="pt-10"
                    >
                        <Container>
                            {
                                width >= 1024 ? (
                                    <>
                                        <Grid
                                            item
                                            xl={12}
                                            lg={12}
                                            md={12}
                                            sm={12}
                                            xs={12}
                                            className="flex justify-center"
                                        >
                                            <CircleProgress percent={percent} isBody={false}/>
                                        </Grid>
                                        <Grid
                                            item
                                            xl={12}
                                            lg={12}
                                            md={12}
                                            sm={12}
                                            xs={12}
                                            className="flex justify-center"
                                        >
                                            <CertificateCard/>
                                        </Grid>
                                    </>
                                ) : (
                                    <Grid container className="justify-center md:justify-start">
                                        <Grid
                                            item
                                            xl={12}
                                            lg={12}
                                            md={6}
                                            sm={6}
                                            xs={6}
                                            className="flex justify-center"
                                        >
                                            <CircleProgress percent={percent} isBody={false}/>
                                        </Grid>
                                        <Grid
                                            item
                                            xl={12}
                                            lg={12}
                                            md={6}
                                            sm={6}
                                            xs={6}
                                            className="flex justify-center"
                                        >
                                            <CertificateCard/>
                                        </Grid>
                                    </Grid>
                                )
                            }

                        </Container>
                    </StyledSidebar>
                    <StyledSidebar
                        item
                        lg={8}
                        xl={8}
                        md={8}
                        sm={12}
                        xs={12}
                        withOverflow
                        notFullScreen={false}
                        className="pt-10"
                    >
                        <Container>
                            <StyledTitleHeader>Recuerde:</StyledTitleHeader>
                            <Grid
                                item
                                lg={12}
                                className="flex gap-8 items-center"
                            >
                                <div>
                                    <StyledIcon
                                        src={require(`assets/images/icon-check.png`)}
                                        alt="Check"
                                    />
                                </div>
                                <div>
                                    <StyledMessageRemember>
                                        Debe completar cada uno de los módulos y aprobar los exámenes que corresponden a
                                        cada uno de ellos.
                                    </StyledMessageRemember>
                                </div>
                            </Grid>
                            <Grid
                                item
                                lg={12}
                                className="flex gap-8 items-center pt-5"
                            >
                                <div>
                                    <StyledIcon
                                        src={require(`assets/images/icon-info.png`)}
                                        alt="Check"
                                    />
                                </div>
                                <div>
                                    <StyledMessageRemember>
                                        Recuerde que a medida que complete un módulo, se desbloqueará el siguiente.
                                    </StyledMessageRemember>
                                </div>
                            </Grid>
                            <Grid item lg={12} className="pb-10">
                                <Paper elevation={4} sx={{width: "97%"}}>
                                    <StyledCard background={require("assets/images/ondas-white.png")}>
                                        <CardContent>
                                            <Grid container className="justify-center items-center">
                                                {
                                                    modules && modules.map((item: any, index: number) => (
                                                        <Grid item lg={4} md={4} sm={12} xs={12} key={index}
                                                              className="px-3 pb-8">
                                                            <Grid item lg={12} className="text-center pb-3">
                                                                <Paper elevation={6}>
                                                                    <ImageComponent
                                                                        image={item.image}
                                                                        index={index}
                                                                    />
                                                                </Paper>
                                                            </Grid>
                                                            <Grid item lg={12} className="text-center mt-3">
                                                                <div style={{
                                                                    textOverflow: "ellipsis",
                                                                    whiteSpace: "nowrap",
                                                                    width: "100%",
                                                                    overflow: "hidden"
                                                                }}>
                                                                    <StyledTextCard bold>{item.name}</StyledTextCard>
                                                                </div>
                                                            </Grid>
                                                            <Grid item lg={12} className="flex justify-center pt-5">
                                                                {
                                                                    parseInt(userProgress.moduleFinished) > index && (
                                                                        <Grid item lg={12} className="flex justify-center">
                                                                            <StyledButton onClick={() => {
                                                                                    history.push(`/module/${item.id}`, {description: item.description})
                                                                            }}>
                                                                                {
                                                                                    parseInt(userProgress.moduleFinished) === (index + 1) ? 'Iniciar' : 'Completado'
                                                                                }
                                                                            </StyledButton>
                                                                        </Grid>
                                                                    )
                                                                }
                                                            </Grid>
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
            </div>
        </StyledContainer>
    );
}

export default Dashboard;