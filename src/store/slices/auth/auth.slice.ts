import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from './types'
import { IUser } from '../../../models/IUser'

export interface UserDataState  {
  username: string;
  password: string;
}

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
export const login = (payload: UserDataState) => ({
    type: "LOGIN",
    payload,
  });
  export const logout = () => ({
    type: "LOGOUT"
  });

const AuthActionCreator = {
    ...actions,
    login,
    logout

  };
  

  export { AuthActionCreator, reducer }