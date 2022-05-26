import useApi from "api";
import useModels from "models";
import {useState} from "react";
import {useHistory} from "react-router";
import Swal from "sweetalert2";

const useQuestions = () => {
    /** History */
    const history = useHistory();

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useModulesActions} = useActions();
    const {actSetModuleFinished, actSetQuestion, actSetQuestionNumber} = useModulesActions();

    /** States */
    const [responses, setResponses] = useState<any[]>([]);
    const [oportunity, setOportunity] = useState<number>(0);

    /** Selectors */
    const {useSelectors} = useModels();
    const {useSelector, useLoginSelectors} = useSelectors();
    const {questionSelector, questionNumberSelector} = useLoginSelectors();
    const selectedQuestion = useSelector(questionSelector);
    const {question} = useSelector(questionNumberSelector);

    /** Handlers */

    /**
     *  This function is used to make the change and the reaction of the system when selecting an answer.
     *  @param is_correct number.
     *  @param id number.
     *  @param answer number.
     *  @param questions any[].
     *  @return void
     */
    const validateQuestion = (is_correct: number, id: number, answer: string, questions: any[]) => {
        let percentCorrect: number = questions.length * 0.8;
        if (is_correct === 0 && oportunity === 0) {
            Swal.fire({
                icon: "error",
                title: "Respuesta Incorrecta!",
                text: "Tienes un intento mas para responder correctamente, Animo!"
            }).then(r => setOportunity(1));
        } else if (is_correct === 1 && oportunity === 0) {
            Swal.fire({
                icon: "success",
                title: "Respuesta Correcta!",
                text: "Bien!, contestaste correctamente"
            }).then(r => {
                setOportunity(0);
                setResponses([...responses, {question: id, correct: true}]);

                let newQuestion = questions.find((item: any) => item.id === question + 1);

                if (newQuestion !== undefined) {
                    // @ts-ignore
                    dispatch(actSetQuestion({
                        onError: (error) => console.log(error),
                        onSuccess: () => {
                            //@ts-ignore
                            dispatch(actSetQuestionNumber({question: question + 1}))
                        }
                    }, newQuestion))
                } else {
                    const totalResponses = responses.filter((item: any) => item.correct);
                    if (totalResponses.length >= percentCorrect) {
                        // @ts-ignore
                        dispatch(actSetQuestion({
                            onError: (error) => console.log(error),
                            onSuccess: () => {
                                //@ts-ignore
                                dispatch(actSetQuestionNumber({question: 0}))
                                Swal.fire({
                                    icon: "success",
                                    title: "Completaste el modulo!",
                                    html: `Gracias por completar el modulo, ahora puede seguir con el siguiente modulo.`
                                }).then(r => {
                                    // @ts-ignore
                                    dispatch(actSetModuleFinished({
                                        onError: (error: any) => console.log(error),
                                        onSuccess: () => history.push("/dashboard")
                                    }))
                                })
                            }
                        }, {}))
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Falto un poco mas!",
                            html: `Tranquilo(a) intentalo nuevamente para que puedas habilitar los siguientes modulos
                                Tu nota fue de: <b>${totalResponses.length + 1}</b>
                            `
                        }).then(r => history.push("/dashboard"))
                    }
                }
            });
        }

        if (is_correct === 0 && oportunity === 1) {
            Swal.fire({
                icon: "error",
                title: "Respuesta Incorrecta!",
                html: `la respuesta correcta era: <b>${answer}</b>`
            }).then(r => {
                setOportunity(0);
                setResponses([...responses, {question: id, correct: false}]);

                let newQuestion = questions.find((item: any) => item.id === question + 1);

                if (newQuestion !== undefined) {
                    // @ts-ignore
                    dispatch(actSetQuestion({
                        onError: (error) => console.log(error),
                        onSuccess: () => {
                            //@ts-ignore
                            dispatch(actSetQuestionNumber({question: question + 1}))
                        }
                    }, newQuestion))
                } else {
                    const totalResponses = responses.filter((item: any) => item.correct);
                    if (totalResponses.length >= percentCorrect) {
                        // @ts-ignore
                        dispatch(actSetQuestion({
                            onError: (error) => console.log(error),
                            onSuccess: () => {
                                //@ts-ignore
                                dispatch(actSetQuestionNumber({question: 0}))
                                Swal.fire({
                                    icon: "success",
                                    title: "Completaste el modulo!",
                                    html: `Gracias por completar el modulo, ahora puede seguir con el siguiente modulo.`
                                }).then(r => {
                                    // @ts-ignore
                                    dispatch(actSetModuleFinished({
                                        onError: (error: any) => console.log(error),
                                        onSuccess: () => history.push("/dashboard")
                                    }))
                                })
                            }
                        }, {}))
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Falto un poco mas!",
                            html: `Tranquilo(a) intentalo nuevamente para que puedas habilitar los siguientes modulos
                                Tu nota fue de: <b>${totalResponses.length + 1}</b>
                            `
                        }).then(r => history.push("/dashboard"))
                    }
                }
            });
        } else if (is_correct === 1 && oportunity === 1) {
            Swal.fire({
                icon: "success",
                title: "Respuesta Correcta!",
                text: "Bien!, contestaste correctamente"
            }).then(r => {
                setOportunity(0);
                setResponses([...responses, {question: id, correct: true}]);

                let newQuestion = questions.find((item: any) => item.id === question + 1);

                if (newQuestion !== undefined) {
                    // @ts-ignore
                    dispatch(actSetQuestion({
                        onError: (error) => console.log(error),
                        onSuccess: () => {
                            //@ts-ignore
                            dispatch(actSetQuestionNumber({question: question + 1}))
                        }
                    }, newQuestion))
                } else {
                    const totalResponses = responses.filter((item: any) => item.correct);
                    if (totalResponses.length >= percentCorrect) {
                        // @ts-ignore
                        dispatch(actSetQuestion({
                            onError: (error) => console.log(error),
                            onSuccess: () => {
                                //@ts-ignore
                                dispatch(actSetQuestionNumber({question: 0}))
                                Swal.fire({
                                    icon: "success",
                                    title: "Completaste el modulo!",
                                    html: `Gracias por completar el modulo, ahora puede seguir con el siguiente modulo.`
                                }).then(r => {
                                    // @ts-ignore
                                    dispatch(actSetModuleFinished({
                                        onError: (error: any) => console.log(error),
                                        onSuccess: () => history.push("/dashboard")
                                    }))
                                })
                            }
                        }, {}))
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Falto un poco mas!",
                            html: `Tranquilo(a) intentalo nuevamente para que puedas habilitar los siguientes modulos
                                Tu nota fue de: <b>${totalResponses.length + 1}</b>
                            `
                        }).then(r => history.push("/dashboard"))
                    }
                }
            });
        }
    }

    /**
     * This function is used to be able to save the next step after the presentation view of the questionnaire.
     * @param questions Array
     */
    const handleChange = (questions: any[]) => {
        let firstQuestion = questions.find((item: any) => item.id === 1);
        console.log("newQuestion", firstQuestion)
        // @ts-ignore
        dispatch(actSetQuestion({
            onError: (error: any) => console.log(error),
            onSuccess: () => {
                //@ts-ignore
                dispatch(actSetQuestionNumber({question: 1}));
            }
        }, firstQuestion));
    }

    /**
     * This function is used for reset the count of test.
     * @return void
     */
    const resetTest = () => {
        // @ts-ignore
        dispatch(actSetQuestionNumber({question: 0}));
    }

    return {
        validateQuestion,
        handleChange,
        question,
        selectedQuestion,
        resetTest
    }
}

export default useQuestions;