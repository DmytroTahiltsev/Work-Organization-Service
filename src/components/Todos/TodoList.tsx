import React from 'react'
import { useActions } from '../../hooks/useActions'
import { ITodo, statuses, TodoStatus, TodoStatusEnum } from '../../models/ITodo'
import FiltredTodoList from './FiltredTodoList'
interface TodoListProps {
    deleteHandler: (id: ITodo) => void;
    changeStatus: (todo: ITodo, direction: number) => void;
    todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({todos, deleteHandler, changeStatus}: TodoListProps) => {
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
                    <FiltredTodoList 
                        filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.APPOINTED)}
                        status={TodoStatusEnum.APPOINTED} 
                        borderColor="red" 
                        deleteHandler={deleteHandler}
                        changeStatus={changeStatus}
                        />
                    <FiltredTodoList 
                        filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.IN_PROCCESING)} 
                        status={TodoStatusEnum.IN_PROCCESING} 
                        borderColor="blue" 
                        deleteHandler={deleteHandler}
                        changeStatus={changeStatus}
                        />
                    <FiltredTodoList filtredTodos={todos.filter(todo => todo.status === TodoStatusEnum.DONE)}
                        status={TodoStatusEnum.DONE} 
                        borderColor="green" 
                        deleteHandler={deleteHandler}
                        changeStatus={changeStatus}
                        /> 
                </div>
    )
}
export default TodoList