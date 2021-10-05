import { ITodo } from "../../../models/ITodo";
import { IUser } from "../../../models/IUser";

export interface TodoState {
    todos: ITodo[];
    executors: IUser[];
    isLoadingTodos: boolean;
    isLoadingCreateTodo: boolean;
}

export enum TodoActionEnum {
    SET_TODOS = "SET_TODOS",
    SET_EXECUTORS = "SET_EXECUTORS",
    SET_IS_LOADING_TODOS = "SET_IS_LOADING_TODOS",
    SET_IS_LOADING_CREATE_TODO = "SET_IS_LOADING_CREATE_TODO",
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_EXECUTORS = 'FETCH_EXECUTORS',
    CREATE_TODO = 'CREATE_TODO',
    DELETE_TODO = 'DELETE_TODO'
}