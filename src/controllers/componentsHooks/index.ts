import useHeaderDashboard from "./HeaderDashboard";
import useLoginCard from "./LoginCard";
import useRegisterCard from "./RegisterCard";
import useQuestions from "./Questions";
import useLostPassword from "./LostPassword";

const useComponentsHooks = () => {
    return {
        useLoginCard,
        useRegisterCard,
        useHeaderDashboard,
        useQuestions,
        useLostPassword
    }
}

export default useComponentsHooks; 