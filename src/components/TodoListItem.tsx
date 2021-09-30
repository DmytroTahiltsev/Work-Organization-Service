import React from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ITodo } from '../models/ITodo'

interface TodoListItemProps {
    todo: ITodo;
    deleteHandler: (id: number) => void;
    changeStatus: (todo: ITodo, direction: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo, deleteHandler, changeStatus}: TodoListItemProps) => {
    return(
        <div className="TodoList__Item" key={todo.id}>
            <div style={{display:"flex", justifyContent: "flex-start"}}>
                <div style={{fontSize: "1.3rem", fontWeight: 700, marginRight: "20px"}}>
                    {todo.title}
                </div>
                <div style ={{display:"flex"}}>
                    <button onClick={() => deleteHandler(todo.id)}>delete</button>
                    <button onClick={() => changeStatus(todo, -1)}>left</button>
                    <button onClick={() => changeStatus(todo, 1)}>right</button>
                </div>
            </div>
            <div>
                {todo.description}
            </div>
        </div>  
    )
}
export default TodoListItem