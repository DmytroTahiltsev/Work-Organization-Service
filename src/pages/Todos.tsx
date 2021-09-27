import React, { useEffect } from "react";
import TodoList from "../components/TodoList";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ITodo, TodoStatus, TodoStatusEnum, statuses} from "../models/ITodo";

const Todos: React.FC = () => {
    const {todos} = useTypedSelector(state => state.todo)
    const {user} = useTypedSelector(state => state.auth)
    const {fetchTodos, setTodos} = useActions()
    function deleteHandler(id: number){
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function changeStatus(todo: ITodo, direction: number){
        const statusIndex = statuses.indexOf(todo.status)
        let status: TodoStatus
        if(direction > 0){
            status = statusIndex < statuses.length - 1 ? statuses[statusIndex + 1] : statuses[0]
        }
        else if (direction < 0){
            status = statusIndex > 0 ? statuses[statusIndex - 1] : statuses[statuses.length - 1]
        }
        else {
            return
        }
        const newTodo : ITodo = {
            id: todo.id,
            autor: todo.autor,
            executor: todo.executor,
            title: todo.title,
            description: todo.description,
            status: status
        }
        setTodos([...todos.filter(elem => elem.id !== todo.id), newTodo])
    }
    useEffect(() => {
        fetchTodos(user.username)
    }, []) 
    return(
        <div className="h100" style={{display:"flex", justifyContent:"center"}}>
            <TodoList 
                filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.APPOINTED)}
                status={TodoStatusEnum.APPOINTED} 
                borderColor="red" 
                deleteHandler={deleteHandler}
                changeStatus={changeStatus}
                />
            <TodoList 
                filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.IN_PROCCESING)} 
                status={TodoStatusEnum.IN_PROCCESING} 
                borderColor="blue" 
                deleteHandler={deleteHandler}
                changeStatus={changeStatus}
                />
            <TodoList filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.DONE)}
                 status={TodoStatusEnum.DONE} 
                 borderColor="green" 
                 deleteHandler={deleteHandler}
                 changeStatus={changeStatus}
                 /> 
        </div>
        
    )
} 
export default Todos
