import React, { useEffect } from "react";
import TodoList from "../components/TodoList";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { TodoStatusEnum } from "../models/ITodo";

const Todos: React.FC = () => {
    const {todos} = useTypedSelector(state => state.todo)
    const {user} = useTypedSelector(state => state.auth)
    const {fetchTodos} = useActions()
    useEffect(() => {
        fetchTodos(user.username)
    }, [])
    console.log(todos) 
    return(
        <div className="h100" style={{display:"flex", justifyContent:"center"}}>
            <TodoList filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.APPOINTED)} status={TodoStatusEnum.APPOINTED} borderColor="red" />
            <TodoList filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.IN_PROCCESING)} status={TodoStatusEnum.IN_PROCCESING} borderColor="blue" />
            <TodoList filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.DONE)} status={TodoStatusEnum.DONE} borderColor="green" />
        </div>
        
    )
} 
export default Todos
