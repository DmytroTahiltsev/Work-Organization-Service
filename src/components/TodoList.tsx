import React from 'react'

interface TodoListProps {
    color?: string;
}

const TodoList: React.FC<TodoListProps> = ({color}: TodoListProps) => {
    return(
        <div style={{color}}>11</div>
    )
}
export default TodoList