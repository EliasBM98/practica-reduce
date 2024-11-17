
export const FormAnadir = ({handlerSubmit}) => {
  return (
    <form onSubmit={handlerSubmit}>
        <input type="text" id='tarea' name='tarea' placeholder='Tarea' />
        <button type='submit'>Añadir</button>
    </form>
  )
}
