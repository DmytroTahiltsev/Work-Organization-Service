import { takeEvery, put, call, takeLatest } from 'redux-saga/effects'
import {TodoActionCreator} from '../slices'
import { PayloadAction } from '@reduxjs/toolkit'
import TodoService from '../../api/TodoService'
import { ServiceResponceTodo } from './types'
import { TodoActionEnum } from '../slices/todo/types'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* fetchTodos(action: PayloadAction<string>) {
    try{
        yield put(TodoActionCreator.setIsLoadingTodos(true))
        yield delay(500)
        const response: ServiceResponceTodo = yield call(TodoService.getTodos)
        const currentUserTodos = response.data.filter(todo => todo.autor === action.payload || todo.executor === action.payload)
        yield put(TodoActionCreator.setTodos(currentUserTodos))
        yield put(TodoActionCreator.setIsLoadingTodos(false))
    } catch(e) {
        console.log(e)
    }
}


function* todosSagaWatcher() {
    yield takeEvery(TodoActionEnum.FETCH_TODOS, fetchTodos)

  }
  
  export default todosSagaWatcher;