import { ComponentType } from "react";

export interface IAnonymousRouteProps {
    Component: ComponentType<any>;
    name: string;
    path: string;
    exact?: boolean;
}