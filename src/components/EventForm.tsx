import React, { useState } from 'react'
import {Form, Row, Input, Button, DatePicker, Select} from 'antd'
import { rules } from "./utils/rules" 
import { IUser } from '../models/IUser'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment'
import { formatDate } from './utils/date'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void
}

const EventForm: React.FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        autor: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)
    const {user} = useTypedSelector(state => state.auth)
    const {isLoadingEvents} = useTypedSelector(state => state.event)
    const selectDate = (date: Moment | null) => {
        if(date){
            setEvent({...event, date: formatDate(date.toDate())})
        }

    }
    const submitForm = () => {
        props.submit({...event, autor: user.username})
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={event.description}
                    onChange={(e) => {setEvent({...event, description: e.target.value})}}
                />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(data) => selectDate(data)}
                />
            </Form.Item>
            <Form.Item
                label="Choose guest"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => {setEvent({...event, guest})}}>
                    {props.guests.map(guest => 
                        <Select.Option value={guest.username} key={guest.username}>
                            {guest.username}
                        </Select.Option>    
                    )}
                </Select>
            </Form.Item>
            <Row justify="end">
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoadingEvents} >
                    Create
                </Button>
            </Form.Item>
            </Row>           
        </Form>
    )
}
export default EventForm
