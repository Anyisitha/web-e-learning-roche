import useComponents from "./components";
import useLocalComponents from "./localComponents";
import useScreens from "./screens";

const useViews = () => {
    return {
        useScreens,
        useLocalComponents,
        useComponents
    }
}

export default useViews;