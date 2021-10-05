import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoActionEnum, TodoState } from './types'
import { ITodo } from '../../../models/ITodo'
import { IUser } from '../../../models/IUser'

const initialState: TodoState = {
    todos: [],
    executors: [],
    isLoadingTodos: false,
    isLoadingCreateTodo: false
}

 const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ITodo[]>) => {
        state.todos = action.payload
    },
    setExecutors: (state, action: PayloadAction<IUser[]>) => {
        state.executors = action.payload
    },
    setIsLoadingTodos: (state, action: PayloadAction<boolean>) => {
        state.isLoadingTodos = action.payload
    },
    setIsLoadingCreateTodo: (state, action: PayloadAction<boolean>) => {
        state.isLoadingCreateTodo = action.payload
    }
  },
})

const fetchTodos = (payload: string) => ({
    type: TodoActionEnum.FETCH_TODOS,
    payload
})
const fetchExecutors = () => ({
    type: TodoActionEnum.FETCH_EXECUTORS,
})
const createTodo = (payload: ITodo) => ({
    type: TodoActionEnum.CREATE_TODO,
    payload

})

const TodoActionCreator = {
    ...actions,
    fetchTodos,
    fetchExecutors,
    createTodo
  }
  

  export { TodoActionCreator, reducer }