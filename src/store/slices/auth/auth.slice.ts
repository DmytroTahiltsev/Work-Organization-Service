import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthActionsEnum, AuthState, LoginState } from './types'
import { IUser } from '../../../models/IUser'



const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: '',
}

 const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
        state.isAuth = action.payload
        state.isLoading = false
    },
    setUser: (state, action: PayloadAction<IUser>) => {
        state.user = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.isLoading = false
    }
  },
})
export const login = (payload: LoginState) => ({
    type: AuthActionsEnum.LOGIN,
    payload,
  });
  export const logout = () => ({
    type: AuthActionsEnum.LOGOUT
  });

const AuthActionCreator = {
    ...actions,
    login,
    logout

  };
  

  export { AuthActionCreator, reducer }