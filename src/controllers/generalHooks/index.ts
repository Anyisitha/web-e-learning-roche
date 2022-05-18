import useAssets from "./assets";
import useRoutes from "./routes";

const useGeneralHooks = () => {
    return {
        useRoutes,
        useAssets
    }
}

export default useGeneralHooks;