import { Button, CardContent, Container, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useControllers from "controllers";
import { Fragment, useState } from "react";
import useComponents from "views/components";
import { StyledCard } from "./Admin.styles";
import Step1 from "./components/Step1/Step1";

const Admin = () => {
   

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useAdmin } = useScreenHooks();
    const { useAdminModules } = useAdmin();
    const {
        steps,
        activeStep,
    } = useAdminModules();

    /** States */
    

    const handleNext = () => {
        // let newSkipped = skipped;
        // if (isStepSkipped(activeStep)) {
        //     newSkipped = new Set(newSkipped.values());
        //     newSkipped.delete(activeStep);
        // }

        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // setSkipped(newSkipped);
    };
    return (
        <Fragment>
            <Container className="flex items-center">
                <StyledCard>
                    <CardContent>
                        <Stepper activeStep={activeStep}>
                            {
                                steps.map((label: string, index: number) => {
                                    const stepProps: { completed?: boolean; } = {};
                                    const labelProps: { optional?: React.ReactNode; } = {};
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    )
                                })
                            }
                        </Stepper>
                        {
                            activeStep === 1 ? (
                                <Step1 />
                            ) : (
                                <Fragment></Fragment>
                            )
                        }
                        {/* {
                            activeStep === steps.length ? (
                                <Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button>Reset</Button>
                                    </Box>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            // onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </Fragment>
                            )
                        } */}
                    </CardContent>
                </StyledCard>
            </Container>
        </Fragment >

    );
}

export default Admin;