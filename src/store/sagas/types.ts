import { IUser } from "../../models/IUser";

export interface ServiceResponce {
    data: Array<IUser>;
    config: Object;
    status: number;
    statusText: string;
}