import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";


export interface EventState {
    guests: IUser[];
    events: IEvent[];
    isLoading: boolean;
}

export enum EventActionEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface SetGuestAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[];
}
export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}
export interface SetIsLoadingAction {
    type: EventActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type EventAction = 
    SetGuestAction |
    SetEventsAction |
    SetIsLoadingAction