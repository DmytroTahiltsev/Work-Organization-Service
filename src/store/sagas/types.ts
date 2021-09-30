import { ITodo } from "../../models/ITodo";
import { IUser } from "../../models/IUser";

export interface ServiceResponceUser {
    data: IUser[];
    config: Object;
    status: number;
    statusText: string;
}
export interface ServiceResponceTodo {
    data: ITodo[];
    config: Object;
    status: number;
    statusText: string;
}
