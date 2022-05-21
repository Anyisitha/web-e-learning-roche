import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Register = lazy(() => import("./Register"));
const Module = lazy(() => import("./Modules"));
const Dashboard = lazy(() => import("./Dashboard"));

const useScreens = () => {
    return {
        Home,
        Register,
        Module,
        Dashboard
    }
}

export default useScreens;