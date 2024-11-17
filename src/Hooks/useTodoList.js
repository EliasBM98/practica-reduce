
export const useTodoList = () => {

    const [todos, dispatch] = useReducer(todoRreducer, [], init);


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
