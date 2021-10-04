import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventActionEnum, EventState } from './types'
import { IUser } from '../../../models/IUser'
import { IEvent } from '../../../models/IEvent'



const initialState: EventState = {
    guests: [],
    events: [],
    isLoadingGuests: false,
    isLoadingEvents: false,
    isLoadingCalendar: false
}

 const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGuests: (state, action: PayloadAction<IUser[]>) => {
        state.guests = action.payload
        state.isLoadingGuests = false
    },
    setEvents: (state, action: PayloadAction<IEvent[]>) => {
        state.events = action.payload
        state.isLoadingEvents = false
    },
    setIsLoadingGuests: (state, action: PayloadAction<boolean>) => {
        state.isLoadingGuests = action.payload
    },
    setIsLoadingEvents: (state, action: PayloadAction<boolean>) => {
        state.isLoadingEvents = action.payload
    },
    setIsLoadingCalendar: (state, action: PayloadAction<boolean>) => {
        state.isLoadingCalendar = action.payload
    },

  },
})
const fetchGuests = () => ({
    type: EventActionEnum.FETCH_GUESTS,

  })
const createEvent = (payload: IEvent) => ({
    type: EventActionEnum.CREATE_EVENT,
    payload

  })
const fetchEvents = (payload: string) => ({
    type: EventActionEnum.FETCH_EVENTS,
    payload

  })


const EventActionCreator = {
    ...actions,
    fetchGuests,
    createEvent,
    fetchEvents
  }
  

  export { EventActionCreator, reducer }