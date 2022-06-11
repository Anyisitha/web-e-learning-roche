import { useDispatch } from "react-redux";
import useLoginActions from "./login";
import useLoginAdminActions from "./login-admin";
import useModulesActions from "./modules";
import useRegisterActions from "./register";

const useActions = () => {
    const dispatch = useDispatch();

    return {
        dispatch,
        useLoginAdminActions,
        useModulesActions,
        useRegisterActions,
        useLoginActions
    };
}

export default useActions;