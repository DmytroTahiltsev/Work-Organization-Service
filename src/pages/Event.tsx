import { Button, Layout, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import EventCalendar from "../components/Events/EventCalendar";
import EventForm from "../components/Events/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";
import Loader from "../components/UI/Loader/Loader";

const Event: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guests, events, isLoadingEvents, isLoadingCalendar} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    }
    const addNewEvent = (event: IEvent) => {
        createEvent(event)
    }
    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])
    useEffect(() => {
        setIsModalVisible(isLoadingEvents)
    }, [isLoadingEvents])

    return(
        isLoadingCalendar
        ?
        <div className="h100">
            <Loader/>
        </div> 
        :
        <Layout>
            <EventCalendar events={events} />
            <Row justify="center">
                <Button onClick={showModal}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                visible={isModalVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <EventForm 
                    guests={guests} 
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    )
}
export default Event