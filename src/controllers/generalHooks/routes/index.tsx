import { IAnonymousRouteProps } from "models/interfaces/routes.interfaces";
import useViews from "views";

const useRoutes = () => {
    /** Views */
    const { useScreens, useLayouts } = useViews();
    const {
        Home,
        Register,
        Module,
        Dashboard,
        LoginAdmin,
        Admin
    } = useScreens();

    /** Layouts */
    const {
        LoginLayout,
        DashboardLayout,
        LoginAdminLayout,
        AdminLayout
    } = useLayouts();

    const anonymousRoutes : IAnonymousRouteProps[] = [
        {
            Component: Home,
            path: "/",
            name: "Home",
            exact: true,
            layout: LoginLayout
        },
        {
            Component: Register,
            path: "/register",
            name: "Register",
        },
        {
            Component: Module,
            path: "/module/:id",
            name: "Module",
            layout: DashboardLayout
        },
        {
            Component: Dashboard,
            path: "/dashboard",
            name: "Dashboard",
            layout: DashboardLayout
        },
        {
            Component: LoginAdmin,
            path: "/admin/login",
            name: "LoginAdmin",
            layout: LoginAdminLayout
        },
        {
            Component: Admin,
            path: "/admin",
            name: "Admin",
            layout: AdminLayout
        }
    ]

    return {
        anonymousRoutes
    }
}

export default useRoutes;