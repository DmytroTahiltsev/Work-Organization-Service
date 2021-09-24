import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoActionEnum, TodoState } from './types'
import { ITodo } from '../../../models/ITodo'
import { IUser } from '../../../models/IUser'

const initialState: TodoState = {
    todos: [],
    guests: [],
    isLoadingTodos: false
}

 const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ITodo[]>) => {
        state.todos = action.payload
        state.isLoadingTodos = true
    },
    setGuests: (state, action: PayloadAction<IUser[]>) => {
        state.guests = action.payload
    },
    setIsLoadingTodos: (state, action: PayloadAction<boolean>) => {
        state.isLoadingTodos = action.payload
    }
  },
})
/*export const login = (payload: LoginState) => ({
    type: AuthActionsEnum.LOGIN,
    payload,
  });
  export const logout = () => ({
    type: AuthActionsEnum.LOGOUT
  });*/
export const fetchTodos = (payload: string) => ({
    type: TodoActionEnum.FETCH_TODOS,
    payload
})

const TodoActionCreator = {
    ...actions,
    fetchTodos
  };
  

  export { TodoActionCreator, reducer }