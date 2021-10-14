import { Layout, Card } from "antd";
import React, {useEffect} from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Profile:React.FC = () => {
    const {user} = useTypedSelector(state => state.auth)
    const {events} = useTypedSelector(state => state.event)
    const {todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, fetchEvents} = useActions()
    useEffect(() => {
        fetchTodos(user.username)
        fetchEvents(user.username)
    }, [])
    return(
        <Layout>
            <div className="h100">
                <div style={{display: "flex", justifyContent: "center", margin: "30px 0"}}>
                    <Card title={`${user.username} events`} style={{ width: 300, marginRight:"70px" }}>
                        <ol>
                            {events.map(event => 
                                <li key={event.id}>{event.description} ({event.date})</li>  
                            )}
                        </ol>
                    </Card> 
                    <Card title={`${user.username} todos`} style={{ width: 300, marginRight:"70px" }}>
                        <ol>
                            {todos.map(todo => 
                                <li key={todo.id}>{todo.title} ({todo.status})</li>  
                            )}
                        </ol>
                    </Card>                    
                </div>
            </div>
        </Layout>
        
    )
}
export default Profile