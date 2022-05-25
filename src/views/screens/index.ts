import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Register = lazy(() => import("./Register"));
const Module = lazy(() => import("./Modules"));
const Dashboard = lazy(() => import("./Dashboard"));
const LoginAdmin = lazy(() => import("./LoginAdmin"));
const Admin = lazy(() => import("./Admin"));

const useScreens = () => {
    return {
        Home,
        Register,
        Module,
        Dashboard,
        LoginAdmin,
        Admin
    }
}

export default useScreens;