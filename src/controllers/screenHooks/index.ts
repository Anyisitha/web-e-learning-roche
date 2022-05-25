import useAdmin from "./Admin";
import useDashboard from "./Dashboard";
import useHome from "./Home";
import useLoginAdmin from "./LoginAdmin";
import useModules from "./Modules";

const useScreenHooks = () => {
    return {
        useHome,
        useDashboard,
        useModules,
        useLoginAdmin,
        useAdmin
    };
}

export default useScreenHooks;