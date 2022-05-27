import { combineReducers } from "redux";
import useLoginReducers from "./login";

const useReducers = () => {
    const { login, question, questionNumber } = useLoginReducers();

    return combineReducers({
        login,
        question,
        questionNumber
    });
}

export default useReducers;