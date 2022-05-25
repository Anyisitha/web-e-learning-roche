import { Container, Grid, Modal } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { StyledButton, StyledContainerQuestions, StyledDescription, StyledModal, StyledQuestion, StyledSpan, StyledTitle } from "./questions.styles";
import useControllers from "controllers";

interface IQuestionsProps {
    module?: number | string;
    description?: string;
    questions: any;
}

const Questions = ({ module, description, questions }: IQuestionsProps) => {
    /** States */
    const [showQuestions, setShowQuestion] = useState<boolean>(false);

    /** Controllers */
    const { useComponentsHooks } = useControllers();
    const { useQuestions } = useComponentsHooks();
    const { validateQuestion, handleChange, selectedQuestion, question, resetTest } = useQuestions();


    useEffect(() => {
        setTimeout(() => {
            setShowQuestion(true);
        }, 7000)
    }, [question]);

    useEffect(() => {
        resetTest();
        // eslint-disable-next-line
    }, []);


    return (
        <StyledContainerQuestions
            background="http://127.0.0.1:8000/images/fondo-cuestions.jpg"
            question={question}
        >
            {
                question === 0 ? (
                    <Container>
                        {
                            showQuestions ? (
                                <Fragment>
                                    <StyledTitle>Cuestionario modulo {module}</StyledTitle>
                                    <StyledDescription>{description}</StyledDescription>
                                    <Grid md={12} className="flex justify-center mt-6">
                                        <StyledButton onClick={() => handleChange(questions)}>Comenzar</StyledButton>
                                    </Grid>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Modal
                                        open={!showQuestions}
                                    >
                                        <Grid item md={12} className="flex justify-center items-center h-full">
                                            <StyledModal background={"http://127.0.0.1:8000/images/popup.png"}>
                                                <div className="container">
                                                    <div className="loader">
                                                        <div className="rocket">
                                                            <i className="fas fa-rocket"></i>
                                                            <i className="fas fa-cloud"></i>
                                                            <i className="fas fa-cloud"></i>
                                                            <i className="fas fa-cloud"></i>
                                                            <i className="fas fa-cloud"></i>
                                                        </div>
                                                        <span>
                                                            <i></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </StyledModal>
                                        </Grid>
                                    </Modal>
                                </Fragment>
                            )
                        }
                    </Container>
                ) : (
                    <Fragment>
                        <StyledQuestion>{`${selectedQuestion.id}. ${selectedQuestion.question}`}</StyledQuestion>
                        <div className="pl-8">
                            <ol type="A" className="mt-8">
                                {

                                    selectedQuestion.answers.map((item: any, index: number) => {
                                        let correctAnswer = selectedQuestion.answers.find((item: any) => item.is_correct === 1);
                                        if (index === 0) {
                                            return (
                                                <Grid container className="items-center gap-2" key={index}>
                                                    <StyledSpan
                                                        onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                    >
                                                        <b className="text-primary font-bold">A. </b>{item.answers}
                                                    </StyledSpan>
                                                </Grid>
                                            )
                                        } else if (index === 1) {
                                            return (
                                                <Grid container className="items-center gap-2" key={index}>
                                                    <StyledSpan
                                                        onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                    >
                                                        <b className="text-primary font-bold">B. </b>{item.answers}
                                                    </StyledSpan>
                                                </Grid>
                                            )
                                        } else if (index === 2) {
                                            return (
                                                <Grid container className="items-center gap-2" key={index}>
                                                    <StyledSpan
                                                        onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                    >
                                                        <b className="text-primary font-bold">C. </b>{item.answers}
                                                    </StyledSpan>
                                                </Grid>
                                            )
                                        } else {
                                            return (
                                                <Grid container className="items-center gap-2" key={index}>
                                                    <StyledSpan
                                                        onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                    >
                                                        <b className="text-primary font-bold">D. </b>{item.answers}
                                                    </StyledSpan>
                                                </Grid>
                                            )
                                        }
                                    })
                                }
                            </ol>
                        </div>
                    </Fragment>
                )
            }
        </StyledContainerQuestions>
    );
}

export default Questions;