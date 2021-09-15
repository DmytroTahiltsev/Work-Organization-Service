import React, { useState } from "react";
import {Form, Input, Button, Row, Divider} from 'antd'
import { rules } from "./utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/actions-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
const LoginForm: React.FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const submit = () => {
        login(username, password)
    }

    return(
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>
                    {error}
                </div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Item>  
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
            </Form.Item>  
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Login
                    </Button>
                </Form.Item> 
            </Row>       
        </Form>
    )
}
export default LoginForm