import { takeEvery, put, call} from 'redux-saga/effects'
import {TodoActionCreator} from '../slices'
import { PayloadAction } from '@reduxjs/toolkit'
import TodoService from '../../api/TodoService'
import { ServiceResponceTodo } from './types'
import { TodoActionEnum } from '../slices/todo/types'
import { ITodo } from '../../models/ITodo'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* fetchTodos(action: PayloadAction<string>) {
    try{
        yield put(TodoActionCreator.setIsLoadingTodos(true))
        yield delay(500)
        const todos = localStorage.getItem('todo') || '[]'
        const json = JSON.parse(todos) as ITodo[]
        const currentUserTodos = json.filter(todo => todo.autor === action.payload || todo.executor === action.payload)
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