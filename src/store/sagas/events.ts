import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { EventActionCreator} from '../slices'
import { PayloadAction } from '@reduxjs/toolkit';
import UserService from '../../api/UserService';
import { IEvent } from '../../models/IEvent';
import { ServiceResponceUser } from './types';
import { EventActionEnum } from '../slices/event/types';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* fetchGuests(){
    try{
        yield put(EventActionCreator.setIsLoadingGuests(true))
        yield delay(500)
        const response: ServiceResponceUser = yield call(UserService.getUsers)
        yield put(EventActionCreator.setGuests(response.data))
        yield put(EventActionCreator.setIsLoadingGuests(false))

    } catch(e){
        console.log(e)
    }
}
function* createEvent(action: PayloadAction<IEvent>) {
    try{
        yield put(EventActionCreator.setIsLoadingEvents(true))
        yield delay(500)
        const events = localStorage.getItem('event') || '[]'
        const json = JSON.parse(events) as IEvent[]
        json.push(action.payload)
        yield put(EventActionCreator.setEvents(json))
        localStorage.setItem('event', JSON.stringify(json))
        yield put(EventActionCreator.setIsLoadingEvents(false))
    } catch(e){
        console.log(e)
    }
}
function* fetchEvents(action: PayloadAction<string>) {
    try{
        yield put(EventActionCreator.setIsLoadingCalendar(true))
        yield delay(500)
        const events = localStorage.getItem('event') || '[]'
        const json = JSON.parse(events) as IEvent[]
        const currentUserEvents = json.filter(event => event.autor === action.payload || event.guest === action.payload)
        yield put(EventActionCreator.setEvents(currentUserEvents))
        yield put(EventActionCreator.setIsLoadingCalendar(false))
    } catch(e) {
        console.log(e)
    }
}



function* eventsSagaWatcher() {
    yield takeEvery(EventActionEnum.FETCH_GUESTS, fetchGuests);
    yield takeEvery(EventActionEnum.CREATE_EVENT, createEvent);
    yield takeEvery(EventActionEnum.FETCH_EVENTS, fetchEvents);
  }
  
  export default eventsSagaWatcher;