import useControllers from "controllers";
import { map } from "lodash";
import { IAnonymousRouteProps } from "models/interfaces/routes.interfaces";
import AnonymousRoute from "./AnonymousRoute";
import React from "react";

const useAnonymousRoutes = () => {
    /** Controllers */
    const { useGeneralHooks } = useControllers();
    const { useRoutes } = useGeneralHooks();
    const { anonymousRoutes } = useRoutes();

    return map(anonymousRoutes, (item: IAnonymousRouteProps, index: number) => (
        <AnonymousRoute {...item} key={index} />
    ));
}

export default useAnonymousRoutes;