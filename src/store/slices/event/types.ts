import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { SetIsLoadingAction } from "../auth/types";


export interface EventState {
    guests: IUser[];
    events: IEvent[];
    isLoadingGuests: boolean;
    isLoadingEvents: boolean;
    isLoadingCalendar: boolean;
}

export enum EventActionEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
    SET_IS_LOADING_GUESTS = 'SET_IS_LOADING',
    SET_IS_LOADING_EVENTS = 'SET_IS_LOADING_EVENTS',
    SET_IS_LOADING_CALENDAR = 'SET_IS_LOADING_CALENDAR'
}

export interface SetGuestAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[];
}
export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}
export interface SetIsLoadingGuestsAction {
    type: EventActionEnum.SET_IS_LOADING_GUESTS;
    payload: boolean;
}
export interface SetIsLoadingEventAction {
    type: EventActionEnum.SET_IS_LOADING_EVENTS;
    payload: boolean;
}
export interface SetIsLoadingCalendarAction {
    type: EventActionEnum.SET_IS_LOADING_CALENDAR;
    payload: boolean;
}

export type EventAction = 
    SetGuestAction |
    SetEventsAction |
    SetIsLoadingGuestsAction |
    SetIsLoadingEventAction |
    SetIsLoadingCalendarAction