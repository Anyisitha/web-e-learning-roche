import { IAnonymousRouteProps } from "models/interfaces/routes.interfaces";
import useViews from "views";

const useRoutes = () => {
    /** Views */
    const { useScreens } = useViews();
    const {
        Home,
        Register,
        Modulo
    } = useScreens();

    const anonymousRoutes : IAnonymousRouteProps[] = [
        {
            Component: Home,
            path: "/",
            name: "Home",
            exact: true
        },
        {
            Component: Register,
            path: "/register",
            name: "Register",
        },
        {
            Component: Modulo,
            path: "/modulo1",
            name: "Modulo",
        }
    ]

    return {
        anonymousRoutes
    }
}

export default useRoutes;