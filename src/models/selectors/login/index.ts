import useCreateSelector from "helpers/createSelector";

const useLoginSelectors = () => {
    /** Constructor */
    const { createSelector } = useCreateSelector();

    const loginSelectors = createSelector(
        (state: any) => state.login,
        (login: any) => login
    );

    const questionSelector = createSelector(
        (state: any) => state.question,
        (question: any) => question
    );

    const questionNumberSelector = createSelector(
        (state: any) => state.questionNumber,
        (questionNumber: any) => questionNumber
    );

    return {
        loginSelectors,
        questionSelector,
        questionNumberSelector
    };
}

export default useLoginSelectors;