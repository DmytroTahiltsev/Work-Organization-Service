
import { Layout, Menu, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";
import { AuthActionCreator } from "../store/slices";

const Navbar: React.FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const router = useHistory()
    const {logout} = useActions()
    return(
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} selectable={false}>
                            <Menu.Item 
                                onClick={() => logout()}
                                key={1}
                            >
                                Logout
                            </Menu.Item>
                        </Menu>                    
                    </>
                    :
                    <>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} selectable={false}>
                            <Menu.Item 
                                onClick={() => router.push(RouteNames.LOGIN)}
                                key={1}
                            >
                                Login
                            </Menu.Item>
                        </Menu>
                    </>
                }

            </Row>
        </Layout.Header>
    )
}
export default Navbar