import { Layout, Menu, Row } from "antd";
import { AntTreeNodeMouseEvent } from "antd/lib/tree";
import React, { MouseEvent, SyntheticEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";
import { AuthActionCreator } from "../store/slices";

const Navbar: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState<string>('')
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const router = useHistory()
    const {logout} = useActions()
    useEffect(() =>{
        setSelectedKey(RouteNames.EVENT)
    }, [])

    return(
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white', marginRight: 15}}>
                            {user.username}
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[selectedKey]} 
                            onClick={(item) => setSelectedKey(item.key)} 
                        > 
                            <Menu.Item 
                                onClick={() => router.push(RouteNames.EVENT)}
                                key={RouteNames.EVENT}
                            >
                                Events
                            </Menu.Item>
                            <Menu.Item 
                                onClick={() => router.push(RouteNames.TODOS)}
                                key={RouteNames.TODOS}
                            >
                                Todos
                            </Menu.Item>
                        </Menu>   
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                        > 
                            <Menu.Item 
                                onClick={() => logout()}
                                key= "3"
                            >
                                Logout
                            </Menu.Item>
                        </Menu>                 
                    </>
                    :
                    <>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item 
                                onClick={() => router.push(RouteNames.LOGIN)}
                                key="1"
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