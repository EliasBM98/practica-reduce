import React, { useReducer } from 'react'
import { todoReducer } from '../../reducers/todoReducer'
import { TareasList } from '../Tareaslist/TareasList'

import './Todo.css'

export const Todo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [])
 

    const handlerSubmit = (ev) => {
        ev.preventDefault();

        const newTodo = {
            id: Date.now(),
            todo: 'Titulo de la tarea',
            description: 'descripción de la tarea',
            done: true,
            tarea: ev.target.tarea.value
        }
    
    const action={
        type:'[TODO] add todo',
        payload: newTodo
    }
    dispatch(action)

    ev.target.tarea.value = ''
    }

    const onDeleteTodo = (id) =>{
        const action={
            type:'[TODO] delete todo',
            payload: id
        }
    dispatch(action)
    }

    const toggleTodo = (id, done) => {
        const action={
            type: '[TODO] toggle todo',
            payload: {  id, 
                        done}
        }
    dispatch(action)
    }

  return (
    <div>
        <h1>Todo List</h1>
            <form onSubmit={handlerSubmit}>
                <input type="text" id='tarea' name='tarea' placeholder='Tarea' />
                <button type='submit'>Añadir</button>
            </form>

        <h2>Mostrar Tareas</h2>
            {
            <ul>
                {
                    todos.map(todo => (
                    <li key={todo.id}>{todo.tarea} 
                        - <button onClick={() => toggleTodo(todo.id, todo.done)} className='Pendiente'>{todo.done ? 'Pendiente' : 'Completado'}</button>

                        - <button onClick={() => onDeleteTodo(todo.id)}>Eliminar</button> 
                    </li>
                    ))
                }
            </ul> }

    </div>

  )
}



