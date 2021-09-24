import React from 'react'
import { ITodo, TodoStatus } from '../models/ITodo'

interface TodoListItemProps {
    todo: ITodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo}: TodoListItemProps) => {
    return(
        <div className="TodoList__Item" key={todo.id}>
            <div style={{display:"flex", justifyContent: "flex-start"}}>
                <div style={{fontSize: "1.3rem", fontWeight: 700, marginRight: "20px"}}>
                    {todo.title}
                </div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
            <div>
                {todo.description}
            </div>
        </div>  
    )
}
export default TodoListItem