import React, { useEffect } from "react";
import TodoList from "../components/TodoList";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Todos: React.FC = () => {
    const {todos} = useTypedSelector(state => state.todo)
    const {user} = useTypedSelector(state => state.auth)
    const {fetchTodos} = useActions()
    useEffect(() => {
        fetchTodos(user.username)
    }, [])
    console.log(todos) 
    return(
        <div>Todos
            <TodoList color="red" />
        </div>
        
    )
} 
export default Todos
