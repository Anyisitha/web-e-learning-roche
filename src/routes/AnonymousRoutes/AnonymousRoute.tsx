import { IAnonymousRouteProps } from "models/interfaces/routes.interfaces";
import { FC } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

const AnonymousRoute: FC<IAnonymousRouteProps> = ({
    Component,
    layout,
    ...otherProps
}) => {
    /** Layout */
    const Layout = layout;

    return (
        <Route
            {...otherProps}
            render={(props: RouteComponentProps) => {
                if (Layout) {
                    return <Layout>
                        <Component />
                    </Layout>
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

export default AnonymousRoute;