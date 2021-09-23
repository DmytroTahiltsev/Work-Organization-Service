import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {AuthActionCreator, EventActionCreator} from '../slices'
import { PayloadAction } from '@reduxjs/toolkit';
import UserService from '../../api/UserService';
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';


function* fetchGuests(){
    try{
        yield put(EventActionCreator.setIsLoadingGuests(true))
        const response: IUser[] = yield call(UserService.getUsers)
        console.log(response)
        yield put(EventActionCreator.setGuests(response))
        yield put(EventActionCreator.setIsLoadingGuests(false))

    } catch(e){
        console.log(e)
    }
}
function* createEvent(data: PayloadAction<IEvent>) {
    try{
        yield put(EventActionCreator.setIsLoadingEvents(true))
        const events = localStorage.getItem('event') || '[]'
        const json = JSON.parse(events) as IEvent[]
        json.push(data.payload)
        yield put(EventActionCreator.setEvents(json))
        localStorage.setItem('event', JSON.stringify(json))
        yield put(EventActionCreator.setIsLoadingEvents(false))
    } catch(e){
        console.log(e)
    }
}
function* fetchEvents(data: PayloadAction<string>) {
    try{
        yield put(EventActionCreator.setIsLoadingCalendar(true))
        const events = localStorage.getItem('event') || '[]'
        const json = JSON.parse(events) as IEvent[]
        const currentUserEvents = json.filter(event => event.autor === data.payload || event.guest === data.payload)
        yield put(EventActionCreator.setEvents(currentUserEvents))
        yield put(EventActionCreator.setIsLoadingCalendar(false))
    } catch(e) {
        console.log(e)
    }
}



function* eventsSagaWatcher() {
    yield takeEvery("FETCH_GUESTS", fetchGuests);
    yield takeEvery("CREATE_EVENT", createEvent);
    yield takeEvery("FETCH_EVENTS", fetchEvents);
  }
  
  export default eventsSagaWatcher;