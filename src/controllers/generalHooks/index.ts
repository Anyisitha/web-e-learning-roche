import useAssets from "./assets";
import useGeneral from "./general";
import useRoutes from "./routes";

const useGeneralHooks = () => {
    return {
        useRoutes,
        useAssets,
        useGeneral
    }
}

export default useGeneralHooks;