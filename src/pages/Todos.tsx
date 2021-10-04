import { Layout, Row, Modal, Button } from "antd";
import React, { useEffect, useState } from "react";
import TodoList from "../components/Todos/TodoList";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ITodo, TodoStatus, TodoStatusEnum, statuses} from "../models/ITodo";
import TodoForm from "../components/Todos/TodoForm";
import Loader from "../components/UI/Loader/Loader";


const Todos: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const {todos, executors, isLoadingTodos} = useTypedSelector(state => state.todo)
    const {user} = useTypedSelector(state => state.auth)
    const {fetchTodos, setTodos, fetchExecutors, createTodo} = useActions()
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    }
    const addNewTodo = (todo: ITodo) => {
       createTodo(todo)
    }
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
        setTodos(todos.reduce((acc, elem) => {
            if(elem.id === todo.id){
                const editedTodo : ITodo = {
                    id: todo.id,
                    autor: todo.autor,
                    executor: todo.executor,
                    title: todo.title,
                    description: todo.description,
                    status: status
                }
                return [...acc, editedTodo]
            }
            return [...acc, elem]
        }, [] as ITodo[]))
    }
    useEffect(() => {
        fetchTodos(user.username)
        fetchExecutors()
    }, []) 
    useEffect(() => {
        fetchTodos(user.username)
    }, [todos.length]) 
    return(
        isLoadingTodos
        ?
        <div className="h100">
            <Loader/>
        </div> 
        :
        <Layout>
            <div className="h100" >
                <div style={{display:"flex", justifyContent:"center"}}>
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
                <Row justify="center">
                    <Button onClick={showModal}>Add event</Button>
                </Row>
                <Modal
                    title="Add todo"
                    visible={isModalVisible}
                    footer={null}
                    onCancel={handleCancel}
                >
                    <TodoForm 
                        executors={executors} 
                        submit={addNewTodo}
                    />
                </Modal>
            </div>
        </Layout>
        

        
    )
} 
export default Todos
