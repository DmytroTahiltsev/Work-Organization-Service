import { Button, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Event: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {fetchGuests} = useActions()
    const {guests, events} = useTypedSelector(state => state.event)
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    }
    useEffect(() => {
        fetchGuests()
    }, [])
    return(
        <div>
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
                />
            </Modal>
        </div>
    )
}
export default Event