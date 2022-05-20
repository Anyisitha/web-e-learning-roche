import useDashboard from "./Dashboard";
import useHome from "./Home";

const useScreenHooks = () => {
    return {
        useHome,
        useDashboard
    };
}

export default useScreenHooks;