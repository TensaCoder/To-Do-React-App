import React from 'react'
import '../CSS/TodoItem.css'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h5 className='my-0 p-0'>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className=' btn-completed' onClick={()=>{onDelete(todo)}}>Completed</button>
    </div>
  )
}

export default TodoItem