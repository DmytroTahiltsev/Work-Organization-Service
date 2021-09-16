import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestAction, SetIsLoadingAction } from "./types";


export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    setIsEventLoading: (payload: boolean): SetIsLoadingAction => ({type: EventActionEnum.SET_IS_LOADING, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try{
            dispatch(EventActionCreators.setIsEventLoading(true))
            setTimeout(async () => {
                const response = await UserService.getUsers()
                dispatch(EventActionCreators.setGuests(response.data))
                dispatch(EventActionCreators.setIsEventLoading(false))
            }, 500)
        } catch(e){
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try{
            dispatch(EventActionCreators.setIsEventLoading(true))
            setTimeout(async () => {
                const events = localStorage.getItem('event') || '[]'
                const json = JSON.parse(events) as IEvent[]
                json.push(event)
                dispatch(EventActionCreators.setEvents(json))
                localStorage.setItem('event', JSON.stringify(json))
                dispatch(EventActionCreators.setIsEventLoading(false))
            }, 500)
        } catch(e){
            console.log(e)
        }
    }
}