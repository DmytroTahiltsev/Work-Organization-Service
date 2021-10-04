import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoActionEnum, TodoState } from './types'
import { ITodo } from '../../../models/ITodo'
import { IUser } from '../../../models/IUser'

const initialState: TodoState = {
    todos: [],
    executors: [],
    isLoadingTodos: false
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
    }
  },
})

export const fetchTodos = (payload: string) => ({
    type: TodoActionEnum.FETCH_TODOS,
    payload
})
export const fetchExecutors = () => ({
    type: TodoActionEnum.FETCH_EXECUTORS,
  })


const TodoActionCreator = {
    ...actions,
    fetchTodos,
    fetchExecutors
  };
  

  export { TodoActionCreator, reducer }