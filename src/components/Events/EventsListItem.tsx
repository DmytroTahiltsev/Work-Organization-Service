import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IEvent } from '../../models/IEvent'

interface EventsListItemProps {
    event: IEvent;
}

const EventsListItem: React.FC<EventsListItemProps> = ({event}) => {
    const {user} = useTypedSelector(state => state.auth)
    return(
        <li key={event.id}>
            {event.description}
            {event.autor === user.username
                ? <span style={{color: "green"}}> (autor)</span>
                : <span style={{color: "blue"}}> (guest)</span>
            }
        </li> 
    )
}

export default EventsListItem