import React from 'react'
import { ITodo, TodoStatus } from '../models/ITodo'
import TodoListItem from './TodoListItem'

interface TodoListProps {
    filtredTodos: ITodo[];
    status: TodoStatus;
    borderColor?: string;
}

const TodoList: React.FC<TodoListProps> = ({filtredTodos, status, borderColor}: TodoListProps) => {
    return(
        <div className="TodoList" style={{border: `1px solid ${borderColor}`}}>
            <span style={{padding: "10px 15px", fontSize: "1.5rem", fontWeight: 800, textAlign: "center"}}>{status}</span>
            {filtredTodos.map(todo =>
                <TodoListItem todo={todo}/>    
            )}
        </div>
    )
}
export default TodoList