import axios, { AxiosResponse } from "axios";
import { ITodo } from "../models/ITodo";

export default class TodoService {
    static async getTodos(): Promise<AxiosResponse<ITodo[]>> {
        return axios.get<ITodo[]>('./todos.json')
    }
}