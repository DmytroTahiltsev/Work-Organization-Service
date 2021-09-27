import React from 'react'
import { ITodo, TodoStatus } from '../models/ITodo'
import TodoListItem from './TodoListItem'

interface TodoListProps {
    filtredTodos: ITodo[];
    status: TodoStatus;
    borderColor?: string;
    deleteHandler: (id: number) => void;
    changeStatus: (todo: ITodo, direction: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({filtredTodos, status, borderColor, deleteHandler, changeStatus}: TodoListProps) => {
    return(
        <div className="TodoList" style={{border: `1px solid ${borderColor}`}}>
            <span style={{padding: "10px 15px", fontSize: "1.5rem", fontWeight: 800, textAlign: "center"}}>{status}</span>
            {filtredTodos.map(todo =>
                <TodoListItem key={todo.id} todo={todo} deleteHandler={deleteHandler} changeStatus={changeStatus} />    
            )}
        </div>
    )
}
export default TodoList