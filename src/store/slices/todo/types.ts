import { ITodo } from "../../../models/ITodo";
import { IUser } from "../../../models/IUser";

export interface TodoState {
    todos: ITodo[];
    guests: IUser[];
    isLoadingTodos: boolean;
}

export enum TodoActionEnum {
    SET_TODOS = "SET_TODOS",
    SET_GUESTS = "SET_GUESTS",
    SET_IS_LOADING_TODOS = "SET_IS_LOADING_TODOS",
    FETCH_TODOS = "FETCH_TODOS"
}