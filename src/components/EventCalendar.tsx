import React from "react";
import {Calendar} from 'antd'
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "./utils/date";
import EventsList from "./EventsList";
import { useTypedSelector } from "../hooks/useTypedSelector";


interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = (props) => {
    const {isLoadingCalendar} = useTypedSelector(state => state.event)
    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate())
        const currentDateEvents = props.events.filter(event => event.date === formatedDate)
        return (
            <div>
                <EventsList currentDateEvents={currentDateEvents} />
            </div>
        );
      }
    
    return(
        <Calendar
            dateCellRender={dateCellRender}
        />
    )
}
export default EventCalendar