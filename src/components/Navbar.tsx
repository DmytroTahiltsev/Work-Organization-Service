
import { Layout, Menu, Row } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const Navbar: React.FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    const router = useHistory()
    return(
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} selectable={false}>
                            <Menu.Item 
                                onClick={() => console.log('logout')}
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