import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import EventsListItem from './EventsListItem'

interface EventsListProps {
    currentDateEvents: IEvent[];
}

const EventsList: React.FC<EventsListProps> = (props) => {
    const {user} = useTypedSelector(state => state.auth)
    return(
        <ul>
            {props.currentDateEvents.map(event =>
                <EventsListItem event={event} key={event.id} />
            )}
        </ul>
    )
}

export default EventsList