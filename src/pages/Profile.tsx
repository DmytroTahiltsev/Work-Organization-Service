import { Layout, Card } from "antd";
import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Profile:React.FC = () => {
    const {user} = useTypedSelector(state => state.auth)
    return(
        <Layout>
            <div className="h100">
                {user.username}
            </div>
        </Layout>
        
    )
}
export default Profile