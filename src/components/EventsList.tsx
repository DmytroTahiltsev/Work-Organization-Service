import React from 'react'
import { IEvent } from '../models/IEvent'

interface EventsListProps {
    currentDateEvents: IEvent[];
}

const EventsList: React.FC<EventsListProps> = (props) => {
    return(
        <ul>
            {props.currentDateEvents.map(event => 
                <li key={event.id}>{event.description}</li>    
            )}
        </ul>
    )
}

export default EventsList