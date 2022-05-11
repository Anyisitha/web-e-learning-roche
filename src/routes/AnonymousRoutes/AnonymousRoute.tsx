import { IAnonymousRouteProps } from "models/interfaces/routes.interfaces";
import { FC } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

const AnonymousRoute: FC<IAnonymousRouteProps> = ({
    Component,
    ...otherProps
}) => {
    return (
        <Route
            {...otherProps}
            render={(props: RouteComponentProps) => {
                return (
                    <Component {...props} />
                )
            }}
        />
    )
}

export default AnonymousRoute;