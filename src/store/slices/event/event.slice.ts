import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventState } from './types'
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
export const fetchGuests = () => ({
    type: "FETCH_GUESTS",

  });
export const createEvent = (payload: IEvent) => ({
    type: "CREATE_EVENT",
    payload

  });
export const fetchEvents = (payload: string) => ({
    type: "FETCH_EVENTS",
    payload

  });


const EventActionCreator = {
    ...actions,
    fetchGuests,
    createEvent,
    fetchEvents
  };
  

  export { EventActionCreator, reducer }