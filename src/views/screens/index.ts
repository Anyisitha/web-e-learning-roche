import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Register = lazy(() => import("./Register"));
const Modulo = lazy(() => import("./Module1"));
const Dashboard = lazy(() => import("./Dashboard"));

const useScreens = () => {
    return {
        Home,
        Register,
        Modulo,
        Dashboard
    }
}

export default useScreens;