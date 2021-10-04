import { ITodo } from "../../../models/ITodo";
import { IUser } from "../../../models/IUser";

export interface TodoState {
    todos: ITodo[];
    executors: IUser[];
    isLoadingTodos: boolean;
}

export enum TodoActionEnum {
    SET_TODOS = "SET_TODOS",
    SET_EXECUTORS = "SET_EXECUTORS",
    SET_IS_LOADING_TODOS = "SET_IS_LOADING_TODOS",
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_EXECUTORS = 'FETCH_EXECUTORS'
}