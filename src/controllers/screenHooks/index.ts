import useDashboard from "./Dashboard";
import useHome from "./Home";
import useModules from "./Modules";

const useScreenHooks = () => {
    return {
        useHome,
        useDashboard,
        useModules
    };
}

export default useScreenHooks;