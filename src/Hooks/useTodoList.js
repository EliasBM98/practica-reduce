import { useEffect, useReducer } from "react";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodoList = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(()=>{
        localStorage.setItem
    })


    const handleNewTodo = (newTodo) => {
       
    }

    const handleDeleteTodo = (id) => {
      
    }

    const handleToggleTodo = (id) => {
       
    }


    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}
