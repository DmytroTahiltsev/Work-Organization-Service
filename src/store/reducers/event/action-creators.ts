import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestAction, SetIsLoadingGuestsAction, SetIsLoadingEventAction, SetIsLoadingCalendarAction } from "./types";


export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    setIsLoadingGuest: (payload: boolean): SetIsLoadingGuestsAction => ({type: EventActionEnum.SET_IS_LOADING_GUESTS, payload}),
    setIsLoadingEvent: (payload: boolean): SetIsLoadingEventAction => ({type: EventActionEnum.SET_IS_LOADING_EVENTS, payload}),
    setIsLoadingCalendar: (payload: boolean): SetIsLoadingCalendarAction => ({type: EventActionEnum.SET_IS_LOADING_CALENDAR, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try{
            dispatch(EventActionCreators.setIsLoadingGuest(true))
            setTimeout(async () => {
                const response = await UserService.getUsers()
                dispatch(EventActionCreators.setGuests(response.data))
                dispatch(EventActionCreators.setIsLoadingGuest(false))
            }, 500)
        } catch(e){
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try{
            dispatch(EventActionCreators.setIsLoadingEvent(true))
            setTimeout(async () => {
                const events = localStorage.getItem('event') || '[]'
                const json = JSON.parse(events) as IEvent[]
                json.push(event)
                dispatch(EventActionCreators.setEvents(json))
                localStorage.setItem('event', JSON.stringify(json))
                dispatch(EventActionCreators.setIsLoadingEvent(false))
            }, 500)
        } catch(e){
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try{
            dispatch(EventActionCreators.setIsLoadingCalendar(true))
            setTimeout(async () => {
                const events = localStorage.getItem('event') || '[]'
                const json = JSON.parse(events) as IEvent[]
                const currentUserEvents = json.filter(event => event.autor === username || event.guest === username)
                dispatch(EventActionCreators.setEvents(currentUserEvents))
                dispatch(EventActionCreators.setIsLoadingCalendar(false))
            }, 500)
        } catch(e) {
            console.log(e)
        }
    }
}