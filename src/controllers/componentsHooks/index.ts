import useHeaderDashboard from "./HeaderDashboard";
import useLoginCard from "./LoginCard";
import useRegisterCard from "./RegisterCard";

const useComponentsHooks = () => {
    return {
        useLoginCard,
        useRegisterCard,
        useHeaderDashboard
    }
}

export default useComponentsHooks; 