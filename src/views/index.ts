import useComponents from "./components";
import useLayouts from "./layouts";
import useLocalComponents from "./localComponents";
import useScreens from "./screens";

const useViews = () => {
    return {
        useScreens,
        useLocalComponents,
        useComponents,
        useLayouts
    }
}

export default useViews;