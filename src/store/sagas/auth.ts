import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {AuthActionCreator} from '../slices'
import { AuthState } from '../slices/auth/types';
import { PayloadAction } from '@reduxjs/toolkit';
import UserService from '../../api/UserService';
import { IUser } from '../../models/IUser';
import { UserDataState } from '../slices/auth/auth.slice';


interface ServiceResponce {
    data: Array<IUser>;
    config: Object;

}

function* login(data: PayloadAction<UserDataState>) {
    /*yield delay(1000)
    yield put(AuthActionCreator.setUsername(data.payload.username))
    yield put(AuthActionCreator.setPassword(data.payload.password))*/

    try{
        yield put(AuthActionCreator.setIsLoading(true))
        const response: ServiceResponce = yield call(UserService.getUsers)
        console.log(response)
        const mockUser = response.data.find(user => user.username === data.payload.username && user.password === data.payload.username) 
        console.log("11" + response)
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
  yield takeEvery("LOGIN", login);
  yield takeEvery("LOGOUT", logout)
}

export default authSagaWatcher;