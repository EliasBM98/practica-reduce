
export const todoReducer = (state=[], action={}) => {

    switch (action.type) {
        case '[TODO] add todo':
            console.log(action.payload)
            return [...state, action.payload]

       case '[TODO] delete todo':
            console.log(action.payload)
            const newState = state.filter(todo => todo.id != action.payload)
            return newState

        case '[TODO] toggle todo':
            console.log(action.payload)
            const toggleState = state.map(todo => todo.id === action.payload.id ? {...todo, done: !todo.done} : todo)
            return toggleState

        default:
            return state

    }

}

/*case '[TODO] toggle todo':
    return (
        state.map(todo => {
            if(todo.id === action.payload) return {...todo, done: !todo.done}
            return todo
        })
    )*/