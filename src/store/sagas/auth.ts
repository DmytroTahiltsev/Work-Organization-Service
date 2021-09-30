import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {AuthActionCreator} from '../slices'
import { ServiceResponceUser } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import UserService from '../../api/UserService';
import { IUser } from '../../models/IUser';
import { AuthActionsEnum, LoginState } from '../slices/auth/types';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* login(action: PayloadAction<LoginState>) {
    try{
        yield put(AuthActionCreator.setIsLoading(true))
        yield delay(500)
        const response: ServiceResponceUser = yield call(UserService.getUsers)
        const mockUser = response.data.find(user => user.username === action.payload.username && user.password === action.payload.username) 
        if(mockUser){
            localStorage.setItem("auth", "true")
            localStorage.setItem("username", mockUser.username)
            yield put(AuthActionCreator.setUser(mockUser))
            yield put(AuthActionCreator.setAuth(true))
        }
        else{
            yield put(AuthActionCreator.setError('incorrect username or password'))
        }
        yield put(AuthActionCreator.setIsLoading(false))

    }catch(e){
        yield put(AuthActionCreator.setError('Login error'))
    }
}
function* logout(){
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    yield put(AuthActionCreator.setUser({} as IUser))
    yield put(AuthActionCreator.setAuth(false))
}

function* authSagaWatcher() {
  yield takeEvery(AuthActionsEnum.LOGIN, login);
  yield takeEvery(AuthActionsEnum.LOGOUT, logout)
}

export default authSagaWatcher;