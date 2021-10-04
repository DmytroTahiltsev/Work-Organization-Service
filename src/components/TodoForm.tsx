import React, { useState } from 'react'
import {Form, Row, Input, Button, DatePicker, Select} from 'antd'
import { rules } from "./utils/rules" 
import { IUser } from '../models/IUser'
import { ITodo, statuses } from '../models/ITodo'
import { Moment } from 'moment'
import { formatDate } from './utils/date'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface TodoFormProps {
    executors: IUser[];
    submit: (todo: ITodo) => void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [todo, setTodo] = useState<ITodo>({
        autor: '',
        executor: '',
        title:'',
        description: '',
        status: statuses[0],
    } as ITodo)
    const {user} = useTypedSelector(state => state.auth)
    const {isLoadingTodos} = useTypedSelector(state => state.todo)
    const submitForm = () => {
        props.submit({...todo, autor: user.username, id: Date.now()})
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Event title"
                name="title"
                rules={[rules.required()]}
            >
                <Input
                    value={todo.title}
                    onChange={(e) => {setTodo({...todo, title: e.target.value})}}
                />
            </Form.Item>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={todo.description}
                    onChange={(e) => {setTodo({...todo, description: e.target.value})}}
                />
            </Form.Item>
            <Form.Item
                label="Choose executor"
                name="executor"
                rules={[rules.required()]}
            >
                <Select onChange={(executor: string) => {setTodo({...todo, executor})}}>
                    {props.executors.map(executor => 
                        <Select.Option value={executor.username} key={executor.username}>
                            {executor.username}
                        </Select.Option>    
                    )}
                </Select>
            </Form.Item>
            <Row justify="end">
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoadingTodos} >
                    Create
                </Button>
            </Form.Item>
            </Row>           
        </Form>
    )
}
export default TodoForm
