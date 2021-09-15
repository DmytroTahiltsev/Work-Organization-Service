import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { SetUserAction, AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction } from "./types";


export const AuthActionCreators = {
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth}),
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading}),
    setError: (error: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try{
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout( async () => {
                const response = await axios.get<IUser[]>('./users.json')
                const mockUser = response.data.find(user => user.username === username && user.password === password)
                if(mockUser){
                    localStorage.setItem("auth", "true")
                    localStorage.setItem("username", mockUser.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser))
                }
                else{
                    dispatch(AuthActionCreators.setError('incorrect username or password'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 500)

        }catch(e){
            dispatch(AuthActionCreators.setError('Login error'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    }

}