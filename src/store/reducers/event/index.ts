import { EventAction, EventActionEnum, EventState } from "./types"


const initialState: EventState = {
    guests: [],
    events: [],
    isLoadingGuests: false,
    isLoadingEvents: false,
    isLoadingCalendar: false
}

export default function EventReducer(state = initialState, action: EventAction): EventState {
    switch(action.type){
        case EventActionEnum.SET_GUESTS:
            return {...state, guests: action.payload, isLoadingGuests: false}
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload, isLoadingEvents: false}
        case EventActionEnum.SET_IS_LOADING_GUESTS:
            return {...state, isLoadingGuests: action.payload}
        case EventActionEnum.SET_IS_LOADING_EVENTS:
            return {...state, isLoadingEvents: action.payload}
        case EventActionEnum.SET_IS_LOADING_EVENTS:
            return {...state, isLoadingCalendar: action.payload}
        default:
            return state
    }
}