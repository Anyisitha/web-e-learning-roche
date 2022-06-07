import { ICallback } from "./general.interfaces";

export interface IGetModuleSection extends ICallback {
    id?: string;
}

export interface IButtonProps {
    id: number;
    name: string;
    index: number;
}