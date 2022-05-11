import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Register = lazy(() => import("./Register"));

const useScreens = () => {
    return {
        Home,
        Register
    }
}

export default useScreens;