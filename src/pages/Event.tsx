import { Button, Layout, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {fetchGuests, createEvent} = useActions()
    const {guests, events, isLoading} = useTypedSelector(state => state.event)
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    }
    const addNewEvent = (event: IEvent) => {
        setIsModalVisible(false)
        createEvent(event)
    }
    useEffect(() => {
        fetchGuests()
    }, [])

    return(
        <Layout>
            {JSON.stringify(events)}
            <EventCalendar events={[]} />
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